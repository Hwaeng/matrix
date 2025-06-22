(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    5728: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(1878);
        },
      ]);
    },
    1878: function (n, e, t) {
      "use strict";
      t.r(e);
      var r,
        u = t(7568),
        i = t(6042),
        o = t(9396),
        a = t(4051),
        s = t.n(a),
        c = t(5893),
        f = t(2836),
        d = t(1043),
        l = t(5152),
        p = t.n(l),
        v = t(1752),
        _ = t(5704),
        b = (0, v.default)(),
        w =
          null === b ||
          void 0 === b ||
          null === (r = b.publicRuntimeConfig) ||
          void 0 === r
            ? void 0
            : r.devtools,
        h = p()(
          function () {
            return Promise.resolve().then(t.bind(t, 5704));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [5704];
              },
            },
            ssr: !1,
          },
        );
      function k() {
        var n,
          e = (0, d.v9)(f.tm);
        if (w && (0, d.v9)(f.Vu))
          return (0, c.jsx)(h, (0, i.Z)({ _self: [] }, e));
        var t =
          null === e ||
          void 0 === e ||
          null === (n = e.components) ||
          void 0 === n
            ? void 0
            : n.map(function (n, e) {
                return (0, o.Z)((0, i.Z)({}, n), { index: e });
              });
        return (0, c.jsx)(
          _.default,
          (0, o.Z)((0, i.Z)({ _self: [] }, e), { components: t }),
        );
      }
      (k.getInitialProps = (function () {
        var n = (0, u.Z)(
          s().mark(function n(e) {
            var t, r, u, o;
            return s().wrap(function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    if (((t = e.store), (r = e.query), !w)) {
                      n.next = 7;
                      break;
                    }
                    if (((u = r.params), void 0 === u.debug)) {
                      n.next = 7;
                      break;
                    }
                    return (n.next = 7), t.dispatch((0, f.ew)({ debug: !0 }));
                  case 7:
                    return (n.next = 9), t.dispatch((0, f.aL)((0, i.Z)({}, r)));
                  case 9:
                    return (o = n.sent), n.abrupt("return", o);
                  case 11:
                  case "end":
                    return n.stop();
                }
            }, n);
          }),
        );
        return function (e) {
          return n.apply(this, arguments);
        };
      })()),
        (e.default = k);
    },
  },
  function (n) {
    n.O(0, [9774, 2888, 179], function () {
      return (e = 5728), n((n.s = e));
      var e;
    });
    var e = n.O();
    _N_E = e;
  },
]);
