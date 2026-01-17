!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "0dd79b7b-5e36-409f-aad9-dfdc2d6f1c94"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-0dd79b7b-5e36-409f-aad9-dfdc2d6f1c94"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9026],
  {
    45481: function (e, n, t) {
      t.d(n, {
        N: function () {
          return c;
        },
      });
      var r = t(67294),
        o = t(25194),
        i = t(73187);
      function c() {
        let e = (0, i.T)();
        return (0, r.useCallback)(
          (n) => {
            switch (n) {
              case o.g7.Academy:
                return e("blog.category.academy");
              case o.g7.Business:
                return e("blog.category.business");
              case o.g7.Revolut:
                return e("blog.category.revolut");
              case o.g7.HowTo:
                return e("blog.category.howTo");
              case o.g7.People:
                return e("blog.category.people");
              case o.g7.News:
                return e("blog.category.news");
              case o.g7.Crypto:
                return e("blog.category.crypto");
              case o.g7.Security:
                return e("blog.category.security");
              case o.g7.BankingBasics:
                return e("blog.category.bankingBasics");
              case o.g7.Product:
                return e("blog.category.product");
              case o.g7.Investing:
                return e("blog.category.investing");
              default:
                return "";
            }
          },
          [e]
        );
      }
    },
    83077: function (e, n, t) {
      var r, o, i, c, a, l;
      t.d(n, {
        Vp: function () {
          return o;
        },
        ZO: function () {
          return r;
        },
        y_: function () {
          return i;
        },
      }),
        ((c = r || (r = {})).Initial = "initial"),
        (c.Otp = "otp"),
        (c.Done = "done"),
        (c.Already = "already"),
        ((a = o || (o = {})).Created = "CREATED"),
        (a.Confirmed = "CONFIRMED"),
        (a.Waiting = "WAITING"),
        ((l = i || (i = {})).Active = "ACTIVE"),
        (l.Pending = "PENDING"),
        (l.NotFound = "NOT_FOUND"),
        (l.Error = "ERROR");
    },
    38017: function (e, n, t) {
      t.d(n, {
        A4: function () {
          return h;
        },
        tk: function () {
          return g;
        },
        x0: function () {
          return p;
        },
      });
      var r = t(85893),
        o = t(67294),
        i = t(43627),
        c = t(91834),
        a = t(81677),
        l = t(83077);
      let u = ["MX"],
        s = {
          step: l.ZO.Initial,
          email: "",
          captchaToken: "",
          isPrivacyPolicyAccepted: !1,
          isMarketingCommsAccepted: !1,
          referralCodeSupport: !1,
        },
        d = o.createContext(void 0),
        f = o.createContext(() => {}),
        p = (e) => {
          let { children: n } = e,
            t = (0, i._)(),
            l = (0, c.E)(),
            { phone: p, phoneCode: g } = (0, a.z)(),
            [h, v] = (0, o.useReducer)((e, n) => ({ ...e, ...(n || {}) }), {
              ...s,
              deviceId: t,
              countryCode: l,
              phoneNumber: p,
              phoneCountryCode: g,
              referralCodeSupport: u.includes(l),
            });
          return (
            (0, o.useEffect)(() => {
              v({ phoneNumber: p, phoneCountryCode: g });
            }, [p, g]),
            (0, r.jsx)(f.Provider, {
              value: v,
              children: (0, r.jsx)(d.Provider, { value: h, children: n }),
            })
          );
        };
      function g() {
        let e = (0, o.useContext)(d);
        if (void 0 === e)
          throw Error(
            "`useExpansionWaitlistState` is accessible in `ExpansionWaitlistContext` component only"
          );
        return e;
      }
      function h() {
        let e = (0, o.useContext)(f);
        if (void 0 === e)
          throw Error(
            "`useExpansionWaitlistUpdateState` is accessible in `ExpansionWaitlistAction` component only"
          );
        return e;
      }
    },
    92764: function (e, n, t) {
      t.d(n, {
        K: function () {
          return u;
        },
      });
      var r = t(81758),
        o = t(45257),
        i = t(86441),
        c = t(79173),
        a = t(42750);
      async function l() {
        return (await fetch("/api/user-country/")).text();
      }
      function u() {
        let [e, n] = (0, o.B)(c.cn.GeoCountryCode),
          t = (0, i.U)();
        return (
          (0, r.ZP)(e || t ? null : "userGeoCode", l, {
            revalidateOnMount: !0,
            revalidateOnFocus: !1,
            shouldRetryOnError: !0,
            keepPreviousData: !0,
            onSuccess: (e) => {
              e && n(e, { expires: void 0 });
            },
            onErrorRetry: (e, n, t, r, o) => {
              let { retryCount: i } = o;
              if (i > 3) {
                (0, a.D)("GeoCountryBanner", e);
                return;
              }
              setTimeout(() => r({ retryCount: i }), 40 * Math.pow(5, i));
            },
          }),
          e
        );
      }
    },
    31347: function (e, n, t) {
      t.d(n, {
        M: function () {
          return s;
        },
      });
      var r = t(11163),
        o = t(65778),
        i = t(79173),
        c = t(45257),
        a = t(45936),
        l = t(37319),
        u = t(92764);
      function s() {
        let e = (0, r.useRouter)(),
          { region: n } = (0, a.i4)(e.locale),
          t = (0, u.K)(),
          [s] = (0, c.B)(i.cn.GeoCountryBanner),
          d = null == t ? void 0 : t.toUpperCase();
        return s !== l.uZ.FALSE && d !== n && o.J$.has(d);
      }
    },
    64437: function (e, n, t) {
      t.d(n, {
        sL: function () {
          return p;
        },
      });
      var r = t(85893),
        o = t(5152),
        i = t.n(o),
        c = t(17742);
      let a = i()(
          () =>
            Promise.all([
              t.e(6810),
              t.e(2032),
              t.e(5711),
              t.e(5236),
              t.e(7688),
              t.e(3994),
              t.e(6786),
              t.e(173),
            ])
              .then(t.bind(t, 20173))
              .then((e) => e.ExpansionWaitlistPopup),
          { loadableGenerated: { webpack: () => [20173] }, ssr: !1 }
        ),
        l = (e) => {
          let { children: n } = e;
          return (0, r.jsx)(c.kH, {
            children: (0, r.jsxs)(c.Uc, { children: [(0, r.jsx)(a, {}), n] }),
          });
        };
      var u = t(38017),
        s = t(81677),
        d = t(47612);
      let f = Object.assign(
          i()(
            () =>
              Promise.all([t.e(6876), t.e(4313)])
                .then(t.bind(t, 24313))
                .then((e) => e.GetTheAppPopup),
            { loadableGenerated: { webpack: () => [24313] }, ssr: !1 }
          )
        ),
        p = (e) => {
          let { children: n } = e;
          return (0, r.jsx)(s.Z, {
            children: (0, r.jsx)(u.x0, {
              children: (0, r.jsx)(d.PB, {
                children: (0, r.jsx)(d.De, {
                  children: (0, r.jsxs)(l, {
                    children: [(0, r.jsx)(f, {}), n],
                  }),
                }),
              }),
            }),
          });
        };
    },
    90492: function (e, n, t) {
      t.d(n, {
        S: function () {
          return C;
        },
      });
      var r = t(85893),
        o = t(5152),
        i = t.n(o),
        c = t(86441),
        a = t(31347),
        l = t(67294),
        u = t(92303);
      let s = () => {
        let e = (0, l.useRef)(null),
          n = (0, u.y)(e, !!e.current),
          [t, r] = (0, l.useState)({ width: 0, height: 0 });
        return (
          (0, l.useEffect)(() => {
            r(n);
          }, [n]),
          {
            ref: (0, l.useCallback)((n) => {
              var t, o, i, c;
              (e.current = n),
                r({
                  width:
                    null !==
                      (i =
                        null === (t = e.current) || void 0 === t
                          ? void 0
                          : t.clientWidth) && void 0 !== i
                      ? i
                      : 0,
                  height:
                    null !==
                      (c =
                        null === (o = e.current) || void 0 === o
                          ? void 0
                          : o.clientHeight) && void 0 !== c
                      ? c
                      : 0,
                });
            }, []),
            ...t,
          }
        );
      };
      var d = t(89178),
        f = t(65260),
        p = t(84636);
      let g = (e) => {
        let { topBanners: n, isLegalTopBannerVisible: t } = e,
          o = t
            ? null == n
              ? void 0
              : n.find((e) => e.content.style.position === d.d.Sticky)
            : void 0,
          i =
            null != o
              ? o
              : null == n
              ? void 0
              : n.find((e) => e.content.style.position === d.d.Fixed),
          { isStickyHidden: c, setBannersOffset: a } = (0, p.s)(),
          { ref: u, ...g } = s(),
          h = (null == i ? void 0 : i.content.style.position) === d.d.Sticky;
        return (
          (0, l.useEffect)(() => {
            a(h ? g.height : 0);
          }, [h, a, g]),
          (!c || !h) && i && (0, r.jsx)(f.d, { ...i, ref: u })
        );
      };
      var h = t(27061);
      let v = { [d.d.Sticky]: 0, [d.d.Fixed]: 1 },
        y = (e) => {
          let { topBanners: n } = e,
            t = (0, l.useMemo)(
              () =>
                null == n
                  ? void 0
                  : n
                      .concat()
                      .sort(
                        (e, n) =>
                          v[e.content.style.position] -
                          v[n.content.style.position]
                      ),
              [n]
            );
          return (0, r.jsx)(h.x, {
            children:
              null == t
                ? void 0
                : t.map((e) => (0, r.jsx)(f.d, { ...e }, e.id)),
          });
        },
        x = i()(
          () =>
            Promise.all([t.e(6810), t.e(5149)])
              .then(t.bind(t, 85149))
              .then((e) => e.GeoCountryBanner),
          { loadableGenerated: { webpack: () => [85149] }, ssr: !1 }
        ),
        b = i()(
          () =>
            t
              .e(4721)
              .then(t.bind(t, 44721))
              .then((e) => e.MobileAppBanner),
          { loadableGenerated: { webpack: () => [44721] }, ssr: !1 }
        ),
        C = (e) => {
          let {
              isLegalTopBannerVisible: n = !0,
              isEmbedded: t = !1,
              topBanners: o,
            } = e,
            i = (0, c.U)(),
            l = (0, a.M)();
          return i
            ? (0, r.jsx)(y, { topBanners: o })
            : (0, r.jsxs)(r.Fragment, {
                children: [
                  l && (0, r.jsx)(x, {}),
                  !t && (0, r.jsx)(b, {}),
                  (0, r.jsx)(g, { topBanners: o, isLegalTopBannerVisible: n }),
                ],
              });
        };
    },
    65260: function (e, n, t) {
      t.d(n, {
        d: function () {
          return E;
        },
      });
      var r = t(85893),
        o = t(27061),
        i = t(37736),
        c = t(37903),
        a = t(42378),
        l = t(67294),
        u = t(49363),
        s = t(5152),
        d = t.n(s),
        f = t(71180),
        p = t(69672),
        g = t(32296),
        h = t(89178),
        v = t(31346),
        y = t(51482),
        x = t(42028),
        b = t(83732);
      let C = (0, u.ZP)(b.r).withConfig({ componentId: "sc-dc9c2a6c-0" })({
          fontWeight: 600,
          ":hover": { color: i.W.color.accent },
        }),
        k = (e) => {
          let { title: n, button: t } = e;
          return (0, r.jsx)(v.k, {
            alignItems: "center",
            height: "100%",
            children: (0, r.jsxs)(x.x, {
              use: "p",
              color: "foreground",
              variant: "subtitle2",
              children: [
                n,
                " ",
                t && (0, r.jsx)(C, { value: t.link, children: t.label }),
              ],
            }),
          });
        },
        w = (0, u.ZP)(b.r).withConfig({ componentId: "sc-dc9c2a6c-1" })({
          textDecoration: "underline",
          "&:after": { content: '" →"' },
        }),
        m = (e) => {
          let { title: n, button: t } = e;
          return (0, r.jsx)(v.k, {
            alignItems: "center",
            height: "100%",
            children: (0, r.jsx)(x.x, {
              use: "p",
              variant: "caption",
              color: p.W9.salesBannerForeground,
              children: (0, r.jsxs)(y.x, {
                max: 2,
                tooltip: "auto",
                children: [
                  n,
                  " ",
                  t && (0, r.jsx)(w, { value: t.link, children: t.label }),
                ],
              }),
            }),
          });
        },
        j = d()(
          () =>
            Promise.all([t.e(1630), t.e(3946)])
              .then(t.bind(t, 3946))
              .then((e) => e.TopBannerCarousel),
          { loadableGenerated: { webpack: () => [3946] } }
        ),
        B = (0, u.ZP)(o.x).withConfig({ componentId: "sc-20bd9cf8-0" })((e) => {
          let { position: n, isSalesBanner: t } = e;
          return {
            position: n === h.d.Fixed ? "relative" : "sticky",
            top: 0,
            width: "100%",
            zIndex: g.E,
            background: t ? p.W9.salesBannerBackground : i.W.color.greyTone10,
          };
        }),
        P = (0, u.ZP)(c.U).withConfig({ componentId: "sc-20bd9cf8-1" })({
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: i.W.space.s20,
          paddingRight: i.W.space.s20,
          maxWidth: p.W9.layoutMaxWidth,
          ["@media ".concat(i.W.media.lg)]: { paddingLeft: 0, paddingRight: 0 },
        }),
        E = (0, l.forwardRef)((e, n) => {
          let {
              id: t,
              anchor: o,
              content: {
                style: { position: i, theme: c },
                items: l,
              },
            } = e,
            u = (0, a.F)(),
            s = i === h.d.Fixed,
            d = l.filter((e) => !!e.title);
          if (0 === d.length) return null;
          let g = c === h.c.Default ? u.mode : c,
            v = s ? m : k,
            y = s ? p.W9.salesBannerForeground : "grey-50",
            x = d.map((e, n) =>
              (0, r.jsx)(v, { ...e }, "".concat(e.title, "-").concat(n))
            );
          return (0, r.jsx)(f.O, {
            mode: g,
            children: (0, r.jsx)(B, {
              id: null != o ? o : t,
              "data-blockid": t,
              position: i,
              isSalesBanner: s,
              role: "region",
              ref: n,
              py: "s-16",
              children: (0, r.jsx)(P, {
                space: "s-16",
                align: "center",
                children:
                  d.length > 1
                    ? (0, r.jsx)(j, { arrowColor: y, children: x })
                    : x[0],
              }),
            }),
          });
        });
      E.displayName = "TopBannerBlock";
    },
    32296: function (e, n, t) {
      t.d(n, {
        E: function () {
          return r;
        },
      });
      let r = t(9496).B + 1;
    },
    89178: function (e, n, t) {
      var r, o, i, c;
      t.d(n, {
        c: function () {
          return o;
        },
        d: function () {
          return r;
        },
      }),
        ((i = r || (r = {})).Fixed = "fixed"),
        (i.Sticky = "sticky"),
        ((c = o || (o = {})).Dark = "dark"),
        (c.Default = "default"),
        (c.Light = "light");
    },
    59168: function (e, n, t) {
      t.d(n, {
        r: function () {
          return i;
        },
      });
      var r = t(67294),
        o = t(27980);
      function i(e) {
        return (0, r.useMemo)(() => {
          var n;
          let t =
            null == e ? void 0 : e.filter((e) => e.type === o._C.TopBanner);
          return {
            blocks:
              null !==
                (n =
                  null == e
                    ? void 0
                    : e.filter((e) => e.type !== o._C.TopBanner)) &&
              void 0 !== n
                ? n
                : [],
            topBanners: t,
          };
        }, [e]);
      }
    },
    19579: function (e, n, t) {
      t.d(n, {
        f: function () {
          return c;
        },
      });
      var r = t(67294),
        o = t(27980),
        i = t(59168);
      function c(e, n) {
        let { blocks: t, topBanners: c } = (0, i.r)(e),
          [a, l] = (0, r.useMemo)(
            () =>
              (function (e, n) {
                let t = !1,
                  r = [[], []];
                return (
                  null == e ||
                    e.forEach((e) => {
                      var i;
                      if (
                        e.type === o._C.Widget &&
                        (null === (i = e.content) || void 0 === i
                          ? void 0
                          : i.widget) === n
                      ) {
                        t = !0;
                        return;
                      }
                      t ? r[1].push(e) : r[0].push(e);
                    }),
                  r
                );
              })(t, n),
            [t, n]
          );
        return { startBlocks: a, endBlocks: l, topBanners: c };
      }
    },
    81677: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
        z: function () {
          return u;
        },
      });
      var r = t(85893),
        o = t(67294),
        i = t(65778),
        c = t(91834);
      let a = (0, o.createContext)({ phone: "", phoneCode: i.UF }),
        l = (0, o.createContext)({
          setPhone: () => {},
          setPhoneCode: () => {},
        }),
        u = () => {
          let { phone: e, phoneCode: n } = (0, o.useContext)(a),
            { setPhone: t, setPhoneCode: r } = (0, o.useContext)(l);
          return { phone: e, phoneCode: n, setPhone: t, setPhoneCode: r };
        },
        s = (e) => {
          let { children: n } = e,
            t = (0, c.E)(),
            [i, u] = (0, o.useState)(""),
            [s, d] = (0, o.useState)(t);
          return (0, r.jsx)(a.Provider, {
            value: { phone: i, phoneCode: s },
            children: (0, r.jsx)(l.Provider, {
              value: { setPhone: u, setPhoneCode: d },
              children: n,
            }),
          });
        };
    },
    25194: function (e, n, t) {
      var r, o, i, c, a, l;
      t.d(n, {
        g7: function () {
          return r;
        },
        j5: function () {
          return o;
        },
        oG: function () {
          return i;
        },
      }),
        ((c = r || (r = {})).Academy = "academy"),
        (c.Business = "business"),
        (c.Crypto = "crypto"),
        (c.HowTo = "howTo"),
        (c.News = "news"),
        (c.People = "people"),
        (c.Revolut = "revolut"),
        (c.Security = "security"),
        (c.BankingBasics = "bankingBasics"),
        (c.Product = "product"),
        (c.Investing = "investing"),
        ((a = o || (o = {})).PostList = "post-list"),
        (a.PostContent = "post-content"),
        (a.Unknown = "unknown"),
        ((l = i || (i = {})).AuthorInfo = "author-info"),
        (l.Unknown = "unknown");
    },
  },
]);
//# sourceMappingURL=9026-e4c2f3a8b1a43119.js.map
