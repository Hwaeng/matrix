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
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "9f39f7f5-5853-4b19-84b6-63f5fb2e595d"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-9f39f7f5-5853-4b19-84b6-63f5fb2e595d"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9746],
  {
    59467: function (e, t, r) {
      r.d(t, {
        r: function () {
          return l;
        },
      });
      var n = r(67294),
        o = r(37736),
        i = r(939),
        s = ["children"];
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var l = (0, n.forwardRef)(function (e, t) {
        var r = e.children,
          l = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, s);
        return n.createElement(
          i.xv,
          a(
            {
              ref: t,
              use: "a",
              color: o.W.color.accent,
              textDecoration: "none",
            },
            l
          ),
          r
        );
      });
    },
    92303: function (e, t, r) {
      r.d(t, {
        y: function () {
          return i;
        },
      });
      var n = r(67294),
        o = r(65142);
      function i(e, t) {
        void 0 === t && (t = !0);
        var r = (0, n.useState)({ width: 0, height: 0 }),
          i = r[0],
          s = r[1];
        return (
          (0, n.useEffect)(
            function () {
              var r = e.current;
              if (r && t) {
                var n = (0, o.Xe)(r);
                if (n.ResizeObserver) {
                  var i = new n.ResizeObserver(function (e) {
                    var t = e[0];
                    if (t.target instanceof n.HTMLElement) {
                      var r = t.target.getBoundingClientRect();
                      s(function (e) {
                        return r.width === e.width && r.height === e.height
                          ? e
                          : { width: r.width, height: r.height };
                      });
                    }
                  });
                  return (
                    i.observe(r),
                    function () {
                      return i.disconnect();
                    }
                  );
                }
              }
            },
            [e, t]
          ),
          i
        );
      }
    },
    61383: function (e, t, r) {
      r.d(t, {
        Y: function () {
          return v;
        },
      });
      var n = r(85893),
        o = r(56607),
        i = r(37903),
        s = r(45961),
        a = r(59467),
        l = r(27061),
        c = r(11163),
        u = r(47723),
        d = r(8134),
        h = r(8118),
        g = r(18647),
        p = r(42028),
        b = r(87479),
        f = r(45481),
        x = r(73187),
        j = r(37754),
        m = r(37319);
      let v = (e) => {
        var t;
        let { post: r } = e,
          v = (0, f.N)(),
          { locale: w } = (0, c.useRouter)(),
          y = (0, x.T)(),
          k = r.meta.categories.map(v).filter(Boolean);
        return (0, n.jsxs)(d.c, {
          children: [
            (0, n.jsxs)(h.j, {
              children: [
                (0, n.jsx)(h.j.Title, { children: r.title }),
                (0, n.jsx)(h.j.Subtitle, {
                  children: (0, n.jsxs)(o.g, {
                    space: "s-8",
                    children: [
                      (0, n.jsx)(i.U, {
                        children: (0, s.tS)(
                          !!k.length &&
                            (0, n.jsx)(p.x, { children: (0, s.tS)(...k) }),
                          (0, j.fQ)(r.meta.publicationDate) &&
                            (0, n.jsx)(p.x, {
                              color: "foreground",
                              children: (0, n.jsx)("span", {
                                suppressHydrationWarning: !0,
                                children: (0, m.J)(r.meta.publicationDate, w),
                              }),
                            })
                        ),
                      }),
                      (0, n.jsx)(i.U, {
                        children: (0, s.tS)(
                          ...r.authorDetails.map((e) =>
                            (0, n.jsx)(
                              a.r,
                              {
                                href: "/"
                                  .concat(b.Ai.BlogAuthor, "/")
                                  .concat(e.slug),
                                children: e.name,
                              },
                              e.slug
                            )
                          )
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            null === (t = r.blocks) || void 0 === t
              ? void 0
              : t.map((e) => (0, n.jsx)(u.l, { block: e }, e.id)),
            (0, n.jsx)(l.x, {
              px: { all: "s-20", lg: 0 },
              children: (0, n.jsxs)(g.R, {
                my: "80px",
                children: [
                  (0, n.jsx)(g.R.Title, { children: y("blog.shareArticle") }),
                  (0, n.jsxs)(g.R.Buttons, {
                    shareText: r.title,
                    children: [
                      (0, n.jsx)(g.R.Facebook, {}),
                      (0, n.jsx)(g.R.Twitter, {}),
                      (0, n.jsx)(g.R.LinkedIn, {}),
                      (0, n.jsx)(g.R.Clipboard, {}),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
    3147: function (e, t, r) {
      r.d(t, {
        o: function () {
          return y;
        },
      });
      var n = r(85893),
        o = r(64437),
        i = r(25194),
        s = r(13901),
        a = r(48821),
        l = r(72024),
        c = r(31573),
        u = r(61383),
        d = r(74253),
        h = r(90492),
        g = r(19579),
        p = r(75713),
        b = r(79365),
        f = r(2962),
        x = r(37319),
        j = r(16473),
        m = r(45481);
      let v = (e) => {
          var t, r;
          let { post: o } = e,
            i = (0, j.y)(),
            s = (0, m.N)(),
            a = (null !== (t = o.meta.categories) && void 0 !== t ? t : [])
              .map(s)
              .filter(Boolean),
            l =
              (o.meta.publicationDate &&
                new Date(o.meta.publicationDate).toISOString()) ||
              "",
            c = (0, x.dC)(o.meta.publicationDate);
          return (0, n.jsx)(f.PB, {
            title:
              null !== (r = o.meta.metaTitle) && void 0 !== r ? r : o.title,
            description: o.meta.metaDescription,
            openGraph: {
              type: "article",
              title: o.meta.metaTitle,
              description: o.meta.metaDescription,
              url: i,
              article: {
                publishedTime: l,
                section: "Fintech",
                authors: [],
                tags: [...a, c],
              },
              images: [
                o.coverImage && {
                  url: o.coverImage.large.value,
                  alt: o.meta.metaTitle,
                },
              ].filter(Boolean),
            },
          });
        },
        w = (e) => {
          var t;
          let { blogPostContent: r, footerBlocks: o, page: i, embedded: f } = e,
            {
              startBlocks: x,
              endBlocks: j,
              topBanners: m,
            } = (0, g.f)(
              null == i ? void 0 : i.blocks,
              p.l.BlogPostDetailsWidget
            ),
            w =
              null === (t = r.currentPost.meta.tags) || void 0 === t
                ? void 0
                : t.some((e) => b.Od.includes(e));
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(h.S, {
                isLegalTopBannerVisible: w,
                isEmbedded: f,
                topBanners: m,
              }),
              (0, n.jsx)(v, { post: r.currentPost }),
              (0, n.jsx)(s.B5, {}),
              (0, n.jsxs)(l.X, {
                children: [
                  (0, n.jsx)(c.Q, { blocks: x }),
                  r.currentPost.coverImage &&
                    (0, n.jsx)(a.L, {
                      image: r.currentPost.coverImage.large,
                      imageSmall: r.currentPost.coverImage.thumbnail,
                    }),
                  (0, n.jsx)(u.Y, { post: r.currentPost }),
                  (0, n.jsx)(c.Q, { blocks: j }),
                ],
              }),
              (0, n.jsx)(d.$, { blocks: o }),
            ],
          });
        },
        y = (e) => (0, n.jsx)(o.sL, { children: (0, n.jsx)(k, { ...e }) }),
        k = (e) =>
          e.currentPage === i.j5.PostContent ? (0, n.jsx)(w, { ...e }) : null;
    },
    18647: function (e, t, r) {
      r.d(t, {
        R: function () {
          return k;
        },
      });
      var n = r(85893),
        o = r(67294),
        i = r(939),
        s = r(27061),
        a = r(37736),
        l = r(1377),
        c = r(26370),
        u = r(10903),
        d = r(28193),
        h = r(65142),
        g = r(49363),
        p = r(11163),
        b = r(37319),
        f = r(73187),
        x = r(83732),
        j = r(69672);
      let m = (0, g.ZP)(i.xv).withConfig({ componentId: "sc-d647a241-0" })(
          j._F.subtitle1
        ),
        v = (0, g.ZP)(s.x).withConfig({ componentId: "sc-d647a241-1" })({
          marginTop: a.W.space.s16,
          display: "grid",
          gridAutoFlow: "column",
          gridAutoColumns: "max-content",
          gap: a.W.space.s16,
          alignItems: "center",
        }),
        w = (0, o.createContext)(void 0);
      function y() {
        let e = (0, o.useContext)(w);
        if (!e)
          throw Error(
            "`useLinkShareButtons` is accessible in `LinkShareButtons` only"
          );
        return e;
      }
      let k = Object.assign(s.x, {
        Title: m,
        Buttons: (e) => {
          let { shareText: t, children: r } = e,
            { asPath: i } = (0, p.useRouter)(),
            s = ["https://revolut.com", i.split("?")[0]].join(""),
            a = (0, o.useMemo)(() => ({ shareText: t, url: s }), [t, s]);
          return (0, n.jsx)(v, {
            children: (0, n.jsx)(w.Provider, { value: a, children: r }),
          });
        },
        Facebook: () => {
          let { url: e } = y(),
            t = (0, f.T)(),
            r = (0, l.l)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(c.h, {
                use: x.r,
                color: "foreground",
                useIcon: "LogoFacebook",
                "aria-label": t("shared.button.shareOnFacebook"),
                target: "_blank",
                rel: "noopener",
                href: (0, b.bA)("https://www.facebook.com/sharer/sharer.php", {
                  u: e,
                }),
                ...r.getAnchorProps(),
              }),
              (0, n.jsx)(u.u, {
                ...r.getTargetProps(),
                children: t("shared.button.shareOnFacebook"),
              }),
            ],
          });
        },
        Twitter: () => {
          let { url: e, shareText: t } = y(),
            r = (0, f.T)(),
            o = (0, l.l)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(c.h, {
                use: x.r,
                color: "foreground",
                useIcon: "LogoTwitter",
                "aria-label": r("shared.button.shareOnTwitter"),
                target: "_blank",
                rel: "noopener",
                href: (0, b.bA)("http://twitter.com/share", {
                  url: e,
                  text: t,
                }),
                ...o.getAnchorProps(),
              }),
              (0, n.jsx)(u.u, {
                ...o.getTargetProps(),
                children: r("shared.button.shareOnTwitter"),
              }),
            ],
          });
        },
        LinkedIn: () => {
          let { url: e, shareText: t } = y(),
            r = (0, f.T)(),
            o = (0, l.l)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(c.h, {
                use: x.r,
                color: "foreground",
                useIcon: "LogoLinkedIn",
                "aria-label": r("shared.button.shareOnLinkedIn"),
                target: "_blank",
                rel: "noopener",
                href: (0, b.bA)("https://www.linkedin.com/shareArticle", {
                  url: e,
                  title: t,
                  mini: !0,
                }),
                ...o.getAnchorProps(),
              }),
              (0, n.jsx)(u.u, {
                ...o.getTargetProps(),
                children: r("shared.button.shareOnLinkedIn"),
              }),
            ],
          });
        },
        Clipboard: () => {
          let { url: e } = y(),
            t = (0, f.T)(),
            [r, i] = (0, o.useState)(!1),
            a = (0, l.l)();
          return (0, n.jsxs)(s.x, {
            onMouseLeave: () => r && window.setTimeout(() => i(!1), 200),
            children: [
              (0, n.jsx)(d.Ig, {
                left: r ? 0 : 2,
                ...a.getAnchorProps(),
                children: r
                  ? (0, n.jsx)(c.h, {
                      size: 24,
                      color: "green",
                      useIcon: "CheckSuccess",
                      "aria-label": t("shared.button.copyToClipboard"),
                      onClick: async () => {
                        i(!0), await (0, h.vQ)(e);
                      },
                    })
                  : (0, n.jsx)(c.h, {
                      size: 20,
                      color: "foreground",
                      useIcon: "40/SubtractLink",
                      "aria-label": t("shared.button.copyToClipboard"),
                      onClick: async () => {
                        i(!0), await (0, h.vQ)(e);
                      },
                    }),
              }),
              (0, n.jsx)(
                u.u,
                {
                  ...a.getTargetProps(),
                  children: t(
                    r
                      ? "shared.button.copySuccess"
                      : "shared.button.copyToClipboard"
                  ),
                },
                "tooltip-copy-".concat(r)
              ),
            ],
          });
        },
      });
    },
    79365: function (e, t, r) {
      var n, o, i, s, a, l, c, u;
      r.d(t, {
        Od: function () {
          return d;
        },
        qJ: function () {
          return i;
        },
      }),
        ((a = n || (n = {})).News = "news"),
        (a.Blog = "blog"),
        ((l = o || (o = {})).Crypto = "crypto"),
        (l.CryptoDisclaimer = "crypto_disclaimer");
      let d = ["crypto", "crypto_disclaimer"];
      ((c = i || (i = {})).Corporate = "corporate"),
        (c.Products = "products"),
        ((u = s || (s = {})).Global = "global"),
        (u.CountryFilter = "countryFilter");
    },
  },
]);
//# sourceMappingURL=9746-8aea93ac66ba2787.js.map
