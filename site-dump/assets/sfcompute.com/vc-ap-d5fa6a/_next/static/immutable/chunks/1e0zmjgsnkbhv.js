(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  289768,
  416773,
  731351,
  626151,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(271645),
      r = e.i(379145),
      i = e.i(747734),
      o = e.i(794804),
      a = n,
      s = e.i(709344);
    class l extends a.Component {
      getSnapshotBeforeUpdate(e) {
        let t = this.props.childRef.current;
        if (t && e.isPresent && !this.props.isPresent) {
          let e = this.props.sizeRef.current;
          ((e.height = t.offsetHeight || 0),
            (e.width = t.offsetWidth || 0),
            (e.top = t.offsetTop),
            (e.left = t.offsetLeft));
        }
        return null;
      }
      componentDidUpdate() {}
      render() {
        return this.props.children;
      }
    }
    function u({ children: e, isPresent: n }) {
      let r = (0, a.useId)(),
        i = (0, a.useRef)(null),
        o = (0, a.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
        { nonce: c } = (0, a.useContext)(s.MotionConfigContext);
      return (
        (0, a.useInsertionEffect)(() => {
          let { width: e, height: t, top: a, left: s } = o.current;
          if (n || !i.current || !e || !t) return;
          i.current.dataset.motionPopId = r;
          let l = document.createElement("style");
          return (
            c && (l.nonce = c),
            document.head.appendChild(l),
            l.sheet &&
              l.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            top: ${a}px !important;
            left: ${s}px !important;
          }
        `),
            () => {
              document.head.removeChild(l);
            }
          );
        }, [n]),
        (0, t.jsx)(l, { isPresent: n, childRef: i, sizeRef: o, children: a.cloneElement(e, { ref: i }) })
      );
    }
    let c = ({
      children: e,
      initial: r,
      isPresent: a,
      onExitComplete: s,
      custom: l,
      presenceAffectsLayout: c,
      mode: p,
    }) => {
      let f = (0, i.useConstant)(d),
        m = (0, n.useId)(),
        x = (0, n.useCallback)(
          (e) => {
            for (let t of (f.set(e, !0), f.values())) if (!t) return;
            s && s();
          },
          [f, s],
        ),
        h = (0, n.useMemo)(
          () => ({
            id: m,
            initial: r,
            isPresent: a,
            custom: l,
            onExitComplete: x,
            register: (e) => (f.set(e, !1), () => f.delete(e)),
          }),
          c ? [Math.random(), x] : [a, x],
        );
      return (
        (0, n.useMemo)(() => {
          f.forEach((e, t) => f.set(t, !1));
        }, [a]),
        n.useEffect(() => {
          a || f.size || !s || s();
        }, [a]),
        "popLayout" === p && (e = (0, t.jsx)(u, { isPresent: a, children: e })),
        (0, t.jsx)(o.PresenceContext.Provider, { value: h, children: e })
      );
    };
    function d() {
      return new Map();
    }
    var p = e.i(292296);
    let f = (e) => e.key || "";
    function m(e) {
      let t = [];
      return (
        n.Children.forEach(e, (e) => {
          (0, n.isValidElement)(e) && t.push(e);
        }),
        t
      );
    }
    var x = e.i(836359);
    let h = x.isBrowser ? n.useLayoutEffect : n.useEffect;
    function g(e) {
      if ("u" < typeof Proxy) return e;
      let t = new Map();
      return new Proxy((...t) => e(...t), {
        get: (n, r) => ("create" === r ? e : (t.has(r) || t.set(r, e(r)), t.get(r))),
      });
    }
    (e.s(
      [
        "AnimatePresence",
        0,
        ({
          children: e,
          custom: o,
          initial: a = !0,
          onExitComplete: s,
          presenceAffectsLayout: l = !0,
          mode: u = "sync",
          propagate: d = !1,
        }) => {
          let [x, g] = (0, p.usePresence)(d),
            v = (0, n.useMemo)(() => m(e), [e]),
            y = d && !x ? [] : v.map(f),
            b = (0, n.useRef)(!0),
            C = (0, n.useRef)(v),
            j = (0, i.useConstant)(() => new Map()),
            [w, M] = (0, n.useState)(v),
            [S, P] = (0, n.useState)(v);
          h(() => {
            ((b.current = !1), (C.current = v));
            for (let e = 0; e < S.length; e++) {
              let t = f(S[e]);
              y.includes(t) ? j.delete(t) : !0 !== j.get(t) && j.set(t, !1);
            }
          }, [S, y.length, y.join("-")]);
          let N = [];
          if (v !== w) {
            let e = [...v];
            for (let t = 0; t < S.length; t++) {
              let n = S[t],
                r = f(n);
              y.includes(r) || (e.splice(t, 0, n), N.push(n));
            }
            ("wait" === u && N.length && (e = N), P(m(e)), M(v));
            return;
          }
          let { forceRender: k } = (0, n.useContext)(r.LayoutGroupContext);
          return (0, t.jsx)(t.Fragment, {
            children: S.map((e) => {
              let n = f(e),
                r = (!d || !!x) && (v === S || y.includes(n));
              return (0, t.jsx)(
                c,
                {
                  isPresent: r,
                  initial: (!b.current || !!a) && void 0,
                  custom: r ? void 0 : o,
                  presenceAffectsLayout: l,
                  mode: u,
                  onExitComplete: r
                    ? void 0
                    : () => {
                        if (!j.has(n)) return;
                        j.set(n, !0);
                        let e = !0;
                        (j.forEach((t) => {
                          t || (e = !1);
                        }),
                          e && (null == k || k(), P(C.current), d && (null == g || g()), s && s()));
                      },
                  children: e,
                },
                n,
              );
            }),
          });
        },
      ],
      289768,
    ),
      e.s(["createDOMMotionComponentProxy", 0, g], 416773));
    var v = e.i(696650);
    let y = (0, n.createContext)({});
    var b = e.i(757161),
      C = e.i(464926);
    function j(e) {
      return Array.isArray(e) ? e.join(" ") : e;
    }
    var w = e.i(32659),
      M = e.i(144258);
    let S = Symbol.for("motionComponentSymbol");
    var P = e.i(327507),
      N = e.i(784439),
      k = e.i(272963),
      E = e.i(67992),
      L = e.i(343930),
      T = e.i(141384),
      A = e.i(229596),
      R = e.i(629012),
      V = e.i(196148);
    let O = (e) => (t, r) => {
      let a = (0, n.useContext)(y),
        s = (0, n.useContext)(o.PresenceContext),
        l = () =>
          (function ({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, i, o) {
            let a = {
              latestValues: (function (e, t, n, r) {
                let i = {},
                  o = r(e, {});
                for (let e in o) i[e] = (0, V.resolveMotionValue)(o[e]);
                let { initial: a, animate: s } = e,
                  l = (0, C.isControllingVariants)(e),
                  u = (0, C.isVariantNode)(e);
                t && u && !l && !1 !== e.inherit && (void 0 === a && (a = t.initial), void 0 === s && (s = t.animate));
                let c = !!n && !1 === n.initial,
                  d = (c = c || !1 === a) ? s : a;
                if (d && "boolean" != typeof d && !(0, A.isAnimationControls)(d)) {
                  let t = Array.isArray(d) ? d : [d];
                  for (let n = 0; n < t.length; n++) {
                    let r = (0, R.resolveVariantFromProps)(e, t[n]);
                    if (r) {
                      let { transitionEnd: e, transition: t, ...n } = r;
                      for (let e in n) {
                        let t = n[e];
                        if (Array.isArray(t)) {
                          let e = c ? t.length - 1 : 0;
                          t = t[e];
                        }
                        null !== t && (i[e] = t);
                      }
                      for (let t in e) i[t] = e[t];
                    }
                  }
                }
                return i;
              })(r, i, o, e),
              renderState: t(),
            };
            return (n && ((a.onMount = (e) => n({ props: r, current: e, ...a })), (a.onUpdate = (e) => n(e))), a);
          })(e, t, a, s);
      return r ? l() : (0, i.useConstant)(l);
    };
    var z = e.i(944272),
      F = e.i(809732);
    let D = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
      I = () => ({ ...D(), attrs: {} });
    var U = e.i(217854),
      _ = e.i(108773),
      B = e.i(295532);
    let W = ["x", "y", "width", "height", "cx", "cy", "r"],
      G = {
        useVisualState: O({
          scrapeMotionValuesFromProps: B.scrapeMotionValuesFromProps,
          createRenderState: I,
          onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: i }) => {
            if (!n) return;
            let o = !!e.drag;
            if (!o) {
              for (let e in i)
                if (z.transformProps.has(e)) {
                  o = !0;
                  break;
                }
            }
            if (!o) return;
            let a = !t;
            if (t)
              for (let n = 0; n < W.length; n++) {
                let r = W[n];
                e[r] !== t[r] && (a = !0);
              }
            a &&
              T.frame.read(() => {
                try {
                  r.dimensions = "function" == typeof n.getBBox ? n.getBBox() : n.getBoundingClientRect();
                } catch (e) {
                  r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
                T.frame.render(() => {
                  ((0, F.buildSVGAttrs)(r, i, (0, U.isSVGTag)(n.tagName), e.transformTemplate), (0, _.renderSVG)(n, r));
                });
              });
          },
        }),
      },
      $ = {
        useVisualState: O({
          scrapeMotionValuesFromProps: e.i(545537).scrapeMotionValuesFromProps,
          createRenderState: D,
        }),
      };
    var q = e.i(434552),
      H = e.i(869115),
      K = e.i(917816);
    function X(e, t, n) {
      for (let r in t) (0, H.isMotionValue)(t[r]) || (0, q.isForcedMotionValue)(r, n) || (e[r] = t[r]);
    }
    var J = e.i(353047);
    function Y(e, i) {
      return function (a, { forwardMotionProps: l } = { forwardMotionProps: !1 }) {
        return (function ({
          preloadedFeatures: e,
          createVisualElement: i,
          useRender: a,
          useVisualState: l,
          Component: u,
        }) {
          var c, d;
          function p(e, c) {
            var d;
            let p,
              f = {
                ...(0, n.useContext)(s.MotionConfigContext),
                ...e,
                layoutId: (function ({ layoutId: e }) {
                  let t = (0, n.useContext)(r.LayoutGroupContext).id;
                  return t && void 0 !== e ? t + "-" + e : e;
                })(e),
              },
              { isStatic: m } = f,
              g = (function (e) {
                let { initial: t, animate: r } = (function (e, t) {
                  if ((0, C.isControllingVariants)(e)) {
                    let { initial: t, animate: n } = e;
                    return {
                      initial: !1 === t || (0, b.isVariantLabel)(t) ? t : void 0,
                      animate: (0, b.isVariantLabel)(n) ? n : void 0,
                    };
                  }
                  return !1 !== e.inherit ? t : {};
                })(e, (0, n.useContext)(y));
                return (0, n.useMemo)(() => ({ initial: t, animate: r }), [j(t), j(r)]);
              })(e),
              M = l(e, m);
            if (!m && x.isBrowser) {
              (0, n.useContext)(v.LazyContext).strict;
              let e = (function (e) {
                let { drag: t, layout: n } = w.featureDefinitions;
                if (!t && !n) return {};
                let r = { ...t, ...n };
                return {
                  MeasureLayout:
                    (null == t ? void 0 : t.isEnabled(e)) || (null == n ? void 0 : n.isEnabled(e))
                      ? r.MeasureLayout
                      : void 0,
                  ProjectionNode: r.ProjectionNode,
                };
              })(f);
              ((p = e.MeasureLayout),
                (g.visualElement = (function (e, t, r, i, a) {
                  var l, u;
                  let { visualElement: c } = (0, n.useContext)(y),
                    d = (0, n.useContext)(v.LazyContext),
                    p = (0, n.useContext)(o.PresenceContext),
                    f = (0, n.useContext)(s.MotionConfigContext).reducedMotion,
                    m = (0, n.useRef)(null);
                  ((i = i || d.renderer),
                    !m.current &&
                      i &&
                      (m.current = i(e, {
                        visualState: t,
                        parent: c,
                        props: r,
                        presenceContext: p,
                        blockInitialAnimation: !!p && !1 === p.initial,
                        reducedMotionConfig: f,
                      })));
                  let x = m.current,
                    g = (0, n.useContext)(E.SwitchLayoutGroupContext);
                  x &&
                    !x.projection &&
                    a &&
                    ("html" === x.type || "svg" === x.type) &&
                    (function (e, t, n, r) {
                      let { layoutId: i, layout: o, drag: a, dragConstraints: s, layoutScroll: l, layoutRoot: u } = t;
                      ((e.projection = new n(
                        e.latestValues,
                        t["data-framer-portal-id"]
                          ? void 0
                          : (function e(t) {
                              if (t) return !1 !== t.options.allowProjection ? t.projection : e(t.parent);
                            })(e.parent),
                      )),
                        e.projection.setOptions({
                          layoutId: i,
                          layout: o,
                          alwaysMeasureLayout: !!a || (s && (0, P.isRefObject)(s)),
                          visualElement: e,
                          animationType: "string" == typeof o ? o : "both",
                          initialPromotionConfig: r,
                          layoutScroll: l,
                          layoutRoot: u,
                        }));
                    })(m.current, r, a, g);
                  let b = (0, n.useRef)(!1);
                  (0, n.useInsertionEffect)(() => {
                    x && b.current && x.update(r, p);
                  });
                  let C = r[N.optimizedAppearDataAttribute],
                    j = (0, n.useRef)(
                      !!C &&
                        !(null == (l = window.MotionHandoffIsComplete) ? void 0 : l.call(window, C)) &&
                        (null == (u = window.MotionHasOptimisedAnimation) ? void 0 : u.call(window, C)),
                    );
                  return (
                    h(() => {
                      x &&
                        ((b.current = !0),
                        (window.MotionIsMounted = !0),
                        x.updateFeatures(),
                        k.microtask.render(x.render),
                        j.current && x.animationState && x.animationState.animateChanges());
                    }),
                    (0, n.useEffect)(() => {
                      x &&
                        (!j.current && x.animationState && x.animationState.animateChanges(),
                        j.current &&
                          (queueMicrotask(() => {
                            var e;
                            null == (e = window.MotionHandoffMarkAsComplete) || e.call(window, C);
                          }),
                          (j.current = !1)));
                    }),
                    x
                  );
                })(u, M, f, i, e.ProjectionNode)));
            }
            return (0, t.jsxs)(y.Provider, {
              value: g,
              children: [
                p && g.visualElement ? (0, t.jsx)(p, { visualElement: g.visualElement, ...f }) : null,
                a(
                  u,
                  e,
                  ((d = g.visualElement),
                  (0, n.useCallback)(
                    (e) => {
                      (e && M.onMount && M.onMount(e),
                        d && (e ? d.mount(e) : d.unmount()),
                        c && ("function" == typeof c ? c(e) : (0, P.isRefObject)(c) && (c.current = e)));
                    },
                    [d],
                  )),
                  M,
                  m,
                  g.visualElement,
                ),
              ],
            });
          }
          (e && (0, M.loadFeatures)(e),
            (p.displayName = `motion.${"string" == typeof u ? u : `create(${null != (d = null != (c = u.displayName) ? c : u.name) ? d : ""})`}`));
          let f = (0, n.forwardRef)(p);
          return ((f[S] = u), f);
        })({
          ...((0, L.isSVGComponent)(a) ? G : $),
          preloadedFeatures: e,
          useRender: (function (e = !1) {
            return (t, r, i, { latestValues: o }, a) => {
              let s = (
                  (0, L.isSVGComponent)(t)
                    ? function (e, t, r, i) {
                        let o = (0, n.useMemo)(() => {
                          let n = I();
                          return (
                            (0, F.buildSVGAttrs)(n, t, (0, U.isSVGTag)(i), e.transformTemplate),
                            { ...n.attrs, style: { ...n.style } }
                          );
                        }, [t]);
                        if (e.style) {
                          let t = {};
                          (X(t, e.style, e), (o.style = { ...t, ...o.style }));
                        }
                        return o;
                      }
                    : function (e, t) {
                        let r,
                          i,
                          o = {},
                          a =
                            ((r = e.style || {}),
                            X((i = {}), r, e),
                            Object.assign(
                              i,
                              (function ({ transformTemplate: e }, t) {
                                return (0, n.useMemo)(() => {
                                  let n = D();
                                  return ((0, K.buildHTMLStyles)(n, t, e), Object.assign({}, n.vars, n.style));
                                }, [t]);
                              })(e, t),
                            ),
                            i);
                        return (
                          e.drag &&
                            !1 !== e.dragListener &&
                            ((o.draggable = !1),
                            (a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none"),
                            (a.touchAction = !0 === e.drag ? "none" : `pan-${"x" === e.drag ? "y" : "x"}`)),
                          void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (o.tabIndex = 0),
                          (o.style = a),
                          o
                        );
                      }
                )(r, o, a, t),
                l = (0, J.filterProps)(r, "string" == typeof t, e),
                u = t !== n.Fragment ? { ...l, ...s, ref: i } : {},
                { children: c } = r,
                d = (0, n.useMemo)(() => ((0, H.isMotionValue)(c) ? c.get() : c), [c]);
              return (0, n.createElement)(t, { ...u, children: d });
            };
          })(l),
          createVisualElement: i,
          Component: a,
        });
      };
    }
    e.s(["createMotionComponentFactory", 0, Y], 731351);
    let Q = g(Y());
    e.s(["m", 0, Q], 626151);
  },
  740671,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(271645),
      r = e.i(696650),
      i = e.i(144258);
    function o(e) {
      return "function" == typeof e;
    }
    e.s([
      "LazyMotion",
      0,
      function ({ children: e, features: a, strict: s = !1 }) {
        let [, l] = (0, n.useState)(!o(a)),
          u = (0, n.useRef)(void 0);
        if (!o(a)) {
          let { renderer: e, ...t } = a;
          ((u.current = e), (0, i.loadFeatures)(t));
        }
        return (
          (0, n.useEffect)(() => {
            o(a) &&
              a().then(({ renderer: e, ...t }) => {
                ((0, i.loadFeatures)(t), (u.current = e), l(!0));
              });
          }, []),
          (0, t.jsx)(r.LazyContext.Provider, { value: { renderer: u.current, strict: s }, children: e })
        );
      },
    ]);
  },
  696650,
  144258,
  (e) => {
    "use strict";
    let t = (0, e.i(271645).createContext)({ strict: !1 });
    e.s(["LazyContext", 0, t], 696650);
    var n = e.i(32659);
    e.s(
      [
        "loadFeatures",
        0,
        function (e) {
          for (let t in e) n.featureDefinitions[t] = { ...n.featureDefinitions[t], ...e[t] };
        },
      ],
      144258,
    );
  },
  709344,
  (e) => {
    "use strict";
    let t = (0, e.i(271645).createContext)({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: "never" });
    e.s(["MotionConfigContext", 0, t]);
  },
  353047,
  (e) => {
    "use strict";
    let t = new Set([
      "animate",
      "exit",
      "variants",
      "initial",
      "style",
      "values",
      "variants",
      "transition",
      "transformTemplate",
      "custom",
      "inherit",
      "onBeforeLayoutMeasure",
      "onAnimationStart",
      "onAnimationComplete",
      "onUpdate",
      "onDragStart",
      "onDrag",
      "onDragEnd",
      "onMeasureDragConstraints",
      "onDirectionLock",
      "onDragTransitionEnd",
      "_dragX",
      "_dragY",
      "onHoverStart",
      "onHoverEnd",
      "onViewportEnter",
      "onViewportLeave",
      "globalTapTarget",
      "ignoreStrict",
      "viewport",
    ]);
    function n(e) {
      return (
        e.startsWith("while") ||
        (e.startsWith("drag") && "draggable" !== e) ||
        e.startsWith("layout") ||
        e.startsWith("onTap") ||
        e.startsWith("onPan") ||
        e.startsWith("onLayout") ||
        t.has(e)
      );
    }
    let r = (e) => !n(e);
    function i(e) {
      e && (r = (t) => (t.startsWith("on") ? !n(t) : e(t)));
    }
    try {
      i(
        (() => {
          let e = Error("Cannot find module '@emotion/is-prop-valid'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        })().default,
      );
    } catch (e) {}
    e.s(
      [
        "filterProps",
        0,
        function (e, t, i) {
          let o = {};
          for (let a in e)
            ("values" !== a || "object" != typeof e.values) &&
              (r(a) || (!0 === i && n(a)) || (!t && !n(a)) || (e.draggable && a.startsWith("onDrag"))) &&
              (o[a] = e[a]);
          return o;
        },
        "loadExternalIsValidProp",
        0,
        i,
      ],
      353047,
    );
  },
  747734,
  (e) => {
    "use strict";
    var t = e.i(271645);
    e.s([
      "useConstant",
      0,
      function (e) {
        let n = (0, t.useRef)(null);
        return (null === n.current && (n.current = e()), n.current);
      },
    ]);
  },
  95187,
  (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var r = {
      callServer: function () {
        return o.callServer;
      },
      createServerReference: function () {
        return s.createServerReference;
      },
      findSourceMapURL: function () {
        return a.findSourceMapURL;
      },
    };
    for (var i in r) Object.defineProperty(n, i, { enumerable: !0, get: r[i] });
    let o = e.r(132120),
      a = e.r(92245),
      s = e.r(235326);
  },
  443770,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(793058),
      r = e.i(289768),
      i = e.i(271645);
    let o = (0, i.createContext)(null);
    e.s([
      "ContactModalProvider",
      0,
      function ({ children: e }) {
        let [a, s] = (0, i.useState)(!1),
          l = (0, i.useCallback)(() => s(!0), []),
          u = (0, i.useCallback)(() => s(!1), []),
          c = (0, i.useMemo)(() => ({ isOpen: a, open: l, close: u }), [a, l, u]);
        return (0, t.jsxs)(o.Provider, {
          value: c,
          children: [e, (0, t.jsx)(r.AnimatePresence, { children: a && (0, t.jsx)(n.ContactOverlay, { onClose: u }) })],
        });
      },
      "useContactModal",
      0,
      function () {
        let e = (0, i.useContext)(o);
        if (!e) throw Error("useContactModal must be used within a ContactModalProvider");
        return e;
      },
    ]);
  },
  793058,
  620297,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(95187);
    let r = (0, n.createServerReference)(
      "40d3ae090b8b033f3e1327e0d269c7fb2eba7854a1",
      n.callServer,
      void 0,
      n.findSourceMapURL,
      "sendContactMessage",
    );
    var i = e.i(14270),
      o = e.i(588745),
      a = e.i(881986),
      s = e.i(663277),
      l = e.i(389936),
      u = e.i(289768),
      c = e.i(626151),
      d = e.i(522016),
      p = e.i(271645);
    let f = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    function m({ className: e, onSuccess: n }) {
      let [x, h] = (0, p.useState)(""),
        [g, v] = (0, p.useState)(""),
        [y, b] = (0, p.useState)(""),
        [C, j] = (0, p.useState)(""),
        [w, M] = (0, p.useState)(!1),
        [S, P] = (0, p.useState)(),
        [N, k] = (0, p.useState)(null),
        E = "sending" === N,
        L = w && !E;
      async function T(e) {
        if ((e.preventDefault(), !w)) return;
        if (!f.test(g.trim())) return void P("Enter a valid email address.");
        (P(void 0), k("sending"));
        let t = await r({
          name: x,
          email: g,
          company: y,
          message: C,
          referrer: "u" > typeof document && document.referrer ? document.referrer : void 0,
        });
        t.ok
          ? (h(""), v(""), b(""), j(""), M(!1), n ? (k(null), n()) : k("success"))
          : (P(t.fieldErrors?.email), k("error"));
      }
      return (0, t.jsxs)("form", {
        onSubmit: T,
        noValidate: !0,
        className: (0, s.cn)("flex flex-col gap-[24px]", e),
        children: [
          (0, t.jsxs)("div", {
            className: "flex flex-col gap-[20px] lg:flex-row",
            children: [
              (0, t.jsx)(i.TextField, { label: "Name", name: "name", autoComplete: "name", value: x, onChange: h }),
              (0, t.jsx)(i.TextField, {
                label: "Email*",
                name: "email",
                type: "email",
                inputMode: "email",
                autoComplete: "email",
                required: !0,
                value: g,
                onChange: (e) => {
                  (v(e), S && P(void 0));
                },
                error: S,
              }),
            ],
          }),
          (0, t.jsx)(i.TextField, {
            label: "Company",
            name: "company",
            autoComplete: "organization",
            value: y,
            onChange: b,
          }),
          (0, t.jsx)(i.TextAreaField, { label: "Message", name: "message", value: C, onChange: j }),
          (0, t.jsxs)("div", {
            className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
            children: [
              (0, t.jsx)(i.Checkbox, {
                checked: w,
                onChange: M,
                label: "Agree to the Privacy Policy",
                children: (0, t.jsxs)("span", {
                  className: "block max-w-[201px]",
                  children: [
                    "By submitting this form, you agree to our",
                    " ",
                    (0, t.jsx)(d.default, {
                      href: l.LINKS.privacyPolicy,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      onClick: (e) => e.stopPropagation(),
                      className: "underline underline-offset-2 transition-colors hover:text-dark-600",
                      children: "Privacy Policy",
                    }),
                    ".",
                  ],
                }),
              }),
              (0, t.jsx)("button", {
                type: "submit",
                disabled: !L,
                className:
                  "t-pl flex h-[40px] w-full items-center justify-center rounded-[8px] border border-line bg-light-300 px-[16px] py-[8px] text-dark-600 transition-colors hover:bg-light-400 disabled:cursor-not-allowed disabled:opacity-50 lg:w-auto",
                children: "Submit",
              }),
            ],
          }),
          (0, t.jsx)(u.AnimatePresence, {
            children:
              N &&
              (0, t.jsx)(c.m.div, {
                initial: { opacity: 0, y: 8 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 8 },
                transition: { duration: 0.2, ease: a.easeOut },
                children: (0, t.jsx)(o.FormToast, { status: N }),
              }),
          }),
        ],
      });
    }
    function x({ onClose: e, onSuccess: n, className: r }) {
      return (0, t.jsxs)("div", {
        className: (0, s.cn)(
          "flex max-h-[calc(100dvh-32px)] w-[480px] max-w-full flex-col overflow-clip rounded-[12px] border-[3px] border-line bg-page shadow-[0px_0px_16px_0px_rgba(0,0,0,0.09)]",
          r,
        ),
        children: [
          (0, t.jsxs)("div", {
            className: "flex shrink-0 items-center justify-between border-b border-line px-[14px] py-[10px]",
            children: [
              (0, t.jsx)("span", { className: "t-ps text-dark-600", children: "Contact us" }),
              (0, t.jsx)("button", {
                type: "button",
                onClick: e,
                className: "t-ps rounded-[2px] text-dark-300 transition-colors hover:text-dark-600",
                children: "Close",
              }),
            ],
          }),
          (0, t.jsx)("div", {
            className: "min-h-0 flex-1 overflow-y-auto px-[20px] py-[24px]",
            children: (0, t.jsx)(m, { onSuccess: n }),
          }),
        ],
      });
    }
    var h = e.i(895892),
      g = e.i(326999),
      v = e.i(991918);
    let y = (0, e.i(475254).default)("x", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]),
      b = g.Root,
      C = g.Trigger,
      j = g.Title,
      w = g.Close;
    function M({ className: e, children: n, hideCloseButton: r = !1, overlayClassName: i, forceMount: o, ...a }) {
      return (0, t.jsxs)(g.Portal, {
        forceMount: o,
        children: [
          (0, t.jsx)(g.Overlay, {
            forceMount: o,
            className: (0, s.cn)(
              "fixed inset-0 z-50 bg-dark-900/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              i,
            ),
          }),
          (0, t.jsxs)(g.Content, {
            forceMount: o,
            className: (0, s.cn)(
              "fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-line bg-page shadow-lg outline-none",
              e,
            ),
            ...a,
            children: [
              (0, t.jsx)(v.Slottable, { children: n }),
              !r &&
                (0, t.jsx)(g.Close, {
                  className: "absolute top-4 right-4 text-dark-500 hover:text-ink",
                  children: (0, t.jsx)(y, { className: "size-4" }),
                }),
            ],
          }),
        ],
      });
    }
    e.s(
      ["Dialog", 0, b, "DialogClose", 0, w, "DialogContent", 0, M, "DialogTitle", 0, j, "DialogTrigger", 0, C],
      620297,
    );
    let S = { type: "spring", stiffness: 520, damping: 44 };
    e.s(
      [
        "ContactOverlay",
        0,
        function ({ onClose: e }) {
          let [n, r] = (0, p.useState)(!1),
            [i, s] = (0, p.useState)(!1),
            [f, g] = (0, p.useState)(!0),
            [v, C] = (0, p.useState)(!0),
            w = (0, p.useRef)(!1),
            P = (0, p.useCallback)(() => {
              w.current || n || ((w.current = !0), s(!0), g(!1), window.setTimeout(e, 360));
            }, [n, e]),
            N = (0, p.useCallback)(() => {
              (r(!0), g(!1), window.setTimeout(() => C(!1), 360), window.setTimeout(() => e(), 3200));
            }, [e]),
            k = !n && !i;
          return (0, t.jsxs)(h.MotionProvider, {
            children: [
              v &&
                (0, t.jsx)(b, {
                  open: f,
                  onOpenChange: (e) => {
                    e || P();
                  },
                  children: (0, t.jsxs)(M, {
                    forceMount: !0,
                    hideCloseButton: !0,
                    "aria-describedby": void 0,
                    overlayClassName: "bg-transparent",
                    className:
                      "!pointer-events-none fixed inset-0 z-50 h-full w-full max-w-none translate-x-0 translate-y-0 rounded-none border-0 bg-transparent p-0 shadow-none",
                    children: [
                      (0, t.jsx)(j, { className: "sr-only", children: "Contact us" }),
                      (0, t.jsxs)("div", {
                        className: "pointer-events-none fixed inset-0 z-50 hidden lg:block",
                        children: [
                          (0, t.jsx)(u.AnimatePresence, {
                            children:
                              k &&
                              (0, t.jsx)(
                                c.m.div,
                                {
                                  "aria-hidden": !0,
                                  initial: { opacity: 0 },
                                  animate: { opacity: 1 },
                                  exit: { opacity: 0 },
                                  transition: { duration: 0.2 },
                                  className:
                                    "pointer-events-none absolute inset-0 cursor-default bg-page/70 backdrop-blur-[1px]",
                                },
                                "veil",
                              ),
                          }),
                          (0, t.jsxs)("div", {
                            className: "mx-auto flex h-full w-full max-w-[1248px] justify-center",
                            children: [
                              (0, t.jsx)("div", { className: "w-[224px] shrink-0" }),
                              (0, t.jsx)("div", {
                                className: "relative flex min-w-0 flex-1 items-center justify-center lg:max-w-[800px]",
                                children: (0, t.jsx)(u.AnimatePresence, {
                                  children:
                                    k &&
                                    (0, t.jsx)(
                                      c.m.div,
                                      {
                                        initial: { opacity: 0, y: 8, scale: 0.98 },
                                        animate: { opacity: 1, y: 0, scale: 1 },
                                        exit: { opacity: 0, y: 8, scale: 0.98 },
                                        transition: { duration: 0.24, ease: a.easeOut },
                                        className:
                                          "pointer-events-auto relative z-10 w-[480px] max-w-[calc(100%-32px)]",
                                        children: (0, t.jsx)(x, { onClose: P, onSuccess: N }),
                                      },
                                      "card",
                                    ),
                                }),
                              }),
                              (0, t.jsx)("div", { className: "w-[224px] shrink-0" }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "pointer-events-none fixed inset-0 z-50 lg:hidden",
                        children: [
                          (0, t.jsx)(u.AnimatePresence, {
                            children:
                              k &&
                              (0, t.jsxs)(
                                c.m.header,
                                {
                                  initial: { opacity: 0 },
                                  animate: { opacity: 1 },
                                  exit: { opacity: 0 },
                                  transition: { duration: 0.2 },
                                  className:
                                    "pointer-events-auto absolute inset-x-0 top-0 z-20 flex items-center justify-between bg-page px-6 py-4",
                                  children: [
                                    (0, t.jsx)(d.default, {
                                      href: l.LINKS.home,
                                      "aria-label": "SF Compute home",
                                      children: (0, t.jsx)("img", {
                                        src: "/home/logo-wordmark.svg",
                                        alt: "SF Compute",
                                        width: 92,
                                        height: 16,
                                        className: "h-4 w-auto",
                                      }),
                                    }),
                                    (0, t.jsx)("button", {
                                      type: "button",
                                      "aria-label": "Close contact form",
                                      onClick: P,
                                      className: "flex size-6 items-center justify-center text-ink",
                                      children: (0, t.jsx)(y, { className: "size-[18px]", strokeWidth: 1.5 }),
                                    }),
                                  ],
                                },
                                "bar",
                              ),
                          }),
                          (0, t.jsx)(u.AnimatePresence, {
                            children:
                              k &&
                              (0, t.jsx)(
                                c.m.div,
                                {
                                  "aria-hidden": !0,
                                  initial: { opacity: 0 },
                                  animate: { opacity: 1 },
                                  exit: { opacity: 0 },
                                  transition: { duration: 0.2 },
                                  className:
                                    "pointer-events-none absolute inset-x-0 top-[56px] bottom-0 cursor-default bg-dark-900/15 backdrop-blur-[10px]",
                                },
                                "scrim",
                              ),
                          }),
                          (0, t.jsx)(u.AnimatePresence, {
                            children:
                              k &&
                              (0, t.jsxs)(
                                c.m.div,
                                {
                                  initial: { y: "100%" },
                                  animate: { y: 0, transition: S },
                                  exit: { y: "100%", transition: { ...S, damping: 50 } },
                                  className:
                                    "pointer-events-auto absolute inset-x-0 bottom-0 z-10 max-h-[calc(100svh-64px)] overflow-y-auto rounded-t-[24px] bg-page px-6 pt-[18px] pb-10",
                                  children: [
                                    (0, t.jsx)("div", { className: "mx-auto h-1 w-[100px] rounded-full bg-light-600" }),
                                    (0, t.jsx)("h2", {
                                      className: "t-pl mt-[28px] mb-6 text-center text-dark-600",
                                      children: "Contact us",
                                    }),
                                    (0, t.jsx)(m, { onSuccess: N }),
                                  ],
                                },
                                "sheet",
                              ),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              (0, t.jsx)(u.AnimatePresence, {
                children:
                  n &&
                  !v &&
                  (0, t.jsx)(
                    c.m.output,
                    {
                      role: "status",
                      "aria-live": "polite",
                      initial: { y: 80, opacity: 0 },
                      animate: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 420, damping: 36 } },
                      exit: { y: 80, opacity: 0 },
                      className: "pointer-events-none fixed inset-x-0 bottom-8 z-[60] flex justify-center px-4",
                      children: (0, t.jsx)("div", {
                        className: "w-[325px] max-w-full",
                        children: (0, t.jsx)(o.FormToast, { status: "success" }),
                      }),
                    },
                    "toast",
                  ),
              }),
            ],
          });
        },
      ],
      793058,
    );
  },
  895892,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(740671),
      r = e.i(271645),
      i = e.i(709344),
      o = e.i(353047),
      a = e.i(747734);
    function s({ children: e, isValidProp: n, ...l }) {
      (n && (0, o.loadExternalIsValidProp)(n),
        ((l = { ...(0, r.useContext)(i.MotionConfigContext), ...l }).isStatic = (0, a.useConstant)(() => l.isStatic)));
      let u = (0, r.useMemo)(() => l, [JSON.stringify(l.transition), l.transformPagePoint, l.reducedMotion]);
      return (0, t.jsx)(i.MotionConfigContext.Provider, { value: u, children: e });
    }
    let l = () => e.A(743962).then((e) => e.default);
    e.s(
      [
        "MotionPreferencesProvider",
        0,
        function ({ children: e }) {
          return (0, t.jsx)(s, { reducedMotion: "user", children: e });
        },
        "MotionProvider",
        0,
        function ({ children: e }) {
          return (0, t.jsx)(n.LazyMotion, { features: l, children: e });
        },
      ],
      895892,
    );
  },
  389936,
  (e) => {
    "use strict";
    (e.i(247167).default.env.NEXT_PUBLIC_SITE_URL,
      e.s([
        "INSTALL_COMMAND",
        0,
        "curl -fsSL https://cli.sfcompute.com | bash",
        "LINKS",
        0,
        {
          home: "/",
          prices: "/prices",
          specs: "/specs",
          about: "/about",
          news: "/news",
          newsRss: "/news/rss.xml",
          changelog: "/changelog",
          contact: "/contact",
          requirements: "/requirements",
          careers: "/#careers",
          faq: "/specs#faq",
          buy: "/dashboard",
          signup: "/dashboard",
          signin: "/auth/sign-in",
          dashboard: "/dashboard",
          legal: "/legal/terms-of-service",
          termsOfService: "/legal/terms-of-service",
          sla: "/legal/sla",
          acceptableUsePolicy: "/legal/acceptable-use-policy",
          privacyPolicy: "/legal/privacy-policy",
          dpa: "/legal/dpa",
          autoresearch: "https://autoresearch.sfcompute.com",
          docs: "https://docs.sfcompute.com",
          docsCliInstall: "https://docs.sfcompute.com/current/introduction#install-the-cli",
          docsNodes: "https://docs.sfcompute.com/current/nodes",
          status: "https://status.sfcompute.com",
          jobs: "https://jobs.ashbyhq.com/sfcompute",
          github: "https://github.com/sfcompute/cli",
          githubOrg: "https://github.com/sfcompute",
          twitter: "https://twitter.com/sfcompute",
          x: "https://x.com/sfcompute",
          linkedin: "https://www.linkedin.com/company/sfcompute/",
        },
      ]));
  },
]);
