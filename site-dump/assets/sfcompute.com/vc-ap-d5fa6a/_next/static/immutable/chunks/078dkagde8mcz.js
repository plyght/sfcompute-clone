(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  624503,
  (t) => {
    "use strict";
    var e = t.i(843476),
      o = t.i(901737),
      n = t.i(663277),
      i = t.i(389936);
    let r =
      "box-decoration-clone rounded-[2px] bg-card px-[3px] underline decoration-dark-500/70 underline-offset-[3px] transition-colors [text-decoration-thickness:1px] hover:bg-light-400 hover:text-ink hover:decoration-ink";
    t.s([
      "InlineLink",
      0,
      function ({ href: t, children: c, external: a, className: l, id: s }) {
        if (t === i.LINKS.contact && !a) return (0, e.jsx)(o.ContactLink, { className: (0, n.cn)(r, l), children: c });
        let d = t.startsWith("#")
          ? (e) => {
              if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || 0 !== e.button) return;
              let o = document.getElementById(t.slice(1));
              o &&
                (e.preventDefault(),
                o.scrollIntoView({ behavior: "smooth", block: "start" }),
                window.history.pushState(null, "", t));
            }
          : void 0;
        return (0, e.jsx)("a", {
          id: s,
          href: t,
          onClick: d,
          target: a ? "_blank" : void 0,
          rel: a ? "noopener noreferrer" : void 0,
          className: (0, n.cn)(r, l),
          children: c,
        });
      },
    ]);
  },
  856443,
  (t) => {
    "use strict";
    var e = t.i(843476),
      o = t.i(663277),
      n = t.i(271645);
    t.s([
      "SectionAnchorTitle",
      0,
      function ({ id: t, children: i, className: r }) {
        let [c, a] = (0, n.useState)(!1),
          l = async () => {
            let e = `${window.location.origin}${window.location.pathname}#${t}`;
            (window.history.replaceState(null, "", `#${t}`),
              document.getElementById(t)?.scrollIntoView({ behavior: "smooth", block: "start" }));
            let o = !1;
            try {
              (await navigator.clipboard.writeText(e), (o = !0));
            } catch {
              o = (function (t) {
                try {
                  let e = document.createElement("textarea");
                  ((e.value = t),
                    (e.style.position = "fixed"),
                    (e.style.opacity = "0"),
                    document.body.appendChild(e),
                    e.select());
                  let o = document.execCommand("copy");
                  return (document.body.removeChild(e), o);
                } catch {
                  return !1;
                }
              })(e);
            }
            o && (a(!0), setTimeout(() => a(!1), 1400));
          };
        return (0, e.jsxs)("button", {
          type: "button",
          onClick: l,
          title: "Copy link to this section",
          className: (0, o.cn)(
            "group/anchor inline-block rounded-[4px] text-left text-inherit [font:inherit] [letter-spacing:inherit]",
            r,
          ),
          children: [
            i,
            (0, e.jsx)("span", {
              "aria-hidden": !0,
              className:
                "ml-1 font-mono text-[0.7em] text-dark-300 opacity-0 transition-opacity group-hover/anchor:opacity-100 group-focus-visible/anchor:opacity-100",
              children: c ? "✓" : "#",
            }),
          ],
        });
      },
    ]);
  },
]);
