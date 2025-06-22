(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3433],
  {
    9521: function (t, e) {
      !(function (t) {
        "use strict";
        function e(t, e) {
          (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = e);
        }
        function r(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return t;
        }
        var i,
          n,
          s,
          a,
          o,
          u,
          h,
          f,
          l,
          c,
          p,
          _ = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: { lineHeight: "" },
          },
          d = { duration: 0.5, overwrite: !1, delay: 0 },
          m = 1e8,
          g = 1 / m,
          v = 2 * Math.PI,
          y = v / 4,
          T = 0,
          x = Math.sqrt,
          w = Math.cos,
          b = Math.sin,
          M = function (t) {
            return "string" === typeof t;
          },
          k = function (t) {
            return "function" === typeof t;
          },
          O = function (t) {
            return "number" === typeof t;
          },
          C = function (t) {
            return "undefined" === typeof t;
          },
          A = function (t) {
            return "object" === typeof t;
          },
          D = function (t) {
            return !1 !== t;
          },
          E = function () {
            return "undefined" !== typeof window;
          },
          P = function (t) {
            return k(t) || M(t);
          },
          S =
            ("function" === typeof ArrayBuffer && ArrayBuffer.isView) ||
            function () {},
          R = Array.isArray,
          z = /(?:-?\.?\d|\.)+/gi,
          F = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
          B = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
          L = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
          I = /[+-]=-?[.\d]+/,
          Y = /[^,'"\[\]\s]+/gi,
          N = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
          U = {},
          X = {},
          q = function (t) {
            return (X = yt(t, U)) && Br;
          },
          V = function (t, e) {
            return console.warn(
              "Invalid property",
              t,
              "set to",
              e,
              "Missing plugin? gsap.registerPlugin()",
            );
          },
          j = function (t, e) {
            return !e && console.warn(t);
          },
          Q = function (t, e) {
            return (t && (U[t] = e) && X && (X[t] = e)) || U;
          },
          G = function () {
            return 0;
          },
          W = { suppressEvents: !0, isStart: !0, kill: !1 },
          H = { suppressEvents: !0, kill: !1 },
          Z = { suppressEvents: !0 },
          $ = {},
          J = [],
          K = {},
          tt = {},
          et = {},
          rt = 30,
          it = [],
          nt = "",
          st = function (t) {
            var e,
              r,
              i = t[0];
            if ((A(i) || k(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
              for (r = it.length; r-- && !it[r].targetTest(i); );
              e = it[r];
            }
            for (r = t.length; r--; )
              (t[r] && (t[r]._gsap || (t[r]._gsap = new Ge(t[r], e)))) ||
                t.splice(r, 1);
            return t;
          },
          at = function (t) {
            return t._gsap || st(re(t))[0]._gsap;
          },
          ot = function (t, e, r) {
            return (r = t[e]) && k(r)
              ? t[e]()
              : (C(r) && t.getAttribute && t.getAttribute(e)) || r;
          },
          ut = function (t, e) {
            return (t = t.split(",")).forEach(e) || t;
          },
          ht = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0;
          },
          ft = function (t) {
            return Math.round(1e7 * t) / 1e7 || 0;
          },
          lt = function (t, e) {
            var r = e.charAt(0),
              i = parseFloat(e.substr(2));
            return (
              (t = parseFloat(t)),
              "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
            );
          },
          ct = function (t, e) {
            for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
            return i < r;
          },
          pt = function () {
            var t,
              e,
              r = J.length,
              i = J.slice(0);
            for (K = {}, J.length = 0, t = 0; t < r; t++)
              (e = i[t]) &&
                e._lazy &&
                (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
          },
          _t = function (t, e, r, i) {
            J.length && !n && pt(),
              t.render(e, r, i || (n && e < 0 && (t._initted || t._startAt))),
              J.length && !n && pt();
          },
          dt = function (t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(Y).length < 2
              ? e
              : M(t)
                ? t.trim()
                : t;
          },
          mt = function (t) {
            return t;
          },
          gt = function (t, e) {
            for (var r in e) r in t || (t[r] = e[r]);
            return t;
          },
          vt = function (t) {
            return function (e, r) {
              for (var i in r)
                i in e ||
                  ("duration" === i && t) ||
                  "ease" === i ||
                  (e[i] = r[i]);
            };
          },
          yt = function (t, e) {
            for (var r in e) t[r] = e[r];
            return t;
          },
          Tt = function t(e, r) {
            for (var i in r)
              "__proto__" !== i &&
                "constructor" !== i &&
                "prototype" !== i &&
                (e[i] = A(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
            return e;
          },
          xt = function (t, e) {
            var r,
              i = {};
            for (r in t) r in e || (i[r] = t[r]);
            return i;
          },
          wt = function (t) {
            var e = t.parent || a,
              r = t.keyframes ? vt(R(t.keyframes)) : gt;
            if (D(t.inherit))
              for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
            return t;
          },
          bt = function (t, e) {
            for (
              var r = t.length, i = r === e.length;
              i && r-- && t[r] === e[r];

            );
            return r < 0;
          },
          Mt = function (t, e, r, i, n) {
            void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
            var s,
              a = t[i];
            if (n) for (s = e[n]; a && a[n] > s; ) a = a._prev;
            return (
              a
                ? ((e._next = a._next), (a._next = e))
                : ((e._next = t[r]), (t[r] = e)),
              e._next ? (e._next._prev = e) : (t[i] = e),
              (e._prev = a),
              (e.parent = e._dp = t),
              e
            );
          },
          kt = function (t, e, r, i) {
            void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
            var n = e._prev,
              s = e._next;
            n ? (n._next = s) : t[r] === e && (t[r] = s),
              s ? (s._prev = n) : t[i] === e && (t[i] = n),
              (e._next = e._prev = e.parent = null);
          },
          Ot = function (t, e) {
            t.parent &&
              (!e || t.parent.autoRemoveChildren) &&
              t.parent.remove(t),
              (t._act = 0);
          },
          Ct = function (t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
              for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
            return t;
          },
          At = function (t) {
            for (var e = t.parent; e && e.parent; )
              (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
          },
          Dt = function (t, e, r, i) {
            return (
              t._startAt &&
              (n
                ? t._startAt.revert(H)
                : (t.vars.immediateRender && !t.vars.autoRevert) ||
                  t._startAt.render(e, !0, i))
            );
          },
          Et = function t(e) {
            return !e || (e._ts && t(e.parent));
          },
          Pt = function (t) {
            return t._repeat
              ? St(t._tTime, (t = t.duration() + t._rDelay)) * t
              : 0;
          },
          St = function (t, e) {
            var r = Math.floor((t /= e));
            return t && r === t ? r - 1 : r;
          },
          Rt = function (t, e) {
            return (
              (t - e._start) * e._ts +
              (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
            );
          },
          zt = function (t) {
            return (t._end = ft(
              t._start + (t._tDur / Math.abs(t._ts || t._rts || g) || 0),
            ));
          },
          Ft = function (t, e) {
            var r = t._dp;
            return (
              r &&
                r.smoothChildTiming &&
                t._ts &&
                ((t._start = ft(
                  r._time -
                    (t._ts > 0
                      ? e / t._ts
                      : ((t._dirty ? t.totalDuration() : t._tDur) - e) /
                        -t._ts),
                )),
                zt(t),
                r._dirty || Ct(r, t)),
              t
            );
          },
          Bt = function (t, e) {
            var r;
            if (
              ((e._time || (e._initted && !e._dur)) &&
                ((r = Rt(t.rawTime(), e)),
                (!e._dur || Zt(0, e.totalDuration(), r) - e._tTime > g) &&
                  e.render(r, !0)),
              Ct(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
            ) {
              if (t._dur < t.duration())
                for (r = t; r._dp; )
                  r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
              t._zTime = -g;
            }
          },
          Lt = function (t, e, r, i) {
            return (
              e.parent && Ot(e),
              (e._start = ft(
                (O(r) ? r : r || t !== a ? Gt(t, r, e) : t._time) + e._delay,
              )),
              (e._end = ft(
                e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0),
              )),
              Mt(t, e, "_first", "_last", t._sort ? "_start" : 0),
              Ut(e) || (t._recent = e),
              i || Bt(t, e),
              t._ts < 0 && Ft(t, t._tTime),
              t
            );
          },
          It = function (t, e) {
            return (
              (U.ScrollTrigger || V("scrollTrigger", e)) &&
              U.ScrollTrigger.create(e, t)
            );
          },
          Yt = function (t, e, r, i, s) {
            return (
              rr(t, e, s),
              t._initted
                ? !r &&
                  t._pt &&
                  !n &&
                  ((t._dur && !1 !== t.vars.lazy) ||
                    (!t._dur && t.vars.lazy)) &&
                  l !== Se.frame
                  ? (J.push(t), (t._lazy = [s, i]), 1)
                  : void 0
                : 1
            );
          },
          Nt = function t(e) {
            var r = e.parent;
            return (
              r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
            );
          },
          Ut = function (t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e;
          },
          Xt = function (t, e, r, i) {
            var s,
              a,
              o,
              u = t.ratio,
              h =
                e < 0 ||
                (!e &&
                  ((!t._start && Nt(t) && (t._initted || !Ut(t))) ||
                    ((t._ts < 0 || t._dp._ts < 0) && !Ut(t))))
                  ? 0
                  : 1,
              f = t._rDelay,
              l = 0;
            if (
              (f &&
                t._repeat &&
                ((l = Zt(0, t._tDur, e)),
                (a = St(l, f)),
                t._yoyo && 1 & a && (h = 1 - h),
                a !== St(t._tTime, f) &&
                  ((u = 1 - h),
                  t.vars.repeatRefresh && t._initted && t.invalidate())),
              h !== u || n || i || t._zTime === g || (!e && t._zTime))
            ) {
              if (!t._initted && Yt(t, e, i, r, l)) return;
              for (
                o = t._zTime,
                  t._zTime = e || (r ? g : 0),
                  r || (r = e && !o),
                  t.ratio = h,
                  t._from && (h = 1 - h),
                  t._time = 0,
                  t._tTime = l,
                  s = t._pt;
                s;

              )
                s.r(h, s.d), (s = s._next);
              e < 0 && Dt(t, e, r, !0),
                t._onUpdate && !r && ye(t, "onUpdate"),
                l && t._repeat && !r && t.parent && ye(t, "onRepeat"),
                (e >= t._tDur || e < 0) &&
                  t.ratio === h &&
                  (h && Ot(t, 1),
                  r ||
                    n ||
                    (ye(t, h ? "onComplete" : "onReverseComplete", !0),
                    t._prom && t._prom()));
            } else t._zTime || (t._zTime = e);
          },
          qt = function (t, e, r) {
            var i;
            if (r > e)
              for (i = t._first; i && i._start <= r; ) {
                if ("isPause" === i.data && i._start > e) return i;
                i = i._next;
              }
            else
              for (i = t._last; i && i._start >= r; ) {
                if ("isPause" === i.data && i._start < e) return i;
                i = i._prev;
              }
          },
          Vt = function (t, e, r, i) {
            var n = t._repeat,
              s = ft(e) || 0,
              a = t._tTime / t._tDur;
            return (
              a && !i && (t._time *= s / t._dur),
              (t._dur = s),
              (t._tDur = n
                ? n < 0
                  ? 1e10
                  : ft(s * (n + 1) + t._rDelay * n)
                : s),
              a > 0 && !i && Ft(t, (t._tTime = t._tDur * a)),
              t.parent && zt(t),
              r || Ct(t.parent, t),
              t
            );
          },
          jt = function (t) {
            return t instanceof He ? Ct(t) : Vt(t, t._dur);
          },
          Qt = { _start: 0, endTime: G, totalDuration: G },
          Gt = function t(e, r, i) {
            var n,
              s,
              a,
              o = e.labels,
              u = e._recent || Qt,
              h = e.duration() >= m ? u.endTime(!1) : e._dur;
            return M(r) && (isNaN(r) || r in o)
              ? ((s = r.charAt(0)),
                (a = "%" === r.substr(-1)),
                (n = r.indexOf("=")),
                "<" === s || ">" === s
                  ? (n >= 0 && (r = r.replace(/=/, "")),
                    ("<" === s ? u._start : u.endTime(u._repeat >= 0)) +
                      (parseFloat(r.substr(1)) || 0) *
                        (a ? (n < 0 ? u : i).totalDuration() / 100 : 1))
                  : n < 0
                    ? (r in o || (o[r] = h), o[r])
                    : ((s = parseFloat(r.charAt(n - 1) + r.substr(n + 1))),
                      a &&
                        i &&
                        (s = (s / 100) * (R(i) ? i[0] : i).totalDuration()),
                      n > 1 ? t(e, r.substr(0, n - 1), i) + s : h + s))
              : null == r
                ? h
                : +r;
          },
          Wt = function (t, e, r) {
            var i,
              n,
              s = O(e[1]),
              a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
              o = e[a];
            if ((s && (o.duration = e[1]), (o.parent = r), t)) {
              for (i = o, n = r; n && !("immediateRender" in i); )
                (i = n.vars.defaults || {}),
                  (n = D(n.vars.inherit) && n.parent);
              (o.immediateRender = D(i.immediateRender)),
                t < 2 ? (o.runBackwards = 1) : (o.startAt = e[a - 1]);
            }
            return new hr(e[0], o, e[a + 1]);
          },
          Ht = function (t, e) {
            return t || 0 === t ? e(t) : e;
          },
          Zt = function (t, e, r) {
            return r < t ? t : r > e ? e : r;
          },
          $t = function (t, e) {
            return M(t) && (e = N.exec(t)) ? e[1] : "";
          },
          Jt = function (t, e, r) {
            return Ht(r, function (r) {
              return Zt(t, e, r);
            });
          },
          Kt = [].slice,
          te = function (t, e) {
            return (
              t &&
              A(t) &&
              "length" in t &&
              ((!e && !t.length) || (t.length - 1 in t && A(t[0]))) &&
              !t.nodeType &&
              t !== o
            );
          },
          ee = function (t, e, r) {
            return (
              void 0 === r && (r = []),
              t.forEach(function (t) {
                var i;
                return (M(t) && !e) || te(t, 1)
                  ? (i = r).push.apply(i, re(t))
                  : r.push(t);
              }) || r
            );
          },
          re = function (t, e, r) {
            return s && !e && s.selector
              ? s.selector(t)
              : !M(t) || r || (!u && Re())
                ? R(t)
                  ? ee(t, r)
                  : te(t)
                    ? Kt.call(t, 0)
                    : t
                      ? [t]
                      : []
                : Kt.call((e || h).querySelectorAll(t), 0);
          },
          ie = function (t) {
            return (
              (t = re(t)[0] || j("Invalid scope") || {}),
              function (e) {
                var r = t.current || t.nativeElement || t;
                return re(
                  e,
                  r.querySelectorAll
                    ? r
                    : r === t
                      ? j("Invalid scope") || h.createElement("div")
                      : t,
                );
              }
            );
          },
          ne = function (t) {
            return t.sort(function () {
              return 0.5 - Math.random();
            });
          },
          se = function (t) {
            if (k(t)) return t;
            var e = A(t) ? t : { each: t },
              r = Xe(e.ease),
              i = e.from || 0,
              n = parseFloat(e.base) || 0,
              s = {},
              a = i > 0 && i < 1,
              o = isNaN(i) || a,
              u = e.axis,
              h = i,
              f = i;
            return (
              M(i)
                ? (h = f = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
                : !a && o && ((h = i[0]), (f = i[1])),
              function (t, a, l) {
                var c,
                  p,
                  _,
                  d,
                  g,
                  v,
                  y,
                  T,
                  w,
                  b = (l || e).length,
                  M = s[b];
                if (!M) {
                  if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, m])[1])) {
                    for (
                      y = -m;
                      y < (y = l[w++].getBoundingClientRect().left) && w < b;

                    );
                    w--;
                  }
                  for (
                    M = s[b] = [],
                      c = o ? Math.min(w, b) * h - 0.5 : i % w,
                      p = w === m ? 0 : o ? (b * f) / w - 0.5 : (i / w) | 0,
                      y = 0,
                      T = m,
                      v = 0;
                    v < b;
                    v++
                  )
                    (_ = (v % w) - c),
                      (d = p - ((v / w) | 0)),
                      (M[v] = g =
                        u ? Math.abs("y" === u ? d : _) : x(_ * _ + d * d)),
                      g > y && (y = g),
                      g < T && (T = g);
                  "random" === i && ne(M),
                    (M.max = y - T),
                    (M.min = T),
                    (M.v = b =
                      (parseFloat(e.amount) ||
                        parseFloat(e.each) *
                          (w > b
                            ? b - 1
                            : u
                              ? "y" === u
                                ? b / w
                                : w
                              : Math.max(w, b / w)) ||
                        0) * ("edges" === i ? -1 : 1)),
                    (M.b = b < 0 ? n - b : n),
                    (M.u = $t(e.amount || e.each) || 0),
                    (r = r && b < 0 ? Ne(r) : r);
                }
                return (
                  (b = (M[t] - M.min) / M.max || 0),
                  ft(M.b + (r ? r(b) : b) * M.v) + M.u
                );
              }
            );
          },
          ae = function (t) {
            var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
            return function (r) {
              var i = ft(Math.round(parseFloat(r) / t) * t * e);
              return (i - (i % 1)) / e + (O(r) ? 0 : $t(r));
            };
          },
          oe = function (t, e) {
            var r,
              i,
              n = R(t);
            return (
              !n &&
                A(t) &&
                ((r = n = t.radius || m),
                t.values
                  ? ((t = re(t.values)), (i = !O(t[0])) && (r *= r))
                  : (t = ae(t.increment))),
              Ht(
                e,
                n
                  ? k(t)
                    ? function (e) {
                        return (i = t(e)), Math.abs(i - e) <= r ? i : e;
                      }
                    : function (e) {
                        for (
                          var n,
                            s,
                            a = parseFloat(i ? e.x : e),
                            o = parseFloat(i ? e.y : 0),
                            u = m,
                            h = 0,
                            f = t.length;
                          f--;

                        )
                          (n = i
                            ? (n = t[f].x - a) * n + (s = t[f].y - o) * s
                            : Math.abs(t[f] - a)) < u && ((u = n), (h = f));
                        return (
                          (h = !r || u <= r ? t[h] : e),
                          i || h === e || O(e) ? h : h + $t(e)
                        );
                      }
                  : ae(t),
              )
            );
          },
          ue = function (t, e, r, i) {
            return Ht(R(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
              return R(t)
                ? t[~~(Math.random() * t.length)]
                : (r = r || 1e-5) &&
                    (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
                    Math.floor(
                      Math.round(
                        (t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r,
                      ) *
                        r *
                        i,
                    ) / i;
            });
          },
          he = function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            return function (t) {
              return e.reduce(function (t, e) {
                return e(t);
              }, t);
            };
          },
          fe = function (t, e) {
            return function (r) {
              return t(parseFloat(r)) + (e || $t(r));
            };
          },
          le = function (t, e, r) {
            return me(t, e, 0, 1, r);
          },
          ce = function (t, e, r) {
            return Ht(r, function (r) {
              return t[~~e(r)];
            });
          },
          pe = function t(e, r, i) {
            var n = r - e;
            return R(e)
              ? ce(e, t(0, e.length), r)
              : Ht(i, function (t) {
                  return ((n + ((t - e) % n)) % n) + e;
                });
          },
          _e = function t(e, r, i) {
            var n = r - e,
              s = 2 * n;
            return R(e)
              ? ce(e, t(0, e.length - 1), r)
              : Ht(i, function (t) {
                  return (
                    e + ((t = (s + ((t - e) % s)) % s || 0) > n ? s - t : t)
                  );
                });
          },
          de = function (t) {
            for (
              var e, r, i, n, s = 0, a = "";
              ~(e = t.indexOf("random(", s));

            )
              (i = t.indexOf(")", e)),
                (n = "[" === t.charAt(e + 7)),
                (r = t.substr(e + 7, i - e - 7).match(n ? Y : z)),
                (a +=
                  t.substr(s, e - s) +
                  ue(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5)),
                (s = i + 1);
            return a + t.substr(s, t.length - s);
          },
          me = function (t, e, r, i, n) {
            var s = e - t,
              a = i - r;
            return Ht(n, function (e) {
              return r + (((e - t) / s) * a || 0);
            });
          },
          ge = function t(e, r, i, n) {
            var s = isNaN(e + r)
              ? 0
              : function (t) {
                  return (1 - t) * e + t * r;
                };
            if (!s) {
              var a,
                o,
                u,
                h,
                f,
                l = M(e),
                c = {};
              if ((!0 === i && (n = 1) && (i = null), l))
                (e = { p: e }), (r = { p: r });
              else if (R(e) && !R(r)) {
                for (u = [], h = e.length, f = h - 2, o = 1; o < h; o++)
                  u.push(t(e[o - 1], e[o]));
                h--,
                  (s = function (t) {
                    t *= h;
                    var e = Math.min(f, ~~t);
                    return u[e](t - e);
                  }),
                  (i = r);
              } else n || (e = yt(R(e) ? [] : {}, e));
              if (!u) {
                for (a in r) Ke.call(c, e, a, "get", r[a]);
                s = function (t) {
                  return vr(t, c) || (l ? e.p : e);
                };
              }
            }
            return Ht(i, s);
          },
          ve = function (t, e, r) {
            var i,
              n,
              s,
              a = t.labels,
              o = m;
            for (i in a)
              (n = a[i] - e) < 0 === !!r &&
                n &&
                o > (n = Math.abs(n)) &&
                ((s = i), (o = n));
            return s;
          },
          ye = function (t, e, r) {
            var i,
              n,
              a,
              o = t.vars,
              u = o[e],
              h = s,
              f = t._ctx;
            if (u)
              return (
                (i = o[e + "Params"]),
                (n = o.callbackScope || t),
                r && J.length && pt(),
                f && (s = f),
                (a = i ? u.apply(n, i) : u.call(n)),
                (s = h),
                a
              );
          },
          Te = function (t) {
            return (
              Ot(t),
              t.scrollTrigger && t.scrollTrigger.kill(!!n),
              t.progress() < 1 && ye(t, "onInterrupt"),
              t
            );
          },
          xe = [],
          we = function (t) {
            if (E()) {
              var e = (t = (!t.name && t.default) || t).name,
                r = k(t),
                i =
                  e && !r && t.init
                    ? function () {
                        this._props = [];
                      }
                    : t,
                n = {
                  init: G,
                  render: vr,
                  add: Ke,
                  kill: Tr,
                  modifier: yr,
                  rawVars: 0,
                },
                s = {
                  targetTest: 0,
                  get: 0,
                  getSetter: _r,
                  aliases: {},
                  register: 0,
                };
              if ((Re(), t !== i)) {
                if (tt[e]) return;
                gt(i, gt(xt(t, n), s)),
                  yt(i.prototype, yt(n, xt(t, s))),
                  (tt[(i.prop = e)] = i),
                  t.targetTest && (it.push(i), ($[e] = 1)),
                  (e =
                    ("css" === e
                      ? "CSS"
                      : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
              }
              Q(e, i), t.register && t.register(Br, i, br);
            } else xe.push(t);
          },
          be = 255,
          Me = {
            aqua: [0, be, be],
            lime: [0, be, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, be],
            navy: [0, 0, 128],
            white: [be, be, be],
            olive: [128, 128, 0],
            yellow: [be, be, 0],
            orange: [be, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [be, 0, 0],
            pink: [be, 192, 203],
            cyan: [0, be, be],
            transparent: [be, be, be, 0],
          },
          ke = function (t, e, r) {
            return (
              ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
                ? e + (r - e) * t * 6
                : t < 0.5
                  ? r
                  : 3 * t < 2
                    ? e + (r - e) * (2 / 3 - t) * 6
                    : e) *
                be +
                0.5) |
              0
            );
          },
          Oe = function (t, e, r) {
            var i,
              n,
              s,
              a,
              o,
              u,
              h,
              f,
              l,
              c,
              p = t ? (O(t) ? [t >> 16, (t >> 8) & be, t & be] : 0) : Me.black;
            if (!p) {
              if (
                ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Me[t])
              )
                p = Me[t];
              else if ("#" === t.charAt(0)) {
                if (
                  (t.length < 6 &&
                    ((i = t.charAt(1)),
                    (n = t.charAt(2)),
                    (s = t.charAt(3)),
                    (t =
                      "#" +
                      i +
                      i +
                      n +
                      n +
                      s +
                      s +
                      (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
                  9 === t.length)
                )
                  return [
                    (p = parseInt(t.substr(1, 6), 16)) >> 16,
                    (p >> 8) & be,
                    p & be,
                    parseInt(t.substr(7), 16) / 255,
                  ];
                p = [
                  (t = parseInt(t.substr(1), 16)) >> 16,
                  (t >> 8) & be,
                  t & be,
                ];
              } else if ("hsl" === t.substr(0, 3))
                if (((p = c = t.match(z)), e)) {
                  if (~t.indexOf("="))
                    return (p = t.match(F)), r && p.length < 4 && (p[3] = 1), p;
                } else
                  (a = (+p[0] % 360) / 360),
                    (o = +p[1] / 100),
                    (i =
                      2 * (u = +p[2] / 100) -
                      (n = u <= 0.5 ? u * (o + 1) : u + o - u * o)),
                    p.length > 3 && (p[3] *= 1),
                    (p[0] = ke(a + 1 / 3, i, n)),
                    (p[1] = ke(a, i, n)),
                    (p[2] = ke(a - 1 / 3, i, n));
              else p = t.match(z) || Me.transparent;
              p = p.map(Number);
            }
            return (
              e &&
                !c &&
                ((i = p[0] / be),
                (n = p[1] / be),
                (s = p[2] / be),
                (u = ((h = Math.max(i, n, s)) + (f = Math.min(i, n, s))) / 2),
                h === f
                  ? (a = o = 0)
                  : ((l = h - f),
                    (o = u > 0.5 ? l / (2 - h - f) : l / (h + f)),
                    (a =
                      h === i
                        ? (n - s) / l + (n < s ? 6 : 0)
                        : h === n
                          ? (s - i) / l + 2
                          : (i - n) / l + 4),
                    (a *= 60)),
                (p[0] = ~~(a + 0.5)),
                (p[1] = ~~(100 * o + 0.5)),
                (p[2] = ~~(100 * u + 0.5))),
              r && p.length < 4 && (p[3] = 1),
              p
            );
          },
          Ce = function (t) {
            var e = [],
              r = [],
              i = -1;
            return (
              t.split(De).forEach(function (t) {
                var n = t.match(B) || [];
                e.push.apply(e, n), r.push((i += n.length + 1));
              }),
              (e.c = r),
              e
            );
          },
          Ae = function (t, e, r) {
            var i,
              n,
              s,
              a,
              o = "",
              u = (t + o).match(De),
              h = e ? "hsla(" : "rgba(",
              f = 0;
            if (!u) return t;
            if (
              ((u = u.map(function (t) {
                return (
                  (t = Oe(t, e, 1)) &&
                  h +
                    (e
                      ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                      : t.join(",")) +
                    ")"
                );
              })),
              r && ((s = Ce(t)), (i = r.c).join(o) !== s.c.join(o)))
            )
              for (a = (n = t.replace(De, "1").split(B)).length - 1; f < a; f++)
                o +=
                  n[f] +
                  (~i.indexOf(f)
                    ? u.shift() || h + "0,0,0,0)"
                    : (s.length ? s : u.length ? u : r).shift());
            if (!n)
              for (a = (n = t.split(De)).length - 1; f < a; f++)
                o += n[f] + u[f];
            return o + n[a];
          },
          De = (function () {
            var t,
              e =
                "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in Me) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi");
          })(),
          Ee = /hsl[a]?\(/,
          Pe = function (t) {
            var e,
              r = t.join(" ");
            if (((De.lastIndex = 0), De.test(r)))
              return (
                (e = Ee.test(r)),
                (t[1] = Ae(t[1], e)),
                (t[0] = Ae(t[0], e, Ce(t[1]))),
                !0
              );
          },
          Se = (function () {
            var t,
              e,
              r,
              i,
              n,
              s,
              a = Date.now,
              l = 500,
              c = 33,
              _ = a(),
              d = _,
              m = 1e3 / 240,
              g = m,
              v = [],
              y = function r(o) {
                var u,
                  h,
                  f,
                  p,
                  y = a() - d,
                  T = !0 === o;
                if (
                  (y > l && (_ += y - c),
                  ((u = (f = (d += y) - _) - g) > 0 || T) &&
                    ((p = ++i.frame),
                    (n = f - 1e3 * i.time),
                    (i.time = f /= 1e3),
                    (g += u + (u >= m ? 4 : m - u)),
                    (h = 1)),
                  T || (t = e(r)),
                  h)
                )
                  for (s = 0; s < v.length; s++) v[s](f, n, p, o);
              };
            return (i = {
              time: 0,
              frame: 0,
              tick: function () {
                y(!0);
              },
              deltaRatio: function (t) {
                return n / (1e3 / (t || 60));
              },
              wake: function () {
                f &&
                  (!u &&
                    E() &&
                    ((o = u = window),
                    (h = o.document || {}),
                    (U.gsap = Br),
                    (o.gsapVersions || (o.gsapVersions = [])).push(Br.version),
                    q(X || o.GreenSockGlobals || (!o.gsap && o) || {}),
                    (r = o.requestAnimationFrame),
                    xe.forEach(we)),
                  t && i.sleep(),
                  (e =
                    r ||
                    function (t) {
                      return setTimeout(t, (g - 1e3 * i.time + 1) | 0);
                    }),
                  (p = 1),
                  y(2));
              },
              sleep: function () {
                (r ? o.cancelAnimationFrame : clearTimeout)(t),
                  (p = 0),
                  (e = G);
              },
              lagSmoothing: function (t, e) {
                (l = t || 1 / 0), (c = Math.min(e || 33, l));
              },
              fps: function (t) {
                (m = 1e3 / (t || 240)), (g = 1e3 * i.time + m);
              },
              add: function (t, e, r) {
                var n = e
                  ? function (e, r, s, a) {
                      t(e, r, s, a), i.remove(n);
                    }
                  : t;
                return i.remove(t), v[r ? "unshift" : "push"](n), Re(), n;
              },
              remove: function (t, e) {
                ~(e = v.indexOf(t)) && v.splice(e, 1) && s >= e && s--;
              },
              _listeners: v,
            });
          })(),
          Re = function () {
            return !p && Se.wake();
          },
          ze = {},
          Fe = /^[\d.\-M][\d.\-,\s]/,
          Be = /["']/g,
          Le = function (t) {
            for (
              var e,
                r,
                i,
                n = {},
                s = t.substr(1, t.length - 3).split(":"),
                a = s[0],
                o = 1,
                u = s.length;
              o < u;
              o++
            )
              (r = s[o]),
                (e = o !== u - 1 ? r.lastIndexOf(",") : r.length),
                (i = r.substr(0, e)),
                (n[a] = isNaN(i) ? i.replace(Be, "").trim() : +i),
                (a = r.substr(e + 1).trim());
            return n;
          },
          Ie = function (t) {
            var e = t.indexOf("(") + 1,
              r = t.indexOf(")"),
              i = t.indexOf("(", e);
            return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
          },
          Ye = function (t) {
            var e = (t + "").split("("),
              r = ze[e[0]];
            return r && e.length > 1 && r.config
              ? r.config.apply(
                  null,
                  ~t.indexOf("{") ? [Le(e[1])] : Ie(t).split(",").map(dt),
                )
              : ze._CE && Fe.test(t)
                ? ze._CE("", t)
                : r;
          },
          Ne = function (t) {
            return function (e) {
              return 1 - t(1 - e);
            };
          },
          Ue = function t(e, r) {
            for (var i, n = e._first; n; )
              n instanceof He
                ? t(n, r)
                : !n.vars.yoyoEase ||
                  (n._yoyo && n._repeat) ||
                  n._yoyo === r ||
                  (n.timeline
                    ? t(n.timeline, r)
                    : ((i = n._ease),
                      (n._ease = n._yEase),
                      (n._yEase = i),
                      (n._yoyo = r))),
                (n = n._next);
          },
          Xe = function (t, e) {
            return (t && (k(t) ? t : ze[t] || Ye(t))) || e;
          },
          qe = function (t, e, r, i) {
            void 0 === r &&
              (r = function (t) {
                return 1 - e(1 - t);
              }),
              void 0 === i &&
                (i = function (t) {
                  return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
                });
            var n,
              s = { easeIn: e, easeOut: r, easeInOut: i };
            return (
              ut(t, function (t) {
                for (var e in ((ze[t] = U[t] = s),
                (ze[(n = t.toLowerCase())] = r),
                s))
                  ze[
                    n +
                      ("easeIn" === e
                        ? ".in"
                        : "easeOut" === e
                          ? ".out"
                          : ".inOut")
                  ] = ze[t + "." + e] = s[e];
              }),
              s
            );
          },
          Ve = function (t) {
            return function (e) {
              return e < 0.5
                ? (1 - t(1 - 2 * e)) / 2
                : 0.5 + t(2 * (e - 0.5)) / 2;
            };
          },
          je = function t(e, r, i) {
            var n = r >= 1 ? r : 1,
              s = (i || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
              a = (s / v) * (Math.asin(1 / n) || 0),
              o = function (t) {
                return 1 === t
                  ? 1
                  : n * Math.pow(2, -10 * t) * b((t - a) * s) + 1;
              },
              u =
                "out" === e
                  ? o
                  : "in" === e
                    ? function (t) {
                        return 1 - o(1 - t);
                      }
                    : Ve(o);
            return (
              (s = v / s),
              (u.config = function (r, i) {
                return t(e, r, i);
              }),
              u
            );
          },
          Qe = function t(e, r) {
            void 0 === r && (r = 1.70158);
            var i = function (t) {
                return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
              },
              n =
                "out" === e
                  ? i
                  : "in" === e
                    ? function (t) {
                        return 1 - i(1 - t);
                      }
                    : Ve(i);
            return (
              (n.config = function (r) {
                return t(e, r);
              }),
              n
            );
          };
        ut("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
          var r = e < 5 ? e + 1 : e;
          qe(
            t + ",Power" + (r - 1),
            e
              ? function (t) {
                  return Math.pow(t, r);
                }
              : function (t) {
                  return t;
                },
            function (t) {
              return 1 - Math.pow(1 - t, r);
            },
            function (t) {
              return t < 0.5
                ? Math.pow(2 * t, r) / 2
                : 1 - Math.pow(2 * (1 - t), r) / 2;
            },
          );
        }),
          (ze.Linear.easeNone = ze.none = ze.Linear.easeIn),
          qe("Elastic", je("in"), je("out"), je()),
          (function (t, e) {
            var r = 1 / e,
              i = 2 * r,
              n = 2.5 * r,
              s = function (s) {
                return s < r
                  ? t * s * s
                  : s < i
                    ? t * Math.pow(s - 1.5 / e, 2) + 0.75
                    : s < n
                      ? t * (s -= 2.25 / e) * s + 0.9375
                      : t * Math.pow(s - 2.625 / e, 2) + 0.984375;
              };
            qe(
              "Bounce",
              function (t) {
                return 1 - s(1 - t);
              },
              s,
            );
          })(7.5625, 2.75),
          qe("Expo", function (t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0;
          }),
          qe("Circ", function (t) {
            return -(x(1 - t * t) - 1);
          }),
          qe("Sine", function (t) {
            return 1 === t ? 1 : 1 - w(t * y);
          }),
          qe("Back", Qe("in"), Qe("out"), Qe()),
          (ze.SteppedEase =
            ze.steps =
            U.SteppedEase =
              {
                config: function (t, e) {
                  void 0 === t && (t = 1);
                  var r = 1 / t,
                    i = t + (e ? 0 : 1),
                    n = e ? 1 : 0,
                    s = 1 - g;
                  return function (t) {
                    return (((i * Zt(0, s, t)) | 0) + n) * r;
                  };
                },
              }),
          (d.ease = ze["quad.out"]),
          ut(
            "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
            function (t) {
              return (nt += t + "," + t + "Params,");
            },
          );
        var Ge = function (t, e) {
            (this.id = T++),
              (t._gsap = this),
              (this.target = t),
              (this.harness = e),
              (this.get = e ? e.get : ot),
              (this.set = e ? e.getSetter : _r);
          },
          We = (function () {
            function t(t) {
              (this.vars = t),
                (this._delay = +t.delay || 0),
                (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                  ((this._rDelay = t.repeatDelay || 0),
                  (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
                (this._ts = 1),
                Vt(this, +t.duration, 1, 1),
                (this.data = t.data),
                s && ((this._ctx = s), s.data.push(this)),
                p || Se.wake();
            }
            var e = t.prototype;
            return (
              (e.delay = function (t) {
                return t || 0 === t
                  ? (this.parent &&
                      this.parent.smoothChildTiming &&
                      this.startTime(this._start + t - this._delay),
                    (this._delay = t),
                    this)
                  : this._delay;
              }),
              (e.duration = function (t) {
                return arguments.length
                  ? this.totalDuration(
                      this._repeat > 0
                        ? t + (t + this._rDelay) * this._repeat
                        : t,
                    )
                  : this.totalDuration() && this._dur;
              }),
              (e.totalDuration = function (t) {
                return arguments.length
                  ? ((this._dirty = 0),
                    Vt(
                      this,
                      this._repeat < 0
                        ? t
                        : (t - this._repeat * this._rDelay) /
                            (this._repeat + 1),
                    ))
                  : this._tDur;
              }),
              (e.totalTime = function (t, e) {
                if ((Re(), !arguments.length)) return this._tTime;
                var r = this._dp;
                if (r && r.smoothChildTiming && this._ts) {
                  for (
                    Ft(this, t), !r._dp || r.parent || Bt(r, this);
                    r && r.parent;

                  )
                    r.parent._time !==
                      r._start +
                        (r._ts >= 0
                          ? r._tTime / r._ts
                          : (r.totalDuration() - r._tTime) / -r._ts) &&
                      r.totalTime(r._tTime, !0),
                      (r = r.parent);
                  !this.parent &&
                    this._dp.autoRemoveChildren &&
                    ((this._ts > 0 && t < this._tDur) ||
                      (this._ts < 0 && t > 0) ||
                      (!this._tDur && !t)) &&
                    Lt(this._dp, this, this._start - this._delay);
                }
                return (
                  (this._tTime !== t ||
                    (!this._dur && !e) ||
                    (this._initted && Math.abs(this._zTime) === g) ||
                    (!t && !this._initted && (this.add || this._ptLookup))) &&
                    (this._ts || (this._pTime = t), _t(this, t, e)),
                  this
                );
              }),
              (e.time = function (t, e) {
                return arguments.length
                  ? this.totalTime(
                      Math.min(this.totalDuration(), t + Pt(this)) %
                        (this._dur + this._rDelay) || (t ? this._dur : 0),
                      e,
                    )
                  : this._time;
              }),
              (e.totalProgress = function (t, e) {
                return arguments.length
                  ? this.totalTime(this.totalDuration() * t, e)
                  : this.totalDuration()
                    ? Math.min(1, this._tTime / this._tDur)
                    : this.ratio;
              }),
              (e.progress = function (t, e) {
                return arguments.length
                  ? this.totalTime(
                      this.duration() *
                        (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                        Pt(this),
                      e,
                    )
                  : this.duration()
                    ? Math.min(1, this._time / this._dur)
                    : this.ratio;
              }),
              (e.iteration = function (t, e) {
                var r = this.duration() + this._rDelay;
                return arguments.length
                  ? this.totalTime(this._time + (t - 1) * r, e)
                  : this._repeat
                    ? St(this._tTime, r) + 1
                    : 1;
              }),
              (e.timeScale = function (t) {
                if (!arguments.length) return this._rts === -g ? 0 : this._rts;
                if (this._rts === t) return this;
                var e =
                  this.parent && this._ts
                    ? Rt(this.parent._time, this)
                    : this._tTime;
                return (
                  (this._rts = +t || 0),
                  (this._ts = this._ps || t === -g ? 0 : this._rts),
                  this.totalTime(Zt(-Math.abs(this._delay), this._tDur, e), !0),
                  zt(this),
                  At(this)
                );
              }),
              (e.paused = function (t) {
                return arguments.length
                  ? (this._ps !== t &&
                      ((this._ps = t),
                      t
                        ? ((this._pTime =
                            this._tTime ||
                            Math.max(-this._delay, this.rawTime())),
                          (this._ts = this._act = 0))
                        : (Re(),
                          (this._ts = this._rts),
                          this.totalTime(
                            this.parent && !this.parent.smoothChildTiming
                              ? this.rawTime()
                              : this._tTime || this._pTime,
                            1 === this.progress() &&
                              Math.abs(this._zTime) !== g &&
                              (this._tTime -= g),
                          ))),
                    this)
                  : this._ps;
              }),
              (e.startTime = function (t) {
                if (arguments.length) {
                  this._start = t;
                  var e = this.parent || this._dp;
                  return (
                    e &&
                      (e._sort || !this.parent) &&
                      Lt(e, this, t - this._delay),
                    this
                  );
                }
                return this._start;
              }),
              (e.endTime = function (t) {
                return (
                  this._start +
                  (D(t) ? this.totalDuration() : this.duration()) /
                    Math.abs(this._ts || 1)
                );
              }),
              (e.rawTime = function (t) {
                var e = this.parent || this._dp;
                return e
                  ? t &&
                    (!this._ts ||
                      (this._repeat && this._time && this.totalProgress() < 1))
                    ? this._tTime % (this._dur + this._rDelay)
                    : this._ts
                      ? Rt(e.rawTime(t), this)
                      : this._tTime
                  : this._tTime;
              }),
              (e.revert = function (t) {
                void 0 === t && (t = Z);
                var e = n;
                return (
                  (n = t),
                  (this._initted || this._startAt) &&
                    (this.timeline && this.timeline.revert(t),
                    this.totalTime(-0.01, t.suppressEvents)),
                  "nested" !== this.data && !1 !== t.kill && this.kill(),
                  (n = e),
                  this
                );
              }),
              (e.globalTime = function (t) {
                for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                  (r = e._start + r / (e._ts || 1)), (e = e._dp);
                return !this.parent && this._sat
                  ? this._sat.vars.immediateRender
                    ? -1
                    : this._sat.globalTime(t)
                  : r;
              }),
              (e.repeat = function (t) {
                return arguments.length
                  ? ((this._repeat = t === 1 / 0 ? -2 : t), jt(this))
                  : -2 === this._repeat
                    ? 1 / 0
                    : this._repeat;
              }),
              (e.repeatDelay = function (t) {
                if (arguments.length) {
                  var e = this._time;
                  return (this._rDelay = t), jt(this), e ? this.time(e) : this;
                }
                return this._rDelay;
              }),
              (e.yoyo = function (t) {
                return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
              }),
              (e.seek = function (t, e) {
                return this.totalTime(Gt(this, t), D(e));
              }),
              (e.restart = function (t, e) {
                return this.play().totalTime(t ? -this._delay : 0, D(e));
              }),
              (e.play = function (t, e) {
                return (
                  null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                );
              }),
              (e.reverse = function (t, e) {
                return (
                  null != t && this.seek(t || this.totalDuration(), e),
                  this.reversed(!0).paused(!1)
                );
              }),
              (e.pause = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!0);
              }),
              (e.resume = function () {
                return this.paused(!1);
              }),
              (e.reversed = function (t) {
                return arguments.length
                  ? (!!t !== this.reversed() &&
                      this.timeScale(-this._rts || (t ? -g : 0)),
                    this)
                  : this._rts < 0;
              }),
              (e.invalidate = function () {
                return (
                  (this._initted = this._act = 0), (this._zTime = -g), this
                );
              }),
              (e.isActive = function () {
                var t,
                  e = this.parent || this._dp,
                  r = this._start;
                return !(
                  e &&
                  !(
                    this._ts &&
                    this._initted &&
                    e.isActive() &&
                    (t = e.rawTime(!0)) >= r &&
                    t < this.endTime(!0) - g
                  )
                );
              }),
              (e.eventCallback = function (t, e, r) {
                var i = this.vars;
                return arguments.length > 1
                  ? (e
                      ? ((i[t] = e),
                        r && (i[t + "Params"] = r),
                        "onUpdate" === t && (this._onUpdate = e))
                      : delete i[t],
                    this)
                  : i[t];
              }),
              (e.then = function (t) {
                var e = this;
                return new Promise(function (r) {
                  var i = k(t) ? t : mt,
                    n = function () {
                      var t = e.then;
                      (e.then = null),
                        k(i) &&
                          (i = i(e)) &&
                          (i.then || i === e) &&
                          (e.then = t),
                        r(i),
                        (e.then = t);
                    };
                  (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                  (!e._tTime && e._ts < 0)
                    ? n()
                    : (e._prom = n);
                });
              }),
              (e.kill = function () {
                Te(this);
              }),
              t
            );
          })();
        gt(We.prototype, {
          _time: 0,
          _start: 0,
          _end: 0,
          _tTime: 0,
          _tDur: 0,
          _dirty: 0,
          _repeat: 0,
          _yoyo: !1,
          parent: null,
          _initted: !1,
          _rDelay: 0,
          _ts: 1,
          _dp: 0,
          ratio: 0,
          _zTime: -g,
          _prom: 0,
          _ps: !1,
          _rts: 1,
        });
        var He = (function (t) {
          function i(e, i) {
            var n;
            return (
              void 0 === e && (e = {}),
              ((n = t.call(this, e) || this).labels = {}),
              (n.smoothChildTiming = !!e.smoothChildTiming),
              (n.autoRemoveChildren = !!e.autoRemoveChildren),
              (n._sort = D(e.sortChildren)),
              a && Lt(e.parent || a, r(n), i),
              e.reversed && n.reverse(),
              e.paused && n.paused(!0),
              e.scrollTrigger && It(r(n), e.scrollTrigger),
              n
            );
          }
          e(i, t);
          var s = i.prototype;
          return (
            (s.to = function (t, e, r) {
              return Wt(0, arguments, this), this;
            }),
            (s.from = function (t, e, r) {
              return Wt(1, arguments, this), this;
            }),
            (s.fromTo = function (t, e, r, i) {
              return Wt(2, arguments, this), this;
            }),
            (s.set = function (t, e, r) {
              return (
                (e.duration = 0),
                (e.parent = this),
                wt(e).repeatDelay || (e.repeat = 0),
                (e.immediateRender = !!e.immediateRender),
                new hr(t, e, Gt(this, r), 1),
                this
              );
            }),
            (s.call = function (t, e, r) {
              return Lt(this, hr.delayedCall(0, t, e), r);
            }),
            (s.staggerTo = function (t, e, r, i, n, s, a) {
              return (
                (r.duration = e),
                (r.stagger = r.stagger || i),
                (r.onComplete = s),
                (r.onCompleteParams = a),
                (r.parent = this),
                new hr(t, r, Gt(this, n)),
                this
              );
            }),
            (s.staggerFrom = function (t, e, r, i, n, s, a) {
              return (
                (r.runBackwards = 1),
                (wt(r).immediateRender = D(r.immediateRender)),
                this.staggerTo(t, e, r, i, n, s, a)
              );
            }),
            (s.staggerFromTo = function (t, e, r, i, n, s, a, o) {
              return (
                (i.startAt = r),
                (wt(i).immediateRender = D(i.immediateRender)),
                this.staggerTo(t, e, i, n, s, a, o)
              );
            }),
            (s.render = function (t, e, r) {
              var i,
                s,
                o,
                u,
                h,
                f,
                l,
                c,
                p,
                _,
                d,
                m,
                v = this._time,
                y = this._dirty ? this.totalDuration() : this._tDur,
                T = this._dur,
                x = t <= 0 ? 0 : ft(t),
                w = this._zTime < 0 !== t < 0 && (this._initted || !T);
              if (
                (this !== a && x > y && t >= 0 && (x = y),
                x !== this._tTime || r || w)
              ) {
                if (
                  (v !== this._time &&
                    T &&
                    ((x += this._time - v), (t += this._time - v)),
                  (i = x),
                  (p = this._start),
                  (f = !(c = this._ts)),
                  w && (T || (v = this._zTime), (t || !e) && (this._zTime = t)),
                  this._repeat)
                ) {
                  if (
                    ((d = this._yoyo),
                    (h = T + this._rDelay),
                    this._repeat < -1 && t < 0)
                  )
                    return this.totalTime(100 * h + t, e, r);
                  if (
                    ((i = ft(x % h)),
                    x === y
                      ? ((u = this._repeat), (i = T))
                      : ((u = ~~(x / h)) && u === x / h && ((i = T), u--),
                        i > T && (i = T)),
                    (_ = St(this._tTime, h)),
                    !v &&
                      this._tTime &&
                      _ !== u &&
                      this._tTime - _ * h - this._dur <= 0 &&
                      (_ = u),
                    d && 1 & u && ((i = T - i), (m = 1)),
                    u !== _ && !this._lock)
                  ) {
                    var b = d && 1 & _,
                      M = b === (d && 1 & u);
                    if (
                      (u < _ && (b = !b),
                      (v = b ? 0 : T),
                      (this._lock = 1),
                      (this.render(v || (m ? 0 : ft(u * h)), e, !T)._lock = 0),
                      (this._tTime = x),
                      !e && this.parent && ye(this, "onRepeat"),
                      this.vars.repeatRefresh &&
                        !m &&
                        (this.invalidate()._lock = 1),
                      (v && v !== this._time) ||
                        f !== !this._ts ||
                        (this.vars.onRepeat && !this.parent && !this._act))
                    )
                      return this;
                    if (
                      ((T = this._dur),
                      (y = this._tDur),
                      M &&
                        ((this._lock = 2),
                        (v = b ? T : -1e-4),
                        this.render(v, !0),
                        this.vars.repeatRefresh && !m && this.invalidate()),
                      (this._lock = 0),
                      !this._ts && !f)
                    )
                      return this;
                    Ue(this, m);
                  }
                }
                if (
                  (this._hasPause &&
                    !this._forcing &&
                    this._lock < 2 &&
                    (l = qt(this, ft(v), ft(i))) &&
                    (x -= i - (i = l._start)),
                  (this._tTime = x),
                  (this._time = i),
                  (this._act = !c),
                  this._initted ||
                    ((this._onUpdate = this.vars.onUpdate),
                    (this._initted = 1),
                    (this._zTime = t),
                    (v = 0)),
                  !v &&
                    i &&
                    !e &&
                    !u &&
                    (ye(this, "onStart"), this._tTime !== x))
                )
                  return this;
                if (i >= v && t >= 0)
                  for (s = this._first; s; ) {
                    if (
                      ((o = s._next),
                      (s._act || i >= s._start) && s._ts && l !== s)
                    ) {
                      if (s.parent !== this) return this.render(t, e, r);
                      if (
                        (s.render(
                          s._ts > 0
                            ? (i - s._start) * s._ts
                            : (s._dirty ? s.totalDuration() : s._tDur) +
                                (i - s._start) * s._ts,
                          e,
                          r,
                        ),
                        i !== this._time || (!this._ts && !f))
                      ) {
                        (l = 0), o && (x += this._zTime = -g);
                        break;
                      }
                    }
                    s = o;
                  }
                else {
                  s = this._last;
                  for (var k = t < 0 ? t : i; s; ) {
                    if (
                      ((o = s._prev),
                      (s._act || k <= s._end) && s._ts && l !== s)
                    ) {
                      if (s.parent !== this) return this.render(t, e, r);
                      if (
                        (s.render(
                          s._ts > 0
                            ? (k - s._start) * s._ts
                            : (s._dirty ? s.totalDuration() : s._tDur) +
                                (k - s._start) * s._ts,
                          e,
                          r || (n && (s._initted || s._startAt)),
                        ),
                        i !== this._time || (!this._ts && !f))
                      ) {
                        (l = 0), o && (x += this._zTime = k ? -g : g);
                        break;
                      }
                    }
                    s = o;
                  }
                }
                if (
                  l &&
                  !e &&
                  (this.pause(),
                  (l.render(i >= v ? 0 : -g)._zTime = i >= v ? 1 : -1),
                  this._ts)
                )
                  return (this._start = p), zt(this), this.render(t, e, r);
                this._onUpdate && !e && ye(this, "onUpdate", !0),
                  ((x === y && this._tTime >= this.totalDuration()) ||
                    (!x && v)) &&
                    ((p !== this._start &&
                      Math.abs(c) === Math.abs(this._ts)) ||
                      this._lock ||
                      ((t || !T) &&
                        ((x === y && this._ts > 0) || (!x && this._ts < 0)) &&
                        Ot(this, 1),
                      e ||
                        (t < 0 && !v) ||
                        (!x && !v && y) ||
                        (ye(
                          this,
                          x === y && t >= 0
                            ? "onComplete"
                            : "onReverseComplete",
                          !0,
                        ),
                        this._prom &&
                          !(x < y && this.timeScale() > 0) &&
                          this._prom())));
              }
              return this;
            }),
            (s.add = function (t, e) {
              var r = this;
              if ((O(e) || (e = Gt(this, e, t)), !(t instanceof We))) {
                if (R(t))
                  return (
                    t.forEach(function (t) {
                      return r.add(t, e);
                    }),
                    this
                  );
                if (M(t)) return this.addLabel(t, e);
                if (!k(t)) return this;
                t = hr.delayedCall(0, t);
              }
              return this !== t ? Lt(this, t, e) : this;
            }),
            (s.getChildren = function (t, e, r, i) {
              void 0 === t && (t = !0),
                void 0 === e && (e = !0),
                void 0 === r && (r = !0),
                void 0 === i && (i = -m);
              for (var n = [], s = this._first; s; )
                s._start >= i &&
                  (s instanceof hr
                    ? e && n.push(s)
                    : (r && n.push(s),
                      t && n.push.apply(n, s.getChildren(!0, e, r)))),
                  (s = s._next);
              return n;
            }),
            (s.getById = function (t) {
              for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
                if (e[r].vars.id === t) return e[r];
            }),
            (s.remove = function (t) {
              return M(t)
                ? this.removeLabel(t)
                : k(t)
                  ? this.killTweensOf(t)
                  : (kt(this, t),
                    t === this._recent && (this._recent = this._last),
                    Ct(this));
            }),
            (s.totalTime = function (e, r) {
              return arguments.length
                ? ((this._forcing = 1),
                  !this._dp &&
                    this._ts &&
                    (this._start = ft(
                      Se.time -
                        (this._ts > 0
                          ? e / this._ts
                          : (this.totalDuration() - e) / -this._ts),
                    )),
                  t.prototype.totalTime.call(this, e, r),
                  (this._forcing = 0),
                  this)
                : this._tTime;
            }),
            (s.addLabel = function (t, e) {
              return (this.labels[t] = Gt(this, e)), this;
            }),
            (s.removeLabel = function (t) {
              return delete this.labels[t], this;
            }),
            (s.addPause = function (t, e, r) {
              var i = hr.delayedCall(0, e || G, r);
              return (
                (i.data = "isPause"),
                (this._hasPause = 1),
                Lt(this, i, Gt(this, t))
              );
            }),
            (s.removePause = function (t) {
              var e = this._first;
              for (t = Gt(this, t); e; )
                e._start === t && "isPause" === e.data && Ot(e), (e = e._next);
            }),
            (s.killTweensOf = function (t, e, r) {
              for (var i = this.getTweensOf(t, r), n = i.length; n--; )
                Ze !== i[n] && i[n].kill(t, e);
              return this;
            }),
            (s.getTweensOf = function (t, e) {
              for (var r, i = [], n = re(t), s = this._first, a = O(e); s; )
                s instanceof hr
                  ? ct(s._targets, n) &&
                    (a
                      ? (!Ze || (s._initted && s._ts)) &&
                        s.globalTime(0) <= e &&
                        s.globalTime(s.totalDuration()) > e
                      : !e || s.isActive()) &&
                    i.push(s)
                  : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r),
                  (s = s._next);
              return i;
            }),
            (s.tweenTo = function (t, e) {
              e = e || {};
              var r,
                i = this,
                n = Gt(i, t),
                s = e,
                a = s.startAt,
                o = s.onStart,
                u = s.onStartParams,
                h = s.immediateRender,
                f = hr.to(
                  i,
                  gt(
                    {
                      ease: e.ease || "none",
                      lazy: !1,
                      immediateRender: !1,
                      time: n,
                      overwrite: "auto",
                      duration:
                        e.duration ||
                        Math.abs(
                          (n - (a && "time" in a ? a.time : i._time)) /
                            i.timeScale(),
                        ) ||
                        g,
                      onStart: function () {
                        if ((i.pause(), !r)) {
                          var t =
                            e.duration ||
                            Math.abs(
                              (n - (a && "time" in a ? a.time : i._time)) /
                                i.timeScale(),
                            );
                          f._dur !== t &&
                            Vt(f, t, 0, 1).render(f._time, !0, !0),
                            (r = 1);
                        }
                        o && o.apply(f, u || []);
                      },
                    },
                    e,
                  ),
                );
              return h ? f.render(0) : f;
            }),
            (s.tweenFromTo = function (t, e, r) {
              return this.tweenTo(e, gt({ startAt: { time: Gt(this, t) } }, r));
            }),
            (s.recent = function () {
              return this._recent;
            }),
            (s.nextLabel = function (t) {
              return void 0 === t && (t = this._time), ve(this, Gt(this, t));
            }),
            (s.previousLabel = function (t) {
              return void 0 === t && (t = this._time), ve(this, Gt(this, t), 1);
            }),
            (s.currentLabel = function (t) {
              return arguments.length
                ? this.seek(t, !0)
                : this.previousLabel(this._time + g);
            }),
            (s.shiftChildren = function (t, e, r) {
              void 0 === r && (r = 0);
              for (var i, n = this._first, s = this.labels; n; )
                n._start >= r && ((n._start += t), (n._end += t)),
                  (n = n._next);
              if (e) for (i in s) s[i] >= r && (s[i] += t);
              return Ct(this);
            }),
            (s.invalidate = function (e) {
              var r = this._first;
              for (this._lock = 0; r; ) r.invalidate(e), (r = r._next);
              return t.prototype.invalidate.call(this, e);
            }),
            (s.clear = function (t) {
              void 0 === t && (t = !0);
              for (var e, r = this._first; r; )
                (e = r._next), this.remove(r), (r = e);
              return (
                this._dp && (this._time = this._tTime = this._pTime = 0),
                t && (this.labels = {}),
                Ct(this)
              );
            }),
            (s.totalDuration = function (t) {
              var e,
                r,
                i,
                n = 0,
                s = this,
                o = s._last,
                u = m;
              if (arguments.length)
                return s.timeScale(
                  (s._repeat < 0 ? s.duration() : s.totalDuration()) /
                    (s.reversed() ? -t : t),
                );
              if (s._dirty) {
                for (i = s.parent; o; )
                  (e = o._prev),
                    o._dirty && o.totalDuration(),
                    (r = o._start) > u && s._sort && o._ts && !s._lock
                      ? ((s._lock = 1), (Lt(s, o, r - o._delay, 1)._lock = 0))
                      : (u = r),
                    r < 0 &&
                      o._ts &&
                      ((n -= r),
                      ((!i && !s._dp) || (i && i.smoothChildTiming)) &&
                        ((s._start += r / s._ts),
                        (s._time -= r),
                        (s._tTime -= r)),
                      s.shiftChildren(-r, !1, -Infinity),
                      (u = 0)),
                    o._end > n && o._ts && (n = o._end),
                    (o = e);
                Vt(s, s === a && s._time > n ? s._time : n, 1, 1),
                  (s._dirty = 0);
              }
              return s._tDur;
            }),
            (i.updateRoot = function (t) {
              if (
                (a._ts && (_t(a, Rt(t, a)), (l = Se.frame)), Se.frame >= rt)
              ) {
                rt += _.autoSleep || 120;
                var e = a._first;
                if ((!e || !e._ts) && _.autoSleep && Se._listeners.length < 2) {
                  for (; e && !e._ts; ) e = e._next;
                  e || Se.sleep();
                }
              }
            }),
            i
          );
        })(We);
        gt(He.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
        var Ze,
          $e,
          Je = function (t, e, r, i, n, s, a) {
            var o,
              u,
              h,
              f,
              l,
              c,
              p,
              _,
              d = new br(this._pt, t, e, 0, 1, gr, null, n),
              m = 0,
              g = 0;
            for (
              d.b = r,
                d.e = i,
                r += "",
                (p = ~(i += "").indexOf("random(")) && (i = de(i)),
                s && (s((_ = [r, i]), t, e), (r = _[0]), (i = _[1])),
                u = r.match(L) || [];
              (o = L.exec(i));

            )
              (f = o[0]),
                (l = i.substring(m, o.index)),
                h ? (h = (h + 1) % 5) : "rgba(" === l.substr(-5) && (h = 1),
                f !== u[g++] &&
                  ((c = parseFloat(u[g - 1]) || 0),
                  (d._pt = {
                    _next: d._pt,
                    p: l || 1 === g ? l : ",",
                    s: c,
                    c: "=" === f.charAt(1) ? lt(c, f) - c : parseFloat(f) - c,
                    m: h && h < 4 ? Math.round : 0,
                  }),
                  (m = L.lastIndex));
            return (
              (d.c = m < i.length ? i.substring(m, i.length) : ""),
              (d.fp = a),
              (I.test(i) || p) && (d.e = 0),
              (this._pt = d),
              d
            );
          },
          Ke = function (t, e, r, i, n, s, a, o, u, h) {
            k(i) && (i = i(n || 0, t, s));
            var f,
              l = t[e],
              c =
                "get" !== r
                  ? r
                  : k(l)
                    ? u
                      ? t[
                          e.indexOf("set") || !k(t["get" + e.substr(3)])
                            ? e
                            : "get" + e.substr(3)
                        ](u)
                      : t[e]()
                    : l,
              p = k(l) ? (u ? cr : lr) : fr;
            if (
              (M(i) &&
                (~i.indexOf("random(") && (i = de(i)),
                "=" === i.charAt(1) &&
                  ((f = lt(c, i) + ($t(c) || 0)) || 0 === f) &&
                  (i = f)),
              !h || c !== i || $e)
            )
              return isNaN(c * i) || "" === i
                ? (!l && !(e in t) && V(e, i),
                  Je.call(this, t, e, c, i, p, o || _.stringFilter, u))
                : ((f = new br(
                    this._pt,
                    t,
                    e,
                    +c || 0,
                    i - (c || 0),
                    "boolean" === typeof l ? mr : dr,
                    0,
                    p,
                  )),
                  u && (f.fp = u),
                  a && f.modifier(a, this, t),
                  (this._pt = f));
          },
          tr = function (t, e, r, i, n) {
            if (
              (k(t) && (t = ar(t, n, e, r, i)),
              !A(t) || (t.style && t.nodeType) || R(t) || S(t))
            )
              return M(t) ? ar(t, n, e, r, i) : t;
            var s,
              a = {};
            for (s in t) a[s] = ar(t[s], n, e, r, i);
            return a;
          },
          er = function (t, e, r, i, n, s) {
            var a, o, u, h;
            if (
              tt[t] &&
              !1 !==
                (a = new tt[t]()).init(
                  n,
                  a.rawVars ? e[t] : tr(e[t], i, n, s, r),
                  r,
                  i,
                  s,
                ) &&
              ((r._pt = o =
                new br(r._pt, n, t, 0, 1, a.render, a, 0, a.priority)),
              r !== c)
            )
              for (
                u = r._ptLookup[r._targets.indexOf(n)], h = a._props.length;
                h--;

              )
                u[a._props[h]] = o;
            return a;
          },
          rr = function t(e, r, s) {
            var o,
              u,
              h,
              f,
              l,
              c,
              p,
              _,
              v,
              y,
              T,
              x,
              w,
              b = e.vars,
              M = b.ease,
              k = b.startAt,
              O = b.immediateRender,
              C = b.lazy,
              A = b.onUpdate,
              E = b.onUpdateParams,
              P = b.callbackScope,
              S = b.runBackwards,
              R = b.yoyoEase,
              z = b.keyframes,
              F = b.autoRevert,
              B = e._dur,
              L = e._startAt,
              I = e._targets,
              Y = e.parent,
              N = Y && "nested" === Y.data ? Y.vars.targets : I,
              U = "auto" === e._overwrite && !i,
              X = e.timeline;
            if (
              (X && (!z || !M) && (M = "none"),
              (e._ease = Xe(M, d.ease)),
              (e._yEase = R ? Ne(Xe(!0 === R ? M : R, d.ease)) : 0),
              R &&
                e._yoyo &&
                !e._repeat &&
                ((R = e._yEase), (e._yEase = e._ease), (e._ease = R)),
              (e._from = !X && !!b.runBackwards),
              !X || (z && !b.stagger))
            ) {
              if (
                ((x = (_ = I[0] ? at(I[0]).harness : 0) && b[_.prop]),
                (o = xt(b, $)),
                L &&
                  (L._zTime < 0 && L.progress(1),
                  r < 0 && S && O && !F
                    ? L.render(-1, !0)
                    : L.revert(S && B ? H : W),
                  (L._lazy = 0)),
                k)
              ) {
                if (
                  (Ot(
                    (e._startAt = hr.set(
                      I,
                      gt(
                        {
                          data: "isStart",
                          overwrite: !1,
                          parent: Y,
                          immediateRender: !0,
                          lazy: !L && D(C),
                          startAt: null,
                          delay: 0,
                          onUpdate: A,
                          onUpdateParams: E,
                          callbackScope: P,
                          stagger: 0,
                        },
                        k,
                      ),
                    )),
                  ),
                  (e._startAt._dp = 0),
                  (e._startAt._sat = e),
                  r < 0 && (n || (!O && !F)) && e._startAt.revert(H),
                  O && B && r <= 0 && s <= 0)
                )
                  return void (r && (e._zTime = r));
              } else if (S && B && !L)
                if (
                  (r && (O = !1),
                  (h = gt(
                    {
                      overwrite: !1,
                      data: "isFromStart",
                      lazy: O && !L && D(C),
                      immediateRender: O,
                      stagger: 0,
                      parent: Y,
                    },
                    o,
                  )),
                  x && (h[_.prop] = x),
                  Ot((e._startAt = hr.set(I, h))),
                  (e._startAt._dp = 0),
                  (e._startAt._sat = e),
                  r < 0 &&
                    (n ? e._startAt.revert(H) : e._startAt.render(-1, !0)),
                  (e._zTime = r),
                  O)
                ) {
                  if (!r) return;
                } else t(e._startAt, g, g);
              for (
                e._pt = e._ptCache = 0, C = (B && D(C)) || (C && !B), u = 0;
                u < I.length;
                u++
              ) {
                if (
                  ((p = (l = I[u])._gsap || st(I)[u]._gsap),
                  (e._ptLookup[u] = y = {}),
                  K[p.id] && J.length && pt(),
                  (T = N === I ? u : N.indexOf(l)),
                  _ &&
                    !1 !== (v = new _()).init(l, x || o, e, T, N) &&
                    ((e._pt = f =
                      new br(
                        e._pt,
                        l,
                        v.name,
                        0,
                        1,
                        v.render,
                        v,
                        0,
                        v.priority,
                      )),
                    v._props.forEach(function (t) {
                      y[t] = f;
                    }),
                    v.priority && (c = 1)),
                  !_ || x)
                )
                  for (h in o)
                    tt[h] && (v = er(h, o, e, T, l, N))
                      ? v.priority && (c = 1)
                      : (y[h] = f =
                          Ke.call(
                            e,
                            l,
                            h,
                            "get",
                            o[h],
                            T,
                            N,
                            0,
                            b.stringFilter,
                          ));
                e._op && e._op[u] && e.kill(l, e._op[u]),
                  U &&
                    e._pt &&
                    ((Ze = e),
                    a.killTweensOf(l, y, e.globalTime(r)),
                    (w = !e.parent),
                    (Ze = 0)),
                  e._pt && C && (K[p.id] = 1);
              }
              c && wr(e), e._onInit && e._onInit(e);
            }
            (e._onUpdate = A),
              (e._initted = (!e._op || e._pt) && !w),
              z && r <= 0 && X.render(m, !0, !0);
          },
          ir = function (t, e, r, i, n, s, a) {
            var o,
              u,
              h,
              f,
              l = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
            if (!l)
              for (
                l = t._ptCache[e] = [], h = t._ptLookup, f = t._targets.length;
                f--;

              ) {
                if ((o = h[f][e]) && o.d && o.d._pt)
                  for (o = o.d._pt; o && o.p !== e && o.fp !== e; ) o = o._next;
                if (!o)
                  return ($e = 1), (t.vars[e] = "+=0"), rr(t, a), ($e = 0), 1;
                l.push(o);
              }
            for (f = l.length; f--; )
              ((o = (u = l[f])._pt || u).s =
                (!i && 0 !== i) || n ? o.s + (i || 0) + s * o.c : i),
                (o.c = r - o.s),
                u.e && (u.e = ht(r) + $t(u.e)),
                u.b && (u.b = o.s + $t(u.b));
          },
          nr = function (t, e) {
            var r,
              i,
              n,
              s,
              a = t[0] ? at(t[0]).harness : 0,
              o = a && a.aliases;
            if (!o) return e;
            for (i in ((r = yt({}, e)), o))
              if (i in r)
                for (n = (s = o[i].split(",")).length; n--; ) r[s[n]] = r[i];
            return r;
          },
          sr = function (t, e, r, i) {
            var n,
              s,
              a = e.ease || i || "power1.inOut";
            if (R(e))
              (s = r[t] || (r[t] = [])),
                e.forEach(function (t, r) {
                  return s.push({ t: (r / (e.length - 1)) * 100, v: t, e: a });
                });
            else
              for (n in e)
                (s = r[n] || (r[n] = [])),
                  "ease" === n || s.push({ t: parseFloat(t), v: e[n], e: a });
          },
          ar = function (t, e, r, i, n) {
            return k(t)
              ? t.call(e, r, i, n)
              : M(t) && ~t.indexOf("random(")
                ? de(t)
                : t;
          },
          or = nt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
          ur = {};
        ut(
          or + ",id,stagger,delay,duration,paused,scrollTrigger",
          function (t) {
            return (ur[t] = 1);
          },
        );
        var hr = (function (t) {
          function n(e, n, s, o) {
            var u;
            "number" === typeof n && ((s.duration = n), (n = s), (s = null));
            var h,
              f,
              l,
              c,
              p,
              d,
              m,
              v,
              y = (u = t.call(this, o ? n : wt(n)) || this).vars,
              T = y.duration,
              x = y.delay,
              w = y.immediateRender,
              b = y.stagger,
              M = y.overwrite,
              k = y.keyframes,
              C = y.defaults,
              E = y.scrollTrigger,
              z = y.yoyoEase,
              F = n.parent || a,
              B = (R(e) || S(e) ? O(e[0]) : "length" in n) ? [e] : re(e);
            if (
              ((u._targets = B.length
                ? st(B)
                : j(
                    "GSAP target " + e + " not found. https://greensock.com",
                    !_.nullTargetWarn,
                  ) || []),
              (u._ptLookup = []),
              (u._overwrite = M),
              k || b || P(T) || P(x))
            ) {
              if (
                ((n = u.vars),
                (h = u.timeline =
                  new He({
                    data: "nested",
                    defaults: C || {},
                    targets: F && "nested" === F.data ? F.vars.targets : B,
                  })).kill(),
                (h.parent = h._dp = r(u)),
                (h._start = 0),
                b || P(T) || P(x))
              ) {
                if (((c = B.length), (m = b && se(b)), A(b)))
                  for (p in b) ~or.indexOf(p) && (v || (v = {}), (v[p] = b[p]));
                for (f = 0; f < c; f++)
                  ((l = xt(n, ur)).stagger = 0),
                    z && (l.yoyoEase = z),
                    v && yt(l, v),
                    (d = B[f]),
                    (l.duration = +ar(T, r(u), f, d, B)),
                    (l.delay = (+ar(x, r(u), f, d, B) || 0) - u._delay),
                    !b &&
                      1 === c &&
                      l.delay &&
                      ((u._delay = x = l.delay),
                      (u._start += x),
                      (l.delay = 0)),
                    h.to(d, l, m ? m(f, d, B) : 0),
                    (h._ease = ze.none);
                h.duration() ? (T = x = 0) : (u.timeline = 0);
              } else if (k) {
                wt(gt(h.vars.defaults, { ease: "none" })),
                  (h._ease = Xe(k.ease || n.ease || "none"));
                var L,
                  I,
                  Y,
                  N = 0;
                if (R(k))
                  k.forEach(function (t) {
                    return h.to(B, t, ">");
                  }),
                    h.duration();
                else {
                  for (p in ((l = {}), k))
                    "ease" === p ||
                      "easeEach" === p ||
                      sr(p, k[p], l, k.easeEach);
                  for (p in l)
                    for (
                      L = l[p].sort(function (t, e) {
                        return t.t - e.t;
                      }),
                        N = 0,
                        f = 0;
                      f < L.length;
                      f++
                    )
                      ((Y = {
                        ease: (I = L[f]).e,
                        duration: ((I.t - (f ? L[f - 1].t : 0)) / 100) * T,
                      })[p] = I.v),
                        h.to(B, Y, N),
                        (N += Y.duration);
                  h.duration() < T && h.to({}, { duration: T - h.duration() });
                }
              }
              T || u.duration((T = h.duration()));
            } else u.timeline = 0;
            return (
              !0 !== M || i || ((Ze = r(u)), a.killTweensOf(B), (Ze = 0)),
              Lt(F, r(u), s),
              n.reversed && u.reverse(),
              n.paused && u.paused(!0),
              (w ||
                (!T &&
                  !k &&
                  u._start === ft(F._time) &&
                  D(w) &&
                  Et(r(u)) &&
                  "nested" !== F.data)) &&
                ((u._tTime = -g), u.render(Math.max(0, -x) || 0)),
              E && It(r(u), E),
              u
            );
          }
          e(n, t);
          var s = n.prototype;
          return (
            (s.render = function (t, e, r) {
              var i,
                n,
                s,
                a,
                o,
                u,
                h,
                f,
                l,
                c = this._time,
                p = this._tDur,
                _ = this._dur,
                d = t < 0,
                m = t > p - g && !d ? p : t < g ? 0 : t;
              if (_) {
                if (
                  m !== this._tTime ||
                  !t ||
                  r ||
                  (!this._initted && this._tTime) ||
                  (this._startAt && this._zTime < 0 !== d)
                ) {
                  if (((i = m), (f = this.timeline), this._repeat)) {
                    if (((a = _ + this._rDelay), this._repeat < -1 && d))
                      return this.totalTime(100 * a + t, e, r);
                    if (
                      ((i = ft(m % a)),
                      m === p
                        ? ((s = this._repeat), (i = _))
                        : ((s = ~~(m / a)) && s === m / a && ((i = _), s--),
                          i > _ && (i = _)),
                      (u = this._yoyo && 1 & s) &&
                        ((l = this._yEase), (i = _ - i)),
                      (o = St(this._tTime, a)),
                      i === c && !r && this._initted)
                    )
                      return (this._tTime = m), this;
                    s !== o &&
                      (f && this._yEase && Ue(f, u),
                      !this.vars.repeatRefresh ||
                        u ||
                        this._lock ||
                        ((this._lock = r = 1),
                        (this.render(ft(a * s), !0).invalidate()._lock = 0)));
                  }
                  if (!this._initted) {
                    if (Yt(this, d ? t : i, r, e, m))
                      return (this._tTime = 0), this;
                    if (c !== this._time) return this;
                    if (_ !== this._dur) return this.render(t, e, r);
                  }
                  if (
                    ((this._tTime = m),
                    (this._time = i),
                    !this._act &&
                      this._ts &&
                      ((this._act = 1), (this._lazy = 0)),
                    (this.ratio = h = (l || this._ease)(i / _)),
                    this._from && (this.ratio = h = 1 - h),
                    i &&
                      !c &&
                      !e &&
                      !s &&
                      (ye(this, "onStart"), this._tTime !== m))
                  )
                    return this;
                  for (n = this._pt; n; ) n.r(h, n.d), (n = n._next);
                  (f &&
                    f.render(
                      t < 0
                        ? t
                        : !i && u
                          ? -g
                          : f._dur * f._ease(i / this._dur),
                      e,
                      r,
                    )) ||
                    (this._startAt && (this._zTime = t)),
                    this._onUpdate &&
                      !e &&
                      (d && Dt(this, t, e, r), ye(this, "onUpdate")),
                    this._repeat &&
                      s !== o &&
                      this.vars.onRepeat &&
                      !e &&
                      this.parent &&
                      ye(this, "onRepeat"),
                    (m !== this._tDur && m) ||
                      this._tTime !== m ||
                      (d && !this._onUpdate && Dt(this, t, !0, !0),
                      (t || !_) &&
                        ((m === this._tDur && this._ts > 0) ||
                          (!m && this._ts < 0)) &&
                        Ot(this, 1),
                      e ||
                        (d && !c) ||
                        !(m || c || u) ||
                        (ye(
                          this,
                          m === p ? "onComplete" : "onReverseComplete",
                          !0,
                        ),
                        this._prom &&
                          !(m < p && this.timeScale() > 0) &&
                          this._prom()));
                }
              } else Xt(this, t, e, r);
              return this;
            }),
            (s.targets = function () {
              return this._targets;
            }),
            (s.invalidate = function (e) {
              return (
                (!e || !this.vars.runBackwards) && (this._startAt = 0),
                (this._pt =
                  this._op =
                  this._onUpdate =
                  this._lazy =
                  this.ratio =
                    0),
                (this._ptLookup = []),
                this.timeline && this.timeline.invalidate(e),
                t.prototype.invalidate.call(this, e)
              );
            }),
            (s.resetTo = function (t, e, r, i) {
              p || Se.wake(), this._ts || this.play();
              var n,
                s = Math.min(
                  this._dur,
                  (this._dp._time - this._start) * this._ts,
                );
              return (
                this._initted || rr(this, s),
                (n = this._ease(s / this._dur)),
                ir(this, t, e, r, i, n, s)
                  ? this.resetTo(t, e, r, i)
                  : (Ft(this, 0),
                    this.parent ||
                      Mt(
                        this._dp,
                        this,
                        "_first",
                        "_last",
                        this._dp._sort ? "_start" : 0,
                      ),
                    this.render(0))
              );
            }),
            (s.kill = function (t, e) {
              if ((void 0 === e && (e = "all"), !t && (!e || "all" === e)))
                return (
                  (this._lazy = this._pt = 0), this.parent ? Te(this) : this
                );
              if (this.timeline) {
                var r = this.timeline.totalDuration();
                return (
                  this.timeline.killTweensOf(
                    t,
                    e,
                    Ze && !0 !== Ze.vars.overwrite,
                  )._first || Te(this),
                  this.parent &&
                    r !== this.timeline.totalDuration() &&
                    Vt(this, (this._dur * this.timeline._tDur) / r, 0, 1),
                  this
                );
              }
              var i,
                n,
                s,
                a,
                o,
                u,
                h,
                f = this._targets,
                l = t ? re(t) : f,
                c = this._ptLookup,
                p = this._pt;
              if ((!e || "all" === e) && bt(f, l))
                return "all" === e && (this._pt = 0), Te(this);
              for (
                i = this._op = this._op || [],
                  "all" !== e &&
                    (M(e) &&
                      ((o = {}),
                      ut(e, function (t) {
                        return (o[t] = 1);
                      }),
                      (e = o)),
                    (e = nr(f, e))),
                  h = f.length;
                h--;

              )
                if (~l.indexOf(f[h]))
                  for (o in ((n = c[h]),
                  "all" === e
                    ? ((i[h] = e), (a = n), (s = {}))
                    : ((s = i[h] = i[h] || {}), (a = e)),
                  a))
                    (u = n && n[o]) &&
                      (("kill" in u.d && !0 !== u.d.kill(o)) ||
                        kt(this, u, "_pt"),
                      delete n[o]),
                      "all" !== s && (s[o] = 1);
              return this._initted && !this._pt && p && Te(this), this;
            }),
            (n.to = function (t, e) {
              return new n(t, e, arguments[2]);
            }),
            (n.from = function (t, e) {
              return Wt(1, arguments);
            }),
            (n.delayedCall = function (t, e, r, i) {
              return new n(e, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i,
              });
            }),
            (n.fromTo = function (t, e, r) {
              return Wt(2, arguments);
            }),
            (n.set = function (t, e) {
              return (
                (e.duration = 0), e.repeatDelay || (e.repeat = 0), new n(t, e)
              );
            }),
            (n.killTweensOf = function (t, e, r) {
              return a.killTweensOf(t, e, r);
            }),
            n
          );
        })(We);
        gt(hr.prototype, {
          _targets: [],
          _lazy: 0,
          _startAt: 0,
          _op: 0,
          _onInit: 0,
        }),
          ut("staggerTo,staggerFrom,staggerFromTo", function (t) {
            hr[t] = function () {
              var e = new He(),
                r = Kt.call(arguments, 0);
              return (
                r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
              );
            };
          });
        var fr = function (t, e, r) {
            return (t[e] = r);
          },
          lr = function (t, e, r) {
            return t[e](r);
          },
          cr = function (t, e, r, i) {
            return t[e](i.fp, r);
          },
          pr = function (t, e, r) {
            return t.setAttribute(e, r);
          },
          _r = function (t, e) {
            return k(t[e]) ? lr : C(t[e]) && t.setAttribute ? pr : fr;
          },
          dr = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
          },
          mr = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e);
          },
          gr = function (t, e) {
            var r = e._pt,
              i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
              for (; r; )
                (i =
                  r.p +
                  (r.m
                    ? r.m(r.s + r.c * t)
                    : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
                  i),
                  (r = r._next);
              i += e.c;
            }
            e.set(e.t, e.p, i, e);
          },
          vr = function (t, e) {
            for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
          },
          yr = function (t, e, r, i) {
            for (var n, s = this._pt; s; )
              (n = s._next), s.p === i && s.modifier(t, e, r), (s = n);
          },
          Tr = function (t) {
            for (var e, r, i = this._pt; i; )
              (r = i._next),
                (i.p === t && !i.op) || i.op === t
                  ? kt(this, i, "_pt")
                  : i.dep || (e = 1),
                (i = r);
            return !e;
          },
          xr = function (t, e, r, i) {
            i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
          },
          wr = function (t) {
            for (var e, r, i, n, s = t._pt; s; ) {
              for (e = s._next, r = i; r && r.pr > s.pr; ) r = r._next;
              (s._prev = r ? r._prev : n) ? (s._prev._next = s) : (i = s),
                (s._next = r) ? (r._prev = s) : (n = s),
                (s = e);
            }
            t._pt = i;
          },
          br = (function () {
            function t(t, e, r, i, n, s, a, o, u) {
              (this.t = e),
                (this.s = i),
                (this.c = n),
                (this.p = r),
                (this.r = s || dr),
                (this.d = a || this),
                (this.set = o || fr),
                (this.pr = u || 0),
                (this._next = t),
                t && (t._prev = this);
            }
            return (
              (t.prototype.modifier = function (t, e, r) {
                (this.mSet = this.mSet || this.set),
                  (this.set = xr),
                  (this.m = t),
                  (this.mt = r),
                  (this.tween = e);
              }),
              t
            );
          })();
        ut(
          nt +
            "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
          function (t) {
            return ($[t] = 1);
          },
        ),
          (U.TweenMax = U.TweenLite = hr),
          (U.TimelineLite = U.TimelineMax = He),
          (a = new He({
            sortChildren: !1,
            defaults: d,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0,
          })),
          (_.stringFilter = Pe);
        var Mr = [],
          kr = {},
          Or = [],
          Cr = 0,
          Ar = function (t) {
            return (kr[t] || Or).map(function (t) {
              return t();
            });
          },
          Dr = function () {
            var t = Date.now(),
              e = [];
            t - Cr > 2 &&
              (Ar("matchMediaInit"),
              Mr.forEach(function (t) {
                var r,
                  i,
                  n,
                  s,
                  a = t.queries,
                  u = t.conditions;
                for (i in a)
                  (r = o.matchMedia(a[i]).matches) && (n = 1),
                    r !== u[i] && ((u[i] = r), (s = 1));
                s && (t.revert(), n && e.push(t));
              }),
              Ar("matchMediaRevert"),
              e.forEach(function (t) {
                return t.onMatch(t);
              }),
              (Cr = t),
              Ar("matchMedia"));
          },
          Er = (function () {
            function t(t, e) {
              (this.selector = e && ie(e)),
                (this.data = []),
                (this._r = []),
                (this.isReverted = !1),
                t && this.add(t);
            }
            var e = t.prototype;
            return (
              (e.add = function (t, e, r) {
                k(t) && ((r = e), (e = t), (t = k));
                var i = this,
                  n = function () {
                    var t,
                      n = s,
                      a = i.selector;
                    return (
                      n && n !== i && n.data.push(i),
                      r && (i.selector = ie(r)),
                      (s = i),
                      (t = e.apply(i, arguments)),
                      k(t) && i._r.push(t),
                      (s = n),
                      (i.selector = a),
                      (i.isReverted = !1),
                      t
                    );
                  };
                return (i.last = n), t === k ? n(i) : t ? (i[t] = n) : n;
              }),
              (e.ignore = function (t) {
                var e = s;
                (s = null), t(this), (s = e);
              }),
              (e.getTweens = function () {
                var e = [];
                return (
                  this.data.forEach(function (r) {
                    return r instanceof t
                      ? e.push.apply(e, r.getTweens())
                      : r instanceof hr &&
                          !(r.parent && "nested" === r.parent.data) &&
                          e.push(r);
                  }),
                  e
                );
              }),
              (e.clear = function () {
                this._r.length = this.data.length = 0;
              }),
              (e.kill = function (t, e) {
                var r = this;
                if (t) {
                  var i = this.getTweens();
                  this.data.forEach(function (t) {
                    "isFlip" === t.data &&
                      (t.revert(),
                      t.getChildren(!0, !0, !1).forEach(function (t) {
                        return i.splice(i.indexOf(t), 1);
                      }));
                  }),
                    i
                      .map(function (t) {
                        return { g: t.globalTime(0), t: t };
                      })
                      .sort(function (t, e) {
                        return e.g - t.g || -1;
                      })
                      .forEach(function (e) {
                        return e.t.revert(t);
                      }),
                    this.data.forEach(function (e) {
                      return !(e instanceof We) && e.revert && e.revert(t);
                    }),
                    this._r.forEach(function (e) {
                      return e(t, r);
                    }),
                    (this.isReverted = !0);
                } else
                  this.data.forEach(function (t) {
                    return t.kill && t.kill();
                  });
                if ((this.clear(), e)) {
                  var n = Mr.indexOf(this);
                  ~n && Mr.splice(n, 1);
                }
              }),
              (e.revert = function (t) {
                this.kill(t || {});
              }),
              t
            );
          })(),
          Pr = (function () {
            function t(t) {
              (this.contexts = []), (this.scope = t);
            }
            var e = t.prototype;
            return (
              (e.add = function (t, e, r) {
                A(t) || (t = { matches: t });
                var i,
                  n,
                  s,
                  a = new Er(0, r || this.scope),
                  u = (a.conditions = {});
                for (n in (this.contexts.push(a),
                (e = a.add("onMatch", e)),
                (a.queries = t),
                t))
                  "all" === n
                    ? (s = 1)
                    : (i = o.matchMedia(t[n])) &&
                      (Mr.indexOf(a) < 0 && Mr.push(a),
                      (u[n] = i.matches) && (s = 1),
                      i.addListener
                        ? i.addListener(Dr)
                        : i.addEventListener("change", Dr));
                return s && e(a), this;
              }),
              (e.revert = function (t) {
                this.kill(t || {});
              }),
              (e.kill = function (t) {
                this.contexts.forEach(function (e) {
                  return e.kill(t, !0);
                });
              }),
              t
            );
          })(),
          Sr = {
            registerPlugin: function () {
              for (
                var t = arguments.length, e = new Array(t), r = 0;
                r < t;
                r++
              )
                e[r] = arguments[r];
              e.forEach(function (t) {
                return we(t);
              });
            },
            timeline: function (t) {
              return new He(t);
            },
            getTweensOf: function (t, e) {
              return a.getTweensOf(t, e);
            },
            getProperty: function (t, e, r, i) {
              M(t) && (t = re(t)[0]);
              var n = at(t || {}).get,
                s = r ? mt : dt;
              return (
                "native" === r && (r = ""),
                t
                  ? e
                    ? s(((tt[e] && tt[e].get) || n)(t, e, r, i))
                    : function (e, r, i) {
                        return s(((tt[e] && tt[e].get) || n)(t, e, r, i));
                      }
                  : t
              );
            },
            quickSetter: function (t, e, r) {
              if ((t = re(t)).length > 1) {
                var i = t.map(function (t) {
                    return Br.quickSetter(t, e, r);
                  }),
                  n = i.length;
                return function (t) {
                  for (var e = n; e--; ) i[e](t);
                };
              }
              t = t[0] || {};
              var s = tt[e],
                a = at(t),
                o = (a.harness && (a.harness.aliases || {})[e]) || e,
                u = s
                  ? function (e) {
                      var i = new s();
                      (c._pt = 0),
                        i.init(t, r ? e + r : e, c, 0, [t]),
                        i.render(1, i),
                        c._pt && vr(1, c);
                    }
                  : a.set(t, o);
              return s
                ? u
                : function (e) {
                    return u(t, o, r ? e + r : e, a, 1);
                  };
            },
            quickTo: function (t, e, r) {
              var i,
                n = Br.to(
                  t,
                  yt((((i = {})[e] = "+=0.1"), (i.paused = !0), i), r || {}),
                ),
                s = function (t, r, i) {
                  return n.resetTo(e, t, r, i);
                };
              return (s.tween = n), s;
            },
            isTweening: function (t) {
              return a.getTweensOf(t, !0).length > 0;
            },
            defaults: function (t) {
              return (
                t && t.ease && (t.ease = Xe(t.ease, d.ease)), Tt(d, t || {})
              );
            },
            config: function (t) {
              return Tt(_, t || {});
            },
            registerEffect: function (t) {
              var e = t.name,
                r = t.effect,
                i = t.plugins,
                n = t.defaults,
                s = t.extendTimeline;
              (i || "").split(",").forEach(function (t) {
                return (
                  t &&
                  !tt[t] &&
                  !U[t] &&
                  j(e + " effect requires " + t + " plugin.")
                );
              }),
                (et[e] = function (t, e, i) {
                  return r(re(t), gt(e || {}, n), i);
                }),
                s &&
                  (He.prototype[e] = function (t, r, i) {
                    return this.add(
                      et[e](t, A(r) ? r : (i = r) && {}, this),
                      i,
                    );
                  });
            },
            registerEase: function (t, e) {
              ze[t] = Xe(e);
            },
            parseEase: function (t, e) {
              return arguments.length ? Xe(t, e) : ze;
            },
            getById: function (t) {
              return a.getById(t);
            },
            exportRoot: function (t, e) {
              void 0 === t && (t = {});
              var r,
                i,
                n = new He(t);
              for (
                n.smoothChildTiming = D(t.smoothChildTiming),
                  a.remove(n),
                  n._dp = 0,
                  n._time = n._tTime = a._time,
                  r = a._first;
                r;

              )
                (i = r._next),
                  (!e &&
                    !r._dur &&
                    r instanceof hr &&
                    r.vars.onComplete === r._targets[0]) ||
                    Lt(n, r, r._start - r._delay),
                  (r = i);
              return Lt(a, n, 0), n;
            },
            context: function (t, e) {
              return t ? new Er(t, e) : s;
            },
            matchMedia: function (t) {
              return new Pr(t);
            },
            matchMediaRefresh: function () {
              return (
                Mr.forEach(function (t) {
                  var e,
                    r,
                    i = t.conditions;
                  for (r in i) i[r] && ((i[r] = !1), (e = 1));
                  e && t.revert();
                }) || Dr()
              );
            },
            addEventListener: function (t, e) {
              var r = kr[t] || (kr[t] = []);
              ~r.indexOf(e) || r.push(e);
            },
            removeEventListener: function (t, e) {
              var r = kr[t],
                i = r && r.indexOf(e);
              i >= 0 && r.splice(i, 1);
            },
            utils: {
              wrap: pe,
              wrapYoyo: _e,
              distribute: se,
              random: ue,
              snap: oe,
              normalize: le,
              getUnit: $t,
              clamp: Jt,
              splitColor: Oe,
              toArray: re,
              selector: ie,
              mapRange: me,
              pipe: he,
              unitize: fe,
              interpolate: ge,
              shuffle: ne,
            },
            install: q,
            effects: et,
            ticker: Se,
            updateRoot: He.updateRoot,
            plugins: tt,
            globalTimeline: a,
            core: {
              PropTween: br,
              globals: Q,
              Tween: hr,
              Timeline: He,
              Animation: We,
              getCache: at,
              _removeLinkedListItem: kt,
              reverting: function () {
                return n;
              },
              context: function (t) {
                return t && s && (s.data.push(t), (t._ctx = s)), s;
              },
              suppressOverwrites: function (t) {
                return (i = t);
              },
            },
          };
        ut("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
          return (Sr[t] = hr[t]);
        }),
          Se.add(He.updateRoot),
          (c = Sr.to({}, { duration: 0 }));
        var Rr = function (t, e) {
            for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
              r = r._next;
            return r;
          },
          zr = function (t, e) {
            var r,
              i,
              n,
              s = t._targets;
            for (r in e)
              for (i = s.length; i--; )
                (n = t._ptLookup[i][r]) &&
                  (n = n.d) &&
                  (n._pt && (n = Rr(n, r)),
                  n && n.modifier && n.modifier(e[r], t, s[i], r));
          },
          Fr = function (t, e) {
            return {
              name: t,
              rawVars: 1,
              init: function (t, r, i) {
                i._onInit = function (t) {
                  var i, n;
                  if (
                    (M(r) &&
                      ((i = {}),
                      ut(r, function (t) {
                        return (i[t] = 1);
                      }),
                      (r = i)),
                    e)
                  ) {
                    for (n in ((i = {}), r)) i[n] = e(r[n]);
                    r = i;
                  }
                  zr(t, r);
                };
              },
            };
          },
          Br =
            Sr.registerPlugin(
              {
                name: "attr",
                init: function (t, e, r, i, n) {
                  var s, a, o;
                  for (s in ((this.tween = r), e))
                    (o = t.getAttribute(s) || ""),
                      ((a = this.add(
                        t,
                        "setAttribute",
                        (o || 0) + "",
                        e[s],
                        i,
                        n,
                        0,
                        0,
                        s,
                      )).op = s),
                      (a.b = o),
                      this._props.push(s);
                },
                render: function (t, e) {
                  for (var r = e._pt; r; )
                    n ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
                },
              },
              {
                name: "endArray",
                init: function (t, e) {
                  for (var r = e.length; r--; )
                    this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
                },
              },
              Fr("roundProps", ae),
              Fr("modifiers"),
              Fr("snap", oe),
            ) || Sr;
        (hr.version = He.version = Br.version = "3.11.5"), (f = 1), E() && Re();
        var Lr,
          Ir,
          Yr,
          Nr,
          Ur,
          Xr,
          qr,
          Vr,
          jr = ze.Power0,
          Qr = ze.Power1,
          Gr = ze.Power2,
          Wr = ze.Power3,
          Hr = ze.Power4,
          Zr = ze.Linear,
          $r = ze.Quad,
          Jr = ze.Cubic,
          Kr = ze.Quart,
          ti = ze.Quint,
          ei = ze.Strong,
          ri = ze.Elastic,
          ii = ze.Back,
          ni = ze.SteppedEase,
          si = ze.Bounce,
          ai = ze.Sine,
          oi = ze.Expo,
          ui = ze.Circ,
          hi = function () {
            return "undefined" !== typeof window;
          },
          fi = {},
          li = 180 / Math.PI,
          ci = Math.PI / 180,
          pi = Math.atan2,
          _i = 1e8,
          di = /([A-Z])/g,
          mi = /(left|right|width|margin|padding|x)/i,
          gi = /[\s,\(]\S/,
          vi = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity",
          },
          yi = function (t, e) {
            return e.set(
              e.t,
              e.p,
              Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
              e,
            );
          },
          Ti = function (t, e) {
            return e.set(
              e.t,
              e.p,
              1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
              e,
            );
          },
          xi = function (t, e) {
            return e.set(
              e.t,
              e.p,
              t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
              e,
            );
          },
          wi = function (t, e) {
            var r = e.s + e.c * t;
            e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
          },
          bi = function (t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e);
          },
          Mi = function (t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
          },
          ki = function (t, e, r) {
            return (t.style[e] = r);
          },
          Oi = function (t, e, r) {
            return t.style.setProperty(e, r);
          },
          Ci = function (t, e, r) {
            return (t._gsap[e] = r);
          },
          Ai = function (t, e, r) {
            return (t._gsap.scaleX = t._gsap.scaleY = r);
          },
          Di = function (t, e, r, i, n) {
            var s = t._gsap;
            (s.scaleX = s.scaleY = r), s.renderTransform(n, s);
          },
          Ei = function (t, e, r, i, n) {
            var s = t._gsap;
            (s[e] = r), s.renderTransform(n, s);
          },
          Pi = "transform",
          Si = Pi + "Origin",
          Ri = function t(e, r) {
            var i = this,
              n = this.target,
              s = n.style;
            if (e in fi) {
              if (((this.tfm = this.tfm || {}), "transform" === e))
                return vi.transform.split(",").forEach(function (e) {
                  return t.call(i, e, r);
                });
              if (
                (~(e = vi[e] || e).indexOf(",")
                  ? e.split(",").forEach(function (t) {
                      return (i.tfm[t] = $i(n, t));
                    })
                  : (this.tfm[e] = n._gsap.x ? n._gsap[e] : $i(n, e)),
                this.props.indexOf(Pi) >= 0)
              )
                return;
              n._gsap.svg &&
                ((this.svgo = n.getAttribute("data-svg-origin")),
                this.props.push(Si, r, "")),
                (e = Pi);
            }
            (s || r) && this.props.push(e, r, s[e]);
          },
          zi = function (t) {
            t.translate &&
              (t.removeProperty("translate"),
              t.removeProperty("scale"),
              t.removeProperty("rotate"));
          },
          Fi = function () {
            var t,
              e,
              r = this.props,
              i = this.target,
              n = i.style,
              s = i._gsap;
            for (t = 0; t < r.length; t += 3)
              r[t + 1]
                ? (i[r[t]] = r[t + 2])
                : r[t + 2]
                  ? (n[r[t]] = r[t + 2])
                  : n.removeProperty(
                      "--" === r[t].substr(0, 2)
                        ? r[t]
                        : r[t].replace(di, "-$1").toLowerCase(),
                    );
            if (this.tfm) {
              for (e in this.tfm) s[e] = this.tfm[e];
              s.svg &&
                (s.renderTransform(),
                i.setAttribute("data-svg-origin", this.svgo || "")),
                ((t = qr()) && t.isStart) || n[Pi] || (zi(n), (s.uncache = 1));
            }
          },
          Bi = function (t, e) {
            var r = { target: t, props: [], revert: Fi, save: Ri };
            return (
              t._gsap || Br.core.getCache(t),
              e &&
                e.split(",").forEach(function (t) {
                  return r.save(t);
                }),
              r
            );
          },
          Li = function (t, e) {
            var r = Ir.createElementNS
              ? Ir.createElementNS(
                  (e || "http://www.w3.org/1999/xhtml").replace(
                    /^https/,
                    "http",
                  ),
                  t,
                )
              : Ir.createElement(t);
            return r.style ? r : Ir.createElement(t);
          },
          Ii = function t(e, r, i) {
            var n = getComputedStyle(e);
            return (
              n[r] ||
              n.getPropertyValue(r.replace(di, "-$1").toLowerCase()) ||
              n.getPropertyValue(r) ||
              (!i && t(e, Ni(r) || r, 1)) ||
              ""
            );
          },
          Yi = "O,Moz,ms,Ms,Webkit".split(","),
          Ni = function (t, e, r) {
            var i = (e || Ur).style,
              n = 5;
            if (t in i && !r) return t;
            for (
              t = t.charAt(0).toUpperCase() + t.substr(1);
              n-- && !(Yi[n] + t in i);

            );
            return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? Yi[n] : "") + t;
          },
          Ui = function () {
            hi() &&
              window.document &&
              ((Lr = window),
              (Ir = Lr.document),
              (Yr = Ir.documentElement),
              (Ur = Li("div") || { style: {} }),
              Li("div"),
              (Pi = Ni(Pi)),
              (Si = Pi + "Origin"),
              (Ur.style.cssText =
                "border-width:0;line-height:0;position:absolute;padding:0"),
              (Vr = !!Ni("perspective")),
              (qr = Br.core.reverting),
              (Nr = 1));
          },
          Xi = function t(e) {
            var r,
              i = Li(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg",
              ),
              n = this.parentNode,
              s = this.nextSibling,
              a = this.style.cssText;
            if (
              (Yr.appendChild(i),
              i.appendChild(this),
              (this.style.display = "block"),
              e)
            )
              try {
                (r = this.getBBox()),
                  (this._gsapBBox = this.getBBox),
                  (this.getBBox = t);
              } catch (o) {}
            else this._gsapBBox && (r = this._gsapBBox());
            return (
              n && (s ? n.insertBefore(this, s) : n.appendChild(this)),
              Yr.removeChild(i),
              (this.style.cssText = a),
              r
            );
          },
          qi = function (t, e) {
            for (var r = e.length; r--; )
              if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
          },
          Vi = function (t) {
            var e;
            try {
              e = t.getBBox();
            } catch (r) {
              e = Xi.call(t, !0);
            }
            return (
              (e && (e.width || e.height)) ||
                t.getBBox === Xi ||
                (e = Xi.call(t, !0)),
              !e || e.width || e.x || e.y
                ? e
                : {
                    x: +qi(t, ["x", "cx", "x1"]) || 0,
                    y: +qi(t, ["y", "cy", "y1"]) || 0,
                    width: 0,
                    height: 0,
                  }
            );
          },
          ji = function (t) {
            return !(
              !t.getCTM ||
              (t.parentNode && !t.ownerSVGElement) ||
              !Vi(t)
            );
          },
          Qi = function (t, e) {
            if (e) {
              var r = t.style;
              e in fi && e !== Si && (e = Pi),
                r.removeProperty
                  ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                      (e = "-" + e),
                    r.removeProperty(e.replace(di, "-$1").toLowerCase()))
                  : r.removeAttribute(e);
            }
          },
          Gi = function (t, e, r, i, n, s) {
            var a = new br(t._pt, e, r, 0, 1, s ? Mi : bi);
            return (t._pt = a), (a.b = i), (a.e = n), t._props.push(r), a;
          },
          Wi = { deg: 1, rad: 1, turn: 1 },
          Hi = { grid: 1, flex: 1 },
          Zi = function t(e, r, i, n) {
            var s,
              a,
              o,
              u,
              h = parseFloat(i) || 0,
              f = (i + "").trim().substr((h + "").length) || "px",
              l = Ur.style,
              c = mi.test(r),
              p = "svg" === e.tagName.toLowerCase(),
              _ = (p ? "client" : "offset") + (c ? "Width" : "Height"),
              d = 100,
              m = "px" === n,
              g = "%" === n;
            return n === f || !h || Wi[n] || Wi[f]
              ? h
              : ("px" !== f && !m && (h = t(e, r, i, "px")),
                (u = e.getCTM && ji(e)),
                (!g && "%" !== f) || (!fi[r] && !~r.indexOf("adius"))
                  ? ((l[c ? "width" : "height"] = d + (m ? f : n)),
                    (a =
                      ~r.indexOf("adius") || ("em" === n && e.appendChild && !p)
                        ? e
                        : e.parentNode),
                    u && (a = (e.ownerSVGElement || {}).parentNode),
                    (a && a !== Ir && a.appendChild) || (a = Ir.body),
                    (o = a._gsap) &&
                    g &&
                    o.width &&
                    c &&
                    o.time === Se.time &&
                    !o.uncache
                      ? ht((h / o.width) * d)
                      : ((g || "%" === f) &&
                          !Hi[Ii(a, "display")] &&
                          (l.position = Ii(e, "position")),
                        a === e && (l.position = "static"),
                        a.appendChild(Ur),
                        (s = Ur[_]),
                        a.removeChild(Ur),
                        (l.position = "absolute"),
                        c &&
                          g &&
                          (((o = at(a)).time = Se.time), (o.width = a[_])),
                        ht(m ? (s * h) / d : s && h ? (d / s) * h : 0)))
                  : ((s = u ? e.getBBox()[c ? "width" : "height"] : e[_]),
                    ht(g ? (h / s) * d : (h / 100) * s)));
          },
          $i = function (t, e, r, i) {
            var n;
            return (
              Nr || Ui(),
              e in vi &&
                "transform" !== e &&
                ~(e = vi[e]).indexOf(",") &&
                (e = e.split(",")[0]),
              fi[e] && "transform" !== e
                ? ((n = fn(t, i)),
                  (n =
                    "transformOrigin" !== e
                      ? n[e]
                      : n.svg
                        ? n.origin
                        : ln(Ii(t, Si)) + " " + n.zOrigin + "px"))
                : (!(n = t.style[e]) ||
                    "auto" === n ||
                    i ||
                    ~(n + "").indexOf("calc(")) &&
                  (n =
                    (rn[e] && rn[e](t, e, r)) ||
                    Ii(t, e) ||
                    ot(t, e) ||
                    ("opacity" === e ? 1 : 0)),
              r && !~(n + "").trim().indexOf(" ") ? Zi(t, e, n, r) + r : n
            );
          },
          Ji = function (t, e, r, i) {
            if (!r || "none" === r) {
              var n = Ni(e, t, 1),
                s = n && Ii(t, n, 1);
              s && s !== r
                ? ((e = n), (r = s))
                : "borderColor" === e && (r = Ii(t, "borderTopColor"));
            }
            var a,
              o,
              u,
              h,
              f,
              l,
              c,
              p,
              d,
              m,
              g,
              v = new br(this._pt, t.style, e, 0, 1, gr),
              y = 0,
              T = 0;
            if (
              ((v.b = r),
              (v.e = i),
              (r += ""),
              "auto" === (i += "") &&
                ((t.style[e] = i), (i = Ii(t, e) || i), (t.style[e] = r)),
              Pe((a = [r, i])),
              (r = a[0]),
              (i = a[1]),
              (u = r.match(B) || []),
              (i.match(B) || []).length)
            ) {
              for (; (o = B.exec(i)); )
                (c = o[0]),
                  (d = i.substring(y, o.index)),
                  f
                    ? (f = (f + 1) % 5)
                    : ("rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5)) ||
                      (f = 1),
                  c !== (l = u[T++] || "") &&
                    ((h = parseFloat(l) || 0),
                    (g = l.substr((h + "").length)),
                    "=" === c.charAt(1) && (c = lt(h, c) + g),
                    (p = parseFloat(c)),
                    (m = c.substr((p + "").length)),
                    (y = B.lastIndex - m.length),
                    m ||
                      ((m = m || _.units[e] || g),
                      y === i.length && ((i += m), (v.e += m))),
                    g !== m && (h = Zi(t, e, l, m) || 0),
                    (v._pt = {
                      _next: v._pt,
                      p: d || 1 === T ? d : ",",
                      s: h,
                      c: p - h,
                      m: (f && f < 4) || "zIndex" === e ? Math.round : 0,
                    }));
              v.c = y < i.length ? i.substring(y, i.length) : "";
            } else v.r = "display" === e && "none" === i ? Mi : bi;
            return I.test(i) && (v.e = 0), (this._pt = v), v;
          },
          Ki = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%",
          },
          tn = function (t) {
            var e = t.split(" "),
              r = e[0],
              i = e[1] || "50%";
            return (
              ("top" !== r &&
                "bottom" !== r &&
                "left" !== i &&
                "right" !== i) ||
                ((t = r), (r = i), (i = t)),
              (e[0] = Ki[r] || r),
              (e[1] = Ki[i] || i),
              e.join(" ")
            );
          },
          en = function (t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
              var r,
                i,
                n,
                s = e.t,
                a = s.style,
                o = e.u,
                u = s._gsap;
              if ("all" === o || !0 === o) (a.cssText = ""), (i = 1);
              else
                for (n = (o = o.split(",")).length; --n > -1; )
                  (r = o[n]),
                    fi[r] && ((i = 1), (r = "transformOrigin" === r ? Si : Pi)),
                    Qi(s, r);
              i &&
                (Qi(s, Pi),
                u &&
                  (u.svg && s.removeAttribute("transform"),
                  fn(s, 1),
                  (u.uncache = 1),
                  zi(a)));
            }
          },
          rn = {
            clearProps: function (t, e, r, i, n) {
              if ("isFromStart" !== n.data) {
                var s = (t._pt = new br(t._pt, e, r, 0, 0, en));
                return (
                  (s.u = i), (s.pr = -10), (s.tween = n), t._props.push(r), 1
                );
              }
            },
          },
          nn = [1, 0, 0, 1, 0, 0],
          sn = {},
          an = function (t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
          },
          on = function (t) {
            var e = Ii(t, Pi);
            return an(e) ? nn : e.substr(7).match(F).map(ht);
          },
          un = function (t, e) {
            var r,
              i,
              n,
              s,
              a = t._gsap || at(t),
              o = t.style,
              u = on(t);
            return a.svg && t.getAttribute("transform")
              ? "1,0,0,1,0,0" ===
                (u = [
                  (n = t.transform.baseVal.consolidate().matrix).a,
                  n.b,
                  n.c,
                  n.d,
                  n.e,
                  n.f,
                ]).join(",")
                ? nn
                : u
              : (u !== nn ||
                  t.offsetParent ||
                  t === Yr ||
                  a.svg ||
                  ((n = o.display),
                  (o.display = "block"),
                  ((r = t.parentNode) && t.offsetParent) ||
                    ((s = 1), (i = t.nextElementSibling), Yr.appendChild(t)),
                  (u = on(t)),
                  n ? (o.display = n) : Qi(t, "display"),
                  s &&
                    (i
                      ? r.insertBefore(t, i)
                      : r
                        ? r.appendChild(t)
                        : Yr.removeChild(t))),
                e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
          },
          hn = function (t, e, r, i, n, s) {
            var a,
              o,
              u,
              h = t._gsap,
              f = n || un(t, !0),
              l = h.xOrigin || 0,
              c = h.yOrigin || 0,
              p = h.xOffset || 0,
              _ = h.yOffset || 0,
              d = f[0],
              m = f[1],
              g = f[2],
              v = f[3],
              y = f[4],
              T = f[5],
              x = e.split(" "),
              w = parseFloat(x[0]) || 0,
              b = parseFloat(x[1]) || 0;
            r
              ? f !== nn &&
                (o = d * v - m * g) &&
                ((u = w * (-m / o) + b * (d / o) - (d * T - m * y) / o),
                (w = w * (v / o) + b * (-g / o) + (g * T - v * y) / o),
                (b = u))
              : ((w =
                  (a = Vi(t)).x +
                  (~x[0].indexOf("%") ? (w / 100) * a.width : w)),
                (b =
                  a.y +
                  (~(x[1] || x[0]).indexOf("%") ? (b / 100) * a.height : b))),
              i || (!1 !== i && h.smooth)
                ? ((y = w - l),
                  (T = b - c),
                  (h.xOffset = p + (y * d + T * g) - y),
                  (h.yOffset = _ + (y * m + T * v) - T))
                : (h.xOffset = h.yOffset = 0),
              (h.xOrigin = w),
              (h.yOrigin = b),
              (h.smooth = !!i),
              (h.origin = e),
              (h.originIsAbsolute = !!r),
              (t.style[Si] = "0px 0px"),
              s &&
                (Gi(s, h, "xOrigin", l, w),
                Gi(s, h, "yOrigin", c, b),
                Gi(s, h, "xOffset", p, h.xOffset),
                Gi(s, h, "yOffset", _, h.yOffset)),
              t.setAttribute("data-svg-origin", w + " " + b);
          },
          fn = function (t, e) {
            var r = t._gsap || new Ge(t);
            if ("x" in r && !e && !r.uncache) return r;
            var i,
              n,
              s,
              a,
              o,
              u,
              h,
              f,
              l,
              c,
              p,
              d,
              m,
              g,
              v,
              y,
              T,
              x,
              w,
              b,
              M,
              k,
              O,
              C,
              A,
              D,
              E,
              P,
              S,
              R,
              z,
              F,
              B = t.style,
              L = r.scaleX < 0,
              I = "px",
              Y = "deg",
              N = getComputedStyle(t),
              U = Ii(t, Si) || "0";
            return (
              (i = n = s = u = h = f = l = c = p = 0),
              (a = o = 1),
              (r.svg = !(!t.getCTM || !ji(t))),
              N.translate &&
                (("none" === N.translate &&
                  "none" === N.scale &&
                  "none" === N.rotate) ||
                  (B[Pi] =
                    ("none" !== N.translate
                      ? "translate3d(" +
                        (N.translate + " 0 0")
                          .split(" ")
                          .slice(0, 3)
                          .join(", ") +
                        ") "
                      : "") +
                    ("none" !== N.rotate ? "rotate(" + N.rotate + ") " : "") +
                    ("none" !== N.scale
                      ? "scale(" + N.scale.split(" ").join(",") + ") "
                      : "") +
                    ("none" !== N[Pi] ? N[Pi] : "")),
                (B.scale = B.rotate = B.translate = "none")),
              (g = un(t, r.svg)),
              r.svg &&
                (r.uncache
                  ? ((A = t.getBBox()),
                    (U = r.xOrigin - A.x + "px " + (r.yOrigin - A.y) + "px"),
                    (C = ""))
                  : (C = !e && t.getAttribute("data-svg-origin")),
                hn(t, C || U, !!C || r.originIsAbsolute, !1 !== r.smooth, g)),
              (d = r.xOrigin || 0),
              (m = r.yOrigin || 0),
              g !== nn &&
                ((x = g[0]),
                (w = g[1]),
                (b = g[2]),
                (M = g[3]),
                (i = k = g[4]),
                (n = O = g[5]),
                6 === g.length
                  ? ((a = Math.sqrt(x * x + w * w)),
                    (o = Math.sqrt(M * M + b * b)),
                    (u = x || w ? pi(w, x) * li : 0),
                    (l = b || M ? pi(b, M) * li + u : 0) &&
                      (o *= Math.abs(Math.cos(l * ci))),
                    r.svg &&
                      ((i -= d - (d * x + m * b)), (n -= m - (d * w + m * M))))
                  : ((F = g[6]),
                    (R = g[7]),
                    (E = g[8]),
                    (P = g[9]),
                    (S = g[10]),
                    (z = g[11]),
                    (i = g[12]),
                    (n = g[13]),
                    (s = g[14]),
                    (h = (v = pi(F, S)) * li),
                    v &&
                      ((C = k * (y = Math.cos(-v)) + E * (T = Math.sin(-v))),
                      (A = O * y + P * T),
                      (D = F * y + S * T),
                      (E = k * -T + E * y),
                      (P = O * -T + P * y),
                      (S = F * -T + S * y),
                      (z = R * -T + z * y),
                      (k = C),
                      (O = A),
                      (F = D)),
                    (f = (v = pi(-b, S)) * li),
                    v &&
                      ((y = Math.cos(-v)),
                      (z = M * (T = Math.sin(-v)) + z * y),
                      (x = C = x * y - E * T),
                      (w = A = w * y - P * T),
                      (b = D = b * y - S * T)),
                    (u = (v = pi(w, x)) * li),
                    v &&
                      ((C = x * (y = Math.cos(v)) + w * (T = Math.sin(v))),
                      (A = k * y + O * T),
                      (w = w * y - x * T),
                      (O = O * y - k * T),
                      (x = C),
                      (k = A)),
                    h &&
                      Math.abs(h) + Math.abs(u) > 359.9 &&
                      ((h = u = 0), (f = 180 - f)),
                    (a = ht(Math.sqrt(x * x + w * w + b * b))),
                    (o = ht(Math.sqrt(O * O + F * F))),
                    (v = pi(k, O)),
                    (l = Math.abs(v) > 2e-4 ? v * li : 0),
                    (p = z ? 1 / (z < 0 ? -z : z) : 0)),
                r.svg &&
                  ((C = t.getAttribute("transform")),
                  (r.forceCSS =
                    t.setAttribute("transform", "") || !an(Ii(t, Pi))),
                  C && t.setAttribute("transform", C))),
              Math.abs(l) > 90 &&
                Math.abs(l) < 270 &&
                (L
                  ? ((a *= -1),
                    (l += u <= 0 ? 180 : -180),
                    (u += u <= 0 ? 180 : -180))
                  : ((o *= -1), (l += l <= 0 ? 180 : -180))),
              (e = e || r.uncache),
              (r.x =
                i -
                ((r.xPercent =
                  i &&
                  ((!e && r.xPercent) ||
                    (Math.round(t.offsetWidth / 2) === Math.round(-i)
                      ? -50
                      : 0)))
                  ? (t.offsetWidth * r.xPercent) / 100
                  : 0) +
                I),
              (r.y =
                n -
                ((r.yPercent =
                  n &&
                  ((!e && r.yPercent) ||
                    (Math.round(t.offsetHeight / 2) === Math.round(-n)
                      ? -50
                      : 0)))
                  ? (t.offsetHeight * r.yPercent) / 100
                  : 0) +
                I),
              (r.z = s + I),
              (r.scaleX = ht(a)),
              (r.scaleY = ht(o)),
              (r.rotation = ht(u) + Y),
              (r.rotationX = ht(h) + Y),
              (r.rotationY = ht(f) + Y),
              (r.skewX = l + Y),
              (r.skewY = c + Y),
              (r.transformPerspective = p + I),
              (r.zOrigin = parseFloat(U.split(" ")[2]) || 0) && (B[Si] = ln(U)),
              (r.xOffset = r.yOffset = 0),
              (r.force3D = _.force3D),
              (r.renderTransform = r.svg ? vn : Vr ? gn : pn),
              (r.uncache = 0),
              r
            );
          },
          ln = function (t) {
            return (t = t.split(" "))[0] + " " + t[1];
          },
          cn = function (t, e, r) {
            var i = $t(e);
            return ht(parseFloat(e) + parseFloat(Zi(t, "x", r + "px", i))) + i;
          },
          pn = function (t, e) {
            (e.z = "0px"),
              (e.rotationY = e.rotationX = "0deg"),
              (e.force3D = 0),
              gn(t, e);
          },
          _n = "0deg",
          dn = "0px",
          mn = ") ",
          gn = function (t, e) {
            var r = e || this,
              i = r.xPercent,
              n = r.yPercent,
              s = r.x,
              a = r.y,
              o = r.z,
              u = r.rotation,
              h = r.rotationY,
              f = r.rotationX,
              l = r.skewX,
              c = r.skewY,
              p = r.scaleX,
              _ = r.scaleY,
              d = r.transformPerspective,
              m = r.force3D,
              g = r.target,
              v = r.zOrigin,
              y = "",
              T = ("auto" === m && t && 1 !== t) || !0 === m;
            if (v && (f !== _n || h !== _n)) {
              var x,
                w = parseFloat(h) * ci,
                b = Math.sin(w),
                M = Math.cos(w);
              (w = parseFloat(f) * ci),
                (x = Math.cos(w)),
                (s = cn(g, s, b * x * -v)),
                (a = cn(g, a, -Math.sin(w) * -v)),
                (o = cn(g, o, M * x * -v + v));
            }
            d !== dn && (y += "perspective(" + d + mn),
              (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
              (T || s !== dn || a !== dn || o !== dn) &&
                (y +=
                  o !== dn || T
                    ? "translate3d(" + s + ", " + a + ", " + o + ") "
                    : "translate(" + s + ", " + a + mn),
              u !== _n && (y += "rotate(" + u + mn),
              h !== _n && (y += "rotateY(" + h + mn),
              f !== _n && (y += "rotateX(" + f + mn),
              (l === _n && c === _n) || (y += "skew(" + l + ", " + c + mn),
              (1 === p && 1 === _) || (y += "scale(" + p + ", " + _ + mn),
              (g.style[Pi] = y || "translate(0, 0)");
          },
          vn = function (t, e) {
            var r,
              i,
              n,
              s,
              a,
              o = e || this,
              u = o.xPercent,
              h = o.yPercent,
              f = o.x,
              l = o.y,
              c = o.rotation,
              p = o.skewX,
              _ = o.skewY,
              d = o.scaleX,
              m = o.scaleY,
              g = o.target,
              v = o.xOrigin,
              y = o.yOrigin,
              T = o.xOffset,
              x = o.yOffset,
              w = o.forceCSS,
              b = parseFloat(f),
              M = parseFloat(l);
            (c = parseFloat(c)),
              (p = parseFloat(p)),
              (_ = parseFloat(_)) && ((p += _ = parseFloat(_)), (c += _)),
              c || p
                ? ((c *= ci),
                  (p *= ci),
                  (r = Math.cos(c) * d),
                  (i = Math.sin(c) * d),
                  (n = Math.sin(c - p) * -m),
                  (s = Math.cos(c - p) * m),
                  p &&
                    ((_ *= ci),
                    (a = Math.tan(p - _)),
                    (n *= a = Math.sqrt(1 + a * a)),
                    (s *= a),
                    _ &&
                      ((a = Math.tan(_)),
                      (r *= a = Math.sqrt(1 + a * a)),
                      (i *= a))),
                  (r = ht(r)),
                  (i = ht(i)),
                  (n = ht(n)),
                  (s = ht(s)))
                : ((r = d), (s = m), (i = n = 0)),
              ((b && !~(f + "").indexOf("px")) ||
                (M && !~(l + "").indexOf("px"))) &&
                ((b = Zi(g, "x", f, "px")), (M = Zi(g, "y", l, "px"))),
              (v || y || T || x) &&
                ((b = ht(b + v - (v * r + y * n) + T)),
                (M = ht(M + y - (v * i + y * s) + x))),
              (u || h) &&
                ((a = g.getBBox()),
                (b = ht(b + (u / 100) * a.width)),
                (M = ht(M + (h / 100) * a.height))),
              (a =
                "matrix(" +
                r +
                "," +
                i +
                "," +
                n +
                "," +
                s +
                "," +
                b +
                "," +
                M +
                ")"),
              g.setAttribute("transform", a),
              w && (g.style[Pi] = a);
          },
          yn = function (t, e, r, i, n) {
            var s,
              a,
              o = 360,
              u = M(n),
              h = parseFloat(n) * (u && ~n.indexOf("rad") ? li : 1) - i,
              f = i + h + "deg";
            return (
              u &&
                ("short" === (s = n.split("_")[1]) &&
                  (h %= o) !== h % (o / 2) &&
                  (h += h < 0 ? o : -o),
                "cw" === s && h < 0
                  ? (h = ((h + o * _i) % o) - ~~(h / o) * o)
                  : "ccw" === s &&
                    h > 0 &&
                    (h = ((h - o * _i) % o) - ~~(h / o) * o)),
              (t._pt = a = new br(t._pt, e, r, i, h, Ti)),
              (a.e = f),
              (a.u = "deg"),
              t._props.push(r),
              a
            );
          },
          Tn = function (t, e) {
            for (var r in e) t[r] = e[r];
            return t;
          },
          xn = function (t, e, r) {
            var i,
              n,
              s,
              a,
              o,
              u,
              h,
              f = Tn({}, r._gsap),
              l = "perspective,force3D,transformOrigin,svgOrigin",
              c = r.style;
            for (n in (f.svg
              ? ((s = r.getAttribute("transform")),
                r.setAttribute("transform", ""),
                (c[Pi] = e),
                (i = fn(r, 1)),
                Qi(r, Pi),
                r.setAttribute("transform", s))
              : ((s = getComputedStyle(r)[Pi]),
                (c[Pi] = e),
                (i = fn(r, 1)),
                (c[Pi] = s)),
            fi))
              (s = f[n]) !== (a = i[n]) &&
                l.indexOf(n) < 0 &&
                ((o = $t(s) !== (h = $t(a)) ? Zi(r, n, s, h) : parseFloat(s)),
                (u = parseFloat(a)),
                (t._pt = new br(t._pt, i, n, o, u - o, yi)),
                (t._pt.u = h || 0),
                t._props.push(n));
            Tn(i, f);
          };
        ut("padding,margin,Width,Radius", function (t, e) {
          var r = "Top",
            i = "Right",
            n = "Bottom",
            s = "Left",
            a = (e < 3 ? [r, i, n, s] : [r + s, r + i, n + i, n + s]).map(
              function (r) {
                return e < 2 ? t + r : "border" + r + t;
              },
            );
          rn[e > 1 ? "border" + t : t] = function (t, e, r, i, n) {
            var s, o;
            if (arguments.length < 4)
              return (
                (s = a.map(function (e) {
                  return $i(t, e, r);
                })),
                5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o
              );
            (s = (i + "").split(" ")),
              (o = {}),
              a.forEach(function (t, e) {
                return (o[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
              }),
              t.init(e, o, n);
          };
        });
        var wn = {
          name: "css",
          register: Ui,
          targetTest: function (t) {
            return t.style && t.nodeType;
          },
          init: function (t, e, r, i, n) {
            var s,
              a,
              o,
              u,
              h,
              f,
              l,
              c,
              p,
              d,
              m,
              g,
              v,
              y,
              T,
              x,
              w = this._props,
              b = t.style,
              k = r.vars.startAt;
            for (l in (Nr || Ui(),
            (this.styles = this.styles || Bi(t)),
            (x = this.styles.props),
            (this.tween = r),
            e))
              if (
                "autoRound" !== l &&
                ((a = e[l]), !tt[l] || !er(l, e, r, i, t, n))
              )
                if (
                  ((h = typeof a),
                  (f = rn[l]),
                  "function" === h && (h = typeof (a = a.call(r, i, t, n))),
                  "string" === h && ~a.indexOf("random(") && (a = de(a)),
                  f)
                )
                  f(this, t, l, a, r) && (T = 1);
                else if ("--" === l.substr(0, 2))
                  (s = (getComputedStyle(t).getPropertyValue(l) + "").trim()),
                    (a += ""),
                    (De.lastIndex = 0),
                    De.test(s) || ((c = $t(s)), (p = $t(a))),
                    p ? c !== p && (s = Zi(t, l, s, p) + p) : c && (a += c),
                    this.add(b, "setProperty", s, a, i, n, 0, 0, l),
                    w.push(l),
                    x.push(l, 0, b[l]);
                else if ("undefined" !== h) {
                  if (
                    (k && l in k
                      ? ((s =
                          "function" === typeof k[l]
                            ? k[l].call(r, i, t, n)
                            : k[l]),
                        M(s) && ~s.indexOf("random(") && (s = de(s)),
                        $t(s + "") || (s += _.units[l] || $t($i(t, l)) || ""),
                        "=" === (s + "").charAt(1) && (s = $i(t, l)))
                      : (s = $i(t, l)),
                    (u = parseFloat(s)),
                    (d =
                      "string" === h &&
                      "=" === a.charAt(1) &&
                      a.substr(0, 2)) && (a = a.substr(2)),
                    (o = parseFloat(a)),
                    l in vi &&
                      ("autoAlpha" === l &&
                        (1 === u &&
                          "hidden" === $i(t, "visibility") &&
                          o &&
                          (u = 0),
                        x.push("visibility", 0, b.visibility),
                        Gi(
                          this,
                          b,
                          "visibility",
                          u ? "inherit" : "hidden",
                          o ? "inherit" : "hidden",
                          !o,
                        )),
                      "scale" !== l &&
                        "transform" !== l &&
                        ~(l = vi[l]).indexOf(",") &&
                        (l = l.split(",")[0])),
                    (m = l in fi))
                  )
                    if (
                      (this.styles.save(l),
                      g ||
                        (((v = t._gsap).renderTransform && !e.parseTransform) ||
                          fn(t, e.parseTransform),
                        (y = !1 !== e.smoothOrigin && v.smooth),
                        ((g = this._pt =
                          new br(
                            this._pt,
                            b,
                            Pi,
                            0,
                            1,
                            v.renderTransform,
                            v,
                            0,
                            -1,
                          )).dep = 1)),
                      "scale" === l)
                    )
                      (this._pt = new br(
                        this._pt,
                        v,
                        "scaleY",
                        v.scaleY,
                        (d ? lt(v.scaleY, d + o) : o) - v.scaleY || 0,
                        yi,
                      )),
                        (this._pt.u = 0),
                        w.push("scaleY", l),
                        (l += "X");
                    else {
                      if ("transformOrigin" === l) {
                        x.push(Si, 0, b[Si]),
                          (a = tn(a)),
                          v.svg
                            ? hn(t, a, 0, y, 0, this)
                            : ((p = parseFloat(a.split(" ")[2]) || 0) !==
                                v.zOrigin &&
                                Gi(this, v, "zOrigin", v.zOrigin, p),
                              Gi(this, b, l, ln(s), ln(a)));
                        continue;
                      }
                      if ("svgOrigin" === l) {
                        hn(t, a, 1, y, 0, this);
                        continue;
                      }
                      if (l in sn) {
                        yn(this, v, l, u, d ? lt(u, d + a) : a);
                        continue;
                      }
                      if ("smoothOrigin" === l) {
                        Gi(this, v, "smooth", v.smooth, a);
                        continue;
                      }
                      if ("force3D" === l) {
                        v[l] = a;
                        continue;
                      }
                      if ("transform" === l) {
                        xn(this, a, t);
                        continue;
                      }
                    }
                  else l in b || (l = Ni(l) || l);
                  if (
                    m ||
                    ((o || 0 === o) && (u || 0 === u) && !gi.test(a) && l in b)
                  )
                    o || (o = 0),
                      (c = (s + "").substr((u + "").length)) !==
                        (p = $t(a) || (l in _.units ? _.units[l] : c)) &&
                        (u = Zi(t, l, s, p)),
                      (this._pt = new br(
                        this._pt,
                        m ? v : b,
                        l,
                        u,
                        (d ? lt(u, d + o) : o) - u,
                        m ||
                        ("px" !== p && "zIndex" !== l) ||
                        !1 === e.autoRound
                          ? yi
                          : wi,
                      )),
                      (this._pt.u = p || 0),
                      c !== p &&
                        "%" !== p &&
                        ((this._pt.b = s), (this._pt.r = xi));
                  else if (l in b) Ji.call(this, t, l, s, d ? d + a : a);
                  else if (l in t)
                    this.add(t, l, s || t[l], d ? d + a : a, i, n);
                  else if ("parseTransform" !== l) {
                    V(l, a);
                    continue;
                  }
                  m || (l in b ? x.push(l, 0, b[l]) : x.push(l, 1, s || t[l])),
                    w.push(l);
                }
            T && wr(this);
          },
          render: function (t, e) {
            if (e.tween._time || !qr())
              for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
            else e.styles.revert();
          },
          get: $i,
          aliases: vi,
          getSetter: function (t, e, r) {
            var i = vi[e];
            return (
              i && i.indexOf(",") < 0 && (e = i),
              e in fi && e !== Si && (t._gsap.x || $i(t, "x"))
                ? r && Xr === r
                  ? "scale" === e
                    ? Ai
                    : Ci
                  : (Xr = r || {}) && ("scale" === e ? Di : Ei)
                : t.style && !C(t.style[e])
                  ? ki
                  : ~e.indexOf("-")
                    ? Oi
                    : _r(t, e)
            );
          },
          core: { _removeProperty: Qi, _getMatrix: un },
        };
        (Br.utils.checkPrefix = Ni),
          (Br.core.getStyleSaver = Bi),
          (function (t, e, r, i) {
            var n = ut(
              t +
                "," +
                e +
                ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
              function (t) {
                fi[t] = 1;
              },
            );
            ut(e, function (t) {
              (_.units[t] = "deg"), (sn[t] = 1);
            }),
              (vi[n[13]] = t + "," + e),
              ut(i, function (t) {
                var e = t.split(":");
                vi[e[1]] = n[e[0]];
              });
          })(
            "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
            "rotation,rotationX,rotationY,skewX,skewY",
            0,
            "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          ),
          ut(
            "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
            function (t) {
              _.units[t] = "px";
            },
          ),
          Br.registerPlugin(wn);
        var bn = Br.registerPlugin(wn) || Br,
          Mn = bn.core.Tween;
        (t.Back = ii),
          (t.Bounce = si),
          (t.CSSPlugin = wn),
          (t.Circ = ui),
          (t.Cubic = Jr),
          (t.Elastic = ri),
          (t.Expo = oi),
          (t.Linear = Zr),
          (t.Power0 = jr),
          (t.Power1 = Qr),
          (t.Power2 = Gr),
          (t.Power3 = Wr),
          (t.Power4 = Hr),
          (t.Quad = $r),
          (t.Quart = Kr),
          (t.Quint = ti),
          (t.Sine = ai),
          (t.SteppedEase = ni),
          (t.Strong = ei),
          (t.TimelineLite = He),
          (t.TimelineMax = He),
          (t.TweenLite = hr),
          (t.TweenMax = Mn),
          (t.default = bn),
          (t.gsap = bn),
          "undefined" === typeof window || window !== t
            ? Object.defineProperty(t, "__esModule", { value: !0 })
            : delete window.default;
      })(e);
    },
  },
]);
