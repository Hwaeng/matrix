"use strict";
(self.webpackChunkneom = self.webpackChunkneom || []).push([
  ["src_app_component_atom_a20-lottie-animation_A20LottieAnimation_lazy_ts"],
  {
    87408: (t, e, o) => {
      o.r(e), o.d(e, { default: () => s });
      var e = o(91344),
        i = o(39765),
        n = Object.defineProperty,
        a = (t, e, o) => {
          var i;
          return (
            (i = o),
            (e = "symbol" != typeof e ? e + "" : e) in (t = t)
              ? n(t, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (t[e] = i),
            o
          );
        },
        l = (t, l, s) =>
          new Promise((e, o) => {
            var i = (t) => {
                try {
                  a(s.next(t));
                } catch (t) {
                  o(t);
                }
              },
              n = (t) => {
                try {
                  a(s.throw(t));
                } catch (t) {
                  o(t);
                }
              },
              a = (t) =>
                t.done ? e(t.value) : Promise.resolve(t.value).then(i, n);
            a((s = s.apply(t, l)).next());
          });
      class s extends e.Z {
        constructor(t) {
          if (
            (super(t),
            a(
              this,
              "containerElement",
              this.getElement("[data-lottie-container]"),
            ),
            a(this, "lottieInstance", null),
            a(this, "options"),
            null === this.containerElement)
          )
            throw new Error("Lottie container component does not exist");
          var {
            lottieLoop: t,
            lottieJsonFilePath: e,
            lottieAutoplay: o,
          } = this.containerElement.dataset;
          let i = this.containerElement.dataset["lottieAssetsFolderPath"];
          if (void 0 === e) throw new Error("No JSON path for Lottie provided");
          i && "/" !== i.slice(-1) && (i += "/"),
            (this.options = {
              container: this.containerElement,
              path: e,
              loop: t,
              autoplay: o,
              assetsPath: i,
            });
        }
        adopted() {
          return l(this, null, function* () {
            if ("true" === this.options.autoplay)
              try {
                yield this.loadLottieLibrary(),
                  (this.lottieInstance = yield this.loadAnimation());
              } catch (t) {
                console.log(t);
              }
          });
        }
        loadAnimation() {
          const {
            container: i,
            path: n,
            loop: a,
            autoplay: l,
            assetsPath: s,
          } = this.options;
          return new Promise((t, e) => {
            if (window.bodymovin) {
              const o = window.bodymovin.loadAnimation({
                container: i,
                renderer: "svg",
                loop: "true" === a,
                autoplay: "true" === l,
                path: n,
                assetsPath: s,
              });
              o.addEventListener("DOMLoaded", () => t(o));
            } else e("Bodymovin not available");
          });
        }
        loadLottieLibrary() {
          return l(this, null, function* () {
            yield (0, i.v)({
              id: "lottie-web",
              source:
                "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.9.4/lottie.min.js",
            });
          });
        }
        play() {
          return l(this, null, function* () {
            if (!this.lottieInstance)
              try {
                yield this.loadLottieLibrary(),
                  (this.lottieInstance = yield this.loadAnimation()),
                  this.lottieInstance.play();
              } catch (t) {
                console.log(t);
              }
          });
        }
      }
      a(s, "displayName", "a20-lottie-animation");
    },
  },
]);
