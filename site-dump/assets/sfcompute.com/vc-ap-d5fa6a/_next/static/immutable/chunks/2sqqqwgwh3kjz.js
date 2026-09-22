(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  901737,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(443770),
      a = e.i(389936);
    e.s([
      "ContactLink",
      0,
      function ({ className: e, children: i, onClick: o, ...n }) {
        let { open: c } = (0, r.useContactModal)();
        return (0, t.jsx)("a", {
          href: a.LINKS.contact,
          className: e,
          onClick: (e) => {
            (o?.(e),
              e.defaultPrevented ||
                e.metaKey ||
                e.ctrlKey ||
                e.shiftKey ||
                e.altKey ||
                0 !== e.button ||
                (e.preventDefault(), c()));
          },
          ...n,
          children: i,
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
      a = e.i(657688),
      i = e.i(271645),
      o = e.i(488287);
    let n = [
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
        let c = (0, i.useRef)(null),
          s = (0, i.useRef)({ down: !1, startX: 0, startScroll: 0 });
        function l(e) {
          let t = c.current;
          ((s.current.down = !1), t?.classList.remove(o.default.dragging), t?.releasePointerCapture?.(e.pointerId));
        }
        return (0, t.jsx)("section", {
          ref: c,
          tabIndex: 0,
          "aria-label": "Team and office photos",
          className: (0, r.cn)(o.default.scroller, "mt-8", e),
          onPointerDown: function (e) {
            let t = c.current;
            t &&
              ((s.current = { down: !0, startX: e.clientX, startScroll: t.scrollLeft }),
              t.classList.add(o.default.dragging),
              t.setPointerCapture(e.pointerId));
          },
          onPointerMove: function (e) {
            let t = c.current;
            t && s.current.down && (t.scrollLeft = s.current.startScroll - (e.clientX - s.current.startX));
          },
          onPointerUp: l,
          onPointerCancel: l,
          children: (0, t.jsx)("div", {
            className: o.default.track,
            children: n.map((e) =>
              (0, t.jsx)(
                "div",
                {
                  className: o.default.card,
                  children: (0, t.jsx)(a.default, {
                    src: e.src,
                    alt: e.alt,
                    width: e.width,
                    height: e.height,
                    className: o.default.photo,
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
  558738,
  (e) => {
    e.v((e) => Promise.resolve().then(() => e(881986)));
  },
  856443,
  (e) => {
    "use strict";
    var t = e.i(843476),
      r = e.i(663277),
      a = e.i(271645);
    e.s([
      "SectionAnchorTitle",
      0,
      function ({ id: e, children: i, className: o }) {
        let [n, c] = (0, a.useState)(!1),
          s = async () => {
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
            r && (c(!0), setTimeout(() => c(!1), 1400));
          };
        return (0, t.jsxs)("button", {
          type: "button",
          onClick: s,
          title: "Copy link to this section",
          className: (0, r.cn)(
            "group/anchor inline-block rounded-[4px] text-left text-inherit [font:inherit] [letter-spacing:inherit]",
            o,
          ),
          children: [
            i,
            (0, t.jsx)("span", {
              "aria-hidden": !0,
              className:
                "ml-1 font-mono text-[0.7em] text-dark-300 opacity-0 transition-opacity group-hover/anchor:opacity-100 group-focus-visible/anchor:opacity-100",
              children: n ? "✓" : "#",
            }),
          ],
        });
      },
    ]);
  },
]);
