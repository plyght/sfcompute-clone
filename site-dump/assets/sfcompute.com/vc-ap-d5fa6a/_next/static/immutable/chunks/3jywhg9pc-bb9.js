(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  901737,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(443770),
      a = e.i(389936);
    e.s([
      "ContactLink",
      0,
      function ({ className: e, children: r, onClick: i, ...l }) {
        let { open: o } = (0, n.useContactModal)();
        return (0, t.jsx)("a", {
          href: a.LINKS.contact,
          className: e,
          onClick: (e) => {
            (i?.(e),
              e.defaultPrevented ||
                e.metaKey ||
                e.ctrlKey ||
                e.shiftKey ||
                e.altKey ||
                0 !== e.button ||
                (e.preventDefault(), o()));
          },
          ...l,
          children: r,
        });
      },
    ]);
  },
  752467,
  (e) => {
    e.v({
      answer: "faq-module__FryUKW__answer",
      chev: "faq-module__FryUKW__chev",
      fill: "faq-module__FryUKW__fill",
      head: "faq-module__FryUKW__head",
      item: "faq-module__FryUKW__item",
      list: "faq-module__FryUKW__list",
      panel: "faq-module__FryUKW__panel",
      panelInner: "faq-module__FryUKW__panelInner",
      question: "faq-module__FryUKW__question",
    });
  },
  429015,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(624503),
      a = e.i(856443),
      r = e.i(389936),
      i = e.i(271645),
      l = e.i(752467);
    let o = [
        {
          q: "Is it bare metal? Containers? VMs?",
          a: "Bare metal and managed Slurm for the lowest-level access, and VMs for flexibility.",
        },
        {
          q: "How fast do VMs spin up?",
          a: "Most VMs are ready in well under a minute. Cold starts on uncommon configurations can take a little longer.",
        },
        {
          q: "Are nodes fully-interconnected with InfiniBand?",
          a: "Contact us for a BM or managed Slurm cluster which both support InfiniBand today. We'll support InfiniBand on VMs in Q3 2026.",
        },
        {
          q: "Will the nodes go down?",
          a: "Yes. Hardware failure rates are much higher on GPU clusters than on web servers. At certain scales, they're guaranteed, so we've designed for failure. We have strict hardware requirements and have seen just about everything that can go wrong. Unlike other providers, we refund for failed nodes and can repack your nodes to ones with healthy hardware.",
        },
        {
          q: "What support do you have?",
          a: "Shared Slack channels with our engineers, plus on-call coverage for production clusters. Enterprise plans include a dedicated solutions engineer.",
        },
      ],
      s = 360;
    e.s([
      "Faq",
      0,
      function () {
        let e = (0, i.useRef)(null),
          c = (0, i.useRef)(null),
          u = (0, i.useRef)([]),
          d = (0, i.useRef)(0),
          [h, f] = (0, i.useState)([]),
          [m, p] = (0, i.useState)(null),
          y = (0, i.useCallback)(() => {
            let e = c.current,
              t = null === m ? null : u.current[m];
            e &&
              t &&
              ((e.style.transform = `translateY(${t.offsetTop + 5}px)`),
              (e.style.height = `${Math.max(0, t.offsetHeight - 10)}px`));
          }, [m]),
          v = (0, i.useCallback)(
            (e = s) => {
              cancelAnimationFrame(d.current);
              let t = performance.now(),
                n = (a) => {
                  (y(), a - t < e && (d.current = requestAnimationFrame(n)));
                };
              d.current = requestAnimationFrame(n);
            },
            [y],
          ),
          x = (0, i.useCallback)((e) => {
            (f((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e])), p(e));
          }, []);
        return (
          (0, i.useLayoutEffect)(() => {
            (0 !== h.length || null !== m) && y();
          }, [m, h.length, y]),
          (0, i.useEffect)(() => {
            (0 !== h.length || null !== m) && v();
          }, [m, v, h.length]),
          (0, i.useEffect)(() => {
            let e = () => {
              (y(), v(120));
            };
            return (
              window.addEventListener("resize", e),
              document.fonts?.ready.then(e),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, [v, y]),
          (0, i.useEffect)(
            () => () => {
              cancelAnimationFrame(d.current);
            },
            [],
          ),
          (0, t.jsx)("section", {
            id: "faq",
            className: "scroll-mt-24 pt-12 pb-12",
            children: (0, t.jsxs)("div", {
              className: "px-6 lg:px-8",
              children: [
                (0, t.jsx)("h2", {
                  className: "t-h1 text-ink",
                  children: (0, t.jsx)(a.SectionAnchorTitle, { id: "faq", children: "Frequently asked questions" }),
                }),
                (0, t.jsxs)("p", {
                  className: "t-pl mt-4 mb-10 text-muted",
                  children: [
                    "Everything you need to know about running on SF Compute. Still have questions? ",
                    (0, t.jsx)(n.InlineLink, { href: r.LINKS.contact, children: "Reach out" }),
                    " — we're quick to respond.",
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: l.default.list,
                  "data-active": null === m ? "false" : "true",
                  onPointerLeave: () => p(null),
                  ref: e,
                  children: [
                    (0, t.jsx)("div", { className: l.default.fill, ref: c }),
                    o.map((e, n) => {
                      let a = h.includes(n),
                        r = `faq-trigger-${n}`,
                        i = `faq-panel-${n}`;
                      return (0, t.jsxs)(
                        "div",
                        {
                          className: l.default.item,
                          "data-open": a ? "true" : "false",
                          onFocus: () => p(n),
                          onPointerEnter: () => p(n),
                          ref: (e) => {
                            u.current[n] = e;
                          },
                          children: [
                            (0, t.jsxs)("button", {
                              type: "button",
                              "aria-controls": i,
                              "aria-expanded": a,
                              className: `${l.default.head}`,
                              id: r,
                              onClick: () => x(n),
                              children: [
                                (0, t.jsx)("span", { className: l.default.question, children: e.q }),
                                (0, t.jsxs)("svg", {
                                  className: l.default.chev,
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeWidth: "1.6",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  "aria-hidden": !0,
                                  children: [
                                    (0, t.jsx)("title", { children: "Toggle answer" }),
                                    (0, t.jsx)("polyline", { points: "6 9 12 15 18 9" }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsx)("section", {
                              "aria-labelledby": r,
                              className: l.default.panel,
                              id: i,
                              children: (0, t.jsx)("div", {
                                className: l.default.panelInner,
                                children: (0, t.jsx)("div", { className: l.default.answer, children: e.a }),
                              }),
                            }),
                          ],
                        },
                        e.q,
                      );
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      },
    ]);
  },
  624503,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(901737),
      a = e.i(663277),
      r = e.i(389936);
    let i =
      "box-decoration-clone rounded-[2px] bg-card px-[3px] underline decoration-dark-500/70 underline-offset-[3px] transition-colors [text-decoration-thickness:1px] hover:bg-light-400 hover:text-ink hover:decoration-ink";
    e.s([
      "InlineLink",
      0,
      function ({ href: e, children: l, external: o, className: s, id: c }) {
        if (e === r.LINKS.contact && !o) return (0, t.jsx)(n.ContactLink, { className: (0, a.cn)(i, s), children: l });
        let u = e.startsWith("#")
          ? (t) => {
              if (t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || 0 !== t.button) return;
              let n = document.getElementById(e.slice(1));
              n &&
                (t.preventDefault(),
                n.scrollIntoView({ behavior: "smooth", block: "start" }),
                window.history.pushState(null, "", e));
            }
          : void 0;
        return (0, t.jsx)("a", {
          id: c,
          href: e,
          onClick: u,
          target: o ? "_blank" : void 0,
          rel: o ? "noopener noreferrer" : void 0,
          className: (0, a.cn)(i, s),
          children: l,
        });
      },
    ]);
  },
  558738,
  (e) => {
    e.v((e) => Promise.resolve().then(() => e(881986)));
  },
  856443,
  (e) => {
    "use strict";
    var t = e.i(843476),
      n = e.i(663277),
      a = e.i(271645);
    e.s([
      "SectionAnchorTitle",
      0,
      function ({ id: e, children: r, className: i }) {
        let [l, o] = (0, a.useState)(!1),
          s = async () => {
            let t = `${window.location.origin}${window.location.pathname}#${e}`;
            (window.history.replaceState(null, "", `#${e}`),
              document.getElementById(e)?.scrollIntoView({ behavior: "smooth", block: "start" }));
            let n = !1;
            try {
              (await navigator.clipboard.writeText(t), (n = !0));
            } catch {
              n = (function (e) {
                try {
                  let t = document.createElement("textarea");
                  ((t.value = e),
                    (t.style.position = "fixed"),
                    (t.style.opacity = "0"),
                    document.body.appendChild(t),
                    t.select());
                  let n = document.execCommand("copy");
                  return (document.body.removeChild(t), n);
                } catch {
                  return !1;
                }
              })(t);
            }
            n && (o(!0), setTimeout(() => o(!1), 1400));
          };
        return (0, t.jsxs)("button", {
          type: "button",
          onClick: s,
          title: "Copy link to this section",
          className: (0, n.cn)(
            "group/anchor inline-block rounded-[4px] text-left text-inherit [font:inherit] [letter-spacing:inherit]",
            i,
          ),
          children: [
            r,
            (0, t.jsx)("span", {
              "aria-hidden": !0,
              className:
                "ml-1 font-mono text-[0.7em] text-dark-300 opacity-0 transition-opacity group-hover/anchor:opacity-100 group-focus-visible/anchor:opacity-100",
              children: l ? "✓" : "#",
            }),
          ],
        });
      },
    ]);
  },
]);
