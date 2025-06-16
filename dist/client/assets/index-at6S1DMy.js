import {
  bl as k,
  bm as x,
  bn as _,
  au as y,
  aB as R,
  bo as v,
  bp as w,
  R as E,
  j as a,
  bq as N,
  r as T,
  br as A,
  bs as C,
} from "./vendor-Cs3tEl9K.js";
import { am as e, an as D, ao as B } from "./common-7xWgF21w.js";
import "./react-hook-form-BZactneB.js";
import "./devlop-Cl3hj7Sz.js";
import "./react-markdown-Dvvyc3mB.js";
import "./micromark-util-sanitize-uri-fCPIOQI_.js";
import "./micromark-util-character-DIIuMKp-.js";
import "./unist-util-visit-C3udYUNf.js";
import "./unist-util-visit-parents-BzuIhZFT.js";
import "./unist-util-is-D9KQvrmg.js";
import "./micromark-util-decode-numeric-character-reference-CNs1qBpV.js";
import "./micromark-util-decode-string-strjl-tx.js";
import "./decode-named-character-reference-C3-224fz.js";
import "./micromark-util-normalize-identifier-C9ANKk3v.js";
import "./micromark-util-subtokenize-BC4BSQ9J.js";
import "./micromark-util-chunked-DrRIdSP-.js";
import "./micromark-util-combine-extensions-Bka6Sc1c.js";
import "./micromark-factory-space-dPqdQksm.js";
import "./micromark-core-commonmark-C2K9fkG2.js";
import "./micromark-util-classify-character-CLctRf--.js";
import "./micromark-util-resolve-all-PQCKh0dx.js";
import "./micromark-factory-destination-E6xdeSrE.js";
import "./micromark-factory-label-2Js-XmU_.js";
import "./micromark-factory-title-t6q44V3r.js";
import "./micromark-factory-whitespace-Bmg85E9T.js";
import "./mdast-util-to-string-C_aolqmU.js";
import "./remark-gfm-BHR-FM7M.js";
class J {
  create(o) {
    return new k.RestDictionaryService({
      apiHost: e.sitecoreApiHost,
      apiKey: e.sitecoreApiKey,
      siteName: o,
    });
  }
}
const O = new J();
function P(t, o, i) {
  return new Promise((s, h) => {
    const n = {
      debug: !1,
      lng: o,
      fallbackLng: !1,
      load: "currentOnly",
      interpolation: { escapeValue: !1 },
    };
    {
      const l = O.create(t),
        c = `${e.sitecoreApiHost}/sitecore/api/jss/dictionary/${e.sitecoreSiteName}/{{lng}}?sc_apikey=${e.sitecoreApiKey}`;
      (n.backend = {
        backends: e.connected ? [x] : [_, x],
        backendOptions: [
          { prefix: "jss-dic-translation", expirationTime: 10 * 60 * 1e3 },
          {
            loadPath: c,
            parse: (r) => {
              const p = JSON.parse(r);
              return p.phrases ? p.phrases : p;
            },
          },
        ],
      }),
        e.connected
          ? y.use({
              type: "backend",
              read(r, p, u) {
                l.fetchDictionaryData(r)
                  .then((m) => {
                    if (e.connected) {
                      fetch("/dictionary.json")
                        .then((f) => f.json())
                        .then((f) => {
                          u(null, R.all([f, m]));
                        });
                      return;
                    }
                    u(null, m);
                  })
                  .catch((m) => u(m, !1));
              },
            })
          : y.use(v),
        y.use(w).init(n, (r) => {
          r && h(r), s();
        });
    }
  });
}
const H = E.createContext(e),
  I = ({ sitecoreSiteName: t, children: o }) => {
    const i = e;
    return (
      t && (i.sitecoreSiteName = t),
      a.jsx(H.Provider, { value: i, children: o })
    );
  };
let j = e.defaultLanguage,
  d = null;
const b = document.getElementById("__JSS_STATE__");
b && (d = JSON.parse(b.innerHTML));
d && (j = d.sitecore.context.language);
window.getTrackingData = (t, o) => {
  var c;
  const i = (c = t.dataset) == null ? void 0 : c.trackingData;
  if (!i) return;
  const s = JSON.parse(i),
    n = Object.keys(s)[o],
    l = s[n];
  return { name: n, value: l };
};
const g = document.getElementById("root");
if (!g) throw "Could not find root element";
const S = g.dataset.siteName || e.sitecoreSiteName;
P(S, j)
  .then(() => D())
  .then(() => {
    N.hydrateRoot(
      g,
      a.jsx(T.StrictMode, {
        children: a.jsx(I, {
          sitecoreSiteName: S,
          children: a.jsx(A, {
            children: a.jsx(B, {
              path: window.location.pathname,
              Router: C,
              ssrState: d,
              siteName: S,
              routerContext: {},
            }),
          }),
        }),
      }),
    );
  });
//# sourceMappingURL=index-at6S1DMy.js.map
