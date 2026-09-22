/**
 * HTML -> JSX converter for the site-dump markup.
 *
 * Handles the things a naive `class`->`className` pass misses and that the
 * production build would otherwise reject:
 *   - HTML entities inside ATTRIBUTE values (React renders those literally)
 *   - JSX-reserved attribute names (for, tabindex, srcset, fetchpriority, ...)
 *   - numeric/boolean attribute values that must become expressions
 *   - inline style="..." -> style objects, incl. CSS custom properties
 *   - void elements self-closed
 *   - stray `>` left on their own lines by the HTML formatter
 *
 * Usage: node scripts/html-to-jsx.mjs <file.html> [--range a:b]
 * Prints JSX to stdout. Output still wants a hand pass — this gets ~90%.
 */
import { readFile } from 'node:fs/promises';

const VOID = new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);

const ATTR_RENAME = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', readonly: 'readOnly',
  maxlength: 'maxLength', minlength: 'minLength', autoplay: 'autoPlay',
  playsinline: 'playsInline', autofocus: 'autoFocus', autocomplete: 'autoComplete',
  spellcheck: 'spellCheck', contenteditable: 'contentEditable', crossorigin: 'crossOrigin',
  srcset: 'srcSet', fetchpriority: 'fetchPriority', enctype: 'encType',
  novalidate: 'noValidate', colspan: 'colSpan', rowspan: 'rowSpan', usemap: 'useMap',
  datetime: 'dateTime', formaction: 'formAction', inputmode: 'inputMode',
  charset: 'charSet', accesskey: 'accessKey', frameborder: 'frameBorder',
  allowfullscreen: 'allowFullScreen', marginwidth: 'marginWidth', marginheight: 'marginHeight',
  // SVG
  'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin', 'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset', 'stroke-opacity': 'strokeOpacity',
  'stroke-miterlimit': 'strokeMiterlimit', 'fill-rule': 'fillRule', 'fill-opacity': 'fillOpacity',
  'clip-rule': 'clipRule', 'clip-path': 'clipPath', 'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity', 'text-anchor': 'textAnchor', 'font-family': 'fontFamily',
  'font-size': 'fontSize', 'font-weight': 'fontWeight', 'letter-spacing': 'letterSpacing',
  'dominant-baseline': 'dominantBaseline', 'vector-effect': 'vectorEffect',
  'patternunits': 'patternUnits', 'patternUnits': 'patternUnits',
  'gradientunits': 'gradientUnits', 'gradientUnits': 'gradientUnits',
  'gradienttransform': 'gradientTransform', 'maskunits': 'maskUnits',
  'preserveaspectratio': 'preserveAspectRatio', 'viewbox': 'viewBox',
  'xlink:href': 'xlinkHref', 'shape-rendering': 'shapeRendering',
  'paint-order': 'paintOrder', 'mask-type': 'maskType',
};

// Numeric-valued props React wants as expressions rather than strings.
const NUMERIC = new Set(['tabIndex','rows','cols','maxLength','minLength','size','span','colSpan','rowSpan','start','width','height']);
// Boolean props: `foo="true"` -> bare `foo`.
const BOOLEAN = new Set(['autoPlay','playsInline','muted','loop','controls','disabled','checked','readOnly','required','hidden','autoFocus','noValidate','allowFullScreen','open','multiple','selected','defer','async']);

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', '#39': "'", '#34': '"' };
function decodeEntities(s) {
  return s.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (m, e) => {
    if (ENTITIES[e]) return ENTITIES[e];
    if (e[0] === '#') {
      const n = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      return Number.isFinite(n) ? String.fromCodePoint(n) : m;
    }
    return m;
  });
}

function camel(prop) {
  if (prop.startsWith('--')) return null; // custom property: keep as quoted key
  return prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function styleToObject(raw) {
  const decls = [];
  // split on ';' that aren't inside parens (url(), calc(), var(), gradients)
  let depth = 0, cur = '';
  for (const ch of decodeEntities(raw)) {
    if (ch === '(') depth++;
    else if (ch === ')') depth--;
    if (ch === ';' && depth === 0) { decls.push(cur); cur = ''; } else cur += ch;
  }
  if (cur.trim()) decls.push(cur);

  const pairs = [];
  for (const d of decls) {
    const i = d.indexOf(':');
    if (i < 0) continue;
    const prop = d.slice(0, i).trim();
    const val = d.slice(i + 1).trim();
    if (!prop) continue;
    const key = camel(prop);
    const q = JSON.stringify(val);
    pairs.push(key === null ? `${JSON.stringify(prop)}: ${q}` : `${key}: ${q}`);
  }
  return pairs.length ? `{{ ${pairs.join(', ')} }}` : null;
}

function convertAttrs(raw) {
  const out = [];
  const re = /([:@a-zA-Z_][-:.\w]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;
  let m;
  while ((m = re.exec(raw))) {
    let [, name, dq, sq, bare] = m;
    let value = dq ?? sq ?? bare;

    // drop hydration/build noise
    if (/^(data-dpl-id|data-precedence|data-reactroot)$/.test(name)) continue;

    if (name === 'style' && value != null) {
      const obj = styleToObject(value);
      if (obj) out.push(`style=${obj}`);
      continue;
    }

    const lower = name.toLowerCase();
    let jsxName = ATTR_RENAME[name] ?? ATTR_RENAME[lower] ?? name;
    // on* handlers -> camelCase
    if (/^on[a-z]+$/.test(lower)) jsxName = 'on' + lower[2].toUpperCase() + lower.slice(3);
    // data-*/aria-* keep their dashes
    if (/^(data|aria)-/.test(lower)) jsxName = lower;

    if (value == null) { out.push(jsxName); continue; }

    value = decodeEntities(value);

    if (BOOLEAN.has(jsxName)) {
      if (value === '' || value === 'true' || value === jsxName) { out.push(jsxName); continue; }
      if (value === 'false') continue;
    }
    if (NUMERIC.has(jsxName) && /^-?\d+(\.\d+)?$/.test(value)) {
      out.push(`${jsxName}={${value}}`);
      continue;
    }
    // A value containing braces or quotes needs an expression container.
    if (value.includes('"')) out.push(`${jsxName}={${JSON.stringify(value)}}`);
    else out.push(`${jsxName}="${value}"`);
  }
  return out;
}

function convert(html) {
  let out = '';
  let i = 0;
  const re = /<(\/?)([a-zA-Z][\w:-]*)((?:[^>"']|"[^"]*"|'[^']*')*?)(\/?)>|<!--([\s\S]*?)-->/g;
  let m;
  while ((m = re.exec(html))) {
    // text between tags
    let text = html.slice(i, m.index);
    if (text) {
      // JSX chokes on bare { } in text
      text = text.replace(/[{}]/g, (c) => `{'${c}'}`);
      out += text;
    }
    i = m.index + m[0].length;

    if (m[5] !== undefined) continue; // strip HTML comments (incl. React's <!-- -->)

    const [, closing, tag, attrRaw, selfClose] = m;
    if (closing) { out += `</${tag}>`; continue; }

    const attrs = convertAttrs(attrRaw || '');
    const attrStr = attrs.length ? ' ' + attrs.join(' ') : '';
    if (VOID.has(tag.toLowerCase()) || selfClose) out += `<${tag}${attrStr} />`;
    else out += `<${tag}${attrStr}>`;
  }
  let tail = html.slice(i);
  out += tail.replace(/[{}]/g, (c) => `{'${c}'}`);

  // stray '>' left alone on a line by the HTML formatter
  out = out.replace(/^\s*>\s*$/gm, '');
  return out;
}

const [file, ...rest] = process.argv.slice(2);
let html = await readFile(file, 'utf8');
const range = rest.find((a) => a.startsWith('--range='));
if (range) {
  const [a, b] = range.slice(8).split(':').map(Number);
  html = html.slice(a, b);
}
process.stdout.write(convert(html));
