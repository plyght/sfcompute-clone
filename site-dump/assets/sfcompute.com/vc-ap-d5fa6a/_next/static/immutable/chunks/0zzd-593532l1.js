(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  901737,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(443770),
      i = e.i(389936);
    e.s([
      "ContactLink",
      0,
      function ({ className: e, children: a, onClick: n, ...l }) {
        let { open: s } = (0, r.useContactModal)();
        return (0, t.jsx)("a", {
          href: i.LINKS.contact,
          className: e,
          onClick: (e) => {
            (n?.(e),
              e.defaultPrevented ||
                e.metaKey ||
                e.ctrlKey ||
                e.shiftKey ||
                e.altKey ||
                0 !== e.button ||
                (e.preventDefault(), s()));
          },
          ...l,
          children: a,
        });
      },
    ]);
  },
  152826,
  (e) => {
    e.v((t) =>
      Promise.all(
        ["static/immutable/chunks/2meeqs1ht7u_r.js", "static/immutable/chunks/248gina9wjxas.js"].map((t) => e.l(t)),
      ).then(() => t(963452)),
    );
  },
  514539,
  (e) => {
    e.v({
      cat: "careers-roles-module__I1kqha__cat",
      fill: "careers-roles-module__I1kqha__fill",
      list: "careers-roles-module__I1kqha__list",
      row: "careers-roles-module__I1kqha__row",
      title: "careers-roles-module__I1kqha__title",
    });
  },
  430637,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(271645),
      i = e.i(514539);
    e.s([
      "CareersRoles",
      0,
      function ({ jobs: e }) {
        let a = (0, r.useRef)(null),
          n = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
          let e = a.current,
            t = n.current;
          if (!e || !t) return;
          let r = [...e.querySelectorAll(`.${i.default.row}`)],
            l = (e) => {
              t.style.transform = `translateY(${e.offsetTop + 5}px)`;
            },
            s = [];
          r.forEach((r) => {
            let i = () => {
              if ("true" !== e.dataset.active) {
                let i = t.style.transition;
                ((t.style.transition = "opacity 0.18s ease"),
                  l(r),
                  t.offsetHeight,
                  (t.style.transition = i),
                  (e.dataset.active = "true"));
              } else l(r);
            };
            (r.addEventListener("pointerenter", i), s.push(() => r.removeEventListener("pointerenter", i)));
          });
          let o = () => {
            e.dataset.active = "false";
          };
          return (
            e.addEventListener("pointerleave", o),
            () => {
              for (let e of s) e();
              e.removeEventListener("pointerleave", o);
            }
          );
        }, [e]);
        let l = e.length > 0 && e.some((t) => t.department !== e[0]?.department);
        return (0, t.jsxs)("div", {
          children: [
            (0, t.jsx)("p", { className: "t-pm mb-3 text-dark-200", children: "Open roles" }),
            (0, t.jsxs)("div", {
              className: i.default.list,
              ref: a,
              children: [
                (0, t.jsx)("div", { className: i.default.fill, ref: n }),
                0 === e.length
                  ? (0, t.jsx)("div", {
                      className: i.default.row,
                      children: (0, t.jsx)("span", {
                        className: i.default.title,
                        children: "No openings right now — check back soon.",
                      }),
                    })
                  : e.map((e) =>
                      (0, t.jsxs)(
                        "a",
                        {
                          href: e.jobUrl,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: i.default.row,
                          children: [
                            (0, t.jsx)("span", { className: i.default.title, children: e.title }),
                            l && (0, t.jsx)("span", { className: i.default.cat, children: e.department }),
                          ],
                        },
                        e.id,
                      ),
                    ),
              ],
            }),
          ],
        });
      },
    ]);
  },
  488287,
  (e) => {
    e.v({
      card: "careers-module__dH8buG__card",
      dragging: "careers-module__dH8buG__dragging",
      photo: "careers-module__dH8buG__photo",
      scroller: "careers-module__dH8buG__scroller",
      track: "careers-module__dH8buG__track",
    });
  },
  972177,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(663277),
      i = e.i(657688),
      a = e.i(271645),
      n = e.i(488287);
    let l = [
      { src: "/home/careers/whiteboard.jpg", alt: "Whiteboarding a problem", width: 800, height: 706 },
      { src: "/home/careers/golden-gate.jpg", alt: "The Golden Gate Bridge in the fog", width: 800, height: 800 },
      {
        src: "/home/careers/silicon-valley-map.jpg",
        alt: "A teammate with a Silicon Valley map",
        width: 800,
        height: 800,
      },
      { src: "/home/careers/team-group.jpg", alt: "The SF Compute team", width: 800, height: 800 },
      { src: "/home/careers/office-desks.jpg", alt: "Working in the San Francisco office", width: 777, height: 800 },
      { src: "/home/careers/cake-cutting.jpg", alt: "Cutting a raspberry cake in the office", width: 533, height: 800 },
      { src: "/home/careers/standing-desk.jpg", alt: "A teammate at a standing desk", width: 800, height: 533 },
      { src: "/home/careers/team-patches.jpg", alt: "Embroidered team patches", width: 533, height: 800 },
      {
        src: "/home/careers/marin-headlands.jpg",
        alt: "The Marin Headlands from the Golden Gate Bridge",
        width: 533,
        height: 800,
      },
      {
        src: "/home/careers/merch-shelf.jpg",
        alt: "Shelves of San Francisco Compute Company sweatshirts",
        width: 533,
        height: 800,
      },
      { src: "/home/careers/dolores-park.jpg", alt: "A picnic in Dolores Park", width: 533, height: 800 },
      { src: "/home/careers/chinatown.jpg", alt: "Dim sum sign in Chinatown", width: 533, height: 800 },
      { src: "/home/careers/birthday-cake.jpg", alt: "Celebrating a birthday in the office", width: 800, height: 533 },
    ];
    e.s([
      "CareersCarousel",
      0,
      function ({ className: e }) {
        let s = (0, a.useRef)(null),
          o = (0, a.useRef)({ down: !1, startX: 0, startScroll: 0 });
        function c(e) {
          let t = s.current;
          ((o.current.down = !1), t?.classList.remove(n.default.dragging), t?.releasePointerCapture?.(e.pointerId));
        }
        return (0, t.jsx)("section", {
          ref: s,
          tabIndex: 0,
          "aria-label": "Team and office photos",
          className: (0, r.cn)(n.default.scroller, "mt-8", e),
          onPointerDown: function (e) {
            let t = s.current;
            t &&
              ((o.current = { down: !0, startX: e.clientX, startScroll: t.scrollLeft }),
              t.classList.add(n.default.dragging),
              t.setPointerCapture(e.pointerId));
          },
          onPointerMove: function (e) {
            let t = s.current;
            t && o.current.down && (t.scrollLeft = o.current.startScroll - (e.clientX - o.current.startX));
          },
          onPointerUp: c,
          onPointerCancel: c,
          children: (0, t.jsx)("div", {
            className: n.default.track,
            children: l.map((e) =>
              (0, t.jsx)(
                "div",
                {
                  className: n.default.card,
                  children: (0, t.jsx)(i.default, {
                    src: e.src,
                    alt: e.alt,
                    width: e.width,
                    height: e.height,
                    className: n.default.photo,
                    draggable: !1,
                    loading: "lazy",
                  }),
                },
                e.src,
              ),
            ),
          }),
        });
      },
    ]);
  },
  624503,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(901737),
      i = e.i(663277),
      a = e.i(389936);
    let n =
      "box-decoration-clone rounded-[2px] bg-card px-[3px] underline decoration-dark-500/70 underline-offset-[3px] transition-colors [text-decoration-thickness:1px] hover:bg-light-400 hover:text-ink hover:decoration-ink";
    e.s([
      "InlineLink",
      0,
      function ({ href: e, children: l, external: s, className: o, id: c }) {
        if (e === a.LINKS.contact && !s) return (0, t.jsx)(r.ContactLink, { className: (0, i.cn)(n, o), children: l });
        let d = e.startsWith("#")
          ? (t) => {
              if (t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || 0 !== t.button) return;
              let r = document.getElementById(e.slice(1));
              r &&
                (t.preventDefault(),
                r.scrollIntoView({ behavior: "smooth", block: "start" }),
                window.history.pushState(null, "", e));
            }
          : void 0;
        return (0, t.jsx)("a", {
          id: c,
          href: e,
          onClick: d,
          target: s ? "_blank" : void 0,
          rel: s ? "noopener noreferrer" : void 0,
          className: (0, i.cn)(n, o),
          children: l,
        });
      },
    ]);
  },
  70416,
  (e) => {
    "use strict";
    var t = e.i(843476);
    (e.i(881986), e.i(201720), e.i(170789));
    (e.i(714828), e.i(30965), e.i(894103), e.i(464125), e.i(262613), e.i(822122));
    (e.i(932344), e.i(80525));
    (e.i(869115), e.i(135927));
    (e.i(425185), e.i(998612));
    var r = e.i(360323),
      i = e.i(699306),
      a = e.i(32449),
      n = e.i(600465),
      l = e.i(996971),
      s = e.i(967520),
      o = e.i(603002);
    class c extends o.VisualElement {
      constructor() {
        (super(...arguments), (this.type = "object"));
      }
      readValueFromInstance(e, t) {
        if (t in e) {
          let r = e[t];
          if ("string" == typeof r || "number" == typeof r) return r;
        }
      }
      getBaseTargetFromProps() {}
      removeValueFromRenderState(e, t) {
        delete t.output[e];
      }
      measureInstanceViewportBox() {
        return (0, s.createBox)();
      }
      build(e, t) {
        Object.assign(e.output, t);
      }
      renderInstance(e, { output: t }) {
        Object.assign(e, t);
      }
      sortInstanceNodePosition() {
        return 0;
      }
    }
    e.i(277232);
    var d = e.i(271645);
    let h = [
      { n: "01", label: "Introduction", id: null },
      { n: "02", label: "Partners", id: "partners" },
      { n: "03", label: "Resell", id: "resell" },
      { n: "04", label: "CLI", id: "cli" },
      { n: "05", label: "Careers", id: "careers" },
    ];
    e.s(
      [
        "NavSecondary",
        0,
        function () {
          let [e, r] = (0, d.useState)("01");
          return (
            (0, d.useEffect)(() => {
              let e = h.filter((e) => e.id),
                t = new IntersectionObserver(
                  (e) => {
                    let t = e
                      .filter((e) => e.isIntersecting)
                      .sort((e, t) => e.boundingClientRect.top - t.boundingClientRect.top);
                    if (t[0]) {
                      let e = h.find((e) => e.id === t[0].target.id);
                      e && r(e.n);
                    } else window.scrollY < 240 && r("01");
                  },
                  { rootMargin: "-40% 0px -55% 0px" },
                );
              for (let r of e) {
                let e = document.getElementById(r.id);
                e && t.observe(e);
              }
              let i = () => {
                window.scrollY < 240 && r("01");
              };
              return (
                window.addEventListener("scroll", i, { passive: !0 }),
                () => {
                  (t.disconnect(), window.removeEventListener("scroll", i));
                }
              );
            }, []),
            (0, t.jsx)("nav", {
              className: "pointer-events-none flex h-full flex-col justify-between pt-32 pr-7 pb-11 pl-7",
              children: (0, t.jsx)("ul", { className: "flex flex-col" }),
            })
          );
        },
      ],
      70416,
    );
  },
  558738,
  (e) => {
    e.v((e) => Promise.resolve().then(() => e(881986)));
  },
  856443,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(663277),
      i = e.i(271645);
    e.s([
      "SectionAnchorTitle",
      0,
      function ({ id: e, children: a, className: n }) {
        let [l, s] = (0, i.useState)(!1),
          o = async () => {
            let t = `${window.location.origin}${window.location.pathname}#${e}`;
            (window.history.replaceState(null, "", `#${e}`),
              document.getElementById(e)?.scrollIntoView({ behavior: "smooth", block: "start" }));
            let r = !1;
            try {
              (await navigator.clipboard.writeText(t), (r = !0));
            } catch {
              r = (function (e) {
                try {
                  let t = document.createElement("textarea");
                  ((t.value = e),
                    (t.style.position = "fixed"),
                    (t.style.opacity = "0"),
                    document.body.appendChild(t),
                    t.select());
                  let r = document.execCommand("copy");
                  return (document.body.removeChild(t), r);
                } catch {
                  return !1;
                }
              })(t);
            }
            r && (s(!0), setTimeout(() => s(!1), 1400));
          };
        return (0, t.jsxs)("button", {
          type: "button",
          onClick: o,
          title: "Copy link to this section",
          className: (0, r.cn)(
            "group/anchor inline-block rounded-[4px] text-left text-inherit [font:inherit] [letter-spacing:inherit]",
            n,
          ),
          children: [
            a,
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
