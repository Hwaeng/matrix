(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2452],
  {
    1997: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(253),
        r = n(7294);
      function a(e, t) {
        e.addEventListener ? e.addEventListener("change", t) : e.addListener(t);
      }
      function l(e, t) {
        e.addEventListener
          ? e.removeEventListener("change", t)
          : e.removeListener(t);
      }
      var s = n(6777),
        o = n.n(s);
      function c(e, t) {
        var n = (function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = (0, r.useState)(t),
            i = n[0],
            s = n[1];
          return (
            (0, r.useEffect)(
              function () {
                var n = matchMedia(e);
                n.matches !== t && s(n.matches);
                var i = function () {
                  s(n.matches);
                };
                return (
                  a(n, i),
                  function () {
                    l(n, i);
                  }
                );
              },
              [t, e],
            ),
            i
          );
        })(
          (0, r.useMemo)(
            function () {
              var t = (0, i.Z)(e.match(/^([<>])(=?)(.*)$/), 4),
                n = t[1],
                r = t[2],
                a = t[3],
                l = (0, i.Z)(o()[a].match(/^([0-9]*)(.*)$/), 3),
                s = l[1],
                c = l[2],
                u = "<" === n ? "max" : "min",
                f = Number(s);
              return (
                r || (f += "<" === n ? -1 : 1),
                "screen and (".concat(u, "-width: ").concat(f).concat(c, ")")
              );
            },
            [e],
          ),
          t,
        );
        return n;
      }
    },
    7420: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return a;
        },
      });
      var i = n(5697),
        r = n.n(i),
        a = r().shape({
          url: r().string,
          title: r().string,
          external: r().bool,
          a11y: r().string,
        });
    },
    2452: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return y;
          },
        });
      var i,
        r,
        a,
        l = n(5893),
        s = n(5697),
        o = n.n(s),
        c = n(7420),
        u = n(7294),
        f = n(4184),
        d = n.n(f),
        m = n(9521),
        x = n(6546),
        p = n(4581),
        h = n(1997);
      function v() {
        return (
          (v = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                }
                return e;
              }),
          v.apply(this, arguments)
        );
      }
      var b = (e) =>
          u.createElement(
            "svg",
            v(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                viewBox: "0 0 15.14 28.07",
              },
              e,
            ),
            i ||
              (i = u.createElement("path", {
                d: "M7.57 1.89c-3.14 0-5.68 2.54-5.68 5.68v7.57c0 3.14 2.54 5.68 5.68 5.68s5.68-2.54 5.68-5.68V7.57c0-3.14-2.54-5.68-5.68-5.68Zm0-1.89c4.18 0 7.57 3.39 7.57 7.57v7.57a7.571 7.571 0 0 1-15.14 0V7.57C0 3.39 3.39 0 7.57 0Z",
              })),
            r ||
              (r = u.createElement("path", {
                d: "M6.62 5.68c0-.52.42-.95.95-.95s.95.42.95.95v5.05c0 .52-.42.95-.95.95s-.95-.42-.95-.95V5.68ZM8.04 27.94c-.45.26-1.03.1-1.29-.35a.948.948 0 0 1 .35-1.29l4.41-2.52c.45-.26 1.03-.1 1.29.35s.1 1.03-.35 1.29l-4.41 2.52Z",
              })),
            a ||
              (a = u.createElement("path", {
                d: "M8.04 26.3c.45.26.61.84.35 1.29-.26.45-.84.61-1.29.35l-4.41-2.52c-.45-.26-.61-.84-.35-1.29s.84-.61 1.29-.35l4.41 2.52Z",
              })),
          ),
        g = n(7407),
        _ = n.n(g);
      function k(e) {
        var t = e.textDesktop,
          n = e.textMobile,
          i = (0, h.Z)("<phablet", !1),
          r = (0, p.Yu)(),
          a = (0, u.useRef)(null),
          s = (0, u.useRef)();
        return (
          (0, u.useEffect)(function () {
            var e = document.querySelector(".Ecrin_Header");
            x.ScrollTrigger.create({
              trigger: a.current,
              start: "top+=5px top",
              end: "top+=5px top",
              onEnterBack: function () {
                a.current.classList.remove(_().black),
                  s.current.classList.remove(_().black),
                  e.classList.remove("goUp");
              },
              onLeave: function () {
                a.current.classList.add(_().black),
                  s.current.classList.add(_().black),
                  e.classList.add("goUp");
              },
            });
          }, []),
          (0, l.jsxs)("div", {
            className: d()([_().main, _().fullscreen, _()[r]]),
            ref: a,
            children: [
              (0, l.jsx)("div", {
                className: _().static,
                children: (0, l.jsx)("div", {
                  className: d()(_()["block-list--item"], _().line),
                  dangerouslySetInnerHTML: { __html: i ? n : t },
                }),
              }),
              (0, l.jsxs)("div", {
                className: _().scrollCta,
                ref: s,
                children: [
                  (0, l.jsx)("p", { children: "Scroll" }),
                  (0, l.jsx)(b, {}),
                ],
              }),
            ],
          })
        );
      }
      m.gsap.registerPlugin(x.ScrollTrigger),
        (k.defaultProps = { textDesktop: "", textMobile: "" }),
        (k.propTypes = { textDesktop: o().string, textMobile: o().string });
      var M = n(7046);
      function Z(e) {
        var t = e.textDesktop,
          n = e.textMobile,
          i = e.cta,
          r = (0, h.Z)("<phablet", !1),
          a = (0, p.Yu)();
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", {
              className: d()([_().main, _()[a]]),
              children: (0, l.jsx)("div", {
                className: _().static,
                children: (0, l.jsx)("div", {
                  className: d()(_()["block-list--item"], _().line),
                  dangerouslySetInnerHTML: { __html: r ? n : t },
                }),
              }),
            }),
            i &&
              (0, l.jsx)("div", {
                className: _().tags,
                children: i.map(function (e, t) {
                  return (0, l.jsx)(
                    M.Z,
                    {
                      external: e.external,
                      className: "smallTag",
                      url: e.url,
                      a11y: e.a11y,
                      children: e.title,
                    },
                    t,
                  );
                }),
              }),
          ],
        });
      }
      function y(e) {
        var t = e.textDesktop,
          n = e.textMobile,
          i = e.cta;
        return "fullscreen" === e.mode
          ? (0, l.jsx)(k, { textDesktop: t, textMobile: n })
          : (0, l.jsx)(Z, { textDesktop: t, textMobile: n, cta: i });
      }
      (Z.defaultProps = { textDesktop: "", textMobile: "", cta: [] }),
        (Z.propTypes = {
          textDesktop: o().string,
          textMobile: o().string,
          cta: o().arrayOf(c.x),
        }),
        (y.defaultProps = {
          textDesktop: "",
          textMobile: "",
          mode: "",
          cta: [],
        }),
        (y.propTypes = {
          textDesktop: o().string,
          textMobile: o().string,
          mode: o().string,
          cta: o().arrayOf(c.x),
        });
    },
    3282: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = n(6042),
        r = n(9396),
        a = n(9534),
        l = n(5893),
        s = n(5697),
        o = n.n(s),
        c = n(4086),
        u = n(7294),
        f = [
          "mazarine.com",
          "lamodeenimages.com",
          "numero.com",
          "mazarineasiapacific.cn",
          "reiffersartinitiatives.com",
        ],
        d = (0, u.forwardRef)(function (e, t) {
          var n = e.route,
            s = e.children,
            o = (e.prefetch, e.blank),
            c = e.fromInternalLink,
            d = (0, a.Z)(e, [
              "route",
              "children",
              "prefetch",
              "blank",
              "fromInternalLink",
            ]),
            m = (0, u.useState)(null),
            x = m[0],
            p = m[1],
            h = n.replace("/sites/default/files", "/download");
          return (
            (0, u.useEffect)(
              function () {
                if (!c && f.length > 0) {
                  f.every(function (e) {
                    return n.indexOf(e) < 0;
                  }) && p("nofollow noopener noreferrer");
                }
              },
              [n, c],
            ),
            (0, l.jsx)(
              "a",
              (0, r.Z)(
                (0, i.Z)(
                  { ref: t, rel: x, target: o ? "_blank" : "_self", href: h },
                  d,
                ),
                { children: s },
              ),
            )
          );
        });
      (d.displayName = "ExternalLink"),
        (d.defaultProps = { children: null, blank: !1, fromInternalLink: !1 }),
        (d.propTypes = {
          route: o().string.isRequired,
          blank: o().bool,
          fromInternalLink: o().bool,
          children: c.Z,
        });
      var m = d;
    },
    555: function (e, t, n) {
      "use strict";
      var i = n(6042),
        r = n(5893),
        a = n(3282);
      t.Z = function (e) {
        return (0, r.jsx)(a.Z, (0, i.Z)({ fromInternalLink: !0 }, e));
      };
    },
    7046: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(6042),
        r = n(9396),
        a = n(9534),
        l = n(5893),
        s = n(7294),
        o = n(3282),
        c = n(555);
      function u(e) {
        var t = e.url,
          n = e.external,
          u = e.children,
          f = e.blank,
          d = (0, a.Z)(e, ["url", "external", "children", "blank"]),
          m = (0, s.useMemo)(
            function () {
              return n ? o.Z : c.Z;
            },
            [n],
          );
        return "string" !== typeof t || "boolean" !== typeof n
          ? null
          : (0, l.jsx)(
              m,
              (0, r.Z)((0, i.Z)({ route: t, blank: f }, d), { children: u }),
            );
      }
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
    7407: function (e) {
      e.exports = {
        main: "Flux_AnimationMultilines",
        fullscreen: "Flux_AnimationMultilines_fullscreen",
        relative: "Flux_AnimationMultilines_relative",
        container: "Flux_AnimationMultilines_container",
        static: "Flux_AnimationMultilines_static",
        line: "Flux_AnimationMultilines_line",
        scrollCta: "Flux_AnimationMultilines_scrollCta",
        show: "Flux_AnimationMultilines_show",
        black: "Flux_AnimationMultilines_black",
        tags: "Flux_AnimationMultilines_tags",
        "black-coal": "Flux_AnimationMultilines_black-coal",
        white: "Flux_AnimationMultilines_white",
        "smoke-white": "Flux_AnimationMultilines_smoke-white",
        "fade-in": "Flux_AnimationMultilines_fade-in",
        "fade-in-delay": "Flux_AnimationMultilines_fade-in-delay",
      };
    },
  },
]);
