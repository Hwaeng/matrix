(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [115, 6419],
  {
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
      function l(e, n) {
        e.addEventListener
          ? e.removeEventListener("change", n)
          : e.removeListener(n);
      }
      var s = t(6777),
        o = t.n(s);
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
                    l(t, i);
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
                l = (0, i.Z)(o()[a].match(/^([0-9]*)(.*)$/), 3),
                s = l[1],
                c = l[2],
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
    4012: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return w;
          },
        });
      var i = t(5893),
        r = t(7294),
        a = t(1043),
        l = t(719),
        s = t(1911),
        o = t(5697),
        c = t.n(o),
        u = t(4377),
        d = t(1997),
        f = t(3282),
        m = t(555),
        p = t(6670),
        h = t(5430),
        x = t(6419),
        v = t(2836),
        _ = (t(933), t(8770), t(92), t(8254)),
        g = t.n(_);
      function w(e) {
        var n = e.title,
          t = e.slidesList,
          o = (0, d.Z)("<phablet", !1),
          c = (0, a.v9)(v.Aj),
          u = o ? 10 : 30,
          _ = 1200,
          w = 30,
          b = o ? ["ar_28:21", "c_fill"] : ["ar_30:21", "c_fill"],
          y = (0, r.useState)(null),
          Z = y[0],
          k = y[1],
          E = (0, r.useState)(null),
          j = E[0],
          L = E[1],
          S = (0, r.useState)(410),
          N = S[0],
          F = S[1],
          q = (0, r.useState)(null),
          P = q[0],
          R = q[1],
          I = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(
            function () {
              var e = crypto.randomUUID();
              R(e);
            },
            [o],
          ),
          (0, r.useEffect)(
            function () {
              if (o) k(w), L(((N + u) / (N + u - 60)) * 1);
              else if (N < 1020) k(w), L(((N + u) / (N + u - 60)) * 3);
              else if (N < 960 + N / 4) {
                k(30), L(((N + u) / (N + u - 60)) * 3);
              } else {
                var e = (N - _) / 2;
                k(e), L(((_ + u + 2 * e) / (_ + u)) * 3);
              }
            },
            [N, o, u],
          ),
          (0, r.useEffect)(
            function () {
              var e = I.current.querySelectorAll(".swiper-button-prev")[0],
                n = I.current.querySelectorAll(".swiper-button-next")[0];
              e.setAttribute("style", "left: ".concat(Z, "px")),
                n.setAttribute("style", "right: ".concat(Z, "px"));
            },
            [Z],
          ),
          (0, r.useEffect)(function () {
            var e = function () {
              return F(window.innerWidth);
            };
            return (
              e(),
              window.addEventListener("resize", e),
              function () {
                return window.removeEventListener("resize", e);
              }
            );
          }, []),
          (0, i.jsxs)(i.Fragment, {
            children: [
              n &&
                (0, i.jsx)(x.default, {
                  children: (0, i.jsx)(p.t2, {
                    children: (0, i.jsx)(p.X6, {
                      className: g().title,
                      children: n,
                    }),
                  }),
                }),
              (0, i.jsxs)(
                l.tq,
                {
                  ref: I,
                  className: g().main,
                  slidesPerView: j,
                  modules: [s.W_, s.N1, s.tl],
                  navigation: !0,
                  keyboard: { enabled: !0, onlyInViewport: !0 },
                  spaceBetween: u,
                  slidesOffsetBefore: Z,
                  slidesOffsetAfter: Z,
                  children: [
                    t.map(function (e) {
                      var n,
                        t,
                        r,
                        a = e.id,
                        s = e.title,
                        c = e.description,
                        u = e.cta,
                        d = e.link_external,
                        p = e.image,
                        x = (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)("div", {
                              className: g().image,
                              style: (
                                null === p || void 0 === p ? void 0 : p.preview
                              )
                                ? {
                                    backgroundColor: "#".concat(
                                      null === p || void 0 === p
                                        ? void 0
                                        : p.preview,
                                    ),
                                  }
                                : {},
                              children: (0, i.jsx)(h.Z, {
                                src:
                                  o &&
                                  (null === (n = p.mobile) || void 0 === n
                                    ? void 0
                                    : n.path)
                                    ? null === (t = p.mobile) || void 0 === t
                                      ? void 0
                                      : t.path
                                    : p.path,
                                sizes:
                                  "(min-width: 1280px) 400px, (min-width: 768px) 33vw, 100vw",
                                alt: p.alt,
                                layout: "fill",
                                objectFit: "cover",
                                cloudinaryParams: b,
                              }),
                            }),
                            (0, i.jsxs)("div", {
                              className: g().legends,
                              children: [
                                s &&
                                  (0, i.jsx)("p", {
                                    className: g().editotitle,
                                    children: s,
                                  }),
                                c &&
                                  (0, i.jsx)("p", {
                                    className: g().text,
                                    children: c,
                                  }),
                                u &&
                                  u.url &&
                                  u.title &&
                                  (0, i.jsx)("p", {
                                    className: g().cta,
                                    children: u.title,
                                  }),
                              ],
                            }),
                          ],
                        });
                      return (
                        (r =
                          u && u.url
                            ? u.external
                              ? (0, i.jsx)(f.Z, {
                                  route: u.url,
                                  target: d ? "_blank" : "_self",
                                  children: x,
                                })
                              : (0, i.jsx)(m.Z, {
                                  route: u.url,
                                  target: d ? "_blank" : "_self",
                                  children: x,
                                })
                            : x),
                        (0, i.jsx)(
                          l.o5,
                          { className: g().slide, children: r },
                          a,
                        )
                      );
                    }),
                    (0, i.jsx)("p", {
                      className: g().slidesTitle,
                      children:
                        "fr" === c ? "Derni\xe8res actualit\xe9s" : "Last news",
                    }),
                  ],
                },
                P,
              ),
            ],
          })
        );
      }
      (w.defaultProps = { image: null, link_external: !1 }),
        (w.propTypes = {
          title: c().string.isRequired,
          slidesList: c().arrayOf(
            c().shape({
              id: c().number.isRequired,
              title: c().string.isRequired,
              description: c().string,
              cta: u.Z.isRequired,
              link_external: c().bool,
              image: c().shape({ path: c().string, alt: c().string }),
            }),
          ).isRequired,
        });
    },
    6419: function (e, n, t) {
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
        l = t.n(a),
        s = t(202),
        o = t.n(s);
      function c(e) {
        var n = e.children;
        return (0, i.jsx)("div", {
          className: l()(o().main, "layout"),
          children: n,
        });
      }
      (c.defaultProps = {}), (c.propTypes = { children: r.Z.isRequired });
    },
    3282: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return m;
        },
      });
      var i = t(6042),
        r = t(9396),
        a = t(9534),
        l = t(5893),
        s = t(5697),
        o = t.n(s),
        c = t(4086),
        u = t(7294),
        d = [
          "mazarine.com",
          "lamodeenimages.com",
          "numero.com",
          "mazarineasiapacific.cn",
          "reiffersartinitiatives.com",
        ],
        f = (0, u.forwardRef)(function (e, n) {
          var t = e.route,
            s = e.children,
            o = (e.prefetch, e.blank),
            c = e.fromInternalLink,
            f = (0, a.Z)(e, [
              "route",
              "children",
              "prefetch",
              "blank",
              "fromInternalLink",
            ]),
            m = (0, u.useState)(null),
            p = m[0],
            h = m[1],
            x = t.replace("/sites/default/files", "/download");
          return (
            (0, u.useEffect)(
              function () {
                if (!c && d.length > 0) {
                  d.every(function (e) {
                    return t.indexOf(e) < 0;
                  }) && h("nofollow noopener noreferrer");
                }
              },
              [t, c],
            ),
            (0, l.jsx)(
              "a",
              (0, r.Z)(
                (0, i.Z)(
                  { ref: n, rel: p, target: o ? "_blank" : "_self", href: x },
                  f,
                ),
                { children: s },
              ),
            )
          );
        });
      (f.displayName = "ExternalLink"),
        (f.defaultProps = { children: null, blank: !1, fromInternalLink: !1 }),
        (f.propTypes = {
          route: o().string.isRequired,
          blank: o().bool,
          fromInternalLink: o().bool,
          children: c.Z,
        });
      var m = f;
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
        l = t(9815),
        s = t(5893),
        o = t(5675),
        c = t.n(o);
      function u(e) {
        var n = e.src,
          t = e.cloudinaryParams,
          o = (0, a.Z)(e, ["src", "cloudinaryParams"]),
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
                        ? (0, l.Z)(r).concat((0, l.Z)(a))
                        : (0, l.Z)(r).concat((0, l.Z)(a), ["c_limit"])
                    ).join(",");
                  return "https://res.cloudinary.com/mazarine-digital/image/upload/"
                    .concat(s)
                    .concat(n);
                })((0, r.Z)((0, i.Z)({}, e), { cloudinaryParams: t }));
              },
              src: u,
            },
            o,
          ),
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
    8254: function (e) {
      e.exports = {
        title: "Flux_SlideshowEdito_title",
        main: "Flux_SlideshowEdito",
        slidesTitle: "Flux_SlideshowEdito_slidesTitle",
        image: "Flux_SlideshowEdito_image",
        legends: "Flux_SlideshowEdito_legends",
        cta: "Flux_SlideshowEdito_cta",
        editotitle: "Flux_SlideshowEdito_editotitle",
        "fade-in": "Flux_SlideshowEdito_fade-in",
        "fade-in-delay": "Flux_SlideshowEdito_fade-in-delay",
      };
    },
    202: function (e) {
      e.exports = {
        main: "LayoutMediumCentered",
        "fade-in": "LayoutMediumCentered_fade-in",
        "fade-in-delay": "LayoutMediumCentered_fade-in-delay",
      };
    },
    92: function () {},
    8770: function () {},
  },
]);
