import { f as a } from "./micromark-factory-space-dPqdQksm.js";
import { m as u, f } from "./micromark-util-character-DIIuMKp-.js";
function p(r, e) {
  let t;
  return i;
  function i(n) {
    return u(n)
      ? (r.enter("lineEnding"), r.consume(n), r.exit("lineEnding"), (t = !0), i)
      : f(n)
        ? a(r, i, t ? "linePrefix" : "lineSuffix")(n)
        : e(n);
  }
}
export { p as f };
//# sourceMappingURL=micromark-factory-whitespace-Bmg85E9T.js.map
