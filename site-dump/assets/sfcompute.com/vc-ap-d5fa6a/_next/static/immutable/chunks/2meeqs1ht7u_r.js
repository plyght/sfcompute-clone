(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  47238,
  611209,
  (t) => {
    "use strict";
    function n(t, n, e) {
      ((t.prototype = n.prototype = e), (e.constructor = t));
    }
    function e(t, n) {
      var e = Object.create(t.prototype);
      for (var r in n) e[r] = n[r];
      return e;
    }
    function r() {}
    t.s(["default", 0, n, "extend", 0, e], 611209);
    var i = "\\s*([+-]?\\d+)\\s*",
      u = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      a = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      o = /^#([0-9a-f]{3,8})$/,
      l = RegExp(`^rgb\\(${i},${i},${i}\\)$`),
      f = RegExp(`^rgb\\(${a},${a},${a}\\)$`),
      c = RegExp(`^rgba\\(${i},${i},${i},${u}\\)$`),
      s = RegExp(`^rgba\\(${a},${a},${a},${u}\\)$`),
      h = RegExp(`^hsl\\(${u},${a},${a}\\)$`),
      d = RegExp(`^hsla\\(${u},${a},${a},${u}\\)$`),
      g = {
        aliceblue: 0xf0f8ff,
        antiquewhite: 0xfaebd7,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 0xf0ffff,
        beige: 0xf5f5dc,
        bisque: 0xffe4c4,
        black: 0,
        blanchedalmond: 0xffebcd,
        blue: 255,
        blueviolet: 9055202,
        brown: 0xa52a2a,
        burlywood: 0xdeb887,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 0xd2691e,
        coral: 0xff7f50,
        cornflowerblue: 6591981,
        cornsilk: 0xfff8dc,
        crimson: 0xdc143c,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 0xb8860b,
        darkgray: 0xa9a9a9,
        darkgreen: 25600,
        darkgrey: 0xa9a9a9,
        darkkhaki: 0xbdb76b,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 0xff8c00,
        darkorchid: 0x9932cc,
        darkred: 9109504,
        darksalmon: 0xe9967a,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 0xff1493,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 0xb22222,
        floralwhite: 0xfffaf0,
        forestgreen: 2263842,
        fuchsia: 0xff00ff,
        gainsboro: 0xdcdcdc,
        ghostwhite: 0xf8f8ff,
        gold: 0xffd700,
        goldenrod: 0xdaa520,
        gray: 8421504,
        green: 32768,
        greenyellow: 0xadff2f,
        grey: 8421504,
        honeydew: 0xf0fff0,
        hotpink: 0xff69b4,
        indianred: 0xcd5c5c,
        indigo: 4915330,
        ivory: 0xfffff0,
        khaki: 0xf0e68c,
        lavender: 0xe6e6fa,
        lavenderblush: 0xfff0f5,
        lawngreen: 8190976,
        lemonchiffon: 0xfffacd,
        lightblue: 0xadd8e6,
        lightcoral: 0xf08080,
        lightcyan: 0xe0ffff,
        lightgoldenrodyellow: 0xfafad2,
        lightgray: 0xd3d3d3,
        lightgreen: 9498256,
        lightgrey: 0xd3d3d3,
        lightpink: 0xffb6c1,
        lightsalmon: 0xffa07a,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 0xb0c4de,
        lightyellow: 0xffffe0,
        lime: 65280,
        limegreen: 3329330,
        linen: 0xfaf0e6,
        magenta: 0xff00ff,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 0xba55d3,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 0xc71585,
        midnightblue: 1644912,
        mintcream: 0xf5fffa,
        mistyrose: 0xffe4e1,
        moccasin: 0xffe4b5,
        navajowhite: 0xffdead,
        navy: 128,
        oldlace: 0xfdf5e6,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 0xffa500,
        orangered: 0xff4500,
        orchid: 0xda70d6,
        palegoldenrod: 0xeee8aa,
        palegreen: 0x98fb98,
        paleturquoise: 0xafeeee,
        palevioletred: 0xdb7093,
        papayawhip: 0xffefd5,
        peachpuff: 0xffdab9,
        peru: 0xcd853f,
        pink: 0xffc0cb,
        plum: 0xdda0dd,
        powderblue: 0xb0e0e6,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 0xff0000,
        rosybrown: 0xbc8f8f,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 0xfa8072,
        sandybrown: 0xf4a460,
        seagreen: 3050327,
        seashell: 0xfff5ee,
        sienna: 0xa0522d,
        silver: 0xc0c0c0,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 0xfffafa,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 0xd2b48c,
        teal: 32896,
        thistle: 0xd8bfd8,
        tomato: 0xff6347,
        turquoise: 4251856,
        violet: 0xee82ee,
        wheat: 0xf5deb3,
        white: 0xffffff,
        whitesmoke: 0xf5f5f5,
        yellow: 0xffff00,
        yellowgreen: 0x9acd32,
      };
    function p() {
      return this.rgb().formatHex();
    }
    function y() {
      return this.rgb().formatRgb();
    }
    function m(t) {
      var n, e;
      return (
        (t = (t + "").trim().toLowerCase()),
        (n = o.exec(t))
          ? ((e = n[1].length),
            (n = parseInt(n[1], 16)),
            6 === e
              ? v(n)
              : 3 === e
                ? new w(((n >> 8) & 15) | ((n >> 4) & 240), ((n >> 4) & 15) | (240 & n), ((15 & n) << 4) | (15 & n), 1)
                : 8 === e
                  ? M((n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, (255 & n) / 255)
                  : 4 === e
                    ? M(
                        ((n >> 12) & 15) | ((n >> 8) & 240),
                        ((n >> 8) & 15) | ((n >> 4) & 240),
                        ((n >> 4) & 15) | (240 & n),
                        (((15 & n) << 4) | (15 & n)) / 255,
                      )
                    : null)
          : (n = l.exec(t))
            ? new w(n[1], n[2], n[3], 1)
            : (n = f.exec(t))
              ? new w((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, 1)
              : (n = c.exec(t))
                ? M(n[1], n[2], n[3], n[4])
                : (n = s.exec(t))
                  ? M((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, n[4])
                  : (n = h.exec(t))
                    ? C(n[1], n[2] / 100, n[3] / 100, 1)
                    : (n = d.exec(t))
                      ? C(n[1], n[2] / 100, n[3] / 100, n[4])
                      : g.hasOwnProperty(t)
                        ? v(g[t])
                        : "transparent" === t
                          ? new w(NaN, NaN, NaN, 0)
                          : null
      );
    }
    function v(t) {
      return new w((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
    }
    function M(t, n, e, r) {
      return (r <= 0 && (t = n = e = NaN), new w(t, n, e, r));
    }
    function x(t) {
      return (t instanceof r || (t = m(t)), t) ? new w((t = t.rgb()).r, t.g, t.b, t.opacity) : new w();
    }
    function b(t, n, e, r) {
      return 1 == arguments.length ? x(t) : new w(t, n, e, null == r ? 1 : r);
    }
    function w(t, n, e, r) {
      ((this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r));
    }
    function T() {
      return `#${N(this.r)}${N(this.g)}${N(this.b)}`;
    }
    function _() {
      let t = k(this.opacity);
      return `${1 === t ? "rgb(" : "rgba("}${$(this.r)}, ${$(this.g)}, ${$(this.b)}${1 === t ? ")" : `, ${t})`}`;
    }
    function k(t) {
      return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
    }
    function $(t) {
      return Math.max(0, Math.min(255, Math.round(t) || 0));
    }
    function N(t) {
      return ((t = $(t)) < 16 ? "0" : "") + t.toString(16);
    }
    function C(t, n, e, r) {
      return (r <= 0 ? (t = n = e = NaN) : e <= 0 || e >= 1 ? (t = n = NaN) : n <= 0 && (t = NaN), new S(t, n, e, r));
    }
    function D(t) {
      if (t instanceof S) return new S(t.h, t.s, t.l, t.opacity);
      if ((t instanceof r || (t = m(t)), !t)) return new S();
      if (t instanceof S) return t;
      var n = (t = t.rgb()).r / 255,
        e = t.g / 255,
        i = t.b / 255,
        u = Math.min(n, e, i),
        a = Math.max(n, e, i),
        o = NaN,
        l = a - u,
        f = (a + u) / 2;
      return (
        l
          ? ((o = n === a ? (e - i) / l + (e < i) * 6 : e === a ? (i - n) / l + 2 : (n - e) / l + 4),
            (l /= f < 0.5 ? a + u : 2 - a - u),
            (o *= 60))
          : (l = f > 0 && f < 1 ? 0 : o),
        new S(o, l, f, t.opacity)
      );
    }
    function U(t, n, e, r) {
      return 1 == arguments.length ? D(t) : new S(t, n, e, null == r ? 1 : r);
    }
    function S(t, n, e, r) {
      ((this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r));
    }
    function Y(t) {
      return (t = (t || 0) % 360) < 0 ? t + 360 : t;
    }
    function A(t) {
      return Math.max(0, Math.min(1, t || 0));
    }
    function F(t, n, e) {
      return (t < 60 ? n + ((e - n) * t) / 60 : t < 180 ? e : t < 240 ? n + ((e - n) * (240 - t)) / 60 : n) * 255;
    }
    (n(r, m, {
      copy(t) {
        return Object.assign(new this.constructor(), this, t);
      },
      displayable() {
        return this.rgb().displayable();
      },
      hex: p,
      formatHex: p,
      formatHex8: function () {
        return this.rgb().formatHex8();
      },
      formatHsl: function () {
        return D(this).formatHsl();
      },
      formatRgb: y,
      toString: y,
    }),
      n(
        w,
        b,
        e(r, {
          brighter(t) {
            return (
              (t = null == t ? 1.4285714285714286 : Math.pow(1.4285714285714286, t)),
              new w(this.r * t, this.g * t, this.b * t, this.opacity)
            );
          },
          darker(t) {
            return ((t = null == t ? 0.7 : Math.pow(0.7, t)), new w(this.r * t, this.g * t, this.b * t, this.opacity));
          },
          rgb() {
            return this;
          },
          clamp() {
            return new w($(this.r), $(this.g), $(this.b), k(this.opacity));
          },
          displayable() {
            return (
              -0.5 <= this.r &&
              this.r < 255.5 &&
              -0.5 <= this.g &&
              this.g < 255.5 &&
              -0.5 <= this.b &&
              this.b < 255.5 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          hex: T,
          formatHex: T,
          formatHex8: function () {
            return `#${N(this.r)}${N(this.g)}${N(this.b)}${N((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
          },
          formatRgb: _,
          toString: _,
        }),
      ),
      n(
        S,
        U,
        e(r, {
          brighter(t) {
            return (
              (t = null == t ? 1.4285714285714286 : Math.pow(1.4285714285714286, t)),
              new S(this.h, this.s, this.l * t, this.opacity)
            );
          },
          darker(t) {
            return ((t = null == t ? 0.7 : Math.pow(0.7, t)), new S(this.h, this.s, this.l * t, this.opacity));
          },
          rgb() {
            var t = (this.h % 360) + (this.h < 0) * 360,
              n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
              e = this.l,
              r = e + (e < 0.5 ? e : 1 - e) * n,
              i = 2 * e - r;
            return new w(
              F(t >= 240 ? t - 240 : t + 120, i, r),
              F(t, i, r),
              F(t < 120 ? t + 240 : t - 120, i, r),
              this.opacity,
            );
          },
          clamp() {
            return new S(Y(this.h), A(this.s), A(this.l), k(this.opacity));
          },
          displayable() {
            return (
              ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
              0 <= this.l &&
              this.l <= 1 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          formatHsl() {
            let t = k(this.opacity);
            return `${1 === t ? "hsl(" : "hsla("}${Y(this.h)}, ${100 * A(this.s)}%, ${100 * A(this.l)}%${1 === t ? ")" : `, ${t})`}`;
          },
        }),
      ),
      t.s(
        [
          "Color",
          0,
          r,
          "Rgb",
          0,
          w,
          "brighter",
          0,
          1.4285714285714286,
          "darker",
          0,
          0.7,
          "default",
          0,
          m,
          "hsl",
          0,
          U,
          "rgb",
          0,
          b,
          "rgbConvert",
          0,
          x,
        ],
        47238,
      ));
  },
  479996,
  (t) => {
    "use strict";
    var n = t.i(47238);
    t.s(["color", () => n.default]);
  },
  565445,
  100625,
  825004,
  (t) => {
    "use strict";
    var n = t.i(47238);
    function e(t, n, e, r, i) {
      var u = t * t,
        a = u * t;
      return ((1 - 3 * t + 3 * u - a) * n + (4 - 6 * u + 3 * a) * e + (1 + 3 * t + 3 * u - 3 * a) * r + a * i) / 6;
    }
    let r = (t) => () => t;
    function i(t, n) {
      return function (e) {
        return t + e * n;
      };
    }
    function u(t) {
      return 1 == (t *= 1)
        ? a
        : function (n, e) {
            var i, u, a;
            return e - n
              ? ((i = n),
                (u = e),
                (i = Math.pow(i, (a = t))),
                (u = Math.pow(u, a) - i),
                (a = 1 / a),
                function (t) {
                  return Math.pow(i + t * u, a);
                })
              : r(isNaN(n) ? e : n);
          };
    }
    function a(t, n) {
      var e = n - t;
      return e ? i(t, e) : r(isNaN(t) ? n : t);
    }
    (t.s(["default", 0, r], 100625),
      t.s(
        [
          "default",
          0,
          a,
          "gamma",
          0,
          u,
          "hue",
          0,
          function (t, n) {
            var e = n - t;
            return e ? i(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : r(isNaN(t) ? n : t);
          },
        ],
        825004,
      ));
    let o = (function t(e) {
      var r = u(e);
      function i(t, e) {
        var i = r((t = (0, n.rgb)(t)).r, (e = (0, n.rgb)(e)).r),
          u = r(t.g, e.g),
          o = r(t.b, e.b),
          l = a(t.opacity, e.opacity);
        return function (n) {
          return ((t.r = i(n)), (t.g = u(n)), (t.b = o(n)), (t.opacity = l(n)), t + "");
        };
      }
      return ((i.gamma = t), i);
    })(1);
    function l(t) {
      return function (e) {
        var r,
          i,
          u = e.length,
          a = Array(u),
          o = Array(u),
          l = Array(u);
        for (r = 0; r < u; ++r) ((i = (0, n.rgb)(e[r])), (a[r] = i.r || 0), (o[r] = i.g || 0), (l[r] = i.b || 0));
        return (
          (a = t(a)),
          (o = t(o)),
          (l = t(l)),
          (i.opacity = 1),
          function (t) {
            return ((i.r = a(t)), (i.g = o(t)), (i.b = l(t)), i + "");
          }
        );
      };
    }
    (l(function (t) {
      var n = t.length - 1;
      return function (r) {
        var i = r <= 0 ? (r = 0) : r >= 1 ? ((r = 1), n - 1) : Math.floor(r * n),
          u = t[i],
          a = t[i + 1],
          o = i > 0 ? t[i - 1] : 2 * u - a,
          l = i < n - 1 ? t[i + 2] : 2 * a - u;
        return e((r - i / n) * n, o, u, a, l);
      };
    }),
      l(function (t) {
        var n = t.length;
        return function (r) {
          var i = Math.floor(((r %= 1) < 0 ? ++r : r) * n),
            u = t[(i + n - 1) % n],
            a = t[i % n],
            o = t[(i + 1) % n],
            l = t[(i + 2) % n];
          return e((r - i / n) * n, u, a, o, l);
        };
      }),
      t.s(["default", 0, o], 565445));
  },
  185654,
  (t) => {
    "use strict";
    t.s(
      [
        "interpolateRound",
        0,
        function (t, n) {
          return (
            (t *= 1),
            (n *= 1),
            function (e) {
              return Math.round(t * (1 - e) + n * e);
            }
          );
        },
      ],
      185654,
    );
  },
  944307,
  685575,
  552491,
  (t) => {
    "use strict";
    t.s(["default", () => o], 685575);
    var n = t.i(479996),
      e = t.i(565445);
    function r(t, n) {
      return (
        (t *= 1),
        (n *= 1),
        function (e) {
          return t * (1 - e) + n * e;
        }
      );
    }
    var i = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      u = RegExp(i.source, "g"),
      a = t.i(100625);
    function o(t, l) {
      var f,
        c,
        s = typeof l;
      return null == l || "boolean" === s
        ? (0, a.default)(l)
        : ("number" === s
            ? r
            : "string" === s
              ? (c = (0, n.color)(l))
                ? ((l = c), e.default)
                : function (t, n) {
                    var e,
                      a,
                      o,
                      l,
                      f,
                      c = (i.lastIndex = u.lastIndex = 0),
                      s = -1,
                      h = [],
                      d = [];
                    for (t += "", n += ""; (o = i.exec(t)) && (l = u.exec(n)); )
                      ((f = l.index) > c && ((f = n.slice(c, f)), h[s] ? (h[s] += f) : (h[++s] = f)),
                        (o = o[0]) === (l = l[0])
                          ? h[s]
                            ? (h[s] += l)
                            : (h[++s] = l)
                          : ((h[++s] = null), d.push({ i: s, x: r(o, l) })),
                        (c = u.lastIndex));
                    return (
                      c < n.length && ((f = n.slice(c)), h[s] ? (h[s] += f) : (h[++s] = f)),
                      h.length < 2
                        ? d[0]
                          ? ((e = d[0].x),
                            function (t) {
                              return e(t) + "";
                            })
                          : ((a = n),
                            function () {
                              return a;
                            })
                        : ((n = d.length),
                          function (t) {
                            for (var e, r = 0; r < n; ++r) h[(e = d[r]).i] = e.x(t);
                            return h.join("");
                          })
                    );
                  }
              : l instanceof n.color
                ? e.default
                : l instanceof Date
                  ? function (t, n) {
                      var e = new Date();
                      return (
                        (t *= 1),
                        (n *= 1),
                        function (r) {
                          return (e.setTime(t * (1 - r) + n * r), e);
                        }
                      );
                    }
                  : !ArrayBuffer.isView((f = l)) || f instanceof DataView
                    ? Array.isArray(l)
                      ? function (t, n) {
                          var e,
                            r = n ? n.length : 0,
                            i = t ? Math.min(r, t.length) : 0,
                            u = Array(i),
                            a = Array(r);
                          for (e = 0; e < i; ++e) u[e] = o(t[e], n[e]);
                          for (; e < r; ++e) a[e] = n[e];
                          return function (t) {
                            for (e = 0; e < i; ++e) a[e] = u[e](t);
                            return a;
                          };
                        }
                      : ("function" != typeof l.valueOf && "function" != typeof l.toString) || isNaN(l)
                        ? function (t, n) {
                            var e,
                              r = {},
                              i = {};
                            for (e in ((null === t || "object" != typeof t) && (t = {}),
                            (null === n || "object" != typeof n) && (n = {}),
                            n))
                              e in t ? (r[e] = o(t[e], n[e])) : (i[e] = n[e]);
                            return function (t) {
                              for (e in r) i[e] = r[e](t);
                              return i;
                            };
                          }
                        : r
                    : function (t, n) {
                        n || (n = []);
                        var e,
                          r = t ? Math.min(n.length, t.length) : 0,
                          i = n.slice();
                        return function (u) {
                          for (e = 0; e < r; ++e) i[e] = t[e] * (1 - u) + n[e] * u;
                          return i;
                        };
                      })(t, l);
    }
    (t.s(["interpolate", 0, o], 944307), t.s(["interpolateNumber", 0, r], 552491));
  },
  410042,
  410990,
  994260,
  203076,
  882108,
  (t) => {
    "use strict";
    let n = Math.sqrt(50),
      e = Math.sqrt(10),
      r = Math.sqrt(2);
    function i(t, u, a) {
      let o,
        l,
        f,
        c = (u - t) / Math.max(0, a),
        s = Math.floor(Math.log10(c)),
        h = c / Math.pow(10, s),
        d = h >= n ? 10 : h >= e ? 5 : h >= r ? 2 : 1;
      return (s < 0
        ? ((o = Math.round(t * (f = Math.pow(10, -s) / d))),
          (l = Math.round(u * f)),
          o / f < t && ++o,
          l / f > u && --l,
          (f = -f))
        : ((o = Math.round(t / (f = Math.pow(10, s) * d))),
          (l = Math.round(u / f)),
          o * f < t && ++o,
          l * f > u && --l),
      l < o && 0.5 <= a && a < 2)
        ? i(t, u, 2 * a)
        : [o, l, f];
    }
    function u(t, n, e) {
      if (((n *= 1), (t *= 1), !((e *= 1) > 0))) return [];
      if (t === n) return [t];
      let r = n < t,
        [u, a, o] = r ? i(n, t, e) : i(t, n, e);
      if (!(a >= u)) return [];
      let l = a - u + 1,
        f = Array(l);
      if (r)
        if (o < 0) for (let t = 0; t < l; ++t) f[t] = -((a - t) / o);
        else for (let t = 0; t < l; ++t) f[t] = (a - t) * o;
      else if (o < 0) for (let t = 0; t < l; ++t) f[t] = -((u + t) / o);
      else for (let t = 0; t < l; ++t) f[t] = (u + t) * o;
      return f;
    }
    function a(t, n, e) {
      return i((t *= 1), (n *= 1), (e *= 1))[2];
    }
    function o(t, n) {
      return null == t || null == n ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
    }
    function l(t, n) {
      return null == t || null == n ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
    }
    function f(t) {
      let n, e, r;
      function i(t, r, u = 0, a = t.length) {
        if (u < a) {
          if (0 !== n(r, r)) return a;
          do {
            let n = (u + a) >>> 1;
            0 > e(t[n], r) ? (u = n + 1) : (a = n);
          } while (u < a);
        }
        return u;
      }
      return (
        2 !== t.length
          ? ((n = o), (e = (n, e) => o(t(n), e)), (r = (n, e) => t(n) - e))
          : ((n = t === o || t === l ? t : c), (e = t), (r = t)),
        {
          left: i,
          center: function (t, n, e = 0, u = t.length) {
            let a = i(t, n, e, u - 1);
            return a > e && r(t[a - 1], n) > -r(t[a], n) ? a - 1 : a;
          },
          right: function (t, r, i = 0, u = t.length) {
            if (i < u) {
              if (0 !== n(r, r)) return u;
              do {
                let n = (i + u) >>> 1;
                0 >= e(t[n], r) ? (i = n + 1) : (u = n);
              } while (i < u);
            }
            return i;
          },
        }
      );
    }
    function c() {
      return 0;
    }
    function s(t) {
      return null === t ? NaN : +t;
    }
    (t.s(
      [
        "default",
        0,
        u,
        "tickIncrement",
        0,
        a,
        "tickStep",
        0,
        function (t, n, e) {
          ((n *= 1), (t *= 1), (e *= 1));
          let r = n < t,
            i = r ? a(n, t, e) : a(t, n, e);
          return (r ? -1 : 1) * (i < 0 ? -(1 / i) : i);
        },
      ],
      410990,
    ),
      t.s(["ticks", 0, u], 410042),
      t.s(["default", 0, o], 994260),
      t.s(
        [
          "default",
          0,
          s,
          "numbers",
          0,
          function* (t, n) {
            if (void 0 === n) for (let n of t) null != n && (n *= 1) >= n && (yield n);
            else {
              let e = -1;
              for (let r of t) null != (r = n(r, ++e, t)) && (r *= 1) >= r && (yield r);
            }
          },
        ],
        203076,
      ));
    let h = f(o),
      d = h.right;
    (h.left, f(s).center, t.s(["bisect", 0, d], 882108));
  },
  182984,
  365332,
  65232,
  (t) => {
    "use strict";
    function n(t, n) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(t);
          break;
        default:
          this.range(n).domain(t);
      }
      return this;
    }
    t.s(
      [
        "initInterpolator",
        0,
        function (t, n) {
          switch (arguments.length) {
            case 0:
              break;
            case 1:
              "function" == typeof t ? this.interpolator(t) : this.range(t);
              break;
            default:
              (this.domain(t), "function" == typeof n ? this.interpolator(n) : this.range(n));
          }
          return this;
        },
        "initRange",
        0,
        n,
      ],
      365332,
    );
    class e extends Map {
      constructor(t, n = i) {
        if ((super(), Object.defineProperties(this, { _intern: { value: new Map() }, _key: { value: n } }), null != t))
          for (const [n, e] of t) this.set(n, e);
      }
      get(t) {
        return super.get(r(this, t));
      }
      has(t) {
        return super.has(r(this, t));
      }
      set(t, n) {
        return super.set(
          (function ({ _intern: t, _key: n }, e) {
            let r = n(e);
            return t.has(r) ? t.get(r) : (t.set(r, e), e);
          })(this, t),
          n,
        );
      }
      delete(t) {
        return super.delete(
          (function ({ _intern: t, _key: n }, e) {
            let r = n(e);
            return (t.has(r) && ((e = t.get(r)), t.delete(r)), e);
          })(this, t),
        );
      }
    }
    function r({ _intern: t, _key: n }, e) {
      let i = n(e);
      return t.has(i) ? t.get(i) : e;
    }
    function i(t) {
      return null !== t && "object" == typeof t ? t.valueOf() : t;
    }
    let u = Symbol("implicit");
    function a() {
      var t = new e(),
        r = [],
        i = [],
        o = u;
      function l(n) {
        let e = t.get(n);
        if (void 0 === e) {
          if (o !== u) return o;
          t.set(n, (e = r.push(n) - 1));
        }
        return i[e % i.length];
      }
      return (
        (l.domain = function (n) {
          if (!arguments.length) return r.slice();
          for (let i of ((r = []), (t = new e()), n)) t.has(i) || t.set(i, r.push(i) - 1);
          return l;
        }),
        (l.range = function (t) {
          return arguments.length ? ((i = Array.from(t)), l) : i.slice();
        }),
        (l.unknown = function (t) {
          return arguments.length ? ((o = t), l) : o;
        }),
        (l.copy = function () {
          return a(r, i).unknown(o);
        }),
        n.apply(l, arguments),
        l
      );
    }
    function o() {
      var t,
        e,
        r = a().unknown(void 0),
        i = r.domain,
        u = r.range,
        l = 0,
        f = 1,
        c = !1,
        s = 0,
        h = 0,
        d = 0.5;
      function g() {
        var n = i().length,
          r = f < l,
          a = r ? f : l,
          o = r ? l : f;
        ((t = (o - a) / Math.max(1, n - s + 2 * h)),
          c && (t = Math.floor(t)),
          (a += (o - a - t * (n - s)) * d),
          (e = t * (1 - s)),
          c && ((a = Math.round(a)), (e = Math.round(e))));
        var g = (function (t, n, e) {
          ((t *= 1), (n *= 1), (e = (i = arguments.length) < 2 ? ((n = t), (t = 0), 1) : i < 3 ? 1 : +e));
          for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), u = Array(i); ++r < i; ) u[r] = t + r * e;
          return u;
        })(n).map(function (n) {
          return a + t * n;
        });
        return u(r ? g.reverse() : g);
      }
      return (
        delete r.unknown,
        (r.domain = function (t) {
          return arguments.length ? (i(t), g()) : i();
        }),
        (r.range = function (t) {
          return arguments.length ? (([l, f] = t), (l *= 1), (f *= 1), g()) : [l, f];
        }),
        (r.rangeRound = function (t) {
          return (([l, f] = t), (l *= 1), (f *= 1), (c = !0), g());
        }),
        (r.bandwidth = function () {
          return e;
        }),
        (r.step = function () {
          return t;
        }),
        (r.round = function (t) {
          return arguments.length ? ((c = !!t), g()) : c;
        }),
        (r.padding = function (t) {
          return arguments.length ? ((s = Math.min(1, (h = +t))), g()) : s;
        }),
        (r.paddingInner = function (t) {
          return arguments.length ? ((s = Math.min(1, t)), g()) : s;
        }),
        (r.paddingOuter = function (t) {
          return arguments.length ? ((h = +t), g()) : h;
        }),
        (r.align = function (t) {
          return arguments.length ? ((d = Math.max(0, Math.min(1, t))), g()) : d;
        }),
        (r.copy = function () {
          return o(i(), [l, f]).round(c).paddingInner(s).paddingOuter(h).align(d);
        }),
        n.apply(g(), arguments)
      );
    }
    (t.s(["default", 0, a, "implicit", 0, u], 65232),
      t.s(
        [
          "default",
          0,
          o,
          "point",
          0,
          function () {
            return (function t(n) {
              var e = n.copy;
              return (
                (n.padding = n.paddingOuter),
                delete n.paddingInner,
                delete n.paddingOuter,
                (n.copy = function () {
                  return t(e());
                }),
                n
              );
            })(o.apply(null, arguments).paddingInner(1));
          },
        ],
        182984,
      ));
  },
  971351,
  997155,
  659086,
  818827,
  218055,
  579892,
  (t) => {
    "use strict";
    var n,
      e,
      r,
      i,
      u = t.i(410042),
      a = t.i(410990),
      o = t.i(882108),
      l = t.i(944307),
      f = t.i(552491),
      c = t.i(185654);
    function s(t) {
      return +t;
    }
    t.s(["default", 0, s], 997155);
    var h = [0, 1];
    function d(t) {
      return t;
    }
    function g(t, n) {
      var e;
      return (n -= t *= 1)
        ? function (e) {
            return (e - t) / n;
          }
        : ((e = isNaN(n) ? NaN : 0.5),
          function () {
            return e;
          });
    }
    function p(t, n, e) {
      var r = t[0],
        i = t[1],
        u = n[0],
        a = n[1];
      return (
        i < r ? ((r = g(i, r)), (u = e(a, u))) : ((r = g(r, i)), (u = e(u, a))),
        function (t) {
          return u(r(t));
        }
      );
    }
    function y(t, n, e) {
      var r = Math.min(t.length, n.length) - 1,
        i = Array(r),
        u = Array(r),
        a = -1;
      for (t[r] < t[0] && ((t = t.slice().reverse()), (n = n.slice().reverse())); ++a < r; )
        ((i[a] = g(t[a], t[a + 1])), (u[a] = e(n[a], n[a + 1])));
      return function (n) {
        var e = (0, o.bisect)(t, n, 1, r) - 1;
        return u[e](i[e](n));
      };
    }
    function m(t, n) {
      return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
    }
    function v() {
      var t,
        n,
        e,
        r,
        i,
        u,
        a = h,
        o = h,
        g = l.interpolate,
        m = d;
      function v() {
        var t,
          n,
          e,
          l = Math.min(a.length, o.length);
        return (
          m !== d &&
            ((t = a[0]),
            (n = a[l - 1]),
            t > n && ((e = t), (t = n), (n = e)),
            (m = function (e) {
              return Math.max(t, Math.min(n, e));
            })),
          (r = l > 2 ? y : p),
          (i = u = null),
          M
        );
      }
      function M(n) {
        return null == n || isNaN((n *= 1)) ? e : (i || (i = r(a.map(t), o, g)))(t(m(n)));
      }
      return (
        (M.invert = function (e) {
          return m(n((u || (u = r(o, a.map(t), f.interpolateNumber)))(e)));
        }),
        (M.domain = function (t) {
          return arguments.length ? ((a = Array.from(t, s)), v()) : a.slice();
        }),
        (M.range = function (t) {
          return arguments.length ? ((o = Array.from(t)), v()) : o.slice();
        }),
        (M.rangeRound = function (t) {
          return ((o = Array.from(t)), (g = c.interpolateRound), v());
        }),
        (M.clamp = function (t) {
          return arguments.length ? ((m = !!t || d), v()) : m !== d;
        }),
        (M.interpolate = function (t) {
          return arguments.length ? ((g = t), v()) : g;
        }),
        (M.unknown = function (t) {
          return arguments.length ? ((e = t), M) : e;
        }),
        function (e, r) {
          return ((t = e), (n = r), v());
        }
      );
    }
    function M() {
      return v()(d, d);
    }
    t.s(["copy", 0, m, "default", 0, M, "identity", 0, d, "transformer", 0, v], 659086);
    var x = t.i(365332);
    function b(t, n) {
      if (!isFinite(t) || 0 === t) return null;
      var e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e"),
        r = t.slice(0, e);
      return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
    }
    function w(t) {
      return (t = b(Math.abs(t))) ? t[1] : NaN;
    }
    var T = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function _(t) {
      var n;
      if (!(n = T.exec(t))) throw Error("invalid format: " + t);
      return new k({
        fill: n[1],
        align: n[2],
        sign: n[3],
        symbol: n[4],
        zero: n[5],
        width: n[6],
        comma: n[7],
        precision: n[8] && n[8].slice(1),
        trim: n[9],
        type: n[10],
      });
    }
    function k(t) {
      ((this.fill = void 0 === t.fill ? " " : t.fill + ""),
        (this.align = void 0 === t.align ? ">" : t.align + ""),
        (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
        (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
        (this.zero = !!t.zero),
        (this.width = void 0 === t.width ? void 0 : +t.width),
        (this.comma = !!t.comma),
        (this.precision = void 0 === t.precision ? void 0 : +t.precision),
        (this.trim = !!t.trim),
        (this.type = void 0 === t.type ? "" : t.type + ""));
    }
    function $(t, n) {
      var e = b(t, n);
      if (!e) return t + "";
      var r = e[0],
        i = e[1];
      return i < 0
        ? "0." + Array(-i).join("0") + r
        : r.length > i + 1
          ? r.slice(0, i + 1) + "." + r.slice(i + 1)
          : r + Array(i - r.length + 2).join("0");
    }
    ((_.prototype = k.prototype),
      (k.prototype.toString = function () {
        return (
          this.fill +
          this.align +
          this.sign +
          this.symbol +
          (this.zero ? "0" : "") +
          (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
          (this.comma ? "," : "") +
          (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) +
          (this.trim ? "~" : "") +
          this.type
        );
      }));
    let N = {
      "%": (t, n) => (100 * t).toFixed(n),
      b: (t) => Math.round(t).toString(2),
      c: (t) => t + "",
      d: function (t) {
        return Math.abs((t = Math.round(t))) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
      },
      e: (t, n) => t.toExponential(n),
      f: (t, n) => t.toFixed(n),
      g: (t, n) => t.toPrecision(n),
      o: (t) => Math.round(t).toString(8),
      p: (t, n) => $(100 * t, n),
      r: $,
      s: function (t, e) {
        var r = b(t, e);
        if (!r) return ((n = void 0), t.toPrecision(e));
        var i = r[0],
          u = r[1],
          a = u - (n = 3 * Math.max(-8, Math.min(8, Math.floor(u / 3)))) + 1,
          o = i.length;
        return a === o
          ? i
          : a > o
            ? i + Array(a - o + 1).join("0")
            : a > 0
              ? i.slice(0, a) + "." + i.slice(a)
              : "0." + Array(1 - a).join("0") + b(t, Math.max(0, e + a - 1))[0];
      },
      X: (t) => Math.round(t).toString(16).toUpperCase(),
      x: (t) => Math.round(t).toString(16),
    };
    function C(t) {
      return t;
    }
    var D = Array.prototype.map,
      U = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
    function S(t, n, e, u) {
      var o,
        l,
        f = (0, a.tickStep)(t, n, e);
      switch ((u = _(null == u ? ",f" : u)).type) {
        case "s":
          var c = Math.max(Math.abs(t), Math.abs(n));
          return (
            null != u.precision ||
              isNaN((l = Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(w(c) / 3))) - w(Math.abs(f))))) ||
              (u.precision = l),
            i(u, c)
          );
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != u.precision ||
            isNaN(
              (l = Math.max(0, w(Math.abs(Math.max(Math.abs(t), Math.abs(n))) - (o = Math.abs((o = f)))) - w(o)) + 1),
            ) ||
            (u.precision = l - ("e" === u.type));
          break;
        case "f":
        case "%":
          null != u.precision || isNaN((l = Math.max(0, -w(Math.abs(f))))) || (u.precision = l - ("%" === u.type) * 2);
      }
      return r(u);
    }
    function Y(t) {
      var n = t.domain;
      return (
        (t.ticks = function (t) {
          var e = n();
          return (0, u.ticks)(e[0], e[e.length - 1], null == t ? 10 : t);
        }),
        (t.tickFormat = function (t, e) {
          var r = n();
          return S(r[0], r[r.length - 1], null == t ? 10 : t, e);
        }),
        (t.nice = function (e) {
          null == e && (e = 10);
          var r,
            i,
            u = n(),
            o = 0,
            l = u.length - 1,
            f = u[o],
            c = u[l],
            s = 10;
          for (c < f && ((i = f), (f = c), (c = i), (i = o), (o = l), (l = i)); s-- > 0; ) {
            if ((i = (0, a.tickIncrement)(f, c, e)) === r) return ((u[o] = f), (u[l] = c), n(u));
            if (i > 0) ((f = Math.floor(f / i) * i), (c = Math.ceil(c / i) * i));
            else if (i < 0) ((f = Math.ceil(f * i) / i), (c = Math.floor(c * i) / i));
            else break;
            r = i;
          }
          return t;
        }),
        t
      );
    }
    ((r = (e = (function (t) {
      var e,
        r,
        i,
        u =
          void 0 === t.grouping || void 0 === t.thousands
            ? C
            : ((e = D.call(t.grouping, Number)),
              (r = t.thousands + ""),
              function (t, n) {
                for (
                  var i = t.length, u = [], a = 0, o = e[0], l = 0;
                  i > 0 &&
                  o > 0 &&
                  (l + o + 1 > n && (o = Math.max(1, n - l)),
                  u.push(t.substring((i -= o), i + o)),
                  !((l += o + 1) > n));
                )
                  o = e[(a = (a + 1) % e.length)];
                return u.reverse().join(r);
              }),
        a = void 0 === t.currency ? "" : t.currency[0] + "",
        o = void 0 === t.currency ? "" : t.currency[1] + "",
        l = void 0 === t.decimal ? "." : t.decimal + "",
        f =
          void 0 === t.numerals
            ? C
            : ((i = D.call(t.numerals, String)),
              function (t) {
                return t.replace(/[0-9]/g, function (t) {
                  return i[+t];
                });
              }),
        c = void 0 === t.percent ? "%" : t.percent + "",
        s = void 0 === t.minus ? "−" : t.minus + "",
        h = void 0 === t.nan ? "NaN" : t.nan + "";
      function d(t, e) {
        var r = (t = _(t)).fill,
          i = t.align,
          d = t.sign,
          g = t.symbol,
          p = t.zero,
          y = t.width,
          m = t.comma,
          v = t.precision,
          M = t.trim,
          x = t.type;
        ("n" === x ? ((m = !0), (x = "g")) : N[x] || (void 0 === v && (v = 12), (M = !0), (x = "g")),
          (p || ("0" === r && "=" === i)) && ((p = !0), (r = "0"), (i = "=")));
        var b =
            (e && void 0 !== e.prefix ? e.prefix : "") +
            ("$" === g ? a : "#" === g && /[boxX]/.test(x) ? "0" + x.toLowerCase() : ""),
          w = ("$" === g ? o : /[%p]/.test(x) ? c : "") + (e && void 0 !== e.suffix ? e.suffix : ""),
          T = N[x],
          k = /[defgprs%]/.test(x);
        function $(t) {
          var e,
            a,
            o,
            c = b,
            g = w;
          if ("c" === x) ((g = T(t) + g), (t = ""));
          else {
            var _ = (t *= 1) < 0 || 1 / t < 0;
            if (
              ((t = isNaN(t) ? h : T(Math.abs(t), v)),
              M &&
                (t = (function (t) {
                  t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r)
                    switch (t[r]) {
                      case ".":
                        i = n = r;
                        break;
                      case "0":
                        (0 === i && (i = r), (n = r));
                        break;
                      default:
                        if (!+t[r]) break t;
                        i > 0 && (i = 0);
                    }
                  return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t;
                })(t)),
              _ && 0 == +t && "+" !== d && (_ = !1),
              (c = (_ ? ("(" === d ? d : s) : "-" === d || "(" === d ? "" : d) + c),
              (g = ("s" !== x || isNaN(t) || void 0 === n ? "" : U[8 + n / 3]) + g + (_ && "(" === d ? ")" : "")),
              k)
            ) {
              for (e = -1, a = t.length; ++e < a; )
                if (48 > (o = t.charCodeAt(e)) || o > 57) {
                  ((g = (46 === o ? l + t.slice(e + 1) : t.slice(e)) + g), (t = t.slice(0, e)));
                  break;
                }
            }
          }
          m && !p && (t = u(t, 1 / 0));
          var $ = c.length + t.length + g.length,
            N = $ < y ? Array(y - $ + 1).join(r) : "";
          switch ((m && p && ((t = u(N + t, N.length ? y - g.length : 1 / 0)), (N = "")), i)) {
            case "<":
              t = c + t + g + N;
              break;
            case "=":
              t = c + N + t + g;
              break;
            case "^":
              t = N.slice(0, ($ = N.length >> 1)) + c + t + g + N.slice($);
              break;
            default:
              t = N + c + t + g;
          }
          return f(t);
        }
        return (
          (v = void 0 === v ? 6 : /[gprs]/.test(x) ? Math.max(1, Math.min(21, v)) : Math.max(0, Math.min(20, v))),
          ($.toString = function () {
            return t + "";
          }),
          $
        );
      }
      return {
        format: d,
        formatPrefix: function (t, n) {
          var e = 3 * Math.max(-8, Math.min(8, Math.floor(w(n) / 3))),
            r = Math.pow(10, -e),
            i = d((((t = _(t)).type = "f"), t), { suffix: U[8 + e / 3] });
          return function (t) {
            return i(r * t);
          };
        },
      };
    })({ thousands: ",", grouping: [3], currency: ["$", ""] })).format),
      (i = e.formatPrefix),
      t.s(["format", () => r, "formatPrefix", () => i], 818827),
      t.s(["formatSpecifier", 0, _], 218055),
      t.s(["default", 0, S], 579892),
      t.s(
        [
          "default",
          0,
          function t() {
            var n = M();
            return (
              (n.copy = function () {
                return m(n, t());
              }),
              x.initRange.apply(n, arguments),
              Y(n)
            );
          },
          "linearish",
          0,
          Y,
        ],
        971351,
      ));
  },
  476086,
  (t) => {
    "use strict";
    var n = t.i(410042),
      e = t.i(818827),
      r = t.i(218055),
      i = t.i(804327),
      u = t.i(659086),
      a = t.i(365332);
    function o(t) {
      return Math.log(t);
    }
    function l(t) {
      return Math.exp(t);
    }
    function f(t) {
      return -Math.log(-t);
    }
    function c(t) {
      return -Math.exp(-t);
    }
    function s(t) {
      return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
    }
    function h(t) {
      return (n, e) => -t(-n, e);
    }
    function d(t) {
      let u,
        a,
        d = t(o, l),
        g = d.domain,
        p = 10;
      function y() {
        var n, e;
        return (
          (u =
            (n = p) === Math.E
              ? Math.log
              : (10 === n && Math.log10) || (2 === n && Math.log2) || ((n = Math.log(n)), (t) => Math.log(t) / n)),
          (a = 10 === (e = p) ? s : e === Math.E ? Math.exp : (t) => Math.pow(e, t)),
          g()[0] < 0 ? ((u = h(u)), (a = h(a)), t(f, c)) : t(o, l),
          d
        );
      }
      return (
        (d.base = function (t) {
          return arguments.length ? ((p = +t), y()) : p;
        }),
        (d.domain = function (t) {
          return arguments.length ? (g(t), y()) : g();
        }),
        (d.ticks = (t) => {
          let e,
            r,
            i = g(),
            o = i[0],
            l = i[i.length - 1],
            f = l < o;
          f && ([o, l] = [l, o]);
          let c = u(o),
            s = u(l),
            h = null == t ? 10 : +t,
            d = [];
          if (!(p % 1) && s - c < h) {
            if (((c = Math.floor(c)), (s = Math.ceil(s)), o > 0)) {
              for (; c <= s; ++c)
                for (e = 1; e < p; ++e)
                  if (!((r = c < 0 ? e / a(-c) : e * a(c)) < o)) {
                    if (r > l) break;
                    d.push(r);
                  }
            } else
              for (; c <= s; ++c)
                for (e = p - 1; e >= 1; --e)
                  if (!((r = c > 0 ? e / a(-c) : e * a(c)) < o)) {
                    if (r > l) break;
                    d.push(r);
                  }
            2 * d.length < h && (d = (0, n.ticks)(o, l, h));
          } else d = (0, n.ticks)(c, s, Math.min(s - c, h)).map(a);
          return f ? d.reverse() : d;
        }),
        (d.tickFormat = (t, n) => {
          if (
            (null == t && (t = 10),
            null == n && (n = 10 === p ? "s" : ","),
            "function" != typeof n &&
              (p % 1 || null != (n = (0, r.formatSpecifier)(n)).precision || (n.trim = !0), (n = (0, e.format)(n))),
            t === 1 / 0)
          )
            return n;
          let i = Math.max(1, (p * t) / d.ticks().length);
          return (t) => {
            let e = t / a(Math.round(u(t)));
            return (e * p < p - 0.5 && (e *= p), e <= i ? n(t) : "");
          };
        }),
        (d.nice = () => g((0, i.default)(g(), { floor: (t) => a(Math.floor(u(t))), ceil: (t) => a(Math.ceil(u(t))) }))),
        d
      );
    }
    t.s([
      "default",
      0,
      function t() {
        let n = d((0, u.transformer)()).domain([1, 10]);
        return ((n.copy = () => (0, u.copy)(n, t()).base(n.base())), a.initRange.apply(n, arguments), n);
      },
      "loggish",
      0,
      d,
    ]);
  },
  804327,
  (t) => {
    "use strict";
    t.s([
      "default",
      0,
      function (t, n) {
        t = t.slice();
        var e,
          r = 0,
          i = t.length - 1,
          u = t[r],
          a = t[i];
        return (
          a < u && ((e = r), (r = i), (i = e), (e = u), (u = a), (a = e)),
          (t[r] = n.floor(u)),
          (t[i] = n.ceil(a)),
          t
        );
      },
    ]);
  },
  577296,
  (t) => {
    "use strict";
    var n = t.i(971351),
      e = t.i(659086),
      r = t.i(365332);
    function i(t) {
      return function (n) {
        return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
      };
    }
    function u(t) {
      return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
    }
    function a(t) {
      return t < 0 ? -t * t : t * t;
    }
    function o(t) {
      var r = t(e.identity, e.identity),
        o = 1;
      return (
        (r.exponent = function (n) {
          return arguments.length
            ? 1 == (o = +n)
              ? t(e.identity, e.identity)
              : 0.5 === o
                ? t(u, a)
                : t(i(o), i(1 / o))
            : o;
        }),
        (0, n.linearish)(r)
      );
    }
    function l() {
      var t = o((0, e.transformer)());
      return (
        (t.copy = function () {
          return (0, e.copy)(t, l()).exponent(t.exponent());
        }),
        r.initRange.apply(t, arguments),
        t
      );
    }
    t.s([
      "default",
      0,
      l,
      "powish",
      0,
      o,
      "sqrt",
      0,
      function () {
        return l.apply(null, arguments).exponent(0.5);
      },
    ]);
  },
  440163,
  573810,
  922976,
  (t) => {
    "use strict";
    var n = t.i(994260);
    t.s(["ascending", () => n.default], 573810);
    var n = n,
      e = t.i(882108);
    function r(t, n) {
      let e;
      if (void 0 === n) for (let n of t) null != n && (e < n || (void 0 === e && n >= n)) && (e = n);
      else {
        let r = -1;
        for (let i of t) null != (i = n(i, ++r, t)) && (e < i || (void 0 === e && i >= i)) && (e = i);
      }
      return e;
    }
    function i(t, n) {
      let e;
      if (void 0 === n) for (let n of t) null != n && (e > n || (void 0 === e && n >= n)) && (e = n);
      else {
        let r = -1;
        for (let i of t) null != (i = n(i, ++r, t)) && (e > i || (void 0 === e && i >= i)) && (e = i);
      }
      return e;
    }
    var u = n;
    function a(t, n) {
      return (null == t || !(t >= t)) - (null == n || !(n >= n)) || (t < n ? -1 : +(t > n));
    }
    function o(t, n, e) {
      let r = t[n];
      ((t[n] = t[e]), (t[e] = r));
    }
    var l = t.i(203076);
    function f(t, n, e = l.default) {
      if (!(!(r = t.length) || isNaN((n *= 1)))) {
        if (n <= 0 || r < 2) return +e(t[0], 0, t);
        if (n >= 1) return +e(t[r - 1], r - 1, t);
        var r,
          i = (r - 1) * n,
          u = Math.floor(i),
          a = +e(t[u], u, t);
        return a + (e(t[u + 1], u + 1, t) - a) * (i - u);
      }
    }
    t.s(
      [
        "default",
        0,
        function (t, n, e) {
          if (!(!(f = (t = Float64Array.from((0, l.numbers)(t, e))).length) || isNaN((n *= 1)))) {
            if (n <= 0 || f < 2) return i(t);
            if (n >= 1) return r(t);
            var f,
              c = (f - 1) * n,
              s = Math.floor(c),
              h = r(
                (function t(n, e, r = 0, i = 1 / 0, l) {
                  if (
                    ((e = Math.floor(e)),
                    (r = Math.floor(Math.max(0, r))),
                    (i = Math.floor(Math.min(n.length - 1, i))),
                    !(r <= e && e <= i))
                  )
                    return n;
                  for (
                    l =
                      void 0 === l
                        ? a
                        : (function (t = u.default) {
                            if (t === u.default) return a;
                            if ("function" != typeof t) throw TypeError("compare is not a function");
                            return (n, e) => {
                              let r = t(n, e);
                              return r || 0 === r ? r : (0 === t(e, e)) - (0 === t(n, n));
                            };
                          })(l);
                    i > r;
                  ) {
                    if (i - r > 600) {
                      let u = i - r + 1,
                        a = e - r + 1,
                        o = Math.log(u),
                        f = 0.5 * Math.exp((2 * o) / 3),
                        c = 0.5 * Math.sqrt((o * f * (u - f)) / u) * (a - u / 2 < 0 ? -1 : 1),
                        s = Math.max(r, Math.floor(e - (a * f) / u + c)),
                        h = Math.min(i, Math.floor(e + ((u - a) * f) / u + c));
                      t(n, e, s, h, l);
                    }
                    let u = n[e],
                      a = r,
                      f = i;
                    for (o(n, r, e), l(n[i], u) > 0 && o(n, r, i); a < f; ) {
                      for (o(n, a, f), ++a, --f; 0 > l(n[a], u); ) ++a;
                      for (; l(n[f], u) > 0; ) --f;
                    }
                    (0 === l(n[r], u) ? o(n, r, f) : o(n, ++f, i), f <= e && (r = f + 1), e <= f && (i = f - 1));
                  }
                  return n;
                })(t, s).subarray(0, s + 1),
              );
            return h + (i(t.subarray(s + 1)) - h) * (c - s);
          }
        },
        "quantileSorted",
        0,
        f,
      ],
      922976,
    );
    var c = t.i(365332);
    t.s(
      [
        "default",
        0,
        function t() {
          var r,
            i = [],
            u = [],
            a = [];
          function o() {
            var t = 0,
              n = Math.max(1, u.length);
            for (a = Array(n - 1); ++t < n; ) a[t - 1] = f(i, t / n);
            return l;
          }
          function l(t) {
            return null == t || isNaN((t *= 1)) ? r : u[(0, e.bisect)(a, t)];
          }
          return (
            (l.invertExtent = function (t) {
              var n = u.indexOf(t);
              return n < 0 ? [NaN, NaN] : [n > 0 ? a[n - 1] : i[0], n < a.length ? a[n] : i[i.length - 1]];
            }),
            (l.domain = function (t) {
              if (!arguments.length) return i.slice();
              for (let n of ((i = []), t)) null == n || isNaN((n *= 1)) || i.push(n);
              return (i.sort(n.default), o());
            }),
            (l.range = function (t) {
              return arguments.length ? ((u = Array.from(t)), o()) : u.slice();
            }),
            (l.unknown = function (t) {
              return arguments.length ? ((r = t), l) : r;
            }),
            (l.quantiles = function () {
              return a.slice();
            }),
            (l.copy = function () {
              return t().domain(i).range(u).unknown(r);
            }),
            c.initRange.apply(l, arguments)
          );
        },
      ],
      440163,
    );
  },
  645075,
  (t) => {
    "use strict";
    var n = t.i(882108),
      e = t.i(971351),
      r = t.i(365332);
    t.s([
      "default",
      0,
      function t() {
        var i,
          u = 0,
          a = 1,
          o = 1,
          l = [0.5],
          f = [0, 1];
        function c(t) {
          return null != t && t <= t ? f[(0, n.bisect)(l, t, 0, o)] : i;
        }
        function s() {
          var t = -1;
          for (l = Array(o); ++t < o; ) l[t] = ((t + 1) * a - (t - o) * u) / (o + 1);
          return c;
        }
        return (
          (c.domain = function (t) {
            return arguments.length ? (([u, a] = t), (u *= 1), (a *= 1), s()) : [u, a];
          }),
          (c.range = function (t) {
            return arguments.length ? ((o = (f = Array.from(t)).length - 1), s()) : f.slice();
          }),
          (c.invertExtent = function (t) {
            var n = f.indexOf(t);
            return n < 0 ? [NaN, NaN] : n < 1 ? [u, l[0]] : n >= o ? [l[o - 1], a] : [l[n - 1], l[n]];
          }),
          (c.unknown = function (t) {
            return (arguments.length && (i = t), c);
          }),
          (c.thresholds = function () {
            return l.slice();
          }),
          (c.copy = function () {
            return t().domain([u, a]).range(f).unknown(i);
          }),
          r.initRange.apply((0, e.linearish)(c), arguments)
        );
      },
    ]);
  },
  203509,
  (t) => {
    "use strict";
    var n = t.i(659086),
      e = t.i(365332),
      r = t.i(971351),
      i = t.i(997155);
    function u(t) {
      return Math.sign(t) * t * t;
    }
    t.s([
      "default",
      0,
      function t() {
        var a,
          o = (0, n.default)(),
          l = [0, 1],
          f = !1;
        function c(t) {
          var n,
            e = Math.sign((n = o(t))) * Math.sqrt(Math.abs(n));
          return isNaN(e) ? a : f ? Math.round(e) : e;
        }
        return (
          (c.invert = function (t) {
            return o.invert(u(t));
          }),
          (c.domain = function (t) {
            return arguments.length ? (o.domain(t), c) : o.domain();
          }),
          (c.range = function (t) {
            return arguments.length ? (o.range((l = Array.from(t, i.default)).map(u)), c) : l.slice();
          }),
          (c.rangeRound = function (t) {
            return c.range(t).round(!0);
          }),
          (c.round = function (t) {
            return arguments.length ? ((f = !!t), c) : f;
          }),
          (c.clamp = function (t) {
            return arguments.length ? (o.clamp(t), c) : o.clamp();
          }),
          (c.unknown = function (t) {
            return arguments.length ? ((a = t), c) : a;
          }),
          (c.copy = function () {
            return t(o.domain(), l).round(f).clamp(o.clamp()).unknown(a);
          }),
          e.initRange.apply(c, arguments),
          (0, r.linearish)(c)
        );
      },
    ]);
  },
  999547,
  (t) => {
    "use strict";
    var n = t.i(971351),
      e = t.i(659086),
      r = t.i(365332);
    function i(t) {
      return function (n) {
        return Math.sign(n) * Math.log1p(Math.abs(n / t));
      };
    }
    function u(t) {
      return function (n) {
        return Math.sign(n) * Math.expm1(Math.abs(n)) * t;
      };
    }
    function a(t) {
      var e = 1,
        r = t(i(1), u(e));
      return (
        (r.constant = function (n) {
          return arguments.length ? t(i((e = +n)), u(e)) : e;
        }),
        (0, n.linearish)(r)
      );
    }
    t.s([
      "default",
      0,
      function t() {
        var n = a((0, e.transformer)());
        return (
          (n.copy = function () {
            return (0, e.copy)(n, t()).constant(n.constant());
          }),
          r.initRange.apply(n, arguments)
        );
      },
      "symlogish",
      0,
      a,
    ]);
  },
  833766,
  (t) => {
    "use strict";
    var n = t.i(882108),
      e = t.i(365332);
    t.s([
      "default",
      0,
      function t() {
        var r,
          i = [0.5],
          u = [0, 1],
          a = 1;
        function o(t) {
          return null != t && t <= t ? u[(0, n.bisect)(i, t, 0, a)] : r;
        }
        return (
          (o.domain = function (t) {
            return arguments.length ? ((a = Math.min((i = Array.from(t)).length, u.length - 1)), o) : i.slice();
          }),
          (o.range = function (t) {
            return arguments.length ? ((u = Array.from(t)), (a = Math.min(i.length, u.length - 1)), o) : u.slice();
          }),
          (o.invertExtent = function (t) {
            var n = u.indexOf(t);
            return [i[n - 1], i[n]];
          }),
          (o.unknown = function (t) {
            return arguments.length ? ((r = t), o) : r;
          }),
          (o.copy = function () {
            return t().domain(i).range(u).unknown(r);
          }),
          e.initRange.apply(o, arguments)
        );
      },
    ]);
  },
  897053,
  (t) => {
    "use strict";
    var n = t.i(141489),
      e = t.i(770853),
      r = t.i(737094),
      i = t.i(718416),
      u = t.i(173337),
      a = t.i(802991),
      o = t.i(66532),
      l = t.i(7353),
      f = t.i(894496),
      c = t.i(659086),
      s = t.i(365332),
      h = t.i(804327);
    function d(t) {
      return new Date(t);
    }
    function g(t) {
      return t instanceof Date ? +t : +new Date(+t);
    }
    function p(t, n, e, r, i, u, a, o, l, f) {
      var s = (0, c.default)(),
        y = s.invert,
        m = s.domain,
        v = f(".%L"),
        M = f(":%S"),
        x = f("%I:%M"),
        b = f("%I %p"),
        w = f("%a %d"),
        T = f("%b %d"),
        _ = f("%B"),
        k = f("%Y");
      function $(t) {
        return (
          l(t) < t ? v : o(t) < t ? M : a(t) < t ? x : u(t) < t ? b : r(t) < t ? (i(t) < t ? w : T) : e(t) < t ? _ : k
        )(t);
      }
      return (
        (s.invert = function (t) {
          return new Date(y(t));
        }),
        (s.domain = function (t) {
          return arguments.length ? m(Array.from(t, g)) : m().map(d);
        }),
        (s.ticks = function (n) {
          var e = m();
          return t(e[0], e[e.length - 1], null == n ? 10 : n);
        }),
        (s.tickFormat = function (t, n) {
          return null == n ? $ : f(n);
        }),
        (s.nice = function (t) {
          var e = m();
          return (
            (t && "function" == typeof t.range) || (t = n(e[0], e[e.length - 1], null == t ? 10 : t)),
            t ? m((0, h.default)(e, t)) : s
          );
        }),
        (s.copy = function () {
          return (0, c.copy)(s, p(t, n, e, r, i, u, a, o, l, f));
        }),
        s
      );
    }
    t.s([
      "calendar",
      0,
      p,
      "default",
      0,
      function () {
        return s.initRange.apply(
          p(
            l.timeTicks,
            l.timeTickInterval,
            n.timeYear,
            e.timeMonth,
            r.timeWeek,
            i.timeDay,
            u.timeHour,
            a.timeMinute,
            o.timeSecond,
            f.timeFormat,
          ).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]),
          arguments,
        );
      },
    ]);
  },
  140573,
  (t) => {
    "use strict";
    var n = t.i(141489),
      e = t.i(770853),
      r = t.i(391148),
      i = t.i(718416),
      u = t.i(173337),
      a = t.i(802991),
      o = t.i(144116),
      l = t.i(7353),
      f = t.i(894496),
      c = t.i(897053),
      s = t.i(365332);
    t.s([
      "default",
      0,
      function () {
        return s.initRange.apply(
          (0, c.calendar)(
            l.utcTicks,
            l.utcTickInterval,
            n.utcYear,
            e.utcMonth,
            r.utcWeek,
            i.utcDay,
            u.utcHour,
            a.utcMinute,
            o.utcSecond,
            f.utcFormat,
          ).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]),
          arguments,
        );
      },
    ]);
  },
  999173,
  885532,
  159843,
  (t) => {
    "use strict";
    var n = t.i(62990),
      e = t.i(475058),
      r = t.i(48114),
      i = t.i(216888);
    function u(t) {
      return t[0];
    }
    function a(t) {
      return t[1];
    }
    function o(t, o) {
      var l = (0, e.default)(!0),
        f = null,
        c = r.default,
        s = null,
        h = (0, i.withPath)(d);
      function d(e) {
        var r,
          i,
          u,
          a = (e = (0, n.default)(e)).length,
          d = !1;
        for (null == f && (s = c((u = h()))), r = 0; r <= a; ++r)
          (!(r < a && l((i = e[r]), r, e)) === d && ((d = !d) ? s.lineStart() : s.lineEnd()),
            d && s.point(+t(i, r, e), +o(i, r, e)));
        if (u) return ((s = null), u + "" || null);
      }
      return (
        (t = "function" == typeof t ? t : void 0 === t ? u : (0, e.default)(t)),
        (o = "function" == typeof o ? o : void 0 === o ? a : (0, e.default)(o)),
        (d.x = function (n) {
          return arguments.length ? ((t = "function" == typeof n ? n : (0, e.default)(+n)), d) : t;
        }),
        (d.y = function (t) {
          return arguments.length ? ((o = "function" == typeof t ? t : (0, e.default)(+t)), d) : o;
        }),
        (d.defined = function (t) {
          return arguments.length ? ((l = "function" == typeof t ? t : (0, e.default)(!!t)), d) : l;
        }),
        (d.curve = function (t) {
          return arguments.length ? ((c = t), null != f && (s = c(f)), d) : c;
        }),
        (d.context = function (t) {
          return arguments.length ? (null == t ? (f = s = null) : (s = c((f = t))), d) : f;
        }),
        d
      );
    }
    (t.s(["x", 0, u, "y", 0, a], 885532),
      t.s(["default", 0, o], 159843),
      t.s(
        [
          "area",
          0,
          function (t, l, f) {
            var c = null,
              s = (0, e.default)(!0),
              h = null,
              d = r.default,
              g = null,
              p = (0, i.withPath)(y);
            function y(e) {
              var r,
                i,
                u,
                a,
                o,
                y = (e = (0, n.default)(e)).length,
                m = !1,
                v = Array(y),
                M = Array(y);
              for (null == h && (g = d((o = p()))), r = 0; r <= y; ++r) {
                if (!(r < y && s((a = e[r]), r, e)) === m)
                  if ((m = !m)) ((i = r), g.areaStart(), g.lineStart());
                  else {
                    for (g.lineEnd(), g.lineStart(), u = r - 1; u >= i; --u) g.point(v[u], M[u]);
                    (g.lineEnd(), g.areaEnd());
                  }
                m &&
                  ((v[r] = +t(a, r, e)), (M[r] = +l(a, r, e)), g.point(c ? +c(a, r, e) : v[r], f ? +f(a, r, e) : M[r]));
              }
              if (o) return ((g = null), o + "" || null);
            }
            function m() {
              return o().defined(s).curve(d).context(h);
            }
            return (
              (t = "function" == typeof t ? t : void 0 === t ? u : (0, e.default)(+t)),
              (l = "function" == typeof l ? l : void 0 === l ? (0, e.default)(0) : (0, e.default)(+l)),
              (f = "function" == typeof f ? f : void 0 === f ? a : (0, e.default)(+f)),
              (y.x = function (n) {
                return arguments.length ? ((t = "function" == typeof n ? n : (0, e.default)(+n)), (c = null), y) : t;
              }),
              (y.x0 = function (n) {
                return arguments.length ? ((t = "function" == typeof n ? n : (0, e.default)(+n)), y) : t;
              }),
              (y.x1 = function (t) {
                return arguments.length
                  ? ((c = null == t ? null : "function" == typeof t ? t : (0, e.default)(+t)), y)
                  : c;
              }),
              (y.y = function (t) {
                return arguments.length ? ((l = "function" == typeof t ? t : (0, e.default)(+t)), (f = null), y) : l;
              }),
              (y.y0 = function (t) {
                return arguments.length ? ((l = "function" == typeof t ? t : (0, e.default)(+t)), y) : l;
              }),
              (y.y1 = function (t) {
                return arguments.length
                  ? ((f = null == t ? null : "function" == typeof t ? t : (0, e.default)(+t)), y)
                  : f;
              }),
              (y.lineX0 = y.lineY0 =
                function () {
                  return m().x(t).y(l);
                }),
              (y.lineY1 = function () {
                return m().x(t).y(f);
              }),
              (y.lineX1 = function () {
                return m().x(c).y(l);
              }),
              (y.defined = function (t) {
                return arguments.length ? ((s = "function" == typeof t ? t : (0, e.default)(!!t)), y) : s;
              }),
              (y.curve = function (t) {
                return arguments.length ? ((d = t), null != h && (g = d(h)), y) : d;
              }),
              (y.context = function (t) {
                return arguments.length ? (null == t ? (h = g = null) : (g = d((h = t))), y) : h;
              }),
              y
            );
          },
        ],
        999173,
      ));
  },
  62990,
  (t) => {
    "use strict";
    var n = Array.prototype.slice;
    t.s([
      "default",
      0,
      function (t) {
        return "object" == typeof t && "length" in t ? t : Array.from(t);
      },
      "slice",
      0,
      n,
    ]);
  },
  475058,
  (t) => {
    "use strict";
    t.s([
      "default",
      0,
      function (t) {
        return function () {
          return t;
        };
      },
    ]);
  },
  56582,
  (t) => {
    "use strict";
    function n(t, n) {
      return [(n *= 1) * Math.cos((t -= Math.PI / 2)), n * Math.sin(t)];
    }
    class e {
      constructor(t, n) {
        ((this._context = t), (this._x = n));
      }
      areaStart() {
        this._line = 0;
      }
      areaEnd() {
        this._line = NaN;
      }
      lineStart() {
        this._point = 0;
      }
      lineEnd() {
        ((this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
          (this._line = 1 - this._line));
      }
      point(t, n) {
        switch (((t *= 1), (n *= 1), this._point)) {
          case 0:
            ((this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n));
            break;
          case 1:
            this._point = 2;
          default:
            this._x
              ? this._context.bezierCurveTo((this._x0 = (this._x0 + t) / 2), this._y0, this._x0, n, t, n)
              : this._context.bezierCurveTo(this._x0, (this._y0 = (this._y0 + n) / 2), t, this._y0, t, n);
        }
        ((this._x0 = t), (this._y0 = n));
      }
    }
    class r {
      constructor(t) {
        this._context = t;
      }
      lineStart() {
        this._point = 0;
      }
      lineEnd() {}
      point(t, e) {
        if (((t *= 1), (e *= 1), 0 === this._point)) this._point = 1;
        else {
          let r = n(this._x0, this._y0),
            i = n(this._x0, (this._y0 = (this._y0 + e) / 2)),
            u = n(t, this._y0),
            a = n(t, e);
          (this._context.moveTo(...r), this._context.bezierCurveTo(...i, ...u, ...a));
        }
        ((this._x0 = t), (this._y0 = e));
      }
    }
    t.s(
      [
        "bumpRadial",
        0,
        function (t) {
          return new r(t);
        },
        "bumpX",
        0,
        function (t) {
          return new e(t, !0);
        },
        "bumpY",
        0,
        function (t) {
          return new e(t, !1);
        },
      ],
      56582,
    );
  },
  48114,
  (t) => {
    "use strict";
    function n(t) {
      this._context = t;
    }
    ((n.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        this._point = 0;
      },
      lineEnd: function () {
        ((this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
          (this._line = 1 - this._line));
      },
      point: function (t, n) {
        switch (((t *= 1), (n *= 1), this._point)) {
          case 0:
            ((this._point = 1), this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n));
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(t, n);
        }
      },
    }),
      t.s([
        "default",
        0,
        function (t) {
          return new n(t);
        },
      ]));
  },
  785833,
  (t) => {
    "use strict";
    var n = t.i(159843);
    t.s(["line", () => n.default]);
  },
  810199,
  (t) => {
    "use strict";
    let n = Math.abs,
      e = Math.atan2,
      r = Math.cos,
      i = Math.max,
      u = Math.min,
      a = Math.sin,
      o = Math.sqrt,
      l = Math.PI,
      f = l / 2;
    t.s([
      "abs",
      0,
      n,
      "acos",
      0,
      function (t) {
        return t > 1 ? 0 : t < -1 ? l : Math.acos(t);
      },
      "asin",
      0,
      function (t) {
        return t >= 1 ? f : t <= -1 ? -f : Math.asin(t);
      },
      "atan2",
      0,
      e,
      "cos",
      0,
      r,
      "epsilon",
      0,
      1e-12,
      "halfPi",
      0,
      f,
      "max",
      0,
      i,
      "min",
      0,
      u,
      "pi",
      0,
      l,
      "sin",
      0,
      a,
      "sqrt",
      0,
      o,
      "tau",
      0,
      2 * l,
    ]);
  },
  517306,
  610010,
  516039,
  9506,
  (t) => {
    "use strict";
    var n = t.i(318398);
    (t.s(
      [
        "stackOffsetExpand",
        0,
        function (t, e) {
          if ((i = t.length) > 0) {
            for (var r, i, u, a = 0, o = t[0].length; a < o; ++a) {
              for (u = r = 0; r < i; ++r) u += t[r][a][1] || 0;
              if (u) for (r = 0; r < i; ++r) t[r][a][1] /= u;
            }
            (0, n.default)(t, e);
          }
        },
      ],
      517306,
    ),
      t.s(["stackOffsetNone", () => n.default], 610010),
      t.s(
        [
          "stackOffsetSilhouette",
          0,
          function (t, e) {
            if ((r = t.length) > 0) {
              for (var r, i = 0, u = t[e[0]], a = u.length; i < a; ++i) {
                for (var o = 0, l = 0; o < r; ++o) l += t[o][i][1] || 0;
                u[i][1] += u[i][0] = -l / 2;
              }
              (0, n.default)(t, e);
            }
          },
        ],
        516039,
      ),
      t.s(
        [
          "stackOffsetWiggle",
          0,
          function (t, e) {
            if ((u = t.length) > 0 && (i = (r = t[e[0]]).length) > 0) {
              for (var r, i, u, a = 0, o = 1; o < i; ++o) {
                for (var l = 0, f = 0, c = 0; l < u; ++l) {
                  for (var s = t[e[l]], h = s[o][1] || 0, d = (h - (s[o - 1][1] || 0)) / 2, g = 0; g < l; ++g) {
                    var p = t[e[g]];
                    d += (p[o][1] || 0) - (p[o - 1][1] || 0);
                  }
                  ((f += h), (c += d * h));
                }
                ((r[o - 1][1] += r[o - 1][0] = a), f && (a -= c / f));
              }
              ((r[o - 1][1] += r[o - 1][0] = a), (0, n.default)(t, e));
            }
          },
        ],
        9506,
      ));
  },
  261770,
  (t) => {
    "use strict";
    var n = t.i(565867);
    t.s(["stackOrderNone", () => n.default]);
  },
  216888,
  179446,
  (t) => {
    "use strict";
    let n = Math.PI,
      e = 2 * n,
      r = e - 1e-6;
    function i(t) {
      this._ += t[0];
      for (let n = 1, e = t.length; n < e; ++n) this._ += arguments[n] + t[n];
    }
    class u {
      constructor(t) {
        ((this._x0 = this._y0 = this._x1 = this._y1 = null),
          (this._ = ""),
          (this._append =
            null == t
              ? i
              : (function (t) {
                  let n = Math.floor(t);
                  if (!(n >= 0)) throw Error(`invalid digits: ${t}`);
                  if (n > 15) return i;
                  let e = 10 ** n;
                  return function (t) {
                    this._ += t[0];
                    for (let n = 1, r = t.length; n < r; ++n) this._ += Math.round(arguments[n] * e) / e + t[n];
                  };
                })(t)));
      }
      moveTo(t, n) {
        this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +n)}`;
      }
      closePath() {
        null !== this._x1 && ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
      }
      lineTo(t, n) {
        this._append`L${(this._x1 = +t)},${(this._y1 = +n)}`;
      }
      quadraticCurveTo(t, n, e, r) {
        this._append`Q${+t},${+n},${(this._x1 = +e)},${(this._y1 = +r)}`;
      }
      bezierCurveTo(t, n, e, r, i, u) {
        this._append`C${+t},${+n},${+e},${+r},${(this._x1 = +i)},${(this._y1 = +u)}`;
      }
      arcTo(t, e, r, i, u) {
        if (((t *= 1), (e *= 1), (r *= 1), (i *= 1), (u *= 1) < 0)) throw Error(`negative radius: ${u}`);
        let a = this._x1,
          o = this._y1,
          l = r - t,
          f = i - e,
          c = a - t,
          s = o - e,
          h = c * c + s * s;
        if (null === this._x1) this._append`M${(this._x1 = t)},${(this._y1 = e)}`;
        else if (h > 1e-6)
          if (Math.abs(s * l - f * c) > 1e-6 && u) {
            let d = r - a,
              g = i - o,
              p = l * l + f * f,
              y = Math.sqrt(p),
              m = Math.sqrt(h),
              v = u * Math.tan((n - Math.acos((p + h - (d * d + g * g)) / (2 * y * m))) / 2),
              M = v / m,
              x = v / y;
            (Math.abs(M - 1) > 1e-6 && this._append`L${t + M * c},${e + M * s}`,
              this._append`A${u},${u},0,0,${+(s * d > c * g)},${(this._x1 = t + x * l)},${(this._y1 = e + x * f)}`);
          } else this._append`L${(this._x1 = t)},${(this._y1 = e)}`;
      }
      arc(t, i, u, a, o, l) {
        if (((t *= 1), (i *= 1), (u *= 1), (l = !!l), u < 0)) throw Error(`negative radius: ${u}`);
        let f = u * Math.cos(a),
          c = u * Math.sin(a),
          s = t + f,
          h = i + c,
          d = 1 ^ l,
          g = l ? a - o : o - a;
        (null === this._x1
          ? this._append`M${s},${h}`
          : (Math.abs(this._x1 - s) > 1e-6 || Math.abs(this._y1 - h) > 1e-6) && this._append`L${s},${h}`,
          u &&
            (g < 0 && (g = (g % e) + e),
            g > r
              ? this
                  ._append`A${u},${u},0,1,${d},${t - f},${i - c}A${u},${u},0,1,${d},${(this._x1 = s)},${(this._y1 = h)}`
              : g > 1e-6 &&
                this
                  ._append`A${u},${u},0,${+(g >= n)},${d},${(this._x1 = t + u * Math.cos(o))},${(this._y1 = i + u * Math.sin(o))}`));
      }
      rect(t, n, e, r) {
        this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +n)}h${(e *= 1)}v${+r}h${-e}Z`;
      }
      toString() {
        return this._;
      }
    }
    function a() {
      return new u();
    }
    ((a.prototype = u.prototype),
      t.s(["Path", 0, u, "path", 0, a], 179446),
      t.s(
        [
          "withPath",
          0,
          function (t) {
            let n = 3;
            return (
              (t.digits = function (e) {
                if (!arguments.length) return n;
                if (null == e) n = null;
                else {
                  let t = Math.floor(e);
                  if (!(t >= 0)) throw RangeError(`invalid digits: ${e}`);
                  n = t;
                }
                return t;
              }),
              () => new u(n)
            );
          },
        ],
        216888,
      ));
  },
  867719,
  318398,
  565867,
  (t) => {
    "use strict";
    var n = t.i(62990),
      e = t.i(475058);
    function r(t, n) {
      if ((i = t.length) > 1)
        for (var e, r, i, u = 1, a = t[n[0]], o = a.length; u < i; ++u)
          for (r = a, a = t[n[u]], e = 0; e < o; ++e) a[e][1] += a[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1];
    }
    function i(t) {
      for (var n = t.length, e = Array(n); --n >= 0; ) e[n] = n;
      return e;
    }
    function u(t, n) {
      return t[n];
    }
    function a(t) {
      let n = [];
      return ((n.key = t), n);
    }
    (t.s(["default", 0, r], 318398),
      t.s(["default", 0, i], 565867),
      t.s(
        [
          "stack",
          0,
          function () {
            var t = (0, e.default)([]),
              o = i,
              l = r,
              f = u;
            function c(e) {
              var r,
                i,
                u = Array.from(t.apply(this, arguments), a),
                c = u.length,
                s = -1;
              for (let t of e) for (r = 0, ++s; r < c; ++r) (u[r][s] = [0, +f(t, u[r].key, s, e)]).data = t;
              for (r = 0, i = (0, n.default)(o(u)); r < c; ++r) u[i[r]].index = r;
              return (l(u, i), u);
            }
            return (
              (c.keys = function (n) {
                return arguments.length ? ((t = "function" == typeof n ? n : (0, e.default)(Array.from(n))), c) : t;
              }),
              (c.value = function (t) {
                return arguments.length ? ((f = "function" == typeof t ? t : (0, e.default)(+t)), c) : f;
              }),
              (c.order = function (t) {
                return arguments.length
                  ? ((o = null == t ? i : "function" == typeof t ? t : (0, e.default)(Array.from(t))), c)
                  : o;
              }),
              (c.offset = function (t) {
                return arguments.length ? ((l = null == t ? r : t), c) : l;
              }),
              c
            );
          },
        ],
        867719,
      ));
  },
  718416,
  (t) => {
    "use strict";
    var n = t.i(392064),
      e = t.i(320826);
    let r = (0, n.timeInterval)(
      (t) => t.setHours(0, 0, 0, 0),
      (t, n) => t.setDate(t.getDate() + n),
      (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * e.durationMinute) / e.durationDay,
      (t) => t.getDate() - 1,
    );
    r.range;
    let i = (0, n.timeInterval)(
      (t) => {
        t.setUTCHours(0, 0, 0, 0);
      },
      (t, n) => {
        t.setUTCDate(t.getUTCDate() + n);
      },
      (t, n) => (n - t) / e.durationDay,
      (t) => t.getUTCDate() - 1,
    );
    i.range;
    let u = (0, n.timeInterval)(
      (t) => {
        t.setUTCHours(0, 0, 0, 0);
      },
      (t, n) => {
        t.setUTCDate(t.getUTCDate() + n);
      },
      (t, n) => (n - t) / e.durationDay,
      (t) => Math.floor(t / e.durationDay),
    );
    (u.range, t.s(["timeDay", 0, r, "unixDay", 0, u, "utcDay", 0, i]));
  },
  320826,
  (t) => {
    "use strict";
    t.s([
      "durationDay",
      0,
      864e5,
      "durationHour",
      0,
      36e5,
      "durationMinute",
      0,
      6e4,
      "durationMonth",
      0,
      2592e6,
      "durationSecond",
      0,
      1e3,
      "durationWeek",
      0,
      6048e5,
      "durationYear",
      0,
      31536e6,
    ]);
  },
  173337,
  (t) => {
    "use strict";
    var n = t.i(392064),
      e = t.i(320826);
    let r = (0, n.timeInterval)(
      (t) => {
        t.setTime(t - t.getMilliseconds() - t.getSeconds() * e.durationSecond - t.getMinutes() * e.durationMinute);
      },
      (t, n) => {
        t.setTime(+t + n * e.durationHour);
      },
      (t, n) => (n - t) / e.durationHour,
      (t) => t.getHours(),
    );
    r.range;
    let i = (0, n.timeInterval)(
      (t) => {
        t.setUTCMinutes(0, 0, 0);
      },
      (t, n) => {
        t.setTime(+t + n * e.durationHour);
      },
      (t, n) => (n - t) / e.durationHour,
      (t) => t.getUTCHours(),
    );
    (i.range, t.s(["timeHour", 0, r, "utcHour", 0, i]));
  },
  392064,
  (t) => {
    "use strict";
    let n = new Date(),
      e = new Date();
    t.s([
      "timeInterval",
      0,
      function t(r, i, u, a) {
        function o(t) {
          return (r((t = 0 == arguments.length ? new Date() : new Date(+t))), t);
        }
        return (
          (o.floor = (t) => (r((t = new Date(+t))), t)),
          (o.ceil = (t) => (r((t = new Date(t - 1))), i(t, 1), r(t), t)),
          (o.round = (t) => {
            let n = o(t),
              e = o.ceil(t);
            return t - n < e - t ? n : e;
          }),
          (o.offset = (t, n) => (i((t = new Date(+t)), null == n ? 1 : Math.floor(n)), t)),
          (o.range = (t, n, e) => {
            let u,
              a = [];
            if (((t = o.ceil(t)), (e = null == e ? 1 : Math.floor(e)), !(t < n) || !(e > 0))) return a;
            do (a.push((u = new Date(+t))), i(t, e), r(t));
            while (u < t && t < n);
            return a;
          }),
          (o.filter = (n) =>
            t(
              (t) => {
                if (t >= t) for (; r(t), !n(t); ) t.setTime(t - 1);
              },
              (t, e) => {
                if (t >= t)
                  if (e < 0) for (; ++e <= 0; ) for (; i(t, -1), !n(t); );
                  else for (; --e >= 0; ) for (; i(t, 1), !n(t); );
              },
            )),
          u &&
            ((o.count = (t, i) => (n.setTime(+t), e.setTime(+i), r(n), r(e), Math.floor(u(n, e)))),
            (o.every = (t) =>
              isFinite((t = Math.floor(t))) && t > 0
                ? t > 1
                  ? o.filter(a ? (n) => a(n) % t == 0 : (n) => o.count(0, n) % t == 0)
                  : o
                : null)),
          o
        );
      },
    ]);
  },
  802991,
  (t) => {
    "use strict";
    var n = t.i(392064),
      e = t.i(320826);
    let r = (0, n.timeInterval)(
      (t) => {
        t.setTime(t - t.getMilliseconds() - t.getSeconds() * e.durationSecond);
      },
      (t, n) => {
        t.setTime(+t + n * e.durationMinute);
      },
      (t, n) => (n - t) / e.durationMinute,
      (t) => t.getMinutes(),
    );
    r.range;
    let i = (0, n.timeInterval)(
      (t) => {
        t.setUTCSeconds(0, 0);
      },
      (t, n) => {
        t.setTime(+t + n * e.durationMinute);
      },
      (t, n) => (n - t) / e.durationMinute,
      (t) => t.getUTCMinutes(),
    );
    (i.range, t.s(["timeMinute", 0, r, "utcMinute", 0, i]));
  },
  66532,
  146680,
  (t) => {
    "use strict";
    var n = t.i(392064),
      e = t.i(320826);
    let r = (0, n.timeInterval)(
      (t) => {
        t.setTime(t - t.getMilliseconds());
      },
      (t, n) => {
        t.setTime(+t + n * e.durationSecond);
      },
      (t, n) => (n - t) / e.durationSecond,
      (t) => t.getUTCSeconds(),
    );
    (r.range, t.s(["second", 0, r], 146680), t.s(["timeSecond", 0, r], 66532));
  },
  144116,
  (t) => {
    "use strict";
    var n = t.i(146680);
    t.s(["utcSecond", () => n.second]);
  },
  7353,
  894496,
  (t) => {
    "use strict";
    function n(t, n) {
      return null == t || null == n ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
    }
    function e(t, n) {
      return null == t || null == n ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
    }
    function r() {
      return 0;
    }
    let i = Math.sqrt(50),
      u = Math.sqrt(10),
      a = Math.sqrt(2);
    function o(t, n, e) {
      return (function t(n, e, r) {
        let o,
          l,
          f,
          c = (e - n) / Math.max(0, r),
          s = Math.floor(Math.log10(c)),
          h = c / Math.pow(10, s),
          d = h >= i ? 10 : h >= u ? 5 : h >= a ? 2 : 1;
        return (s < 0
          ? ((o = Math.round(n * (f = Math.pow(10, -s) / d))),
            (l = Math.round(e * f)),
            o / f < n && ++o,
            l / f > e && --l,
            (f = -f))
          : ((o = Math.round(n / (f = Math.pow(10, s) * d))),
            (l = Math.round(e / f)),
            o * f < n && ++o,
            l * f > e && --l),
        l < o && 0.5 <= r && r < 2)
          ? t(n, e, 2 * r)
          : [o, l, f];
      })((t *= 1), (n *= 1), (e *= 1))[2];
    }
    function l(t, n, e) {
      ((n *= 1), (t *= 1), (e *= 1));
      let r = n < t,
        i = r ? o(n, t, e) : o(t, n, e);
      return (r ? -1 : 1) * (i < 0 ? -(1 / i) : i);
    }
    var f,
      c,
      s,
      h = t.i(320826),
      d = t.i(392064);
    let g = (0, d.timeInterval)(
      () => {},
      (t, n) => {
        t.setTime(+t + n);
      },
      (t, n) => n - t,
    );
    ((g.every = (t) =>
      isFinite((t = Math.floor(t))) && t > 0
        ? t > 1
          ? (0, d.timeInterval)(
              (n) => {
                n.setTime(Math.floor(n / t) * t);
              },
              (n, e) => {
                n.setTime(+n + e * t);
              },
              (n, e) => (e - n) / t,
            )
          : g
        : null),
      g.range);
    var p = t.i(146680),
      y = t.i(802991),
      m = t.i(173337),
      v = t.i(718416),
      M = t.i(212644),
      x = t.i(770853),
      b = t.i(141489);
    function w(t, i, u, a, o, f) {
      let c = [
        [p.second, 1, h.durationSecond],
        [p.second, 5, 5 * h.durationSecond],
        [p.second, 15, 15 * h.durationSecond],
        [p.second, 30, 30 * h.durationSecond],
        [f, 1, h.durationMinute],
        [f, 5, 5 * h.durationMinute],
        [f, 15, 15 * h.durationMinute],
        [f, 30, 30 * h.durationMinute],
        [o, 1, h.durationHour],
        [o, 3, 3 * h.durationHour],
        [o, 6, 6 * h.durationHour],
        [o, 12, 12 * h.durationHour],
        [a, 1, h.durationDay],
        [a, 2, 2 * h.durationDay],
        [u, 1, h.durationWeek],
        [i, 1, h.durationMonth],
        [i, 3, 3 * h.durationMonth],
        [t, 1, h.durationYear],
      ];
      function s(i, u, a) {
        let o = Math.abs(u - i) / a,
          f = (function (t) {
            let i, u, a;
            function o(t, n, e = 0, r = t.length) {
              if (e < r) {
                if (0 !== i(n, n)) return r;
                do {
                  let i = (e + r) >>> 1;
                  0 > u(t[i], n) ? (e = i + 1) : (r = i);
                } while (e < r);
              }
              return e;
            }
            return (
              2 !== t.length
                ? ((i = n), (u = (e, r) => n(t(e), r)), (a = (n, e) => t(n) - e))
                : ((i = t === n || t === e ? t : r), (u = t), (a = t)),
              {
                left: o,
                center: function (t, n, e = 0, r = t.length) {
                  let i = o(t, n, e, r - 1);
                  return i > e && a(t[i - 1], n) > -a(t[i], n) ? i - 1 : i;
                },
                right: function (t, n, e = 0, r = t.length) {
                  if (e < r) {
                    if (0 !== i(n, n)) return r;
                    do {
                      let i = (e + r) >>> 1;
                      0 >= u(t[i], n) ? (e = i + 1) : (r = i);
                    } while (e < r);
                  }
                  return e;
                },
              }
            );
          })(([, , t]) => t).right(c, o);
        if (f === c.length) return t.every(l(i / h.durationYear, u / h.durationYear, a));
        if (0 === f) return g.every(Math.max(l(i, u, a), 1));
        let [s, d] = c[o / c[f - 1][2] < c[f][2] / o ? f - 1 : f];
        return s.every(d);
      }
      return [
        function (t, n, e) {
          let r = n < t;
          r && ([t, n] = [n, t]);
          let i = e && "function" == typeof e.range ? e : s(t, n, e),
            u = i ? i.range(t, +n + 1) : [];
          return r ? u.reverse() : u;
        },
        s,
      ];
    }
    let [T, _] = w(b.utcYear, x.utcMonth, M.utcSunday, v.unixDay, m.utcHour, y.utcMinute),
      [k, $] = w(b.timeYear, x.timeMonth, M.timeSunday, v.timeDay, m.timeHour, y.timeMinute);
    function N(t) {
      if (0 <= t.y && t.y < 100) {
        var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
        return (n.setFullYear(t.y), n);
      }
      return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
    }
    function C(t) {
      if (0 <= t.y && t.y < 100) {
        var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
        return (n.setUTCFullYear(t.y), n);
      }
      return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
    }
    function D(t, n, e) {
      return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 };
    }
    t.s(["timeTickInterval", 0, $, "timeTicks", 0, k, "utcTickInterval", 0, _, "utcTicks", 0, T], 7353);
    var U = { "-": "", _: " ", 0: "0" },
      S = /^\s*\d+/,
      Y = /^%/,
      A = /[\\^$*+?|[\]().{}]/g;
    function F(t, n, e) {
      var r = t < 0 ? "-" : "",
        i = (r ? -t : t) + "",
        u = i.length;
      return r + (u < e ? Array(e - u + 1).join(n) + i : i);
    }
    function H(t) {
      return t.replace(A, "\\$&");
    }
    function I(t) {
      return RegExp("^(?:" + t.map(H).join("|") + ")", "i");
    }
    function E(t) {
      return new Map(t.map((t, n) => [t.toLowerCase(), n]));
    }
    function q(t, n, e) {
      var r = S.exec(n.slice(e, e + 1));
      return r ? ((t.w = +r[0]), e + r[0].length) : -1;
    }
    function R(t, n, e) {
      var r = S.exec(n.slice(e, e + 1));
      return r ? ((t.u = +r[0]), e + r[0].length) : -1;
    }
    function O(t, n, e) {
      var r = S.exec(n.slice(e, e + 2));
      return r ? ((t.U = +r[0]), e + r[0].length) : -1;
    }
    function L(t, n, e) {
      var r = S.exec(n.slice(e, e + 2));
      return r ? ((t.V = +r[0]), e + r[0].length) : -1;
    }
    function P(t, n, e) {
      var r = S.exec(n.slice(e, e + 2));
      return r ? ((t.W = +r[0]), e + r[0].length) : -1;
    }
    function j(t, n, e) {
      var r = S.exec(n.slice(e, e + 4));
      return r ? ((t.y = +r[0]), e + r[0].length) : -1;
    }
    function W(t, n, e) {
      var r = S.exec(n.slice(e, e + 2));
      return r ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length) : -1;
    }
    function z(t, n, e) {
      var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
      return r ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), e + r[0].length) : -1;
    }
    function Z(t, n, e) {
      var r = S.exec(n.slice(e, e + 1));
      return r ? ((t.q = 3 * r[0] - 3), e + r[0].length) : -1;
    }
    function V(t, n, e) {
      var r = S.exec(n.slice(e, e + 2));
      return r ? ((t.m = r[0] - 1), e + r[0].length) : -1;
    }
    function X(t, n, e) {
      var r = S.exec(n.slice(e, e + 2));
      return r ? ((t.d = +r[0]), e + r[0].length) : -1;
    }
    function B(t, n, e) {
      var r = S.exec(n.slice(e, e + 3));
      return r ? ((t.m = 0), (t.d = +r[0]), e + r[0].length) : -1;
    }
    function Q(t, n, e) {
      var r = S.exec(n.slice(e, e + 2));
      return r ? ((t.H = +r[0]), e + r[0].length) : -1;
    }
    function J(t, n, e) {
      var r = S.exec(n.slice(e, e + 2));
      return r ? ((t.M = +r[0]), e + r[0].length) : -1;
    }
    function G(t, n, e) {
      var r = S.exec(n.slice(e, e + 2));
      return r ? ((t.S = +r[0]), e + r[0].length) : -1;
    }
    function K(t, n, e) {
      var r = S.exec(n.slice(e, e + 3));
      return r ? ((t.L = +r[0]), e + r[0].length) : -1;
    }
    function tt(t, n, e) {
      var r = S.exec(n.slice(e, e + 6));
      return r ? ((t.L = Math.floor(r[0] / 1e3)), e + r[0].length) : -1;
    }
    function tn(t, n, e) {
      var r = Y.exec(n.slice(e, e + 1));
      return r ? e + r[0].length : -1;
    }
    function te(t, n, e) {
      var r = S.exec(n.slice(e));
      return r ? ((t.Q = +r[0]), e + r[0].length) : -1;
    }
    function tr(t, n, e) {
      var r = S.exec(n.slice(e));
      return r ? ((t.s = +r[0]), e + r[0].length) : -1;
    }
    function ti(t, n) {
      return F(t.getDate(), n, 2);
    }
    function tu(t, n) {
      return F(t.getHours(), n, 2);
    }
    function ta(t, n) {
      return F(t.getHours() % 12 || 12, n, 2);
    }
    function to(t, n) {
      return F(1 + v.timeDay.count((0, b.timeYear)(t), t), n, 3);
    }
    function tl(t, n) {
      return F(t.getMilliseconds(), n, 3);
    }
    function tf(t, n) {
      return tl(t, n) + "000";
    }
    function tc(t, n) {
      return F(t.getMonth() + 1, n, 2);
    }
    function ts(t, n) {
      return F(t.getMinutes(), n, 2);
    }
    function th(t, n) {
      return F(t.getSeconds(), n, 2);
    }
    function td(t) {
      var n = t.getDay();
      return 0 === n ? 7 : n;
    }
    function tg(t, n) {
      return F(M.timeSunday.count((0, b.timeYear)(t) - 1, t), n, 2);
    }
    function tp(t) {
      var n = t.getDay();
      return n >= 4 || 0 === n ? (0, M.timeThursday)(t) : M.timeThursday.ceil(t);
    }
    function ty(t, n) {
      return ((t = tp(t)), F(M.timeThursday.count((0, b.timeYear)(t), t) + (4 === (0, b.timeYear)(t).getDay()), n, 2));
    }
    function tm(t) {
      return t.getDay();
    }
    function tv(t, n) {
      return F(M.timeMonday.count((0, b.timeYear)(t) - 1, t), n, 2);
    }
    function tM(t, n) {
      return F(t.getFullYear() % 100, n, 2);
    }
    function tx(t, n) {
      return F((t = tp(t)).getFullYear() % 100, n, 2);
    }
    function tb(t, n) {
      return F(t.getFullYear() % 1e4, n, 4);
    }
    function tw(t, n) {
      var e = t.getDay();
      return F((t = e >= 4 || 0 === e ? (0, M.timeThursday)(t) : M.timeThursday.ceil(t)).getFullYear() % 1e4, n, 4);
    }
    function tT(t) {
      var n = t.getTimezoneOffset();
      return (n > 0 ? "-" : ((n *= -1), "+")) + F((n / 60) | 0, "0", 2) + F(n % 60, "0", 2);
    }
    function t_(t, n) {
      return F(t.getUTCDate(), n, 2);
    }
    function tk(t, n) {
      return F(t.getUTCHours(), n, 2);
    }
    function t$(t, n) {
      return F(t.getUTCHours() % 12 || 12, n, 2);
    }
    function tN(t, n) {
      return F(1 + v.utcDay.count((0, b.utcYear)(t), t), n, 3);
    }
    function tC(t, n) {
      return F(t.getUTCMilliseconds(), n, 3);
    }
    function tD(t, n) {
      return tC(t, n) + "000";
    }
    function tU(t, n) {
      return F(t.getUTCMonth() + 1, n, 2);
    }
    function tS(t, n) {
      return F(t.getUTCMinutes(), n, 2);
    }
    function tY(t, n) {
      return F(t.getUTCSeconds(), n, 2);
    }
    function tA(t) {
      var n = t.getUTCDay();
      return 0 === n ? 7 : n;
    }
    function tF(t, n) {
      return F(M.utcSunday.count((0, b.utcYear)(t) - 1, t), n, 2);
    }
    function tH(t) {
      var n = t.getUTCDay();
      return n >= 4 || 0 === n ? (0, M.utcThursday)(t) : M.utcThursday.ceil(t);
    }
    function tI(t, n) {
      return ((t = tH(t)), F(M.utcThursday.count((0, b.utcYear)(t), t) + (4 === (0, b.utcYear)(t).getUTCDay()), n, 2));
    }
    function tE(t) {
      return t.getUTCDay();
    }
    function tq(t, n) {
      return F(M.utcMonday.count((0, b.utcYear)(t) - 1, t), n, 2);
    }
    function tR(t, n) {
      return F(t.getUTCFullYear() % 100, n, 2);
    }
    function tO(t, n) {
      return F((t = tH(t)).getUTCFullYear() % 100, n, 2);
    }
    function tL(t, n) {
      return F(t.getUTCFullYear() % 1e4, n, 4);
    }
    function tP(t, n) {
      var e = t.getUTCDay();
      return F((t = e >= 4 || 0 === e ? (0, M.utcThursday)(t) : M.utcThursday.ceil(t)).getUTCFullYear() % 1e4, n, 4);
    }
    function tj() {
      return "+0000";
    }
    function tW() {
      return "%";
    }
    function tz(t) {
      return +t;
    }
    function tZ(t) {
      return Math.floor(t / 1e3);
    }
    ((c = (f = (function (t) {
      var n = t.dateTime,
        e = t.date,
        r = t.time,
        i = t.periods,
        u = t.days,
        a = t.shortDays,
        o = t.months,
        l = t.shortMonths,
        f = I(i),
        c = E(i),
        s = I(u),
        h = E(u),
        d = I(a),
        g = E(a),
        p = I(o),
        y = E(o),
        m = I(l),
        x = E(l),
        b = {
          a: function (t) {
            return a[t.getDay()];
          },
          A: function (t) {
            return u[t.getDay()];
          },
          b: function (t) {
            return l[t.getMonth()];
          },
          B: function (t) {
            return o[t.getMonth()];
          },
          c: null,
          d: ti,
          e: ti,
          f: tf,
          g: tx,
          G: tw,
          H: tu,
          I: ta,
          j: to,
          L: tl,
          m: tc,
          M: ts,
          p: function (t) {
            return i[+(t.getHours() >= 12)];
          },
          q: function (t) {
            return 1 + ~~(t.getMonth() / 3);
          },
          Q: tz,
          s: tZ,
          S: th,
          u: td,
          U: tg,
          V: ty,
          w: tm,
          W: tv,
          x: null,
          X: null,
          y: tM,
          Y: tb,
          Z: tT,
          "%": tW,
        },
        w = {
          a: function (t) {
            return a[t.getUTCDay()];
          },
          A: function (t) {
            return u[t.getUTCDay()];
          },
          b: function (t) {
            return l[t.getUTCMonth()];
          },
          B: function (t) {
            return o[t.getUTCMonth()];
          },
          c: null,
          d: t_,
          e: t_,
          f: tD,
          g: tO,
          G: tP,
          H: tk,
          I: t$,
          j: tN,
          L: tC,
          m: tU,
          M: tS,
          p: function (t) {
            return i[+(t.getUTCHours() >= 12)];
          },
          q: function (t) {
            return 1 + ~~(t.getUTCMonth() / 3);
          },
          Q: tz,
          s: tZ,
          S: tY,
          u: tA,
          U: tF,
          V: tI,
          w: tE,
          W: tq,
          x: null,
          X: null,
          y: tR,
          Y: tL,
          Z: tj,
          "%": tW,
        },
        T = {
          a: function (t, n, e) {
            var r = d.exec(n.slice(e));
            return r ? ((t.w = g.get(r[0].toLowerCase())), e + r[0].length) : -1;
          },
          A: function (t, n, e) {
            var r = s.exec(n.slice(e));
            return r ? ((t.w = h.get(r[0].toLowerCase())), e + r[0].length) : -1;
          },
          b: function (t, n, e) {
            var r = m.exec(n.slice(e));
            return r ? ((t.m = x.get(r[0].toLowerCase())), e + r[0].length) : -1;
          },
          B: function (t, n, e) {
            var r = p.exec(n.slice(e));
            return r ? ((t.m = y.get(r[0].toLowerCase())), e + r[0].length) : -1;
          },
          c: function (t, e, r) {
            return $(t, n, e, r);
          },
          d: X,
          e: X,
          f: tt,
          g: W,
          G: j,
          H: Q,
          I: Q,
          j: B,
          L: K,
          m: V,
          M: J,
          p: function (t, n, e) {
            var r = f.exec(n.slice(e));
            return r ? ((t.p = c.get(r[0].toLowerCase())), e + r[0].length) : -1;
          },
          q: Z,
          Q: te,
          s: tr,
          S: G,
          u: R,
          U: O,
          V: L,
          w: q,
          W: P,
          x: function (t, n, r) {
            return $(t, e, n, r);
          },
          X: function (t, n, e) {
            return $(t, r, n, e);
          },
          y: W,
          Y: j,
          Z: z,
          "%": tn,
        };
      function _(t, n) {
        return function (e) {
          var r,
            i,
            u,
            a = [],
            o = -1,
            l = 0,
            f = t.length;
          for (e instanceof Date || (e = new Date(+e)); ++o < f; )
            37 === t.charCodeAt(o) &&
              (a.push(t.slice(l, o)),
              null != (i = U[(r = t.charAt(++o))]) ? (r = t.charAt(++o)) : (i = "e" === r ? " " : "0"),
              (u = n[r]) && (r = u(e, i)),
              a.push(r),
              (l = o + 1));
          return (a.push(t.slice(l, o)), a.join(""));
        };
      }
      function k(t, n) {
        return function (e) {
          var r,
            i,
            u = D(1900, void 0, 1);
          if ($(u, t, (e += ""), 0) != e.length) return null;
          if ("Q" in u) return new Date(u.Q);
          if ("s" in u) return new Date(1e3 * u.s + ("L" in u ? u.L : 0));
          if (
            (!n || "Z" in u || (u.Z = 0),
            "p" in u && (u.H = (u.H % 12) + 12 * u.p),
            void 0 === u.m && (u.m = "q" in u ? u.q : 0),
            "V" in u)
          ) {
            if (u.V < 1 || u.V > 53) return null;
            ("w" in u || (u.w = 1),
              "Z" in u
                ? ((r =
                    (i = (r = C(D(u.y, 0, 1))).getUTCDay()) > 4 || 0 === i ? M.utcMonday.ceil(r) : (0, M.utcMonday)(r)),
                  (r = v.utcDay.offset(r, (u.V - 1) * 7)),
                  (u.y = r.getUTCFullYear()),
                  (u.m = r.getUTCMonth()),
                  (u.d = r.getUTCDate() + ((u.w + 6) % 7)))
                : ((r =
                    (i = (r = N(D(u.y, 0, 1))).getDay()) > 4 || 0 === i ? M.timeMonday.ceil(r) : (0, M.timeMonday)(r)),
                  (r = v.timeDay.offset(r, (u.V - 1) * 7)),
                  (u.y = r.getFullYear()),
                  (u.m = r.getMonth()),
                  (u.d = r.getDate() + ((u.w + 6) % 7))));
          } else
            ("W" in u || "U" in u) &&
              ("w" in u || (u.w = "u" in u ? u.u % 7 : +("W" in u)),
              (i = "Z" in u ? C(D(u.y, 0, 1)).getUTCDay() : N(D(u.y, 0, 1)).getDay()),
              (u.m = 0),
              (u.d = "W" in u ? ((u.w + 6) % 7) + 7 * u.W - ((i + 5) % 7) : u.w + 7 * u.U - ((i + 6) % 7)));
          return "Z" in u ? ((u.H += (u.Z / 100) | 0), (u.M += u.Z % 100), C(u)) : N(u);
        };
      }
      function $(t, n, e, r) {
        for (var i, u, a = 0, o = n.length, l = e.length; a < o; ) {
          if (r >= l) return -1;
          if (37 === (i = n.charCodeAt(a++))) {
            if (!(u = T[(i = n.charAt(a++)) in U ? n.charAt(a++) : i]) || (r = u(t, e, r)) < 0) return -1;
          } else if (i != e.charCodeAt(r++)) return -1;
        }
        return r;
      }
      return (
        (b.x = _(e, b)),
        (b.X = _(r, b)),
        (b.c = _(n, b)),
        (w.x = _(e, w)),
        (w.X = _(r, w)),
        (w.c = _(n, w)),
        {
          format: function (t) {
            var n = _((t += ""), b);
            return (
              (n.toString = function () {
                return t;
              }),
              n
            );
          },
          parse: function (t) {
            var n = k((t += ""), !1);
            return (
              (n.toString = function () {
                return t;
              }),
              n
            );
          },
          utcFormat: function (t) {
            var n = _((t += ""), w);
            return (
              (n.toString = function () {
                return t;
              }),
              n
            );
          },
          utcParse: function (t) {
            var n = k((t += ""), !0);
            return (
              (n.toString = function () {
                return t;
              }),
              n
            );
          },
        }
      );
    })({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    })).format),
      f.parse,
      (s = f.utcFormat),
      f.utcParse,
      t.s(["timeFormat", () => c, "utcFormat", () => s], 894496));
  },
  737094,
  212644,
  (t) => {
    "use strict";
    var n = t.i(392064),
      e = t.i(320826);
    function r(t) {
      return (0, n.timeInterval)(
        (n) => {
          (n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7)), n.setHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setDate(t.getDate() + 7 * n);
        },
        (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * e.durationMinute) / e.durationWeek,
      );
    }
    let i = r(0),
      u = r(1),
      a = r(2),
      o = r(3),
      l = r(4),
      f = r(5),
      c = r(6);
    function s(t) {
      return (0, n.timeInterval)(
        (n) => {
          (n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7)), n.setUTCHours(0, 0, 0, 0));
        },
        (t, n) => {
          t.setUTCDate(t.getUTCDate() + 7 * n);
        },
        (t, n) => (n - t) / e.durationWeek,
      );
    }
    (i.range, u.range, a.range, o.range, l.range, f.range, c.range);
    let h = s(0),
      d = s(1),
      g = s(2),
      p = s(3),
      y = s(4),
      m = s(5),
      v = s(6);
    (h.range,
      d.range,
      g.range,
      p.range,
      y.range,
      m.range,
      v.range,
      t.s(
        [
          "timeMonday",
          0,
          u,
          "timeSunday",
          0,
          i,
          "timeThursday",
          0,
          l,
          "utcMonday",
          0,
          d,
          "utcSunday",
          0,
          h,
          "utcThursday",
          0,
          y,
        ],
        212644,
      ),
      t.s(["timeWeek", 0, i], 737094));
  },
  391148,
  (t) => {
    "use strict";
    var n = t.i(212644);
    t.s(["utcWeek", () => n.utcSunday]);
  },
  141489,
  770853,
  (t) => {
    "use strict";
    var n = t.i(392064);
    let e = (0, n.timeInterval)(
      (t) => {
        (t.setMonth(0, 1), t.setHours(0, 0, 0, 0));
      },
      (t, n) => {
        t.setFullYear(t.getFullYear() + n);
      },
      (t, n) => n.getFullYear() - t.getFullYear(),
      (t) => t.getFullYear(),
    );
    ((e.every = (t) =>
      isFinite((t = Math.floor(t))) && t > 0
        ? (0, n.timeInterval)(
            (n) => {
              (n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0));
            },
            (n, e) => {
              n.setFullYear(n.getFullYear() + e * t);
            },
          )
        : null),
      e.range);
    let r = (0, n.timeInterval)(
      (t) => {
        (t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0));
      },
      (t, n) => {
        t.setUTCFullYear(t.getUTCFullYear() + n);
      },
      (t, n) => n.getUTCFullYear() - t.getUTCFullYear(),
      (t) => t.getUTCFullYear(),
    );
    ((r.every = (t) =>
      isFinite((t = Math.floor(t))) && t > 0
        ? (0, n.timeInterval)(
            (n) => {
              (n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
                n.setUTCMonth(0, 1),
                n.setUTCHours(0, 0, 0, 0));
            },
            (n, e) => {
              n.setUTCFullYear(n.getUTCFullYear() + e * t);
            },
          )
        : null),
      r.range,
      t.s(["timeYear", 0, e, "utcYear", 0, r], 141489));
    let i = (0, n.timeInterval)(
      (t) => {
        (t.setDate(1), t.setHours(0, 0, 0, 0));
      },
      (t, n) => {
        t.setMonth(t.getMonth() + n);
      },
      (t, n) => n.getMonth() - t.getMonth() + (n.getFullYear() - t.getFullYear()) * 12,
      (t) => t.getMonth(),
    );
    i.range;
    let u = (0, n.timeInterval)(
      (t) => {
        (t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0));
      },
      (t, n) => {
        t.setUTCMonth(t.getUTCMonth() + n);
      },
      (t, n) => n.getUTCMonth() - t.getUTCMonth() + (n.getUTCFullYear() - t.getUTCFullYear()) * 12,
      (t) => t.getUTCMonth(),
    );
    (u.range, t.s(["timeMonth", 0, i, "utcMonth", 0, u], 770853));
  },
]);
