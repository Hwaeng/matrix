import { n as A } from "./micromark-util-sanitize-uri-fCPIOQI_.js";
import { v as ye } from "./unist-util-visit-C3udYUNf.js";
class B {
  constructor(t, n, r) {
    (this.normal = n), (this.property = t), r && (this.space = r);
  }
}
B.prototype.normal = {};
B.prototype.property = {};
B.prototype.space = void 0;
function $(e) {
  return e.toLowerCase();
}
class m {
  constructor(t, n) {
    (this.attribute = n), (this.property = t);
  }
}
m.prototype.attribute = "";
m.prototype.booleanish = !1;
m.prototype.boolean = !1;
m.prototype.commaOrSpaceSeparated = !1;
m.prototype.commaSeparated = !1;
m.prototype.defined = !1;
m.prototype.mustUseProperty = !1;
m.prototype.number = !1;
m.prototype.overloadedBoolean = !1;
m.prototype.property = "";
m.prototype.spaceSeparated = !1;
m.prototype.space = void 0;
let me = 0;
const ge = N(),
  be = N(),
  we = N(),
  xe = N(),
  Ne = N(),
  ke = N(),
  Ae = N();
function N() {
  return 2 ** ++me;
}
const F = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: ge,
        booleanish: be,
        commaOrSpaceSeparated: Ae,
        commaSeparated: ke,
        number: xe,
        overloadedBoolean: we,
        spaceSeparated: Ne,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  j = Object.keys(F);
class ie extends m {
  constructor(t, n, r, i) {
    let s = -1;
    if ((super(t, n), X(this, "space", i), typeof r == "number"))
      for (; ++s < j.length; ) {
        const o = j[s];
        X(this, j[s], (r & F[o]) === F[o]);
      }
  }
}
ie.prototype.defined = !0;
function X(e, t, n) {
  n && (e[t] = n);
}
function Dt(e) {
  const t = {},
    n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const s = new ie(r, e.transform(e.attributes || {}, r), i, e.space);
    e.mustUseProperty &&
      e.mustUseProperty.includes(r) &&
      (s.mustUseProperty = !0),
      (t[r] = s),
      (n[$(r)] = r),
      (n[$(s.attribute)] = r);
  }
  return new B(t, n, e.space);
}
function Ie(e, t) {
  return t in e ? e[t] : t;
}
function Et(e, t) {
  return Ie(e, t.toLowerCase());
}
const se = le("end"),
  oe = le("start");
function le(e) {
  return t;
  function t(n) {
    const r = (n && n.position && n.position[e]) || {};
    if (
      typeof r.line == "number" &&
      r.line > 0 &&
      typeof r.column == "number" &&
      r.column > 0
    )
      return {
        line: r.line,
        column: r.column,
        offset:
          typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0,
      };
  }
}
function Se(e) {
  const t = oe(e),
    n = se(e);
  if (t && n) return { start: t, end: n };
}
function De(e) {
  return !e || typeof e != "object"
    ? ""
    : "position" in e || "type" in e
      ? K(e.position)
      : "start" in e || "end" in e
        ? K(e)
        : "line" in e || "column" in e
          ? M(e)
          : "";
}
function M(e) {
  return Q(e && e.line) + ":" + Q(e && e.column);
}
function K(e) {
  return M(e && e.start) + "-" + M(e && e.end);
}
function Q(e) {
  return e && typeof e == "number" ? e : 1;
}
class y extends Error {
  constructor(t, n, r) {
    super(), typeof n == "string" && ((r = n), (n = void 0));
    let i = "",
      s = {},
      o = !1;
    if (
      (n &&
        ("line" in n && "column" in n
          ? (s = { place: n })
          : "start" in n && "end" in n
            ? (s = { place: n })
            : "type" in n
              ? (s = { ancestors: [n], place: n.position })
              : (s = { ...n })),
      typeof t == "string"
        ? (i = t)
        : !s.cause && t && ((o = !0), (i = t.message), (s.cause = t)),
      !s.ruleId && !s.source && typeof r == "string")
    ) {
      const a = r.indexOf(":");
      a === -1
        ? (s.ruleId = r)
        : ((s.source = r.slice(0, a)), (s.ruleId = r.slice(a + 1)));
    }
    if (!s.place && s.ancestors && s.ancestors) {
      const a = s.ancestors[s.ancestors.length - 1];
      a && (s.place = a.position);
    }
    const l = s.place && "start" in s.place ? s.place.start : s.place;
    (this.ancestors = s.ancestors || void 0),
      (this.cause = s.cause || void 0),
      (this.column = l ? l.column : void 0),
      (this.fatal = void 0),
      this.file,
      (this.message = i),
      (this.line = l ? l.line : void 0),
      (this.name = De(s.place) || "1:1"),
      (this.place = s.place || void 0),
      (this.reason = this.message),
      (this.ruleId = s.ruleId || void 0),
      (this.source = s.source || void 0),
      (this.stack =
        o && s.cause && typeof s.cause.stack == "string" ? s.cause.stack : ""),
      this.actual,
      this.expected,
      this.note,
      this.url;
  }
}
y.prototype.file = "";
y.prototype.name = "";
y.prototype.reason = "";
y.prototype.message = "";
y.prototype.stack = "";
y.prototype.column = void 0;
y.prototype.line = void 0;
y.prototype.ancestors = void 0;
y.prototype.cause = void 0;
y.prototype.fatal = void 0;
y.prototype.place = void 0;
y.prototype.ruleId = void 0;
y.prototype.source = void 0;
const Tt = { resolveAll: ae() },
  Lt = ce("string"),
  Rt = ce("text");
function ce(e) {
  return { resolveAll: ae(e === "text" ? Ee : void 0), tokenize: t };
  function t(n) {
    const r = this,
      i = this.parser.constructs[e],
      s = n.attempt(i, o, l);
    return o;
    function o(c) {
      return f(c) ? s(c) : l(c);
    }
    function l(c) {
      if (c === null) {
        n.consume(c);
        return;
      }
      return n.enter("data"), n.consume(c), a;
    }
    function a(c) {
      return f(c) ? (n.exit("data"), s(c)) : (n.consume(c), a);
    }
    function f(c) {
      if (c === null) return !0;
      const p = i[c];
      let u = -1;
      if (p)
        for (; ++u < p.length; ) {
          const d = p[u];
          if (!d.previous || d.previous.call(r, r.previous)) return !0;
        }
      return !1;
    }
  }
}
function ae(e) {
  return t;
  function t(n, r) {
    let i = -1,
      s;
    for (; ++i <= n.length; )
      s === void 0
        ? n[i] && n[i][1].type === "data" && ((s = i), i++)
        : (!n[i] || n[i][1].type !== "data") &&
          (i !== s + 2 &&
            ((n[s][1].end = n[i - 1][1].end),
            n.splice(s + 2, i - s - 2),
            (i = s + 2)),
          (s = void 0));
    return e ? e(n, r) : n;
  }
}
function Ee(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if (
      (n === e.length || e[n][1].type === "lineEnding") &&
      e[n - 1][1].type === "data"
    ) {
      const r = e[n - 1][1],
        i = t.sliceStream(r);
      let s = i.length,
        o = -1,
        l = 0,
        a;
      for (; s--; ) {
        const f = i[s];
        if (typeof f == "string") {
          for (o = f.length; f.charCodeAt(o - 1) === 32; ) l++, o--;
          if (o) break;
          o = -1;
        } else if (f === -2) (a = !0), l++;
        else if (f !== -1) {
          s++;
          break;
        }
      }
      if ((t._contentTypeTextTrailing && n === e.length && (l = 0), l)) {
        const f = {
          type:
            n === e.length || a || l < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: s ? o : r.start._bufferIndex + o,
            _index: r.start._index + s,
            line: r.end.line,
            column: r.end.column - l,
            offset: r.end.offset - l,
          },
          end: { ...r.end },
        };
        (r.end = { ...f.start }),
          r.start.offset === r.end.offset
            ? Object.assign(r, f)
            : (e.splice(n, 0, ["enter", f, t], ["exit", f, t]), (n += 2));
      }
      n++;
    }
  return e;
}
function Te(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Le(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return (
    e.patch(t, n),
    [
      e.applyData(t, n),
      {
        type: "text",
        value: `
`,
      },
    ]
  );
}
function Re(e, t) {
  const n = t.value
      ? t.value +
        `
`
      : "",
    r = {};
  t.lang && (r.className = ["language-" + t.lang]);
  let i = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }],
  };
  return (
    t.meta && (i.data = { meta: t.meta }),
    e.patch(t, i),
    (i = e.applyData(t, i)),
    (i = { type: "element", tagName: "pre", properties: {}, children: [i] }),
    e.patch(t, i),
    i
  );
}
function Ce(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Be(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function _e(e, t) {
  const n =
      typeof e.options.clobberPrefix == "string"
        ? e.options.clobberPrefix
        : "user-content-",
    r = String(t.identifier).toUpperCase(),
    i = A(r.toLowerCase()),
    s = e.footnoteOrder.indexOf(r);
  let o,
    l = e.footnoteCounts.get(r);
  l === void 0
    ? ((l = 0), e.footnoteOrder.push(r), (o = e.footnoteOrder.length))
    : (o = s + 1),
    (l += 1),
    e.footnoteCounts.set(r, l);
  const a = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (l > 1 ? "-" + l : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"],
    },
    children: [{ type: "text", value: String(o) }],
  };
  e.patch(t, a);
  const f = { type: "element", tagName: "sup", properties: {}, children: [a] };
  return e.patch(t, f), e.applyData(t, f);
}
function je(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Pe(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function pe(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (
    (n === "collapsed"
      ? (r += "[]")
      : n === "full" && (r += "[" + (t.label || t.identifier) + "]"),
    t.type === "imageReference")
  )
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t),
    s = i[0];
  s && s.type === "text"
    ? (s.value = "[" + s.value)
    : i.unshift({ type: "text", value: "[" });
  const o = i[i.length - 1];
  return (
    o && o.type === "text"
      ? (o.value += r)
      : i.push({ type: "text", value: r }),
    i
  );
}
function Ue(e, t) {
  const n = String(t.identifier).toUpperCase(),
    r = e.definitionById.get(n);
  if (!r) return pe(e, t);
  const i = { src: A(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const s = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, s), e.applyData(t, s);
}
function ze(e, t) {
  const n = { src: A(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt),
    t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Fe(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = { type: "element", tagName: "code", properties: {}, children: [n] };
  return e.patch(t, r), e.applyData(t, r);
}
function Me(e, t) {
  const n = String(t.identifier).toUpperCase(),
    r = e.definitionById.get(n);
  if (!r) return pe(e, t);
  const i = { href: A(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const s = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t),
  };
  return e.patch(t, s), e.applyData(t, s);
}
function Ve(e, t) {
  const n = { href: A(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t),
  };
  return e.patch(t, r), e.applyData(t, r);
}
function He(e, t, n) {
  const r = e.all(t),
    i = n ? Je(n) : fe(t),
    s = {},
    o = [];
  if (typeof t.checked == "boolean") {
    const c = r[0];
    let p;
    c && c.type === "element" && c.tagName === "p"
      ? (p = c)
      : ((p = { type: "element", tagName: "p", properties: {}, children: [] }),
        r.unshift(p)),
      p.children.length > 0 && p.children.unshift({ type: "text", value: " " }),
      p.children.unshift({
        type: "element",
        tagName: "input",
        properties: { type: "checkbox", checked: t.checked, disabled: !0 },
        children: [],
      }),
      (s.className = ["task-list-item"]);
  }
  let l = -1;
  for (; ++l < r.length; ) {
    const c = r[l];
    (i || l !== 0 || c.type !== "element" || c.tagName !== "p") &&
      o.push({
        type: "text",
        value: `
`,
      }),
      c.type === "element" && c.tagName === "p" && !i
        ? o.push(...c.children)
        : o.push(c);
  }
  const a = r[r.length - 1];
  a &&
    (i || a.type !== "element" || a.tagName !== "p") &&
    o.push({
      type: "text",
      value: `
`,
    });
  const f = { type: "element", tagName: "li", properties: s, children: o };
  return e.patch(t, f), e.applyData(t, f);
}
function Je(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; ) t = fe(n[r]);
  }
  return t;
}
function fe(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Ye(e, t) {
  const n = {},
    r = e.all(t);
  let i = -1;
  for (
    typeof t.start == "number" && t.start !== 1 && (n.start = t.start);
    ++i < r.length;

  ) {
    const o = r[i];
    if (
      o.type === "element" &&
      o.tagName === "li" &&
      o.properties &&
      Array.isArray(o.properties.className) &&
      o.properties.className.includes("task-list-item")
    ) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const s = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0),
  };
  return e.patch(t, s), e.applyData(t, s);
}
function qe(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Ge(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function $e(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Xe(e, t) {
  const n = e.all(t),
    r = n.shift(),
    i = [];
  if (r) {
    const o = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0),
    };
    e.patch(t.children[0], o), i.push(o);
  }
  if (n.length > 0) {
    const o = {
        type: "element",
        tagName: "tbody",
        properties: {},
        children: e.wrap(n, !0),
      },
      l = oe(t.children[1]),
      a = se(t.children[t.children.length - 1]);
    l && a && (o.position = { start: l, end: a }), i.push(o);
  }
  const s = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0),
  };
  return e.patch(t, s), e.applyData(t, s);
}
function Ke(e, t, n) {
  const r = n ? n.children : void 0,
    s = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td",
    o = n && n.type === "table" ? n.align : void 0,
    l = o ? o.length : t.children.length;
  let a = -1;
  const f = [];
  for (; ++a < l; ) {
    const p = t.children[a],
      u = {},
      d = o ? o[a] : void 0;
    d && (u.align = d);
    let h = { type: "element", tagName: s, properties: u, children: [] };
    p && ((h.children = e.all(p)), e.patch(p, h), (h = e.applyData(p, h))),
      f.push(h);
  }
  const c = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(f, !0),
  };
  return e.patch(t, c), e.applyData(t, c);
}
function Qe(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
const W = 9,
  Z = 32;
function We(e) {
  const t = String(e),
    n = /\r?\n|\r/g;
  let r = n.exec(t),
    i = 0;
  const s = [];
  for (; r; )
    s.push(O(t.slice(i, r.index), i > 0, !0), r[0]),
      (i = r.index + r[0].length),
      (r = n.exec(t));
  return s.push(O(t.slice(i), i > 0, !1)), s.join("");
}
function O(e, t, n) {
  let r = 0,
    i = e.length;
  if (t) {
    let s = e.codePointAt(r);
    for (; s === W || s === Z; ) r++, (s = e.codePointAt(r));
  }
  if (n) {
    let s = e.codePointAt(i - 1);
    for (; s === W || s === Z; ) i--, (s = e.codePointAt(i - 1));
  }
  return i > r ? e.slice(r, i) : "";
}
function Ze(e, t) {
  const n = { type: "text", value: We(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Oe(e, t) {
  const n = { type: "element", tagName: "hr", properties: {}, children: [] };
  return e.patch(t, n), e.applyData(t, n);
}
const ve = {
  blockquote: Te,
  break: Le,
  code: Re,
  delete: Ce,
  emphasis: Be,
  footnoteReference: _e,
  heading: je,
  html: Pe,
  imageReference: Ue,
  image: ze,
  inlineCode: Fe,
  linkReference: Me,
  link: Ve,
  listItem: He,
  list: Ye,
  paragraph: qe,
  root: Ge,
  strong: $e,
  table: Xe,
  tableCell: Qe,
  tableRow: Ke,
  text: Ze,
  thematicBreak: Oe,
  toml: T,
  yaml: T,
  definition: T,
  footnoteDefinition: T,
};
function T() {}
const ue = -1,
  _ = 0,
  D = 1,
  R = 2,
  J = 3,
  Y = 4,
  q = 5,
  G = 6,
  he = 7,
  de = 8,
  v = typeof self == "object" ? self : globalThis,
  et = (e, t) => {
    const n = (i, s) => (e.set(s, i), i),
      r = (i) => {
        if (e.has(i)) return e.get(i);
        const [s, o] = t[i];
        switch (s) {
          case _:
          case ue:
            return n(o, i);
          case D: {
            const l = n([], i);
            for (const a of o) l.push(r(a));
            return l;
          }
          case R: {
            const l = n({}, i);
            for (const [a, f] of o) l[r(a)] = r(f);
            return l;
          }
          case J:
            return n(new Date(o), i);
          case Y: {
            const { source: l, flags: a } = o;
            return n(new RegExp(l, a), i);
          }
          case q: {
            const l = n(new Map(), i);
            for (const [a, f] of o) l.set(r(a), r(f));
            return l;
          }
          case G: {
            const l = n(new Set(), i);
            for (const a of o) l.add(r(a));
            return l;
          }
          case he: {
            const { name: l, message: a } = o;
            return n(new v[l](a), i);
          }
          case de:
            return n(BigInt(o), i);
          case "BigInt":
            return n(Object(BigInt(o)), i);
          case "ArrayBuffer":
            return n(new Uint8Array(o).buffer, o);
          case "DataView": {
            const { buffer: l } = new Uint8Array(o);
            return n(new DataView(l), o);
          }
        }
        return n(new v[s](o), i);
      };
    return r;
  },
  ee = (e) => et(new Map(), e)(0),
  k = "",
  { toString: tt } = {},
  { keys: nt } = Object,
  S = (e) => {
    const t = typeof e;
    if (t !== "object" || !e) return [_, t];
    const n = tt.call(e).slice(8, -1);
    switch (n) {
      case "Array":
        return [D, k];
      case "Object":
        return [R, k];
      case "Date":
        return [J, k];
      case "RegExp":
        return [Y, k];
      case "Map":
        return [q, k];
      case "Set":
        return [G, k];
      case "DataView":
        return [D, n];
    }
    return n.includes("Array")
      ? [D, n]
      : n.includes("Error")
        ? [he, n]
        : [R, n];
  },
  L = ([e, t]) => e === _ && (t === "function" || t === "symbol"),
  rt = (e, t, n, r) => {
    const i = (o, l) => {
        const a = r.push(o) - 1;
        return n.set(l, a), a;
      },
      s = (o) => {
        if (n.has(o)) return n.get(o);
        let [l, a] = S(o);
        switch (l) {
          case _: {
            let c = o;
            switch (a) {
              case "bigint":
                (l = de), (c = o.toString());
                break;
              case "function":
              case "symbol":
                if (e) throw new TypeError("unable to serialize " + a);
                c = null;
                break;
              case "undefined":
                return i([ue], o);
            }
            return i([l, c], o);
          }
          case D: {
            if (a) {
              let u = o;
              return (
                a === "DataView"
                  ? (u = new Uint8Array(o.buffer))
                  : a === "ArrayBuffer" && (u = new Uint8Array(o)),
                i([a, [...u]], o)
              );
            }
            const c = [],
              p = i([l, c], o);
            for (const u of o) c.push(s(u));
            return p;
          }
          case R: {
            if (a)
              switch (a) {
                case "BigInt":
                  return i([a, o.toString()], o);
                case "Boolean":
                case "Number":
                case "String":
                  return i([a, o.valueOf()], o);
              }
            if (t && "toJSON" in o) return s(o.toJSON());
            const c = [],
              p = i([l, c], o);
            for (const u of nt(o))
              (e || !L(S(o[u]))) && c.push([s(u), s(o[u])]);
            return p;
          }
          case J:
            return i([l, o.toISOString()], o);
          case Y: {
            const { source: c, flags: p } = o;
            return i([l, { source: c, flags: p }], o);
          }
          case q: {
            const c = [],
              p = i([l, c], o);
            for (const [u, d] of o)
              (e || !(L(S(u)) || L(S(d)))) && c.push([s(u), s(d)]);
            return p;
          }
          case G: {
            const c = [],
              p = i([l, c], o);
            for (const u of o) (e || !L(S(u))) && c.push(s(u));
            return p;
          }
        }
        const { message: f } = o;
        return i([l, { name: a, message: f }], o);
      };
    return s;
  },
  te = (e, { json: t, lossy: n } = {}) => {
    const r = [];
    return rt(!(t || n), !!t, new Map(), r)(e), r;
  },
  C =
    typeof structuredClone == "function"
      ? (e, t) =>
          t && ("json" in t || "lossy" in t) ? ee(te(e, t)) : structuredClone(e)
      : (e, t) => ee(te(e, t));
function it(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return (
    t > 1 &&
      n.push({
        type: "element",
        tagName: "sup",
        properties: {},
        children: [{ type: "text", value: String(t) }],
      }),
    n
  );
}
function st(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function ot(e) {
  const t =
      typeof e.options.clobberPrefix == "string"
        ? e.options.clobberPrefix
        : "user-content-",
    n = e.options.footnoteBackContent || it,
    r = e.options.footnoteBackLabel || st,
    i = e.options.footnoteLabel || "Footnotes",
    s = e.options.footnoteLabelTagName || "h2",
    o = e.options.footnoteLabelProperties || { className: ["sr-only"] },
    l = [];
  let a = -1;
  for (; ++a < e.footnoteOrder.length; ) {
    const f = e.footnoteById.get(e.footnoteOrder[a]);
    if (!f) continue;
    const c = e.all(f),
      p = String(f.identifier).toUpperCase(),
      u = A(p.toLowerCase());
    let d = 0;
    const h = [],
      x = e.footnoteCounts.get(p);
    for (; x !== void 0 && ++d <= x; ) {
      h.length > 0 && h.push({ type: "text", value: " " });
      let g = typeof n == "string" ? n : n(a, d);
      typeof g == "string" && (g = { type: "text", value: g }),
        h.push({
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + t + "fnref-" + u + (d > 1 ? "-" + d : ""),
            dataFootnoteBackref: "",
            ariaLabel: typeof r == "string" ? r : r(a, d),
            className: ["data-footnote-backref"],
          },
          children: Array.isArray(g) ? g : [g],
        });
    }
    const w = c[c.length - 1];
    if (w && w.type === "element" && w.tagName === "p") {
      const g = w.children[w.children.length - 1];
      g && g.type === "text"
        ? (g.value += " ")
        : w.children.push({ type: "text", value: " " }),
        w.children.push(...h);
    } else c.push(...h);
    const I = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + u },
      children: e.wrap(c, !0),
    };
    e.patch(f, I), l.push(I);
  }
  if (l.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: s,
          properties: { ...C(o), id: "footnote-label" },
          children: [{ type: "text", value: i }],
        },
        {
          type: "text",
          value: `
`,
        },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(l, !0),
        },
        {
          type: "text",
          value: `
`,
        },
      ],
    };
}
const V = {}.hasOwnProperty,
  lt = {};
function ct(e, t) {
  const n = t || lt,
    r = new Map(),
    i = new Map(),
    s = new Map(),
    o = { ...ve, ...n.handlers },
    l = {
      all: f,
      applyData: pt,
      definitionById: r,
      footnoteById: i,
      footnoteCounts: s,
      footnoteOrder: [],
      handlers: o,
      one: a,
      options: n,
      patch: at,
      wrap: ut,
    };
  return (
    ye(e, function (c) {
      if (c.type === "definition" || c.type === "footnoteDefinition") {
        const p = c.type === "definition" ? r : i,
          u = String(c.identifier).toUpperCase();
        p.has(u) || p.set(u, c);
      }
    }),
    l
  );
  function a(c, p) {
    const u = c.type,
      d = l.handlers[u];
    if (V.call(l.handlers, u) && d) return d(l, c, p);
    if (l.options.passThrough && l.options.passThrough.includes(u)) {
      if ("children" in c) {
        const { children: x, ...w } = c,
          I = C(w);
        return (I.children = l.all(c)), I;
      }
      return C(c);
    }
    return (l.options.unknownHandler || ft)(l, c, p);
  }
  function f(c) {
    const p = [];
    if ("children" in c) {
      const u = c.children;
      let d = -1;
      for (; ++d < u.length; ) {
        const h = l.one(u[d], c);
        if (h) {
          if (
            d &&
            u[d - 1].type === "break" &&
            (!Array.isArray(h) && h.type === "text" && (h.value = ne(h.value)),
            !Array.isArray(h) && h.type === "element")
          ) {
            const x = h.children[0];
            x && x.type === "text" && (x.value = ne(x.value));
          }
          Array.isArray(h) ? p.push(...h) : p.push(h);
        }
      }
    }
    return p;
  }
}
function at(e, t) {
  e.position && (t.position = Se(e));
}
function pt(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName,
      i = e.data.hChildren,
      s = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element") n.tagName = r;
      else {
        const o = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: o };
      }
    n.type === "element" && s && Object.assign(n.properties, C(s)),
      "children" in n &&
        n.children &&
        i !== null &&
        i !== void 0 &&
        (n.children = i);
  }
  return n;
}
function ft(e, t) {
  const n = t.data || {},
    r =
      "value" in t && !(V.call(n, "hProperties") || V.call(n, "hChildren"))
        ? { type: "text", value: t.value }
        : {
            type: "element",
            tagName: "div",
            properties: {},
            children: e.all(t),
          };
  return e.patch(t, r), e.applyData(t, r);
}
function ut(e, t) {
  const n = [];
  let r = -1;
  for (
    t &&
    n.push({
      type: "text",
      value: `
`,
    });
    ++r < e.length;

  )
    r &&
      n.push({
        type: "text",
        value: `
`,
      }),
      n.push(e[r]);
  return (
    t &&
      e.length > 0 &&
      n.push({
        type: "text",
        value: `
`,
      }),
    n
  );
}
function ne(e) {
  let t = 0,
    n = e.charCodeAt(t);
  for (; n === 9 || n === 32; ) t++, (n = e.charCodeAt(t));
  return e.slice(t);
}
function Ct(e, t) {
  const n = ct(e, t),
    r = n.one(e, void 0),
    i = ot(n),
    s = Array.isArray(r)
      ? { type: "root", children: r }
      : r || { type: "root", children: [] };
  return (
    i &&
      s.children.push(
        {
          type: "text",
          value: `
`,
        },
        i,
      ),
    s
  );
}
const b = { basename: ht, dirname: dt, extname: yt, join: mt, sep: "/" };
function ht(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  E(e);
  let n = 0,
    r = -1,
    i = e.length,
    s;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (s) {
          n = i + 1;
          break;
        }
      } else r < 0 && ((s = !0), (r = i + 1));
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e) return "";
  let o = -1,
    l = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (s) {
        n = i + 1;
        break;
      }
    } else
      o < 0 && ((s = !0), (o = i + 1)),
        l > -1 &&
          (e.codePointAt(i) === t.codePointAt(l--)
            ? l < 0 && (r = i)
            : ((l = -1), (r = o)));
  return n === r ? (r = o) : r < 0 && (r = e.length), e.slice(n, r);
}
function dt(e) {
  if ((E(e), e.length === 0)) return ".";
  let t = -1,
    n = e.length,
    r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0
    ? e.codePointAt(0) === 47
      ? "/"
      : "."
    : t === 1 && e.codePointAt(0) === 47
      ? "//"
      : e.slice(0, t);
}
function yt(e) {
  E(e);
  let t = e.length,
    n = -1,
    r = 0,
    i = -1,
    s = 0,
    o;
  for (; t--; ) {
    const l = e.codePointAt(t);
    if (l === 47) {
      if (o) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && ((o = !0), (n = t + 1)),
      l === 46 ? (i < 0 ? (i = t) : s !== 1 && (s = 1)) : i > -1 && (s = -1);
  }
  return i < 0 || n < 0 || s === 0 || (s === 1 && i === n - 1 && i === r + 1)
    ? ""
    : e.slice(i, n);
}
function mt(...e) {
  let t = -1,
    n;
  for (; ++t < e.length; )
    E(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : gt(n);
}
function gt(e) {
  E(e);
  const t = e.codePointAt(0) === 47;
  let n = bt(e, !t);
  return (
    n.length === 0 && !t && (n = "."),
    n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"),
    t ? "/" + n : n
  );
}
function bt(e, t) {
  let n = "",
    r = 0,
    i = -1,
    s = 0,
    o = -1,
    l,
    a;
  for (; ++o <= e.length; ) {
    if (o < e.length) l = e.codePointAt(o);
    else {
      if (l === 47) break;
      l = 47;
    }
    if (l === 47) {
      if (!(i === o - 1 || s === 1))
        if (i !== o - 1 && s === 2) {
          if (
            n.length < 2 ||
            r !== 2 ||
            n.codePointAt(n.length - 1) !== 46 ||
            n.codePointAt(n.length - 2) !== 46
          ) {
            if (n.length > 2) {
              if (((a = n.lastIndexOf("/")), a !== n.length - 1)) {
                a < 0
                  ? ((n = ""), (r = 0))
                  : ((n = n.slice(0, a)),
                    (r = n.length - 1 - n.lastIndexOf("/"))),
                  (i = o),
                  (s = 0);
                continue;
              }
            } else if (n.length > 0) {
              (n = ""), (r = 0), (i = o), (s = 0);
              continue;
            }
          }
          t && ((n = n.length > 0 ? n + "/.." : ".."), (r = 2));
        } else
          n.length > 0
            ? (n += "/" + e.slice(i + 1, o))
            : (n = e.slice(i + 1, o)),
            (r = o - i - 1);
      (i = o), (s = 0);
    } else l === 46 && s > -1 ? s++ : (s = -1);
  }
  return n;
}
function E(e) {
  if (typeof e != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
}
const wt = { cwd: xt };
function xt() {
  return "/";
}
function H(e) {
  return !!(
    e !== null &&
    typeof e == "object" &&
    "href" in e &&
    e.href &&
    "protocol" in e &&
    e.protocol &&
    e.auth === void 0
  );
}
function Nt(e) {
  if (typeof e == "string") e = new URL(e);
  else if (!H(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' +
        e +
        "`",
    );
    throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw ((t.code = "ERR_INVALID_URL_SCHEME"), t);
  }
  return kt(e);
}
function kt(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin',
    );
    throw ((r.code = "ERR_INVALID_FILE_URL_HOST"), r);
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters",
        );
        throw ((i.code = "ERR_INVALID_FILE_URL_PATH"), i);
      }
    }
  return decodeURIComponent(t);
}
const P = ["history", "path", "basename", "stem", "extname", "dirname"];
class Bt {
  constructor(t) {
    let n;
    t
      ? H(t)
        ? (n = { path: t })
        : typeof t == "string" || At(t)
          ? (n = { value: t })
          : (n = t)
      : (n = {}),
      (this.cwd = "cwd" in n ? "" : wt.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored;
    let r = -1;
    for (; ++r < P.length; ) {
      const s = P[r];
      s in n &&
        n[s] !== void 0 &&
        n[s] !== null &&
        (this[s] = s === "history" ? [...n[s]] : n[s]);
    }
    let i;
    for (i in n) P.includes(i) || (this[i] = n[i]);
  }
  get basename() {
    return typeof this.path == "string" ? b.basename(this.path) : void 0;
  }
  set basename(t) {
    z(t, "basename"),
      U(t, "basename"),
      (this.path = b.join(this.dirname || "", t));
  }
  get dirname() {
    return typeof this.path == "string" ? b.dirname(this.path) : void 0;
  }
  set dirname(t) {
    re(this.basename, "dirname"), (this.path = b.join(t || "", this.basename));
  }
  get extname() {
    return typeof this.path == "string" ? b.extname(this.path) : void 0;
  }
  set extname(t) {
    if ((U(t, "extname"), re(this.dirname, "extname"), t)) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = b.join(this.dirname, this.stem + (t || ""));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(t) {
    H(t) && (t = Nt(t)), z(t, "path"), this.path !== t && this.history.push(t);
  }
  get stem() {
    return typeof this.path == "string"
      ? b.basename(this.path, this.extname)
      : void 0;
  }
  set stem(t) {
    z(t, "stem"),
      U(t, "stem"),
      (this.path = b.join(this.dirname || "", t + (this.extname || "")));
  }
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw ((i.fatal = !0), i);
  }
  info(t, n, r) {
    const i = this.message(t, n, r);
    return (i.fatal = void 0), i;
  }
  message(t, n, r) {
    const i = new y(t, n, r);
    return (
      this.path && ((i.name = this.path + ":" + i.name), (i.file = this.path)),
      (i.fatal = !1),
      this.messages.push(i),
      i
    );
  }
  toString(t) {
    return this.value === void 0
      ? ""
      : typeof this.value == "string"
        ? this.value
        : new TextDecoder(t || void 0).decode(this.value);
  }
}
function U(e, t) {
  if (e && e.includes(b.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + b.sep + "`",
    );
}
function z(e, t) {
  if (!e) throw new Error("`" + t + "` cannot be empty");
}
function re(e, t) {
  if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function At(e) {
  return !!(
    e &&
    typeof e == "object" &&
    "byteLength" in e &&
    "byteOffset" in e
  );
}
export {
  ie as D,
  m as I,
  B as S,
  y as V,
  Et as a,
  be as b,
  Dt as c,
  ge as d,
  ke as e,
  Ie as f,
  Ae as g,
  $ as h,
  Lt as i,
  De as j,
  Ct as k,
  Bt as l,
  xe as n,
  we as o,
  oe as p,
  Tt as r,
  Ne as s,
  Rt as t,
};
//# sourceMappingURL=react-markdown-Dvvyc3mB.js.map
