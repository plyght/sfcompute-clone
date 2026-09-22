(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  881986,
  327507,
  794804,
  292296,
  379145,
  67992,
  272963,
  277232,
  32449,
  196148,
  807619,
  769919,
  (t) => {
    "use strict";
    var e = t.i(323558),
      i = t.i(979005),
      s = t.i(714828),
      o = t.i(178531),
      r = t.i(894103),
      a = t.i(645022),
      n = t.i(369722),
      l = t.i(786696);
    function h(t, e, i, s) {
      return (0, n.addDomEvent)(t, e, (0, l.addPointerInfo)(i), s);
    }
    let u = (t, e) => Math.abs(t - e);
    var c = t.i(347145),
      m = t.i(141384);
    class d {
      constructor(t, e, { transformPagePoint: i, contextWindow: s, dragSnapToOrigin: o = !1 } = {}) {
        if (
          ((this.startEvent = null),
          (this.lastMoveEvent = null),
          (this.lastMoveEventInfo = null),
          (this.handlers = {}),
          (this.contextWindow = window),
          (this.updatePoint = () => {
            var t, e;
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            let i = f(this.lastMoveEventInfo, this.history),
              s = null !== this.startEvent,
              o = ((t = i.offset), (e = { x: 0, y: 0 }), Math.sqrt(u(t.x, e.x) ** 2 + u(t.y, e.y) ** 2) >= 3);
            if (!s && !o) return;
            let { point: r } = i,
              { timestamp: a } = m.frameData;
            this.history.push({ ...r, timestamp: a });
            let { onStart: n, onMove: l } = this.handlers;
            (s || (n && n(this.lastMoveEvent, i), (this.startEvent = this.lastMoveEvent)),
              l && l(this.lastMoveEvent, i));
          }),
          (this.handlePointerMove = (t, e) => {
            ((this.lastMoveEvent = t),
              (this.lastMoveEventInfo = p(e, this.transformPagePoint)),
              m.frame.update(this.updatePoint, !0));
          }),
          (this.handlePointerUp = (t, e) => {
            this.end();
            let { onEnd: i, onSessionEnd: s, resumeAnimation: o } = this.handlers;
            if ((this.dragSnapToOrigin && o && o(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return;
            let r = f(
              "pointercancel" === t.type ? this.lastMoveEventInfo : p(e, this.transformPagePoint),
              this.history,
            );
            (this.startEvent && i && i(t, r), s && s(t, r));
          }),
          !(0, a.isPrimaryPointer)(t))
        )
          return;
        ((this.dragSnapToOrigin = o),
          (this.handlers = e),
          (this.transformPagePoint = i),
          (this.contextWindow = s || window));
        const r = p((0, l.extractEventInfo)(t), this.transformPagePoint),
          { point: n } = r,
          { timestamp: d } = m.frameData;
        this.history = [{ ...n, timestamp: d }];
        const { onSessionStart: g } = e;
        (g && g(t, f(r, this.history)),
          (this.removeListeners = (0, c.pipe)(
            h(this.contextWindow, "pointermove", this.handlePointerMove),
            h(this.contextWindow, "pointerup", this.handlePointerUp),
            h(this.contextWindow, "pointercancel", this.handlePointerUp),
          )));
      }
      updateHandlers(t) {
        this.handlers = t;
      }
      end() {
        (this.removeListeners && this.removeListeners(), (0, m.cancelFrame)(this.updatePoint));
      }
    }
    function p(t, e) {
      return e ? { point: e(t.point) } : t;
    }
    function g(t, e) {
      return { x: t.x - e.x, y: t.y - e.y };
    }
    function f({ point: t }, e) {
      return {
        point: t,
        delta: g(t, v(e)),
        offset: g(t, e[0]),
        velocity: (function (t) {
          if (t.length < 2) return { x: 0, y: 0 };
          let e = t.length - 1,
            i = null,
            s = v(t);
          for (; e >= 0 && ((i = t[e]), !(s.timestamp - i.timestamp > (0, r.secondsToMilliseconds)(0.1))); ) e--;
          if (!i) return { x: 0, y: 0 };
          let o = (0, r.millisecondsToSeconds)(s.timestamp - i.timestamp);
          if (0 === o) return { x: 0, y: 0 };
          let a = { x: (s.x - i.x) / o, y: (s.y - i.y) / o };
          return (a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a);
        })(e),
      };
    }
    function v(t) {
      return t[t.length - 1];
    }
    function y(t) {
      return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current");
    }
    t.s(["isRefObject", 0, y], 327507);
    var x = t.i(30965),
      P = t.i(998612);
    function D(t) {
      return t.max - t.min;
    }
    function T(t, e, i, s = 0.5) {
      ((t.origin = s),
        (t.originPoint = (0, P.mixNumber)(e.min, e.max, t.origin)),
        (t.scale = D(i) / D(e)),
        (t.translate = (0, P.mixNumber)(i.min, i.max, t.origin) - t.originPoint),
        ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) && (t.scale = 1),
        ((t.translate >= -0.01 && t.translate <= 0.01) || isNaN(t.translate)) && (t.translate = 0));
    }
    function S(t, e, i, s) {
      (T(t.x, e.x, i.x, s ? s.originX : void 0), T(t.y, e.y, i.y, s ? s.originY : void 0));
    }
    function A(t, e, i) {
      ((t.min = i.min + e.min), (t.max = t.min + D(e)));
    }
    function E(t, e, i) {
      ((t.min = e.min - i.min), (t.max = t.min + D(e)));
    }
    function R(t, e, i) {
      (E(t.x, e.x, i.x), E(t.y, e.y, i.y));
    }
    var B = t.i(17660);
    function j(t, e, i) {
      return { min: void 0 !== e ? t.min + e : void 0, max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0 };
    }
    function L(t, e) {
      let i = e.min - t.min,
        s = e.max - t.max;
      return (e.max - e.min < t.max - t.min && ([i, s] = [s, i]), { min: i, max: s });
    }
    function w(t, e, i) {
      return { min: V(t, e), max: V(t, i) };
    }
    function V(t, e) {
      return "number" == typeof t ? t : t[e] || 0;
    }
    var b = t.i(967520);
    function C(t) {
      return [t("x"), t("y")];
    }
    var M = t.i(289878),
      k = t.i(849128),
      U = t.i(88712),
      F = t.i(589371);
    let O = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
    var N = t.i(139901);
    let I = new WeakMap();
    class $ {
      constructor(t) {
        ((this.openDragLock = null),
          (this.isDragging = !1),
          (this.currentDirection = null),
          (this.originPoint = { x: 0, y: 0 }),
          (this.constraints = !1),
          (this.hasMutatedConstraints = !1),
          (this.elastic = (0, b.createBox)()),
          (this.visualElement = t));
      }
      start(t, { snapToCursor: e = !1 } = {}) {
        let { presenceContext: i } = this.visualElement;
        if (i && !1 === i.isPresent) return;
        let s = (t) => {
            let { dragSnapToOrigin: i } = this.getProps();
            (i ? this.pauseAnimation() : this.stopAnimation(),
              e && this.snapToCursor((0, l.extractEventInfo)(t).point));
          },
          r = (t, e) => {
            let { drag: i, dragPropagation: s, onDragStart: r } = this.getProps();
            if (
              i &&
              !s &&
              (this.openDragLock && this.openDragLock(),
              (this.openDragLock = (function (t) {
                if ("x" === t || "y" === t)
                  if (o.isDragging[t]) return null;
                  else
                    return (
                      (o.isDragging[t] = !0),
                      () => {
                        o.isDragging[t] = !1;
                      }
                    );
                return o.isDragging.x || o.isDragging.y
                  ? null
                  : ((o.isDragging.x = o.isDragging.y = !0),
                    () => {
                      o.isDragging.x = o.isDragging.y = !1;
                    });
              })(i)),
              !this.openDragLock)
            )
              return;
            ((this.isDragging = !0),
              (this.currentDirection = null),
              this.resolveConstraints(),
              this.visualElement.projection &&
                ((this.visualElement.projection.isAnimationBlocked = !0),
                (this.visualElement.projection.target = void 0)),
              C((t) => {
                let e = this.getAxisMotionValue(t).get() || 0;
                if (U.percent.test(e)) {
                  let { projection: i } = this.visualElement;
                  if (i && i.layout) {
                    let s = i.layout.layoutBox[t];
                    s && (e = D(s) * (parseFloat(e) / 100));
                  }
                }
                this.originPoint[t] = e;
              }),
              r && m.frame.postRender(() => r(t, e)),
              (0, N.addValueToWillChange)(this.visualElement, "transform"));
            let { animationState: a } = this.visualElement;
            a && a.setActive("whileDrag", !0);
          },
          a = (t, e) => {
            let { dragPropagation: i, dragDirectionLock: s, onDirectionLock: o, onDrag: r } = this.getProps();
            if (!i && !this.openDragLock) return;
            let { offset: a } = e;
            if (s && null === this.currentDirection) {
              ((this.currentDirection = (function (t, e = 10) {
                let i = null;
                return (Math.abs(t.y) > e ? (i = "y") : Math.abs(t.x) > e && (i = "x"), i);
              })(a)),
                null !== this.currentDirection && o && o(this.currentDirection));
              return;
            }
            (this.updateAxis("x", e.point, a),
              this.updateAxis("y", e.point, a),
              this.visualElement.render(),
              r && r(t, e));
          },
          n = (t, e) => this.stop(t, e),
          h = () =>
            C((t) => {
              var e;
              return (
                "paused" === this.getAnimationState(t) &&
                (null == (e = this.getAxisMotionValue(t).animation) ? void 0 : e.play())
              );
            }),
          { dragSnapToOrigin: u } = this.getProps();
        this.panSession = new d(
          t,
          { onSessionStart: s, onStart: r, onMove: a, onSessionEnd: n, resumeAnimation: h },
          {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: O(this.visualElement),
          },
        );
      }
      stop(t, e) {
        let i = this.isDragging;
        if ((this.cancel(), !i)) return;
        let { velocity: s } = e;
        this.startAnimation(s);
        let { onDragEnd: o } = this.getProps();
        o && m.frame.postRender(() => o(t, e));
      }
      cancel() {
        this.isDragging = !1;
        let { projection: t, animationState: e } = this.visualElement;
        (t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), (this.panSession = void 0));
        let { dragPropagation: i } = this.getProps();
        (!i && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
          e && e.setActive("whileDrag", !1));
      }
      updateAxis(t, e, i) {
        let { drag: s } = this.getProps();
        if (!i || !z(t, s, this.currentDirection)) return;
        let o = this.getAxisMotionValue(t),
          r = this.originPoint[t] + i[t];
        (this.constraints &&
          this.constraints[t] &&
          (r = (function (t, { min: e, max: i }, s) {
            return (
              void 0 !== e && t < e
                ? (t = s ? (0, P.mixNumber)(e, t, s.min) : Math.max(t, e))
                : void 0 !== i && t > i && (t = s ? (0, P.mixNumber)(i, t, s.max) : Math.min(t, i)),
              t
            );
          })(r, this.constraints[t], this.elastic[t])),
          o.set(r));
      }
      resolveConstraints() {
        var t;
        let { dragConstraints: e, dragElastic: i } = this.getProps(),
          s =
            this.visualElement.projection && !this.visualElement.projection.layout
              ? this.visualElement.projection.measure(!1)
              : null == (t = this.visualElement.projection)
                ? void 0
                : t.layout,
          o = this.constraints;
        (e && y(e)
          ? this.constraints || (this.constraints = this.resolveRefConstraints())
          : e && s
            ? (this.constraints = (function (t, { top: e, left: i, bottom: s, right: o }) {
                return { x: j(t.x, i, o), y: j(t.y, e, s) };
              })(s.layoutBox, e))
            : (this.constraints = !1),
          (this.elastic = (function (t = 0.35) {
            return (
              !1 === t ? (t = 0) : !0 === t && (t = 0.35),
              { x: w(t, "left", "right"), y: w(t, "top", "bottom") }
            );
          })(i)),
          o !== this.constraints &&
            s &&
            this.constraints &&
            !this.hasMutatedConstraints &&
            C((t) => {
              var e, i;
              let o;
              !1 !== this.constraints &&
                this.getAxisMotionValue(t) &&
                (this.constraints[t] =
                  ((e = s.layoutBox[t]),
                  (i = this.constraints[t]),
                  (o = {}),
                  void 0 !== i.min && (o.min = i.min - e.min),
                  void 0 !== i.max && (o.max = i.max - e.min),
                  o));
            }));
      }
      resolveRefConstraints() {
        var t;
        let { dragConstraints: e, onMeasureDragConstraints: i } = this.getProps();
        if (!e || !y(e)) return !1;
        let o = e.current;
        (0, s.invariant)(
          null !== o,
          "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
        );
        let { projection: r } = this.visualElement;
        if (!r || !r.layout) return !1;
        let a = (0, M.measurePageBox)(o, r.root, this.visualElement.getTransformPagePoint()),
          n = ((t = r.layout.layoutBox), { x: L(t.x, a.x), y: L(t.y, a.y) });
        if (i) {
          let t = i((0, k.convertBoxToBoundingBox)(n));
          ((this.hasMutatedConstraints = !!t), t && (n = (0, k.convertBoundingBoxToBox)(t)));
        }
        return n;
      }
      startAnimation(t) {
        let {
            drag: e,
            dragMomentum: i,
            dragElastic: s,
            dragTransition: o,
            dragSnapToOrigin: r,
            onDragTransitionEnd: a,
          } = this.getProps(),
          n = this.constraints || {};
        return Promise.all(
          C((a) => {
            if (!z(a, e, this.currentDirection)) return;
            let l = (n && n[a]) || {};
            r && (l = { min: 0, max: 0 });
            let h = {
              type: "inertia",
              velocity: i ? t[a] : 0,
              bounceStiffness: s ? 200 : 1e6,
              bounceDamping: s ? 40 : 1e7,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...o,
              ...l,
            };
            return this.startAxisValueAnimation(a, h);
          }),
        ).then(a);
      }
      startAxisValueAnimation(t, e) {
        let i = this.getAxisMotionValue(t);
        return (
          (0, N.addValueToWillChange)(this.visualElement, t),
          i.start((0, F.animateMotionValue)(t, i, 0, e, this.visualElement, !1))
        );
      }
      stopAnimation() {
        C((t) => this.getAxisMotionValue(t).stop());
      }
      pauseAnimation() {
        C((t) => {
          var e;
          return null == (e = this.getAxisMotionValue(t).animation) ? void 0 : e.pause();
        });
      }
      getAnimationState(t) {
        var e;
        return null == (e = this.getAxisMotionValue(t).animation) ? void 0 : e.state;
      }
      getAxisMotionValue(t) {
        let e = `_drag${t.toUpperCase()}`,
          i = this.visualElement.getProps();
        return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0);
      }
      snapToCursor(t) {
        C((e) => {
          let { drag: i } = this.getProps();
          if (!z(e, i, this.currentDirection)) return;
          let { projection: s } = this.visualElement,
            o = this.getAxisMotionValue(e);
          if (s && s.layout) {
            let { min: i, max: r } = s.layout.layoutBox[e];
            o.set(t[e] - (0, P.mixNumber)(i, r, 0.5));
          }
        });
      }
      scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        let { drag: t, dragConstraints: e } = this.getProps(),
          { projection: i } = this.visualElement;
        if (!y(e) || !i || !this.constraints) return;
        this.stopAnimation();
        let s = { x: 0, y: 0 };
        C((t) => {
          let e = this.getAxisMotionValue(t);
          if (e && !1 !== this.constraints) {
            var i, o;
            let r,
              a,
              n,
              l = e.get();
            s[t] =
              ((i = { min: l, max: l }),
              (o = this.constraints[t]),
              (r = 0.5),
              (a = D(i)),
              (n = D(o)) > a
                ? (r = (0, x.progress)(o.min, o.max - a, i.min))
                : a > n && (r = (0, x.progress)(i.min, i.max - n, o.min)),
              (0, B.clamp)(0, 1, r));
          }
        });
        let { transformTemplate: o } = this.visualElement.getProps();
        ((this.visualElement.current.style.transform = o ? o({}, "") : "none"),
          i.root && i.root.updateScroll(),
          i.updateLayout(),
          this.resolveConstraints(),
          C((e) => {
            if (!z(e, t, null)) return;
            let i = this.getAxisMotionValue(e),
              { min: o, max: r } = this.constraints[e];
            i.set((0, P.mixNumber)(o, r, s[e]));
          }));
      }
      addListeners() {
        if (!this.visualElement.current) return;
        I.set(this.visualElement, this);
        let t = h(this.visualElement.current, "pointerdown", (t) => {
            let { drag: e, dragListener: i = !0 } = this.getProps();
            e && i && this.start(t);
          }),
          e = () => {
            let { dragConstraints: t } = this.getProps();
            y(t) && t.current && (this.constraints = this.resolveRefConstraints());
          },
          { projection: i } = this.visualElement,
          s = i.addEventListener("measure", e);
        (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), m.frame.read(e));
        let o = (0, n.addDomEvent)(window, "resize", () => this.scalePositionWithinConstraints()),
          r = i.addEventListener("didUpdate", ({ delta: t, hasLayoutChanged: e }) => {
            this.isDragging &&
              e &&
              (C((e) => {
                let i = this.getAxisMotionValue(e);
                i && ((this.originPoint[e] += t[e].translate), i.set(i.get() + t[e].translate));
              }),
              this.visualElement.render());
          });
        return () => {
          (o(), t(), s(), r && r());
        };
      }
      getProps() {
        let t = this.visualElement.getProps(),
          {
            drag: e = !1,
            dragDirectionLock: i = !1,
            dragPropagation: s = !1,
            dragConstraints: o = !1,
            dragElastic: r = 0.35,
            dragMomentum: a = !0,
          } = t;
        return {
          ...t,
          drag: e,
          dragDirectionLock: i,
          dragPropagation: s,
          dragConstraints: o,
          dragElastic: r,
          dragMomentum: a,
        };
      }
    }
    function z(t, e, i) {
      return (!0 === e || e === t) && (null === i || i === t);
    }
    class W extends e.Feature {
      constructor(t) {
        (super(t), (this.removeGroupControls = i.noop), (this.removeListeners = i.noop), (this.controls = new $(t)));
      }
      mount() {
        let { dragControls: t } = this.node.getProps();
        (t && (this.removeGroupControls = t.subscribe(this.controls)),
          (this.removeListeners = this.controls.addListeners() || i.noop));
      }
      unmount() {
        (this.removeGroupControls(), this.removeListeners());
      }
    }
    var G = e;
    let H = (t) => (e, i) => {
      t && m.frame.postRender(() => t(e, i));
    };
    class X extends G.Feature {
      constructor() {
        (super(...arguments), (this.removePointerDownListener = i.noop));
      }
      onPointerDown(t) {
        this.session = new d(t, this.createPanHandlers(), {
          transformPagePoint: this.node.getTransformPagePoint(),
          contextWindow: O(this.node),
        });
      }
      createPanHandlers() {
        let { onPanSessionStart: t, onPanStart: e, onPan: i, onPanEnd: s } = this.node.getProps();
        return {
          onSessionStart: H(t),
          onStart: H(e),
          onMove: i,
          onEnd: (t, e) => {
            (delete this.session, s && m.frame.postRender(() => s(t, e)));
          },
        };
      }
      mount() {
        this.removePointerDownListener = h(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
      }
      update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
      }
      unmount() {
        (this.removePointerDownListener(), this.session && this.session.end());
      }
    }
    var Y = t.i(843476),
      q = t.i(271645);
    let K = (0, q.createContext)(null);
    function Z(t = !0) {
      let e = (0, q.useContext)(K);
      if (null === e) return [!0, null];
      let { isPresent: i, onExitComplete: s, register: o } = e,
        r = (0, q.useId)();
      (0, q.useEffect)(() => {
        t && o(r);
      }, [t]);
      let a = (0, q.useCallback)(() => t && s && s(r), [r, s, t]);
      return !i && s ? [!1, a] : [!0];
    }
    (t.s(["PresenceContext", 0, K], 794804), t.s(["usePresence", 0, Z], 292296));
    let _ = (0, q.createContext)({});
    t.s(["LayoutGroupContext", 0, _], 379145);
    let J = (0, q.createContext)({});
    t.s(["SwitchLayoutGroupContext", 0, J], 67992);
    let Q = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
    function tt(t, e) {
      return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
    }
    let te = {
      correct: (t, e) => {
        if (!e.target) return t;
        if ("string" == typeof t)
          if (!U.px.test(t)) return t;
          else t = parseFloat(t);
        let i = tt(t, e.target.x),
          s = tt(t, e.target.y);
        return `${i}% ${s}%`;
      },
    };
    var ti = t.i(229444),
      ts = t.i(115262);
    let { schedule: to, cancel: tr } = (0, t.i(932295).createRenderBatcher)(queueMicrotask, !1);
    t.s(["microtask", 0, to], 272963);
    class ta extends q.Component {
      componentDidMount() {
        let { visualElement: t, layoutGroup: e, switchLayoutGroup: i, layoutId: s } = this.props,
          { projection: o } = t;
        ((0, ts.addScaleCorrector)(tl),
          o &&
            (e.group && e.group.add(o),
            i && i.register && s && i.register(o),
            o.root.didUpdate(),
            o.addEventListener("animationComplete", () => {
              this.safeToRemove();
            }),
            o.setOptions({ ...o.options, onExitComplete: () => this.safeToRemove() })),
          (Q.hasEverUpdated = !0));
      }
      getSnapshotBeforeUpdate(t) {
        let { layoutDependency: e, visualElement: i, drag: s, isPresent: o } = this.props,
          r = i.projection;
        return (
          r &&
            ((r.isPresent = o),
            s || t.layoutDependency !== e || void 0 === e ? r.willUpdate() : this.safeToRemove(),
            t.isPresent !== o &&
              (o
                ? r.promote()
                : r.relegate() ||
                  m.frame.postRender(() => {
                    let t = r.getStack();
                    (t && t.members.length) || this.safeToRemove();
                  }))),
          null
        );
      }
      componentDidUpdate() {
        let { projection: t } = this.props.visualElement;
        t &&
          (t.root.didUpdate(),
          to.postRender(() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove();
          }));
      }
      componentWillUnmount() {
        let { visualElement: t, layoutGroup: e, switchLayoutGroup: i } = this.props,
          { projection: s } = t;
        s && (s.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(s), i && i.deregister && i.deregister(s));
      }
      safeToRemove() {
        let { safeToRemove: t } = this.props;
        t && t();
      }
      render() {
        return null;
      }
    }
    function tn(t) {
      let [e, i] = Z(),
        s = (0, q.useContext)(_);
      return (0, Y.jsx)(ta, {
        ...t,
        layoutGroup: s,
        switchLayoutGroup: (0, q.useContext)(J),
        isPresent: e,
        safeToRemove: i,
      });
    }
    let tl = {
      borderRadius: {
        ...te,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"],
      },
      borderTopLeftRadius: te,
      borderTopRightRadius: te,
      borderBottomLeftRadius: te,
      borderBottomRightRadius: te,
      boxShadow: {
        correct: (t, { treeScale: e, projectionDelta: i }) => {
          let s = ti.complex.parse(t);
          if (s.length > 5) return t;
          let o = ti.complex.createTransformer(t),
            r = +("number" != typeof s[0]),
            a = i.x.scale * e.x,
            n = i.y.scale * e.y;
          ((s[0 + r] /= a), (s[1 + r] /= n));
          let l = (0, P.mixNumber)(a, n, 0.5);
          return ("number" == typeof s[2 + r] && (s[2 + r] /= l), "number" == typeof s[3 + r] && (s[3 + r] /= l), o(s));
        },
      },
    };
    var th = t.i(530104),
      tu = t.i(59379),
      tc = t.i(869115);
    function tm(t, e, i) {
      let s = (0, tc.isMotionValue)(t) ? t : (0, tu.motionValue)(t);
      return (s.start((0, F.animateMotionValue)("", s, e, i)), s.animation);
    }
    t.s(["animateSingleValue", 0, tm], 277232);
    var td = t.i(791179),
      tp = t.i(630490);
    function tg(t) {
      return t instanceof SVGElement && "svg" !== t.tagName;
    }
    t.s(["isSVGElement", 0, tg], 32449);
    var tf = t.i(425185);
    let tv = (t, e) => t.depth - e.depth;
    class ty {
      constructor() {
        ((this.children = []), (this.isDirty = !1));
      }
      add(t) {
        ((0, tf.addUniqueItem)(this.children, t), (this.isDirty = !0));
      }
      remove(t) {
        ((0, tf.removeItem)(this.children, t), (this.isDirty = !0));
      }
      forEach(t) {
        (this.isDirty && this.children.sort(tv), (this.isDirty = !1), this.children.forEach(t));
      }
    }
    var tx = t.i(617693),
      tP = t.i(969637);
    function tD(t) {
      let e = (0, tc.isMotionValue)(t) ? t.get() : t;
      return (0, tP.isCustomValue)(e) ? e.toValue() : e;
    }
    t.s(["resolveMotionValue", 0, tD], 196148);
    var tT = t.i(949359);
    let tS = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
      tA = tS.length,
      tE = (t) => ("string" == typeof t ? parseFloat(t) : t),
      tR = (t) => "number" == typeof t || U.px.test(t);
    function tB(t, e) {
      return void 0 !== t[e] ? t[e] : t.borderRadius;
    }
    let tj = tw(0, 0.5, tT.circOut),
      tL = tw(0.5, 0.95, i.noop);
    function tw(t, e, i) {
      return (s) => (s < t ? 0 : s > e ? 1 : i((0, x.progress)(t, e, s)));
    }
    function tV(t, e) {
      ((t.min = e.min), (t.max = e.max));
    }
    function tb(t, e) {
      (tV(t.x, e.x), tV(t.y, e.y));
    }
    function tC(t, e) {
      ((t.translate = e.translate), (t.scale = e.scale), (t.originPoint = e.originPoint), (t.origin = e.origin));
    }
    var tM = t.i(687611);
    function tk(t, e, i, s, o) {
      return (
        (t -= e),
        (t = (0, tM.scalePoint)(t, 1 / i, s)),
        void 0 !== o && (t = (0, tM.scalePoint)(t, 1 / o, s)),
        t
      );
    }
    function tU(t, e, [i, s, o], r, a) {
      !(function (t, e = 0, i = 1, s = 0.5, o, r = t, a = t) {
        if (
          (U.percent.test(e) && ((e = parseFloat(e)), (e = (0, P.mixNumber)(a.min, a.max, e / 100) - a.min)),
          "number" != typeof e)
        )
          return;
        let n = (0, P.mixNumber)(r.min, r.max, s);
        (t === r && (n -= e), (t.min = tk(t.min, e, i, n, o)), (t.max = tk(t.max, e, i, n, o)));
      })(t, e[i], e[s], e[o], e.scale, r, a);
    }
    let tF = ["x", "scaleX", "originX"],
      tO = ["y", "scaleY", "originY"];
    function tN(t, e, i, s) {
      (tU(t.x, e, tF, i ? i.x : void 0, s ? s.x : void 0), tU(t.y, e, tO, i ? i.y : void 0, s ? s.y : void 0));
    }
    function tI(t) {
      return 0 === t.translate && 1 === t.scale;
    }
    function t$(t) {
      return tI(t.x) && tI(t.y);
    }
    function tz(t, e) {
      return t.min === e.min && t.max === e.max;
    }
    function tW(t, e) {
      return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
    }
    function tG(t, e) {
      return tW(t.x, e.x) && tW(t.y, e.y);
    }
    function tH(t) {
      return D(t.x) / D(t.y);
    }
    function tX(t, e) {
      return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
    }
    class tY {
      constructor() {
        this.members = [];
      }
      add(t) {
        ((0, tf.addUniqueItem)(this.members, t), t.scheduleRender());
      }
      remove(t) {
        if (((0, tf.removeItem)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
          let t = this.members[this.members.length - 1];
          t && this.promote(t);
        }
      }
      relegate(t) {
        let e,
          i = this.members.findIndex((e) => t === e);
        if (0 === i) return !1;
        for (let t = i; t >= 0; t--) {
          let i = this.members[t];
          if (!1 !== i.isPresent) {
            e = i;
            break;
          }
        }
        return !!e && (this.promote(e), !0);
      }
      promote(t, e) {
        let i = this.lead;
        if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
          (i.instance && i.scheduleRender(),
            t.scheduleRender(),
            (t.resumeFrom = i),
            e && (t.resumeFrom.preserveOpacity = !0),
            i.snapshot && ((t.snapshot = i.snapshot), (t.snapshot.latestValues = i.animationValues || i.latestValues)),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
          let { crossfade: s } = t.options;
          !1 === s && i.hide();
        }
      }
      exitAnimationComplete() {
        this.members.forEach((t) => {
          let { options: e, resumingFrom: i } = t;
          (e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete());
        });
      }
      scheduleRender() {
        this.members.forEach((t) => {
          t.instance && t.scheduleRender(!1);
        });
      }
      removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
      }
    }
    var tq = t.i(99759);
    let tK = { type: "projectionFrame", totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0 },
      tZ = "u" > typeof window && void 0 !== window.MotionDebug,
      t_ = ["", "X", "Y", "Z"],
      tJ = { visibility: "hidden" },
      tQ = 0;
    function t0(t, e, i, s) {
      let { latestValues: o } = e;
      o[t] && ((i[t] = o[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
    }
    function t1({
      attachResizeListener: t,
      defaultParent: e,
      measureScroll: i,
      checkIsScrollRoot: s,
      resetTransform: o,
    }) {
      return class {
        constructor(t = {}, i = null == e ? void 0 : e()) {
          ((this.id = tQ++),
            (this.animationId = 0),
            (this.children = new Set()),
            (this.options = {}),
            (this.isTreeAnimating = !1),
            (this.isAnimationBlocked = !1),
            (this.isLayoutDirty = !1),
            (this.isProjectionDirty = !1),
            (this.isSharedProjectionDirty = !1),
            (this.isTransformDirty = !1),
            (this.updateManuallyBlocked = !1),
            (this.updateBlockedByResize = !1),
            (this.isUpdating = !1),
            (this.isSVG = !1),
            (this.needsReset = !1),
            (this.shouldResetTransform = !1),
            (this.hasCheckedOptimisedAppear = !1),
            (this.treeScale = { x: 1, y: 1 }),
            (this.eventHandlers = new Map()),
            (this.hasTreeAnimated = !1),
            (this.updateScheduled = !1),
            (this.scheduleUpdate = () => this.update()),
            (this.projectionUpdateScheduled = !1),
            (this.checkUpdateFailed = () => {
              this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
            }),
            (this.updateProjection = () => {
              ((this.projectionUpdateScheduled = !1),
                tZ && (tK.totalNodes = tK.resolvedTargetDeltas = tK.recalculatedProjection = 0),
                this.nodes.forEach(t7),
                this.nodes.forEach(ee),
                this.nodes.forEach(ei),
                this.nodes.forEach(t3),
                tZ && window.MotionDebug.record(tK));
            }),
            (this.resolvedRelativeTargetAt = 0),
            (this.hasProjected = !1),
            (this.isVisible = !0),
            (this.animationProgress = 0),
            (this.sharedNodes = new Map()),
            (this.latestValues = t),
            (this.root = i ? i.root || i : this),
            (this.path = i ? [...i.path, i] : []),
            (this.parent = i),
            (this.depth = i ? i.depth + 1 : 0));
          for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
          this.root === this && (this.nodes = new ty());
        }
        addEventListener(t, e) {
          return (
            this.eventHandlers.has(t) || this.eventHandlers.set(t, new tx.SubscriptionManager()),
            this.eventHandlers.get(t).add(e)
          );
        }
        notifyListeners(t, ...e) {
          let i = this.eventHandlers.get(t);
          i && i.notify(...e);
        }
        hasListeners(t) {
          return this.eventHandlers.has(t);
        }
        mount(e, i = this.root.hasTreeAnimated) {
          if (this.instance) return;
          ((this.isSVG = tg(e)), (this.instance = e));
          let { layoutId: s, layout: o, visualElement: r } = this.options;
          if (
            (r && !r.current && r.mount(e),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            i && (o || s) && (this.isLayoutDirty = !0),
            t)
          ) {
            let i,
              s = () => (this.root.updateBlockedByResize = !1);
            t(e, () => {
              let t, e;
              ((this.root.updateBlockedByResize = !0),
                i && i(),
                (t = tp.time.now()),
                (e = ({ timestamp: i }) => {
                  let o = i - t;
                  o >= 250 && ((0, m.cancelFrame)(e), s());
                }),
                m.frame.read(e, !0),
                (i = () => (0, m.cancelFrame)(e)),
                Q.hasAnimatedSinceResize && ((Q.hasAnimatedSinceResize = !1), this.nodes.forEach(et)));
            });
          }
          (s && this.root.registerSharedNode(s, this),
            !1 !== this.options.animate &&
              r &&
              (s || o) &&
              this.addEventListener(
                "didUpdate",
                ({ delta: t, hasLayoutChanged: e, hasRelativeTargetChanged: i, layout: s }) => {
                  if (this.isTreeAnimationBlocked()) {
                    ((this.target = void 0), (this.relativeTarget = void 0));
                    return;
                  }
                  let o = this.options.transition || r.getDefaultTransition() || el,
                    { onLayoutAnimationStart: a, onLayoutAnimationComplete: n } = r.getProps(),
                    l = !this.targetLayout || !tG(this.targetLayout, s) || i,
                    h = !e && i;
                  if (
                    this.options.layoutRoot ||
                    (this.resumeFrom && this.resumeFrom.instance) ||
                    h ||
                    (e && (l || !this.currentAnimation))
                  ) {
                    (this.resumeFrom &&
                      ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0)),
                      this.setAnimationOrigin(t, h));
                    let e = { ...(0, th.getValueTransition)(o, "layout"), onPlay: a, onComplete: n };
                    ((r.shouldReduceMotion || this.options.layoutRoot) && ((e.delay = 0), (e.type = !1)),
                      this.startAnimation(e));
                  } else (e || et(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
                  this.targetLayout = s;
                },
              ));
        }
        unmount() {
          (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
          let t = this.getStack();
          (t && t.remove(this),
            this.parent && this.parent.children.delete(this),
            (this.instance = void 0),
            (0, m.cancelFrame)(this.updateProjection));
        }
        blockUpdate() {
          this.updateManuallyBlocked = !0;
        }
        unblockUpdate() {
          this.updateManuallyBlocked = !1;
        }
        isUpdateBlocked() {
          return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
          return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
        }
        startUpdate() {
          !this.isUpdateBlocked() && ((this.isUpdating = !0), this.nodes && this.nodes.forEach(es), this.animationId++);
        }
        getTransformTemplate() {
          let { visualElement: t } = this.options;
          return t && t.getProps().transformTemplate;
        }
        willUpdate(t = !0) {
          if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
            this.options.onExitComplete && this.options.onExitComplete();
            return;
          }
          if (
            (window.MotionCancelOptimisedAnimation &&
              !this.hasCheckedOptimisedAppear &&
              (function t(e) {
                if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
                let { visualElement: i } = e.options;
                if (!i) return;
                let s = (0, td.getOptimisedAppearId)(i);
                if (window.MotionHasOptimisedAnimation(s, "transform")) {
                  let { layout: t, layoutId: i } = e.options;
                  window.MotionCancelOptimisedAnimation(s, "transform", m.frame, !(t || i));
                }
                let { parent: o } = e;
                o && !o.hasCheckedOptimisedAppear && t(o);
              })(this),
            this.root.isUpdating || this.root.startUpdate(),
            this.isLayoutDirty)
          )
            return;
          this.isLayoutDirty = !0;
          for (let t = 0; t < this.path.length; t++) {
            let e = this.path[t];
            ((e.shouldResetTransform = !0), e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1));
          }
          let { layoutId: e, layout: i } = this.options;
          if (void 0 === e && !i) return;
          let s = this.getTransformTemplate();
          ((this.prevTransformTemplateValue = s ? s(this.latestValues, "") : void 0),
            this.updateSnapshot(),
            t && this.notifyListeners("willUpdate"));
        }
        update() {
          if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
            (this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(t6));
            return;
          }
          (this.isUpdating || this.nodes.forEach(t4),
            (this.isUpdating = !1),
            this.nodes.forEach(t8),
            this.nodes.forEach(t9),
            this.nodes.forEach(t2),
            this.clearAllSnapshots());
          let t = tp.time.now();
          ((m.frameData.delta = (0, B.clamp)(0, 1e3 / 60, t - m.frameData.timestamp)),
            (m.frameData.timestamp = t),
            (m.frameData.isProcessing = !0),
            m.frameSteps.update.process(m.frameData),
            m.frameSteps.preRender.process(m.frameData),
            m.frameSteps.render.process(m.frameData),
            (m.frameData.isProcessing = !1));
        }
        didUpdate() {
          this.updateScheduled || ((this.updateScheduled = !0), to.read(this.scheduleUpdate));
        }
        clearAllSnapshots() {
          (this.nodes.forEach(t5), this.sharedNodes.forEach(eo));
        }
        scheduleUpdateProjection() {
          this.projectionUpdateScheduled ||
            ((this.projectionUpdateScheduled = !0), m.frame.preRender(this.updateProjection, !1, !0));
        }
        scheduleCheckAfterUnmount() {
          m.frame.postRender(() => {
            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
          });
        }
        updateSnapshot() {
          !this.snapshot && this.instance && (this.snapshot = this.measure());
        }
        updateLayout() {
          if (
            !this.instance ||
            (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
          )
            return;
          if (this.resumeFrom && !this.resumeFrom.instance)
            for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
          let t = this.layout;
          ((this.layout = this.measure(!1)),
            (this.layoutCorrected = (0, b.createBox)()),
            (this.isLayoutDirty = !1),
            (this.projectionDelta = void 0),
            this.notifyListeners("measure", this.layout.layoutBox));
          let { visualElement: e } = this.options;
          e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0);
        }
        updateScroll(t = "measure") {
          let e = !!(this.options.layoutScroll && this.instance);
          if (
            (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e)
          ) {
            let e = s(this.instance);
            this.scroll = {
              animationId: this.root.animationId,
              phase: t,
              isRoot: e,
              offset: i(this.instance),
              wasRoot: this.scroll ? this.scroll.isRoot : e,
            };
          }
        }
        resetTransform() {
          if (!o) return;
          let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
            e = this.projectionDelta && !t$(this.projectionDelta),
            i = this.getTransformTemplate(),
            s = i ? i(this.latestValues, "") : void 0,
            r = s !== this.prevTransformTemplateValue;
          t &&
            (e || (0, tq.hasTransform)(this.latestValues) || r) &&
            (o(this.instance, s), (this.shouldResetTransform = !1), this.scheduleRender());
        }
        measure(t = !0) {
          var e;
          let i = this.measurePageBox(),
            s = this.removeElementScroll(i);
          return (
            t && (s = this.removeTransform(s)),
            ec((e = s).x),
            ec(e.y),
            { animationId: this.root.animationId, measuredBox: i, layoutBox: s, latestValues: {}, source: this.id }
          );
        }
        measurePageBox() {
          var t;
          let { visualElement: e } = this.options;
          if (!e) return (0, b.createBox)();
          let i = e.measureViewportBox();
          if (!((null == (t = this.scroll) ? void 0 : t.wasRoot) || this.path.some(ed))) {
            let { scroll: t } = this.root;
            t && ((0, tM.translateAxis)(i.x, t.offset.x), (0, tM.translateAxis)(i.y, t.offset.y));
          }
          return i;
        }
        removeElementScroll(t) {
          var e;
          let i = (0, b.createBox)();
          if ((tb(i, t), null == (e = this.scroll) ? void 0 : e.wasRoot)) return i;
          for (let e = 0; e < this.path.length; e++) {
            let s = this.path[e],
              { scroll: o, options: r } = s;
            s !== this.root &&
              o &&
              r.layoutScroll &&
              (o.wasRoot && tb(i, t), (0, tM.translateAxis)(i.x, o.offset.x), (0, tM.translateAxis)(i.y, o.offset.y));
          }
          return i;
        }
        applyTransform(t, e = !1) {
          let i = (0, b.createBox)();
          tb(i, t);
          for (let t = 0; t < this.path.length; t++) {
            let s = this.path[t];
            (!e &&
              s.options.layoutScroll &&
              s.scroll &&
              s !== s.root &&
              (0, tM.transformBox)(i, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
              (0, tq.hasTransform)(s.latestValues) && (0, tM.transformBox)(i, s.latestValues));
          }
          return ((0, tq.hasTransform)(this.latestValues) && (0, tM.transformBox)(i, this.latestValues), i);
        }
        removeTransform(t) {
          let e = (0, b.createBox)();
          tb(e, t);
          for (let t = 0; t < this.path.length; t++) {
            let i = this.path[t];
            if (!i.instance || !(0, tq.hasTransform)(i.latestValues)) continue;
            (0, tq.hasScale)(i.latestValues) && i.updateSnapshot();
            let s = (0, b.createBox)();
            (tb(s, i.measurePageBox()), tN(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, s));
          }
          return ((0, tq.hasTransform)(this.latestValues) && tN(e, this.latestValues), e);
        }
        setTargetDelta(t) {
          ((this.targetDelta = t), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0));
        }
        setOptions(t) {
          this.options = { ...this.options, ...t, crossfade: void 0 === t.crossfade || t.crossfade };
        }
        clearMeasurements() {
          ((this.scroll = void 0),
            (this.layout = void 0),
            (this.snapshot = void 0),
            (this.prevTransformTemplateValue = void 0),
            (this.targetDelta = void 0),
            (this.target = void 0),
            (this.isLayoutDirty = !1));
        }
        forceRelativeParentToResolveTarget() {
          this.relativeParent &&
            this.relativeParent.resolvedRelativeTargetAt !== m.frameData.timestamp &&
            this.relativeParent.resolveTargetDelta(!0);
        }
        resolveTargetDelta(t = !1) {
          var e, i, s, o;
          let r = this.getLead();
          (this.isProjectionDirty || (this.isProjectionDirty = r.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = r.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = r.isSharedProjectionDirty));
          let a = !!this.resumingFrom || this !== r;
          if (
            !(
              t ||
              (a && this.isSharedProjectionDirty) ||
              this.isProjectionDirty ||
              (null == (e = this.parent) ? void 0 : e.isProjectionDirty) ||
              this.attemptToResolveRelativeTarget ||
              this.root.updateBlockedByResize
            )
          )
            return;
          let { layout: n, layoutId: l } = this.options;
          if (this.layout && (n || l)) {
            if (((this.resolvedRelativeTargetAt = m.frameData.timestamp), !this.targetDelta && !this.relativeTarget)) {
              let t = this.getClosestProjectingParent();
              t && t.layout && 1 !== this.animationProgress
                ? ((this.relativeParent = t),
                  this.forceRelativeParentToResolveTarget(),
                  (this.relativeTarget = (0, b.createBox)()),
                  (this.relativeTargetOrigin = (0, b.createBox)()),
                  R(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                  tb(this.relativeTarget, this.relativeTargetOrigin))
                : (this.relativeParent = this.relativeTarget = void 0);
            }
            if (this.relativeTarget || this.targetDelta) {
              if (
                ((this.target || ((this.target = (0, b.createBox)()), (this.targetWithTransforms = (0, b.createBox)())),
                this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target)
                  ? (this.forceRelativeParentToResolveTarget(),
                    (i = this.target),
                    (s = this.relativeTarget),
                    (o = this.relativeParent.target),
                    A(i.x, s.x, o.x),
                    A(i.y, s.y, o.y))
                  : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(this.layout.layoutBox))
                        : tb(this.target, this.layout.layoutBox),
                      (0, tM.applyBoxDelta)(this.target, this.targetDelta))
                    : tb(this.target, this.layout.layoutBox),
                this.attemptToResolveRelativeTarget)
              ) {
                this.attemptToResolveRelativeTarget = !1;
                let t = this.getClosestProjectingParent();
                t &&
                !!t.resumingFrom == !!this.resumingFrom &&
                !t.options.layoutScroll &&
                t.target &&
                1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = (0, b.createBox)()),
                    (this.relativeTargetOrigin = (0, b.createBox)()),
                    R(this.relativeTargetOrigin, this.target, t.target),
                    tb(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              tZ && tK.resolvedTargetDeltas++;
            }
          }
        }
        getClosestProjectingParent() {
          if (
            !(
              !this.parent ||
              (0, tq.hasScale)(this.parent.latestValues) ||
              (0, tq.has2DTranslate)(this.parent.latestValues)
            )
          )
            if (this.parent.isProjecting()) return this.parent;
            else return this.parent.getClosestProjectingParent();
        }
        isProjecting() {
          return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
        }
        calcProjection() {
          var t;
          let e = this.getLead(),
            i = !!this.resumingFrom || this !== e,
            s = !0;
          if (
            ((this.isProjectionDirty || (null == (t = this.parent) ? void 0 : t.isProjectionDirty)) && (s = !1),
            i && (this.isSharedProjectionDirty || this.isTransformDirty) && (s = !1),
            this.resolvedRelativeTargetAt === m.frameData.timestamp && (s = !1),
            s)
          )
            return;
          let { layout: o, layoutId: r } = this.options;
          if (
            ((this.isTreeAnimating = !!(
              (this.parent && this.parent.isTreeAnimating) ||
              this.currentAnimation ||
              this.pendingAnimation
            )),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(o || r))
          )
            return;
          tb(this.layoutCorrected, this.layout.layoutBox);
          let a = this.treeScale.x,
            n = this.treeScale.y;
          ((0, tM.applyTreeDeltas)(this.layoutCorrected, this.treeScale, this.path, i),
            e.layout &&
              !e.target &&
              (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
              ((e.target = e.layout.layoutBox), (e.targetWithTransforms = (0, b.createBox)())));
          let { target: l } = e;
          if (!l) {
            this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
            return;
          }
          (this.projectionDelta && this.prevProjectionDelta
            ? (tC(this.prevProjectionDelta.x, this.projectionDelta.x),
              tC(this.prevProjectionDelta.y, this.projectionDelta.y))
            : this.createProjectionDeltas(),
            S(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
            (this.treeScale.x === a &&
              this.treeScale.y === n &&
              tX(this.projectionDelta.x, this.prevProjectionDelta.x) &&
              tX(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
              ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners("projectionUpdate", l)),
            tZ && tK.recalculatedProjection++);
        }
        hide() {
          this.isVisible = !1;
        }
        show() {
          this.isVisible = !0;
        }
        scheduleRender(t = !0) {
          var e;
          if ((null == (e = this.options.visualElement) || e.scheduleRender(), t)) {
            let t = this.getStack();
            t && t.scheduleRender();
          }
          this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
        }
        createProjectionDeltas() {
          ((this.prevProjectionDelta = (0, b.createDelta)()),
            (this.projectionDelta = (0, b.createDelta)()),
            (this.projectionDeltaWithTransform = (0, b.createDelta)()));
        }
        setAnimationOrigin(t, e = !1) {
          let i,
            s = this.snapshot,
            o = s ? s.latestValues : {},
            r = { ...this.latestValues },
            a = (0, b.createDelta)();
          ((this.relativeParent && this.relativeParent.options.layoutRoot) ||
            (this.relativeTarget = this.relativeTargetOrigin = void 0),
            (this.attemptToResolveRelativeTarget = !e));
          let n = (0, b.createBox)(),
            l = (s ? s.source : void 0) !== (this.layout ? this.layout.source : void 0),
            h = this.getStack(),
            u = !h || h.members.length <= 1,
            c = !!(l && !u && !0 === this.options.crossfade && !this.path.some(en));
          ((this.animationProgress = 0),
            (this.mixTargetDelta = (e) => {
              let s = e / 1e3;
              if (
                (er(a.x, t.x, s),
                er(a.y, t.y, s),
                this.setTargetDelta(a),
                this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.layout &&
                  this.relativeParent &&
                  this.relativeParent.layout)
              ) {
                var h, m, d, p, g, f;
                (R(n, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                  (d = this.relativeTarget),
                  (p = this.relativeTargetOrigin),
                  (g = n),
                  (f = s),
                  ea(d.x, p.x, g.x, f),
                  ea(d.y, p.y, g.y, f),
                  i &&
                    ((h = this.relativeTarget), (m = i), tz(h.x, m.x) && tz(h.y, m.y)) &&
                    (this.isProjectionDirty = !1),
                  i || (i = (0, b.createBox)()),
                  tb(i, this.relativeTarget));
              }
              (l &&
                ((this.animationValues = r),
                (function (t, e, i, s, o, r) {
                  o
                    ? ((t.opacity = (0, P.mixNumber)(0, void 0 !== i.opacity ? i.opacity : 1, tj(s))),
                      (t.opacityExit = (0, P.mixNumber)(void 0 !== e.opacity ? e.opacity : 1, 0, tL(s))))
                    : r &&
                      (t.opacity = (0, P.mixNumber)(
                        void 0 !== e.opacity ? e.opacity : 1,
                        void 0 !== i.opacity ? i.opacity : 1,
                        s,
                      ));
                  for (let o = 0; o < tA; o++) {
                    let r = `border${tS[o]}Radius`,
                      a = tB(e, r),
                      n = tB(i, r);
                    (void 0 !== a || void 0 !== n) &&
                      (a || (a = 0),
                      n || (n = 0),
                      0 === a || 0 === n || tR(a) === tR(n)
                        ? ((t[r] = Math.max((0, P.mixNumber)(tE(a), tE(n), s), 0)),
                          (U.percent.test(n) || U.percent.test(a)) && (t[r] += "%"))
                        : (t[r] = n));
                  }
                  (e.rotate || i.rotate) && (t.rotate = (0, P.mixNumber)(e.rotate || 0, i.rotate || 0, s));
                })(r, o, this.latestValues, s, c, u)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                (this.animationProgress = s));
            }),
            this.mixTargetDelta(1e3 * !!this.options.layoutRoot));
        }
        startAnimation(t) {
          (this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && ((0, m.cancelFrame)(this.pendingAnimation), (this.pendingAnimation = void 0)),
            (this.pendingAnimation = m.frame.update(() => {
              ((Q.hasAnimatedSinceResize = !0),
                (this.currentAnimation = tm(0, 1e3, {
                  ...t,
                  onUpdate: (e) => {
                    (this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e));
                  },
                  onComplete: () => {
                    (t.onComplete && t.onComplete(), this.completeAnimation());
                  },
                })),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                (this.pendingAnimation = void 0));
            })));
        }
        completeAnimation() {
          this.resumingFrom &&
            ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0));
          let t = this.getStack();
          (t && t.exitAnimationComplete(),
            (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
            this.notifyListeners("animationComplete"));
        }
        finishAnimation() {
          (this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()),
            this.completeAnimation());
        }
        applyTransformsToTarget() {
          let t = this.getLead(),
            { targetWithTransforms: e, target: i, layout: s, latestValues: o } = t;
          if (e && i && s) {
            if (this !== t && this.layout && s && em(this.options.animationType, this.layout.layoutBox, s.layoutBox)) {
              i = this.target || (0, b.createBox)();
              let e = D(this.layout.layoutBox.x);
              ((i.x.min = t.target.x.min), (i.x.max = i.x.min + e));
              let s = D(this.layout.layoutBox.y);
              ((i.y.min = t.target.y.min), (i.y.max = i.y.min + s));
            }
            (tb(e, i), (0, tM.transformBox)(e, o), S(this.projectionDeltaWithTransform, this.layoutCorrected, e, o));
          }
        }
        registerSharedNode(t, e) {
          (this.sharedNodes.has(t) || this.sharedNodes.set(t, new tY()), this.sharedNodes.get(t).add(e));
          let i = e.options.initialPromotionConfig;
          e.promote({
            transition: i ? i.transition : void 0,
            preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0,
          });
        }
        isLead() {
          let t = this.getStack();
          return !t || t.lead === this;
        }
        getLead() {
          var t;
          let { layoutId: e } = this.options;
          return (e && (null == (t = this.getStack()) ? void 0 : t.lead)) || this;
        }
        getPrevLead() {
          var t;
          let { layoutId: e } = this.options;
          return e ? (null == (t = this.getStack()) ? void 0 : t.prevLead) : void 0;
        }
        getStack() {
          let { layoutId: t } = this.options;
          if (t) return this.root.sharedNodes.get(t);
        }
        promote({ needsReset: t, transition: e, preserveFollowOpacity: i } = {}) {
          let s = this.getStack();
          (s && s.promote(this, i),
            t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
            e && this.setOptions({ transition: e }));
        }
        relegate() {
          let t = this.getStack();
          return !!t && t.relegate(this);
        }
        resetSkewAndRotation() {
          let { visualElement: t } = this.options;
          if (!t) return;
          let e = !1,
            { latestValues: i } = t;
          if (((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0), !e)) return;
          let s = {};
          i.z && t0("z", t, s, this.animationValues);
          for (let e = 0; e < t_.length; e++)
            (t0(`rotate${t_[e]}`, t, s, this.animationValues), t0(`skew${t_[e]}`, t, s, this.animationValues));
          for (let e in (t.render(), s))
            (t.setStaticValue(e, s[e]), this.animationValues && (this.animationValues[e] = s[e]));
          t.scheduleRender();
        }
        getProjectionStyles(t) {
          var e, i;
          if (!this.instance || this.isSVG) return;
          if (!this.isVisible) return tJ;
          let s = { visibility: "" },
            o = this.getTransformTemplate();
          if (this.needsReset)
            return (
              (this.needsReset = !1),
              (s.opacity = ""),
              (s.pointerEvents = tD(null == t ? void 0 : t.pointerEvents) || ""),
              (s.transform = o ? o(this.latestValues, "") : "none"),
              s
            );
          let r = this.getLead();
          if (!this.projectionDelta || !this.layout || !r.target) {
            let e = {};
            return (
              this.options.layoutId &&
                ((e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1),
                (e.pointerEvents = tD(null == t ? void 0 : t.pointerEvents) || "")),
              this.hasProjected &&
                !(0, tq.hasTransform)(this.latestValues) &&
                ((e.transform = o ? o({}, "") : "none"), (this.hasProjected = !1)),
              e
            );
          }
          let a = r.animationValues || r.latestValues;
          (this.applyTransformsToTarget(),
            (s.transform = (function (t, e, i) {
              let s = "",
                o = t.x.translate / e.x,
                r = t.y.translate / e.y,
                a = (null == i ? void 0 : i.z) || 0;
              if (
                ((o || r || a) && (s = `translate3d(${o}px, ${r}px, ${a}px) `),
                (1 !== e.x || 1 !== e.y) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
                i)
              ) {
                let { transformPerspective: t, rotate: e, rotateX: o, rotateY: r, skewX: a, skewY: n } = i;
                (t && (s = `perspective(${t}px) ${s}`),
                  e && (s += `rotate(${e}deg) `),
                  o && (s += `rotateX(${o}deg) `),
                  r && (s += `rotateY(${r}deg) `),
                  a && (s += `skewX(${a}deg) `),
                  n && (s += `skewY(${n}deg) `));
              }
              let n = t.x.scale * e.x,
                l = t.y.scale * e.y;
              return ((1 !== n || 1 !== l) && (s += `scale(${n}, ${l})`), s || "none");
            })(this.projectionDeltaWithTransform, this.treeScale, a)),
            o && (s.transform = o(a, s.transform)));
          let { x: n, y: l } = this.projectionDelta;
          for (let t in ((s.transformOrigin = `${100 * n.origin}% ${100 * l.origin}% 0`),
          r.animationValues
            ? (s.opacity =
                r === this
                  ? null != (i = null != (e = a.opacity) ? e : this.latestValues.opacity)
                    ? i
                    : 1
                  : this.preserveOpacity
                    ? this.latestValues.opacity
                    : a.opacityExit)
            : (s.opacity =
                r === this ? (void 0 !== a.opacity ? a.opacity : "") : void 0 !== a.opacityExit ? a.opacityExit : 0),
          ts.scaleCorrectors)) {
            if (void 0 === a[t]) continue;
            let { correct: e, applyTo: i } = ts.scaleCorrectors[t],
              o = "none" === s.transform ? a[t] : e(a[t], r);
            if (i) {
              let t = i.length;
              for (let e = 0; e < t; e++) s[i[e]] = o;
            } else s[t] = o;
          }
          return (
            this.options.layoutId &&
              (s.pointerEvents = r === this ? tD(null == t ? void 0 : t.pointerEvents) || "" : "none"),
            s
          );
        }
        clearSnapshot() {
          this.resumeFrom = this.snapshot = void 0;
        }
        resetTree() {
          (this.root.nodes.forEach((t) => {
            var e;
            return null == (e = t.currentAnimation) ? void 0 : e.stop();
          }),
            this.root.nodes.forEach(t6),
            this.root.sharedNodes.clear());
        }
      };
    }
    function t9(t) {
      t.updateLayout();
    }
    function t2(t) {
      var e;
      let i = (null == (e = t.resumeFrom) ? void 0 : e.snapshot) || t.snapshot;
      if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
        let { layoutBox: e, measuredBox: s } = t.layout,
          { animationType: o } = t.options,
          r = i.source !== t.layout.source;
        "size" === o
          ? C((t) => {
              let s = r ? i.measuredBox[t] : i.layoutBox[t],
                o = D(s);
              ((s.min = e[t].min), (s.max = s.min + o));
            })
          : em(o, i.layoutBox, e) &&
            C((s) => {
              let o = r ? i.measuredBox[s] : i.layoutBox[s],
                a = D(e[s]);
              ((o.max = o.min + a),
                t.relativeTarget &&
                  !t.currentAnimation &&
                  ((t.isProjectionDirty = !0), (t.relativeTarget[s].max = t.relativeTarget[s].min + a)));
            });
        let a = (0, b.createDelta)();
        S(a, e, i.layoutBox);
        let n = (0, b.createDelta)();
        r ? S(n, t.applyTransform(s, !0), i.measuredBox) : S(n, e, i.layoutBox);
        let l = !t$(a),
          h = !1;
        if (!t.resumeFrom) {
          let s = t.getClosestProjectingParent();
          if (s && !s.resumeFrom) {
            let { snapshot: o, layout: r } = s;
            if (o && r) {
              let a = (0, b.createBox)();
              R(a, i.layoutBox, o.layoutBox);
              let n = (0, b.createBox)();
              (R(n, e, r.layoutBox),
                tG(a, n) || (h = !0),
                s.options.layoutRoot && ((t.relativeTarget = n), (t.relativeTargetOrigin = a), (t.relativeParent = s)));
            }
          }
        }
        t.notifyListeners("didUpdate", {
          layout: e,
          snapshot: i,
          delta: n,
          layoutDelta: a,
          hasLayoutChanged: l,
          hasRelativeTargetChanged: h,
        });
      } else if (t.isLead()) {
        let { onExitComplete: e } = t.options;
        e && e();
      }
      t.options.transition = void 0;
    }
    function t7(t) {
      (tZ && tK.totalNodes++,
        t.parent &&
          (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
          t.isSharedProjectionDirty ||
            (t.isSharedProjectionDirty = !!(
              t.isProjectionDirty ||
              t.parent.isProjectionDirty ||
              t.parent.isSharedProjectionDirty
            )),
          t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty)));
    }
    function t3(t) {
      t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
    }
    function t5(t) {
      t.clearSnapshot();
    }
    function t6(t) {
      t.clearMeasurements();
    }
    function t4(t) {
      t.isLayoutDirty = !1;
    }
    function t8(t) {
      let { visualElement: e } = t.options;
      (e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform());
    }
    function et(t) {
      (t.finishAnimation(), (t.targetDelta = t.relativeTarget = t.target = void 0), (t.isProjectionDirty = !0));
    }
    function ee(t) {
      t.resolveTargetDelta();
    }
    function ei(t) {
      t.calcProjection();
    }
    function es(t) {
      t.resetSkewAndRotation();
    }
    function eo(t) {
      t.removeLeadSnapshot();
    }
    function er(t, e, i) {
      ((t.translate = (0, P.mixNumber)(e.translate, 0, i)),
        (t.scale = (0, P.mixNumber)(e.scale, 1, i)),
        (t.origin = e.origin),
        (t.originPoint = e.originPoint));
    }
    function ea(t, e, i, s) {
      ((t.min = (0, P.mixNumber)(e.min, i.min, s)), (t.max = (0, P.mixNumber)(e.max, i.max, s)));
    }
    function en(t) {
      return t.animationValues && void 0 !== t.animationValues.opacityExit;
    }
    let el = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
      eh = (t) => "u" > typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
      eu = eh("applewebkit/") && !eh("chrome/") ? Math.round : i.noop;
    function ec(t) {
      ((t.min = eu(t.min)), (t.max = eu(t.max)));
    }
    function em(t, e, i) {
      return "position" === t || ("preserve-aspect" === t && !(0.2 >= Math.abs(tH(e) - tH(i))));
    }
    function ed(t) {
      var e;
      return t !== t.root && (null == (e = t.scroll) ? void 0 : e.wasRoot);
    }
    let ep = t1({
        attachResizeListener: (t, e) => (0, n.addDomEvent)(t, "resize", e),
        measureScroll: () => ({
          x: document.documentElement.scrollLeft || document.body.scrollLeft,
          y: document.documentElement.scrollTop || document.body.scrollTop,
        }),
        checkIsScrollRoot: () => !0,
      }),
      eg = { current: void 0 },
      ef = t1({
        measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
        defaultParent: () => {
          if (!eg.current) {
            let t = new ep({});
            (t.mount(window), t.setOptions({ layoutScroll: !0 }), (eg.current = t));
          }
          return eg.current;
        },
        resetTransform: (t, e) => {
          t.style.transform = void 0 !== e ? e : "none";
        },
        checkIsScrollRoot: (t) => "fixed" === window.getComputedStyle(t).position,
      }),
      ev = { pan: { Feature: X }, drag: { Feature: W, ProjectionNode: ef, MeasureLayout: tn } };
    t.s(["drag", 0, ev], 807619);
    let ey = { layout: { ProjectionNode: ef, MeasureLayout: tn } };
    t.s(["layout", 0, ey], 769919);
    let ex = { ...t.i(614077).domAnimation, ...ev, ...ey };
    t.s(
      [
        "default",
        0,
        ex,
        "durations",
        0,
        { fast: 0.18, base: 0.32, slow: 0.5 },
        "easeInOut",
        0,
        [0.65, 0, 0.35, 1],
        "easeOut",
        0,
        [0.22, 1, 0.36, 1],
        "easeSlide",
        0,
        [0.32, 0.72, 0, 1],
        "easeSlideCss",
        0,
        "cubic-bezier(0.32, 0.72, 0, 1)",
      ],
      881986,
    );
  },
]);
