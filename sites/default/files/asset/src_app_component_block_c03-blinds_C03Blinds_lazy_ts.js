"use strict";
(self.webpackChunkneom = self.webpackChunkneom || []).push([
  [
    "src_app_component_block_c03-blinds_C03Blinds_lazy_ts",
    "src_app_component_organism_o20-blind_O20Blind_lazy_ts",
  ],
  {
    48050: (e, t, s) => {
      s.r(t), s.d(t, { default: () => y });
      var t = s(80274),
        a = s(27988),
        i = s(36739),
        n = s(46211),
        r = s(20368),
        o = s(68666);
      class l extends a.Z {
        setupTransitionInTimeline(t, e, s) {
          var a;
          super.setupTransitionInTimeline(t, e, s),
            window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
              ((s = e.getElements(
                `[data-component="${o.default.displayName}"]`
              )),
              (a = e.getElements("[data-blinds-header]")),
              (e = e.getElement(`[data-component="${n.Z.displayName}"]`)),
              t.staggerFromTo(
                s.filter((e) => null !== e),
                0.6,
                { y: 200, autoAlpha: 0 },
                {
                  y: 0,
                  autoAlpha: 1,
                  clearProps: "y,opacity,visibility",
                  stagger: { amount: 0.5 },
                },
                0
              ),
              t.staggerFromTo(
                a.filter((e) => null !== e),
                0.4,
                { x: -50, autoAlpha: 0 },
                {
                  x: 0,
                  autoAlpha: 1,
                  clearProps: "y,opacity,visibility",
                  stagger: { amount: 0.5 },
                },
                0
              ),
              a.forEach((e) => {
                e = new r.C(e, { type: "lines,words" });
                t.add((0, i.Bc)(e, "left"), 1);
              }),
              e &&
                ((s = new r.C(e, { type: "lines,words" })),
                t.add((0, i.Nx)(s, "left"), 1.4)));
        }
        setupTransitionOutTimeline(e, t, s) {}
        setupLoopingAnimationTimeline(e, t, s) {}
      }
      const h = l;
      var d = s(19702),
        c = s(10732),
        u = s(49490),
        p = s(99111),
        v = s(37629),
        a = s(27404),
        m = s.n(a),
        L = s(54168),
        g = Object.defineProperty,
        E = (e, t, s) => {
          var a;
          return (
            (a = s),
            (t = "symbol" != typeof t ? t + "" : t) in (e = e)
              ? g(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (e[t] = a),
            s
          );
        };
      const b = class b extends t.Z {
        constructor(e) {
          super(e),
            E(this, "transitionController"),
            E(
              this,
              "hotspotsContainer",
              this.getElement("[data-blinds-container]")
            ),
            E(this, "header", this.getElement("[data-blinds-header]")),
            E(this, "headerMouseEnterListener"),
            E(this, "headerMouseLeaveListener"),
            E(this, "keyFeatures", this.getElements("[data-feature-item]")),
            E(this, "collapsibles", []),
            E(
              this,
              "isLargeDevice",
              v.Z.currentDeviceState.state > m().deviceState.SMALL
            ),
            (this.transitionController = new h(this)),
            (this.headerMouseEnterListener = this.toggleHeadingOpacity.bind(
              this,
              "mouseenter"
            )),
            (this.headerMouseLeaveListener = this.toggleHeadingOpacity.bind(
              this,
              "mouseleave"
            )),
            this.addEventListeners(),
            this.handleDeviceStateChange(v.Z.currentDeviceState);
        }
        addEventListeners() {
          this.keyFeatures.forEach((e) => {
            var t = this.getElement("[data-feature-item-content]", e),
              s = this.getElement("[data-feature-content]", e);
            if (!t) throw new Error("The feature button cannot be found");
            if (!s) throw new Error("The feature content cannot be found");
            this.addDisposableEventListener(t, "click", () =>
              this.handleKeyFeatureClick(e)
            );
            const a = (0, p.Z)(() => this.handleKeyFeatureMouseOver(e), 100);
            this.addDisposableEventListener(e, "mouseover", a),
              this.addDisposableEventListener(e, "mouseleave", () => {
                a.cancel(), this.handleKeyFeatureMouseLeave();
              }),
              this.collapsibles.push(new d.z(s, this.element));
          }),
            this.addDisposableEventListener(
              v.Z,
              c.M_.STATE_UPDATE,
              ({ data: e }) => this.handleDeviceStateChange(e)
            );
        }
        adopted() {
          return (
            (e = this),
            (r = null),
            (o = function* () {
              (0, L.o)(this.element);
            }),
            new Promise((t, s) => {
              var a = (e) => {
                  try {
                    n(o.next(e));
                  } catch (e) {
                    s(e);
                  }
                },
                i = (e) => {
                  try {
                    n(o.throw(e));
                  } catch (e) {
                    s(e);
                  }
                },
                n = (e) =>
                  e.done ? t(e.value) : Promise.resolve(e.value).then(a, i);
              n((o = o.apply(e, r)).next());
            })
          );
          var e, r, o;
        }
        toggleHeadingEventListeners() {
          this.hotspotsContainer &&
            (this.isLargeDevice
              ? (this.addDisposableEventListener(
                  this.hotspotsContainer,
                  "mouseenter",
                  this.headerMouseEnterListener
                ),
                this.addDisposableEventListener(
                  this.hotspotsContainer,
                  "mouseleave",
                  this.headerMouseLeaveListener
                ))
              : (this.hotspotsContainer.removeEventListener(
                  "mouseenter",
                  this.headerMouseEnterListener
                ),
                this.hotspotsContainer.removeEventListener(
                  "mouseleave",
                  this.headerMouseLeaveListener
                )));
        }
        toggleHeadingOpacity(e) {
          this.header &&
            this.header.classList.toggle(u.b.HIDDEN, "mouseenter" === e);
        }
        handleKeyFeatureMouseOver(e) {
          this.isLargeDevice && this.openFeature(e);
        }
        handleKeyFeatureMouseLeave() {
          this.isLargeDevice && this.closeFeatures();
        }
        handleKeyFeatureClick(t) {
          var e = this.keyFeatures.some(
            (e) => e === t && e.classList.contains(u.b.ACTIVE)
          );
          this.closeFeatures(),
            e ? this.updateCollapsibleState(t) : this.openFeature(t);
        }
        set isExpanded(e) {
          this.element.classList.toggle(u.b.EXPANDED, e);
        }
        updateCollapsibleState(s) {
          v.Z.currentDeviceState.state <= m().deviceState.SMALL &&
            this.collapsibles.forEach((e, t) => {
              e[t === this.keyFeatures.indexOf(s) ? "toggle" : "collapse"]();
            });
        }
        openFeature(e) {
          (this.isExpanded = !0),
            e.classList.add(b.WILL_CHANGE_CLASSNAME),
            e.classList.add(u.b.ACTIVE),
            this.updateCollapsibleState(e);
        }
        closeFeatures() {
          (this.isExpanded = !1),
            this.keyFeatures.forEach((e) => {
              e.classList.remove(b.WILL_CHANGE_CLASSNAME),
                e.classList.remove(u.b.ACTIVE);
            });
        }
        handleDeviceStateChange({ state: e }) {
          (this.isLargeDevice = e > m().deviceState.SMALL),
            this.collapsibles.forEach((e) => {
              this.isLargeDevice ? e.expand() : e.collapse();
            }),
            this.toggleHeadingEventListeners();
        }
      };
      E(b, "displayName", "c03-blinds"),
        E(b, "WILL_CHANGE_CLASSNAME", "-willChange");
      let y = b;
    },
    68666: (e, t, s) => {
      s.r(t), s.d(t, { default: () => n });
      var a,
        i,
        t = s(91344),
        s = Object.defineProperty;
      class n extends t.Z {}
      (t = n),
        (i = "o20-blind"),
        (a = "symbol" != typeof (a = "displayName") ? a + "" : a) in (t = t)
          ? s(t, a, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (t[a] = i);
    },
  },
]);
