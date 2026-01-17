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
      (e._sentryDebugIds[t] = "e67fc3fc-dbc6-482e-8852-718995e3d2d8"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-e67fc3fc-dbc6-482e-8852-718995e3d2d8"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2641],
  {
    45961: function (e, t, n) {
      n.d(t, {
        O3: function () {
          return a;
        },
        aP: function () {
          return i;
        },
        tS: function () {
          return o;
        },
      });
      var r = n(67294),
        i = function (e) {
          return function () {
            for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
              n[i] = arguments[i];
            return r.Children.toArray(
              r.Children.toArray(n).reduce(function (t, n, r) {
                return "" === n || (0 === r ? t.push(n) : t.push(e, n)), t;
              }, [])
            );
          };
        },
        o = i("\xa0\xb7\xa0"),
        a = function () {
          return i("\xa0\xb7 ")
            .apply(void 0, arguments)
            .join("");
        };
    },
    34668: function (e, t, n) {
      n.d(t, {
        w: function () {
          return o;
        },
      });
      var r = n(67294);
      function i(e, t, n) {
        let r =
            !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
          [i = 0, o = 0] = t,
          [a = 0, c = 0] = n,
          s = a + ((e - i) / (o - i)) * (c - a);
        if (r) {
          let e = Math.min(a, c);
          if (s < e) return e;
          let t = Math.max(a, c);
          if (s > t) return t;
        }
        return s;
      }
      function o(e) {
        let { transform: t, opacity: n, scrollAnimation: o } = e,
          a = (0, r.useRef)();
        return (
          (0, r.useEffect)(() => {
            if ("parallax" === o) {
              let e = () => {
                let e = a.current,
                  r = null == e ? void 0 : e.clientHeight,
                  { scrollY: o } = window;
                if (e && void 0 !== r && o < 2 * r) {
                  let a = i(o, [0, r + 64], [1, 1.15]),
                    c = i(o, [r / 2, r + 64], [1, 0]);
                  t && (e.style.transform = "scale(".concat(a, ")")),
                    n && (e.style.opacity = String(c));
                }
              };
              a.current &&
                ((a.current.style.willChange = [
                  t && "transform",
                  n && "opacity",
                ]
                  .filter(Boolean)
                  .join(", ")),
                t && (a.current.style.transform = "scale(1)"),
                n && (a.current.style.opacity = "1"),
                e());
              let r = window;
              return (
                r.addEventListener("scroll", e, { passive: !0 }),
                () => r.removeEventListener("scroll", e)
              );
            }
          }, [o, t, n]),
          a
        );
      }
    },
    88359: function (e, t, n) {
      n.d(t, {
        E: function () {
          return h;
        },
      });
      var r = n(85893),
        i = n(67294),
        o = n(25675),
        a = n.n(o),
        c = n(9008),
        s = n.n(c),
        l = n(99674),
        u = n(37319),
        d = n(86441),
        f = n(68016);
      let g = function (e, t, n) {
          let r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 75,
            o = (0, d.U)();
          return (0, i.useMemo)(
            () => ({
              defaultSrcSet: (0, f.gA)(e, t, r, n, o),
              sources: (0, f.f$)(t).map((t) => ({
                srcSet: (0, f.gA)(e, t, r, n, o),
                mimeType: (0, f.bh)(t),
              })),
            }),
            [o, n, t, e, r]
          );
        },
        p = (0, i.forwardRef)((e, t) => {
          var n, i;
          let {
              image: a,
              originalCodecName: c,
              quality: l,
              optimisedResources: u,
              priority: d,
              sizes: f,
              ...p
            } = e,
            { value: m, alt: h } = a,
            { defaultSrcSet: v, sources: w } = g(m, c, u, l),
            {
              props: { srcSet: x, src: b, fetchPriority: y, ...j },
            } = (0, o.getImageProps)({
              alt: null != h ? h : "",
              src: m,
              priority: d,
              sizes: f,
              unoptimized: !0,
              ...p,
            });
          return (0, r.jsxs)(r.Fragment, {
            children: [
              d &&
                (0, r.jsx)(s(), {
                  children: (0, r.jsx)("link", {
                    rel: "preload",
                    as: "image",
                    imageSrcSet:
                      null !==
                        (i =
                          null === (n = w[0]) || void 0 === n
                            ? void 0
                            : n.srcSet) && void 0 !== i
                        ? i
                        : v,
                    imageSizes: f,
                    fetchpriority: "high",
                  }),
                }),
              (0, r.jsxs)("picture", {
                children: [
                  w.map((e) => {
                    let { srcSet: t, mimeType: n } = e;
                    return (0, r.jsx)("source", { srcSet: t, type: n }, n);
                  }),
                  (0, r.jsx)("img", {
                    ref: t,
                    src: m,
                    srcSet: v,
                    fetchpriority: y,
                    ...j,
                  }),
                ],
              }),
            ],
          });
        });
      p.displayName = "OptimisedImage";
      let m = (0, i.forwardRef)((e, t) => {
        var n;
        let { image: i, ...o } = e,
          c = (0, l.e)();
        return (0, r.jsx)(a(), {
          ref: t,
          alt: null !== (n = i.alt) && void 0 !== n ? n : "",
          loader: c,
          src: i.value,
          ...o,
        });
      });
      m.displayName = "ImgProxyImage";
      let h = (0, i.forwardRef)((e, t) => {
        var n;
        let { image: i, ...o } = e,
          a =
            null !== (n = i.codecName) && void 0 !== n ? n : (0, u.Nb)(i.value);
        return a && i.optimisedResources
          ? (0, r.jsx)(p, {
              ref: t,
              originalCodecName: a,
              optimisedResources: i.optimisedResources,
              image: i,
              ...o,
            })
          : (0, r.jsx)(m, { ref: t, image: i, ...o });
      });
      h.displayName = "Image";
    },
    68016: function (e, t, n) {
      n.d(t, {
        Q4: function () {
          return s;
        },
        bh: function () {
          return g;
        },
        f$: function () {
          return f;
        },
        gA: function () {
          return d;
        },
      });
      var r = n(23696),
        i = n(40176);
      let o = [1080, 2048, 3840],
        { publicRuntimeConfig: a } = (0, i.i)(),
        c = (e, t, n) =>
          "https://"
            .concat(a.websiteDomain, "/_next/image?url=")
            .concat(encodeURIComponent(e), "&w=")
            .concat(n, "&q=")
            .concat(t),
        s = (e, t, n, r) =>
          "/_next/image-asset/w:"
            .concat(n, "/q:")
            .concat(t > 80 ? 90 : 75, "/")
            .concat(encodeURIComponent(e))
            .concat(r ? "@".concat(r) : ""),
        l = (e, t, n, r) => {
          var i;
          return null ===
            (i = e.find((e) => {
              let { optimisationParams: i } = e;
              return i.width === r && i.codecName === t && i.quality === n;
            })) || void 0 === i
            ? void 0
            : i.value;
        },
        u = (e, t, n, r, i, o) =>
          l(i, t, n, r) || (o ? c(e, n, r) : s(e, n, r, t)),
        d = (e, t, n, r, i) => {
          if (!o) throw Error("Device sizes is not defined in image config");
          return o
            .map((o) => {
              let a = u(e, t, n, o, r, i);
              return "".concat(a, " ").concat(o, "w");
            })
            .join(", ");
        },
        f = (e) => {
          switch (e) {
            case r.OC.Png:
            case r.OC.Jpeg:
            case r.OC.Jpg:
              return [r.OC.Webp];
            default:
              return [];
          }
        },
        g = (e) => {
          switch (e) {
            case r.OC.Png:
              return "image/png";
            case r.OC.Jpeg:
            case r.OC.Jpg:
              return "image/jpeg";
            case r.OC.Webp:
              return "image/webp";
            default:
              return "image/".concat(e);
          }
        };
    },
    47723: function (e, t, n) {
      n.d(t, {
        l: function () {
          return d;
        },
      });
      var r = n(85893),
        i = n(27061),
        o = n(37736),
        a = n(49363),
        c = n(27980),
        s = n(64119),
        l = n(69672);
      let u = (0, a.ZP)(i.x).withConfig({ componentId: "sc-585e8bb3-0" })({
          whiteSpace: "pre-wrap",
          width: "100%",
          wordBreak: "break-word",
          "&&": {
            h2: { ...l._F.h5, margin: 0, marginBottom: o.W.space.s32 },
            h3: { ...l._F.h6, margin: 0, marginBottom: o.W.space.s32 },
            blockquote: {
              margin: "".concat(o.W.space.s24, " 0"),
              padding: "".concat(o.W.space.s12, " ").concat(o.W.space.s24),
              borderRadius: o.W.radius.r12,
              backgroundColor: o.W.color.grey5_50,
            },
          },
        }),
        d = (e) => {
          let { block: t } = e;
          switch (t.type) {
            case c._C.Text:
              return (0, r.jsx)(u, { children: (0, r.jsx)(s.b, { ...t }) });
            case c._C.Image:
            case c._C.Cta:
            case c._C.Video:
              return (0, r.jsx)(i.x, {
                py: "s-24",
                children: (0, r.jsx)(s.b, { ...t }),
              });
            default:
              return (0, r.jsx)(s.b, { ...t });
          }
        };
    },
    8134: function (e, t, n) {
      n.d(t, {
        c: function () {
          return o;
        },
      });
      var r = n(49363),
        i = n(27061);
      let o = (0, r.ZP)(i.x).withConfig({ componentId: "sc-2e8e4bba-0" })({
        width: "100%",
        maxWidth: "48rem",
        marginLeft: "auto",
        marginRight: "auto",
        position: "relative",
        "&::before": {
          content: '""',
          display: "block",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100vw",
          maxWidth: "100%",
          zIndex: -1,
        },
        "& *[data-blockid]": { marginTop: 0, marginBottom: 0 },
      });
    },
    48821: function (e, t, n) {
      n.d(t, {
        L: function () {
          return l;
        },
      });
      var r = n(85893),
        i = n(27061),
        o = n(28193),
        a = n(88359),
        c = n(95384),
        s = n(34668);
      let l = (e) => {
        let { image: t, imageSmall: n, scrollAnimation: l = "parallax" } = e,
          u = (0, s.w)({ scrollAnimation: l, transform: !0 }),
          d = (0, c.b)("lg");
        return (0, r.jsxs)(i.x, {
          overflow: "hidden",
          maxWidth: 1250,
          mx: "auto",
          children: [
            (0, r.jsx)(o.Ig, {
              hide: "*-lg",
              overflow: "hidden",
              width: "100%",
              height: 560,
              ref: u,
              children:
                d &&
                (0, r.jsx)(a.E, {
                  image: t,
                  priority: !0,
                  quality: 90,
                  fill: !0,
                  sizes: "100vw",
                  style: { objectFit: "cover" },
                }),
            }),
            (0, r.jsx)(o.Ig, {
              hide: "lg-*",
              overflow: "hidden",
              width: "100%",
              height: 316,
              right: 0,
              children:
                !d &&
                (0, r.jsx)(a.E, {
                  image: n || t,
                  priority: !0,
                  quality: 90,
                  fill: !0,
                  sizes: "100vw",
                  style: { objectFit: "cover" },
                }),
            }),
          ],
        });
      };
    },
    8118: function (e, t, n) {
      n.d(t, {
        j: function () {
          return s;
        },
      });
      var r = n(85893),
        i = n(27061),
        o = n(37736),
        a = n(49363),
        c = n(42028);
      let s = Object.assign(
        (0, a.ZP)(i.x).withConfig({ componentId: "sc-3d00f8bd-0" })({
          padding: "".concat(o.W.space.s40, " ").concat(o.W.space.s20),
          whiteSpace: "pre-wrap",
          width: "100%",
          wordBreak: "break-word",
          ["@media ".concat(o.W.media.lg)]: {
            paddingTop: o.W.space.s72,
            paddingLeft: 0,
            paddingRight: 0,
          },
        }),
        {
          Title: (e) => {
            let { children: t } = e;
            return (0, r.jsx)(c.x, {
              fontWeight: 600,
              use: "h1",
              variant: "h5",
              children: t,
            });
          },
          Subtitle: (e) => {
            let { children: t } = e;
            return (0, r.jsx)(c.x, {
              mt: "s-16",
              use: "p",
              variant: "subtitle2",
              color: "grey-50",
              suppressHydrationWarning: !0,
              children: t,
            });
          },
        }
      );
    },
    72024: function (e, t, n) {
      n.d(t, {
        X: function () {
          return u;
        },
      });
      var r = n(85893),
        i = n(67294),
        o = n(28193),
        a = n(37736),
        c = n(49363),
        s = n(66137);
      let l = (0, c.ZP)(o.Ig).withConfig({ componentId: "sc-28400805-0" })(
          (e) => {
            let { lastBlockId: t } = e;
            return {
              ...(t
                ? {
                    ['section[data-blockid="'.concat(t, '"]')]: {
                      paddingBottom: "60px",
                      ["@media ".concat(a.W.media.xl)]: {
                        paddingBottom: "120px",
                      },
                    },
                  }
                : void 0),
            };
          }
        ),
        u = (e) => {
          let {
              backgroundColor: t,
              backgroundImage: n,
              children: o,
              lastBlockId: a,
              minHeight: c = "100vh",
            } = e,
            [u, d] = (0, i.useState)({
              backgroundColor: t,
              backgroundImage: n,
            }),
            f = (0, i.useRef)(null);
          return (
            (0, i.useEffect)(() => {
              d((e) => {
                var t;
                return {
                  ...e,
                  layoutHeight:
                    null === (t = f.current) || void 0 === t
                      ? void 0
                      : t.offsetHeight,
                };
              });
            }, []),
            (0, r.jsx)(s.s.Provider, {
              value: u,
              children: (0, r.jsx)(l, {
                backgroundColor: t,
                maxWidth: "100%",
                minHeight: c,
                ref: f,
                role: "main",
                style: { backgroundImage: n },
                use: "main",
                lastBlockId: a,
                children: o,
              }),
            })
          );
        };
    },
    99674: function (e, t, n) {
      n.d(t, {
        e: function () {
          return s;
        },
      });
      var r = n(40176),
        i = n(68016),
        o = n(86441);
      let { publicRuntimeConfig: a } = (0, r.i)();
      function c(e) {
        let { src: t, width: n, quality: r = 75 } = e;
        return (0, i.Q4)(t, r, n);
      }
      let s = () =>
        (0, o.U)()
          ? (e) => {
              let { src: t, width: n, quality: r = 75 } = e;
              return "https://"
                .concat(a.websiteDomain, "/_next/image?url=")
                .concat(encodeURIComponent(t), "&w=")
                .concat(n, "&q=")
                .concat(r);
            }
          : c;
    },
  },
]);
//# sourceMappingURL=2641-88662ab98531b2e5.js.map
