(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6546],
  {
    6546: function (e, t) {
      !(function (e) {
        "use strict";
        function t(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function n(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        }
        var r,
          o,
          i,
          a,
          s,
          l,
          c,
          u,
          f,
          d,
          p,
          h,
          g,
          v = function () {
            return (
              r ||
              ("undefined" !== typeof window &&
                (r = window.gsap) &&
                r.registerPlugin &&
                r)
            );
          },
          m = 1,
          y = [],
          b = [],
          x = [],
          w = Date.now,
          _ = function (e, t) {
            return t;
          },
          k = function () {
            var e = f.core,
              t = e.bridge || {},
              n = e._scrollers,
              r = e._proxies;
            n.push.apply(n, b),
              r.push.apply(r, x),
              (b = n),
              (x = r),
              (_ = function (e, n) {
                return t[e](n);
              });
          },
          S = function (e, t) {
            return ~x.indexOf(e) && x[x.indexOf(e) + 1][t];
          },
          E = function (e) {
            return !!~d.indexOf(e);
          },
          T = function (e, t, n, r, o) {
            return e.addEventListener(t, n, { passive: !r, capture: !!o });
          },
          P = function (e, t, n, r) {
            return e.removeEventListener(t, n, !!r);
          },
          M = "scrollLeft",
          C = "scrollTop",
          O = function () {
            return (p && p.isPressed) || b.cache++;
          },
          A = function (e, t) {
            var n = function n(r) {
              if (r || 0 === r) {
                m && (i.history.scrollRestoration = "manual");
                var o = p && p.isPressed;
                (r = n.v = Math.round(r) || (p && p.iOS ? 1 : 0)),
                  e(r),
                  (n.cacheID = b.cache),
                  o && _("ss", r);
              } else
                (t || b.cache !== n.cacheID || _("ref")) &&
                  ((n.cacheID = b.cache), (n.v = e()));
              return n.v + n.offset;
            };
            return (n.offset = 0), e && n;
          },
          R = {
            s: M,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: A(function (e) {
              return arguments.length
                ? i.scrollTo(e, D.sc())
                : i.pageXOffset || a[M] || s[M] || l[M] || 0;
            }),
          },
          D = {
            s: C,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: R,
            sc: A(function (e) {
              return arguments.length
                ? i.scrollTo(R.sc(), e)
                : i.pageYOffset || a[C] || s[C] || l[C] || 0;
            }),
          },
          Y = function (e) {
            return (
              r.utils.toArray(e)[0] ||
              ("string" === typeof e && !1 !== r.config().nullTargetWarn
                ? console.warn("Element not found:", e)
                : null)
            );
          },
          I = function (e, t) {
            var n = t.s,
              o = t.sc;
            E(e) && (e = a.scrollingElement || s);
            var i = b.indexOf(e),
              l = o === D.sc ? 1 : 2;
            !~i && (i = b.push(e) - 1),
              b[i + l] || e.addEventListener("scroll", O);
            var c = b[i + l],
              u =
                c ||
                (b[i + l] =
                  A(S(e, n), !0) ||
                  (E(e)
                    ? o
                    : A(function (t) {
                        return arguments.length ? (e[n] = t) : e[n];
                      })));
            return (
              (u.target = e),
              c || (u.smooth = "smooth" === r.getProperty(e, "scrollBehavior")),
              u
            );
          },
          X = function (e, t, n) {
            var r = e,
              o = e,
              i = w(),
              a = i,
              s = t || 50,
              l = Math.max(500, 3 * s),
              c = function (e, t) {
                var l = w();
                t || l - i > s
                  ? ((o = r), (r = e), (a = i), (i = l))
                  : n
                    ? (r += e)
                    : (r = o + ((e - o) / (l - a)) * (i - a));
              },
              u = function (e) {
                var t = a,
                  s = o,
                  u = w();
                return (
                  (e || 0 === e) && e !== r && c(e),
                  i === a || u - a > l
                    ? 0
                    : ((r + (n ? s : -s)) / ((n ? u : i) - t)) * 1e3
                );
              };
            return {
              update: c,
              reset: function () {
                (o = r = n ? 0 : r), (a = i = 0);
              },
              getVelocity: u,
            };
          },
          z = function (e, t) {
            return (
              t && !e._gsapAllow && e.preventDefault(),
              e.changedTouches ? e.changedTouches[0] : e
            );
          },
          B = function (e) {
            var t = Math.max.apply(Math, e),
              n = Math.min.apply(Math, e);
            return Math.abs(t) >= Math.abs(n) ? t : n;
          },
          F = function () {
            (f = r.core.globals().ScrollTrigger) && f.core && k();
          },
          N = function (e) {
            return (
              (r = e || v()) &&
                "undefined" !== typeof document &&
                document.body &&
                ((i = window),
                (a = document),
                (s = a.documentElement),
                (l = a.body),
                (d = [i, a, s, l]),
                r.utils.clamp,
                (g = r.core.context || function () {}),
                (u = "onpointerenter" in l ? "pointer" : "mouse"),
                (c = L.isTouch =
                  i.matchMedia &&
                  i.matchMedia("(hover: none), (pointer: coarse)").matches
                    ? 1
                    : "ontouchstart" in i ||
                        navigator.maxTouchPoints > 0 ||
                        navigator.msMaxTouchPoints > 0
                      ? 2
                      : 0),
                (h = L.eventTypes =
                  (
                    "ontouchstart" in s
                      ? "touchstart,touchmove,touchcancel,touchend"
                      : "onpointerdown" in s
                        ? "pointerdown,pointermove,pointercancel,pointerup"
                        : "mousedown,mousemove,mouseup,mouseup"
                  ).split(",")),
                setTimeout(function () {
                  return (m = 0);
                }, 500),
                F(),
                (o = 1)),
              o
            );
          };
        (R.op = D), (b.cache = 0);
        var L = (function () {
          function e(e) {
            this.init(e);
          }
          return (
            (e.prototype.init = function (e) {
              o || N(r) || console.warn("Please gsap.registerPlugin(Observer)"),
                f || F();
              var t = e.tolerance,
                n = e.dragMinimum,
                d = e.type,
                v = e.target,
                m = e.lineHeight,
                b = e.debounce,
                x = e.preventDefault,
                _ = e.onStop,
                k = e.onStopDelay,
                S = e.ignore,
                M = e.wheelSpeed,
                C = e.event,
                A = e.onDragStart,
                L = e.onDragEnd,
                H = e.onDrag,
                W = e.onPress,
                q = e.onRelease,
                V = e.onRight,
                U = e.onLeft,
                G = e.onUp,
                j = e.onDown,
                K = e.onChangeX,
                Z = e.onChangeY,
                $ = e.onChange,
                J = e.onToggleX,
                Q = e.onToggleY,
                ee = e.onHover,
                te = e.onHoverEnd,
                ne = e.onMove,
                re = e.ignoreCheck,
                oe = e.isNormalizer,
                ie = e.onGestureStart,
                ae = e.onGestureEnd,
                se = e.onWheel,
                le = e.onEnable,
                ce = e.onDisable,
                ue = e.onClick,
                fe = e.scrollSpeed,
                de = e.capture,
                pe = e.allowClicks,
                he = e.lockAxis,
                ge = e.onLockAxis;
              (this.target = v = Y(v) || s),
                (this.vars = e),
                S && (S = r.utils.toArray(S)),
                (t = t || 1e-9),
                (n = n || 0),
                (M = M || 1),
                (fe = fe || 1),
                (d = d || "wheel,touch,pointer"),
                (b = !1 !== b),
                m || (m = parseFloat(i.getComputedStyle(l).lineHeight) || 22);
              var ve,
                me,
                ye,
                be,
                xe,
                we,
                _e,
                ke = this,
                Se = 0,
                Ee = 0,
                Te = I(v, R),
                Pe = I(v, D),
                Me = Te(),
                Ce = Pe(),
                Oe =
                  ~d.indexOf("touch") &&
                  !~d.indexOf("pointer") &&
                  "pointerdown" === h[0],
                Ae = E(v),
                Re = v.ownerDocument || a,
                De = [0, 0, 0],
                Ye = [0, 0, 0],
                Ie = 0,
                Xe = function () {
                  return (Ie = w());
                },
                ze = function (e, t) {
                  return (
                    ((ke.event = e) && S && ~S.indexOf(e.target)) ||
                    (t && Oe && "touch" !== e.pointerType) ||
                    (re && re(e, t))
                  );
                },
                Be = function () {
                  ke._vx.reset(), ke._vy.reset(), me.pause(), _ && _(ke);
                },
                Fe = function () {
                  var e = (ke.deltaX = B(De)),
                    n = (ke.deltaY = B(Ye)),
                    r = Math.abs(e) >= t,
                    o = Math.abs(n) >= t;
                  $ && (r || o) && $(ke, e, n, De, Ye),
                    r &&
                      (V && ke.deltaX > 0 && V(ke),
                      U && ke.deltaX < 0 && U(ke),
                      K && K(ke),
                      J && ke.deltaX < 0 !== Se < 0 && J(ke),
                      (Se = ke.deltaX),
                      (De[0] = De[1] = De[2] = 0)),
                    o &&
                      (j && ke.deltaY > 0 && j(ke),
                      G && ke.deltaY < 0 && G(ke),
                      Z && Z(ke),
                      Q && ke.deltaY < 0 !== Ee < 0 && Q(ke),
                      (Ee = ke.deltaY),
                      (Ye[0] = Ye[1] = Ye[2] = 0)),
                    (be || ye) &&
                      (ne && ne(ke), ye && (H(ke), (ye = !1)), (be = !1)),
                    we && !(we = !1) && ge && ge(ke),
                    xe && (se(ke), (xe = !1)),
                    (ve = 0);
                },
                Ne = function (e, t, n) {
                  (De[n] += e),
                    (Ye[n] += t),
                    ke._vx.update(e),
                    ke._vy.update(t),
                    b ? ve || (ve = requestAnimationFrame(Fe)) : Fe();
                },
                Le = function (e, t) {
                  he &&
                    !_e &&
                    ((ke.axis = _e = Math.abs(e) > Math.abs(t) ? "x" : "y"),
                    (we = !0)),
                    "y" !== _e && ((De[2] += e), ke._vx.update(e, !0)),
                    "x" !== _e && ((Ye[2] += t), ke._vy.update(t, !0)),
                    b ? ve || (ve = requestAnimationFrame(Fe)) : Fe();
                },
                He = function (e) {
                  if (!ze(e, 1)) {
                    var t = (e = z(e, x)).clientX,
                      r = e.clientY,
                      o = t - ke.x,
                      i = r - ke.y,
                      a = ke.isDragging;
                    (ke.x = t),
                      (ke.y = r),
                      (a ||
                        Math.abs(ke.startX - t) >= n ||
                        Math.abs(ke.startY - r) >= n) &&
                        (H && (ye = !0),
                        a || (ke.isDragging = !0),
                        Le(o, i),
                        a || (A && A(ke)));
                  }
                },
                We = (ke.onPress = function (e) {
                  ze(e, 1) ||
                    (e && e.button) ||
                    ((ke.axis = _e = null),
                    me.pause(),
                    (ke.isPressed = !0),
                    (e = z(e)),
                    (Se = Ee = 0),
                    (ke.startX = ke.x = e.clientX),
                    (ke.startY = ke.y = e.clientY),
                    ke._vx.reset(),
                    ke._vy.reset(),
                    T(oe ? v : Re, h[1], He, x, !0),
                    (ke.deltaX = ke.deltaY = 0),
                    W && W(ke));
                }),
                qe = (ke.onRelease = function (e) {
                  if (!ze(e, 1)) {
                    P(oe ? v : Re, h[1], He, !0);
                    var t = !isNaN(ke.y - ke.startY),
                      n =
                        ke.isDragging &&
                        (Math.abs(ke.x - ke.startX) > 3 ||
                          Math.abs(ke.y - ke.startY) > 3),
                      o = z(e);
                    !n &&
                      t &&
                      (ke._vx.reset(),
                      ke._vy.reset(),
                      x &&
                        pe &&
                        r.delayedCall(0.08, function () {
                          if (w() - Ie > 300 && !e.defaultPrevented)
                            if (e.target.click) e.target.click();
                            else if (Re.createEvent) {
                              var t = Re.createEvent("MouseEvents");
                              t.initMouseEvent(
                                "click",
                                !0,
                                !0,
                                i,
                                1,
                                o.screenX,
                                o.screenY,
                                o.clientX,
                                o.clientY,
                                !1,
                                !1,
                                !1,
                                !1,
                                0,
                                null,
                              ),
                                e.target.dispatchEvent(t);
                            }
                        })),
                      (ke.isDragging = ke.isGesturing = ke.isPressed = !1),
                      _ && !oe && me.restart(!0),
                      L && n && L(ke),
                      q && q(ke, n);
                  }
                }),
                Ve = function (e) {
                  return (
                    e.touches &&
                    e.touches.length > 1 &&
                    (ke.isGesturing = !0) &&
                    ie(e, ke.isDragging)
                  );
                },
                Ue = function () {
                  return (ke.isGesturing = !1) || ae(ke);
                },
                Ge = function (e) {
                  if (!ze(e)) {
                    var t = Te(),
                      n = Pe();
                    Ne((t - Me) * fe, (n - Ce) * fe, 1),
                      (Me = t),
                      (Ce = n),
                      _ && me.restart(!0);
                  }
                },
                je = function (e) {
                  if (!ze(e)) {
                    (e = z(e, x)), se && (xe = !0);
                    var t =
                      (1 === e.deltaMode
                        ? m
                        : 2 === e.deltaMode
                          ? i.innerHeight
                          : 1) * M;
                    Ne(e.deltaX * t, e.deltaY * t, 0),
                      _ && !oe && me.restart(!0);
                  }
                },
                Ke = function (e) {
                  if (!ze(e)) {
                    var t = e.clientX,
                      n = e.clientY,
                      r = t - ke.x,
                      o = n - ke.y;
                    (ke.x = t), (ke.y = n), (be = !0), (r || o) && Le(r, o);
                  }
                },
                Ze = function (e) {
                  (ke.event = e), ee(ke);
                },
                $e = function (e) {
                  (ke.event = e), te(ke);
                },
                Je = function (e) {
                  return ze(e) || (z(e, x) && ue(ke));
                };
              (me = ke._dc = r.delayedCall(k || 0.25, Be).pause()),
                (ke.deltaX = ke.deltaY = 0),
                (ke._vx = X(0, 50, !0)),
                (ke._vy = X(0, 50, !0)),
                (ke.scrollX = Te),
                (ke.scrollY = Pe),
                (ke.isDragging = ke.isGesturing = ke.isPressed = !1),
                g(this),
                (ke.enable = function (e) {
                  return (
                    ke.isEnabled ||
                      (T(Ae ? Re : v, "scroll", O),
                      d.indexOf("scroll") >= 0 &&
                        T(Ae ? Re : v, "scroll", Ge, x, de),
                      d.indexOf("wheel") >= 0 && T(v, "wheel", je, x, de),
                      ((d.indexOf("touch") >= 0 && c) ||
                        d.indexOf("pointer") >= 0) &&
                        (T(v, h[0], We, x, de),
                        T(Re, h[2], qe),
                        T(Re, h[3], qe),
                        pe && T(v, "click", Xe, !1, !0),
                        ue && T(v, "click", Je),
                        ie && T(Re, "gesturestart", Ve),
                        ae && T(Re, "gestureend", Ue),
                        ee && T(v, u + "enter", Ze),
                        te && T(v, u + "leave", $e),
                        ne && T(v, u + "move", Ke)),
                      (ke.isEnabled = !0),
                      e && e.type && We(e),
                      le && le(ke)),
                    ke
                  );
                }),
                (ke.disable = function () {
                  ke.isEnabled &&
                    (y.filter(function (e) {
                      return e !== ke && E(e.target);
                    }).length || P(Ae ? Re : v, "scroll", O),
                    ke.isPressed &&
                      (ke._vx.reset(),
                      ke._vy.reset(),
                      P(oe ? v : Re, h[1], He, !0)),
                    P(Ae ? Re : v, "scroll", Ge, de),
                    P(v, "wheel", je, de),
                    P(v, h[0], We, de),
                    P(Re, h[2], qe),
                    P(Re, h[3], qe),
                    P(v, "click", Xe, !0),
                    P(v, "click", Je),
                    P(Re, "gesturestart", Ve),
                    P(Re, "gestureend", Ue),
                    P(v, u + "enter", Ze),
                    P(v, u + "leave", $e),
                    P(v, u + "move", Ke),
                    (ke.isEnabled = ke.isPressed = ke.isDragging = !1),
                    ce && ce(ke));
                }),
                (ke.kill = ke.revert =
                  function () {
                    ke.disable();
                    var e = y.indexOf(ke);
                    e >= 0 && y.splice(e, 1), p === ke && (p = 0);
                  }),
                y.push(ke),
                oe && E(v) && (p = ke),
                ke.enable(C);
            }),
            n(e, [
              {
                key: "velocityX",
                get: function () {
                  return this._vx.getVelocity();
                },
              },
              {
                key: "velocityY",
                get: function () {
                  return this._vy.getVelocity();
                },
              },
            ]),
            e
          );
        })();
        (L.version = "3.11.5"),
          (L.create = function (e) {
            return new L(e);
          }),
          (L.register = N),
          (L.getAll = function () {
            return y.slice();
          }),
          (L.getById = function (e) {
            return y.filter(function (t) {
              return t.vars.id === e;
            })[0];
          }),
          v() && r.registerPlugin(L);
        var H,
          W,
          q,
          V,
          U,
          G,
          j,
          K,
          Z,
          $,
          J,
          Q,
          ee,
          te,
          ne,
          re,
          oe,
          ie,
          ae,
          se,
          le,
          ce,
          ue,
          fe,
          de,
          pe,
          he,
          ge,
          ve,
          me,
          ye,
          be,
          xe,
          we,
          _e = 1,
          ke = Date.now,
          Se = ke(),
          Ee = 0,
          Te = 0,
          Pe = function e() {
            return Te && requestAnimationFrame(e);
          },
          Me = function () {
            return (te = 1);
          },
          Ce = function () {
            return (te = 0);
          },
          Oe = function (e) {
            return e;
          },
          Ae = function (e) {
            return Math.round(1e5 * e) / 1e5 || 0;
          },
          Re = function () {
            return "undefined" !== typeof window;
          },
          De = function () {
            return H || (Re() && (H = window.gsap) && H.registerPlugin && H);
          },
          Ye = function (e) {
            return !!~j.indexOf(e);
          },
          Ie = function (e) {
            return (
              S(e, "getBoundingClientRect") ||
              (Ye(e)
                ? function () {
                    return (
                      (tn.width = q.innerWidth), (tn.height = q.innerHeight), tn
                    );
                  }
                : function () {
                    return ft(e);
                  })
            );
          },
          Xe = function (e, t, n) {
            var r = n.d,
              o = n.d2,
              i = n.a;
            return (i = S(e, "getBoundingClientRect"))
              ? function () {
                  return i()[r];
                }
              : function () {
                  return (t ? q["inner" + o] : e["client" + o]) || 0;
                };
          },
          ze = function (e, t) {
            return !t || ~x.indexOf(e)
              ? Ie(e)
              : function () {
                  return tn;
                };
          },
          Be = function (e, t) {
            var n = t.s,
              r = t.d2,
              o = t.d,
              i = t.a;
            return Math.max(
              0,
              (n = "scroll" + r) && (i = S(e, n))
                ? i() - Ie(e)()[o]
                : Ye(e)
                  ? (U[n] || G[n]) -
                    (q["inner" + r] || U["client" + r] || G["client" + r])
                  : e[n] - e["offset" + r],
            );
          },
          Fe = function (e, t) {
            for (var n = 0; n < ae.length; n += 3)
              (!t || ~t.indexOf(ae[n + 1])) && e(ae[n], ae[n + 1], ae[n + 2]);
          },
          Ne = function (e) {
            return "string" === typeof e;
          },
          Le = function (e) {
            return "function" === typeof e;
          },
          He = function (e) {
            return "number" === typeof e;
          },
          We = function (e) {
            return "object" === typeof e;
          },
          qe = function (e, t, n) {
            return e && e.progress(t ? 0 : 1) && n && e.pause();
          },
          Ve = function (e, t) {
            if (e.enabled) {
              var n = t(e);
              n && n.totalTime && (e.callbackAnimation = n);
            }
          },
          Ue = Math.abs,
          Ge = "left",
          je = "top",
          Ke = "right",
          Ze = "bottom",
          $e = "width",
          Je = "height",
          Qe = "Right",
          et = "Left",
          tt = "Top",
          nt = "Bottom",
          rt = "padding",
          ot = "margin",
          it = "Width",
          at = "Height",
          st = "px",
          lt = function (e) {
            return q.getComputedStyle(e);
          },
          ct = function (e) {
            var t = lt(e).position;
            e.style.position =
              "absolute" === t || "fixed" === t ? t : "relative";
          },
          ut = function (e, t) {
            for (var n in t) n in e || (e[n] = t[n]);
            return e;
          },
          ft = function (e, t) {
            var n =
                t &&
                "matrix(1, 0, 0, 1, 0, 0)" !== lt(e)[ne] &&
                H.to(e, {
                  x: 0,
                  y: 0,
                  xPercent: 0,
                  yPercent: 0,
                  rotation: 0,
                  rotationX: 0,
                  rotationY: 0,
                  scale: 1,
                  skewX: 0,
                  skewY: 0,
                }).progress(1),
              r = e.getBoundingClientRect();
            return n && n.progress(0).kill(), r;
          },
          dt = function (e, t) {
            var n = t.d2;
            return e["offset" + n] || e["client" + n] || 0;
          },
          pt = function (e) {
            var t,
              n = [],
              r = e.labels,
              o = e.duration();
            for (t in r) n.push(r[t] / o);
            return n;
          },
          ht = function (e) {
            return function (t) {
              return H.utils.snap(pt(e), t);
            };
          },
          gt = function (e) {
            var t = H.utils.snap(e),
              n =
                Array.isArray(e) &&
                e.slice(0).sort(function (e, t) {
                  return e - t;
                });
            return n
              ? function (e, r, o) {
                  var i;
                  if ((void 0 === o && (o = 0.001), !r)) return t(e);
                  if (r > 0) {
                    for (e -= o, i = 0; i < n.length; i++)
                      if (n[i] >= e) return n[i];
                    return n[i - 1];
                  }
                  for (i = n.length, e += o; i--; ) if (n[i] <= e) return n[i];
                  return n[0];
                }
              : function (n, r, o) {
                  void 0 === o && (o = 0.001);
                  var i = t(n);
                  return !r || Math.abs(i - n) < o || i - n < 0 === r < 0
                    ? i
                    : t(r < 0 ? n - e : n + e);
                };
          },
          vt = function (e) {
            return function (t, n) {
              return gt(pt(e))(t, n.direction);
            };
          },
          mt = function (e, t, n, r) {
            return n.split(",").forEach(function (n) {
              return e(t, n, r);
            });
          },
          yt = function (e, t, n, r, o) {
            return e.addEventListener(t, n, { passive: !r, capture: !!o });
          },
          bt = function (e, t, n, r) {
            return e.removeEventListener(t, n, !!r);
          },
          xt = function (e, t, n) {
            (n = n && n.wheelHandler) &&
              (e(t, "wheel", n), e(t, "touchmove", n));
          },
          wt = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal",
          },
          _t = { toggleActions: "play", anticipatePin: 0 },
          kt = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
          St = function (e, t) {
            if (Ne(e)) {
              var n = e.indexOf("="),
                r = ~n
                  ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1))
                  : 0;
              ~n &&
                (e.indexOf("%") > n && (r *= t / 100),
                (e = e.substr(0, n - 1))),
                (e =
                  r +
                  (e in kt
                    ? kt[e] * t
                    : ~e.indexOf("%")
                      ? (parseFloat(e) * t) / 100
                      : parseFloat(e) || 0));
            }
            return e;
          },
          Et = function (e, t, n, r, o, i, a, s) {
            var l = o.startColor,
              c = o.endColor,
              u = o.fontSize,
              f = o.indent,
              d = o.fontWeight,
              p = V.createElement("div"),
              h = Ye(n) || "fixed" === S(n, "pinType"),
              g = -1 !== e.indexOf("scroller"),
              v = h ? G : n,
              m = -1 !== e.indexOf("start"),
              y = m ? l : c,
              b =
                "border-color:" +
                y +
                ";font-size:" +
                u +
                ";color:" +
                y +
                ";font-weight:" +
                d +
                ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return (
              (b += "position:" + ((g || s) && h ? "fixed;" : "absolute;")),
              (g || s || !h) &&
                (b += (r === D ? Ke : Ze) + ":" + (i + parseFloat(f)) + "px;"),
              a &&
                (b +=
                  "box-sizing:border-box;text-align:left;width:" +
                  a.offsetWidth +
                  "px;"),
              (p._isStart = m),
              p.setAttribute(
                "class",
                "gsap-marker-" + e + (t ? " marker-" + t : ""),
              ),
              (p.style.cssText = b),
              (p.innerText = t || 0 === t ? e + "-" + t : e),
              v.children[0]
                ? v.insertBefore(p, v.children[0])
                : v.appendChild(p),
              (p._offset = p["offset" + r.op.d2]),
              Tt(p, 0, r, m),
              p
            );
          },
          Tt = function (e, t, n, r) {
            var o = { display: "block" },
              i = n[r ? "os2" : "p2"],
              a = n[r ? "p2" : "os2"];
            (e._isFlipped = r),
              (o[n.a + "Percent"] = r ? -100 : 0),
              (o[n.a] = r ? "1px" : 0),
              (o["border" + i + it] = 1),
              (o["border" + a + it] = 0),
              (o[n.p] = t + "px"),
              H.set(e, o);
          },
          Pt = [],
          Mt = {},
          Ct = function () {
            return ke() - Ee > 34 && (ye || (ye = requestAnimationFrame(Ut)));
          },
          Ot = function () {
            (!ue || !ue.isPressed || ue.startX > G.clientWidth) &&
              (b.cache++,
              ue ? ye || (ye = requestAnimationFrame(Ut)) : Ut(),
              Ee || Xt("scrollStart"),
              (Ee = ke()));
          },
          At = function () {
            (pe = q.innerWidth), (de = q.innerHeight);
          },
          Rt = function () {
            b.cache++,
              !ee &&
                !ce &&
                !V.fullscreenElement &&
                !V.webkitFullscreenElement &&
                (!fe ||
                  pe !== q.innerWidth ||
                  Math.abs(q.innerHeight - de) > 0.25 * q.innerHeight) &&
                K.restart(!0);
          },
          Dt = {},
          Yt = [],
          It = function e() {
            return bt(ln, "scrollEnd", e) || Wt(!0);
          },
          Xt = function (e) {
            return (
              (Dt[e] &&
                Dt[e].map(function (e) {
                  return e();
                })) ||
              Yt
            );
          },
          zt = [],
          Bt = function (e) {
            for (var t = 0; t < zt.length; t += 5)
              (!e || (zt[t + 4] && zt[t + 4].query === e)) &&
                ((zt[t].style.cssText = zt[t + 1]),
                zt[t].getBBox &&
                  zt[t].setAttribute("transform", zt[t + 2] || ""),
                (zt[t + 3].uncache = 1));
          },
          Ft = function (e, t) {
            var n;
            for (re = 0; re < Pt.length; re++)
              !(n = Pt[re]) ||
                (t && n._ctx !== t) ||
                (e ? n.kill(1) : n.revert(!0, !0));
            t && Bt(t), t || Xt("revert");
          },
          Nt = function (e, t) {
            b.cache++,
              (t || !be) &&
                b.forEach(function (e) {
                  return Le(e) && e.cacheID++ && (e.rec = 0);
                }),
              Ne(e) && (q.history.scrollRestoration = ve = e);
          },
          Lt = 0,
          Ht = function () {
            if (xe !== Lt) {
              var e = (xe = Lt);
              requestAnimationFrame(function () {
                return e === Lt && Wt(!0);
              });
            }
          },
          Wt = function (e, t) {
            if (!Ee || e) {
              (be = ln.isRefreshing = !0),
                b.forEach(function (e) {
                  return Le(e) && e.cacheID++ && (e.rec = e());
                });
              var n = Xt("refreshInit");
              se && ln.sort(),
                t || Ft(),
                b.forEach(function (e) {
                  Le(e) &&
                    (e.smooth && (e.target.style.scrollBehavior = "auto"),
                    e(0));
                }),
                Pt.slice(0).forEach(function (e) {
                  return e.refresh();
                }),
                Pt.forEach(function (e, t) {
                  if (e._subPinOffset && e.pin) {
                    var n = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                      r = e.pin[n];
                    e.revert(!0, 1),
                      e.adjustPinSpacing(e.pin[n] - r),
                      e.refresh();
                  }
                }),
                Pt.forEach(function (e) {
                  return (
                    "max" === e.vars.end &&
                    e.setPositions(
                      e.start,
                      Math.max(e.start + 1, Be(e.scroller, e._dir)),
                    )
                  );
                }),
                n.forEach(function (e) {
                  return e && e.render && e.render(-1);
                }),
                b.forEach(function (e) {
                  Le(e) &&
                    (e.smooth &&
                      requestAnimationFrame(function () {
                        return (e.target.style.scrollBehavior = "smooth");
                      }),
                    e.rec && e(e.rec));
                }),
                Nt(ve, 1),
                K.pause(),
                Lt++,
                (be = 2),
                Ut(2),
                Pt.forEach(function (e) {
                  return Le(e.vars.onRefresh) && e.vars.onRefresh(e);
                }),
                (be = ln.isRefreshing = !1),
                Xt("refresh");
            } else yt(ln, "scrollEnd", It);
          },
          qt = 0,
          Vt = 1,
          Ut = function (e) {
            if (!be || 2 === e) {
              (ln.isUpdating = !0), we && we.update(0);
              var t = Pt.length,
                n = ke(),
                r = n - Se >= 50,
                o = t && Pt[0].scroll();
              if (
                ((Vt = qt > o ? -1 : 1),
                be || (qt = o),
                r &&
                  (Ee && !te && n - Ee > 200 && ((Ee = 0), Xt("scrollEnd")),
                  (J = Se),
                  (Se = n)),
                Vt < 0)
              ) {
                for (re = t; re-- > 0; ) Pt[re] && Pt[re].update(0, r);
                Vt = 1;
              } else for (re = 0; re < t; re++) Pt[re] && Pt[re].update(0, r);
              ln.isUpdating = !1;
            }
            ye = 0;
          },
          Gt = [
            Ge,
            je,
            Ze,
            Ke,
            ot + nt,
            ot + Qe,
            ot + tt,
            ot + et,
            "display",
            "flexShrink",
            "float",
            "zIndex",
            "gridColumnStart",
            "gridColumnEnd",
            "gridRowStart",
            "gridRowEnd",
            "gridArea",
            "justifySelf",
            "alignSelf",
            "placeSelf",
            "order",
          ],
          jt = Gt.concat([
            $e,
            Je,
            "boxSizing",
            "max" + it,
            "max" + at,
            "position",
            ot,
            rt,
            rt + tt,
            rt + Qe,
            rt + nt,
            rt + et,
          ]),
          Kt = function (e, t, n) {
            Jt(n);
            var r = e._gsap;
            if (r.spacerIsNative) Jt(r.spacerState);
            else if (e._gsap.swappedIn) {
              var o = t.parentNode;
              o && (o.insertBefore(e, t), o.removeChild(t));
            }
            e._gsap.swappedIn = !1;
          },
          Zt = function (e, t, n, r) {
            if (!e._gsap.swappedIn) {
              for (var o, i = Gt.length, a = t.style, s = e.style; i--; )
                a[(o = Gt[i])] = n[o];
              (a.position =
                "absolute" === n.position ? "absolute" : "relative"),
                "inline" === n.display && (a.display = "inline-block"),
                (s[Ze] = s[Ke] = "auto"),
                (a.flexBasis = n.flexBasis || "auto"),
                (a.overflow = "visible"),
                (a.boxSizing = "border-box"),
                (a[$e] = dt(e, R) + st),
                (a[Je] = dt(e, D) + st),
                (a[rt] = s[ot] = s[je] = s[Ge] = "0"),
                Jt(r),
                (s[$e] = s["max" + it] = n[$e]),
                (s[Je] = s["max" + at] = n[Je]),
                (s[rt] = n[rt]),
                e.parentNode !== t &&
                  (e.parentNode.insertBefore(t, e), t.appendChild(e)),
                (e._gsap.swappedIn = !0);
            }
          },
          $t = /([A-Z])/g,
          Jt = function (e) {
            if (e) {
              var t,
                n,
                r = e.t.style,
                o = e.length,
                i = 0;
              for (
                (e.t._gsap || H.core.getCache(e.t)).uncache = 1;
                i < o;
                i += 2
              )
                (n = e[i + 1]),
                  (t = e[i]),
                  n
                    ? (r[t] = n)
                    : r[t] &&
                      r.removeProperty(t.replace($t, "-$1").toLowerCase());
            }
          },
          Qt = function (e) {
            for (var t = jt.length, n = e.style, r = [], o = 0; o < t; o++)
              r.push(jt[o], n[jt[o]]);
            return (r.t = e), r;
          },
          en = function (e, t, n) {
            for (var r, o = [], i = e.length, a = n ? 8 : 0; a < i; a += 2)
              (r = e[a]), o.push(r, r in t ? t[r] : e[a + 1]);
            return (o.t = e.t), o;
          },
          tn = { left: 0, top: 0 },
          nn = function (e, t, n, r, o, i, a, s, l, c, u, f, d) {
            Le(e) && (e = e(s)),
              Ne(e) &&
                "max" === e.substr(0, 3) &&
                (e = f + ("=" === e.charAt(4) ? St("0" + e.substr(3), n) : 0));
            var p,
              h,
              g,
              v = d ? d.time() : 0;
            if ((d && d.seek(0), He(e)))
              d &&
                (e = H.utils.mapRange(
                  d.scrollTrigger.start,
                  d.scrollTrigger.end,
                  0,
                  f,
                  e,
                )),
                a && Tt(a, n, r, !0);
            else {
              Le(t) && (t = t(s));
              var m,
                y,
                b,
                x,
                w = (e || "0").split(" ");
              (g = Y(t) || G),
                ((m = ft(g) || {}) && (m.left || m.top)) ||
                  "none" !== lt(g).display ||
                  ((x = g.style.display),
                  (g.style.display = "block"),
                  (m = ft(g)),
                  x
                    ? (g.style.display = x)
                    : g.style.removeProperty("display")),
                (y = St(w[0], m[r.d])),
                (b = St(w[1] || "0", n)),
                (e = m[r.p] - l[r.p] - c + y + o - b),
                a && Tt(a, b, r, n - b < 20 || (a._isStart && b > 20)),
                (n -= n - b);
            }
            if (i) {
              var _ = e + n,
                k = i._isStart;
              (p = "scroll" + r.d2),
                Tt(
                  i,
                  _,
                  r,
                  (k && _ > 20) ||
                    (!k &&
                      (u ? Math.max(G[p], U[p]) : i.parentNode[p]) <= _ + 1),
                ),
                u &&
                  ((l = ft(a)),
                  u && (i.style[r.op.p] = l[r.op.p] - r.op.m - i._offset + st));
            }
            return (
              d &&
                g &&
                ((p = ft(g)),
                d.seek(f),
                (h = ft(g)),
                (d._caScrollDist = p[r.p] - h[r.p]),
                (e = (e / d._caScrollDist) * f)),
              d && d.seek(v),
              d ? e : Math.round(e)
            );
          },
          rn = /(webkit|moz|length|cssText|inset)/i,
          on = function (e, t, n, r) {
            if (e.parentNode !== t) {
              var o,
                i,
                a = e.style;
              if (t === G) {
                for (o in ((e._stOrig = a.cssText), (i = lt(e))))
                  +o ||
                    rn.test(o) ||
                    !i[o] ||
                    "string" !== typeof a[o] ||
                    "0" === o ||
                    (a[o] = i[o]);
                (a.top = n), (a.left = r);
              } else a.cssText = e._stOrig;
              (H.core.getCache(e).uncache = 1), t.appendChild(e);
            }
          },
          an = function (e, t, n) {
            var r = t,
              o = r;
            return function (t) {
              var i = Math.round(e());
              return (
                i !== r &&
                  i !== o &&
                  Math.abs(i - r) > 3 &&
                  Math.abs(i - o) > 3 &&
                  ((t = i), n && n()),
                (o = r),
                (r = t),
                t
              );
            };
          },
          sn = function (e, t) {
            var n = I(e, t),
              r = "_scroll" + t.p2,
              o = function t(o, i, a, s, l) {
                var c = t.tween,
                  u = i.onComplete,
                  f = {};
                a = a || n();
                var d = an(n, a, function () {
                  c.kill(), (t.tween = 0);
                });
                return (
                  (l = (s && l) || 0),
                  (s = s || o - a),
                  c && c.kill(),
                  (i[r] = o),
                  (i.modifiers = f),
                  (f[r] = function () {
                    return d(a + s * c.ratio + l * c.ratio * c.ratio);
                  }),
                  (i.onUpdate = function () {
                    b.cache++, Ut();
                  }),
                  (i.onComplete = function () {
                    (t.tween = 0), u && u.call(c);
                  }),
                  (c = t.tween = H.to(e, i))
                );
              };
            return (
              (e[r] = n),
              (n.wheelHandler = function () {
                return o.tween && o.tween.kill() && (o.tween = 0);
              }),
              yt(e, "wheel", n.wheelHandler),
              ln.isTouch && yt(e, "touchmove", n.wheelHandler),
              o
            );
          },
          ln = (function () {
            function e(t, n) {
              W ||
                e.register(H) ||
                console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                this.init(t, n);
            }
            return (
              (e.prototype.init = function (t, n) {
                if (
                  ((this.progress = this.start = 0),
                  this.vars && this.kill(!0, !0),
                  Te)
                ) {
                  var r,
                    o,
                    i,
                    a,
                    s,
                    l,
                    c,
                    u,
                    f,
                    d,
                    p,
                    h,
                    g,
                    v,
                    m,
                    y,
                    w,
                    _,
                    k,
                    E,
                    T,
                    P,
                    M,
                    C,
                    O,
                    A,
                    X,
                    z,
                    B,
                    F,
                    N,
                    L,
                    W,
                    j,
                    K,
                    Q,
                    ne,
                    oe,
                    ie,
                    ae = (t = ut(
                      Ne(t) || He(t) || t.nodeType ? { trigger: t } : t,
                      _t,
                    )),
                    ce = ae.onUpdate,
                    ue = ae.toggleClass,
                    fe = ae.id,
                    de = ae.onToggle,
                    pe = ae.onRefresh,
                    he = ae.scrub,
                    ve = ae.trigger,
                    ye = ae.pin,
                    xe = ae.pinSpacing,
                    Se = ae.invalidateOnRefresh,
                    Pe = ae.anticipatePin,
                    Me = ae.onScrubComplete,
                    Ce = ae.onSnapComplete,
                    Re = ae.once,
                    De = ae.snap,
                    Ie = ae.pinReparent,
                    Fe = ae.pinSpacer,
                    Ge = ae.containerAnimation,
                    je = ae.fastScrollEnd,
                    Ke = ae.preventOverlaps,
                    Ze =
                      t.horizontal ||
                      (t.containerAnimation && !1 !== t.horizontal)
                        ? R
                        : D,
                    pt = !he && 0 !== he,
                    mt = Y(t.scroller || q),
                    xt = H.core.getCache(mt),
                    kt = Ye(mt),
                    Tt =
                      "fixed" ===
                      ("pinType" in t
                        ? t.pinType
                        : S(mt, "pinType") || (kt && "fixed")),
                    Ct = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                    At = pt && t.toggleActions.split(" "),
                    Dt = "markers" in t ? t.markers : _t.markers,
                    Yt = kt
                      ? 0
                      : parseFloat(lt(mt)["border" + Ze.p2 + it]) || 0,
                    Xt = this,
                    zt =
                      t.onRefreshInit &&
                      function () {
                        return t.onRefreshInit(Xt);
                      },
                    Bt = Xe(mt, kt, Ze),
                    Ft = ze(mt, kt),
                    Nt = 0,
                    Lt = 0,
                    Wt = I(mt, Ze);
                  if (
                    (ge(Xt),
                    (Xt._dir = Ze),
                    (Pe *= 45),
                    (Xt.scroller = mt),
                    (Xt.scroll = Ge ? Ge.time.bind(Ge) : Wt),
                    (a = Wt()),
                    (Xt.vars = t),
                    (n = n || t.animation),
                    "refreshPriority" in t &&
                      ((se = 1), -9999 === t.refreshPriority && (we = Xt)),
                    (xt.tweenScroll = xt.tweenScroll || {
                      top: sn(mt, D),
                      left: sn(mt, R),
                    }),
                    (Xt.tweenTo = r = xt.tweenScroll[Ze.p]),
                    (Xt.scrubDuration = function (e) {
                      (L = He(e) && e)
                        ? N
                          ? N.duration(e)
                          : (N = H.to(n, {
                              ease: "expo",
                              totalProgress: "+=0.001",
                              duration: L,
                              paused: !0,
                              onComplete: function () {
                                return Me && Me(Xt);
                              },
                            }))
                        : (N && N.progress(1).kill(), (N = 0));
                    }),
                    n &&
                      ((n.vars.lazy = !1),
                      n._initted ||
                        (!1 !== n.vars.immediateRender &&
                          !1 !== t.immediateRender &&
                          n.duration() &&
                          n.render(0, !0, !0)),
                      (Xt.animation = n.pause()),
                      (n.scrollTrigger = Xt),
                      Xt.scrubDuration(he),
                      N && N.resetTo && N.resetTo("totalProgress", 0),
                      (B = 0),
                      fe || (fe = n.vars.id)),
                    Pt.push(Xt),
                    De &&
                      ((We(De) && !De.push) || (De = { snapTo: De }),
                      "scrollBehavior" in G.style &&
                        H.set(kt ? [G, U] : mt, { scrollBehavior: "auto" }),
                      b.forEach(function (e) {
                        return (
                          Le(e) &&
                          e.target === (kt ? V.scrollingElement || U : mt) &&
                          (e.smooth = !1)
                        );
                      }),
                      (i = Le(De.snapTo)
                        ? De.snapTo
                        : "labels" === De.snapTo
                          ? ht(n)
                          : "labelsDirectional" === De.snapTo
                            ? vt(n)
                            : !1 !== De.directional
                              ? function (e, t) {
                                  return gt(De.snapTo)(
                                    e,
                                    ke() - Lt < 500 ? 0 : t.direction,
                                  );
                                }
                              : H.utils.snap(De.snapTo)),
                      (W = De.duration || { min: 0.1, max: 2 }),
                      (W = We(W) ? $(W.min, W.max) : $(W, W)),
                      (j = H.delayedCall(De.delay || L / 2 || 0.1, function () {
                        var e = Wt(),
                          t = ke() - Lt < 500,
                          o = r.tween;
                        if (
                          !(t || Math.abs(Xt.getVelocity()) < 10) ||
                          o ||
                          te ||
                          Nt === e
                        )
                          Xt.isActive && Nt !== e && j.restart(!0);
                        else {
                          var a = (e - l) / g,
                            s = n && !pt ? n.totalProgress() : a,
                            u = t ? 0 : ((s - F) / (ke() - J)) * 1e3 || 0,
                            f = H.utils.clamp(
                              -a,
                              1 - a,
                              (Ue(u / 2) * u) / 0.185,
                            ),
                            d = a + (!1 === De.inertia ? 0 : f),
                            p = $(0, 1, i(d, Xt)),
                            h = Math.round(l + p * g),
                            v = De,
                            m = v.onStart,
                            y = v.onInterrupt,
                            b = v.onComplete;
                          if (e <= c && e >= l && h !== e) {
                            if (o && !o._initted && o.data <= Ue(h - e)) return;
                            !1 === De.inertia && (f = p - a),
                              r(
                                h,
                                {
                                  duration: W(
                                    Ue(
                                      (0.185 * Math.max(Ue(d - s), Ue(p - s))) /
                                        u /
                                        0.05 || 0,
                                    ),
                                  ),
                                  ease: De.ease || "power3",
                                  data: Ue(h - e),
                                  onInterrupt: function () {
                                    return j.restart(!0) && y && y(Xt);
                                  },
                                  onComplete: function () {
                                    Xt.update(),
                                      (Nt = Wt()),
                                      (B = F =
                                        n && !pt
                                          ? n.totalProgress()
                                          : Xt.progress),
                                      Ce && Ce(Xt),
                                      b && b(Xt);
                                  },
                                },
                                e,
                                f * g,
                                h - e - f * g,
                              ),
                              m && m(Xt, r.tween);
                          }
                        }
                      }).pause())),
                    fe && (Mt[fe] = Xt),
                    (ie =
                      (ve = Xt.trigger = Y(ve || ye)) &&
                      ve._gsap &&
                      ve._gsap.stRevert) && (ie = ie(Xt)),
                    (ye = !0 === ye ? ve : Y(ye)),
                    Ne(ue) && (ue = { targets: ve, className: ue }),
                    ye &&
                      (!1 === xe ||
                        xe === ot ||
                        (xe =
                          !(
                            !xe &&
                            ye.parentNode &&
                            ye.parentNode.style &&
                            "flex" === lt(ye.parentNode).display
                          ) && rt),
                      (Xt.pin = ye),
                      (o = H.core.getCache(ye)).spacer
                        ? (v = o.pinState)
                        : (Fe &&
                            ((Fe = Y(Fe)) &&
                              !Fe.nodeType &&
                              (Fe = Fe.current || Fe.nativeElement),
                            (o.spacerIsNative = !!Fe),
                            Fe && (o.spacerState = Qt(Fe))),
                          (o.spacer = w = Fe || V.createElement("div")),
                          w.classList.add("pin-spacer"),
                          fe && w.classList.add("pin-spacer-" + fe),
                          (o.pinState = v = Qt(ye))),
                      !1 !== t.force3D && H.set(ye, { force3D: !0 }),
                      (Xt.spacer = w = o.spacer),
                      (z = lt(ye)),
                      (M = z[xe + Ze.os2]),
                      (k = H.getProperty(ye)),
                      (E = H.quickSetter(ye, Ze.a, st)),
                      Zt(ye, w, z),
                      (y = Qt(ye))),
                    Dt)
                  ) {
                    (h = We(Dt) ? ut(Dt, wt) : wt),
                      (d = Et("scroller-start", fe, mt, Ze, h, 0)),
                      (p = Et("scroller-end", fe, mt, Ze, h, 0, d)),
                      (_ = d["offset" + Ze.op.d2]);
                    var qt = Y(S(mt, "content") || mt);
                    (u = this.markerStart =
                      Et("start", fe, qt, Ze, h, _, 0, Ge)),
                      (f = this.markerEnd = Et("end", fe, qt, Ze, h, _, 0, Ge)),
                      Ge && (oe = H.quickSetter([u, f], Ze.a, st)),
                      Tt ||
                        (x.length && !0 === S(mt, "fixedMarkers")) ||
                        (ct(kt ? G : mt),
                        H.set([d, p], { force3D: !0 }),
                        (O = H.quickSetter(d, Ze.a, st)),
                        (X = H.quickSetter(p, Ze.a, st)));
                  }
                  if (Ge) {
                    var Ut = Ge.vars.onUpdate,
                      Gt = Ge.vars.onUpdateParams;
                    Ge.eventCallback("onUpdate", function () {
                      Xt.update(0, 0, 1), Ut && Ut.apply(Ge, Gt || []);
                    });
                  }
                  (Xt.previous = function () {
                    return Pt[Pt.indexOf(Xt) - 1];
                  }),
                    (Xt.next = function () {
                      return Pt[Pt.indexOf(Xt) + 1];
                    }),
                    (Xt.revert = function (e, t) {
                      if (!t) return Xt.kill(!0);
                      var r = !1 !== e || !Xt.enabled,
                        o = ee;
                      r !== Xt.isReverted &&
                        (r &&
                          ((Q = Math.max(Wt(), Xt.scroll.rec || 0)),
                          (K = Xt.progress),
                          (ne = n && n.progress())),
                        u &&
                          [u, f, d, p].forEach(function (e) {
                            return (e.style.display = r ? "none" : "block");
                          }),
                        r && ((ee = Xt), Xt.update(r)),
                        !ye ||
                          (Ie && Xt.isActive) ||
                          (r ? Kt(ye, w, v) : Zt(ye, w, lt(ye), C)),
                        r || Xt.update(r),
                        (ee = o),
                        (Xt.isReverted = r));
                    }),
                    (Xt.refresh = function (o, i) {
                      if ((!ee && Xt.enabled) || i)
                        if (ye && o && Ee) yt(e, "scrollEnd", It);
                        else {
                          !be && zt && zt(Xt),
                            (ee = Xt),
                            (Lt = ke()),
                            r.tween && (r.tween.kill(), (r.tween = 0)),
                            N && N.pause(),
                            Se && n && n.revert({ kill: !1 }).invalidate(),
                            Xt.isReverted || Xt.revert(!0, !0),
                            (Xt._subPinOffset = !1);
                          for (
                            var h,
                              b,
                              x,
                              _,
                              S,
                              E,
                              M,
                              O,
                              X,
                              z,
                              B,
                              F = Bt(),
                              L = Ft(),
                              W = Ge ? Ge.duration() : Be(mt, Ze),
                              q = g <= 0.01,
                              Z = 0,
                              $ = 0,
                              J = t.end,
                              te = t.endTrigger || ve,
                              re =
                                t.start ||
                                (0 !== t.start && ve
                                  ? ye
                                    ? "0 0"
                                    : "0 100%"
                                  : 0),
                              oe = (Xt.pinnedContainer =
                                t.pinnedContainer && Y(t.pinnedContainer)),
                              ie = (ve && Math.max(0, Pt.indexOf(Xt))) || 0,
                              ae = ie;
                            ae--;

                          )
                            (E = Pt[ae]).end || E.refresh(0, 1) || (ee = Xt),
                              !(M = E.pin) ||
                                (M !== ve && M !== ye && M !== oe) ||
                                E.isReverted ||
                                (z || (z = []), z.unshift(E), E.revert(!0, !0)),
                              E !== Pt[ae] && (ie--, ae--);
                          for (
                            Le(re) && (re = re(Xt)),
                              l =
                                nn(
                                  re,
                                  ve,
                                  F,
                                  Ze,
                                  Wt(),
                                  u,
                                  d,
                                  Xt,
                                  L,
                                  Yt,
                                  Tt,
                                  W,
                                  Ge,
                                ) || (ye ? -0.001 : 0),
                              Le(J) && (J = J(Xt)),
                              Ne(J) &&
                                !J.indexOf("+=") &&
                                (~J.indexOf(" ")
                                  ? (J = (Ne(re) ? re.split(" ")[0] : "") + J)
                                  : ((Z = St(J.substr(2), F)),
                                    (J = Ne(re)
                                      ? re
                                      : (Ge
                                          ? H.utils.mapRange(
                                              0,
                                              Ge.duration(),
                                              Ge.scrollTrigger.start,
                                              Ge.scrollTrigger.end,
                                              l,
                                            )
                                          : l) + Z),
                                    (te = ve))),
                              c =
                                Math.max(
                                  l,
                                  nn(
                                    J || (te ? "100% 0" : W),
                                    te,
                                    F,
                                    Ze,
                                    Wt() + Z,
                                    f,
                                    p,
                                    Xt,
                                    L,
                                    Yt,
                                    Tt,
                                    W,
                                    Ge,
                                  ),
                                ) || -0.001,
                              g = c - l || ((l -= 0.01) && 0.001),
                              Z = 0,
                              ae = ie;
                            ae--;

                          )
                            (M = (E = Pt[ae]).pin) &&
                              E.start - E._pinPush <= l &&
                              !Ge &&
                              E.end > 0 &&
                              ((h = E.end - E.start),
                              ((M === ve && E.start - E._pinPush < l) ||
                                M === oe) &&
                                !He(re) &&
                                (Z += h * (1 - E.progress)),
                              M === ye && ($ += h));
                          if (
                            ((l += Z),
                            (c += Z),
                            q &&
                              (K = H.utils.clamp(
                                0,
                                1,
                                H.utils.normalize(l, c, Q),
                              )),
                            (Xt._pinPush = $),
                            u &&
                              Z &&
                              (((h = {})[Ze.a] = "+=" + Z),
                              oe && (h[Ze.p] = "-=" + Wt()),
                              H.set([u, f], h)),
                            ye)
                          )
                            (h = lt(ye)),
                              (_ = Ze === D),
                              (x = Wt()),
                              (T = parseFloat(k(Ze.a)) + $),
                              !W &&
                                c > 1 &&
                                ((B = {
                                  style: (B = (
                                    kt ? V.scrollingElement || U : mt
                                  ).style),
                                  value: B["overflow" + Ze.a.toUpperCase()],
                                }).style["overflow" + Ze.a.toUpperCase()] =
                                  "scroll"),
                              Zt(ye, w, h),
                              (y = Qt(ye)),
                              (b = ft(ye, !0)),
                              (O = Tt && I(mt, _ ? R : D)()),
                              xe &&
                                (((C = [xe + Ze.os2, g + $ + st]).t = w),
                                (ae = xe === rt ? dt(ye, Ze) + g + $ : 0) &&
                                  C.push(Ze.d, ae + st),
                                Jt(C),
                                oe &&
                                  Pt.forEach(function (e) {
                                    e.pin === oe &&
                                      !1 !== e.vars.pinSpacing &&
                                      (e._subPinOffset = !0);
                                  }),
                                Tt && Wt(Q)),
                              Tt &&
                                (((S = {
                                  top: b.top + (_ ? x - l : O) + st,
                                  left: b.left + (_ ? O : x - l) + st,
                                  boxSizing: "border-box",
                                  position: "fixed",
                                })[$e] = S["max" + it] =
                                  Math.ceil(b.width) + st),
                                (S[Je] = S["max" + at] =
                                  Math.ceil(b.height) + st),
                                (S[ot] =
                                  S[ot + tt] =
                                  S[ot + Qe] =
                                  S[ot + nt] =
                                  S[ot + et] =
                                    "0"),
                                (S[rt] = h[rt]),
                                (S[rt + tt] = h[rt + tt]),
                                (S[rt + Qe] = h[rt + Qe]),
                                (S[rt + nt] = h[rt + nt]),
                                (S[rt + et] = h[rt + et]),
                                (m = en(v, S, Ie)),
                                be && Wt(0)),
                              n
                                ? ((X = n._initted),
                                  le(1),
                                  n.render(n.duration(), !0, !0),
                                  (P = k(Ze.a) - T + g + $),
                                  (A = Math.abs(g - P) > 1),
                                  Tt && A && m.splice(m.length - 2, 2),
                                  n.render(0, !0, !0),
                                  X || n.invalidate(!0),
                                  n.parent || n.totalTime(n.totalTime()),
                                  le(0))
                                : (P = g),
                              B &&
                                (B.value
                                  ? (B.style["overflow" + Ze.a.toUpperCase()] =
                                      B.value)
                                  : B.style.removeProperty("overflow-" + Ze.a));
                          else if (ve && Wt() && !Ge)
                            for (b = ve.parentNode; b && b !== G; )
                              b._pinOffset &&
                                ((l -= b._pinOffset), (c -= b._pinOffset)),
                                (b = b.parentNode);
                          z &&
                            z.forEach(function (e) {
                              return e.revert(!1, !0);
                            }),
                            (Xt.start = l),
                            (Xt.end = c),
                            (a = s = be ? Q : Wt()),
                            Ge || be || (a < Q && Wt(Q), (Xt.scroll.rec = 0)),
                            Xt.revert(!1, !0),
                            j &&
                              ((Nt = -1),
                              Xt.isActive && Wt(l + g * K),
                              j.restart(!0)),
                            (ee = 0),
                            n &&
                              pt &&
                              (n._initted || ne) &&
                              n.progress() !== ne &&
                              n.progress(ne, !0).render(n.time(), !0, !0),
                            (q || K !== Xt.progress || Ge) &&
                              (n &&
                                !pt &&
                                n.totalProgress(
                                  Ge && l < -0.001 && !K
                                    ? H.utils.normalize(l, c, 0)
                                    : K,
                                  !0,
                                ),
                              (Xt.progress = (a - l) / g === K ? 0 : K)),
                            ye &&
                              xe &&
                              (w._pinOffset = Math.round(Xt.progress * P)),
                            N && N.invalidate(),
                            pe && !be && pe(Xt);
                        }
                    }),
                    (Xt.getVelocity = function () {
                      return ((Wt() - s) / (ke() - J)) * 1e3 || 0;
                    }),
                    (Xt.endAnimation = function () {
                      qe(Xt.callbackAnimation),
                        n &&
                          (N
                            ? N.progress(1)
                            : n.paused()
                              ? pt || qe(n, Xt.direction < 0, 1)
                              : qe(n, n.reversed()));
                    }),
                    (Xt.labelToScroll = function (e) {
                      return (
                        (n &&
                          n.labels &&
                          (l || Xt.refresh() || l) +
                            (n.labels[e] / n.duration()) * g) ||
                        0
                      );
                    }),
                    (Xt.getTrailing = function (e) {
                      var t = Pt.indexOf(Xt),
                        n =
                          Xt.direction > 0
                            ? Pt.slice(0, t).reverse()
                            : Pt.slice(t + 1);
                      return (
                        Ne(e)
                          ? n.filter(function (t) {
                              return t.vars.preventOverlaps === e;
                            })
                          : n
                      ).filter(function (e) {
                        return Xt.direction > 0 ? e.end <= l : e.start >= c;
                      });
                    }),
                    (Xt.update = function (e, t, o) {
                      if (!Ge || o || e) {
                        var i,
                          u,
                          f,
                          p,
                          h,
                          v,
                          b,
                          x = !0 === be ? Q : Xt.scroll(),
                          _ = e ? 0 : (x - l) / g,
                          k = _ < 0 ? 0 : _ > 1 ? 1 : _ || 0,
                          S = Xt.progress;
                        if (
                          (t &&
                            ((s = a),
                            (a = Ge ? Wt() : x),
                            De &&
                              ((F = B),
                              (B = n && !pt ? n.totalProgress() : k))),
                          Pe &&
                            !k &&
                            ye &&
                            !ee &&
                            !_e &&
                            Ee &&
                            l < x + ((x - s) / (ke() - J)) * Pe &&
                            (k = 1e-4),
                          k !== S && Xt.enabled)
                        ) {
                          if (
                            ((p =
                              (h =
                                (i = Xt.isActive = !!k && k < 1) !==
                                (!!S && S < 1)) || !!k !== !!S),
                            (Xt.direction = k > S ? 1 : -1),
                            (Xt.progress = k),
                            p &&
                              !ee &&
                              ((u =
                                k && !S ? 0 : 1 === k ? 1 : 1 === S ? 2 : 3),
                              pt &&
                                ((f =
                                  (!h && "none" !== At[u + 1] && At[u + 1]) ||
                                  At[u]),
                                (b =
                                  n &&
                                  ("complete" === f ||
                                    "reset" === f ||
                                    f in n)))),
                            Ke &&
                              (h || b) &&
                              (b || he || !n) &&
                              (Le(Ke)
                                ? Ke(Xt)
                                : Xt.getTrailing(Ke).forEach(function (e) {
                                    return e.endAnimation();
                                  })),
                            pt ||
                              (!N || ee || _e
                                ? n && n.totalProgress(k, !!ee)
                                : (N._dp._time - N._start !== N._time &&
                                    N.render(N._dp._time - N._start),
                                  N.resetTo
                                    ? N.resetTo(
                                        "totalProgress",
                                        k,
                                        n._tTime / n._tDur,
                                      )
                                    : ((N.vars.totalProgress = k),
                                      N.invalidate().restart()))),
                            ye)
                          )
                            if ((e && xe && (w.style[xe + Ze.os2] = M), Tt)) {
                              if (p) {
                                if (
                                  ((v =
                                    !e &&
                                    k > S &&
                                    c + 1 > x &&
                                    x + 1 >= Be(mt, Ze)),
                                  Ie)
                                )
                                  if (e || (!i && !v)) on(ye, w);
                                  else {
                                    var C = ft(ye, !0),
                                      R = x - l;
                                    on(
                                      ye,
                                      G,
                                      C.top + (Ze === D ? R : 0) + st,
                                      C.left + (Ze === D ? 0 : R) + st,
                                    );
                                  }
                                Jt(i || v ? m : y),
                                  (A && k < 1 && i) ||
                                    E(T + (1 !== k || v ? 0 : P));
                              }
                            } else E(Ae(T + P * k));
                          De && !r.tween && !ee && !_e && j.restart(!0),
                            ue &&
                              (h || (Re && k && (k < 1 || !me))) &&
                              Z(ue.targets).forEach(function (e) {
                                return e.classList[i || Re ? "add" : "remove"](
                                  ue.className,
                                );
                              }),
                            ce && !pt && !e && ce(Xt),
                            p && !ee
                              ? (pt &&
                                  (b &&
                                    ("complete" === f
                                      ? n.pause().totalProgress(1)
                                      : "reset" === f
                                        ? n.restart(!0).pause()
                                        : "restart" === f
                                          ? n.restart(!0)
                                          : n[f]()),
                                  ce && ce(Xt)),
                                (!h && me) ||
                                  (de && h && Ve(Xt, de),
                                  Ct[u] && Ve(Xt, Ct[u]),
                                  Re &&
                                    (1 === k ? Xt.kill(!1, 1) : (Ct[u] = 0)),
                                  h ||
                                    (Ct[(u = 1 === k ? 1 : 3)] &&
                                      Ve(Xt, Ct[u]))),
                                je &&
                                  !i &&
                                  Math.abs(Xt.getVelocity()) >
                                    (He(je) ? je : 2500) &&
                                  (qe(Xt.callbackAnimation),
                                  N
                                    ? N.progress(1)
                                    : qe(n, "reverse" === f ? 1 : !k, 1)))
                              : pt && ce && !ee && ce(Xt);
                        }
                        if (X) {
                          var Y = Ge
                            ? (x / Ge.duration()) * (Ge._caScrollDist || 0)
                            : x;
                          O(Y + (d._isFlipped ? 1 : 0)), X(Y);
                        }
                        oe &&
                          oe((-x / Ge.duration()) * (Ge._caScrollDist || 0));
                      }
                    }),
                    (Xt.enable = function (t, n) {
                      Xt.enabled ||
                        ((Xt.enabled = !0),
                        yt(mt, "resize", Rt),
                        yt(kt ? V : mt, "scroll", Ot),
                        zt && yt(e, "refreshInit", zt),
                        !1 !== t &&
                          ((Xt.progress = K = 0), (a = s = Nt = Wt())),
                        !1 !== n && Xt.refresh());
                    }),
                    (Xt.getTween = function (e) {
                      return e && r ? r.tween : N;
                    }),
                    (Xt.setPositions = function (e, t) {
                      ye &&
                        ((T += e - l),
                        (P += t - e - g),
                        xe === rt && Xt.adjustPinSpacing(t - e - g)),
                        (Xt.start = l = e),
                        (Xt.end = c = t),
                        (g = t - e),
                        Xt.update();
                    }),
                    (Xt.adjustPinSpacing = function (e) {
                      if (C && e) {
                        var t = C.indexOf(Ze.d) + 1;
                        (C[t] = parseFloat(C[t]) + e + st),
                          (C[1] = parseFloat(C[1]) + e + st),
                          Jt(C);
                      }
                    }),
                    (Xt.disable = function (t, n) {
                      if (
                        Xt.enabled &&
                        (!1 !== t && Xt.revert(!0, !0),
                        (Xt.enabled = Xt.isActive = !1),
                        n || (N && N.pause()),
                        (Q = 0),
                        o && (o.uncache = 1),
                        zt && bt(e, "refreshInit", zt),
                        j &&
                          (j.pause(),
                          r.tween && r.tween.kill() && (r.tween = 0)),
                        !kt)
                      ) {
                        for (var i = Pt.length; i--; )
                          if (Pt[i].scroller === mt && Pt[i] !== Xt) return;
                        bt(mt, "resize", Rt), bt(mt, "scroll", Ot);
                      }
                    }),
                    (Xt.kill = function (e, r) {
                      Xt.disable(e, r),
                        N && !r && N.kill(),
                        fe && delete Mt[fe];
                      var i = Pt.indexOf(Xt);
                      i >= 0 && Pt.splice(i, 1),
                        i === re && Vt > 0 && re--,
                        (i = 0),
                        Pt.forEach(function (e) {
                          return e.scroller === Xt.scroller && (i = 1);
                        }),
                        i || be || (Xt.scroll.rec = 0),
                        n &&
                          ((n.scrollTrigger = null),
                          e && n.revert({ kill: !1 }),
                          r || n.kill()),
                        u &&
                          [u, f, d, p].forEach(function (e) {
                            return e.parentNode && e.parentNode.removeChild(e);
                          }),
                        we === Xt && (we = 0),
                        ye &&
                          (o && (o.uncache = 1),
                          (i = 0),
                          Pt.forEach(function (e) {
                            return e.pin === ye && i++;
                          }),
                          i || (o.spacer = 0)),
                        t.onKill && t.onKill(Xt);
                    }),
                    Xt.enable(!1, !1),
                    ie && ie(Xt),
                    n && n.add && !g
                      ? H.delayedCall(0.01, function () {
                          return l || c || Xt.refresh();
                        }) &&
                        (g = 0.01) &&
                        (l = c = 0)
                      : Xt.refresh(),
                    ye && Ht();
                } else this.update = this.refresh = this.kill = Oe;
              }),
              (e.register = function (t) {
                return (
                  W ||
                    ((H = t || De()),
                    Re() && window.document && e.enable(),
                    (W = Te)),
                  W
                );
              }),
              (e.defaults = function (e) {
                if (e) for (var t in e) _t[t] = e[t];
                return _t;
              }),
              (e.disable = function (e, t) {
                (Te = 0),
                  Pt.forEach(function (n) {
                    return n[t ? "kill" : "disable"](e);
                  }),
                  bt(q, "wheel", Ot),
                  bt(V, "scroll", Ot),
                  clearInterval(Q),
                  bt(V, "touchcancel", Oe),
                  bt(G, "touchstart", Oe),
                  mt(bt, V, "pointerdown,touchstart,mousedown", Me),
                  mt(bt, V, "pointerup,touchend,mouseup", Ce),
                  K.kill(),
                  Fe(bt);
                for (var n = 0; n < b.length; n += 3)
                  xt(bt, b[n], b[n + 1]), xt(bt, b[n], b[n + 2]);
              }),
              (e.enable = function () {
                if (
                  ((q = window),
                  (V = document),
                  (U = V.documentElement),
                  (G = V.body),
                  H &&
                    ((Z = H.utils.toArray),
                    ($ = H.utils.clamp),
                    (ge = H.core.context || Oe),
                    (le = H.core.suppressOverwrites || Oe),
                    (ve = q.history.scrollRestoration || "auto"),
                    (qt = q.pageYOffset),
                    H.core.globals("ScrollTrigger", e),
                    G))
                ) {
                  (Te = 1),
                    Pe(),
                    L.register(H),
                    (e.isTouch = L.isTouch),
                    (he =
                      L.isTouch &&
                      /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                    yt(q, "wheel", Ot),
                    (j = [q, V, U, G]),
                    H.matchMedia
                      ? ((e.matchMedia = function (e) {
                          var t,
                            n = H.matchMedia();
                          for (t in e) n.add(t, e[t]);
                          return n;
                        }),
                        H.addEventListener("matchMediaInit", function () {
                          return Ft();
                        }),
                        H.addEventListener("matchMediaRevert", function () {
                          return Bt();
                        }),
                        H.addEventListener("matchMedia", function () {
                          Wt(0, 1), Xt("matchMedia");
                        }),
                        H.matchMedia("(orientation: portrait)", function () {
                          return At(), At;
                        }))
                      : console.warn("Requires GSAP 3.11.0 or later"),
                    At(),
                    yt(V, "scroll", Ot);
                  var t,
                    n,
                    r = G.style,
                    o = r.borderTopStyle,
                    i = H.core.Animation.prototype;
                  for (
                    i.revert ||
                      Object.defineProperty(i, "revert", {
                        value: function () {
                          return this.time(-0.01, !0);
                        },
                      }),
                      r.borderTopStyle = "solid",
                      t = ft(G),
                      D.m = Math.round(t.top + D.sc()) || 0,
                      R.m = Math.round(t.left + R.sc()) || 0,
                      o
                        ? (r.borderTopStyle = o)
                        : r.removeProperty("border-top-style"),
                      Q = setInterval(Ct, 250),
                      H.delayedCall(0.5, function () {
                        return (_e = 0);
                      }),
                      yt(V, "touchcancel", Oe),
                      yt(G, "touchstart", Oe),
                      mt(yt, V, "pointerdown,touchstart,mousedown", Me),
                      mt(yt, V, "pointerup,touchend,mouseup", Ce),
                      ne = H.utils.checkPrefix("transform"),
                      jt.push(ne),
                      W = ke(),
                      K = H.delayedCall(0.2, Wt).pause(),
                      ae = [
                        V,
                        "visibilitychange",
                        function () {
                          var e = q.innerWidth,
                            t = q.innerHeight;
                          V.hidden
                            ? ((oe = e), (ie = t))
                            : (oe === e && ie === t) || Rt();
                        },
                        V,
                        "DOMContentLoaded",
                        Wt,
                        q,
                        "load",
                        Wt,
                        q,
                        "resize",
                        Rt,
                      ],
                      Fe(yt),
                      Pt.forEach(function (e) {
                        return e.enable(0, 1);
                      }),
                      n = 0;
                    n < b.length;
                    n += 3
                  )
                    xt(bt, b[n], b[n + 1]), xt(bt, b[n], b[n + 2]);
                }
              }),
              (e.config = function (t) {
                "limitCallbacks" in t && (me = !!t.limitCallbacks);
                var n = t.syncInterval;
                (n && clearInterval(Q)) || ((Q = n) && setInterval(Ct, n)),
                  "ignoreMobileResize" in t &&
                    (fe = 1 === e.isTouch && t.ignoreMobileResize),
                  "autoRefreshEvents" in t &&
                    (Fe(bt) || Fe(yt, t.autoRefreshEvents || "none"),
                    (ce = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
              }),
              (e.scrollerProxy = function (e, t) {
                var n = Y(e),
                  r = b.indexOf(n),
                  o = Ye(n);
                ~r && b.splice(r, o ? 6 : 2),
                  t && (o ? x.unshift(q, t, G, t, U, t) : x.unshift(n, t));
              }),
              (e.clearMatchMedia = function (e) {
                Pt.forEach(function (t) {
                  return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
                });
              }),
              (e.isInViewport = function (e, t, n) {
                var r = (Ne(e) ? Y(e) : e).getBoundingClientRect(),
                  o = r[n ? $e : Je] * t || 0;
                return n
                  ? r.right - o > 0 && r.left + o < q.innerWidth
                  : r.bottom - o > 0 && r.top + o < q.innerHeight;
              }),
              (e.positionInViewport = function (e, t, n) {
                Ne(e) && (e = Y(e));
                var r = e.getBoundingClientRect(),
                  o = r[n ? $e : Je],
                  i =
                    null == t
                      ? o / 2
                      : t in kt
                        ? kt[t] * o
                        : ~t.indexOf("%")
                          ? (parseFloat(t) * o) / 100
                          : parseFloat(t) || 0;
                return n
                  ? (r.left + i) / q.innerWidth
                  : (r.top + i) / q.innerHeight;
              }),
              (e.killAll = function (e) {
                if (
                  (Pt.slice(0).forEach(function (e) {
                    return "ScrollSmoother" !== e.vars.id && e.kill();
                  }),
                  !0 !== e)
                ) {
                  var t = Dt.killAll || [];
                  (Dt = {}),
                    t.forEach(function (e) {
                      return e();
                    });
                }
              }),
              e
            );
          })();
        (ln.version = "3.11.5"),
          (ln.saveStyles = function (e) {
            return e
              ? Z(e).forEach(function (e) {
                  if (e && e.style) {
                    var t = zt.indexOf(e);
                    t >= 0 && zt.splice(t, 5),
                      zt.push(
                        e,
                        e.style.cssText,
                        e.getBBox && e.getAttribute("transform"),
                        H.core.getCache(e),
                        ge(),
                      );
                  }
                })
              : zt;
          }),
          (ln.revert = function (e, t) {
            return Ft(!e, t);
          }),
          (ln.create = function (e, t) {
            return new ln(e, t);
          }),
          (ln.refresh = function (e) {
            return e ? Rt() : (W || ln.register()) && Wt(!0);
          }),
          (ln.update = function (e) {
            return ++b.cache && Ut(!0 === e ? 2 : 0);
          }),
          (ln.clearScrollMemory = Nt),
          (ln.maxScroll = function (e, t) {
            return Be(e, t ? R : D);
          }),
          (ln.getScrollFunc = function (e, t) {
            return I(Y(e), t ? R : D);
          }),
          (ln.getById = function (e) {
            return Mt[e];
          }),
          (ln.getAll = function () {
            return Pt.filter(function (e) {
              return "ScrollSmoother" !== e.vars.id;
            });
          }),
          (ln.isScrolling = function () {
            return !!Ee;
          }),
          (ln.snapDirectional = gt),
          (ln.addEventListener = function (e, t) {
            var n = Dt[e] || (Dt[e] = []);
            ~n.indexOf(t) || n.push(t);
          }),
          (ln.removeEventListener = function (e, t) {
            var n = Dt[e],
              r = n && n.indexOf(t);
            r >= 0 && n.splice(r, 1);
          }),
          (ln.batch = function (e, t) {
            var n,
              r = [],
              o = {},
              i = t.interval || 0.016,
              a = t.batchMax || 1e9,
              s = function (e, t) {
                var n = [],
                  r = [],
                  o = H.delayedCall(i, function () {
                    t(n, r), (n = []), (r = []);
                  }).pause();
                return function (e) {
                  n.length || o.restart(!0),
                    n.push(e.trigger),
                    r.push(e),
                    a <= n.length && o.progress(1);
                };
              };
            for (n in t)
              o[n] =
                "on" === n.substr(0, 2) && Le(t[n]) && "onRefreshInit" !== n
                  ? s(n, t[n])
                  : t[n];
            return (
              Le(a) &&
                ((a = a()),
                yt(ln, "refresh", function () {
                  return (a = t.batchMax());
                })),
              Z(e).forEach(function (e) {
                var t = {};
                for (n in o) t[n] = o[n];
                (t.trigger = e), r.push(ln.create(t));
              }),
              r
            );
          });
        var cn,
          un = function (e, t, n, r) {
            return (
              t > r ? e(r) : t < 0 && e(0),
              n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
            );
          },
          fn = function e(t, n) {
            !0 === n
              ? t.style.removeProperty("touch-action")
              : (t.style.touchAction =
                  !0 === n
                    ? "auto"
                    : n
                      ? "pan-" + n + (L.isTouch ? " pinch-zoom" : "")
                      : "none"),
              t === U && e(G, n);
          },
          dn = { auto: 1, scroll: 1 },
          pn = function (e) {
            var t,
              n = e.event,
              r = e.target,
              o = e.axis,
              i = (n.changedTouches ? n.changedTouches[0] : n).target,
              a = i._gsap || H.core.getCache(i),
              s = ke();
            if (!a._isScrollT || s - a._isScrollT > 2e3) {
              for (
                ;
                i &&
                i !== G &&
                ((i.scrollHeight <= i.clientHeight &&
                  i.scrollWidth <= i.clientWidth) ||
                  (!dn[(t = lt(i)).overflowY] && !dn[t.overflowX]));

              )
                i = i.parentNode;
              (a._isScroll =
                i &&
                i !== r &&
                !Ye(i) &&
                (dn[(t = lt(i)).overflowY] || dn[t.overflowX])),
                (a._isScrollT = s);
            }
            (a._isScroll || "x" === o) &&
              (n.stopPropagation(), (n._gsapAllow = !0));
          },
          hn = function (e, t, n, r) {
            return L.create({
              target: e,
              capture: !0,
              debounce: !1,
              lockAxis: !0,
              type: t,
              onWheel: (r = r && pn),
              onPress: r,
              onDrag: r,
              onScroll: r,
              onEnable: function () {
                return n && yt(V, L.eventTypes[0], vn, !1, !0);
              },
              onDisable: function () {
                return bt(V, L.eventTypes[0], vn, !0);
              },
            });
          },
          gn = /(input|label|select|textarea)/i,
          vn = function (e) {
            var t = gn.test(e.target.tagName);
            (t || cn) && ((e._gsapAllow = !0), (cn = t));
          },
          mn = function (e) {
            We(e) || (e = {}),
              (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
              e.type || (e.type = "wheel,touch"),
              (e.debounce = !!e.debounce),
              (e.id = e.id || "normalizer");
            var t,
              n,
              r,
              o,
              i,
              a,
              s,
              l,
              c = e,
              u = c.normalizeScrollX,
              f = c.momentum,
              d = c.allowNestedScroll,
              p = c.onRelease,
              h = Y(e.target) || U,
              g = H.core.globals().ScrollSmoother,
              v = g && g.get(),
              m =
                he &&
                ((e.content && Y(e.content)) ||
                  (v && !1 !== e.content && !v.smooth() && v.content())),
              y = I(h, D),
              x = I(h, R),
              w = 1,
              _ =
                (L.isTouch && q.visualViewport
                  ? q.visualViewport.scale * q.visualViewport.width
                  : q.outerWidth) / q.innerWidth,
              k = 0,
              S = Le(f)
                ? function () {
                    return f(t);
                  }
                : function () {
                    return f || 2.8;
                  },
              E = hn(h, e.type, !0, d),
              T = function () {
                return (o = !1);
              },
              P = Oe,
              M = Oe,
              C = function () {
                (n = Be(h, D)),
                  (M = $(he ? 1 : 0, n)),
                  u && (P = $(0, Be(h, R))),
                  (r = Lt);
              },
              O = function () {
                (m._gsap.y = Ae(parseFloat(m._gsap.y) + y.offset) + "px"),
                  (m.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    parseFloat(m._gsap.y) +
                    ", 0, 1)"),
                  (y.offset = y.cacheID = 0);
              },
              A = function () {
                if (o) {
                  requestAnimationFrame(T);
                  var e = Ae(t.deltaY / 2),
                    n = M(y.v - e);
                  if (m && n !== y.v + y.offset) {
                    y.offset = n - y.v;
                    var r = Ae((parseFloat(m && m._gsap.y) || 0) - y.offset);
                    (m.style.transform =
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                      r +
                      ", 0, 1)"),
                      (m._gsap.y = r + "px"),
                      (y.cacheID = b.cache),
                      Ut();
                  }
                  return !0;
                }
                y.offset && O(), (o = !0);
              },
              X = function () {
                C(),
                  i.isActive() &&
                    i.vars.scrollY > n &&
                    (y() > n ? i.progress(1) && y(n) : i.resetTo("scrollY", n));
              };
            return (
              m && H.set(m, { y: "+=0" }),
              (e.ignoreCheck = function (e) {
                return (
                  (he && "touchmove" === e.type && A()) ||
                  (w > 1.05 && "touchstart" !== e.type) ||
                  t.isGesturing ||
                  (e.touches && e.touches.length > 1)
                );
              }),
              (e.onPress = function () {
                o = !1;
                var e = w;
                (w = Ae(
                  ((q.visualViewport && q.visualViewport.scale) || 1) / _,
                )),
                  i.pause(),
                  e !== w && fn(h, w > 1.01 || (!u && "x")),
                  (a = x()),
                  (s = y()),
                  C(),
                  (r = Lt);
              }),
              (e.onRelease = e.onGestureStart =
                function (e, t) {
                  if ((y.offset && O(), t)) {
                    b.cache++;
                    var r,
                      o,
                      a = S();
                    u &&
                      ((o = (r = x()) + (0.05 * a * -e.velocityX) / 0.227),
                      (a *= un(x, r, o, Be(h, R))),
                      (i.vars.scrollX = P(o))),
                      (o = (r = y()) + (0.05 * a * -e.velocityY) / 0.227),
                      (a *= un(y, r, o, Be(h, D))),
                      (i.vars.scrollY = M(o)),
                      i.invalidate().duration(a).play(0.01),
                      ((he && i.vars.scrollY >= n) || r >= n - 1) &&
                        H.to({}, { onUpdate: X, duration: a });
                  } else l.restart(!0);
                  p && p(e);
                }),
              (e.onWheel = function () {
                i._ts && i.pause(), ke() - k > 1e3 && ((r = 0), (k = ke()));
              }),
              (e.onChange = function (e, t, n, o, i) {
                if (
                  (Lt !== r && C(),
                  t &&
                    u &&
                    x(P(o[2] === t ? a + (e.startX - e.x) : x() + t - o[1])),
                  n)
                ) {
                  y.offset && O();
                  var l = i[2] === n,
                    c = l ? s + e.startY - e.y : y() + n - i[1],
                    f = M(c);
                  l && c !== f && (s += f - c), y(f);
                }
                (n || t) && Ut();
              }),
              (e.onEnable = function () {
                fn(h, !u && "x"),
                  ln.addEventListener("refresh", X),
                  yt(q, "resize", X),
                  y.smooth &&
                    ((y.target.style.scrollBehavior = "auto"),
                    (y.smooth = x.smooth = !1)),
                  E.enable();
              }),
              (e.onDisable = function () {
                fn(h, !0),
                  bt(q, "resize", X),
                  ln.removeEventListener("refresh", X),
                  E.kill();
              }),
              (e.lockAxis = !1 !== e.lockAxis),
              ((t = new L(e)).iOS = he),
              he && !y() && y(1),
              he && H.ticker.add(Oe),
              (l = t._dc),
              (i = H.to(t, {
                ease: "power4",
                paused: !0,
                scrollX: u ? "+=0.1" : "+=0",
                scrollY: "+=0.1",
                modifiers: {
                  scrollY: an(y, y(), function () {
                    return i.pause();
                  }),
                },
                onUpdate: Ut,
                onComplete: l.vars.onComplete,
              })),
              t
            );
          };
        (ln.sort = function (e) {
          return Pt.sort(
            e ||
              function (e, t) {
                return (
                  -1e6 * (e.vars.refreshPriority || 0) +
                  e.start -
                  (t.start + -1e6 * (t.vars.refreshPriority || 0))
                );
              },
          );
        }),
          (ln.observe = function (e) {
            return new L(e);
          }),
          (ln.normalizeScroll = function (e) {
            if ("undefined" === typeof e) return ue;
            if (!0 === e && ue) return ue.enable();
            if (!1 === e) return ue && ue.kill();
            var t = e instanceof L ? e : mn(e);
            return (
              ue && ue.target === t.target && ue.kill(),
              Ye(t.target) && (ue = t),
              t
            );
          }),
          (ln.core = {
            _getVelocityProp: X,
            _inputObserver: hn,
            _scrollers: b,
            _proxies: x,
            bridge: {
              ss: function () {
                Ee || Xt("scrollStart"), (Ee = ke());
              },
              ref: function () {
                return ee;
              },
            },
          }),
          De() && H.registerPlugin(ln),
          (e.ScrollTrigger = ln),
          (e.default = ln),
          "undefined" === typeof window || window !== e
            ? Object.defineProperty(e, "__esModule", { value: !0 })
            : delete window.default;
      })(t);
    },
  },
]);
