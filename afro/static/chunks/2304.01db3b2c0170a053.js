(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2304],
  {
    5354: function (e, a, r) {
      "use strict";
      var n,
        t = r(7294);
      function s() {
        return (
          (s = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var a = 1; a < arguments.length; a++) {
                  var r = arguments[a];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          s.apply(this, arguments)
        );
      }
      a.Z = (e) =>
        t.createElement(
          "svg",
          s(
            {
              width: "1em",
              height: "1em",
              viewBox: "0 0 38 26",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e,
          ),
          n ||
            (n = t.createElement("path", {
              d: "M0 12.781h37m0 0-12 12m12-12-12-12",
              stroke: "currentColor",
            })),
        );
    },
    7460: function (e, a, r) {
      "use strict";
      var n,
        t = r(7294);
      function s() {
        return (
          (s = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var a = 1; a < arguments.length; a++) {
                  var r = arguments[a];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          s.apply(this, arguments)
        );
      }
      a.Z = (e) =>
        t.createElement(
          "svg",
          s(
            {
              width: "1em",
              height: "1em",
              viewBox: "0 0 38 26",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e,
          ),
          n ||
            (n = t.createElement("path", {
              d: "M38 13.219H1m0 0 12-12m-12 12 12 12",
              stroke: "currentColor",
            })),
        );
    },
    1997: function (e, a, r) {
      "use strict";
      r.d(a, {
        Z: function () {
          return c;
        },
      });
      var n = r(253),
        t = r(7294);
      function s(e, a) {
        e.addEventListener ? e.addEventListener("change", a) : e.addListener(a);
      }
      function i(e, a) {
        e.addEventListener
          ? e.removeEventListener("change", a)
          : e.removeListener(a);
      }
      var l = r(6777),
        o = r.n(l);
      function c(e, a) {
        var r = (function (e) {
          var a =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = (0, t.useState)(a),
            n = r[0],
            l = r[1];
          return (
            (0, t.useEffect)(
              function () {
                var r = matchMedia(e);
                r.matches !== a && l(r.matches);
                var n = function () {
                  l(r.matches);
                };
                return (
                  s(r, n),
                  function () {
                    i(r, n);
                  }
                );
              },
              [a, e],
            ),
            n
          );
        })(
          (0, t.useMemo)(
            function () {
              var a = (0, n.Z)(e.match(/^([<>])(=?)(.*)$/), 4),
                r = a[1],
                t = a[2],
                s = a[3],
                i = (0, n.Z)(o()[s].match(/^([0-9]*)(.*)$/), 3),
                l = i[1],
                c = i[2],
                u = "<" === r ? "max" : "min",
                p = Number(l);
              return (
                t || (p += "<" === r ? -1 : 1),
                "screen and (".concat(u, "-width: ").concat(p).concat(c, ")")
              );
            },
            [e],
          ),
          a,
        );
        return r;
      }
    },
    6735: function (e, a, r) {
      "use strict";
      r.r(a),
        r.d(a, {
          default: function () {
            return O;
          },
        });
      var n,
        t = r(4924),
        s = r(5893),
        i = r(5697),
        l = r.n(i),
        o = r(4184),
        c = r.n(o),
        u = r(7294),
        p = r(719),
        m = r(1911),
        d = (r(933), r(8770), r(92), r(8880)),
        f = r(7460),
        g = r(5354),
        h = r(1997),
        v = r(8877),
        x = r(1043),
        _ = r(5430),
        y = r(2836);
      function w() {
        return (
          (w = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var a = 1; a < arguments.length; a++) {
                  var r = arguments[a];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          w.apply(this, arguments)
        );
      }
      var b = (e) =>
          u.createElement(
            "svg",
            w(
              {
                width: "1em",
                height: "1em",
                viewBox: "0 0 21 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              e,
            ),
            n ||
              (n = u.createElement("path", {
                d: "M6.305 0A5.817 5.817 0 0 0 .5 5.805v8.39A5.817 5.817 0 0 0 6.305 20h8.39a5.817 5.817 0 0 0 5.805-5.805v-8.39A5.817 5.817 0 0 0 14.695 0h-8.39Zm0 1.538h8.39a4.254 4.254 0 0 1 4.267 4.267v8.39a4.254 4.254 0 0 1-4.267 4.267h-8.39a4.254 4.254 0 0 1-4.267-4.267v-8.39a4.254 4.254 0 0 1 4.267-4.267Zm9.964 1.539a1.154 1.154 0 1 0 0 2.308 1.154 1.154 0 0 0 0-2.308ZM10.5 4.615A5.395 5.395 0 0 0 5.115 10a5.395 5.395 0 0 0 5.385 5.385A5.395 5.395 0 0 0 15.885 10 5.395 5.395 0 0 0 10.5 4.615Zm0 1.539A3.834 3.834 0 0 1 14.346 10a3.834 3.834 0 0 1-3.846 3.846A3.834 3.834 0 0 1 6.654 10 3.834 3.834 0 0 1 10.5 6.154Z",
                fill: "#000",
              })),
          ),
        j = {
          fr: {
            hours: { singular: "heure", plural: "heures" },
            days: { singular: "jour", plural: "jours" },
            weeks: { singular: "semaine", plural: "semaines" },
            mounths: { singular: "mois", plural: "mois" },
          },
          en: {
            hours: { singular: "hour", plural: "hours" },
            days: { singular: "day", plural: "days" },
            weeks: { singular: "week", plural: "weeks" },
            mounths: { singular: "mounth", plural: "mounths" },
          },
        },
        k = 86400,
        I = r(1921),
        Z = r.n(I),
        F = new Date().getTime(),
        B = Math.floor(F / 1e3);
      function P(e) {
        var a = e.src,
          r = e.url,
          n = e.name,
          t = e.username,
          i = e.profile,
          l = e.timestamp,
          o = e.groupId,
          c = e.isVisible,
          u = e.a11y,
          p = (0, x.v9)(y.Aj),
          m = l > 0,
          d = (function (e) {
            var a = e / 3600,
              r = e / k,
              n = e / 604800,
              t = e / 2592e3,
              s = "mounths",
              i = Math.floor(t);
            return (
              n < 4 && ((s = "weeks"), (i = Math.floor(n))),
              r < 7 && ((s = "days"), (i = Math.floor(r))),
              a < 24 && ((s = "hours"), (i = Math.floor(a))),
              { type: s, value: i }
            );
          })(B - l),
          f = (function (e) {
            var a = e.type,
              r = e.value,
              n = e.language,
              t = r > 1 ? "plural" : "singular",
              s = j[n][a][t];
            return "fr" === n
              ? "il y a ".concat(r, " ").concat(s)
              : "".concat(r, " ").concat(s, " ago");
          })({ type: d.type, value: d.value, language: p });
        return (0, s.jsxs)("a", {
          className: Z().card,
          href: r,
          target: "_blank",
          rel: "noreferrer",
          children: [
            (0, s.jsxs)("div", {
              className: Z().cardInfo,
              children: [
                (0, s.jsx)("div", {
                  className: Z().profile,
                  children:
                    (null === i || void 0 === i ? void 0 : i.path) &&
                    (0, s.jsx)(_.Z, {
                      src: i.path,
                      alt: ""
                        .concat(n, " ")
                        .concat(null === u || void 0 === u ? void 0 : u.label),
                      layout: "fill",
                      objectFit: "cover",
                    }),
                }),
                (0, s.jsx)("p", { className: Z().username, children: t }),
                (0, s.jsx)(b, { className: Z().instagramLogo }),
              ],
            }),
            (c || 0 === o) &&
              (0, s.jsx)("div", {
                className: Z().cardImage,
                children: (0, s.jsx)(_.Z, {
                  src: a,
                  sizes:
                    "(min-width: 1260px) 380px, (min-width: 768px) calc((100vw - 120px) / 3), (min-width: 500px) calc((100vw - 70px) / 2), calc(100vw - 60px)",
                  className: Z().cardImage,
                  alt: ""
                    .concat(n, " ")
                    .concat(null === u || void 0 === u ? void 0 : u.label),
                  layout: "fill",
                  objectFit: "cover",
                }),
              }),
            (0, s.jsx)("div", {
              className: Z().cardDate,
              children: (0, s.jsx)("p", { children: m && f }),
            }),
          ],
        });
      }
      function O(e) {
        var a = e.text,
          r = e.groups;
        if (r && 0 !== r.length) {
          var n = (0, u.useState)("Mazarine"),
            i = n[0],
            l = n[1],
            o = (0, u.useRef)(null),
            x = (0, u.useRef)(null),
            _ = (0, u.useRef)(null),
            y = (0, u.useRef)(null),
            w = (0, h.Z)("<phablet", !1),
            b = (0, v.Z)(o),
            j = r.length > 1,
            k = function (e) {
              var a = e.target.value;
              l(a),
                Array.from(x.current.children).forEach(function (e) {
                  e.dataset.title === a
                    ? e.classList.contains(Z().groupPostsActiv) ||
                      e.classList.add(Z().groupPostsActiv)
                    : e.classList.contains(Z().groupPostsActiv) &&
                      e.classList.remove(Z().groupPostsActiv);
                });
            };
          return (0, s.jsxs)("div", {
            className: Z().main,
            ref: o,
            children: [
              (0, s.jsxs)("div", {
                className: Z().followGroups,
                children: [
                  (0, s.jsx)("p", { className: Z().followUs, children: a }),
                  j &&
                    (0, s.jsx)("ul", {
                      className: Z().groupsFilters,
                      children: r.map(function (e, a) {
                        var r = e.name;
                        return (0, s.jsx)(
                          "li",
                          {
                            className: c()(
                              (0, t.Z)({}, Z().activFilter, r === i),
                            ),
                            children: (0, s.jsx)("button", {
                              type: "button",
                              value: r,
                              onClick: k,
                              children: r,
                            }),
                          },
                          a,
                        );
                      }),
                    }),
                ],
              }),
              (0, s.jsx)("div", {
                ref: x,
                children: r.map(function (e, a) {
                  var r = e.id,
                    n = e.name,
                    i = e.posts,
                    l = 1 === i.length;
                  return (0, s.jsx)(
                    "div",
                    {
                      className: c()([
                        Z().groupPosts,
                        (0, t.Z)({}, Z().groupPostsActiv, 0 === a),
                        (0, t.Z)({}, Z().groupPostSolo, l),
                      ]),
                      "data-title": n,
                      children:
                        !w || l
                          ? i.map(function (e, r) {
                              var t = e.image,
                                i = e.link,
                                l = e.timestamp,
                                o = e.username,
                                c = e.profile,
                                u = e.a11y;
                              return (0, s.jsx)(
                                P,
                                {
                                  src: t.path,
                                  url: i.url,
                                  name: n,
                                  a11y: u,
                                  username: o,
                                  profile: c,
                                  timestamp: l,
                                  groupId: a,
                                  isVisible: b,
                                },
                                r,
                              );
                            })
                          : (0, s.jsxs)(p.tq, {
                              slidesPerView: 1.27,
                              breakpoints: { 500: { slidesPerView: 2.235 } },
                              spaceBetween: 10,
                              slidesOffsetAfter: 30,
                              slidesOffsetBefore: 30,
                              navigation: !0,
                              pagination: { type: "bullets" },
                              modules: [m.tl, m.W_],
                              onInit: function (e) {
                                (e.params.navigation.prevEl = _.current),
                                  (e.params.navigation.nextEl = y.current),
                                  e.navigation.init(),
                                  e.navigation.update();
                              },
                              children: [
                                i.map(function (e, r) {
                                  var t = e.image,
                                    i = e.link,
                                    l = e.timestamp,
                                    o = e.username,
                                    c = e.profile,
                                    u = e.a11y;
                                  return (0, s.jsx)(
                                    p.o5,
                                    {
                                      children: (0, s.jsx)(
                                        P,
                                        {
                                          src: t.path,
                                          url: i.url,
                                          name: n,
                                          a11y: u,
                                          username: o,
                                          profile: c,
                                          timestamp: l,
                                          groupId: a,
                                          isVisible: b,
                                        },
                                        r,
                                      ),
                                    },
                                    t.path,
                                  );
                                }),
                                (0, s.jsx)("button", {
                                  type: "button",
                                  ref: _,
                                  className: "swiper-button-prev",
                                  children: (0, s.jsx)(d.Z, {
                                    title: "slide pr\xe9c\xe9dente",
                                    isSrOnly: !0,
                                    children: (0, s.jsx)(f.Z, {}),
                                  }),
                                }),
                                (0, s.jsx)("button", {
                                  type: "button",
                                  ref: y,
                                  className: "swiper-button-next",
                                  children: (0, s.jsx)(d.Z, {
                                    title: "slide suivante",
                                    isSrOnly: !0,
                                    children: (0, s.jsx)(g.Z, {}),
                                  }),
                                }),
                              ],
                            }),
                    },
                    r,
                  );
                }),
              }),
            ],
          });
        }
      }
      (P.defaultProps = { a11y: { label: "on Instagram" } }),
        (P.propTypes = {
          src: l().string.isRequired,
          url: l().string.isRequired,
          name: l().string.isRequired,
          profile: l().shape({ path: l().string }).isRequired,
          a11y: l().shape({ label: l().string }),
          username: l().string.isRequired,
          timestamp: l().number.isRequired,
          groupId: l().number.isRequired,
          isVisible: l().bool.isRequired,
        }),
        (O.defaultProps = {}),
        (O.propTypes = {
          text: l().string.isRequired,
          groups: l().arrayOf(
            l().shape({
              id: l().number,
              name: l().string,
              posts: l().arrayOf(
                l().shape({
                  username: l().string,
                  timestamp: l().number,
                  profile: l().shape({ path: l().string }),
                  a11y: l().shape({ label: l().string }),
                  link: l().shape({ url: l().string }),
                  image: l().shape({ path: l().string }),
                }),
              ),
            }),
          ).isRequired,
        });
    },
    8880: function (e, a, r) {
      "use strict";
      r.d(a, {
        Z: function () {
          return p;
        },
      });
      var n = r(5893),
        t = r(5697),
        s = r.n(t),
        i = r(4184),
        l = r.n(i),
        o = r(4086),
        c = r(906),
        u = r.n(c);
      function p(e) {
        var a = e.children,
          r = e.title,
          t = e.isSrOnly,
          s = e.isEssential,
          i = (0, n.jsxs)(n.Fragment, {
            children: [
              a,
              r &&
                (0, n.jsx)("span", {
                  className: l()([{ "sr-only": t }]),
                  children: r,
                }),
            ],
          });
        return s ? i : (0, n.jsx)("span", { className: u().main, children: i });
      }
      (p.defaultProps = { isEssential: !1, isSrOnly: !0, title: "" }),
        (p.propTypes = {
          isEssential: s().bool,
          isSrOnly: s().bool,
          title: s().string,
          children: o.Z.isRequired,
        });
    },
    5430: function (e, a, r) {
      "use strict";
      r.d(a, {
        Z: function () {
          return u;
        },
      });
      var n = r(6042),
        t = r(9396),
        s = r(9534),
        i = r(9815),
        l = r(5893),
        o = r(5675),
        c = r.n(o);
      function u(e) {
        var a = e.src,
          r = e.cloudinaryParams,
          o = (0, s.Z)(e, ["src", "cloudinaryParams"]),
          u = a.split("upload")[1];
        return (0, l.jsx)(
          c(),
          (0, n.Z)(
            {
              loader: function (e) {
                return (function (e) {
                  var a = e.src,
                    r = e.width,
                    n = e.cloudinaryParams,
                    t = void 0 === n ? [] : n,
                    s = ["f_auto", "q_auto", "w_".concat(r)],
                    l = (
                      t.findIndex(function (e) {
                        return 0 === e.indexOf("c_");
                      }) > -1
                        ? (0, i.Z)(t).concat((0, i.Z)(s))
                        : (0, i.Z)(t).concat((0, i.Z)(s), ["c_limit"])
                    ).join(",");
                  return "https://res.cloudinary.com/mazarine-digital/image/upload/"
                    .concat(l)
                    .concat(a);
                })((0, t.Z)((0, n.Z)({}, e), { cloudinaryParams: r }));
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
    1921: function (e) {
      e.exports = {
        followGroups: "Flux_InstagramBlock_followGroups",
        followUs: "Flux_InstagramBlock_followUs",
        groupsFilters: "Flux_InstagramBlock_groupsFilters",
        activFilter: "Flux_InstagramBlock_activFilter",
        groupPosts: "Flux_InstagramBlock_groupPosts",
        groupPostsActiv: "Flux_InstagramBlock_groupPostsActiv",
        groupPostSolo: "Flux_InstagramBlock_groupPostSolo",
        card: "Flux_InstagramBlock_card",
        cardInfo: "Flux_InstagramBlock_cardInfo",
        cardDate: "Flux_InstagramBlock_cardDate",
        cardImage: "Flux_InstagramBlock_cardImage",
        profile: "Flux_InstagramBlock_profile",
        username: "Flux_InstagramBlock_username",
        instagramLogo: "Flux_InstagramBlock_instagramLogo",
        swiper: "Flux_InstagramBlock_swiper",
        "swiper-img": "Flux_InstagramBlock_swiper-img",
        main: "Flux_InstagramBlock",
        "no-filters": "Flux_InstagramBlock_no-filters",
        "fade-in": "Flux_InstagramBlock_fade-in",
        "fade-in-delay": "Flux_InstagramBlock_fade-in-delay",
      };
    },
    906: function (e) {
      e.exports = {
        main: "Icon",
        "fade-in": "Icon_fade-in",
        "fade-in-delay": "Icon_fade-in-delay",
      };
    },
    92: function () {},
    8770: function () {},
  },
]);
