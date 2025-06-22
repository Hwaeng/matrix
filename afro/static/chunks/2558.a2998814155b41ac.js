(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2558],
  {
    2558: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return k;
        },
      });
      var o,
        i,
        r = n(253),
        a = n(5893),
        s = n(6670),
        l = n(5329),
        u = n(9710),
        c = n(9686),
        d = n(5697),
        f = n.n(d),
        p = n(7294);
      function m() {
        return (
          (m = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                }
                return e;
              }),
          m.apply(this, arguments)
        );
      }
      var g = (e) =>
          p.createElement(
            "svg",
            m(
              {
                width: "1em",
                height: "1em",
                viewBox: "0 0 16 23",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
              },
              e,
            ),
            o ||
              (o = p.createElement("path", {
                fill: "url(#volume_svg__a)",
                d: "M0 0h16v23H0z",
              })),
            i ||
              (i = p.createElement(
                "defs",
                null,
                p.createElement(
                  "pattern",
                  {
                    id: "volume_svg__a",
                    patternContentUnits: "objectBoundingBox",
                    width: 1,
                    height: 1,
                  },
                  p.createElement("use", {
                    xlinkHref: "#volume_svg__b",
                    transform: "matrix(.0599 0 0 .04167 -.01 0)",
                  }),
                ),
                p.createElement("image", {
                  id: "volume_svg__b",
                  width: 17,
                  height: 24,
                  xlinkHref:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAYCAYAAAAcYhYyAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEaADAAQAAAABAAAAGAAAAACDg/FwAAABOElEQVQ4EWNgIAPcuXPn6K1bt67///+fhwztDAx//vz5paen919TU/P/48ePH5BsCMgADg6O/0CNYAx0CYgmHqAbANQJMoN4Q7AZgGwIC8gtQAONgJQmiI0Gvv39+3clDw8P648fP9CkEFzGY8eOJQsLC/fcvn37J0IYwgIa8D8gIEACl6tB4oxAwACMqvtALeCAIpUGGgIOE0agbf+YmZkZ0V1BDB/mEiZiFBNSM2oIZggNnjBheffu3ZOkpCTZrVu3YrgTmIYY3rx5gyGOIQBMMOwPHz489enTpy/oGGjAO29v7y9ATVhTNCzFYhiKLnDz5s1Z9fX137EZRLQhIENxGUSSIbgMItkQbAbdu3fvEdAgJpJzLzAWC3///t1y48YNJldX1ynGxsalIAtIBkDb/YE4E6YRAKni79EV+3t1AAAAAElFTkSuQmCC",
                }),
              )),
          ),
        h = n(1034),
        v = n(1997),
        y = n(461),
        A = n(2569),
        b = n(5252),
        w = n(183),
        E = n.n(w),
        x = {
          name: "volume-toggle",
          left: { id: "on", name: "On", value: "false" },
          right: { id: "off", name: "Off", value: "true" },
        },
        C = "isViewedIntroVideo",
        _ = "isMutedIntroVideo";
      function k(e) {
        var t,
          n,
          o,
          i = e.smartplayer,
          d = e.canPlay,
          f = e.legend,
          m = e.video,
          h = e.videoMobile,
          w = e.btnLabel,
          k = e.playsInline,
          T = (0, p.useState)(!1),
          P = T[0],
          S = T[1],
          O = (0, p.useState)(!1),
          N = O[0],
          I = O[1],
          B = (0, p.useState)(!0),
          M = B[0],
          R = B[1],
          j = (0, p.useState)(!1),
          Z = j[0],
          L = j[1],
          V = (0, v.Z)("<phablet", !1),
          q = (0, p.useRef)(null),
          D = (0, r.Z)((0, y.Z)([C]), 2),
          Q = D[0],
          U = D[1],
          Y = (0, p.useCallback)(function () {
            R("true" === localStorage.getItem(_));
          }, []),
          G = (0, p.useCallback)(function () {
            L(!0), (document.body.style.overflow = "auto");
          }, []),
          z = (0, p.useCallback)(
            function () {
              if (!P) {
                var e = "true" === Q.isViewedIntroVideo;
                I(e),
                  U(C, !0),
                  e || (document.body.style.overflow = "hidden"),
                  S(!0);
              }
            },
            [P, Q, U],
          );
        if (
          ((0, p.useEffect)(
            function () {
              var e = null === q || void 0 === q ? void 0 : q.current;
              return (
                z(),
                null === e || void 0 === e || e.play(),
                window.addEventListener("".concat(_, "Change"), Y),
                null === e || void 0 === e || e.addEventListener("ended", G),
                function () {
                  window.removeEventListener("".concat(_, "Change"), Y),
                    null === e ||
                      void 0 === e ||
                      e.removeEventListener("ended", G);
                }
              );
            },
            [z, Y, G],
          ),
          !P || N || Z)
        )
          return null;
        var H = m.url,
          W =
            V && (null === h || void 0 === h ? void 0 : h.url)
              ? h.url
              : null === m || void 0 === m
                ? void 0
                : m.url,
          K = null === (t = m.cover) || void 0 === t ? void 0 : t.path,
          F =
            V &&
            (null === h ||
            void 0 === h ||
            null === (n = h.cover) ||
            void 0 === n
              ? void 0
              : n.path)
              ? h.cover.path
              : null === m ||
                  void 0 === m ||
                  null === (o = m.cover) ||
                  void 0 === o
                ? void 0
                : o.path;
        return (0, a.jsxs)("div", {
          className: E().main,
          children: [
            f &&
              (0, a.jsx)(s.t2, {
                level: 5,
                children: (0, a.jsx)(s.X6, { children: f }),
              }),
            (0, a.jsx)("div", {
              className: E()["video-container"],
              children: i
                ? (0, a.jsx)(A.Z, { stream: m, canPlay: d })
                : (0, a.jsx)(c.ZP, {
                    ref: q,
                    src: H,
                    srcMobile: W,
                    poster: K,
                    posterMobile: F,
                    muted: !!M && "muted",
                    autoPlay: !0,
                    playsInline: !!k && "playsInline",
                    type: b.a3.INTRO_VIDEO,
                  }),
            }),
            !i &&
              (0, a.jsxs)("div", {
                className: E()["volume-container"],
                children: [
                  (0, a.jsx)(g, {}),
                  (0, a.jsx)(u.Z, {
                    id: "intro",
                    toggleValues: x,
                    localstorageName: _,
                  }),
                ],
              }),
            (0, a.jsx)(l.Z, {
              color: "white",
              fixedColor: !0,
              className: E().button,
              onClick: G,
              children: w,
            }),
          ],
        });
      }
      (k.defaultProps = {
        legend: "",
        videoMobile: null,
        playsInline: !0,
        smartplayer: !1,
        canPlay: !1,
      }),
        (k.propTypes = {
          legend: f().string,
          video: f().oneOfType([h.G, f().string]).isRequired,
          videoMobile: h.G,
          btnLabel: f().string.isRequired,
          playsInline: f().bool,
          smartplayer: f().bool,
          canPlay: f().bool,
        });
    },
    5329: function (e, t, n) {
      "use strict";
      var o = n(4924),
        i = n(6042),
        r = n(9396),
        a = n(9534),
        s = n(5893),
        l = n(5697),
        u = n.n(l),
        c = n(4184),
        d = n.n(c),
        f = n(7294),
        p = n(4419),
        m = n.n(p);
      function g(e) {
        var t = e.children,
          n = e.className,
          l = e.color,
          u = e.element,
          c = e.fixedColor,
          p = e.fullWidth,
          g = e.marginBottom,
          h = e.marginTop,
          v = e.type,
          y = (0, a.Z)(e, [
            "children",
            "className",
            "color",
            "element",
            "fixedColor",
            "fullWidth",
            "marginBottom",
            "marginTop",
            "type",
          ]),
          A = (0, f.useMemo)(
            function () {
              return u;
            },
            [u],
          );
        return (0, s.jsx)(
          A,
          (0, r.Z)(
            (0, i.Z)(
              {
                className: d()([
                  m().button,
                  m()["button--color-".concat(l)],
                  (0, o.Z)({}, m()["button--fullWidth"], p),
                  (0, o.Z)({}, m()["button--marginBottom"], g),
                  (0, o.Z)({}, m()["button--marginTop"], h),
                  (0, o.Z)({}, m()["button--fixed-color"], c),
                  n,
                ]),
              },
              y,
            ),
            { type: "button" === u ? v : void 0, children: t },
          ),
        );
      }
      g.defaultProps = {
        className: null,
        color: "black",
        element: "button",
        fixedColor: !1,
        fullWidth: !1,
        type: "button",
        marginBottom: !1,
        marginTop: !1,
      };
      var h = {
        children: u().string.isRequired,
        className: u().string,
        color: u().oneOf(["black", "white"]),
        element: u().oneOf(["button", "div", "p", "span"]),
        fixedColor: u().bool,
        fullWidth: u().bool,
        marginBottom: u().bool,
        marginTop: u().bool,
        type: u().oneOf(["button", "reset", "submit"]),
      };
      (g.propTypes = h), (t.Z = g);
    },
    2569: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var o = n(4924),
        i = n(5893),
        r = n(5697),
        a = n.n(r),
        s = n(7294),
        l = n(4184),
        u = n.n(l),
        c = n(558),
        d = n.n(c);
      function f(e) {
        var t = e.stream,
          n = e.canPlay,
          r = e.smartClass,
          a = e.mute,
          l = (0, s.useRef)(null),
          c = (0, s.useRef)(null),
          f = (0, s.useState)(!1),
          p = f[0],
          m = f[1];
        return (
          (0, s.useEffect)(function () {
            var e = function (e) {
              var t = e.detail.action;
              "replay" === t && c.current.seek(0),
                "play-21" === t && c.current.seek(21);
            };
            return (
              document.addEventListener("smartplayer", e),
              function () {
                return document.removeEventListener("smartplayer", e);
              }
            );
          }, []),
          (0, s.useEffect)(
            function () {
              if (t) {
                var e = new window.SmartPlayer(l.current, t, {
                  autoplay: n,
                  controls: !0,
                }).then(function (e) {
                  return (c.current = e), a && e.mute(), m(!0), e;
                });
                return function () {
                  e.then(function (e) {
                    e.destroy();
                  });
                };
              }
            },
            [t, n, a],
          ),
          (0, i.jsxs)("div", {
            className: u()([r, d().main]),
            children: [
              (0, i.jsx)("div", { className: d().player, ref: l }),
              (0, i.jsx)("div", {
                className: u()(d().cover, (0, o.Z)({}, d().hidden, p)),
              }),
            ],
          })
        );
      }
      (f.defaultProps = { canPlay: !1, smartClass: "", mute: !0 }),
        (f.propTypes = {
          smartClass: a().string,
          stream: a().string.isRequired,
          canPlay: a().bool,
          mute: a().bool,
        });
    },
    9710: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var o = n(253),
        i = n(9815),
        r = n(5893),
        a = n(5697),
        s = n.n(a),
        l = n(461),
        u = n(7294),
        c = n(4184),
        d = n.n(c),
        f = n(7752),
        p = n.n(f);
      function m(e) {
        var t = e.toggleValues,
          n = e.switchMode,
          o = e.mode,
          i = e.position,
          a = e.id,
          s = "".concat(t[i].id, "_").concat(a),
          l = t[i].value.toString();
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("input", {
              id: s,
              className: d()(p().button, p()["button--".concat(i)]),
              name: t.name,
              type: "radio",
              onChange: function () {
                return n(l);
              },
              checked: o === l,
            }),
            (0, r.jsx)("label", {
              htmlFor: s,
              children: (0, r.jsx)("span", { children: t[i].name }),
            }),
          ],
        });
      }
      var g = s().shape({
        id: s().string.isRequired,
        name: s().string.isRequired,
        value: s().string.isRequired,
        link: s().string,
      });
      function h(e) {
        var t,
          n,
          a = e.id,
          s = e.toggleValues,
          d = e.localstorageName,
          f = e.cookieName,
          g = e.thememode,
          h = e.defaultChecked,
          v = e.thememodeType,
          y = (0, o.Z)((0, l.Z)(f), 2),
          A = y[0],
          b = y[1],
          w =
            A[f] ||
            (null === (t = s[h]) ||
            void 0 === t ||
            null === (n = t.value) ||
            void 0 === n
              ? void 0
              : n.toString()) ||
            "",
          E = (0, u.useState)(w),
          x = E[0],
          C = E[1],
          _ = (0, u.useRef)(null),
          k = function (e) {
            d.length > 0 &&
              (localStorage.setItem(d, e),
              window.dispatchEvent(new Event("".concat(d, "Change")))),
              f.length > 0 && b(f, e),
              C(e);
          };
        return (
          (0, u.useEffect)(function () {
            document.body.classList.contains("allow-transition") ||
              document.body.classList.add("allow-transition");
          }, []),
          (0, u.useEffect)(
            function () {
              g && (document.documentElement.dataset.thememode = x);
            },
            [g, x],
          ),
          (0, u.useEffect)(
            function () {
              var e = _.current.querySelectorAll("label");
              (0, i.Z)(e).forEach(function (e) {
                var t = e.getBoundingClientRect().width;
                e.style.width = "".concat(Math.floor(t), "px");
              });
            },
            [_],
          ),
          (0, u.useEffect)(
            function () {
              var e = function () {
                if (d) {
                  var e = localStorage.getItem(d);
                  e && C(e);
                }
              };
              return (
                e(),
                window.addEventListener("".concat(d, "Change"), e),
                function () {
                  window.removeEventListener("".concat(d, "Change"), e);
                }
              );
            },
            [d],
          ),
          (0, r.jsxs)("div", {
            className: c([p().main, p()[v]]),
            ref: _,
            children: [
              (0, r.jsx)(m, {
                toggleValues: s,
                switchMode: k,
                mode: x,
                position: "left",
                id: a,
              }),
              (0, r.jsx)(m, {
                toggleValues: s,
                switchMode: k,
                mode: x,
                position: "right",
                id: a,
              }),
            ],
          })
        );
      }
      (m.defaultProps = {}),
        (m.propTypes = {
          id: s().string.isRequired,
          switchMode: s().func.isRequired,
          mode: s().string.isRequired,
          position: s().oneOf(["left", "right"]).isRequired,
          toggleValues: s().shape({
            name: s().string.isRequired,
            left: g.isRequired,
            right: g.isRequired,
          }).isRequired,
        }),
        (h.defaultProps = {
          thememode: !1,
          localstorageName: "",
          cookieName: "",
          thememodeType: "",
          defaultChecked: "right",
        }),
        (h.propTypes = {
          id: s().string.isRequired,
          toggleValues: s().shape({
            name: s().string.isRequired,
            left: g.isRequired,
            right: g.isRequired,
          }).isRequired,
          localstorageName: s().string,
          cookieName: s().string,
          thememodeType: s().string,
          thememode: s().bool,
          defaultChecked: s().oneOf(["left", "right"]),
        });
    },
    9686: function (e, t, n) {
      "use strict";
      var o = n(5893),
        i = n(5697),
        r = n(7294),
        a = n(6486),
        s = n(8877),
        l = n(5052),
        u = n(5252),
        c = n(4466);
      function d(e) {
        var t = e.type,
          n = e.src,
          i = e.srcMobile,
          d = e.poster,
          f = e.posterMobile,
          p = e.autoPlay,
          m = e.muted,
          g = e.loop,
          h = e.playsInline,
          v = e.controls,
          y = e.preload,
          A = e.maxDuration,
          b = (0, r.useRef)(),
          w = (0, s.Z)(b),
          E = (0, r.useState)(),
          x = E[0],
          C = E[1],
          _ = (0, r.useState)(void 0),
          k = _[0],
          T = _[1],
          P = (0, r.useState)(void 0),
          S = P[0],
          O = P[1];
        return (
          (0, r.useEffect)(
            function () {
              var e,
                t = (0, a.debounce)(function () {
                  if (e !== window.innerWidth) {
                    e = window.innerWidth;
                    var t = (0, c.l7)();
                    C(t);
                  }
                }, 200);
              return (
                t(),
                window.addEventListener("resize", t),
                function () {
                  window.removeEventListener("resize", t);
                }
              );
            },
            [t],
          ),
          (0, r.useEffect)(
            function () {
              w &&
                (Array.from(b.current.children, function (e) {
                  "string" === typeof e.tagName &&
                    "SOURCE" === e.tagName &&
                    ((e.src = e.dataset.src), (e.dataset.src = "lazy-loaded"));
                }),
                b.current.load());
            },
            [k, w, b],
          ),
          (0, l.Z)(
            function () {
              if (x) {
                var e = u.j$.find(function (e) {
                    return e.breakpoint === x;
                  }),
                  o = e.width,
                  r = e.breakpoint,
                  a = (0, c.Yo)({
                    width: o,
                    breakpoint: r,
                    type: t,
                    src: n,
                    srcMobile: i,
                    maxDuration: A,
                  });
                T(a);
                var s = (0, c.Et)({
                  width: o,
                  breakpoint: r,
                  type: t,
                  poster: d,
                  posterMobile: f,
                });
                O(s);
              }
            },
            [x, t, n, i, d, f],
          ),
          (0, o.jsx)("video", {
            autoPlay: p,
            muted: !!m,
            loop: g,
            ref: b,
            playsInline: h,
            poster: S,
            controls: v,
            preload: y,
            children: (0, o.jsx)("source", {
              type: "video/mp4",
              "data-src": k,
            }),
          })
        );
      }
      (d.defaultProps = {
        autoPlay: !1,
        playsInline: !1,
        loop: !1,
        controls: !1,
        controlPlayPause: !1,
        muted: !0,
        type: u.a3.FULLSCREEN,
        srcMobile: null,
        posterMobile: null,
        preload: "none",
        maxDuration: null,
      }),
        (d.propTypes = {
          autoPlay: i.PropTypes.oneOf(["autoPlay", !0, !1]),
          playsInline: i.PropTypes.oneOf([
            "playsInline",
            "playsinline",
            !0,
            !1,
          ]),
          loop: i.PropTypes.bool,
          controls: i.PropTypes.bool,
          muted: i.PropTypes.oneOf(["muted", !0, !1]),
          poster: i.PropTypes.string.isRequired,
          posterMobile: i.PropTypes.string,
          src: i.PropTypes.string.isRequired,
          preload: i.PropTypes.oneOf(["auto", "metadata", "none"]),
          srcMobile: i.PropTypes.string,
          type: i.PropTypes.string,
          maxDuration: i.PropTypes.number,
        }),
        (t.ZP = d);
    },
    183: function (e) {
      e.exports = {
        main: "VideoBlock_IntroVideo",
        "video-container": "VideoBlock_IntroVideo_video-container",
        "volume-container": "VideoBlock_IntroVideo_volume-container",
        button: "VideoBlock_IntroVideo_button",
        "fade-in": "VideoBlock_IntroVideo_fade-in",
        "fade-in-delay": "VideoBlock_IntroVideo_fade-in-delay",
      };
    },
    4419: function (e) {
      e.exports = {
        button: "Button_button",
        "button--fullWidth": "Button_button--fullWidth",
        "button--marginTop": "Button_button--marginTop",
        "button--marginBottom": "Button_button--marginBottom",
        "button--color-black": "Button_button--color-black",
        "button--color-white": "Button_button--color-white",
        "button--fixed-color": "Button_button--fixed-color",
        "fade-in": "Button_fade-in",
        "fade-in-delay": "Button_fade-in-delay",
      };
    },
    558: function (e) {
      e.exports = {
        main: "SmartPlayer",
        player: "SmartPlayer_player",
        cover: "SmartPlayer_cover",
        hidden: "SmartPlayer_hidden",
        "fade-in": "SmartPlayer_fade-in",
        "fade-in-delay": "SmartPlayer_fade-in-delay",
      };
    },
    7752: function (e) {
      e.exports = {
        main: "Toggler",
        button: "Toggler_button",
        "button--left": "Toggler_button--left",
        "button--right": "Toggler_button--right",
        "toggler-link": "Toggler_toggler-link",
        "toggler-link--left": "Toggler_toggler-link--left",
        "active--left": "Toggler_active--left",
        "toggler-link--right": "Toggler_toggler-link--right",
        "active--right": "Toggler_active--right",
        darkred: "Toggler_darkred",
        "fade-in": "Toggler_fade-in",
        "fade-in-delay": "Toggler_fade-in-delay",
      };
    },
    461: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var o = n(7294),
        i = n(5105);
      function r(e, t) {
        void 0 === t && (t = {});
        var n = (function (e) {
          if (e && "j" === e[0] && ":" === e[1]) return e.substr(2);
          return e;
        })(e);
        if (
          (function (e, t) {
            return (
              "undefined" === typeof t &&
                (t = !e || ("{" !== e[0] && "[" !== e[0] && '"' !== e[0])),
              !t
            );
          })(n, t.doNotParse)
        )
          try {
            return JSON.parse(n);
          } catch (o) {}
        return e;
      }
      var a = function () {
          return (
            (a =
              Object.assign ||
              function (e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            a.apply(this, arguments)
          );
        },
        s = (function () {
          function e(e, t) {
            var n = this;
            (this.changeListeners = []),
              (this.HAS_DOCUMENT_COOKIE = !1),
              (this.cookies = (function (e, t) {
                return "string" === typeof e
                  ? i.Q(e, t)
                  : "object" === typeof e && null !== e
                    ? e
                    : {};
              })(e, t)),
              new Promise(function () {
                n.HAS_DOCUMENT_COOKIE =
                  "object" === typeof document &&
                  "string" === typeof document.cookie;
              }).catch(function () {});
          }
          return (
            (e.prototype._updateBrowserValues = function (e) {
              this.HAS_DOCUMENT_COOKIE &&
                (this.cookies = i.Q(document.cookie, e));
            }),
            (e.prototype._emitChange = function (e) {
              for (var t = 0; t < this.changeListeners.length; ++t)
                this.changeListeners[t](e);
            }),
            (e.prototype.get = function (e, t, n) {
              return (
                void 0 === t && (t = {}),
                this._updateBrowserValues(n),
                r(this.cookies[e], t)
              );
            }),
            (e.prototype.getAll = function (e, t) {
              void 0 === e && (e = {}), this._updateBrowserValues(t);
              var n = {};
              for (var o in this.cookies) n[o] = r(this.cookies[o], e);
              return n;
            }),
            (e.prototype.set = function (e, t, n) {
              var o;
              "object" === typeof t && (t = JSON.stringify(t)),
                (this.cookies = a(a({}, this.cookies), (((o = {})[e] = t), o))),
                this.HAS_DOCUMENT_COOKIE && (document.cookie = i.q(e, t, n)),
                this._emitChange({ name: e, value: t, options: n });
            }),
            (e.prototype.remove = function (e, t) {
              var n = (t = a(a({}, t), {
                expires: new Date(1970, 1, 1, 0, 0, 1),
                maxAge: 0,
              }));
              (this.cookies = a({}, this.cookies)),
                delete this.cookies[e],
                this.HAS_DOCUMENT_COOKIE && (document.cookie = i.q(e, "", n)),
                this._emitChange({ name: e, value: void 0, options: t });
            }),
            (e.prototype.addChangeListener = function (e) {
              this.changeListeners.push(e);
            }),
            (e.prototype.removeChangeListener = function (e) {
              var t = this.changeListeners.indexOf(e);
              t >= 0 && this.changeListeners.splice(t, 1);
            }),
            e
          );
        })(),
        l = o.createContext(new s()),
        u = (l.Provider, l.Consumer, l);
      function c(e) {
        var t = (0, o.useContext)(u);
        if (!t) throw new Error("Missing <CookiesProvider>");
        var n = t.getAll(),
          i = (0, o.useState)(n),
          r = i[0],
          a = i[1],
          s = (0, o.useRef)(r);
        return (
          "undefined" !== typeof window &&
            "undefined" !== typeof window.document &&
            "undefined" !== typeof window.document.createElement &&
            (0, o.useLayoutEffect)(
              function () {
                function n() {
                  var n = t.getAll();
                  (function (e, t, n) {
                    if (!e) return !0;
                    for (var o = 0, i = e; o < i.length; o++) {
                      var r = i[o];
                      if (t[r] !== n[r]) return !0;
                    }
                    return !1;
                  })(e || null, n, s.current) && a(n),
                    (s.current = n);
                }
                return (
                  t.addChangeListener(n),
                  function () {
                    t.removeChangeListener(n);
                  }
                );
              },
              [t],
            ),
          [
            r,
            (0, o.useMemo)(
              function () {
                return t.set.bind(t);
              },
              [t],
            ),
            (0, o.useMemo)(
              function () {
                return t.remove.bind(t);
              },
              [t],
            ),
          ]
        );
      }
    },
    5105: function (e, t) {
      "use strict";
      (t.Q = function (e, t) {
        if ("string" !== typeof e)
          throw new TypeError("argument str must be a string");
        for (
          var o = {}, i = t || {}, a = e.split(";"), s = i.decode || n, l = 0;
          l < a.length;
          l++
        ) {
          var u = a[l],
            c = u.indexOf("=");
          if (!(c < 0)) {
            var d = u.substring(0, c).trim();
            if (void 0 == o[d]) {
              var f = u.substring(c + 1, u.length).trim();
              '"' === f[0] && (f = f.slice(1, -1)), (o[d] = r(f, s));
            }
          }
        }
        return o;
      }),
        (t.q = function (e, t, n) {
          var r = n || {},
            a = r.encode || o;
          if ("function" !== typeof a)
            throw new TypeError("option encode is invalid");
          if (!i.test(e)) throw new TypeError("argument name is invalid");
          var s = a(t);
          if (s && !i.test(s)) throw new TypeError("argument val is invalid");
          var l = e + "=" + s;
          if (null != r.maxAge) {
            var u = r.maxAge - 0;
            if (isNaN(u) || !isFinite(u))
              throw new TypeError("option maxAge is invalid");
            l += "; Max-Age=" + Math.floor(u);
          }
          if (r.domain) {
            if (!i.test(r.domain))
              throw new TypeError("option domain is invalid");
            l += "; Domain=" + r.domain;
          }
          if (r.path) {
            if (!i.test(r.path)) throw new TypeError("option path is invalid");
            l += "; Path=" + r.path;
          }
          if (r.expires) {
            if ("function" !== typeof r.expires.toUTCString)
              throw new TypeError("option expires is invalid");
            l += "; Expires=" + r.expires.toUTCString();
          }
          r.httpOnly && (l += "; HttpOnly");
          r.secure && (l += "; Secure");
          if (r.sameSite) {
            switch (
              "string" === typeof r.sameSite
                ? r.sameSite.toLowerCase()
                : r.sameSite
            ) {
              case !0:
                l += "; SameSite=Strict";
                break;
              case "lax":
                l += "; SameSite=Lax";
                break;
              case "strict":
                l += "; SameSite=Strict";
                break;
              case "none":
                l += "; SameSite=None";
                break;
              default:
                throw new TypeError("option sameSite is invalid");
            }
          }
          return l;
        });
      var n = decodeURIComponent,
        o = encodeURIComponent,
        i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
      function r(e, t) {
        try {
          return t(e);
        } catch (n) {
          return e;
        }
      }
    },
  },
]);
