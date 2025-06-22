(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4943, 4591, 421],
  {
    5354: function (e, n, t) {
      "use strict";
      var i,
        r = t(7294);
      function a() {
        return (
          (a = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                }
                return e;
              }),
          a.apply(this, arguments)
        );
      }
      n.Z = (e) =>
        r.createElement(
          "svg",
          a(
            {
              width: "1em",
              height: "1em",
              viewBox: "0 0 38 26",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e,
          ),
          i ||
            (i = r.createElement("path", {
              d: "M0 12.781h37m0 0-12 12m12-12-12-12",
              stroke: "currentColor",
            })),
        );
    },
    9664: function (e, n) {
      !(function (e) {
        "use strict";
        var n,
          t,
          i,
          r,
          a,
          o,
          s,
          l,
          c = function () {
            return "undefined" !== typeof window;
          },
          u = function () {
            return n || (c() && (n = window.gsap) && n.registerPlugin && n);
          },
          d = function (e) {
            return "string" === typeof e;
          },
          p = function (e) {
            return "function" === typeof e;
          },
          f = function (e, n) {
            var t = "x" === n ? "Width" : "Height",
              o = "scroll" + t,
              s = "client" + t;
            return e === i || e === r || e === a
              ? Math.max(r[o], a[o]) - (i["inner" + t] || r[s] || a[s])
              : e[o] - e["offset" + t];
          },
          m = function (e, n) {
            var t = "scroll" + ("x" === n ? "Left" : "Top");
            return (
              e === i &&
                (null != e.pageXOffset
                  ? (t = "page" + n.toUpperCase() + "Offset")
                  : (e = null != r[t] ? r : a)),
              function () {
                return e[t];
              }
            );
          },
          y = function (e, n, t, i) {
            if ((p(e) && (e = e(n, t, i)), "object" !== typeof e))
              return d(e) && "max" !== e && "=" !== e.charAt(1)
                ? { x: e, y: e }
                : { y: e };
            if (e.nodeType) return { y: e, x: e };
            var r,
              a = {};
            for (r in e)
              a[r] = "onAutoKill" !== r && p(e[r]) ? e[r](n, t, i) : e[r];
            return a;
          },
          h = function (e, n) {
            if (!(e = o(e)[0]) || !e.getBoundingClientRect)
              return (
                console.warn("scrollTo target doesn't exist. Using 0") || {
                  x: 0,
                  y: 0,
                }
              );
            var t = e.getBoundingClientRect(),
              s = !n || n === i || n === a,
              l = s
                ? {
                    top:
                      r.clientTop -
                      (i.pageYOffset || r.scrollTop || a.scrollTop || 0),
                    left:
                      r.clientLeft -
                      (i.pageXOffset || r.scrollLeft || a.scrollLeft || 0),
                  }
                : n.getBoundingClientRect(),
              c = { x: t.left - l.left, y: t.top - l.top };
            return !s && n && ((c.x += m(n, "x")()), (c.y += m(n, "y")())), c;
          },
          g = function (e, n, t, i, r) {
            return isNaN(e) || "object" === typeof e
              ? d(e) && "=" === e.charAt(1)
                ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) +
                  i -
                  r
                : "max" === e
                  ? f(n, t) - r
                  : Math.min(f(n, t), h(e, n)[t] - r)
              : parseFloat(e) - r;
          },
          v = function () {
            (n = u()),
              c() &&
                n &&
                "undefined" !== typeof document &&
                document.body &&
                ((i = window),
                (a = document.body),
                (r = document.documentElement),
                (o = n.utils.toArray),
                n.config({ autoKillThreshold: 7 }),
                (s = n.config()),
                (t = 1));
          },
          x = {
            version: "3.11.5",
            name: "scrollTo",
            rawVars: 1,
            register: function (e) {
              (n = e), v();
            },
            init: function (e, r, a, o, s) {
              t || v();
              var c = this,
                u = n.getProperty(e, "scrollSnapType");
              (c.isWin = e === i),
                (c.target = e),
                (c.tween = a),
                (r = y(r, o, e, s)),
                (c.vars = r),
                (c.autoKill = !!r.autoKill),
                (c.getX = m(e, "x")),
                (c.getY = m(e, "y")),
                (c.x = c.xPrev = c.getX()),
                (c.y = c.yPrev = c.getY()),
                l || (l = n.core.globals().ScrollTrigger),
                "smooth" === n.getProperty(e, "scrollBehavior") &&
                  n.set(e, { scrollBehavior: "auto" }),
                u &&
                  "none" !== u &&
                  ((c.snap = 1),
                  (c.snapInline = e.style.scrollSnapType),
                  (e.style.scrollSnapType = "none")),
                null != r.x
                  ? (c.add(
                      c,
                      "x",
                      c.x,
                      g(r.x, e, "x", c.x, r.offsetX || 0),
                      o,
                      s,
                    ),
                    c._props.push("scrollTo_x"))
                  : (c.skipX = 1),
                null != r.y
                  ? (c.add(
                      c,
                      "y",
                      c.y,
                      g(r.y, e, "y", c.y, r.offsetY || 0),
                      o,
                      s,
                    ),
                    c._props.push("scrollTo_y"))
                  : (c.skipY = 1);
            },
            render: function (e, n) {
              for (
                var t,
                  r,
                  a,
                  o,
                  c,
                  u = n._pt,
                  d = n.target,
                  p = n.tween,
                  m = n.autoKill,
                  y = n.xPrev,
                  h = n.yPrev,
                  g = n.isWin,
                  v = n.snap,
                  x = n.snapInline;
                u;

              )
                u.r(e, u.d), (u = u._next);
              (t = g || !n.skipX ? n.getX() : y),
                (a = (r = g || !n.skipY ? n.getY() : h) - h),
                (o = t - y),
                (c = s.autoKillThreshold),
                n.x < 0 && (n.x = 0),
                n.y < 0 && (n.y = 0),
                m &&
                  (!n.skipX &&
                    (o > c || o < -c) &&
                    t < f(d, "x") &&
                    (n.skipX = 1),
                  !n.skipY &&
                    (a > c || a < -c) &&
                    r < f(d, "y") &&
                    (n.skipY = 1),
                  n.skipX &&
                    n.skipY &&
                    (p.kill(),
                    n.vars.onAutoKill &&
                      n.vars.onAutoKill.apply(
                        p,
                        n.vars.onAutoKillParams || [],
                      ))),
                g
                  ? i.scrollTo(n.skipX ? t : n.x, n.skipY ? r : n.y)
                  : (n.skipY || (d.scrollTop = n.y),
                    n.skipX || (d.scrollLeft = n.x)),
                !v ||
                  (1 !== e && 0 !== e) ||
                  ((r = d.scrollTop),
                  (t = d.scrollLeft),
                  x
                    ? (d.style.scrollSnapType = x)
                    : d.style.removeProperty("scroll-snap-type"),
                  (d.scrollTop = r + 1),
                  (d.scrollLeft = t + 1),
                  (d.scrollTop = r),
                  (d.scrollLeft = t)),
                (n.xPrev = n.x),
                (n.yPrev = n.y),
                l && l.update();
            },
            kill: function (e) {
              var n = "scrollTo" === e;
              (n || "scrollTo_x" === e) && (this.skipX = 1),
                (n || "scrollTo_y" === e) && (this.skipY = 1);
            },
          };
        (x.max = f),
          (x.getOffset = h),
          (x.buildGetter = m),
          u() && n.registerPlugin(x),
          (e.ScrollToPlugin = x),
          (e.default = x),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(n);
    },
    1997: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = t(253),
        r = t(7294);
      function a(e, n) {
        e.addEventListener ? e.addEventListener("change", n) : e.addListener(n);
      }
      function o(e, n) {
        e.addEventListener
          ? e.removeEventListener("change", n)
          : e.removeListener(n);
      }
      var s = t(6777),
        l = t.n(s);
      function c(e, n) {
        var t = (function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            t = (0, r.useState)(n),
            i = t[0],
            s = t[1];
          return (
            (0, r.useEffect)(
              function () {
                var t = matchMedia(e);
                t.matches !== n && s(t.matches);
                var i = function () {
                  s(t.matches);
                };
                return (
                  a(t, i),
                  function () {
                    o(t, i);
                  }
                );
              },
              [n, e],
            ),
            i
          );
        })(
          (0, r.useMemo)(
            function () {
              var n = (0, i.Z)(e.match(/^([<>])(=?)(.*)$/), 4),
                t = n[1],
                r = n[2],
                a = n[3],
                o = (0, i.Z)(l()[a].match(/^([0-9]*)(.*)$/), 3),
                s = o[1],
                c = o[2],
                u = "<" === t ? "max" : "min",
                d = Number(s);
              return (
                r || (d += "<" === t ? -1 : 1),
                "screen and (".concat(u, "-width: ").concat(d).concat(c, ")")
              );
            },
            [e],
          ),
          n,
        );
        return t;
      }
    },
    8492: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = t(7294);
      function r(e) {
        var n = (0, i.useState)(null),
          t = n[0],
          r = n[1];
        return (
          (0, i.useEffect)(
            function () {
              var n = e.current;
              if (n) {
                var t = n.closest(".Section"),
                  i =
                    null === t || void 0 === t
                      ? void 0
                      : t.getAttribute("data-index");
                r(i);
              }
            },
            [e],
          ),
          !t || t > 1
        );
      }
    },
    4377: function (e, n, t) {
      "use strict";
      var i = t(5697),
        r = t.n(i);
      n.Z = r().shape({
        url: r().string,
        external: r().bool,
        title: r().string,
        a11y: r().string,
      });
    },
    6581: function (e, n, t) {
      "use strict";
      var i = t(5697),
        r = t.n(i);
      n.Z = r().oneOf(["true", "false"]);
    },
    640: function (e, n, t) {
      "use strict";
      var i = t(4924),
        r = t(5697),
        a = t.n(r),
        o = t(4377),
        s = a().shape({ level: a().oneOf([1, 2]), title: a().string });
      n.Z = a().shape({
        html: function (e, n, t) {
          return a().checkPropTypes(
            (0, i.Z)({}, n, a().string.isRequired),
            e,
            "prop",
            t,
          );
        },
        links: a().objectOf(o.Z),
        titles: a().objectOf(s),
      });
    },
    9501: function (e, n, t) {
      "use strict";
      t.d(n, {
        P: function () {
          return r;
        },
      });
      var i = t(253),
        r = function () {
          var e = window
              .getComputedStyle(document.body)
              .getPropertyValue("--sticky-header-height"),
            n = (0, i.Z)(e.split("px"), 1)[0];
          return parseInt(n, 10);
        };
    },
    9662: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return ee;
          },
        });
      var i = t(9815),
        r = t(5893),
        a = t(7294),
        o = t(5697),
        s = t.n(o),
        l = t(640),
        c = t(4591),
        u = t(8771),
        d = t(6042),
        p = t(9396),
        f = t(5449),
        m = t.n(f),
        y = t(4924),
        h = t(4184),
        g = t.n(h),
        v = t(5354),
        x = t(8189),
        _ = t(4425),
        C = t.n(_),
        k = t(3869),
        b = t.n(k),
        L = t(3282),
        w = t(555),
        Z = t(4377),
        R = t(8085),
        j = t.n(R);
      function T(e) {
        var n = e.url,
          t = e.external,
          i = e.title,
          o = e.a11y,
          s = e.selected,
          l = (0, a.useMemo)(
            function () {
              return t ? L.Z : w.Z;
            },
            [t],
          );
        return (0, r.jsx)("li", {
          className: j().main,
          children: (0, r.jsxs)(l, {
            route: n,
            className: j().departmentLink,
            tabIndex: s ? null : -1,
            target: t ? "blank" : null,
            children: [
              (0, r.jsx)("span", { children: i }),
              (0, r.jsx)("span", { className: "sr-only", children: o }),
            ],
          }),
        });
      }
      var P = (0, d.Z)({}, Z.Z.isRequired);
      T.propTypes = (0, p.Z)((0, d.Z)({}, P), {
        selected: s().bool.isRequired,
      });
      var I = (0, a.forwardRef)(function (e, n) {
          var t = e.departmentList,
            i = e.selected;
          return (0, r.jsx)("ul", {
            ref: n,
            className: b().main,
            "aria-hidden": !i,
            children: t.map(function (e, n) {
              return (0, r.jsx)(T, (0, d.Z)({ selected: i }, e), n);
            }),
          });
        }),
        q = I,
        N = { departmentList: s().arrayOf(s().shape(P)).isRequired };
      I.propTypes = (0, p.Z)((0, d.Z)({}, N), {
        selected: s().bool.isRequired,
      });
      var O = t(9521),
        S = t(9664),
        H = t(6486),
        B = t(9501);
      O.gsap.registerPlugin(S.ScrollToPlugin);
      function D(e) {
        var n = e.containerRef,
          t = e.contentRef,
          i = e.selected,
          r = e.onUpdate,
          a = void 0 === r ? function () {} : r,
          o = n.current,
          s = t.current;
        if (i) {
          var l = s.getBoundingClientRect().height;
          O.gsap.to(o, { height: l, duration: 0.5, onUpdate: a });
        } else O.gsap.to(o, { height: 0, duration: 0.5 });
      }
      function E(e) {
        var n = e.buttonRef,
          t = e.containerRef,
          i = e.contentRef,
          r = e.selected;
        return (
          (0, a.useEffect)(
            function () {
              var e = (0, H.throttle)(
                function () {
                  D({ containerRef: t, contentRef: i, selected: r });
                },
                500,
                { leading: !1 },
              );
              return (
                window.addEventListener("resize", e),
                D({
                  containerRef: t,
                  contentRef: i,
                  selected: r,
                  onUpdate: function () {
                    return (function (e) {
                      var n = e.current,
                        t = 40 + (0, B.P)(),
                        i = n.getBoundingClientRect().y;
                      if (i < t) {
                        var r = window.scrollY + i - t;
                        O.gsap.to(window, { duration: 0.3, scrollTo: r });
                      }
                    })(n);
                  },
                }),
                function () {
                  window.removeEventListener("resize", e);
                }
              );
            },
            [n, t, i, r],
          ),
          {}
        );
      }
      function M(e) {
        var n,
          t = e.selected,
          i = e.company,
          o = e.companyIndex,
          s = e.handleSelectedCompanyIndex,
          l = (0, a.useRef)(null),
          c = (0, a.useRef)(null),
          u = (0, a.useRef)(null);
        return (
          E({ buttonRef: l, containerRef: c, contentRef: u, selected: t }),
          (0, r.jsxs)("li", {
            className: C().main,
            children: [
              (0, r.jsxs)("button", {
                ref: l,
                onClick: function () {
                  return s(o);
                },
                className: g()(
                  C().companyButton,
                  (0, y.Z)({}, C().selected, t),
                ),
                type: "button",
                "aria-expanded": t,
                children: [
                  (0, r.jsx)("span", {
                    className: C().arrowContainer,
                    children: (0, r.jsx)(v.Z, { className: C().arrow }),
                  }),
                  i.title &&
                    (0, r.jsx)("span", {
                      className: C().companyLabel,
                      children: i.title,
                    }),
                  !i.title &&
                    (0, r.jsx)(x.ZP, {
                      className: g()(
                        C().svg,
                        ((n = {}),
                        (0, y.Z)(n, C().lmi, "logo-mode-en-image" === i.logo),
                        (0, y.Z)(n, C()._2l, x.Tw.includes(i.logo)),
                        (0, y.Z)(
                          n,
                          C().reiffart,
                          "logo-reiffersartinitiatives" === i.logo,
                        ),
                        n),
                      ),
                      image: i.logo,
                      title: i.title,
                    }),
                ],
              }),
              (0, r.jsx)("div", {
                className: C().departmentListContainer,
                ref: c,
                children: (0, r.jsx)(q, {
                  ref: u,
                  departmentList: i.links,
                  selected: t,
                }),
              }),
            ],
          })
        );
      }
      var W = {
        company: s().shape({
          links: N.departmentList,
          title: s().string.isRequired,
        }).isRequired,
      };
      function F(e) {
        var n = e.companyList,
          t = e.selectedCompanyIndex,
          i = e.handleSelectedCompanyIndex;
        return (0, r.jsx)(c.default, {
          children: (0, r.jsx)("ul", {
            className: m().main,
            children: n.map(function (e, n) {
              return (0, r.jsx)(
                M,
                {
                  companyIndex: n,
                  company: e,
                  selected: t === n,
                  handleSelectedCompanyIndex: i,
                },
                n,
              );
            }),
          }),
        });
      }
      M.propTypes = (0, p.Z)((0, d.Z)({}, W.company), {
        selected: s().bool.isRequired,
        companyIndex: s().number.isRequired,
        handleSelectedCompanyIndex: s().func.isRequired,
      });
      var X = { companyList: s().arrayOf(W.company).isRequired };
      F.propTypes = (0, p.Z)((0, d.Z)({}, X), {
        selectedCompanyIndex: s().number.isRequired,
        handleSelectedCompanyIndex: s().func.isRequired,
      });
      var Y = t(5430),
        A = t(1997),
        K = t(8492),
        V = t(6218),
        z = t.n(V);
      function U(e) {
        var n = e.selectedCompanyIndex,
          t = e.backgroundImages,
          i = (0, a.useRef)(null),
          o = (0, A.Z)("<phablet", !1),
          s = (0, A.Z)("<desktop", !1),
          l = (0, K.Z)(i);
        return (0, r.jsx)("div", {
          className: z().main,
          ref: i,
          children: t.map(function (e, t) {
            var i, a, c;
            return (0, r.jsx)(
              "div",
              {
                className: g()([
                  z().content,
                  ((c = {}),
                  (0, y.Z)(c, z().selected, t === n + 1),
                  (0, y.Z)(c, z().notDefault, t > 0),
                  c),
                ]),
                style: (null === e || void 0 === e ? void 0 : e.preview)
                  ? { backgroundColor: "#".concat(e.preview) }
                  : {},
                children:
                  o || s
                    ? (0, r.jsx)(Y.Z, {
                        src:
                          o &&
                          (null === (i = e.mobile) || void 0 === i
                            ? void 0
                            : i.path)
                            ? null === (a = e.mobile) || void 0 === a
                              ? void 0
                              : a.path
                            : e.path,
                        className: z().image,
                        alt: e.alt,
                        layout: "fill",
                        objectFit: "cover",
                        cloudinaryParams: ["ar_4:5", "c_fill"],
                        priority: !l,
                      })
                    : (0, r.jsx)(Y.Z, {
                        src: e.path,
                        className: z().image,
                        alt: e.alt,
                        layout: "fill",
                        objectFit: "cover",
                        priority: !l,
                      }),
              },
              t,
            );
          }),
        });
      }
      var $ = {
        type: s().string.isRequired,
        focal_point: s().shape({
          x: s().number.isRequired,
          y: s().number.isRequired,
        }),
        preview: s().string.isRequired,
        path: s().string.isRequired,
        alt: s().string.isRequired,
        width: s().string.isRequired,
        height: s().string.isRequired,
      };
      U.propTypes = {
        selectedCompanyIndex: s().number.isRequired,
        backgroundImages: s().arrayOf(s().shape($)).isRequired,
      };
      var G = t(1171),
        J = t.n(G),
        Q = t(421);
      function ee(e) {
        var n = e.title,
          t = e.text,
          o = e.content,
          s = e.image,
          l = (0, a.useState)(-1),
          d = l[0],
          p = l[1],
          f = [s].concat(
            (0, i.Z)(
              o.map(function (e) {
                return e.image;
              }),
            ),
          );
        return (0, r.jsxs)("div", {
          children: [
            (n.length > 0 || t.html.length > 0) &&
              (0, r.jsx)(c.default, {
                children: (0, r.jsx)(Q.default, { title: n, txtWysiwyg: t }),
              }),
            (0, r.jsxs)("div", {
              className: J().main,
              children: [
                (0, r.jsx)(U, { selectedCompanyIndex: d, backgroundImages: f }),
                (0, r.jsx)(u.Z, {}),
                (0, r.jsx)("div", {
                  className: J().content,
                  children: (0, r.jsx)(F, {
                    companyList: o,
                    selectedCompanyIndex: d,
                    handleSelectedCompanyIndex: function (e) {
                      p(d === e ? -1 : e);
                    },
                  }),
                }),
              ],
            }),
          ],
        });
      }
      (ee.defaultProps = { content: [], title: null, text: "" }),
        (ee.propTypes = {
          content: X.companyList,
          image: s().shape($).isRequired,
          title: s().string,
          text: l.Z,
        });
    },
    421: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return m;
          },
        });
      var i = t(4924),
        r = t(5893),
        a = t(5697),
        o = t.n(a),
        s = t(640),
        l = t(6670),
        c = t(4184),
        u = t.n(c),
        d = t(2864),
        p = t(4905),
        f = t.n(p);
      function m(e) {
        var n,
          t = e.title,
          a = e.txtWysiwyg,
          o = null !== t && void 0 !== t ? t : t.props.children,
          s =
            (null === a || void 0 === a || null === (n = a.html) || void 0 === n
              ? void 0
              : n.length) > 0;
        return (0, r.jsxs)("div", {
          className: u()([
            f().main,
            (0, i.Z)({}, f().simple, (o && !s) || (!o && s)),
          ]),
          children: [
            t.length > 0 &&
              (0, r.jsx)(l.t2, {
                children: (0, r.jsx)(l.X6, {
                  className: f().title,
                  children: t,
                }),
              }),
            (null === a || void 0 === a ? void 0 : a.html) &&
              (0, r.jsx)(d.Z, { text: a, className: f().description }),
          ],
        });
      }
      m.propTypes = {
        title: o().oneOfType([o().arrayOf(o().node), o().node]).isRequired,
        txtWysiwyg: s.Z.isRequired,
      };
    },
    4591: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return c;
          },
        });
      var i = t(5893),
        r = t(4086),
        a = t(4184),
        o = t.n(a),
        s = t(2218),
        l = t.n(s);
      function c(e) {
        var n = e.children;
        return (0, i.jsx)("div", {
          className: o()(l().main, "layout"),
          children: n,
        });
      }
      (c.defaultProps = {}), (c.propTypes = { children: r.Z.isRequired });
    },
    3282: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var i = t(6042),
        r = t(9396),
        a = t(9534),
        o = t(5893),
        s = t(5697),
        l = t.n(s),
        c = t(4086),
        u = t(7294),
        d = [
          "mazarine.com",
          "lamodeenimages.com",
          "numero.com",
          "mazarineasiapacific.cn",
          "reiffersartinitiatives.com",
        ],
        p = (0, u.forwardRef)(function (e, n) {
          var t = e.route,
            s = e.children,
            l = (e.prefetch, e.blank),
            c = e.fromInternalLink,
            p = (0, a.Z)(e, [
              "route",
              "children",
              "prefetch",
              "blank",
              "fromInternalLink",
            ]),
            f = (0, u.useState)(null),
            m = f[0],
            y = f[1],
            h = t.replace("/sites/default/files", "/download");
          return (
            (0, u.useEffect)(
              function () {
                if (!c && d.length > 0) {
                  d.every(function (e) {
                    return t.indexOf(e) < 0;
                  }) && y("nofollow noopener noreferrer");
                }
              },
              [t, c],
            ),
            (0, o.jsx)(
              "a",
              (0, r.Z)(
                (0, i.Z)(
                  { ref: n, rel: m, target: l ? "_blank" : "_self", href: h },
                  p,
                ),
                { children: s },
              ),
            )
          );
        });
      (p.displayName = "ExternalLink"),
        (p.defaultProps = { children: null, blank: !1, fromInternalLink: !1 }),
        (p.propTypes = {
          route: l().string.isRequired,
          blank: l().bool,
          fromInternalLink: l().bool,
          children: c.Z,
        });
      var f = p;
    },
    555: function (e, n, t) {
      "use strict";
      var i = t(6042),
        r = t(5893),
        a = t(3282);
      n.Z = function (e) {
        return (0, r.jsx)(a.Z, (0, i.Z)({ fromInternalLink: !0 }, e));
      };
    },
    5430: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(6042),
        r = t(9396),
        a = t(9534),
        o = t(9815),
        s = t(5893),
        l = t(5675),
        c = t.n(l);
      function u(e) {
        var n = e.src,
          t = e.cloudinaryParams,
          l = (0, a.Z)(e, ["src", "cloudinaryParams"]),
          u = n.split("upload")[1];
        return (0, s.jsx)(
          c(),
          (0, i.Z)(
            {
              loader: function (e) {
                return (function (e) {
                  var n = e.src,
                    t = e.width,
                    i = e.cloudinaryParams,
                    r = void 0 === i ? [] : i,
                    a = ["f_auto", "q_auto", "w_".concat(t)],
                    s = (
                      r.findIndex(function (e) {
                        return 0 === e.indexOf("c_");
                      }) > -1
                        ? (0, o.Z)(r).concat((0, o.Z)(a))
                        : (0, o.Z)(r).concat((0, o.Z)(a), ["c_limit"])
                    ).join(",");
                  return "https://res.cloudinary.com/mazarine-digital/image/upload/"
                    .concat(s)
                    .concat(n);
                })((0, r.Z)((0, i.Z)({}, e), { cloudinaryParams: t }));
              },
              src: u,
            },
            l,
          ),
        );
      }
    },
    8771: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(5893),
        r = t(4298),
        a = t.n(r);
      function o() {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(a(), {
            dangerouslySetInnerHTML: {
              __html:
                "\nfunction getStickyHeaderHeight() {\n\tconst header = document.querySelector('[data-id=\"header\"');\n\tif (!header) return 0;\n\tconst {position} = window.getComputedStyle(header);\n\tif (position !== 'sticky') return 0;\n\tconst {height} = header.getBoundingClientRect();\n\treturn height;\n}\nfunction setStickyHeaderHeightCssVariable() {\n\tconst headerHeight = getStickyHeaderHeight();\n\tdocument.body.style.setProperty(\"--sticky-header-height\", headerHeight + 'px');\n}\nfunction initStickyHeaderHeightCssVariable() {\n\tif (window.stickyHeaderHeightCssVariableInitialized) return;\n\twindow.stickyHeaderHeightCssVariableInitialized = true\n\tsetStickyHeaderHeightCssVariable();\n\twindow.addEventListener('resize', setStickyHeaderHeightCssVariable)\n}\ninitStickyHeaderHeightCssVariable();\n",
            },
          }),
        });
      }
    },
    2864: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return k;
        },
      });
      var i = t(6042),
        r = t(9534),
        a = t(253),
        o = t(5893),
        s = t(5697),
        l = t.n(s),
        c = t(7294),
        u = t(9396),
        d = l().oneOfType([l().func, l().shape({ current: l().any })]);
      function p(e, n) {
        return e
          ? e.replace(/\{\{\s*(.*?)\s*\}\}/g, function (e, t) {
              return n[t];
            })
          : null;
      }
      function f(e) {
        var n = e._dynamicRef,
          t = e.string,
          a = e.parts,
          s = e.nodeType,
          l = (0, r.Z)(e, ["_dynamicRef", "string", "parts", "nodeType"]),
          d = (0, c.useRef)(null);
        (0, c.useImperativeHandle)(n, function () {
          return d.current;
        });
        var f = s;
        return (0, o.jsx)(
          f,
          (0, u.Z)((0, i.Z)({ ref: d }, l), {
            dangerouslySetInnerHTML: { __html: p(t, a) },
          }),
        );
      }
      (f.defaultProps = { _dynamicRef: null, parts: {} }),
        (f.propTypes = {
          _dynamicRef: d,
          string: l().string.isRequired,
          nodeType: l().string.isRequired,
          parts: l().objectOf(l().string),
        });
      var m = t(6670),
        y = t(4581),
        h = t(6581),
        g = t(4184),
        v = t.n(g),
        x = t(640),
        _ = t(7714),
        C = t.n(_);
      function k(e) {
        var n = e.className,
          t = e.text,
          s = e["aria-hidden"],
          l = e.styles,
          u = (e._self, e.nodeType),
          d = (0, r.Z)(e, [
            "className",
            "text",
            "aria-hidden",
            "styles",
            "_self",
            "nodeType",
          ]),
          p = (0, c.useMemo)(
            function () {
              return t.links
                ? Object.entries(t.links)
                    .map(function (e) {
                      return "".concat(e[0]).concat(e[1].title);
                    })
                    .join()
                : null;
            },
            [t.links],
          ),
          h = (0, c.useMemo)(
            function () {
              var e = {};
              return t.links
                ? (Object.entries(t.links).forEach(function (n) {
                    var t,
                      i = (0, a.Z)(n, 2),
                      r = i[0],
                      o = i[1],
                      c =
                        null !==
                          (t = null === l || void 0 === l ? void 0 : l.link) &&
                        void 0 !== t
                          ? t
                          : C().link,
                      u = o.url.replace("/sites/default/files", "/download");
                    e[r] = "<a \n\t\t\t\t\t"
                      .concat(
                        "true" === s ? "tabIndex='-1'" : "",
                        "\n\t\t\t\t\t",
                      )
                      .concat(
                        o.external ? "rel='noopener'" : "",
                        "\n\t\t\t\t\t",
                      )
                      .concat(
                        o.external ? "target='_blank'" : "",
                        "\n\t\t\t\t\thref='",
                      )
                      .concat(u, "'\n\t\t\t\t\t")
                      .concat(c ? "class='".concat(c, "'") : "", "\n\t\t\t\t>")
                      .concat(o.title, "</a>");
                  }),
                  e)
                : e;
            },
            [s, p, l],
          ),
          g = (0, c.useMemo)(
            function () {
              return t.titles
                ? Object.entries(t.titles)
                    .map(function (e) {
                      return "".concat(e[0]).concat(e[1].title);
                    })
                    .join()
                : null;
            },
            [t.titles],
          ),
          x = (0, m.T7)() || 1,
          _ = (0, m.Bk)(),
          k = (0, c.useMemo)(
            function () {
              var e = {};
              return t.titles
                ? (Object.entries(t.titles).forEach(function (n) {
                    var t,
                      i,
                      r = (0, a.Z)(n, 2),
                      o = r[0],
                      s = r[1],
                      c = x + s.level - 1,
                      u =
                        1 === s.level
                          ? null !==
                              (t =
                                null === l || void 0 === l ? void 0 : l.h1) &&
                            void 0 !== t
                            ? t
                            : C().h1
                          : null !==
                                (i =
                                  null === l || void 0 === l ? void 0 : l.h2) &&
                              void 0 !== i
                            ? i
                            : C().h2;
                    e[o] = _
                      ? "<p role='heading' aria-level='"
                          .concat(c, "'")
                          .concat(u ? " class='".concat(u, "'") : "", ">")
                          .concat(s.title, "</p>")
                      : "<h"
                          .concat(c)
                          .concat(u ? " class='".concat(u, "'") : "", ">")
                          .concat(s.title, "</h")
                          .concat(c, ">");
                  }),
                  e)
                : e;
            },
            [x, g, l],
          ),
          b = (0, y.Yu)();
        return (0, o.jsx)(
          f,
          (0, i.Z)(
            {
              "aria-hidden": "true" === s ? "true" : null,
              className: v()(
                C().main,
                null === l || void 0 === l ? void 0 : l.main,
                n,
                null === l || void 0 === l ? void 0 : l[b],
                C()[b],
              ),
              string: t.html,
              parts: (0, i.Z)({}, k, h),
              nodeType: u,
            },
            d,
          ),
        );
      }
      (k.defaultProps = {
        "aria-hidden": null,
        className: "",
        styles: null,
        nodeType: "div",
      }),
        (k.propTypes = {
          text: x.Z.isRequired,
          "aria-hidden": h.Z,
          className: l().string,
          nodeType: l().oneOf(["div", "span", "p"]),
          styles: l().shape({
            main: l().string,
            link: l().string,
            h1: l().string,
            h2: l().string,
          }),
        });
    },
    6777: function (e) {
      e.exports = {
        minimum: "320px",
        phone: "375px",
        phablet: "768px",
        tablet: "820px",
        desktop: "1024px",
        large: "1200px",
        maximum: "1500px",
        "fade-in": "globalOnce__breakpoints_fade-in",
        "fade-in-delay": "globalOnce__breakpoints_fade-in-delay",
      };
    },
    6218: function (e) {
      e.exports = {
        main: "Companies_Background",
        notDefault: "Companies_Background_notDefault",
        content: "Companies_Background_content",
        selected: "Companies_Background_selected",
        image: "Companies_Background_image",
        "fade-in": "Companies_Background_fade-in",
        "fade-in-delay": "Companies_Background_fade-in-delay",
      };
    },
    8085: function (e) {
      e.exports = {
        main: "DepartmentList_Department",
        departmentLink: "DepartmentList_Department_departmentLink",
        "fade-in": "DepartmentList_Department_fade-in",
        "fade-in-delay": "DepartmentList_Department_fade-in-delay",
      };
    },
    3869: function (e) {
      e.exports = {
        main: "Company_DepartmentList",
        "fade-in": "Company_DepartmentList_fade-in",
        "fade-in-delay": "Company_DepartmentList_fade-in-delay",
      };
    },
    4425: function (e) {
      e.exports = {
        departmentListContainer: "CompanyList_Company_departmentListContainer",
        main: "CompanyList_Company",
        selected: "CompanyList_Company_selected",
        departmentList: "CompanyList_Company_departmentList",
        companyButton: "CompanyList_Company_companyButton",
        arrowContainer: "CompanyList_Company_arrowContainer",
        arrow: "CompanyList_Company_arrow",
        svg: "CompanyList_Company_svg",
        _2l: "CompanyList_Company__2l",
        lmi: "CompanyList_Company_lmi",
        companyLabel: "CompanyList_Company_companyLabel",
        companyList: "CompanyList_Company_companyList",
        reiffart: "CompanyList_Company_reiffart",
        "fade-in": "CompanyList_Company_fade-in",
        "fade-in-delay": "CompanyList_Company_fade-in-delay",
      };
    },
    5449: function (e) {
      e.exports = {
        main: "Companies_CompanyList",
        "fade-in": "Companies_CompanyList_fade-in",
        "fade-in-delay": "Companies_CompanyList_fade-in-delay",
      };
    },
    1171: function (e) {
      e.exports = {
        main: "Flux_Companies",
        content: "Flux_Companies_content",
        "fade-in": "Flux_Companies_fade-in",
        "fade-in-delay": "Flux_Companies_fade-in-delay",
      };
    },
    4905: function (e) {
      e.exports = {
        description: "Flux_TitleDescription_description",
        title: "Flux_TitleDescription_title",
        main: "Flux_TitleDescription",
        simple: "Flux_TitleDescription_simple",
        "fade-in": "Flux_TitleDescription_fade-in",
        "fade-in-delay": "Flux_TitleDescription_fade-in-delay",
      };
    },
    2218: function (e) {
      e.exports = {
        main: "LayoutMediumCenteredPercent",
        "fade-in": "LayoutMediumCenteredPercent_fade-in",
        "fade-in-delay": "LayoutMediumCenteredPercent_fade-in-delay",
      };
    },
    7714: function (e) {
      e.exports = {
        main: "Wysiwyg",
        link: "Wysiwyg_link",
        h1: "Wysiwyg_h1",
        h2: "Wysiwyg_h2",
        white: "Wysiwyg_white",
        "smoke-white": "Wysiwyg_smoke-white",
        black: "Wysiwyg_black",
        "black-coal": "Wysiwyg_black-coal",
        "fade-in": "Wysiwyg_fade-in",
        "fade-in-delay": "Wysiwyg_fade-in-delay",
      };
    },
    4298: function (e, n, t) {
      e.exports = t(699);
    },
  },
]);
