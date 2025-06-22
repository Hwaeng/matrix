"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5567],
  {
    5567: function (e, r, n) {
      n.r(r),
        n.d(r, {
          default: function () {
            return i;
          },
        });
      var t = n(7294),
        o = n(1163),
        u = [
          "ArrowUp",
          "ArrowUp",
          "ArrowDown",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
          "ArrowLeft",
          "ArrowRight",
          "b",
          "a",
        ];
      function i() {
        var e = (0, o.useRouter)();
        return (
          (0, t.useEffect)(
            function () {
              var r,
                n = 0,
                t = function () {
                  n = 0;
                },
                o = function (o) {
                  var i = o.key;
                  clearTimeout(r),
                    i === u[n]
                      ? (n += 1) !== u.length
                        ? (r = setTimeout(t, 1e3))
                        : e.push("/humans.txt")
                      : (n = 0);
                };
              return (
                window.addEventListener("keydown", o, { passive: !0 }),
                function () {
                  window.removeEventListener("keydown", o, { passive: !0 }),
                    clearTimeout(r);
                }
              );
            },
            [e],
          ),
          null
        );
      }
    },
  },
]);
