webpackJsonp([0], {
  "/VNv": function(e, t, n) {
      var r = n("7IBo")
        , a = Object.prototype.hasOwnProperty
        , o = "undefined" != typeof Map;
      function i() {
          this._array = [],
          this._set = o ? new Map : Object.create(null)
      }
      i.fromArray = function(e, t) {
          for (var n = new i, r = 0, a = e.length; r < a; r++)
              n.add(e[r], t);
          return n
      }
      ,
      i.prototype.size = function() {
          return o ? this._set.size : Object.getOwnPropertyNames(this._set).length
      }
      ,
      i.prototype.add = function(e, t) {
          var n = o ? e : r.toSetString(e)
            , i = o ? this.has(e) : a.call(this._set, n)
            , u = this._array.length;
          i && !t || this._array.push(e),
          i || (o ? this._set.set(e, u) : this._set[n] = u)
      }
      ,
      i.prototype.has = function(e) {
          if (o)
              return this._set.has(e);
          var t = r.toSetString(e);
          return a.call(this._set, t)
      }
      ,
      i.prototype.indexOf = function(e) {
          if (o) {
              var t = this._set.get(e);
              if (t >= 0)
                  return t
          } else {
              var n = r.toSetString(e);
              if (a.call(this._set, n))
                  return this._set[n]
          }
          throw new Error('"' + e + '" is not in the set.')
      }
      ,
      i.prototype.at = function(e) {
          if (e >= 0 && e < this._array.length)
              return this._array[e];
          throw new Error("No element indexed by " + e)
      }
      ,
      i.prototype.toArray = function() {
          return this._array.slice()
      }
      ,
      t.ArraySet = i
  },
  "/oKX": function(e, t, n) {
      (e.exports = n("UTlt")(!0)).push([e.i, "\ntextarea.form-control[data-v-008facb7] {\n  height: auto;\n}\n.form-control[data-v-008facb7] {\n  display: block;\n  width: 100%;\n  max-width: 400px;\n  height: 33px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42;\n  color: #55595c;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 2px;\n  outline: none;\n}\n.charset[data-v-008facb7] {\n  margin-top: 16px;\n}\n.btns[data-v-008facb7] {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n.btns .btn[data-v-008facb7] {\n    margin-right: 8px;\n}\n.tip[data-v-008facb7] {\n  margin-top: 16px;\n  color: #999;\n}\n", "", {
          version: 3,
          sources: ["/Users/yunser/app/svg/src/views/Compress.vue"],
          names: [],
          mappings: ";AACA;EACE,aAAa;CACd;AACD;EACE,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;CACf;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;EACjB,oBAAoB;CACrB;AACD;IACI,kBAAkB;CACrB;AACD;EACE,iBAAiB;EACjB,YAAY;CACb",
          file: "Compress.vue",
          sourcesContent: ["\ntextarea.form-control[data-v-008facb7] {\n  height: auto;\n}\n.form-control[data-v-008facb7] {\n  display: block;\n  width: 100%;\n  max-width: 400px;\n  height: 33px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42;\n  color: #55595c;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 2px;\n  outline: none;\n}\n.charset[data-v-008facb7] {\n  margin-top: 16px;\n}\n.btns[data-v-008facb7] {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n.btns .btn[data-v-008facb7] {\n    margin-right: 8px;\n}\n.tip[data-v-008facb7] {\n  margin-top: 16px;\n  color: #999;\n}\n"],
          sourceRoot: ""
      }])
  },
  "0Nqt": function(e, t) {},
  "7IBo": function(e, t) {
      t.getArg = function(e, t, n) {
          if (t in e)
              return e[t];
          if (3 === arguments.length)
              return n;
          throw new Error('"' + t + '" is a required argument.')
      }
      ;
      var n = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/
        , r = /^data:.+\,.+$/;
      function a(e) {
          var t = e.match(n);
          return t ? {
              scheme: t[1],
              auth: t[2],
              host: t[3],
              port: t[4],
              path: t[5]
          } : null
      }
      function o(e) {
          var t = "";
          return e.scheme && (t += e.scheme + ":"),
          t += "//",
          e.auth && (t += e.auth + "@"),
          e.host && (t += e.host),
          e.port && (t += ":" + e.port),
          e.path && (t += e.path),
          t
      }
      function i(e) {
          var n = e
            , r = a(e);
          if (r) {
              if (!r.path)
                  return e;
              n = r.path
          }
          for (var i, u = t.isAbsolute(n), l = n.split(/\/+/), s = 0, c = l.length - 1; c >= 0; c--)
              "." === (i = l[c]) ? l.splice(c, 1) : ".." === i ? s++ : s > 0 && ("" === i ? (l.splice(c + 1, s),
              s = 0) : (l.splice(c, 2),
              s--));
          return "" === (n = l.join("/")) && (n = u ? "/" : "."),
          r ? (r.path = n,
          o(r)) : n
      }
      function u(e, t) {
          "" === e && (e = "."),
          "" === t && (t = ".");
          var n = a(t)
            , u = a(e);
          if (u && (e = u.path || "/"),
          n && !n.scheme)
              return u && (n.scheme = u.scheme),
              o(n);
          if (n || t.match(r))
              return t;
          if (u && !u.host && !u.path)
              return u.host = t,
              o(u);
          var l = "/" === t.charAt(0) ? t : i(e.replace(/\/+$/, "") + "/" + t);
          return u ? (u.path = l,
          o(u)) : l
      }
      t.urlParse = a,
      t.urlGenerate = o,
      t.normalize = i,
      t.join = u,
      t.isAbsolute = function(e) {
          return "/" === e.charAt(0) || n.test(e)
      }
      ,
      t.relative = function(e, t) {
          "" === e && (e = "."),
          e = e.replace(/\/$/, "");
          for (var n = 0; 0 !== t.indexOf(e + "/"); ) {
              var r = e.lastIndexOf("/");
              if (r < 0)
                  return t;
              if ((e = e.slice(0, r)).match(/^([^\/]+:\/)?\/*$/))
                  return t;
              ++n
          }
          return Array(n + 1).join("../") + t.substr(e.length + 1)
      }
      ;
      var l = !("__proto__"in Object.create(null));
      function s(e) {
          return e
      }
      function c(e) {
          if (!e)
              return !1;
          var t = e.length;
          if (t < 9)
              return !1;
          if (95 !== e.charCodeAt(t - 1) || 95 !== e.charCodeAt(t - 2) || 111 !== e.charCodeAt(t - 3) || 116 !== e.charCodeAt(t - 4) || 111 !== e.charCodeAt(t - 5) || 114 !== e.charCodeAt(t - 6) || 112 !== e.charCodeAt(t - 7) || 95 !== e.charCodeAt(t - 8) || 95 !== e.charCodeAt(t - 9))
              return !1;
          for (var n = t - 10; n >= 0; n--)
              if (36 !== e.charCodeAt(n))
                  return !1;
          return !0
      }
      function m(e, t) {
          return e === t ? 0 : null === e ? 1 : null === t ? -1 : e > t ? 1 : -1
      }
      t.toSetString = l ? s : function(e) {
          return c(e) ? "$" + e : e
      }
      ,
      t.fromSetString = l ? s : function(e) {
          return c(e) ? e.slice(1) : e
      }
      ,
      t.compareByOriginalPositions = function(e, t, n) {
          var r = m(e.source, t.source);
          return 0 !== r ? r : 0 != (r = e.originalLine - t.originalLine) ? r : 0 != (r = e.originalColumn - t.originalColumn) || n ? r : 0 != (r = e.generatedColumn - t.generatedColumn) ? r : 0 != (r = e.generatedLine - t.generatedLine) ? r : m(e.name, t.name)
      }
      ,
      t.compareByGeneratedPositionsDeflated = function(e, t, n) {
          var r = e.generatedLine - t.generatedLine;
          return 0 !== r ? r : 0 != (r = e.generatedColumn - t.generatedColumn) || n ? r : 0 !== (r = m(e.source, t.source)) ? r : 0 != (r = e.originalLine - t.originalLine) ? r : 0 != (r = e.originalColumn - t.originalColumn) ? r : m(e.name, t.name)
      }
      ,
      t.compareByGeneratedPositionsInflated = function(e, t) {
          var n = e.generatedLine - t.generatedLine;
          return 0 !== n ? n : 0 != (n = e.generatedColumn - t.generatedColumn) ? n : 0 !== (n = m(e.source, t.source)) ? n : 0 != (n = e.originalLine - t.originalLine) ? n : 0 != (n = e.originalColumn - t.originalColumn) ? n : m(e.name, t.name)
      }
      ,
      t.parseSourceMapInput = function(e) {
          return JSON.parse(e.replace(/^\)]}'[^\n]*\n/, ""))
      }
      ,
      t.computeSourceURL = function(e, t, n) {
          if (t = t || "",
          e && ("/" !== e[e.length - 1] && "/" !== t[0] && (e += "/"),
          t = e + t),
          n) {
              var r = a(n);
              if (!r)
                  throw new Error("sourceMapURL could not be parsed");
              if (r.path) {
                  var l = r.path.lastIndexOf("/");
                  l >= 0 && (r.path = r.path.substring(0, l + 1))
              }
              t = u(o(r), t)
          }
          return i(t)
      }
  },
  "8V2O": function(e, t, n) {
      var r = n("hCE9")
        , a = n("7IBo")
        , o = n("/VNv").ArraySet
        , i = n("GEDK").MappingList;
      function u(e) {
          e || (e = {}),
          this._file = a.getArg(e, "file", null),
          this._sourceRoot = a.getArg(e, "sourceRoot", null),
          this._skipValidation = a.getArg(e, "skipValidation", !1),
          this._sources = new o,
          this._names = new o,
          this._mappings = new i,
          this._sourcesContents = null
      }
      u.prototype._version = 3,
      u.fromSourceMap = function(e) {
          var t = e.sourceRoot
            , n = new u({
              file: e.file,
              sourceRoot: t
          });
          return e.eachMapping(function(e) {
              var r = {
                  generated: {
                      line: e.generatedLine,
                      column: e.generatedColumn
                  }
              };
              null != e.source && (r.source = e.source,
              null != t && (r.source = a.relative(t, r.source)),
              r.original = {
                  line: e.originalLine,
                  column: e.originalColumn
              },
              null != e.name && (r.name = e.name)),
              n.addMapping(r)
          }),
          e.sources.forEach(function(r) {
              var o = r;
              null !== t && (o = a.relative(t, r)),
              n._sources.has(o) || n._sources.add(o);
              var i = e.sourceContentFor(r);
              null != i && n.setSourceContent(r, i)
          }),
          n
      }
      ,
      u.prototype.addMapping = function(e) {
          var t = a.getArg(e, "generated")
            , n = a.getArg(e, "original", null)
            , r = a.getArg(e, "source", null)
            , o = a.getArg(e, "name", null);
          this._skipValidation || this._validateMapping(t, n, r, o),
          null != r && (r = String(r),
          this._sources.has(r) || this._sources.add(r)),
          null != o && (o = String(o),
          this._names.has(o) || this._names.add(o)),
          this._mappings.add({
              generatedLine: t.line,
              generatedColumn: t.column,
              originalLine: null != n && n.line,
              originalColumn: null != n && n.column,
              source: r,
              name: o
          })
      }
      ,
      u.prototype.setSourceContent = function(e, t) {
          var n = e;
          null != this._sourceRoot && (n = a.relative(this._sourceRoot, n)),
          null != t ? (this._sourcesContents || (this._sourcesContents = Object.create(null)),
          this._sourcesContents[a.toSetString(n)] = t) : this._sourcesContents && (delete this._sourcesContents[a.toSetString(n)],
          0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null))
      }
      ,
      u.prototype.applySourceMap = function(e, t, n) {
          var r = t;
          if (null == t) {
              if (null == e.file)
                  throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
              r = e.file
          }
          var i = this._sourceRoot;
          null != i && (r = a.relative(i, r));
          var u = new o
            , l = new o;
          this._mappings.unsortedForEach(function(t) {
              if (t.source === r && null != t.originalLine) {
                  var o = e.originalPositionFor({
                      line: t.originalLine,
                      column: t.originalColumn
                  });
                  null != o.source && (t.source = o.source,
                  null != n && (t.source = a.join(n, t.source)),
                  null != i && (t.source = a.relative(i, t.source)),
                  t.originalLine = o.line,
                  t.originalColumn = o.column,
                  null != o.name && (t.name = o.name))
              }
              var s = t.source;
              null == s || u.has(s) || u.add(s);
              var c = t.name;
              null == c || l.has(c) || l.add(c)
          }, this),
          this._sources = u,
          this._names = l,
          e.sources.forEach(function(t) {
              var r = e.sourceContentFor(t);
              null != r && (null != n && (t = a.join(n, t)),
              null != i && (t = a.relative(i, t)),
              this.setSourceContent(t, r))
          }, this)
      }
      ,
      u.prototype._validateMapping = function(e, t, n, r) {
          if (t && "number" != typeof t.line && "number" != typeof t.column)
              throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
          if ((!(e && "line"in e && "column"in e && e.line > 0 && e.column >= 0) || t || n || r) && !(e && "line"in e && "column"in e && t && "line"in t && "column"in t && e.line > 0 && e.column >= 0 && t.line > 0 && t.column >= 0 && n))
              throw new Error("Invalid mapping: " + JSON.stringify({
                  generated: e,
                  source: n,
                  original: t,
                  name: r
              }))
      }
      ,
      u.prototype._serializeMappings = function() {
          for (var e, t, n, o, i = 0, u = 1, l = 0, s = 0, c = 0, m = 0, f = "", p = this._mappings.toArray(), d = 0, y = p.length; d < y; d++) {
              if (e = "",
              (t = p[d]).generatedLine !== u)
                  for (i = 0; t.generatedLine !== u; )
                      e += ";",
                      u++;
              else if (d > 0) {
                  if (!a.compareByGeneratedPositionsInflated(t, p[d - 1]))
                      continue;
                  e += ","
              }
              e += r.encode(t.generatedColumn - i),
              i = t.generatedColumn,
              null != t.source && (o = this._sources.indexOf(t.source),
              e += r.encode(o - m),
              m = o,
              e += r.encode(t.originalLine - 1 - s),
              s = t.originalLine - 1,
              e += r.encode(t.originalColumn - l),
              l = t.originalColumn,
              null != t.name && (n = this._names.indexOf(t.name),
              e += r.encode(n - c),
              c = n)),
              f += e
          }
          return f
      }
      ,
      u.prototype._generateSourcesContent = function(e, t) {
          return e.map(function(e) {
              if (!this._sourcesContents)
                  return null;
              null != t && (e = a.relative(t, e));
              var n = a.toSetString(e);
              return Object.prototype.hasOwnProperty.call(this._sourcesContents, n) ? this._sourcesContents[n] : null
          }, this)
      }
      ,
      u.prototype.toJSON = function() {
          var e = {
              version: this._version,
              sources: this._sources.toArray(),
              names: this._names.toArray(),
              mappings: this._serializeMappings()
          };
          return null != this._file && (e.file = this._file),
          null != this._sourceRoot && (e.sourceRoot = this._sourceRoot),
          this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)),
          e
      }
      ,
      u.prototype.toString = function() {
          return JSON.stringify(this.toJSON())
      }
      ,
      t.SourceMapGenerator = u
  },
  "9AUj": function(e, t) {
      var n;
      n = function() {
          return this
      }();
      try {
          n = n || Function("return this")() || (0,
          eval)("this")
      } catch (e) {
          "object" == typeof window && (n = window)
      }
      e.exports = n
  },
  "A0g/": function(e, t, n) {
      var r, a, o, i;
      i = function(e, t) {
          function n(e, t, n) {
              setImmediate(function() {
                  e(t, n)
              })
          }
          function r(e, t) {
              try {
                  return JSON.parse(e.replace(/^\)\]\}'/, ""))
              } catch (e) {
                  throw e.sourceMapData = t,
                  e
              }
          }
          function a(e, t, n) {
              var r = t;
              try {
                  return String(e(r))
              } catch (e) {
                  throw e.sourceMapData = n,
                  e
              }
          }
          function o(e, t, a, o) {
              var i;
              try {
                  i = m(e, t)
              } catch (e) {
                  return n(o, e)
              }
              if (!i || i.map)
                  return n(o, null, i);
              a(i.url, function(e, t) {
                  if (e)
                      return e.sourceMapData = i,
                      o(e);
                  i.map = String(t);
                  try {
                      i.map = r(i.map, i)
                  } catch (e) {
                      return o(e)
                  }
                  o(null, i)
              })
          }
          function i(e, t, n) {
              var o = m(e, t);
              return !o || o.map ? o : (o.map = a(n, o.url, o),
              o.map = r(o.map, o),
              o)
          }
          var u = /^data:([^,;]*)(;[^,;]*)*(?:,(.*))?$/
            , l = /^(?:application|text)\/json$/
            , s = "utf-8";
          function c(e) {
              if ("undefined" == typeof TextDecoder || "undefined" == typeof Uint8Array)
                  return atob(e);
              var t = function(e) {
                  for (var t = atob(e), n = t.length, r = new Uint8Array(n), a = 0; a < n; a++)
                      r[a] = t.charCodeAt(a);
                  return r
              }(e);
              return new TextDecoder(s,{
                  fatal: !0
              }).decode(t)
          }
          function m(n, a) {
              var o = e.getFrom(n);
              if (!o)
                  return null;
              var i = o.match(u);
              if (i) {
                  var s = i[1] || "text/plain"
                    , m = i[2] || ""
                    , f = i[3] || ""
                    , p = {
                      sourceMappingURL: o,
                      url: null,
                      sourcesRelativeTo: a,
                      map: f
                  };
                  if (!l.test(s)) {
                      var d = new Error("Unuseful data uri mime type: " + s);
                      throw d.sourceMapData = p,
                      d
                  }
                  try {
                      p.map = r(";base64" === m ? c(f) : decodeURIComponent(f), p)
                  } catch (d) {
                      throw d.sourceMapData = p,
                      d
                  }
                  return p
              }
              var y = t(a, o);
              return {
                  sourceMappingURL: o,
                  url: y,
                  sourcesRelativeTo: y,
                  map: null
              }
          }
          function f(e, t, r, a, o) {
              "function" == typeof a && (o = a,
              a = {});
              var i = e.sources ? e.sources.length : 0
                , u = {
                  sourcesResolved: [],
                  sourcesContent: []
              };
              if (0 !== i) {
                  var l = function() {
                      0 === --i && o(null, u)
                  };
                  y(e, t, a, function(e, t, a) {
                      (u.sourcesResolved[a] = e,
                      "string" == typeof t) ? (u.sourcesContent[a] = t,
                      n(l, null)) : r(e, function(e, t) {
                          u.sourcesContent[a] = e || String(t),
                          l()
                      })
                  })
              } else
                  n(o, null, u)
          }
          function p(e, t, n, r) {
              var a = {
                  sourcesResolved: [],
                  sourcesContent: []
              };
              return e.sources && 0 !== e.sources.length ? (y(e, t, r, function(e, t, r) {
                  if (a.sourcesResolved[r] = e,
                  null !== n)
                      if ("string" == typeof t)
                          a.sourcesContent[r] = t;
                      else {
                          var o = e;
                          try {
                              a.sourcesContent[r] = String(n(o))
                          } catch (e) {
                              a.sourcesContent[r] = e
                          }
                      }
              }),
              a) : a
          }
          var d = /\/?$/;
          function y(e, n, r, a) {
              var o;
              r = r || {};
              for (var i = 0, u = e.sources.length; i < u; i++)
                  o = null,
                  "string" == typeof r.sourceRoot ? o = r.sourceRoot : "string" == typeof e.sourceRoot && !1 !== r.sourceRoot && (o = e.sourceRoot),
                  a(null === o || "" === o ? t(n, e.sources[i]) : t(n, o.replace(d, "/"), e.sources[i]), (e.sourcesContent || [])[i], i)
          }
          return {
              resolveSourceMap: o,
              resolveSourceMapSync: i,
              resolveSources: f,
              resolveSourcesSync: p,
              resolve: function(e, t, n, a, i) {
                  if ("function" == typeof a && (i = a,
                  a = {}),
                  null === e) {
                      var u = {
                          sourceMappingURL: null,
                          url: t,
                          sourcesRelativeTo: t,
                          map: null
                      };
                      n(t, function(e, t) {
                          if (e)
                              return e.sourceMapData = u,
                              i(e);
                          u.map = String(t);
                          try {
                              u.map = r(u.map, u)
                          } catch (e) {
                              return i(e)
                          }
                          l(u)
                      })
                  } else
                      o(e, t, n, function(e, t) {
                          return e ? i(e) : t ? void l(t) : i(null, null)
                      });
                  function l(e) {
                      f(e.map, e.sourcesRelativeTo, n, a, function(t, n) {
                          if (t)
                              return i(t);
                          e.sourcesResolved = n.sourcesResolved,
                          e.sourcesContent = n.sourcesContent,
                          i(null, e)
                      })
                  }
              },
              resolveSync: function(e, t, n, o) {
                  var u;
                  if (null === e)
                      (u = {
                          sourceMappingURL: null,
                          url: t,
                          sourcesRelativeTo: t,
                          map: null
                      }).map = a(n, t, u),
                      u.map = r(u.map, u);
                  else if (!(u = i(e, t, n)))
                      return null;
                  var l = p(u.map, u.sourcesRelativeTo, n, o);
                  return u.sourcesResolved = l.sourcesResolved,
                  u.sourcesContent = l.sourcesContent,
                  u
              },
              parseMapToJSON: r
          }
      }
      ,
      a = [n("LjmF"), n("CgRB")],
      void 0 === (o = "function" == typeof (r = i) ? r.apply(t, a) : r) || (e.exports = o)
  },
  BfyM: function(e, t, n) {
      t.SourceMapGenerator = n("8V2O").SourceMapGenerator,
      t.SourceMapConsumer = n("W1RK").SourceMapConsumer,
      t.SourceNode = n("YjFx").SourceNode
  },
  CgRB: function(e, t, n) {
      var r, a;
      void 0 === (a = "function" == typeof (r = function() {
          return function() {
              var e = arguments.length;
              if (0 === e)
                  throw new Error("resolveUrl requires at least one argument; got none.");
              var t = document.createElement("base");
              if (t.href = arguments[0],
              1 === e)
                  return t.href;
              var n = document.getElementsByTagName("head")[0];
              n.insertBefore(t, n.firstChild);
              for (var r, a = document.createElement("a"), o = 1; o < e; o++)
                  a.href = arguments[o],
                  r = a.href,
                  t.href = r;
              return n.removeChild(t),
              r
          }
      }
      ) ? r.call(t, n, t, e) : r) || (e.exports = a)
  },
  GEDK: function(e, t, n) {
      var r = n("7IBo");
      function a() {
          this._array = [],
          this._sorted = !0,
          this._last = {
              generatedLine: -1,
              generatedColumn: 0
          }
      }
      a.prototype.unsortedForEach = function(e, t) {
          this._array.forEach(e, t)
      }
      ,
      a.prototype.add = function(e) {
          var t, n, a, o, i, u;
          t = this._last,
          n = e,
          a = t.generatedLine,
          o = n.generatedLine,
          i = t.generatedColumn,
          u = n.generatedColumn,
          o > a || o == a && u >= i || r.compareByGeneratedPositionsInflated(t, n) <= 0 ? (this._last = e,
          this._array.push(e)) : (this._sorted = !1,
          this._array.push(e))
      }
      ,
      a.prototype.toArray = function() {
          return this._sorted || (this._array.sort(r.compareByGeneratedPositionsInflated),
          this._sorted = !0),
          this._array
      }
      ,
      t.MappingList = a
  },
  GyER: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      var r = n("kjeW")
        , a = {
          data: function() {
              return {
                  code: '<g></g>\n<g fill="red"><rect width="100" height="100"/></g>',
                  result: null,
                  page: {
                      menu: [{
                          type: "icon",
                          icon: "help",
                          href: "https://project.yunser.com/products/df3ed210e9b511eabd36bd87ff5eff33",
                          target: "_blank"
                      }]
                  }
              }
          },
          methods: {
              compress: function() {
                  var e = this;
                  this.code ? r(this.code).then(function(t) {
                      e.result = {
                          code: t,
                          before: e.code.length,
                          current: t.length,
                          rate: (t.length / e.code.length * 100).toFixed(1)
                      }
                  }) : alert("请输入 SVG 代码")
              }
          }
      }
        , o = {
          render: function() {
              var e = this
                , t = e.$createElement
                , n = e._self._c || t;
              return n("my-page", {
                  attrs: {
                      title: "SVG 压缩",
                      page: e.page
                  }
              }, [n("div", {
                  staticClass: "common-container"
              }, [n("textarea", {
                  directives: [{
                      name: "model",
                      rawName: "v-model",
                      value: e.code,
                      expression: "code"
                  }],
                  staticClass: "form-control",
                  attrs: {
                      rows: "6",
                      placeholder: "SVG 代码"
                  },
                  domProps: {
                      value: e.code
                  },
                  on: {
                      input: function(t) {
                          t.target.composing || (e.code = t.target.value)
                      }
                  }
              }), e._v(" "), n("div", {
                  staticClass: "btns"
              }, [n("ui-raised-button", {
                  staticClass: "btn",
                  attrs: {
                      primary: "",
                      label: "压缩"
                  },
                  on: {
                      click: e.compress
                  }
              })], 1), e._v(" "), e.result ? n("div", [n("textarea", {
                  directives: [{
                      name: "model",
                      rawName: "v-model",
                      value: e.result.code,
                      expression: "result.code"
                  }],
                  staticClass: "form-control",
                  attrs: {
                      rows: "6",
                      placeholder: "结果",
                      disabled: ""
                  },
                  domProps: {
                      value: e.result.code
                  },
                  on: {
                      input: function(t) {
                          t.target.composing || e.$set(e.result, "code", t.target.value)
                      }
                  }
              }), e._v(" "), n("div", {
                  staticClass: "tip"
              }, [e._v("压缩器代码长度: " + e._s(e.result.before) + "，压缩后代码长度：" + e._s(e.result.current) + "，压缩率为：" + e._s(e.result.rate) + "%。")])]) : e._e()])])
          },
          staticRenderFns: []
      };
      var i = n("C7Lr")(a, o, !1, function(e) {
          n("RD0Z")
      }, "data-v-008facb7", null);
      t.default = i.exports
  },
  LjmF: function(e, t, n) {
      var r, a;
      void 0 === (a = "function" == typeof (r = function() {
          var e = /[#@] sourceMappingURL=([^\s'"]*)/
            , t = RegExp("(?:/\\*(?:\\s*\r?\n(?://)?)?(?:" + e.source + ")\\s*\\*/|//(?:" + e.source + "))\\s*");
          return {
              regex: t,
              _innerRegex: e,
              getFrom: function(e) {
                  var n = e.match(t);
                  return n ? n[1] || n[2] || "" : null
              },
              existsIn: function(e) {
                  return t.test(e)
              },
              removeFrom: function(e) {
                  return e.replace(t, "")
              },
              insertBefore: function(e, n) {
                  var r = e.match(t);
                  return r ? e.slice(0, r.index) + n + e.slice(r.index) : e + n
              }
          }
      }
      ) ? r.call(t, n, t, e) : r) || (e.exports = a)
  },
  NoUX: function(e, t, n) {
      var r = n("PRcU")
        , a = n("u+5+");
      e.exports = function(e, t) {
          var o = (t = t || {}).compress ? new r(t) : new a(t);
          if (t.sourcemap) {
              n("iQqg")(o);
              var i = o.compile(e);
              return o.applySourceMaps(),
              {
                  code: i,
                  map: "generator" === t.sourcemap ? o.map : o.map.toJSON()
              }
          }
          return i = o.compile(e)
      }
  },
  PRcU: function(e, t, n) {
      var r = n("dt0l")
        , a = n("mwrz");
      function o(e) {
          r.call(this, e)
      }
      e.exports = o,
      a(o, r),
      o.prototype.compile = function(e) {
          return e.stylesheet.rules.map(this.visit, this).join("")
      }
      ,
      o.prototype.comment = function(e) {
          return this.emit("", e.position)
      }
      ,
      o.prototype.import = function(e) {
          return this.emit("@import " + e.import + ";", e.position)
      }
      ,
      o.prototype.media = function(e) {
          return this.emit("@media " + e.media, e.position) + this.emit("{") + this.mapVisit(e.rules) + this.emit("}")
      }
      ,
      o.prototype.document = function(e) {
          var t = "@" + (e.vendor || "") + "document " + e.document;
          return this.emit(t, e.position) + this.emit("{") + this.mapVisit(e.rules) + this.emit("}")
      }
      ,
      o.prototype.charset = function(e) {
          return this.emit("@charset " + e.charset + ";", e.position)
      }
      ,
      o.prototype.namespace = function(e) {
          return this.emit("@namespace " + e.namespace + ";", e.position)
      }
      ,
      o.prototype.supports = function(e) {
          return this.emit("@supports " + e.supports, e.position) + this.emit("{") + this.mapVisit(e.rules) + this.emit("}")
      }
      ,
      o.prototype.keyframes = function(e) {
          return this.emit("@" + (e.vendor || "") + "keyframes " + e.name, e.position) + this.emit("{") + this.mapVisit(e.keyframes) + this.emit("}")
      }
      ,
      o.prototype.keyframe = function(e) {
          var t = e.declarations;
          return this.emit(e.values.join(","), e.position) + this.emit("{") + this.mapVisit(t) + this.emit("}")
      }
      ,
      o.prototype.page = function(e) {
          var t = e.selectors.length ? e.selectors.join(", ") : "";
          return this.emit("@page " + t, e.position) + this.emit("{") + this.mapVisit(e.declarations) + this.emit("}")
      }
      ,
      o.prototype["font-face"] = function(e) {
          return this.emit("@font-face", e.position) + this.emit("{") + this.mapVisit(e.declarations) + this.emit("}")
      }
      ,
      o.prototype.host = function(e) {
          return this.emit("@host", e.position) + this.emit("{") + this.mapVisit(e.rules) + this.emit("}")
      }
      ,
      o.prototype["custom-media"] = function(e) {
          return this.emit("@custom-media " + e.name + " " + e.media + ";", e.position)
      }
      ,
      o.prototype.rule = function(e) {
          var t = e.declarations;
          return t.length ? this.emit(e.selectors.join(","), e.position) + this.emit("{") + this.mapVisit(t) + this.emit("}") : ""
      }
      ,
      o.prototype.declaration = function(e) {
          return this.emit(e.property + ":" + e.value, e.position) + this.emit(";")
      }
  },
  Q6UC: function(e, t) {
      var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
      function r(e) {
          return e ? e.replace(/^\s+|\s+$/g, "") : ""
      }
      e.exports = function(e, t) {
          t = t || {};
          var a = 1
            , o = 1;
          function i(e) {
              var t = e.match(/\n/g);
              t && (a += t.length);
              var n = e.lastIndexOf("\n");
              o = ~n ? e.length - n : o + e.length
          }
          function u() {
              var e = {
                  line: a,
                  column: o
              };
              return function(t) {
                  return t.position = new l(e),
                  y(),
                  t
              }
          }
          function l(e) {
              this.start = e,
              this.end = {
                  line: a,
                  column: o
              },
              this.source = t.source
          }
          l.prototype.content = e;
          var s = [];
          function c(n) {
              var r = new Error(t.source + ":" + a + ":" + o + ": " + n);
              if (r.reason = n,
              r.filename = t.source,
              r.line = a,
              r.column = o,
              r.source = e,
              !t.silent)
                  throw r;
              s.push(r)
          }
          function m() {
              return d(/^{\s*/)
          }
          function f() {
              return d(/^}/)
          }
          function p() {
              var t, n = [];
              for (y(),
              b(n); e.length && "}" != e.charAt(0) && (t = T() || _()); )
                  !1 !== t && (n.push(t),
                  b(n));
              return n
          }
          function d(t) {
              var n = t.exec(e);
              if (n) {
                  var r = n[0];
                  return i(r),
                  e = e.slice(r.length),
                  n
              }
          }
          function y() {
              d(/^\s*/)
          }
          function b(e) {
              var t;
              for (e = e || []; t = h(); )
                  !1 !== t && e.push(t);
              return e
          }
          function h() {
              var t = u();
              if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
                  for (var n = 2; "" != e.charAt(n) && ("*" != e.charAt(n) || "/" != e.charAt(n + 1)); )
                      ++n;
                  if (n += 2,
                  "" === e.charAt(n - 1))
                      return c("End of comment missing");
                  var r = e.slice(2, n - 2);
                  return o += 2,
                  i(r),
                  e = e.slice(n),
                  o += 2,
                  t({
                      type: "comment",
                      comment: r
                  })
              }
          }
          function g() {
              var e = d(/^([^{]+)/);
              if (e)
                  return r(e[0]).replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function(e) {
                      return e.replace(/,/g, "‌")
                  }).split(/\s*(?![^(]*\)),\s*/).map(function(e) {
                      return e.replace(/\u200C/g, ",")
                  })
          }
          function v() {
              var e = u()
                , t = d(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
              if (t) {
                  if (t = r(t[0]),
                  !d(/^:\s*/))
                      return c("property missing ':'");
                  var a = d(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/)
                    , o = e({
                      type: "declaration",
                      property: t.replace(n, ""),
                      value: a ? r(a[0]).replace(n, "") : ""
                  });
                  return d(/^[;\s]*/),
                  o
              }
          }
          function I() {
              var e, t = [];
              if (!m())
                  return c("missing '{'");
              for (b(t); e = v(); )
                  !1 !== e && (t.push(e),
                  b(t));
              return f() ? t : c("missing '}'")
          }
          function N() {
              for (var e, t = [], n = u(); e = d(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/); )
                  t.push(e[1]),
                  d(/^,\s*/);
              if (t.length)
                  return n({
                      type: "keyframe",
                      values: t,
                      declarations: I()
                  })
          }
          var A, S = R("import"), C = R("charset"), x = R("namespace");
          function R(e) {
              var t = new RegExp("^@" + e + "\\s*([^;]+);");
              return function() {
                  var n = u()
                    , r = d(t);
                  if (r) {
                      var a = {
                          type: e
                      };
                      return a[e] = r[1].trim(),
                      n(a)
                  }
              }
          }
          function T() {
              if ("@" == e[0])
                  return function() {
                      var e = u();
                      if (t = d(/^@([-\w]+)?keyframes\s*/)) {
                          var t, n = t[1];
                          if (!(t = d(/^([-\w]+)\s*/)))
                              return c("@keyframes missing name");
                          var r, a = t[1];
                          if (!m())
                              return c("@keyframes missing '{'");
                          for (var o = b(); r = N(); )
                              o.push(r),
                              o = o.concat(b());
                          return f() ? e({
                              type: "keyframes",
                              name: a,
                              vendor: n,
                              keyframes: o
                          }) : c("@keyframes missing '}'")
                      }
                  }() || function() {
                      var e = u()
                        , t = d(/^@media *([^{]+)/);
                      if (t) {
                          var n = r(t[1]);
                          if (!m())
                              return c("@media missing '{'");
                          var a = b().concat(p());
                          return f() ? e({
                              type: "media",
                              media: n,
                              rules: a
                          }) : c("@media missing '}'")
                      }
                  }() || function() {
                      var e = u()
                        , t = d(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
                      if (t)
                          return e({
                              type: "custom-media",
                              name: r(t[1]),
                              media: r(t[2])
                          })
                  }() || function() {
                      var e = u()
                        , t = d(/^@supports *([^{]+)/);
                      if (t) {
                          var n = r(t[1]);
                          if (!m())
                              return c("@supports missing '{'");
                          var a = b().concat(p());
                          return f() ? e({
                              type: "supports",
                              supports: n,
                              rules: a
                          }) : c("@supports missing '}'")
                      }
                  }() || S() || C() || x() || function() {
                      var e = u()
                        , t = d(/^@([-\w]+)?document *([^{]+)/);
                      if (t) {
                          var n = r(t[1])
                            , a = r(t[2]);
                          if (!m())
                              return c("@document missing '{'");
                          var o = b().concat(p());
                          return f() ? e({
                              type: "document",
                              document: a,
                              vendor: n,
                              rules: o
                          }) : c("@document missing '}'")
                      }
                  }() || function() {
                      var e = u();
                      if (d(/^@page */)) {
                          var t = g() || [];
                          if (!m())
                              return c("@page missing '{'");
                          for (var n, r = b(); n = v(); )
                              r.push(n),
                              r = r.concat(b());
                          return f() ? e({
                              type: "page",
                              selectors: t,
                              declarations: r
                          }) : c("@page missing '}'")
                      }
                  }() || function() {
                      var e = u();
                      if (d(/^@host\s*/)) {
                          if (!m())
                              return c("@host missing '{'");
                          var t = b().concat(p());
                          return f() ? e({
                              type: "host",
                              rules: t
                          }) : c("@host missing '}'")
                      }
                  }() || function() {
                      var e = u();
                      if (d(/^@font-face\s*/)) {
                          if (!m())
                              return c("@font-face missing '{'");
                          for (var t, n = b(); t = v(); )
                              n.push(t),
                              n = n.concat(b());
                          return f() ? e({
                              type: "font-face",
                              declarations: n
                          }) : c("@font-face missing '}'")
                      }
                  }()
          }
          function _() {
              var e = u()
                , t = g();
              return t ? (b(),
              e({
                  type: "rule",
                  selectors: t,
                  declarations: I()
              })) : c("selector missing")
          }
          return function e(t, n) {
              var r = t && "string" == typeof t.type;
              var a = r ? t : n;
              for (var o in t) {
                  var i = t[o];
                  Array.isArray(i) ? i.forEach(function(t) {
                      e(t, a)
                  }) : i && "object" == typeof i && e(i, a)
              }
              r && Object.defineProperty(t, "parent", {
                  configurable: !0,
                  writable: !0,
                  enumerable: !1,
                  value: n || null
              });
              return t
          }((A = p(),
          {
              type: "stylesheet",
              stylesheet: {
                  source: t.source,
                  rules: A,
                  parsingErrors: s
              }
          }))
      }
  },
  RD0Z: function(e, t, n) {
      var r = n("/oKX");
      "string" == typeof r && (r = [[e.i, r, ""]]),
      r.locals && (e.exports = r.locals);
      n("FIqI")("2536b784", r, !0, {})
  },
  RN4N: function(e, t, n) {
      t.parse = n("Q6UC"),
      t.stringify = n("NoUX")
  },
  SGzJ: function(e, t) {
      var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      t.encode = function(e) {
          if (0 <= e && e < n.length)
              return n[e];
          throw new TypeError("Must be between 0 and 63: " + e)
      }
      ,
      t.decode = function(e) {
          return 65 <= e && e <= 90 ? e - 65 : 97 <= e && e <= 122 ? e - 97 + 26 : 48 <= e && e <= 57 ? e - 48 + 52 : 43 == e ? 62 : 47 == e ? 63 : -1
      }
  },
  W1RK: function(e, t, n) {
      var r = n("7IBo")
        , a = n("xO9Z")
        , o = n("/VNv").ArraySet
        , i = n("hCE9")
        , u = n("d0eU").quickSort;
      function l(e, t) {
          var n = e;
          return "string" == typeof e && (n = r.parseSourceMapInput(e)),
          null != n.sections ? new m(n,t) : new s(n,t)
      }
      function s(e, t) {
          var n = e;
          "string" == typeof e && (n = r.parseSourceMapInput(e));
          var a = r.getArg(n, "version")
            , i = r.getArg(n, "sources")
            , u = r.getArg(n, "names", [])
            , l = r.getArg(n, "sourceRoot", null)
            , s = r.getArg(n, "sourcesContent", null)
            , c = r.getArg(n, "mappings")
            , m = r.getArg(n, "file", null);
          if (a != this._version)
              throw new Error("Unsupported version: " + a);
          l && (l = r.normalize(l)),
          i = i.map(String).map(r.normalize).map(function(e) {
              return l && r.isAbsolute(l) && r.isAbsolute(e) ? r.relative(l, e) : e
          }),
          this._names = o.fromArray(u.map(String), !0),
          this._sources = o.fromArray(i, !0),
          this._absoluteSources = this._sources.toArray().map(function(e) {
              return r.computeSourceURL(l, e, t)
          }),
          this.sourceRoot = l,
          this.sourcesContent = s,
          this._mappings = c,
          this._sourceMapURL = t,
          this.file = m
      }
      function c() {
          this.generatedLine = 0,
          this.generatedColumn = 0,
          this.source = null,
          this.originalLine = null,
          this.originalColumn = null,
          this.name = null
      }
      function m(e, t) {
          var n = e;
          "string" == typeof e && (n = r.parseSourceMapInput(e));
          var a = r.getArg(n, "version")
            , i = r.getArg(n, "sections");
          if (a != this._version)
              throw new Error("Unsupported version: " + a);
          this._sources = new o,
          this._names = new o;
          var u = {
              line: -1,
              column: 0
          };
          this._sections = i.map(function(e) {
              if (e.url)
                  throw new Error("Support for url field in sections not implemented.");
              var n = r.getArg(e, "offset")
                , a = r.getArg(n, "line")
                , o = r.getArg(n, "column");
              if (a < u.line || a === u.line && o < u.column)
                  throw new Error("Section offsets must be ordered and non-overlapping.");
              return u = n,
              {
                  generatedOffset: {
                      generatedLine: a + 1,
                      generatedColumn: o + 1
                  },
                  consumer: new l(r.getArg(e, "map"),t)
              }
          })
      }
      l.fromSourceMap = function(e, t) {
          return s.fromSourceMap(e, t)
      }
      ,
      l.prototype._version = 3,
      l.prototype.__generatedMappings = null,
      Object.defineProperty(l.prototype, "_generatedMappings", {
          configurable: !0,
          enumerable: !0,
          get: function() {
              return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot),
              this.__generatedMappings
          }
      }),
      l.prototype.__originalMappings = null,
      Object.defineProperty(l.prototype, "_originalMappings", {
          configurable: !0,
          enumerable: !0,
          get: function() {
              return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot),
              this.__originalMappings
          }
      }),
      l.prototype._charIsMappingSeparator = function(e, t) {
          var n = e.charAt(t);
          return ";" === n || "," === n
      }
      ,
      l.prototype._parseMappings = function(e, t) {
          throw new Error("Subclasses must implement _parseMappings")
      }
      ,
      l.GENERATED_ORDER = 1,
      l.ORIGINAL_ORDER = 2,
      l.GREATEST_LOWER_BOUND = 1,
      l.LEAST_UPPER_BOUND = 2,
      l.prototype.eachMapping = function(e, t, n) {
          var a, o = t || null;
          switch (n || l.GENERATED_ORDER) {
          case l.GENERATED_ORDER:
              a = this._generatedMappings;
              break;
          case l.ORIGINAL_ORDER:
              a = this._originalMappings;
              break;
          default:
              throw new Error("Unknown order of iteration.")
          }
          var i = this.sourceRoot;
          a.map(function(e) {
              var t = null === e.source ? null : this._sources.at(e.source);
              return {
                  source: t = r.computeSourceURL(i, t, this._sourceMapURL),
                  generatedLine: e.generatedLine,
                  generatedColumn: e.generatedColumn,
                  originalLine: e.originalLine,
                  originalColumn: e.originalColumn,
                  name: null === e.name ? null : this._names.at(e.name)
              }
          }, this).forEach(e, o)
      }
      ,
      l.prototype.allGeneratedPositionsFor = function(e) {
          var t = r.getArg(e, "line")
            , n = {
              source: r.getArg(e, "source"),
              originalLine: t,
              originalColumn: r.getArg(e, "column", 0)
          };
          if (n.source = this._findSourceIndex(n.source),
          n.source < 0)
              return [];
          var o = []
            , i = this._findMapping(n, this._originalMappings, "originalLine", "originalColumn", r.compareByOriginalPositions, a.LEAST_UPPER_BOUND);
          if (i >= 0) {
              var u = this._originalMappings[i];
              if (void 0 === e.column)
                  for (var l = u.originalLine; u && u.originalLine === l; )
                      o.push({
                          line: r.getArg(u, "generatedLine", null),
                          column: r.getArg(u, "generatedColumn", null),
                          lastColumn: r.getArg(u, "lastGeneratedColumn", null)
                      }),
                      u = this._originalMappings[++i];
              else
                  for (var s = u.originalColumn; u && u.originalLine === t && u.originalColumn == s; )
                      o.push({
                          line: r.getArg(u, "generatedLine", null),
                          column: r.getArg(u, "generatedColumn", null),
                          lastColumn: r.getArg(u, "lastGeneratedColumn", null)
                      }),
                      u = this._originalMappings[++i]
          }
          return o
      }
      ,
      t.SourceMapConsumer = l,
      s.prototype = Object.create(l.prototype),
      s.prototype.consumer = l,
      s.prototype._findSourceIndex = function(e) {
          var t, n = e;
          if (null != this.sourceRoot && (n = r.relative(this.sourceRoot, n)),
          this._sources.has(n))
              return this._sources.indexOf(n);
          for (t = 0; t < this._absoluteSources.length; ++t)
              if (this._absoluteSources[t] == e)
                  return t;
          return -1
      }
      ,
      s.fromSourceMap = function(e, t) {
          var n = Object.create(s.prototype)
            , a = n._names = o.fromArray(e._names.toArray(), !0)
            , i = n._sources = o.fromArray(e._sources.toArray(), !0);
          n.sourceRoot = e._sourceRoot,
          n.sourcesContent = e._generateSourcesContent(n._sources.toArray(), n.sourceRoot),
          n.file = e._file,
          n._sourceMapURL = t,
          n._absoluteSources = n._sources.toArray().map(function(e) {
              return r.computeSourceURL(n.sourceRoot, e, t)
          });
          for (var l = e._mappings.toArray().slice(), m = n.__generatedMappings = [], f = n.__originalMappings = [], p = 0, d = l.length; p < d; p++) {
              var y = l[p]
                , b = new c;
              b.generatedLine = y.generatedLine,
              b.generatedColumn = y.generatedColumn,
              y.source && (b.source = i.indexOf(y.source),
              b.originalLine = y.originalLine,
              b.originalColumn = y.originalColumn,
              y.name && (b.name = a.indexOf(y.name)),
              f.push(b)),
              m.push(b)
          }
          return u(n.__originalMappings, r.compareByOriginalPositions),
          n
      }
      ,
      s.prototype._version = 3,
      Object.defineProperty(s.prototype, "sources", {
          get: function() {
              return this._absoluteSources.slice()
          }
      }),
      s.prototype._parseMappings = function(e, t) {
          for (var n, a, o, l, s, m = 1, f = 0, p = 0, d = 0, y = 0, b = 0, h = e.length, g = 0, v = {}, I = {}, N = [], A = []; g < h; )
              if (";" === e.charAt(g))
                  m++,
                  g++,
                  f = 0;
              else if ("," === e.charAt(g))
                  g++;
              else {
                  for ((n = new c).generatedLine = m,
                  l = g; l < h && !this._charIsMappingSeparator(e, l); l++)
                      ;
                  if (o = v[a = e.slice(g, l)])
                      g += a.length;
                  else {
                      for (o = []; g < l; )
                          i.decode(e, g, I),
                          s = I.value,
                          g = I.rest,
                          o.push(s);
                      if (2 === o.length)
                          throw new Error("Found a source, but no line and column");
                      if (3 === o.length)
                          throw new Error("Found a source and line, but no column");
                      v[a] = o
                  }
                  n.generatedColumn = f + o[0],
                  f = n.generatedColumn,
                  o.length > 1 && (n.source = y + o[1],
                  y += o[1],
                  n.originalLine = p + o[2],
                  p = n.originalLine,
                  n.originalLine += 1,
                  n.originalColumn = d + o[3],
                  d = n.originalColumn,
                  o.length > 4 && (n.name = b + o[4],
                  b += o[4])),
                  A.push(n),
                  "number" == typeof n.originalLine && N.push(n)
              }
          u(A, r.compareByGeneratedPositionsDeflated),
          this.__generatedMappings = A,
          u(N, r.compareByOriginalPositions),
          this.__originalMappings = N
      }
      ,
      s.prototype._findMapping = function(e, t, n, r, o, i) {
          if (e[n] <= 0)
              throw new TypeError("Line must be greater than or equal to 1, got " + e[n]);
          if (e[r] < 0)
              throw new TypeError("Column must be greater than or equal to 0, got " + e[r]);
          return a.search(e, t, o, i)
      }
      ,
      s.prototype.computeColumnSpans = function() {
          for (var e = 0; e < this._generatedMappings.length; ++e) {
              var t = this._generatedMappings[e];
              if (e + 1 < this._generatedMappings.length) {
                  var n = this._generatedMappings[e + 1];
                  if (t.generatedLine === n.generatedLine) {
                      t.lastGeneratedColumn = n.generatedColumn - 1;
                      continue
                  }
              }
              t.lastGeneratedColumn = 1 / 0
          }
      }
      ,
      s.prototype.originalPositionFor = function(e) {
          var t = {
              generatedLine: r.getArg(e, "line"),
              generatedColumn: r.getArg(e, "column")
          }
            , n = this._findMapping(t, this._generatedMappings, "generatedLine", "generatedColumn", r.compareByGeneratedPositionsDeflated, r.getArg(e, "bias", l.GREATEST_LOWER_BOUND));
          if (n >= 0) {
              var a = this._generatedMappings[n];
              if (a.generatedLine === t.generatedLine) {
                  var o = r.getArg(a, "source", null);
                  null !== o && (o = this._sources.at(o),
                  o = r.computeSourceURL(this.sourceRoot, o, this._sourceMapURL));
                  var i = r.getArg(a, "name", null);
                  return null !== i && (i = this._names.at(i)),
                  {
                      source: o,
                      line: r.getArg(a, "originalLine", null),
                      column: r.getArg(a, "originalColumn", null),
                      name: i
                  }
              }
          }
          return {
              source: null,
              line: null,
              column: null,
              name: null
          }
      }
      ,
      s.prototype.hasContentsOfAllSources = function() {
          return !!this.sourcesContent && (this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(e) {
              return null == e
          }))
      }
      ,
      s.prototype.sourceContentFor = function(e, t) {
          if (!this.sourcesContent)
              return null;
          var n = this._findSourceIndex(e);
          if (n >= 0)
              return this.sourcesContent[n];
          var a, o = e;
          if (null != this.sourceRoot && (o = r.relative(this.sourceRoot, o)),
          null != this.sourceRoot && (a = r.urlParse(this.sourceRoot))) {
              var i = o.replace(/^file:\/\//, "");
              if ("file" == a.scheme && this._sources.has(i))
                  return this.sourcesContent[this._sources.indexOf(i)];
              if ((!a.path || "/" == a.path) && this._sources.has("/" + o))
                  return this.sourcesContent[this._sources.indexOf("/" + o)]
          }
          if (t)
              return null;
          throw new Error('"' + o + '" is not in the SourceMap.')
      }
      ,
      s.prototype.generatedPositionFor = function(e) {
          var t = r.getArg(e, "source");
          if ((t = this._findSourceIndex(t)) < 0)
              return {
                  line: null,
                  column: null,
                  lastColumn: null
              };
          var n = {
              source: t,
              originalLine: r.getArg(e, "line"),
              originalColumn: r.getArg(e, "column")
          }
            , a = this._findMapping(n, this._originalMappings, "originalLine", "originalColumn", r.compareByOriginalPositions, r.getArg(e, "bias", l.GREATEST_LOWER_BOUND));
          if (a >= 0) {
              var o = this._originalMappings[a];
              if (o.source === n.source)
                  return {
                      line: r.getArg(o, "generatedLine", null),
                      column: r.getArg(o, "generatedColumn", null),
                      lastColumn: r.getArg(o, "lastGeneratedColumn", null)
                  }
          }
          return {
              line: null,
              column: null,
              lastColumn: null
          }
      }
      ,
      t.BasicSourceMapConsumer = s,
      m.prototype = Object.create(l.prototype),
      m.prototype.constructor = l,
      m.prototype._version = 3,
      Object.defineProperty(m.prototype, "sources", {
          get: function() {
              for (var e = [], t = 0; t < this._sections.length; t++)
                  for (var n = 0; n < this._sections[t].consumer.sources.length; n++)
                      e.push(this._sections[t].consumer.sources[n]);
              return e
          }
      }),
      m.prototype.originalPositionFor = function(e) {
          var t = {
              generatedLine: r.getArg(e, "line"),
              generatedColumn: r.getArg(e, "column")
          }
            , n = a.search(t, this._sections, function(e, t) {
              var n = e.generatedLine - t.generatedOffset.generatedLine;
              return n || e.generatedColumn - t.generatedOffset.generatedColumn
          })
            , o = this._sections[n];
          return o ? o.consumer.originalPositionFor({
              line: t.generatedLine - (o.generatedOffset.generatedLine - 1),
              column: t.generatedColumn - (o.generatedOffset.generatedLine === t.generatedLine ? o.generatedOffset.generatedColumn - 1 : 0),
              bias: e.bias
          }) : {
              source: null,
              line: null,
              column: null,
              name: null
          }
      }
      ,
      m.prototype.hasContentsOfAllSources = function() {
          return this._sections.every(function(e) {
              return e.consumer.hasContentsOfAllSources()
          })
      }
      ,
      m.prototype.sourceContentFor = function(e, t) {
          for (var n = 0; n < this._sections.length; n++) {
              var r = this._sections[n].consumer.sourceContentFor(e, !0);
              if (r)
                  return r
          }
          if (t)
              return null;
          throw new Error('"' + e + '" is not in the SourceMap.')
      }
      ,
      m.prototype.generatedPositionFor = function(e) {
          for (var t = 0; t < this._sections.length; t++) {
              var n = this._sections[t];
              if (-1 !== n.consumer._findSourceIndex(r.getArg(e, "source"))) {
                  var a = n.consumer.generatedPositionFor(e);
                  if (a)
                      return {
                          line: a.line + (n.generatedOffset.generatedLine - 1),
                          column: a.column + (n.generatedOffset.generatedLine === a.line ? n.generatedOffset.generatedColumn - 1 : 0)
                      }
              }
          }
          return {
              line: null,
              column: null
          }
      }
      ,
      m.prototype._parseMappings = function(e, t) {
          this.__generatedMappings = [],
          this.__originalMappings = [];
          for (var n = 0; n < this._sections.length; n++)
              for (var a = this._sections[n], o = a.consumer._generatedMappings, i = 0; i < o.length; i++) {
                  var l = o[i]
                    , s = a.consumer._sources.at(l.source);
                  s = r.computeSourceURL(a.consumer.sourceRoot, s, this._sourceMapURL),
                  this._sources.add(s),
                  s = this._sources.indexOf(s);
                  var c = null;
                  l.name && (c = a.consumer._names.at(l.name),
                  this._names.add(c),
                  c = this._names.indexOf(c));
                  var m = {
                      source: s,
                      generatedLine: l.generatedLine + (a.generatedOffset.generatedLine - 1),
                      generatedColumn: l.generatedColumn + (a.generatedOffset.generatedLine === l.generatedLine ? a.generatedOffset.generatedColumn - 1 : 0),
                      originalLine: l.originalLine,
                      originalColumn: l.originalColumn,
                      name: c
                  };
                  this.__generatedMappings.push(m),
                  "number" == typeof m.originalLine && this.__originalMappings.push(m)
              }
          u(this.__generatedMappings, r.compareByGeneratedPositionsDeflated),
          u(this.__originalMappings, r.compareByOriginalPositions)
      }
      ,
      t.IndexedSourceMapConsumer = m
  },
  YjFx: function(e, t, n) {
      var r = n("8V2O").SourceMapGenerator
        , a = n("7IBo")
        , o = /(\r?\n)/
        , i = "$$$isSourceNode$$$";
      function u(e, t, n, r, a) {
          this.children = [],
          this.sourceContents = {},
          this.line = null == e ? null : e,
          this.column = null == t ? null : t,
          this.source = null == n ? null : n,
          this.name = null == a ? null : a,
          this[i] = !0,
          null != r && this.add(r)
      }
      u.fromStringWithSourceMap = function(e, t, n) {
          var r = new u
            , i = e.split(o)
            , l = 0
            , s = function() {
              return e() + (e() || "");
              function e() {
                  return l < i.length ? i[l++] : void 0
              }
          }
            , c = 1
            , m = 0
            , f = null;
          return t.eachMapping(function(e) {
              if (null !== f) {
                  if (!(c < e.generatedLine)) {
                      var t = (n = i[l] || "").substr(0, e.generatedColumn - m);
                      return i[l] = n.substr(e.generatedColumn - m),
                      m = e.generatedColumn,
                      p(f, t),
                      void (f = e)
                  }
                  p(f, s()),
                  c++,
                  m = 0
              }
              for (; c < e.generatedLine; )
                  r.add(s()),
                  c++;
              if (m < e.generatedColumn) {
                  var n = i[l] || "";
                  r.add(n.substr(0, e.generatedColumn)),
                  i[l] = n.substr(e.generatedColumn),
                  m = e.generatedColumn
              }
              f = e
          }, this),
          l < i.length && (f && p(f, s()),
          r.add(i.splice(l).join(""))),
          t.sources.forEach(function(e) {
              var o = t.sourceContentFor(e);
              null != o && (null != n && (e = a.join(n, e)),
              r.setSourceContent(e, o))
          }),
          r;
          function p(e, t) {
              if (null === e || void 0 === e.source)
                  r.add(t);
              else {
                  var o = n ? a.join(n, e.source) : e.source;
                  r.add(new u(e.originalLine,e.originalColumn,o,t,e.name))
              }
          }
      }
      ,
      u.prototype.add = function(e) {
          if (Array.isArray(e))
              e.forEach(function(e) {
                  this.add(e)
              }, this);
          else {
              if (!e[i] && "string" != typeof e)
                  throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
              e && this.children.push(e)
          }
          return this
      }
      ,
      u.prototype.prepend = function(e) {
          if (Array.isArray(e))
              for (var t = e.length - 1; t >= 0; t--)
                  this.prepend(e[t]);
          else {
              if (!e[i] && "string" != typeof e)
                  throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
              this.children.unshift(e)
          }
          return this
      }
      ,
      u.prototype.walk = function(e) {
          for (var t, n = 0, r = this.children.length; n < r; n++)
              (t = this.children[n])[i] ? t.walk(e) : "" !== t && e(t, {
                  source: this.source,
                  line: this.line,
                  column: this.column,
                  name: this.name
              })
      }
      ,
      u.prototype.join = function(e) {
          var t, n, r = this.children.length;
          if (r > 0) {
              for (t = [],
              n = 0; n < r - 1; n++)
                  t.push(this.children[n]),
                  t.push(e);
              t.push(this.children[n]),
              this.children = t
          }
          return this
      }
      ,
      u.prototype.replaceRight = function(e, t) {
          var n = this.children[this.children.length - 1];
          return n[i] ? n.replaceRight(e, t) : "string" == typeof n ? this.children[this.children.length - 1] = n.replace(e, t) : this.children.push("".replace(e, t)),
          this
      }
      ,
      u.prototype.setSourceContent = function(e, t) {
          this.sourceContents[a.toSetString(e)] = t
      }
      ,
      u.prototype.walkSourceContents = function(e) {
          for (var t = 0, n = this.children.length; t < n; t++)
              this.children[t][i] && this.children[t].walkSourceContents(e);
          var r = Object.keys(this.sourceContents);
          for (t = 0,
          n = r.length; t < n; t++)
              e(a.fromSetString(r[t]), this.sourceContents[r[t]])
      }
      ,
      u.prototype.toString = function() {
          var e = "";
          return this.walk(function(t) {
              e += t
          }),
          e
      }
      ,
      u.prototype.toStringWithSourceMap = function(e) {
          var t = {
              code: "",
              line: 1,
              column: 0
          }
            , n = new r(e)
            , a = !1
            , o = null
            , i = null
            , u = null
            , l = null;
          return this.walk(function(e, r) {
              t.code += e,
              null !== r.source && null !== r.line && null !== r.column ? (o === r.source && i === r.line && u === r.column && l === r.name || n.addMapping({
                  source: r.source,
                  original: {
                      line: r.line,
                      column: r.column
                  },
                  generated: {
                      line: t.line,
                      column: t.column
                  },
                  name: r.name
              }),
              o = r.source,
              i = r.line,
              u = r.column,
              l = r.name,
              a = !0) : a && (n.addMapping({
                  generated: {
                      line: t.line,
                      column: t.column
                  }
              }),
              o = null,
              a = !1);
              for (var s = 0, c = e.length; s < c; s++)
                  10 === e.charCodeAt(s) ? (t.line++,
                  t.column = 0,
                  s + 1 === c ? (o = null,
                  a = !1) : a && n.addMapping({
                      source: r.source,
                      original: {
                          line: r.line,
                          column: r.column
                      },
                      generated: {
                          line: t.line,
                          column: t.column
                      },
                      name: r.name
                  })) : t.column++
          }),
          this.walkSourceContents(function(e, t) {
              n.setSourceContent(e, t)
          }),
          {
              code: t.code,
              map: n
          }
      }
      ,
      t.SourceNode = u
  },
  d0eU: function(e, t) {
      function n(e, t, n) {
          var r = e[t];
          e[t] = e[n],
          e[n] = r
      }
      function r(e, t, a, o) {
          if (a < o) {
              var i = a - 1;
              n(e, (c = a,
              m = o,
              Math.round(c + Math.random() * (m - c))), o);
              for (var u = e[o], l = a; l < o; l++)
                  t(e[l], u) <= 0 && n(e, i += 1, l);
              n(e, i + 1, l);
              var s = i + 1;
              r(e, t, a, s - 1),
              r(e, t, s + 1, o)
          }
          var c, m
      }
      t.quickSort = function(e, t) {
          r(e, t, 0, e.length - 1)
      }
  },
  dt0l: function(e, t) {
      function n(e) {
          this.options = e || {}
      }
      e.exports = n,
      n.prototype.emit = function(e) {
          return e
      }
      ,
      n.prototype.visit = function(e) {
          return this[e.type](e)
      }
      ,
      n.prototype.mapVisit = function(e, t) {
          var n = "";
          t = t || "";
          for (var r = 0, a = e.length; r < a; r++)
              n += this.visit(e[r]),
              t && r < a - 1 && (n += this.emit(t));
          return n
      }
  },
  hBSA: function(e, t, n) {
      (function(e) {
          function n(e, t) {
              for (var n = 0, r = e.length - 1; r >= 0; r--) {
                  var a = e[r];
                  "." === a ? e.splice(r, 1) : ".." === a ? (e.splice(r, 1),
                  n++) : n && (e.splice(r, 1),
                  n--)
              }
              if (t)
                  for (; n--; n)
                      e.unshift("..");
              return e
          }
          function r(e, t) {
              if (e.filter)
                  return e.filter(t);
              for (var n = [], r = 0; r < e.length; r++)
                  t(e[r], r, e) && n.push(e[r]);
              return n
          }
          t.resolve = function() {
              for (var t = "", a = !1, o = arguments.length - 1; o >= -1 && !a; o--) {
                  var i = o >= 0 ? arguments[o] : e.cwd();
                  if ("string" != typeof i)
                      throw new TypeError("Arguments to path.resolve must be strings");
                  i && (t = i + "/" + t,
                  a = "/" === i.charAt(0))
              }
              return t = n(r(t.split("/"), function(e) {
                  return !!e
              }), !a).join("/"),
              (a ? "/" : "") + t || "."
          }
          ,
          t.normalize = function(e) {
              var o = t.isAbsolute(e)
                , i = "/" === a(e, -1);
              return (e = n(r(e.split("/"), function(e) {
                  return !!e
              }), !o).join("/")) || o || (e = "."),
              e && i && (e += "/"),
              (o ? "/" : "") + e
          }
          ,
          t.isAbsolute = function(e) {
              return "/" === e.charAt(0)
          }
          ,
          t.join = function() {
              var e = Array.prototype.slice.call(arguments, 0);
              return t.normalize(r(e, function(e, t) {
                  if ("string" != typeof e)
                      throw new TypeError("Arguments to path.join must be strings");
                  return e
              }).join("/"))
          }
          ,
          t.relative = function(e, n) {
              function r(e) {
                  for (var t = 0; t < e.length && "" === e[t]; t++)
                      ;
                  for (var n = e.length - 1; n >= 0 && "" === e[n]; n--)
                      ;
                  return t > n ? [] : e.slice(t, n - t + 1)
              }
              e = t.resolve(e).substr(1),
              n = t.resolve(n).substr(1);
              for (var a = r(e.split("/")), o = r(n.split("/")), i = Math.min(a.length, o.length), u = i, l = 0; l < i; l++)
                  if (a[l] !== o[l]) {
                      u = l;
                      break
                  }
              var s = [];
              for (l = u; l < a.length; l++)
                  s.push("..");
              return (s = s.concat(o.slice(u))).join("/")
          }
          ,
          t.sep = "/",
          t.delimiter = ":",
          t.dirname = function(e) {
              if ("string" != typeof e && (e += ""),
              0 === e.length)
                  return ".";
              for (var t = e.charCodeAt(0), n = 47 === t, r = -1, a = !0, o = e.length - 1; o >= 1; --o)
                  if (47 === (t = e.charCodeAt(o))) {
                      if (!a) {
                          r = o;
                          break
                      }
                  } else
                      a = !1;
              return -1 === r ? n ? "/" : "." : n && 1 === r ? "/" : e.slice(0, r)
          }
          ,
          t.basename = function(e, t) {
              var n = function(e) {
                  "string" != typeof e && (e += "");
                  var t, n = 0, r = -1, a = !0;
                  for (t = e.length - 1; t >= 0; --t)
                      if (47 === e.charCodeAt(t)) {
                          if (!a) {
                              n = t + 1;
                              break
                          }
                      } else
                          -1 === r && (a = !1,
                          r = t + 1);
                  return -1 === r ? "" : e.slice(n, r)
              }(e);
              return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)),
              n
          }
          ,
          t.extname = function(e) {
              "string" != typeof e && (e += "");
              for (var t = -1, n = 0, r = -1, a = !0, o = 0, i = e.length - 1; i >= 0; --i) {
                  var u = e.charCodeAt(i);
                  if (47 !== u)
                      -1 === r && (a = !1,
                      r = i + 1),
                      46 === u ? -1 === t ? t = i : 1 !== o && (o = 1) : -1 !== t && (o = -1);
                  else if (!a) {
                      n = i + 1;
                      break
                  }
              }
              return -1 === t || -1 === r || 0 === o || 1 === o && t === r - 1 && t === n + 1 ? "" : e.slice(t, r)
          }
          ;
          var a = "b" === "ab".substr(-1) ? function(e, t, n) {
              return e.substr(t, n)
          }
          : function(e, t, n) {
              return t < 0 && (t = e.length + t),
              e.substr(t, n)
          }
      }
      ).call(t, n("V0EG"))
  },
  hCE9: function(e, t, n) {
      var r = n("SGzJ");
      t.encode = function(e) {
          var t, n = "", a = function(e) {
              return e < 0 ? 1 + (-e << 1) : 0 + (e << 1)
          }(e);
          do {
              t = 31 & a,
              (a >>>= 5) > 0 && (t |= 32),
              n += r.encode(t)
          } while (a > 0);return n
      }
      ,
      t.decode = function(e, t, n) {
          var a, o, i, u, l = e.length, s = 0, c = 0;
          do {
              if (t >= l)
                  throw new Error("Expected more digits in base 64 VLQ value.");
              if (-1 === (o = r.decode(e.charCodeAt(t++))))
                  throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
              a = !!(32 & o),
              s += (o &= 31) << c,
              c += 5
          } while (a);n.value = (u = (i = s) >> 1,
          1 == (1 & i) ? -u : u),
          n.rest = t
      }
  },
  iQqg: function(e, t, n) {
      var r = n("BfyM").SourceMapGenerator
        , a = n("BfyM").SourceMapConsumer
        , o = n("A0g/")
        , i = n("oi2c")
        , u = n("0Nqt")
        , l = n("hBSA");
      e.exports = function(e) {
          for (var n in e._comment = e.comment,
          e.map = new r,
          e.position = {
              line: 1,
              column: 1
          },
          e.files = {},
          t)
              e[n] = t[n]
      }
      ,
      t.updatePosition = function(e) {
          var t = e.match(/\n/g);
          t && (this.position.line += t.length);
          var n = e.lastIndexOf("\n");
          this.position.column = ~n ? e.length - n : this.position.column + e.length
      }
      ,
      t.emit = function(e, t) {
          if (t) {
              var n = i(t.source || "source.css");
              this.map.addMapping({
                  source: n,
                  generated: {
                      line: this.position.line,
                      column: Math.max(this.position.column - 1, 0)
                  },
                  original: {
                      line: t.start.line,
                      column: t.start.column - 1
                  }
              }),
              this.addFile(n, t)
          }
          return this.updatePosition(e),
          e
      }
      ,
      t.addFile = function(e, t) {
          "string" == typeof t.content && (Object.prototype.hasOwnProperty.call(this.files, e) || (this.files[e] = t.content))
      }
      ,
      t.applySourceMaps = function() {
          Object.keys(this.files).forEach(function(e) {
              var t = this.files[e];
              if (this.map.setSourceContent(e, t),
              !1 !== this.options.inputSourcemaps) {
                  var n = o.resolveSync(t, e, u.readFileSync);
                  if (n) {
                      var r = new a(n.map)
                        , s = n.sourcesRelativeTo;
                      this.map.applySourceMap(r, e, i(l.dirname(s)))
                  }
              }
          }, this)
      }
      ,
      t.comment = function(e) {
          return /^# sourceMappingURL=/.test(e.comment) ? this.emit("", e.position) : this._comment(e)
      }
  },
  kTmg: function(e, t, n) {
      "use strict";
      function r(e) {
          return null != e && "object" == typeof e && !0 === e["@@functional/placeholder"]
      }
      function a(e) {
          return function t(n) {
              return 0 === arguments.length || r(n) ? t : e.apply(this, arguments)
          }
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      var o = a(function(e) {
          return function() {
              return e
          }
      })
        , i = o(!1)
        , u = o(!0)
        , l = {
          "@@functional/placeholder": !0
      };
      function s(e) {
          return function t(n, o) {
              switch (arguments.length) {
              case 0:
                  return t;
              case 1:
                  return r(n) ? t : a(function(t) {
                      return e(n, t)
                  });
              default:
                  return r(n) && r(o) ? t : r(n) ? a(function(t) {
                      return e(t, o)
                  }) : r(o) ? a(function(t) {
                      return e(n, t)
                  }) : e(n, o)
              }
          }
      }
      var c = s(function(e, t) {
          return Number(e) + Number(t)
      });
      function m(e, t) {
          var n;
          e = e || [],
          t = t || [];
          var r = e.length
            , a = t.length
            , o = [];
          for (n = 0; n < r; )
              o[o.length] = e[n],
              n += 1;
          for (n = 0; n < a; )
              o[o.length] = t[n],
              n += 1;
          return o
      }
      function f(e, t) {
          switch (e) {
          case 0:
              return function() {
                  return t.apply(this, arguments)
              }
              ;
          case 1:
              return function(e) {
                  return t.apply(this, arguments)
              }
              ;
          case 2:
              return function(e, n) {
                  return t.apply(this, arguments)
              }
              ;
          case 3:
              return function(e, n, r) {
                  return t.apply(this, arguments)
              }
              ;
          case 4:
              return function(e, n, r, a) {
                  return t.apply(this, arguments)
              }
              ;
          case 5:
              return function(e, n, r, a, o) {
                  return t.apply(this, arguments)
              }
              ;
          case 6:
              return function(e, n, r, a, o, i) {
                  return t.apply(this, arguments)
              }
              ;
          case 7:
              return function(e, n, r, a, o, i, u) {
                  return t.apply(this, arguments)
              }
              ;
          case 8:
              return function(e, n, r, a, o, i, u, l) {
                  return t.apply(this, arguments)
              }
              ;
          case 9:
              return function(e, n, r, a, o, i, u, l, s) {
                  return t.apply(this, arguments)
              }
              ;
          case 10:
              return function(e, n, r, a, o, i, u, l, s, c) {
                  return t.apply(this, arguments)
              }
              ;
          default:
              throw new Error("First argument to _arity must be a non-negative integer no greater than ten")
          }
      }
      function p(e, t, n) {
          return function() {
              for (var a = [], o = 0, i = e, u = 0; u < t.length || o < arguments.length; ) {
                  var l;
                  u < t.length && (!r(t[u]) || o >= arguments.length) ? l = t[u] : (l = arguments[o],
                  o += 1),
                  a[u] = l,
                  r(l) || (i -= 1),
                  u += 1
              }
              return i <= 0 ? n.apply(this, a) : f(i, p(e, a, n))
          }
      }
      var d = s(function(e, t) {
          return 1 === e ? a(t) : f(e, p(e, [], t))
      })
        , y = a(function(e) {
          return d(e.length, function() {
              var t = 0
                , n = arguments[0]
                , r = arguments[arguments.length - 1]
                , a = Array.prototype.slice.call(arguments, 0);
              return a[0] = function() {
                  var e = n.apply(this, m(arguments, [t, r]));
                  return t += 1,
                  e
              }
              ,
              e.apply(this, a)
          })
      });
      function b(e) {
          return function t(n, o, i) {
              switch (arguments.length) {
              case 0:
                  return t;
              case 1:
                  return r(n) ? t : s(function(t, r) {
                      return e(n, t, r)
                  });
              case 2:
                  return r(n) && r(o) ? t : r(n) ? s(function(t, n) {
                      return e(t, o, n)
                  }) : r(o) ? s(function(t, r) {
                      return e(n, t, r)
                  }) : a(function(t) {
                      return e(n, o, t)
                  });
              default:
                  return r(n) && r(o) && r(i) ? t : r(n) && r(o) ? s(function(t, n) {
                      return e(t, n, i)
                  }) : r(n) && r(i) ? s(function(t, n) {
                      return e(t, o, n)
                  }) : r(o) && r(i) ? s(function(t, r) {
                      return e(n, t, r)
                  }) : r(n) ? a(function(t) {
                      return e(t, o, i)
                  }) : r(o) ? a(function(t) {
                      return e(n, t, i)
                  }) : r(i) ? a(function(t) {
                      return e(n, o, t)
                  }) : e(n, o, i)
              }
          }
      }
      var h = b(function(e, t, n) {
          if (t >= n.length || t < -n.length)
              return n;
          var r = (t < 0 ? n.length : 0) + t
            , a = m(n);
          return a[r] = e(n[r]),
          a
      })
        , g = Array.isArray || function(e) {
          return null != e && e.length >= 0 && "[object Array]" === Object.prototype.toString.call(e)
      }
      ;
      function v(e) {
          return "function" == typeof e["@@transducer/step"]
      }
      function I(e, t, n) {
          return function() {
              if (0 === arguments.length)
                  return n();
              var r = Array.prototype.slice.call(arguments, 0)
                , a = r.pop();
              if (!g(a)) {
                  for (var o = 0; o < e.length; ) {
                      if ("function" == typeof a[e[o]])
                          return a[e[o]].apply(a, r);
                      o += 1
                  }
                  if (v(a))
                      return t.apply(null, r)(a)
              }
              return n.apply(this, arguments)
          }
      }
      function N(e) {
          return e && e["@@transducer/reduced"] ? e : {
              "@@transducer/value": e,
              "@@transducer/reduced": !0
          }
      }
      var A = {
          init: function() {
              return this.xf["@@transducer/init"]()
          },
          result: function(e) {
              return this.xf["@@transducer/result"](e)
          }
      }
        , S = function() {
          function e(e, t) {
              this.xf = t,
              this.f = e,
              this.all = !0
          }
          return e.prototype["@@transducer/init"] = A.init,
          e.prototype["@@transducer/result"] = function(e) {
              return this.all && (e = this.xf["@@transducer/step"](e, !0)),
              this.xf["@@transducer/result"](e)
          }
          ,
          e.prototype["@@transducer/step"] = function(e, t) {
              return this.f(t) || (this.all = !1,
              e = N(this.xf["@@transducer/step"](e, !1))),
              e
          }
          ,
          e
      }()
        , C = s(I(["all"], s(function(e, t) {
          return new S(e,t)
      }), function(e, t) {
          for (var n = 0; n < t.length; ) {
              if (!e(t[n]))
                  return !1;
              n += 1
          }
          return !0
      }))
        , x = s(function(e, t) {
          return t > e ? t : e
      });
      function R(e, t) {
          for (var n = 0, r = t.length, a = Array(r); n < r; )
              a[n] = e(t[n]),
              n += 1;
          return a
      }
      function T(e) {
          return "[object String]" === Object.prototype.toString.call(e)
      }
      var _ = a(function(e) {
          return !!g(e) || !!e && ("object" == typeof e && (!T(e) && (1 === e.nodeType ? !!e.length : 0 === e.length || e.length > 0 && (e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1)))))
      })
        , E = function() {
          function e(e) {
              this.f = e
          }
          return e.prototype["@@transducer/init"] = function() {
              throw new Error("init not implemented on XWrap")
          }
          ,
          e.prototype["@@transducer/result"] = function(e) {
              return e
          }
          ,
          e.prototype["@@transducer/step"] = function(e, t) {
              return this.f(e, t)
          }
          ,
          e
      }();
      function w(e) {
          return new E(e)
      }
      var V = s(function(e, t) {
          return f(e.length, function() {
              return e.apply(t, arguments)
          })
      });
      function O(e, t, n) {
          for (var r = n.next(); !r.done; ) {
              if ((t = e["@@transducer/step"](t, r.value)) && t["@@transducer/reduced"]) {
                  t = t["@@transducer/value"];
                  break
              }
              r = n.next()
          }
          return e["@@transducer/result"](t)
      }
      function M(e, t, n, r) {
          return e["@@transducer/result"](n[r](V(e["@@transducer/step"], e), t))
      }
      var B = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator";
      function F(e, t, n) {
          if ("function" == typeof e && (e = w(e)),
          _(n))
              return function(e, t, n) {
                  for (var r = 0, a = n.length; r < a; ) {
                      if ((t = e["@@transducer/step"](t, n[r])) && t["@@transducer/reduced"]) {
                          t = t["@@transducer/value"];
                          break
                      }
                      r += 1
                  }
                  return e["@@transducer/result"](t)
              }(e, t, n);
          if ("function" == typeof n["fantasy-land/reduce"])
              return M(e, t, n, "fantasy-land/reduce");
          if (null != n[B])
              return O(e, t, n[B]());
          if ("function" == typeof n.next)
              return O(e, t, n);
          if ("function" == typeof n.reduce)
              return M(e, t, n, "reduce");
          throw new TypeError("reduce: list must be array or iterable")
      }
      var k = function() {
          function e(e, t) {
              this.xf = t,
              this.f = e
          }
          return e.prototype["@@transducer/init"] = A.init,
          e.prototype["@@transducer/result"] = A.result,
          e.prototype["@@transducer/step"] = function(e, t) {
              return this.xf["@@transducer/step"](e, this.f(t))
          }
          ,
          e
      }()
        , P = s(function(e, t) {
          return new k(e,t)
      });
      function j(e, t) {
          return Object.prototype.hasOwnProperty.call(t, e)
      }
      var z = Object.prototype.toString
        , L = function() {
          return "[object Arguments]" === z.call(arguments) ? function(e) {
              return "[object Arguments]" === z.call(e)
          }
          : function(e) {
              return j("callee", e)
          }
      }
        , $ = !{
          toString: null
      }.propertyIsEnumerable("toString")
        , D = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"]
        , U = function() {
          return arguments.propertyIsEnumerable("length")
      }()
        , G = function(e, t) {
          for (var n = 0; n < e.length; ) {
              if (e[n] === t)
                  return !0;
              n += 1
          }
          return !1
      }
        , q = a("function" != typeof Object.keys || U ? function(e) {
          if (Object(e) !== e)
              return [];
          var t, n, r = [], a = U && L(e);
          for (t in e)
              !j(t, e) || a && "length" === t || (r[r.length] = t);
          if ($)
              for (n = D.length - 1; n >= 0; )
                  j(t = D[n], e) && !G(r, t) && (r[r.length] = t),
                  n -= 1;
          return r
      }
      : function(e) {
          return Object(e) !== e ? [] : Object.keys(e)
      }
      )
        , W = s(I(["fantasy-land/map", "map"], P, function(e, t) {
          switch (Object.prototype.toString.call(t)) {
          case "[object Function]":
              return d(t.length, function() {
                  return e.call(this, t.apply(this, arguments))
              });
          case "[object Object]":
              return F(function(n, r) {
                  return n[r] = e(t[r]),
                  n
              }, {}, q(t));
          default:
              return R(e, t)
          }
      }))
        , X = s(function(e, t) {
          for (var n = t, r = 0; r < e.length; ) {
              if (null == n)
                  return;
              n = n[e[r]],
              r += 1
          }
          return n
      })
        , Y = s(function(e, t) {
          return X([e], t)
      })
        , Z = s(function(e, t) {
          return W(Y(e), t)
      })
        , H = b(F)
        , Q = a(function(e) {
          return d(H(x, 0, Z("length", e)), function() {
              for (var t = 0, n = e.length; t < n; ) {
                  if (!e[t].apply(this, arguments))
                      return !1;
                  t += 1
              }
              return !0
          })
      })
        , J = s(function(e, t) {
          return e && t
      })
        , K = function() {
          function e(e, t) {
              this.xf = t,
              this.f = e,
              this.any = !1
          }
          return e.prototype["@@transducer/init"] = A.init,
          e.prototype["@@transducer/result"] = function(e) {
              return this.any || (e = this.xf["@@transducer/step"](e, !1)),
              this.xf["@@transducer/result"](e)
          }
          ,
          e.prototype["@@transducer/step"] = function(e, t) {
              return this.f(t) && (this.any = !0,
              e = N(this.xf["@@transducer/step"](e, !0))),
              e
          }
          ,
          e
      }()
        , ee = s(function(e, t) {
          return new K(e,t)
      })
        , te = s(I(["any"], ee, function(e, t) {
          for (var n = 0; n < t.length; ) {
              if (e(t[n]))
                  return !0;
              n += 1
          }
          return !1
      }))
        , ne = a(function(e) {
          return d(H(x, 0, Z("length", e)), function() {
              for (var t = 0, n = e.length; t < n; ) {
                  if (e[t].apply(this, arguments))
                      return !0;
                  t += 1
              }
              return !1
          })
      })
        , re = s(function(e, t) {
          return "function" == typeof t["fantasy-land/ap"] ? t["fantasy-land/ap"](e) : "function" == typeof e.ap ? e.ap(t) : "function" == typeof e ? function(n) {
              return e(n)(t(n))
          }
          : F(function(e, n) {
              return m(e, W(n, t))
          }, [], e)
      });
      var ae = function() {
          function e(e, t) {
              this.xf = t,
              this.pos = 0,
              this.full = !1,
              this.acc = new Array(e)
          }
          return e.prototype["@@transducer/init"] = A.init,
          e.prototype["@@transducer/result"] = function(e) {
              return this.acc = null,
              this.xf["@@transducer/result"](e)
          }
          ,
          e.prototype["@@transducer/step"] = function(e, t) {
              return this.store(t),
              this.full ? this.xf["@@transducer/step"](e, this.getCopy()) : e
          }
          ,
          e.prototype.store = function(e) {
              this.acc[this.pos] = e,
              this.pos += 1,
              this.pos === this.acc.length && (this.pos = 0,
              this.full = !0)
          }
          ,
          e.prototype.getCopy = function() {
              return m(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos))
          }
          ,
          e
      }()
        , oe = s(I([], s(function(e, t) {
          return new ae(e,t)
      }), function(e, t) {
          for (var n = 0, r = t.length - (e - 1), a = new Array(r >= 0 ? r : 0); n < r; )
              a[n] = Array.prototype.slice.call(t, n, n + e),
              n += 1;
          return a
      }))
        , ie = s(function(e, t) {
          return m(t, [e])
      })
        , ue = s(function(e, t) {
          return e.apply(this, t)
      })
        , le = a(function(e) {
          for (var t = q(e), n = t.length, r = [], a = 0; a < n; )
              r[a] = e[t[a]],
              a += 1;
          return r
      })
        , se = a(function e(t) {
          return t = W(function(t) {
              return "function" == typeof t ? t : e(t)
          }, t),
          d(H(x, 0, Z("length", le(t))), function() {
              var e = arguments;
              return W(function(t) {
                  return ue(t, e)
              }, t)
          })
      })
        , ce = s(function(e, t) {
          return t(e)
      })
        , me = b(function(e, t, n) {
          var r = e(t)
            , a = e(n);
          return r < a ? -1 : r > a ? 1 : 0
      })
        , fe = b(function(e, t, n) {
          var r = {};
          for (var a in n)
              r[a] = n[a];
          return r[e] = t,
          r
      })
        , pe = Number.isInteger || function(e) {
          return e << 0 === e
      }
        , de = a(function(e) {
          return null == e
      })
        , ye = b(function e(t, n, r) {
          if (0 === t.length)
              return n;
          var a = t[0];
          if (t.length > 1) {
              var o = !de(r) && j(a, r) ? r[a] : pe(t[1]) ? [] : {};
              n = e(Array.prototype.slice.call(t, 1), n, o)
          }
          if (pe(a) && g(r)) {
              var i = [].concat(r);
              return i[a] = n,
              i
          }
          return fe(a, n, r)
      })
        , be = s(function(e, t) {
          switch (e) {
          case 0:
              return function() {
                  return t.call(this)
              }
              ;
          case 1:
              return function(e) {
                  return t.call(this, e)
              }
              ;
          case 2:
              return function(e, n) {
                  return t.call(this, e, n)
              }
              ;
          case 3:
              return function(e, n, r) {
                  return t.call(this, e, n, r)
              }
              ;
          case 4:
              return function(e, n, r, a) {
                  return t.call(this, e, n, r, a)
              }
              ;
          case 5:
              return function(e, n, r, a, o) {
                  return t.call(this, e, n, r, a, o)
              }
              ;
          case 6:
              return function(e, n, r, a, o, i) {
                  return t.call(this, e, n, r, a, o, i)
              }
              ;
          case 7:
              return function(e, n, r, a, o, i, u) {
                  return t.call(this, e, n, r, a, o, i, u)
              }
              ;
          case 8:
              return function(e, n, r, a, o, i, u, l) {
                  return t.call(this, e, n, r, a, o, i, u, l)
              }
              ;
          case 9:
              return function(e, n, r, a, o, i, u, l, s) {
                  return t.call(this, e, n, r, a, o, i, u, l, s)
              }
              ;
          case 10:
              return function(e, n, r, a, o, i, u, l, s, c) {
                  return t.call(this, e, n, r, a, o, i, u, l, s, c)
              }
              ;
          default:
              throw new Error("First argument to nAry must be a non-negative integer no greater than ten")
          }
      })
        , he = a(function(e) {
          return be(2, e)
      });
      function ge(e) {
          return "[object Function]" === Object.prototype.toString.call(e)
      }
      var ve = s(function(e, t) {
          var n = d(e, t);
          return d(e, function() {
              return F(re, W(n, arguments[0]), Array.prototype.slice.call(arguments, 1))
          })
      })
        , Ie = a(function(e) {
          return ve(e.length, e)
      })
        , Ne = s(function(e, t) {
          return ge(e) ? function() {
              return e.apply(this, arguments) && t.apply(this, arguments)
          }
          : Ie(J)(e, t)
      })
        , Ae = a(function(e) {
          return d(e.length, e)
      })
        , Se = Ae(function(e) {
          return e.apply(this, Array.prototype.slice.call(arguments, 1))
      });
      function Ce(e) {
          return function t(n) {
              for (var r, a, o, i = [], u = 0, l = n.length; u < l; ) {
                  if (_(n[u]))
                      for (o = 0,
                      a = (r = e ? t(n[u]) : n[u]).length; o < a; )
                          i[i.length] = r[o],
                          o += 1;
                  else
                      i[i.length] = n[u];
                  u += 1
              }
              return i
          }
      }
      var xe = function(e) {
          var t = function(e) {
              return {
                  "@@transducer/init": A.init,
                  "@@transducer/result": function(t) {
                      return e["@@transducer/result"](t)
                  },
                  "@@transducer/step": function(t, n) {
                      var r = e["@@transducer/step"](t, n);
                      return r["@@transducer/reduced"] ? {
                          "@@transducer/value": r,
                          "@@transducer/reduced": !0
                      } : r
                  }
              }
          }(e);
          return {
              "@@transducer/init": A.init,
              "@@transducer/result": function(e) {
                  return t["@@transducer/result"](e)
              },
              "@@transducer/step": function(e, n) {
                  return _(n) ? F(t, e, n) : F(t, e, [n])
              }
          }
      }
        , Re = s(I(["fantasy-land/chain", "chain"], s(function(e, t) {
          return W(e, xe(t))
      }), function(e, t) {
          return "function" == typeof t ? function(n) {
              return e(t(n))(n)
          }
          : Ce(!1)(W(e, t))
      }))
        , Te = b(function(e, t, n) {
          if (e > t)
              throw new Error("min must not be greater than max in clamp(min, max, value)");
          return n < e ? e : n > t ? t : n
      });
      function _e(e) {
          return new RegExp(e.source,(e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.sticky ? "y" : "") + (e.unicode ? "u" : ""))
      }
      var Ee = a(function(e) {
          return null === e ? "Null" : void 0 === e ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1)
      });
      function we(e, t, n, r) {
          var a = function(a) {
              for (var o = t.length, i = 0; i < o; ) {
                  if (e === t[i])
                      return n[i];
                  i += 1
              }
              for (var u in t[i + 1] = e,
              n[i + 1] = a,
              e)
                  a[u] = r ? we(e[u], t, n, !0) : e[u];
              return a
          };
          switch (Ee(e)) {
          case "Object":
              return a({});
          case "Array":
              return a([]);
          case "Date":
              return new Date(e.valueOf());
          case "RegExp":
              return _e(e);
          default:
              return e
          }
      }
      var Ve = a(function(e) {
          return null != e && "function" == typeof e.clone ? e.clone() : we(e, [], [], !0)
      })
        , Oe = a(function(e) {
          return function(t, n) {
              return e(t, n) ? -1 : e(n, t) ? 1 : 0
          }
      })
        , Me = a(function(e) {
          return !e
      })
        , Be = Ie(Me);
      function Fe(e, t) {
          return function() {
              return t.call(this, e.apply(this, arguments))
          }
      }
      function ke(e, t) {
          return function() {
              var n = arguments.length;
              if (0 === n)
                  return t();
              var r = arguments[n - 1];
              return g(r) || "function" != typeof r[e] ? t.apply(this, arguments) : r[e].apply(r, Array.prototype.slice.call(arguments, 0, n - 1))
          }
      }
      var Pe = b(ke("slice", function(e, t, n) {
          return Array.prototype.slice.call(n, e, t)
      }))
        , je = a(ke("tail", Pe(1, 1 / 0)));
      function ze() {
          if (0 === arguments.length)
              throw new Error("pipe requires at least one argument");
          return f(arguments[0].length, H(Fe, arguments[0], je(arguments)))
      }
      var Le = a(function(e) {
          return T(e) ? e.split("").reverse().join("") : Array.prototype.slice.call(e, 0).reverse()
      });
      function $e() {
          if (0 === arguments.length)
              throw new Error("compose requires at least one argument");
          return ze.apply(this, Le(arguments))
      }
      function De() {
          if (0 === arguments.length)
              throw new Error("composeK requires at least one argument");
          var e = Array.prototype.slice.call(arguments)
            , t = e.pop();
          return $e($e.apply(this, W(Re, e)), t)
      }
      function Ue(e, t) {
          return function() {
              var n = this;
              return e.apply(n, arguments).then(function(e) {
                  return t.call(n, e)
              })
          }
      }
      function Ge() {
          if (0 === arguments.length)
              throw new Error("pipeP requires at least one argument");
          return f(arguments[0].length, H(Ue, arguments[0], je(arguments)))
      }
      function qe() {
          if (0 === arguments.length)
              throw new Error("composeP requires at least one argument");
          return Ge.apply(this, Le(arguments))
      }
      function We(e) {
          for (var t, n = []; !(t = e.next()).done; )
              n.push(t.value);
          return n
      }
      function Xe(e, t, n) {
          for (var r = 0, a = n.length; r < a; ) {
              if (e(t, n[r]))
                  return !0;
              r += 1
          }
          return !1
      }
      var Ye = s(function(e, t) {
          return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
      });
      function Ze(e, t, n, r) {
          var a = We(e);
          function o(e, t) {
              return He(e, t, n.slice(), r.slice())
          }
          return !Xe(function(e, t) {
              return !Xe(o, t, e)
          }, We(t), a)
      }
      function He(e, t, n, r) {
          if (Ye(e, t))
              return !0;
          var a, o, i = Ee(e);
          if (i !== Ee(t))
              return !1;
          if (null == e || null == t)
              return !1;
          if ("function" == typeof e["fantasy-land/equals"] || "function" == typeof t["fantasy-land/equals"])
              return "function" == typeof e["fantasy-land/equals"] && e["fantasy-land/equals"](t) && "function" == typeof t["fantasy-land/equals"] && t["fantasy-land/equals"](e);
          if ("function" == typeof e.equals || "function" == typeof t.equals)
              return "function" == typeof e.equals && e.equals(t) && "function" == typeof t.equals && t.equals(e);
          switch (i) {
          case "Arguments":
          case "Array":
          case "Object":
              if ("function" == typeof e.constructor && "Promise" === (a = e.constructor,
              null == (o = String(a).match(/^function (\w*)/)) ? "" : o[1]))
                  return e === t;
              break;
          case "Boolean":
          case "Number":
          case "String":
              if (typeof e != typeof t || !Ye(e.valueOf(), t.valueOf()))
                  return !1;
              break;
          case "Date":
              if (!Ye(e.valueOf(), t.valueOf()))
                  return !1;
              break;
          case "Error":
              return e.name === t.name && e.message === t.message;
          case "RegExp":
              if (e.source !== t.source || e.global !== t.global || e.ignoreCase !== t.ignoreCase || e.multiline !== t.multiline || e.sticky !== t.sticky || e.unicode !== t.unicode)
                  return !1
          }
          for (var u = n.length - 1; u >= 0; ) {
              if (n[u] === e)
                  return r[u] === t;
              u -= 1
          }
          switch (i) {
          case "Map":
              return e.size === t.size && Ze(e.entries(), t.entries(), n.concat([e]), r.concat([t]));
          case "Set":
              return e.size === t.size && Ze(e.values(), t.values(), n.concat([e]), r.concat([t]));
          case "Arguments":
          case "Array":
          case "Object":
          case "Boolean":
          case "Number":
          case "String":
          case "Date":
          case "Error":
          case "RegExp":
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "ArrayBuffer":
              break;
          default:
              return !1
          }
          var l = q(e);
          if (l.length !== q(t).length)
              return !1;
          var s = n.concat([e])
            , c = r.concat([t]);
          for (u = l.length - 1; u >= 0; ) {
              var m = l[u];
              if (!j(m, t) || !He(t[m], e[m], s, c))
                  return !1;
              u -= 1
          }
          return !0
      }
      var Qe = s(function(e, t) {
          return He(e, t, [], [])
      });
      function Je(e, t, n) {
          var r, a;
          if ("function" == typeof e.indexOf)
              switch (typeof t) {
              case "number":
                  if (0 === t) {
                      for (r = 1 / t; n < e.length; ) {
                          if (0 === (a = e[n]) && 1 / a === r)
                              return n;
                          n += 1
                      }
                      return -1
                  }
                  if (t != t) {
                      for (; n < e.length; ) {
                          if ("number" == typeof (a = e[n]) && a != a)
                              return n;
                          n += 1
                      }
                      return -1
                  }
                  return e.indexOf(t, n);
              case "string":
              case "boolean":
              case "function":
              case "undefined":
                  return e.indexOf(t, n);
              case "object":
                  if (null === t)
                      return e.indexOf(t, n)
              }
          for (; n < e.length; ) {
              if (Qe(e[n], t))
                  return n;
              n += 1
          }
          return -1
      }
      function Ke(e, t) {
          return Je(t, e, 0) >= 0
      }
      function et(e) {
          return '"' + e.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0").replace(/"/g, '\\"') + '"'
      }
      var tt = function(e) {
          return (e < 10 ? "0" : "") + e
      }
        , nt = "function" == typeof Date.prototype.toISOString ? function(e) {
          return e.toISOString()
      }
      : function(e) {
          return e.getUTCFullYear() + "-" + tt(e.getUTCMonth() + 1) + "-" + tt(e.getUTCDate()) + "T" + tt(e.getUTCHours()) + ":" + tt(e.getUTCMinutes()) + ":" + tt(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
      }
      ;
      function rt(e) {
          return function() {
              return !e.apply(this, arguments)
          }
      }
      function at(e, t) {
          for (var n = 0, r = t.length, a = []; n < r; )
              e(t[n]) && (a[a.length] = t[n]),
              n += 1;
          return a
      }
      function ot(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
      }
      var it = function() {
          function e(e, t) {
              this.xf = t,
              this.f = e
          }
          return e.prototype["@@transducer/init"] = A.init,
          e.prototype["@@transducer/result"] = A.result,
          e.prototype["@@transducer/step"] = function(e, t) {
              return this.f(t) ? this.xf["@@transducer/step"](e, t) : e
          }
          ,
          e
      }()
        , ut = s(I(["filter"], s(function(e, t) {
          return new it(e,t)
      }), function(e, t) {
          return ot(t) ? F(function(n, r) {
              return e(t[r]) && (n[r] = t[r]),
              n
          }, {}, q(t)) : at(e, t)
      }))
        , lt = s(function(e, t) {
          return ut(rt(e), t)
      });
      var st = a(function(e) {
          return function e(t, n) {
              var r = function(r) {
                  var a = n.concat([t]);
                  return Ke(r, a) ? "<Circular>" : e(r, a)
              }
                , a = function(e, t) {
                  return R(function(t) {
                      return et(t) + ": " + r(e[t])
                  }, t.slice().sort())
              };
              switch (Object.prototype.toString.call(t)) {
              case "[object Arguments]":
                  return "(function() { return arguments; }(" + R(r, t).join(", ") + "))";
              case "[object Array]":
                  return "[" + R(r, t).concat(a(t, lt(function(e) {
                      return /^\d+$/.test(e)
                  }, q(t)))).join(", ") + "]";
              case "[object Boolean]":
                  return "object" == typeof t ? "new Boolean(" + r(t.valueOf()) + ")" : t.toString();
              case "[object Date]":
                  return "new Date(" + (isNaN(t.valueOf()) ? r(NaN) : et(nt(t))) + ")";
              case "[object Null]":
                  return "null";
              case "[object Number]":
                  return "object" == typeof t ? "new Number(" + r(t.valueOf()) + ")" : 1 / t == -1 / 0 ? "-0" : t.toString(10);
              case "[object String]":
                  return "object" == typeof t ? "new String(" + r(t.valueOf()) + ")" : et(t);
              case "[object Undefined]":
                  return "undefined";
              default:
                  if ("function" == typeof t.toString) {
                      var o = t.toString();
                      if ("[object Object]" !== o)
                          return o
                  }
                  return "{" + a(t, q(t)).join(", ") + "}"
              }
          }(e, [])
      })
        , ct = s(function(e, t) {
          if (g(e)) {
              if (g(t))
                  return e.concat(t);
              throw new TypeError(st(t) + " is not an array")
          }
          if (T(e)) {
              if (T(t))
                  return e + t;
              throw new TypeError(st(t) + " is not a string")
          }
          if (null != e && ge(e["fantasy-land/concat"]))
              return e["fantasy-land/concat"](t);
          if (null != e && ge(e.concat))
              return e.concat(t);
          throw new TypeError(st(e) + ' does not have a method named "concat" or "fantasy-land/concat"')
      })
        , mt = a(function(e) {
          return f(H(x, 0, W(function(e) {
              return e[0].length
          }, e)), function() {
              for (var t = 0; t < e.length; ) {
                  if (e[t][0].apply(this, arguments))
                      return e[t][1].apply(this, arguments);
                  t += 1
              }
          })
      })
        , ft = s(function(e, t) {
          if (e > 10)
              throw new Error("Constructor with greater than ten arguments");
          return 0 === e ? function() {
              return new t
          }
          : Ae(be(e, function(e, n, r, a, o, i, u, l, s, c) {
              switch (arguments.length) {
              case 1:
                  return new t(e);
              case 2:
                  return new t(e,n);
              case 3:
                  return new t(e,n,r);
              case 4:
                  return new t(e,n,r,a);
              case 5:
                  return new t(e,n,r,a,o);
              case 6:
                  return new t(e,n,r,a,o,i);
              case 7:
                  return new t(e,n,r,a,o,i,u);
              case 8:
                  return new t(e,n,r,a,o,i,u,l);
              case 9:
                  return new t(e,n,r,a,o,i,u,l,s);
              case 10:
                  return new t(e,n,r,a,o,i,u,l,s,c)
              }
          }))
      })
        , pt = a(function(e) {
          return ft(e.length, e)
      })
        , dt = s(Ke)
        , yt = s(function(e, t) {
          return d(H(x, 0, Z("length", t)), function() {
              var n = arguments
                , r = this;
              return e.apply(r, R(function(e) {
                  return e.apply(r, n)
              }, t))
          })
      })
        , bt = function() {
          function e(e, t, n, r) {
              this.valueFn = e,
              this.valueAcc = t,
              this.keyFn = n,
              this.xf = r,
              this.inputs = {}
          }
          return e.prototype["@@transducer/init"] = A.init,
          e.prototype["@@transducer/result"] = function(e) {
              var t;
              for (t in this.inputs)
                  if (j(t, this.inputs) && (e = this.xf["@@transducer/step"](e, this.inputs[t]))["@@transducer/reduced"]) {
                      e = e["@@transducer/value"];
                      break
                  }
              return this.inputs = null,
              this.xf["@@transducer/result"](e)
          }
          ,
          e.prototype["@@transducer/step"] = function(e, t) {
              var n = this.keyFn(t);
              return this.inputs[n] = this.inputs[n] || [n, this.valueAcc],
              this.inputs[n][1] = this.valueFn(this.inputs[n][1], t),
              e
          }
          ,
          e
      }()
        , ht = p(4, [], I([], p(4, [], function(e, t, n, r) {
          return new bt(e,t,n,r)
      }), function(e, t, n, r) {
          return F(function(r, a) {
              var o = n(a);
              return r[o] = e(j(o, r) ? r[o] : t, a),
              r
          }, {}, r)
      }))
        , gt = ht(function(e, t) {
          return e + 1
      }, 0)
        , vt = c(-1)
        , It = s(function(e, t) {
          return null == t || t != t ? e : t
      })
        , Nt = b(function(e, t, n) {
          var r = e(t)
            , a = e(n);
          return r > a ? -1 : r < a ? 1 : 0
      })
        , At = s(function(e, t) {
          for (var n = [], r = 0, a = e.length; r < a; )
              Ke(e[r], t) || Ke(e[r], n) || (n[n.length] = e[r]),
              r += 1;
          return n
      })
        , St = b(function(e, t, n) {
          for (var r = [], a = 0, o = t.length; a < o; )
              Xe(e, t[a], n) || Xe(e, t[a], r) || r.push(t[a]),
              a += 1;
          return r
      })
        , Ct = s(function(e, t) {
          var n = {};
          for (var r in t)
              n[r] = t[r];
          return delete n[e],
          n
      })
        , xt = b(function(e, t, n) {
          var r = Array.prototype.slice.call(n, 0);
          return r.splice(e, t),
          r
      })
        , Rt = b(function(e, t, n) {
          return h(o(t), e, n)
      })
        , Tt = s(function e(t, n) {
          switch (t.length) {
          case 0:
              return n;
          case 1:
              return pe(t[0]) ? xt(t[0], 1, n) : Ct(t[0], n);
          default:
              var r = t[0]
                , a = Array.prototype.slice.call(t, 1);
              return null == n[r] ? n : pe(t[0]) ? Rt(r, e(a, n[r]), n) : fe(r, e(a, n[r]), n)
          }
      })
        , _t = s(function(e, t) {
          return e / t
      })
        , Et = function() {
          function e(e, t) {
              this.xf = t,
              this.n = e
          }
          return e.prototype["@@transducer/init"] = A.init,
          e.prototype["@@transducer/result"] = A.result,
          e.prototype["@@transducer/step"] = function(e, t) {
              return this.n > 0 ? (this.n -= 1,
              e) : this.xf["@@transducer/step"](e, t)
          }
          ,
          e
      }()
        , wt = s(I(["drop"], s(function(e, t) {
          return new Et(e,t)
      }), function(e, t) {
          return Pe(Math.max(0, e), 1 / 0, t)
      }))
        , Vt = function() {
          function e(e, t) {
              this.xf = t,
              this.n = e,
              this.i = 0
          }
          return e.prototype["@@transducer/init"] = A.init,
          e.prototype["@@transducer/result"] = A.result,
          e.prototype["@@transducer/step"] = function(e, t) {
              this.i += 1;
              var n = 0 === this.n ? e : this.xf["@@transducer/step"](e, t);
              return this.n >= 0 && this.i >= this.n ? N(n) : n
          }
          ,
          e
      }()
        , Ot = s(I(["take"], s(function(e, t) {
          return new Vt(e,t)
      }), function(e, t) {
          return Pe(0, e < 0 ? 1 / 0 : e, t)
      }));
      var Mt = function() {
          function e(e, t) {
              this.xf = t,
              this.pos = 0,
              this.full = !1,
              this.acc = new Array(e)
          }
          return e.prototype["@@transducer/init"] = A.init,
          e.prototype["@@transducer/result"] = function(e) {
              return this.acc = null,
              this.xf["@@transducer/result"](e)
          }
          ,
          e.prototype["@@transducer/step"] = function(e, t) {
              return this.full && (e = this.xf["@@transducer/step"](e, this.acc[this.pos])),
              this.store(t),
              e
          }
          ,
          e.prototype.store = function(e) {
              this.acc[this.pos] = e,
              this.pos += 1,
              this.pos === this.acc.length && (this.pos = 0,
              this.full = !0)
          }
          ,
          e
      }()
        , Bt = s(I([], s(function(e, t) {
          return new Mt(e,t)
      }), function(e, t) {
          return Ot(e < t.length ? t.length - e : 0, t)
      }));
      var Ft = function() {
          function e(e, t) {
              this.f = e,
              this.retained = [],
              this.xf = t
          }
          return e.prototype["@@transducer/init"] = A.init,
          e.prototype["@@transducer/result"] = function(e) {
              return this.retained = null,
              this.xf["@@transducer/result"](e)
          }
          ,
          e.prototype["@@transducer/step"] = function(e, t) {
              return this.f(t) ? this.retain(e, t) : this.flush(e, t)
          }
          ,
          e.prototype.flush = function(e, t) {
              return e = F(this.xf["@@transducer/step"], e, this.retained),
              this.retained = [],
              this.xf["@@transducer/step"](e, t)
          }
          ,
          e.prototype.retain = function(e, t) {
              return this.retained.push(t),
              e
          }
          ,
          e
      }()
        , kt = s(I([], s(function(e, t) {
          return new Ft(e,t)
      }), function(e, t) {
          for (var n = t.length - 1; n >= 0 && e(t[n]); )
              n -= 1;
          return Pe(0, n + 1, t)
      }))
        , Pt = function() {
          function e(e, t) {
              this.xf = t,
              this.pred = e,
              this.lastValue = void 0,
              this.seenFirstValue = !1
          }
          return e.prototype["@@transducer/init"] = A.init,
          e.prototype["@@transducer/result"] = A.result,
          e.prototype["@@transducer/step"] = function(e, t) {
              var n = !1;
              return this.seenFirstValue ? this.pred(this.lastValue, t) && (n = !0) : this.seenFirstValue = !0,
              this.lastValue = t,
              n ? e : this.xf["@@transducer/step"](e, t)
          }
          ,
          e
      }()
        , jt = s(function(e, t) {
          return new Pt(e,t)
      })
        , zt = s(function(e, t) {
          var n = e < 0 ? t.length + e : e;
          return T(t) ? t.charAt(n) : t[n]
      })
        , Lt = zt(-1)
        , $t = s(I([], jt, function(e, t) {
          var n = []
            , r = 1
            , a = t.length;
          if (0 !== a)
              for (n[0] = t[0]; r < a; )
                  e(Lt(n), t[r]) || (n[n.length] = t[r]),
                  r += 1;
          return n
      }))
        , Dt = a(I([], jt(Qe), $t(Qe)))
        , Ut = function() {
          function e(e, t) {
              this.xf = t,
              this.f = e
          }
          return e.prototype["@@transducer/init"] = A.init,
          e.prototype["@@transducer/result"] = A.result,
          e.prototype["@@transducer/step"] = function(e, t) {
              if (this.f) {
                  if (this.f(t))
                      return e;
                  this.f = null
              }
              return this.xf["@@transducer/step"](e, t)
          }
          ,
          e
      }()
        , Gt = s(I(["dropWhile"], s(function(e, t) {
          return new Ut(e,t)
      }), function(e, t) {
          for (var n = 0, r = t.length; n < r && e(t[n]); )
              n += 1;
          return Pe(n, 1 / 0, t)
      }))
        , qt = s(function(e, t) {
          return e || t
      })
        , Wt = s(function(e, t) {
          return ge(e) ? function() {
              return e.apply(this, arguments) || t.apply(this, arguments)
          }
          : Ie(qt)(e, t)
      })
        , Xt = a(function(e) {
          return null != e && "function" == typeof e["fantasy-land/empty"] ? e["fantasy-land/empty"]() : null != e && null != e.constructor && "function" == typeof e.constructor["fantasy-land/empty"] ? e.constructor["fantasy-land/empty"]() : null != e && "function" == typeof e.empty ? e.empty() : null != e && null != e.constructor && "function" == typeof e.constructor.empty ? e.constructor.empty() : g(e) ? [] : T(e) ? "" : ot(e) ? {} : L(e) ? function() {
              return arguments
          }() : void 0
      })
        , Yt = s(function(e, t) {
          return wt(e >= 0 ? t.length - e : 0, t)
      })
        , Zt = s(function(e, t) {
          return Qe(Yt(e.length, t), e)
      })
        , Ht = b(function(e, t, n) {
          return Qe(e(t), e(n))
      })
        , Qt = b(function(e, t, n) {
          return Qe(t[e], n[e])
      })
        , Jt = s(function e(t, n) {
          var r, a, o, i = {};
          for (a in n)
              o = typeof (r = t[a]),
              i[a] = "function" === o ? r(n[a]) : r && "object" === o ? e(r, n[a]) : n[a];
          return i
      })
        , Kt = function() {
          function e(e, t) {
              this.xf = t,
              this.f = e,
              this.found = !1
          }
          return e.prototype["@@transducer/init"] = A.init,
          e.prototype["@@transducer/result"] = function(e) {
              return this.found || (e = this.xf["@@transducer/step"](e, void 0)),
              this.xf["@@transducer/result"](e)
          }
          ,
          e.prototype["@@transducer/step"] = function(e, t) {
              return this.f(t) && (this.found = !0,
              e = N(this.xf["@@transducer/step"](e, t))),
              e
          }
          ,
          e
      }()
        , en = s(I(["find"], s(function(e, t) {
          return new Kt(e,t)
      }), function(e, t) {
          for (var n = 0, r = t.length; n < r; ) {
              if (e(t[n]))
                  return t[n];
              n += 1
          }
      }))
        , tn = function() {
          function e(e, t) {
              this.xf = t,
              this.f = e,
              this.idx = -1,
              this.found = !1
          }
          return e.prototype["@@transducer/init"] = A.init,
          e.prototype["@@transducer/result"] = function(e) {
              return this.found || (e = this.xf["@@transducer/step"](e, -1)),
              this.xf["@@transducer/result"](e)
          }
          ,
          e.prototype["@@transducer/step"] = function(e, t) {
              return this.idx += 1,
              this.f(t) && (this.found = !0,
              e = N(this.xf["@@transducer/step"](e, this.idx))),
              e
          }
          ,
          e
      }()
        , nn = s(I([], s(function(e, t) {
          return new tn(e,t)
      }), function(e, t) {
          for (var n = 0, r = t.length; n < r; ) {
              if (e(t[n]))
                  return n;
              n += 1
          }
          return -1
      }))
        , rn = function() {
          function e(e, t) {
              this.xf = t,
              this.f = e
          }
          return e.prototype["@@transducer/init"] = A.init,
          e.prototype["@@transducer/result"] = function(e) {
              return this.xf["@@transducer/result"](this.xf["@@transducer/step"](e, this.last))
          }
          ,
          e.prototype["@@transducer/step"] = function(e, t) {
              return this.f(t) && (this.last = t),
              e
          }
          ,
          e
      }()
        , an = s(I([], s(function(e, t) {
          return new rn(e,t)
      }), function(e, t) {
          for (var n = t.length - 1; n >= 0; ) {
              if (e(t[n]))
                  return t[n];
              n -= 1
          }
      }))
        , on = function() {
          function e(e, t) {
              this.xf = t,
              this.f = e,
              this.idx = -1,
              this.lastIdx = -1
          }
          return e.prototype["@@transducer/init"] = A.init,
          e.prototype["@@transducer/result"] = function(e) {
              return this.xf["@@transducer/result"](this.xf["@@transducer/step"](e, this.lastIdx))
          }
          ,
          e.prototype["@@transducer/step"] = function(e, t) {
              return this.idx += 1,
              this.f(t) && (this.lastIdx = this.idx),
              e
          }
          ,
          e
      }()
        , un = s(I([], s(function(e, t) {
          return new on(e,t)
      }), function(e, t) {
          for (var n = t.length - 1; n >= 0; ) {
              if (e(t[n]))
                  return n;
              n -= 1
          }
          return -1
      }))
        , ln = a(Ce(!0))
        , sn = a(function(e) {
          return d(e.length, function(t, n) {
              var r = Array.prototype.slice.call(arguments, 0);
              return r[0] = n,
              r[1] = t,
              e.apply(this, r)
          })
      })
        , cn = s(ke("forEach", function(e, t) {
          for (var n = t.length, r = 0; r < n; )
              e(t[r]),
              r += 1;
          return t
      }))
        , mn = s(function(e, t) {
          for (var n = q(t), r = 0; r < n.length; ) {
              var a = n[r];
              e(t[a], a, t),
              r += 1
          }
          return t
      })
        , fn = a(function(e) {
          for (var t = {}, n = 0; n < e.length; )
              t[e[n][0]] = e[n][1],
              n += 1;
          return t
      })
        , pn = s(ke("groupBy", ht(function(e, t) {
          return null == e && (e = []),
          e.push(t),
          e
      }, null)))
        , dn = s(function(e, t) {
          for (var n = [], r = 0, a = t.length; r < a; ) {
              for (var o = r + 1; o < a && e(t[o - 1], t[o]); )
                  o += 1;
              n.push(t.slice(r, o)),
              r = o
          }
          return n
      })
        , yn = s(function(e, t) {
          return e > t
      })
        , bn = s(function(e, t) {
          return e >= t
      })
        , hn = s(j)
        , gn = s(function(e, t) {
          return e in t
      })
        , vn = zt(0);
      function In(e) {
          return e
      }
      var Nn = a(In)
        , An = b(function(e, t, n) {
          return d(Math.max(e.length, t.length, n.length), function() {
              return e.apply(this, arguments) ? t.apply(this, arguments) : n.apply(this, arguments)
          })
      })
        , Sn = c(1)
        , Cn = ht(function(e, t) {
          return t
      }, null)
        , xn = s(function(e, t) {
          return "function" != typeof t.indexOf || g(t) ? Je(t, e, 0) : t.indexOf(e)
      })
        , Rn = Pe(0, -1)
        , Tn = b(function(e, t, n) {
          return at(function(t) {
              return Xe(e, t, n)
          }, t)
      })
        , _n = b(function(e, t, n) {
          e = e < n.length && e >= 0 ? e : n.length;
          var r = Array.prototype.slice.call(n, 0);
          return r.splice(e, 0, t),
          r
      })
        , En = b(function(e, t, n) {
          return e = e < n.length && e >= 0 ? e : n.length,
          [].concat(Array.prototype.slice.call(n, 0, e), t, Array.prototype.slice.call(n, e))
      });
      function wn(e, t, n) {
          var r, a = typeof e;
          switch (a) {
          case "string":
          case "number":
              return 0 === e && 1 / e == -1 / 0 ? !!n._items["-0"] || (t && (n._items["-0"] = !0),
              !1) : null !== n._nativeSet ? t ? (r = n._nativeSet.size,
              n._nativeSet.add(e),
              n._nativeSet.size === r) : n._nativeSet.has(e) : a in n._items ? e in n._items[a] || (t && (n._items[a][e] = !0),
              !1) : (t && (n._items[a] = {},
              n._items[a][e] = !0),
              !1);
          case "boolean":
              if (a in n._items) {
                  var o = e ? 1 : 0;
                  return !!n._items[a][o] || (t && (n._items[a][o] = !0),
                  !1)
              }
              return t && (n._items[a] = e ? [!1, !0] : [!0, !1]),
              !1;
          case "function":
              return null !== n._nativeSet ? t ? (r = n._nativeSet.size,
              n._nativeSet.add(e),
              n._nativeSet.size === r) : n._nativeSet.has(e) : a in n._items ? !!Ke(e, n._items[a]) || (t && n._items[a].push(e),
              !1) : (t && (n._items[a] = [e]),
              !1);
          case "undefined":
              return !!n._items[a] || (t && (n._items[a] = !0),
              !1);
          case "object":
              if (null === e)
                  return !!n._items.null || (t && (n._items.null = !0),
                  !1);
          default:
              return (a = Object.prototype.toString.call(e))in n._items ? !!Ke(e, n._items[a]) || (t && n._items[a].push(e),
              !1) : (t && (n._items[a] = [e]),
              !1)
          }
      }
      var Vn = function() {
          function e() {
              this._nativeSet = "function" == typeof Set ? new Set : null,
              this._items = {}
          }
          return e.prototype.add = function(e) {
              return !wn(e, !0, this)
          }
          ,
          e.prototype.has = function(e) {
              return wn(e, !1, this)
          }
          ,
          e
      }()
        , On = s(function(e, t) {
          for (var n, r, a = new Vn, o = [], i = 0; i < t.length; )
              n = e(r = t[i]),
              a.add(n) && o.push(r),
              i += 1;
          return o
      })
        , Mn = On(Nn)
        , Bn = s(function(e, t) {
          var n, r;
          return e.length > t.length ? (n = e,
          r = t) : (n = t,
          r = e),
          Mn(at(sn(Ke)(n), r))
      })
        , Fn = s(ke("intersperse", function(e, t) {
          for (var n = [], r = 0, a = t.length; r < a; )
              r === a - 1 ? n.push(t[r]) : n.push(t[r], e),
              r += 1;
          return n
      }));
      var kn = "function" == typeof Object.assign ? Object.assign : function(e) {
          if (null == e)
              throw new TypeError("Cannot convert undefined or null to object");
          for (var t = Object(e), n = 1, r = arguments.length; n < r; ) {
              var a = arguments[n];
              if (null != a)
                  for (var o in a)
                      j(o, a) && (t[o] = a[o]);
              n += 1
          }
          return t
      }
        , Pn = s(function(e, t) {
          var n = {};
          return n[e] = t,
          n
      })
        , jn = {
          "@@transducer/init": Array,
          "@@transducer/step": function(e, t) {
              return e.push(t),
              e
          },
          "@@transducer/result": In
      }
        , zn = {
          "@@transducer/init": String,
          "@@transducer/step": function(e, t) {
              return e + t
          },
          "@@transducer/result": In
      }
        , Ln = {
          "@@transducer/init": Object,
          "@@transducer/step": function(e, t) {
              return kn(e, _(t) ? Pn(t[0], t[1]) : t)
          },
          "@@transducer/result": In
      };
      var $n = b(function(e, t, n) {
          return v(e) ? F(t(e), e["@@transducer/init"](), n) : F(t(function(e) {
              if (v(e))
                  return e;
              if (_(e))
                  return jn;
              if ("string" == typeof e)
                  return zn;
              if ("object" == typeof e)
                  return Ln;
              throw new Error("Cannot create transformer for " + e)
          }(e)), we(e, [], [], !1), n)
      })
        , Dn = a(function(e) {
          for (var t = q(e), n = t.length, r = 0, a = {}; r < n; ) {
              var o = t[r]
                , i = e[o]
                , u = j(i, a) ? a[i] : a[i] = [];
              u[u.length] = o,
              r += 1
          }
          return a
      })
        , Un = a(function(e) {
          for (var t = q(e), n = t.length, r = 0, a = {}; r < n; ) {
              var o = t[r];
              a[e[o]] = o,
              r += 1
          }
          return a
      })
        , Gn = s(function(e, t) {
          return d(e + 1, function() {
              var n = arguments[e];
              if (null != n && ge(n[t]))
                  return n[t].apply(n, Array.prototype.slice.call(arguments, 0, e));
              throw new TypeError(st(n) + ' does not have a method named "' + t + '"')
          })
      })
        , qn = s(function(e, t) {
          return null != t && t.constructor === e || t instanceof e
      })
        , Wn = a(function(e) {
          return null != e && Qe(e, Xt(e))
      })
        , Xn = Gn(1, "join")
        , Yn = a(function(e) {
          return yt(function() {
              return Array.prototype.slice.call(arguments, 0)
          }, e)
      })
        , Zn = a(function(e) {
          var t, n = [];
          for (t in e)
              n[n.length] = t;
          return n
      })
        , Hn = s(function(e, t) {
          if ("function" != typeof t.lastIndexOf || g(t)) {
              for (var n = t.length - 1; n >= 0; ) {
                  if (Qe(t[n], e))
                      return n;
                  n -= 1
              }
              return -1
          }
          return t.lastIndexOf(e)
      });
      function Qn(e) {
          return "[object Number]" === Object.prototype.toString.call(e)
      }
      var Jn = a(function(e) {
          return null != e && Qn(e.length) ? e.length : NaN
      })
        , Kn = s(function(e, t) {
          return function(n) {
              return function(r) {
                  return W(function(e) {
                      return t(e, r)
                  }, n(e(r)))
              }
          }
      })
        , er = a(function(e) {
          return Kn(zt(e), Rt(e))
      })
        , tr = a(function(e) {
          return Kn(X(e), ye(e))
      })
        , nr = a(function(e) {
          return Kn(Y(e), fe(e))
      })
        , rr = s(function(e, t) {
          return e < t
      })
        , ar = s(function(e, t) {
          return e <= t
      })
        , or = b(function(e, t, n) {
          for (var r = 0, a = n.length, o = [], i = [t]; r < a; )
              i = e(i[0], n[r]),
              o[r] = i[1],
              r += 1;
          return [i[0], o]
      })
        , ir = b(function(e, t, n) {
          for (var r = n.length - 1, a = [], o = [t]; r >= 0; )
              o = e(n[r], o[0]),
              a[r] = o[1],
              r -= 1;
          return [a, o[0]]
      })
        , ur = s(function(e, t) {
          return F(function(n, r) {
              return n[r] = e(t[r], r, t),
              n
          }, {}, q(t))
      })
        , lr = s(function(e, t) {
          return t.match(e) || []
      })
        , sr = s(function(e, t) {
          return pe(e) ? !pe(t) || t < 1 ? NaN : (e % t + t) % t : NaN
      })
        , cr = b(function(e, t, n) {
          return e(n) > e(t) ? n : t
      })
        , mr = H(c, 0)
        , fr = a(function(e) {
          return mr(e) / e.length
      })
        , pr = a(function(e) {
          var t = e.length;
          if (0 === t)
              return NaN;
          var n = 2 - t % 2
            , r = (t - n) / 2;
          return fr(Array.prototype.slice.call(e, 0).sort(function(e, t) {
              return e < t ? -1 : e > t ? 1 : 0
          }).slice(r, r + n))
      })
        , dr = s(function(e, t) {
          var n = {};
          return f(t.length, function() {
              var r = e.apply(this, arguments);
              return j(r, n) || (n[r] = t.apply(this, arguments)),
              n[r]
          })
      })
        , yr = dr(function() {
          return st(arguments)
      })
        , br = s(function(e, t) {
          return kn({}, e, t)
      })
        , hr = a(function(e) {
          return kn.apply(null, [{}].concat(e))
      })
        , gr = b(function(e, t, n) {
          var r, a = {};
          for (r in t)
              j(r, t) && (a[r] = j(r, n) ? e(r, t[r], n[r]) : t[r]);
          for (r in n)
              j(r, n) && !j(r, a) && (a[r] = n[r]);
          return a
      })
        , vr = b(function e(t, n, r) {
          return gr(function(n, r, a) {
              return ot(r) && ot(a) ? e(t, r, a) : t(n, r, a)
          }, n, r)
      })
        , Ir = s(function(e, t) {
          return vr(function(e, t, n) {
              return t
          }, e, t)
      })
        , Nr = s(function(e, t) {
          return vr(function(e, t, n) {
              return n
          }, e, t)
      })
        , Ar = b(function(e, t, n) {
          return vr(function(t, n, r) {
              return e(n, r)
          }, t, n)
      })
        , Sr = b(function(e, t, n) {
          return gr(function(t, n, r) {
              return e(n, r)
          }, t, n)
      })
        , Cr = s(function(e, t) {
          return t < e ? t : e
      })
        , xr = b(function(e, t, n) {
          return e(n) < e(t) ? n : t
      })
        , Rr = s(function(e, t) {
          return e % t
      })
        , Tr = s(function(e, t) {
          return e * t
      })
        , _r = a(function(e) {
          return -e
      })
        , Er = s(rt(I(["any"], ee, te)))
        , wr = a(function(e) {
          return d(e < 0 ? 1 : e + 1, function() {
              return zt(e, arguments)
          })
      })
        , Vr = b(function(e, t, n) {
          return e(t(n))
      });
      var Or = a(function(e) {
          return [e]
      })
        , Mr = s(function(e, t) {
          for (var n = {}, r = {}, a = 0, o = e.length; a < o; )
              r[e[a]] = 1,
              a += 1;
          for (var i in t)
              r.hasOwnProperty(i) || (n[i] = t[i]);
          return n
      })
        , Br = a(function(e) {
          var t, n = !1;
          return f(e.length, function() {
              return n ? t : (n = !0,
              t = e.apply(this, arguments))
          })
      })
        , Fr = function(e) {
          return {
              value: e,
              map: function(t) {
                  return Fr(t(e))
              }
          }
      }
        , kr = b(function(e, t, n) {
          return e(function(e) {
              return Fr(t(e))
          })(n).value
      })
        , Pr = s(function(e, t) {
          return [e, t]
      });
      function jr(e) {
          return s(function(t, n) {
              return f(Math.max(0, t.length - n.length), function() {
                  return t.apply(this, e(n, arguments))
              })
          })
      }
      var zr = jr(m)
        , Lr = jr(sn(m))
        , $r = Yn([ut, lt])
        , Dr = b(function(e, t, n) {
          return Qe(X(e, n), t)
      })
        , Ur = b(function(e, t, n) {
          return It(e, X(t, n))
      })
        , Gr = b(function(e, t, n) {
          return t.length > 0 && e(X(t, n))
      })
        , qr = s(function(e, t) {
          for (var n = {}, r = 0; r < e.length; )
              e[r]in t && (n[e[r]] = t[e[r]]),
              r += 1;
          return n
      })
        , Wr = s(function(e, t) {
          for (var n = {}, r = 0, a = e.length; r < a; ) {
              var o = e[r];
              n[o] = t[o],
              r += 1
          }
          return n
      })
        , Xr = s(function(e, t) {
          var n = {};
          for (var r in t)
              e(t[r], r, t) && (n[r] = t[r]);
          return n
      });
      function Yr() {
          if (0 === arguments.length)
              throw new Error("pipeK requires at least one argument");
          return De.apply(this, Le(arguments))
      }
      var Zr = s(function(e, t) {
          return m([e], t)
      })
        , Hr = H(Tr, 1)
        , Qr = s(function(e, t) {
          return d(t.length, function() {
              for (var n = [], r = 0; r < t.length; )
                  n.push(t[r].call(this, arguments[r])),
                  r += 1;
              return e.apply(this, n.concat(Array.prototype.slice.call(arguments, t.length)))
          })
      })
        , Jr = Qr(R, [Wr, Nn])
        , Kr = b(function(e, t, n) {
          return Qe(t, n[e])
      })
        , ea = b(function(e, t, n) {
          return qn(e, n[t])
      })
        , ta = b(function(e, t, n) {
          return null != n && j(t, n) ? n[t] : e
      })
        , na = b(function(e, t, n) {
          return e(n[t])
      })
        , ra = s(function(e, t) {
          for (var n = e.length, r = [], a = 0; a < n; )
              r[a] = t[e[a]],
              a += 1;
          return r
      })
        , aa = s(function(e, t) {
          if (!Qn(e) || !Qn(t))
              throw new TypeError("Both arguments to range must be numbers");
          for (var n = [], r = e; r < t; )
              n.push(r),
              r += 1;
          return n
      })
        , oa = b(function(e, t, n) {
          for (var r = n.length - 1; r >= 0; )
              t = e(n[r], t),
              r -= 1;
          return t
      })
        , ia = p(4, [], function(e, t, n, r) {
          return F(function(n, r) {
              return e(n, r) ? t(n, r) : N(n)
          }, n, r)
      })
        , ua = a(N)
        , la = s(function(e, t) {
          var n, r = Number(t), a = 0;
          if (r < 0 || isNaN(r))
              throw new RangeError("n must be a non-negative number");
          for (n = new Array(r); a < r; )
              n[a] = e(a),
              a += 1;
          return n
      })
        , sa = s(function(e, t) {
          return la(o(e), t)
      })
        , ca = b(function(e, t, n) {
          return n.replace(e, t)
      })
        , ma = b(function(e, t, n) {
          for (var r = 0, a = n.length, o = [t]; r < a; )
              t = e(t, n[r]),
              o[r + 1] = t,
              r += 1;
          return o
      })
        , fa = s(function(e, t) {
          return "function" == typeof t.sequence ? t.sequence(e) : oa(function(e, t) {
              return re(W(Zr, e), t)
          }, e([]), t)
      })
        , pa = b(function(e, t, n) {
          return kr(e, o(t), n)
      })
        , da = s(function(e, t) {
          return Array.prototype.slice.call(t, 0).sort(e)
      })
        , ya = s(function(e, t) {
          return Array.prototype.slice.call(t, 0).sort(function(t, n) {
              var r = e(t)
                , a = e(n);
              return r < a ? -1 : r > a ? 1 : 0
          })
      })
        , ba = s(function(e, t) {
          return Array.prototype.slice.call(t, 0).sort(function(t, n) {
              for (var r = 0, a = 0; 0 === r && a < e.length; )
                  r = e[a](t, n),
                  a += 1;
              return r
          })
      })
        , ha = Gn(1, "split")
        , ga = s(function(e, t) {
          return [Pe(0, e, t), Pe(e, Jn(t), t)]
      })
        , va = s(function(e, t) {
          if (e <= 0)
              throw new Error("First argument to splitEvery must be a positive integer");
          for (var n = [], r = 0; r < t.length; )
              n.push(Pe(r, r += e, t));
          return n
      })
        , Ia = s(function(e, t) {
          for (var n = 0, r = t.length, a = []; n < r && !e(t[n]); )
              a.push(t[n]),
              n += 1;
          return [a, Array.prototype.slice.call(t, n)]
      })
        , Na = s(function(e, t) {
          return Qe(Ot(e.length, t), e)
      })
        , Aa = s(function(e, t) {
          return Number(e) - Number(t)
      })
        , Sa = s(function(e, t) {
          return ct(At(e, t), At(t, e))
      })
        , Ca = b(function(e, t, n) {
          return ct(St(e, t, n), St(e, n, t))
      })
        , xa = s(function(e, t) {
          for (var n = t.length - 1; n >= 0 && e(t[n]); )
              n -= 1;
          return Pe(n + 1, 1 / 0, t)
      })
        , Ra = function() {
          function e(e, t) {
              this.xf = t,
              this.f = e
          }
          return e.prototype["@@transducer/init"] = A.init,
          e.prototype["@@transducer/result"] = A.result,
          e.prototype["@@transducer/step"] = function(e, t) {
              return this.f(t) ? this.xf["@@transducer/step"](e, t) : N(e)
          }
          ,
          e
      }()
        , Ta = s(I(["takeWhile"], s(function(e, t) {
          return new Ra(e,t)
      }), function(e, t) {
          for (var n = 0, r = t.length; n < r && e(t[n]); )
              n += 1;
          return Pe(0, n, t)
      }))
        , _a = function() {
          function e(e, t) {
              this.xf = t,
              this.f = e
          }
          return e.prototype["@@transducer/init"] = A.init,
          e.prototype["@@transducer/result"] = A.result,
          e.prototype["@@transducer/step"] = function(e, t) {
              return this.f(t),
              this.xf["@@transducer/step"](e, t)
          }
          ,
          e
      }()
        , Ea = s(I([], s(function(e, t) {
          return new _a(e,t)
      }), function(e, t) {
          return e(t),
          t
      }));
      var wa = s(function(e, t) {
          if (n = e,
          "[object RegExp]" !== Object.prototype.toString.call(n))
              throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + st(e));
          var n;
          return _e(e).test(t)
      })
        , Va = Gn(0, "toLowerCase")
        , Oa = a(function(e) {
          var t = [];
          for (var n in e)
              j(n, e) && (t[t.length] = [n, e[n]]);
          return t
      })
        , Ma = a(function(e) {
          var t = [];
          for (var n in e)
              t[t.length] = [n, e[n]];
          return t
      })
        , Ba = Gn(0, "toUpperCase")
        , Fa = d(4, function(e, t, n, r) {
          return F(e("function" == typeof t ? w(t) : t), n, r)
      })
        , ka = a(function(e) {
          for (var t = 0, n = []; t < e.length; ) {
              for (var r = e[t], a = 0; a < r.length; )
                  void 0 === n[a] && (n[a] = []),
                  n[a].push(r[a]),
                  a += 1;
              t += 1
          }
          return n
      })
        , Pa = b(function(e, t, n) {
          return "function" == typeof n["fantasy-land/traverse"] ? n["fantasy-land/traverse"](t, e) : fa(e, W(t, n))
      })
        , ja = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
        , za = a("function" == typeof String.prototype.trim && !ja.trim() && "​".trim() ? function(e) {
          return e.trim()
      }
      : function(e) {
          var t = new RegExp("^[" + ja + "][" + ja + "]*")
            , n = new RegExp("[" + ja + "][" + ja + "]*$");
          return e.replace(t, "").replace(n, "")
      }
      )
        , La = s(function(e, t) {
          return f(e.length, function() {
              try {
                  return e.apply(this, arguments)
              } catch (e) {
                  return t.apply(this, m([e], arguments))
              }
          })
      })
        , $a = a(function(e) {
          return function() {
              return e(Array.prototype.slice.call(arguments, 0))
          }
      })
        , Da = a(function(e) {
          return be(1, e)
      })
        , Ua = s(function(e, t) {
          return d(e, function() {
              for (var n, r = 1, a = t, o = 0; r <= e && "function" == typeof a; )
                  n = r === e ? arguments.length : o + a.length,
                  a = a.apply(this, Array.prototype.slice.call(arguments, o, n)),
                  r += 1,
                  o = n;
              return a
          })
      })
        , Ga = s(function(e, t) {
          for (var n = e(t), r = []; n && n.length; )
              r[r.length] = n[0],
              n = e(n[1]);
          return r
      })
        , qa = s($e(Mn, m))
        , Wa = s(function(e, t) {
          for (var n, r = 0, a = t.length, o = []; r < a; )
              Xe(e, n = t[r], o) || (o[o.length] = n),
              r += 1;
          return o
      })
        , Xa = b(function(e, t, n) {
          return Wa(e, m(t, n))
      })
        , Ya = b(function(e, t, n) {
          return e(n) ? n : t(n)
      })
        , Za = Re(In)
        , Ha = b(function(e, t, n) {
          for (var r = n; !e(r); )
              r = t(r);
          return r
      })
        , Qa = a(function(e) {
          var t, n = [];
          for (t in e)
              n[n.length] = e[t];
          return n
      })
        , Ja = function(e) {
          return {
              value: e,
              "fantasy-land/map": function() {
                  return this
              }
          }
      }
        , Ka = s(function(e, t) {
          return e(Ja)(t).value
      })
        , eo = b(function(e, t, n) {
          return e(n) ? t(n) : n
      })
        , to = s(function(e, t) {
          for (var n in e)
              if (j(n, e) && !e[n](t[n]))
                  return !1;
          return !0
      })
        , no = s(function(e, t) {
          return to(W(Qe, e), t)
      })
        , ro = s(function(e, t) {
          return lt(sn(Ke)(e), t)
      })
        , ao = s(function(e, t) {
          for (var n, r = 0, a = e.length, o = t.length, i = []; r < a; ) {
              for (n = 0; n < o; )
                  i[i.length] = [e[r], t[n]],
                  n += 1;
              r += 1
          }
          return i
      })
        , oo = s(function(e, t) {
          for (var n = [], r = 0, a = Math.min(e.length, t.length); r < a; )
              n[r] = [e[r], t[r]],
              r += 1;
          return n
      })
        , io = s(function(e, t) {
          for (var n = 0, r = Math.min(e.length, t.length), a = {}; n < r; )
              a[e[n]] = t[n],
              n += 1;
          return a
      })
        , uo = b(function(e, t, n) {
          for (var r = [], a = 0, o = Math.min(t.length, n.length); a < o; )
              r[a] = e(t[a], n[a]),
              a += 1;
          return r
      });
      n.d(t, "F", function() {
          return i
      }),
      n.d(t, "T", function() {
          return u
      }),
      n.d(t, "__", function() {
          return l
      }),
      n.d(t, "add", function() {
          return c
      }),
      n.d(t, "addIndex", function() {
          return y
      }),
      n.d(t, "adjust", function() {
          return h
      }),
      n.d(t, "all", function() {
          return C
      }),
      n.d(t, "allPass", function() {
          return Q
      }),
      n.d(t, "always", function() {
          return o
      }),
      n.d(t, "and", function() {
          return J
      }),
      n.d(t, "any", function() {
          return te
      }),
      n.d(t, "anyPass", function() {
          return ne
      }),
      n.d(t, "ap", function() {
          return re
      }),
      n.d(t, "aperture", function() {
          return oe
      }),
      n.d(t, "append", function() {
          return ie
      }),
      n.d(t, "apply", function() {
          return ue
      }),
      n.d(t, "applySpec", function() {
          return se
      }),
      n.d(t, "applyTo", function() {
          return ce
      }),
      n.d(t, "ascend", function() {
          return me
      }),
      n.d(t, "assoc", function() {
          return fe
      }),
      n.d(t, "assocPath", function() {
          return ye
      }),
      n.d(t, "binary", function() {
          return he
      }),
      n.d(t, "bind", function() {
          return V
      }),
      n.d(t, "both", function() {
          return Ne
      }),
      n.d(t, "call", function() {
          return Se
      }),
      n.d(t, "chain", function() {
          return Re
      }),
      n.d(t, "clamp", function() {
          return Te
      }),
      n.d(t, "clone", function() {
          return Ve
      }),
      n.d(t, "comparator", function() {
          return Oe
      }),
      n.d(t, "complement", function() {
          return Be
      }),
      n.d(t, "compose", function() {
          return $e
      }),
      n.d(t, "composeK", function() {
          return De
      }),
      n.d(t, "composeP", function() {
          return qe
      }),
      n.d(t, "concat", function() {
          return ct
      }),
      n.d(t, "cond", function() {
          return mt
      }),
      n.d(t, "construct", function() {
          return pt
      }),
      n.d(t, "constructN", function() {
          return ft
      }),
      n.d(t, "contains", function() {
          return dt
      }),
      n.d(t, "converge", function() {
          return yt
      }),
      n.d(t, "countBy", function() {
          return gt
      }),
      n.d(t, "curry", function() {
          return Ae
      }),
      n.d(t, "curryN", function() {
          return d
      }),
      n.d(t, "dec", function() {
          return vt
      }),
      n.d(t, "defaultTo", function() {
          return It
      }),
      n.d(t, "descend", function() {
          return Nt
      }),
      n.d(t, "difference", function() {
          return At
      }),
      n.d(t, "differenceWith", function() {
          return St
      }),
      n.d(t, "dissoc", function() {
          return Ct
      }),
      n.d(t, "dissocPath", function() {
          return Tt
      }),
      n.d(t, "divide", function() {
          return _t
      }),
      n.d(t, "drop", function() {
          return wt
      }),
      n.d(t, "dropLast", function() {
          return Bt
      }),
      n.d(t, "dropLastWhile", function() {
          return kt
      }),
      n.d(t, "dropRepeats", function() {
          return Dt
      }),
      n.d(t, "dropRepeatsWith", function() {
          return $t
      }),
      n.d(t, "dropWhile", function() {
          return Gt
      }),
      n.d(t, "either", function() {
          return Wt
      }),
      n.d(t, "empty", function() {
          return Xt
      }),
      n.d(t, "endsWith", function() {
          return Zt
      }),
      n.d(t, "eqBy", function() {
          return Ht
      }),
      n.d(t, "eqProps", function() {
          return Qt
      }),
      n.d(t, "equals", function() {
          return Qe
      }),
      n.d(t, "evolve", function() {
          return Jt
      }),
      n.d(t, "filter", function() {
          return ut
      }),
      n.d(t, "find", function() {
          return en
      }),
      n.d(t, "findIndex", function() {
          return nn
      }),
      n.d(t, "findLast", function() {
          return an
      }),
      n.d(t, "findLastIndex", function() {
          return un
      }),
      n.d(t, "flatten", function() {
          return ln
      }),
      n.d(t, "flip", function() {
          return sn
      }),
      n.d(t, "forEach", function() {
          return cn
      }),
      n.d(t, "forEachObjIndexed", function() {
          return mn
      }),
      n.d(t, "fromPairs", function() {
          return fn
      }),
      n.d(t, "groupBy", function() {
          return pn
      }),
      n.d(t, "groupWith", function() {
          return dn
      }),
      n.d(t, "gt", function() {
          return yn
      }),
      n.d(t, "gte", function() {
          return bn
      }),
      n.d(t, "has", function() {
          return hn
      }),
      n.d(t, "hasIn", function() {
          return gn
      }),
      n.d(t, "head", function() {
          return vn
      }),
      n.d(t, "identical", function() {
          return Ye
      }),
      n.d(t, "identity", function() {
          return Nn
      }),
      n.d(t, "ifElse", function() {
          return An
      }),
      n.d(t, "inc", function() {
          return Sn
      }),
      n.d(t, "indexBy", function() {
          return Cn
      }),
      n.d(t, "indexOf", function() {
          return xn
      }),
      n.d(t, "init", function() {
          return Rn
      }),
      n.d(t, "innerJoin", function() {
          return Tn
      }),
      n.d(t, "insert", function() {
          return _n
      }),
      n.d(t, "insertAll", function() {
          return En
      }),
      n.d(t, "intersection", function() {
          return Bn
      }),
      n.d(t, "intersperse", function() {
          return Fn
      }),
      n.d(t, "into", function() {
          return $n
      }),
      n.d(t, "invert", function() {
          return Dn
      }),
      n.d(t, "invertObj", function() {
          return Un
      }),
      n.d(t, "invoker", function() {
          return Gn
      }),
      n.d(t, "is", function() {
          return qn
      }),
      n.d(t, "isEmpty", function() {
          return Wn
      }),
      n.d(t, "isNil", function() {
          return de
      }),
      n.d(t, "join", function() {
          return Xn
      }),
      n.d(t, "juxt", function() {
          return Yn
      }),
      n.d(t, "keys", function() {
          return q
      }),
      n.d(t, "keysIn", function() {
          return Zn
      }),
      n.d(t, "last", function() {
          return Lt
      }),
      n.d(t, "lastIndexOf", function() {
          return Hn
      }),
      n.d(t, "length", function() {
          return Jn
      }),
      n.d(t, "lens", function() {
          return Kn
      }),
      n.d(t, "lensIndex", function() {
          return er
      }),
      n.d(t, "lensPath", function() {
          return tr
      }),
      n.d(t, "lensProp", function() {
          return nr
      }),
      n.d(t, "lift", function() {
          return Ie
      }),
      n.d(t, "liftN", function() {
          return ve
      }),
      n.d(t, "lt", function() {
          return rr
      }),
      n.d(t, "lte", function() {
          return ar
      }),
      n.d(t, "map", function() {
          return W
      }),
      n.d(t, "mapAccum", function() {
          return or
      }),
      n.d(t, "mapAccumRight", function() {
          return ir
      }),
      n.d(t, "mapObjIndexed", function() {
          return ur
      }),
      n.d(t, "match", function() {
          return lr
      }),
      n.d(t, "mathMod", function() {
          return sr
      }),
      n.d(t, "max", function() {
          return x
      }),
      n.d(t, "maxBy", function() {
          return cr
      }),
      n.d(t, "mean", function() {
          return fr
      }),
      n.d(t, "median", function() {
          return pr
      }),
      n.d(t, "memoize", function() {
          return yr
      }),
      n.d(t, "memoizeWith", function() {
          return dr
      }),
      n.d(t, "merge", function() {
          return br
      }),
      n.d(t, "mergeAll", function() {
          return hr
      }),
      n.d(t, "mergeDeepLeft", function() {
          return Ir
      }),
      n.d(t, "mergeDeepRight", function() {
          return Nr
      }),
      n.d(t, "mergeDeepWith", function() {
          return Ar
      }),
      n.d(t, "mergeDeepWithKey", function() {
          return vr
      }),
      n.d(t, "mergeWith", function() {
          return Sr
      }),
      n.d(t, "mergeWithKey", function() {
          return gr
      }),
      n.d(t, "min", function() {
          return Cr
      }),
      n.d(t, "minBy", function() {
          return xr
      }),
      n.d(t, "modulo", function() {
          return Rr
      }),
      n.d(t, "multiply", function() {
          return Tr
      }),
      n.d(t, "nAry", function() {
          return be
      }),
      n.d(t, "negate", function() {
          return _r
      }),
      n.d(t, "none", function() {
          return Er
      }),
      n.d(t, "not", function() {
          return Me
      }),
      n.d(t, "nth", function() {
          return zt
      }),
      n.d(t, "nthArg", function() {
          return wr
      }),
      n.d(t, "o", function() {
          return Vr
      }),
      n.d(t, "objOf", function() {
          return Pn
      }),
      n.d(t, "of", function() {
          return Or
      }),
      n.d(t, "omit", function() {
          return Mr
      }),
      n.d(t, "once", function() {
          return Br
      }),
      n.d(t, "or", function() {
          return qt
      }),
      n.d(t, "over", function() {
          return kr
      }),
      n.d(t, "pair", function() {
          return Pr
      }),
      n.d(t, "partial", function() {
          return zr
      }),
      n.d(t, "partialRight", function() {
          return Lr
      }),
      n.d(t, "partition", function() {
          return $r
      }),
      n.d(t, "path", function() {
          return X
      }),
      n.d(t, "pathEq", function() {
          return Dr
      }),
      n.d(t, "pathOr", function() {
          return Ur
      }),
      n.d(t, "pathSatisfies", function() {
          return Gr
      }),
      n.d(t, "pick", function() {
          return qr
      }),
      n.d(t, "pickAll", function() {
          return Wr
      }),
      n.d(t, "pickBy", function() {
          return Xr
      }),
      n.d(t, "pipe", function() {
          return ze
      }),
      n.d(t, "pipeK", function() {
          return Yr
      }),
      n.d(t, "pipeP", function() {
          return Ge
      }),
      n.d(t, "pluck", function() {
          return Z
      }),
      n.d(t, "prepend", function() {
          return Zr
      }),
      n.d(t, "product", function() {
          return Hr
      }),
      n.d(t, "project", function() {
          return Jr
      }),
      n.d(t, "prop", function() {
          return Y
      }),
      n.d(t, "propEq", function() {
          return Kr
      }),
      n.d(t, "propIs", function() {
          return ea
      }),
      n.d(t, "propOr", function() {
          return ta
      }),
      n.d(t, "propSatisfies", function() {
          return na
      }),
      n.d(t, "props", function() {
          return ra
      }),
      n.d(t, "range", function() {
          return aa
      }),
      n.d(t, "reduce", function() {
          return H
      }),
      n.d(t, "reduceBy", function() {
          return ht
      }),
      n.d(t, "reduceRight", function() {
          return oa
      }),
      n.d(t, "reduceWhile", function() {
          return ia
      }),
      n.d(t, "reduced", function() {
          return ua
      }),
      n.d(t, "reject", function() {
          return lt
      }),
      n.d(t, "remove", function() {
          return xt
      }),
      n.d(t, "repeat", function() {
          return sa
      }),
      n.d(t, "replace", function() {
          return ca
      }),
      n.d(t, "reverse", function() {
          return Le
      }),
      n.d(t, "scan", function() {
          return ma
      }),
      n.d(t, "sequence", function() {
          return fa
      }),
      n.d(t, "set", function() {
          return pa
      }),
      n.d(t, "slice", function() {
          return Pe
      }),
      n.d(t, "sort", function() {
          return da
      }),
      n.d(t, "sortBy", function() {
          return ya
      }),
      n.d(t, "sortWith", function() {
          return ba
      }),
      n.d(t, "split", function() {
          return ha
      }),
      n.d(t, "splitAt", function() {
          return ga
      }),
      n.d(t, "splitEvery", function() {
          return va
      }),
      n.d(t, "splitWhen", function() {
          return Ia
      }),
      n.d(t, "startsWith", function() {
          return Na
      }),
      n.d(t, "subtract", function() {
          return Aa
      }),
      n.d(t, "sum", function() {
          return mr
      }),
      n.d(t, "symmetricDifference", function() {
          return Sa
      }),
      n.d(t, "symmetricDifferenceWith", function() {
          return Ca
      }),
      n.d(t, "tail", function() {
          return je
      }),
      n.d(t, "take", function() {
          return Ot
      }),
      n.d(t, "takeLast", function() {
          return Yt
      }),
      n.d(t, "takeLastWhile", function() {
          return xa
      }),
      n.d(t, "takeWhile", function() {
          return Ta
      }),
      n.d(t, "tap", function() {
          return Ea
      }),
      n.d(t, "test", function() {
          return wa
      }),
      n.d(t, "times", function() {
          return la
      }),
      n.d(t, "toLower", function() {
          return Va
      }),
      n.d(t, "toPairs", function() {
          return Oa
      }),
      n.d(t, "toPairsIn", function() {
          return Ma
      }),
      n.d(t, "toString", function() {
          return st
      }),
      n.d(t, "toUpper", function() {
          return Ba
      }),
      n.d(t, "transduce", function() {
          return Fa
      }),
      n.d(t, "transpose", function() {
          return ka
      }),
      n.d(t, "traverse", function() {
          return Pa
      }),
      n.d(t, "trim", function() {
          return za
      }),
      n.d(t, "tryCatch", function() {
          return La
      }),
      n.d(t, "type", function() {
          return Ee
      }),
      n.d(t, "unapply", function() {
          return $a
      }),
      n.d(t, "unary", function() {
          return Da
      }),
      n.d(t, "uncurryN", function() {
          return Ua
      }),
      n.d(t, "unfold", function() {
          return Ga
      }),
      n.d(t, "union", function() {
          return qa
      }),
      n.d(t, "unionWith", function() {
          return Xa
      }),
      n.d(t, "uniq", function() {
          return Mn
      }),
      n.d(t, "uniqBy", function() {
          return On
      }),
      n.d(t, "uniqWith", function() {
          return Wa
      }),
      n.d(t, "unless", function() {
          return Ya
      }),
      n.d(t, "unnest", function() {
          return Za
      }),
      n.d(t, "until", function() {
          return Ha
      }),
      n.d(t, "update", function() {
          return Rt
      }),
      n.d(t, "useWith", function() {
          return Qr
      }),
      n.d(t, "values", function() {
          return le
      }),
      n.d(t, "valuesIn", function() {
          return Qa
      }),
      n.d(t, "view", function() {
          return Ka
      }),
      n.d(t, "when", function() {
          return eo
      }),
      n.d(t, "where", function() {
          return to
      }),
      n.d(t, "whereEq", function() {
          return no
      }),
      n.d(t, "without", function() {
          return ro
      }),
      n.d(t, "xprod", function() {
          return ao
      }),
      n.d(t, "zip", function() {
          return oo
      }),
      n.d(t, "zipObj", function() {
          return io
      }),
      n.d(t, "zipWith", function() {
          return uo
      })
  },
  kjeW: function(e, t, n) {
      (function(t) {
          var r;
          r = function() {
              return function(e) {
                  var t = {};
                  function n(r) {
                      if (t[r])
                          return t[r].exports;
                      var a = t[r] = {
                          i: r,
                          l: !1,
                          exports: {}
                      };
                      return e[r].call(a.exports, a, a.exports, n),
                      a.l = !0,
                      a.exports
                  }
                  return n.m = e,
                  n.c = t,
                  n.d = function(e, t, r) {
                      n.o(e, t) || Object.defineProperty(e, t, {
                          enumerable: !0,
                          get: r
                      })
                  }
                  ,
                  n.r = function(e) {
                      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                          value: "Module"
                      }),
                      Object.defineProperty(e, "__esModule", {
                          value: !0
                      })
                  }
                  ,
                  n.t = function(e, t) {
                      if (1 & t && (e = n(e)),
                      8 & t)
                          return e;
                      if (4 & t && "object" == typeof e && e && e.__esModule)
                          return e;
                      var r = Object.create(null);
                      if (n.r(r),
                      Object.defineProperty(r, "default", {
                          enumerable: !0,
                          value: e
                      }),
                      2 & t && "string" != typeof e)
                          for (var a in e)
                              n.d(r, a, function(t) {
                                  return e[t]
                              }
                              .bind(null, a));
                      return r
                  }
                  ,
                  n.n = function(e) {
                      var t = e && e.__esModule ? function() {
                          return e.default
                      }
                      : function() {
                          return e
                      }
                      ;
                      return n.d(t, "a", t),
                      t
                  }
                  ,
                  n.o = function(e, t) {
                      return Object.prototype.hasOwnProperty.call(e, t)
                  }
                  ,
                  n.p = "",
                  n(n.s = 36)
              }([function(e, t) {
                  e.exports = n("kTmg") 
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  }),
                  t.traversalNode = function(e, t, n) {
                      !function e(t, n, r) {
                          for (let a = 0; a < r.childNodes.length; ) {
                              const o = r.childNodes[a];
                              t(o) ? (n(o),
                              o === r.childNodes[a] && (o.childNodes && o.childNodes.length && e(t, n, o),
                              a++)) : (o.childNodes && o.childNodes.length && e(t, n, o),
                              a++)
                          }
                      }(e, t, n)
                  }
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(3);
                  t.isTag = r.propEq("nodeType", a.NodeType.Tag)
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  }),
                  function(e) {
                      e[e.EndTag = -1] = "EndTag",
                      e[e.Tag = 1] = "Tag",
                      e[e.Text = 3] = "Text",
                      e[e.CDATA = 4] = "CDATA",
                      e[e.OtherSect = 5] = "OtherSect",
                      e[e.OtherDecl = 6] = "OtherDecl",
                      e[e.XMLDecl = 7] = "XMLDecl",
                      e[e.Comments = 8] = "Comments",
                      e[e.Document = 9] = "Document",
                      e[e.DocType = 10] = "DocType"
                  }(t.NodeType || (t.NodeType = {}))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  }),
                  t.rmNode = (e=>{
                      e.parentNode && e.parentNode.removeChild(e)
                  }
                  )
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  }),
                  t.mixWhiteSpace = (e=>e.replace(/\s+/g, " "))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  }),
                  t.animationElements = ["animate", "animateMotion", "animateTransform", "discard", "set"],
                  t.descriptiveElements = ["desc", "metadata", "title"],
                  t.gradientElements = ["linearGradient", "radialGradient"],
                  t.filterPrimitiveElements = ["feBlend", "feFlood", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDropShadow", "feGaussianBlur", "feImage", "feMerge", "feMorphology", "feOffset", "feSpecularLighting", "feTile", "feTurbulence"],
                  t.lightSourceElements = ["feDistantLight", "fePointLight", "feSpotLight"],
                  t.paintServerElements = ["solidcolor", "linearGradient", "radialGradient", "meshgradient", "pattern", "hatch"],
                  t.shapeElements = ["circle", "ellipse", "line", "path", "polygon", "polyline", "rect"],
                  t.structuralElements = ["defs", "g", "svg", "symbol", "use"],
                  t.textContentChildElements = ["tspan", "textPath"],
                  t.textContentElements = ["text"].concat(t.textContentChildElements),
                  t.graphicsElements = ["audio", "canvas", "circle", "ellipse", "foreignObject", "iframe", "image", "line", "mesh", "path", "polygon", "polyline", "rect", "text", "textPath", "tspan", "video"],
                  t.containerElements = ["a", "clipPath", "defs", "g", "marker", "mask", "pattern", "svg", "switch", "symbol", "unknown"],
                  t.newViewportsElements = ["svg", "symbol", "foreignObject", "video", "audio", "canvas", "image", "iframe"],
                  t.unnecessaryElements = ["desc", "discard", "foreignObject", "video", "audio", "iframe", "canvas", "metadata", "script", "style", "title", "unknown"],
                  t.eventAttributes = ["onabort", "onafterprint", "onbeforeprint", "onbegin", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragexit", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onend", "onended", "onerror", "onerror", "onfocus", "onfocusin", "onfocusout", "onhashchange", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmessage", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onoffline", "ononline", "onpagehide", "onpageshow", "onpause", "onplay", "onplaying", "onpopstate", "onprogress", "onratechange", "onrepeat", "onreset", "onresize", "onresize", "onscroll", "onscroll", "onseeked", "onseeking", "onselect", "onshow", "onstalled", "onstorage", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onunload", "onunload", "onvolumechange", "onwaiting"],
                  t.ariaAttributes = ["aria-activedescendant", "aria-atomic", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-grabbed", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "role"],
                  t.animationAttributes = ["from", "to", "by"],
                  t.transformAttributes = ["gradientTransform", "patternTransform", "transform"],
                  t.cantCollapseAttributes = ["id", "class", "mask"],
                  t.conditionalProcessingAttributes = ["requiredExtensions", "systemLanguage"],
                  t.coreAttributes = ["id", "tabindex", "lang", "xml:space", "class", "style", "transform"],
                  t.deprecatedXlinkAttributes = ["xlink:href", "xlink:title"],
                  t.animationAdditionAttributes = ["additive", "accumulate"],
                  t.animationTimingAttributes = ["begin", "dur", "end", "min", "max", "restart", "repeatCount", "repeatDur", "fill"],
                  t.animationValueAttributes = ["calcMode", "values", "keyTimes", "keySplines", "from", "to", "by"],
                  t.rectAttributes = ["x", "y", "width", "height"],
                  t.transferFunctionElementAttributes = ["type", "tableValues", "slope", "intercept", "amplitude", "exponent", "offset"]
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(27)
                    , o = n(13);
                  t.plus = r.curry((e,t)=>o.toFixed(a.digit(e, t), e + t))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  }),
                  t.numberLength = (e=>`${e}`.length)
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(27)
                    , o = n(13);
                  t.minus = r.curry((e,t)=>o.toFixed(a.digit(e, t), e - t))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(6)
                    , a = r.shapeElements.concat(r.textContentElements)
                    , o = ["pattern", "marker"].concat(r.newViewportsElements)
                    , i = ["use"].concat(r.containerElements, r.graphicsElements)
                    , u = ["animate"].concat(i, r.gradientElements)
                    , l = {
                      accumulate: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      additive: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      amplitude: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      attributeName: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      azimuth: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      baseFrequency: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      begin: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      bias: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      by: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      calcMode: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      class: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      clipPathUnits: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      crossorigin: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      cx: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      cy: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      d: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      diffuseConstant: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      divisor: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      download: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      dur: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      dx: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      dy: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      edgeMode: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      elevation: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      end: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      exponent: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      filterUnits: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      fr: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      from: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      fx: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      fy: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      gradientTransform: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      gradientUnits: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      height: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      href: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !0,
                          maybeFuncIRI: !0,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      hreflang: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      id: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      in: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      in2: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      intercept: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      k1: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      k2: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      k3: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      k4: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      kernelMatrix: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      kernelUnitLength: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      keyPoints: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      keySplines: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      keyTimes: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      lang: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      lengthAdjust: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      limitingConeAngle: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      markerHeight: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      markerUnits: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      markerWidth: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      maskContentUnits: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      maskUnits: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      max: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      media: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      method: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      min: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      mode: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      numOctaves: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      offset: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      operator: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      order: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      orient: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      origin: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      path: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      pathLength: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      patternContentUnits: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      patternTransform: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      patternUnits: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      playbackorder: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      points: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      pointsAtX: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      pointsAtY: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      pointsAtZ: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      preserveAlpha: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      preserveAspectRatio: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      primitiveUnits: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      r: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      radius: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      refX: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      refY: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      rel: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      repeatCount: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      repeatDur: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      requiredExtensions: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      restart: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      result: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      rotate: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      rx: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      ry: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      scale: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      seed: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      side: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      slope: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      spacing: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      specularConstant: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      specularExponent: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      spreadMethod: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      startOffset: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      stdDeviation: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      stitchTiles: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      style: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      surfaceScale: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      systemLanguage: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      tabindex: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      tableValues: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      target: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      targetX: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      targetY: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      textLength: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      timelinebegin: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      title: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      to: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      transform: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: ["svg", "g", "symbol", "marker", "a", "switch", "use", "foreignObject", "unknown"].concat(r.graphicsElements)
                      },
                      type: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      values: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      viewBox: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      width: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      x: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      x1: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      x2: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      xChannelSelector: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      "xlink:href": {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !0,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      "xlink:title": {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      "xml:space": {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      xmlns: {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      "xmlns:xml": {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      "xmlns:xlink": {
                          couldBeStyle: !1,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      y: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      y1: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      y2: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      yChannelSelector: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      z: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      zoomAndPan: {
                          couldBeStyle: !1,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: []
                      },
                      "alignment-baseline": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: ["tspan", "textPath"]
                      },
                      "baseline-shift": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "baseline",
                          applyTo: ["tspan", "textPath"]
                      },
                      clip: {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "auto",
                          applyTo: o
                      },
                      "clip-path": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !0,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "none",
                          applyTo: i
                      },
                      "clip-rule": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "nonzero",
                          applyTo: ["use"].concat(r.graphicsElements)
                      },
                      color: {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !0,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: ["feFlood", "feDiffuseLighting", "feSpecularLighting", "stop"].concat(a)
                      },
                      "color-interpolation": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "sRGB",
                          applyTo: u
                      },
                      "color-rendering": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "auto",
                          applyTo: u
                      },
                      cursor: {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !0,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "auto",
                          applyTo: i
                      },
                      direction: {
                          couldBeStyle: !0,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "ltr",
                          applyTo: r.textContentElements
                      },
                      display: {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "inline",
                          applyTo: ["svg", "g", "switch", "a", "foreignObject", "use"].concat(r.graphicsElements)
                      },
                      "dominant-baseline": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "auto",
                          applyTo: r.textContentElements
                      },
                      fill: {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !0,
                          maybeIRI: !1,
                          maybeFuncIRI: !0,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "#000",
                          applyTo: a
                      },
                      "fill-opacity": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "1",
                          applyTo: a
                      },
                      "fill-rule": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "nonzero",
                          applyTo: a
                      },
                      filter: {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !0,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "none",
                          applyTo: i
                      },
                      "flood-color": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !0,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "#000",
                          applyTo: ["feFlood"]
                      },
                      "flood-opacity": {
                          couldBeStyle: !0,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "",
                          applyTo: ["feFlood"]
                      },
                      font: {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: r.textContentElements
                      },
                      "font-family": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: r.textContentElements
                      },
                      "font-size": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "medium",
                          applyTo: r.textContentElements
                      },
                      "font-size-adjust": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "none",
                          applyTo: r.textContentElements
                      },
                      "font-stretch": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "normal",
                          applyTo: r.textContentElements
                      },
                      "font-style": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "normal",
                          applyTo: r.textContentElements
                      },
                      "font-variant": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "normal",
                          applyTo: r.textContentElements
                      },
                      "font-weight": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "normal",
                          applyTo: r.textContentElements
                      },
                      "glyph-orientation-vertical": {
                          couldBeStyle: !0,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "auto",
                          applyTo: r.textContentElements
                      },
                      "image-rendering": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "auto",
                          applyTo: ["image"]
                      },
                      "letter-spacing": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "normal",
                          applyTo: r.textContentElements
                      },
                      "lighting-color": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !0,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "#fff",
                          applyTo: ["feDiffuseLighting", "feSpecularLighting"]
                      },
                      "line-height": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !0,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "normal",
                          applyTo: ["text"]
                      },
                      marker: {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !0,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: r.shapeElements
                      },
                      "marker-end": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !0,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "none",
                          applyTo: r.shapeElements
                      },
                      "marker-mid": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !0,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "none",
                          applyTo: r.shapeElements
                      },
                      "marker-start": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !0,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "none",
                          applyTo: r.shapeElements
                      },
                      mask: {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !0,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "none",
                          applyTo: i
                      },
                      opacity: {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "1",
                          applyTo: ["svg", "g", "symbol", "marker", "a", "switch", "use", "unknown"].concat(r.graphicsElements)
                      },
                      overflow: {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "",
                          applyTo: o
                      },
                      "paint-order": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "normal",
                          applyTo: a
                      },
                      "pointer-events": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "visiblePainted",
                          applyTo: i
                      },
                      "shape-rendering": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "auto",
                          applyTo: r.shapeElements
                      },
                      "stop-color": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !0,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "#000",
                          applyTo: ["stop"]
                      },
                      "stop-opacity": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "1",
                          applyTo: ["stop"]
                      },
                      stroke: {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !0,
                          maybeIRI: !1,
                          maybeFuncIRI: !0,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "none",
                          applyTo: a
                      },
                      "stroke-dasharray": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "none",
                          applyTo: a
                      },
                      "stroke-dashoffset": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "0",
                          applyTo: a
                      },
                      "stroke-linecap": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "butt",
                          applyTo: a
                      },
                      "stroke-linejoin": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "miter",
                          applyTo: a
                      },
                      "stroke-miterlimit": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "4",
                          applyTo: a
                      },
                      "stroke-opacity": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !0,
                          legalValues: [],
                          initValue: "1",
                          applyTo: a
                      },
                      "stroke-width": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "1",
                          applyTo: a
                      },
                      "text-anchor": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "start",
                          applyTo: r.textContentElements
                      },
                      "text-decoration": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "none",
                          applyTo: r.textContentElements
                      },
                      "text-rendering": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "auto",
                          applyTo: ["text"]
                      },
                      "unicode-bidi": {
                          couldBeStyle: !0,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "normal",
                          applyTo: r.textContentElements
                      },
                      "vector-effect": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "none",
                          applyTo: ["use"].concat(r.graphicsElements)
                      },
                      visibility: {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "visible",
                          applyTo: ["use", "a"].concat(r.graphicsElements)
                      },
                      "word-spacing": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !0,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "normal",
                          applyTo: r.textContentElements
                      },
                      "white-space": {
                          couldBeStyle: !0,
                          animatable: !0,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "normal",
                          applyTo: r.textContentElements
                      },
                      "writing-mode": {
                          couldBeStyle: !0,
                          animatable: !1,
                          maybeColor: !1,
                          maybeIRI: !1,
                          maybeFuncIRI: !1,
                          maybeSizeNumber: !1,
                          maybeAccurateNumber: !1,
                          legalValues: [],
                          initValue: "lr-tb",
                          applyTo: ["text"]
                      }
                  }
                    , s = {
                      isUndef: !0,
                      couldBeStyle: !1,
                      animatable: !1,
                      maybeColor: !1,
                      maybeIRI: !1,
                      maybeFuncIRI: !1,
                      maybeSizeNumber: !1,
                      maybeAccurateNumber: !1,
                      legalValues: [],
                      initValue: "",
                      applyTo: []
                  };
                  t.regularAttr = new Proxy(l,{
                      get: (e,t)=>t in e ? e[t] : s
                  })
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(6)
                    , a = ["script"].concat(r.descriptiveElements)
                    , o = ["clipPath", "marker", "mask", "style"].concat(r.animationElements, a, r.paintServerElements)
                    , i = ["a", "audio", "canvas", "clipPath", "cursor", "filter", "foreignObject", "iframe", "image", "marker", "mask", "style", "switch", "text", "video", "view"].concat(r.animationElements, a, r.paintServerElements, r.shapeElements, r.structuralElements)
                    , u = ["animate", "animateTransform", "set", "stop", "style"].concat(a)
                    , l = ["animate", "set"].concat(a)
                    , s = r.conditionalProcessingAttributes.concat(r.coreAttributes)
                    , c = ["pathLength"].concat(s)
                    , m = s.concat(r.animationAdditionAttributes, r.animationTimingAttributes, r.animationValueAttributes)
                    , f = ["result"].concat(r.coreAttributes, r.rectAttributes)
                    , p = r.transferFunctionElementAttributes.concat(r.coreAttributes)
                    , d = {
                      a: {
                          containTextNode: !0,
                          legalChildElements: {
                              transparent: !0,
                              noself: !0,
                              childElements: []
                          },
                          ownAttributes: ["href", "target", "download", "rel", "hreflang", "type"].concat(s, r.deprecatedXlinkAttributes)
                      },
                      animate: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: a
                          },
                          ownAttributes: ["attributeName"].concat(m)
                      },
                      animateMotion: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: ["mpath"].concat(a)
                          },
                          ownAttributes: ["path", "keyPoints", "rotate", "origin"].concat(m)
                      },
                      animateTransform: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: a
                          },
                          ownAttributes: ["attributeName", "type"].concat(m)
                      },
                      audio: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: []
                          },
                          ownAttributes: []
                      },
                      canvas: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: []
                          },
                          ownAttributes: []
                      },
                      circle: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: o
                          },
                          ownAttributes: ["cx", "cy", "r"].concat(c)
                      },
                      clipPath: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: ["text", "use"].concat(a, r.animationElements, r.shapeElements)
                          },
                          ownAttributes: ["externalResourcesRequired", "transform", "clipPathUnits"].concat(s)
                      },
                      defs: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: i
                          },
                          ownAttributes: r.coreAttributes
                      },
                      desc: {
                          containTextNode: !0,
                          legalChildElements: {
                              any: !0,
                              childElements: []
                          },
                          ownAttributes: r.coreAttributes
                      },
                      discard: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: a
                          },
                          ownAttributes: ["begin", "href"].concat(s)
                      },
                      ellipse: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: o
                          },
                          ownAttributes: ["cx", "cy", "rx", "ry"].concat(c)
                      },
                      feBlend: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: l
                          },
                          ownAttributes: ["in", "in2", "mode"].concat(f)
                      },
                      feColorMatrix: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: l
                          },
                          ownAttributes: ["in", "type", "values"].concat(f)
                      },
                      feComponentTransfer: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: ["feFuncR", "feFuncG", "feFuncB", "feFuncA"].concat(a)
                          },
                          ownAttributes: ["in"].concat(f)
                      },
                      feComposite: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: l
                          },
                          ownAttributes: ["in", "in2", "operator", "k1", "k2", "k3", "k4"].concat(f)
                      },
                      feConvolveMatrix: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: l
                          },
                          ownAttributes: ["in", "order", "kernelMatrix", "divisor", "bias", "targetX", "targetY", "edgeMode", "kernelUnitLength", "preserveAlpha"].concat(f)
                      },
                      feDiffuseLighting: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: a.concat(r.lightSourceElements)
                          },
                          ownAttributes: ["in", "surfaceScale", "diffuseConstant", "kernelUnitLength"].concat(f)
                      },
                      feDisplacementMap: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: l
                          },
                          ownAttributes: ["in", "in2", "scale", "xChannelSelector", "yChannelSelector"].concat(f)
                      },
                      feDistantLight: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: l
                          },
                          ownAttributes: ["azimuth", "elevation"].concat(r.coreAttributes)
                      },
                      feFlood: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: l
                          },
                          ownAttributes: f
                      },
                      feFuncA: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: l
                          },
                          ownAttributes: p
                      },
                      feFuncB: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: l
                          },
                          ownAttributes: p
                      },
                      feFuncG: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: l
                          },
                          ownAttributes: p
                      },
                      feFuncR: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: l
                          },
                          ownAttributes: p
                      },
                      feGaussianBlur: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: l
                          },
                          ownAttributes: ["in", "stdDeviation", "edgeMode"].concat(f)
                      },
                      feImage: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: ["animate", "animateTransform", "set"].concat(a)
                          },
                          ownAttributes: ["externalResourcesRequired", "preserveAspectRatio", "xlink:href", "href", "crossorigin"].concat(f)
                      },
                      feMerge: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: ["feMergeNode"].concat(a)
                          },
                          ownAttributes: f
                      },
                      feMergeNode: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: l
                          },
                          ownAttributes: ["in"].concat(r.coreAttributes)
                      },
                      feMorphology: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: l
                          },
                          ownAttributes: ["in", "operator", "radius"].concat(f)
                      },
                      feOffset: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: l
                          },
                          ownAttributes: ["in", "dx", "dy"].concat(f)
                      },
                      fePointLight: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: l
                          },
                          ownAttributes: ["x", "y", "z"].concat(r.coreAttributes)
                      },
                      feSpecularLighting: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: a.concat(r.lightSourceElements)
                          },
                          ownAttributes: ["in", "surfaceScale", "specularConstant", "specularExponent", "kernelUnitLength"].concat(f)
                      },
                      feSpotLight: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: l
                          },
                          ownAttributes: ["x", "y", "z"].concat(r.coreAttributes)
                      },
                      feTile: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: l
                          },
                          ownAttributes: ["in"].concat(f)
                      },
                      feTurbulence: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: l
                          },
                          ownAttributes: ["baseFrequency", "numOctaves", "seed", "stitchTiles", "type"].concat(f)
                      },
                      filter: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: l.concat(r.filterPrimitiveElements)
                          },
                          ownAttributes: ["externalResourcesRequired", "filterUnits", "primitiveUnits"].concat(r.coreAttributes, r.rectAttributes)
                      },
                      foreignObject: {
                          containTextNode: !1,
                          legalChildElements: {
                              any: !0,
                              childElements: []
                          },
                          ownAttributes: r.rectAttributes.concat(s)
                      },
                      g: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: i
                          },
                          ownAttributes: s
                      },
                      iframe: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: []
                          },
                          ownAttributes: []
                      },
                      image: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: ["clipPath", "mask", "style"].concat(r.animationElements, a)
                          },
                          ownAttributes: ["preserveAspectRatio", "href", "crossorigin"].concat(s, r.deprecatedXlinkAttributes, r.rectAttributes)
                      },
                      line: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: o
                          },
                          ownAttributes: ["x1", "y1", "x2", "y2"].concat(c)
                      },
                      linearGradient: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: u
                          },
                          ownAttributes: ["x1", "y1", "x2", "y2", "gradientUnits", "gradientTransform", "spreadMethod", "href"].concat(r.coreAttributes, r.deprecatedXlinkAttributes)
                      },
                      marker: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: i
                          },
                          ownAttributes: ["viewBox", "preserveAspectRatio", "refX", "refY", "markerUnits", "markerWidth", "markerHeight", "orient"].concat(r.coreAttributes)
                      },
                      mask: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: ["a", "clipPath", "cursor", "filter", "foreignObject", "image", "marker", "mask", "pattern", "style", "switch", "view", "text"].concat(r.animationElements, a, r.shapeElements, r.structuralElements, r.gradientElements)
                          },
                          ownAttributes: ["maskUnits", "maskContentUnits"].concat(r.rectAttributes, s)
                      },
                      metadata: {
                          containTextNode: !0,
                          legalChildElements: {
                              any: !0,
                              childElements: []
                          },
                          ownAttributes: r.coreAttributes
                      },
                      mpath: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: a
                          },
                          ownAttributes: ["href"].concat(r.coreAttributes)
                      },
                      path: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: o
                          },
                          ownAttributes: ["d"].concat(c)
                      },
                      pattern: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: i
                          },
                          ownAttributes: ["viewBox", "preserveAspectRatio", "patternUnits", "patternContentUnits", "patternTransform", "href"].concat(r.coreAttributes, r.deprecatedXlinkAttributes, r.rectAttributes)
                      },
                      polygon: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: o
                          },
                          ownAttributes: ["points"].concat(c)
                      },
                      polyline: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: o
                          },
                          ownAttributes: ["points"].concat(c)
                      },
                      radialGradient: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: u
                          },
                          ownAttributes: ["cx", "cy", "r", "fx", "fy", "fr", "gradientUnits", "gradientTransform", "spreadMethod", "href"].concat(r.coreAttributes, r.deprecatedXlinkAttributes)
                      },
                      rect: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: o
                          },
                          ownAttributes: ["rx", "ry"].concat(r.rectAttributes, c)
                      },
                      script: {
                          containTextNode: !0,
                          legalChildElements: {
                              childElements: []
                          },
                          ownAttributes: ["type", "href", "crossorigin"].concat(r.coreAttributes, r.deprecatedXlinkAttributes)
                      },
                      set: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: a
                          },
                          ownAttributes: ["to", "attributeName"].concat(s, r.animationTimingAttributes)
                      },
                      stop: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: ["animate", "script", "set", "style"]
                          },
                          ownAttributes: ["path", "offset"].concat(r.coreAttributes)
                      },
                      style: {
                          containTextNode: !0,
                          legalChildElements: {
                              childElements: []
                          },
                          ownAttributes: ["type", "media", "title"].concat(r.coreAttributes)
                      },
                      svg: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: i
                          },
                          ownAttributes: ["viewBox", "preserveAspectRatio", "zoomAndPan", "transform"].concat(s, r.rectAttributes)
                      },
                      switch: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: ["a", "audio", "canvas", "foreignObject", "g", "iframe", "image", "svg", "switch", "text", "use", "video"].concat(r.animationElements, r.shapeElements)
                          },
                          ownAttributes: s
                      },
                      symbol: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: i
                          },
                          ownAttributes: ["preserveAspectRatio", "viewBox", "refX", "refY"].concat(r.coreAttributes, r.rectAttributes)
                      },
                      text: {
                          containTextNode: !0,
                          legalChildElements: {
                              childElements: ["a", "clipPath", "marker", "mask", "style"].concat(r.animationElements, a, r.paintServerElements, r.textContentChildElements)
                          },
                          ownAttributes: ["lengthAdjust", "x", "y", "dx", "dy", "rotate", "textLength"].concat(s)
                      },
                      textPath: {
                          containTextNode: !0,
                          legalChildElements: {
                              childElements: ["a", "animate", "clipPath", "marker", "mask", "set", "style", "tspan"].concat(a, r.paintServerElements)
                          },
                          ownAttributes: ["lengthAdjust", "textLength", "path", "href", "startOffset", "method", "spacing", "side"].concat(s, r.deprecatedXlinkAttributes)
                      },
                      title: {
                          containTextNode: !0,
                          legalChildElements: {
                              any: !0,
                              childElements: ["a", "animate", "set", "style", "tspan"].concat(a, r.paintServerElements)
                          },
                          ownAttributes: r.coreAttributes
                      },
                      tspan: {
                          containTextNode: !0,
                          legalChildElements: {
                              childElements: []
                          },
                          ownAttributes: ["lengthAdjust", "x", "y", "dx", "dy", "rotate", "textLength"].concat(s)
                      },
                      unknown: {
                          containTextNode: !1,
                          legalChildElements: {
                              any: !0,
                              childElements: []
                          },
                          ownAttributes: s
                      },
                      use: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: ["clipPath", "mask", "style"].concat(r.animationElements, a)
                          },
                          ownAttributes: ["href"].concat(r.rectAttributes, s, r.deprecatedXlinkAttributes)
                      },
                      video: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: []
                          },
                          ownAttributes: []
                      },
                      view: {
                          containTextNode: !1,
                          legalChildElements: {
                              childElements: ["style"].concat(r.animationElements, a)
                          },
                          ownAttributes: ["viewBox", "preserveAspectRatio", "zoomAndPan"].concat(r.coreAttributes)
                      }
                  }
                    , y = {
                      isUndef: !0,
                      containTextNode: !1,
                      legalChildElements: null,
                      ownAttributes: null
                  };
                  t.regularTag = new Proxy(d,{
                      get: (e,t)=>t in e ? e[t] : y
                  })
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  }),
                  t.execStyle = ((e="")=>{
                      const t = [];
                      return e.split(/\s*;\s*/).forEach(e=>{
                          const n = e.trim().split(/\s*:\s*/);
                          n[0] && n[1] && t.push({
                              fullname: n[0],
                              name: n[0],
                              value: n[1]
                          })
                      }
                      ),
                      t
                  }
                  )
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0);
                  t.toFixed = r.curry((e,t)=>parseFloat(t.toFixed(e)))
              }
              , function(e, t) {
                  e.exports = n("RN4N")
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  }),
                  t.shortenTag = (e=>e.replace(/;}/g, "}"))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  }),
                  t.stringifyStyle = (e=>e.map(e=>`${e.name}:${e.value}`).join(";"))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(62)
                    , a = n(63);
                  t.legalValue = ((e,t)=>{
                      if (e.legalValues.length) {
                          let n = !0;
                          for (const n of e.legalValues)
                              switch (n.type) {
                              case "reg":
                                  if (!a.useReg(n.reg, t))
                                      return !1;
                                  break;
                              case "enum":
                                  if (!r.useEnum(n.enum, t))
                                      return !1
                              }
                          return n
                      }
                      return !0
                  }
                  )
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = (e,t,n,a,o)=>{
                      if (!(n in o))
                          if (o.push(n),
                          e(n))
                              t(n, a);
                          else {
                              if (a.push(n),
                              Array.isArray(n))
                                  for (let i = 0; i < n.length; ) {
                                      const u = n[i];
                                      r(e, t, u, a, o),
                                      u === n[i] && i++
                                  }
                              else
                                  Object.keys(n).forEach(i=>{
                                      "object" == typeof n[i] && r(e, t, n[i], a, o)
                                  }
                                  );
                              a.pop()
                          }
                  }
                  ;
                  t.traversalObj = ((e,t,n)=>{
                      r(e, t, n, [], [])
                  }
                  )
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  var r = n(3);
                  t.NodeType = r.NodeType;
                  var a = n(20);
                  t.parse = a.Parser
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(3)
                    , a = n(21)
                    , o = n(22);
                  t.REG_XML_DECL = o.REG_XML_DECL,
                  t.REG_CDATA_SECT = o.REG_CDATA_SECT,
                  t.REG_OTHER_SECT = o.REG_OTHER_SECT,
                  t.REG_DOCTYPE = o.REG_DOCTYPE,
                  t.REG_OTHER_DECL = o.REG_OTHER_DECL,
                  t.REG_COMMENTS = o.REG_COMMENTS,
                  t.REG_START_TAG = o.REG_START_TAG,
                  t.REG_END_TAG = o.REG_END_TAG,
                  t.REG_ATTR = o.REG_ATTR;
                  const i = n(23)
                    , u = n(5)
                    , l = [[1, "xml-decl", o.REG_XML_DECL, r.NodeType.XMLDecl], [1, "cdata", o.REG_CDATA_SECT, r.NodeType.CDATA], [2, o.REG_OTHER_SECT, r.NodeType.OtherSect], [1, "doctype", o.REG_DOCTYPE, r.NodeType.DocType], [2, o.REG_OTHER_DECL, r.NodeType.OtherDecl], [1, "comments", o.REG_COMMENTS, r.NodeType.Comments]]
                    , s = (e,t,n)=>{
                      for (; n.lastpos < e; n.lastpos++)
                          "\n" === t[n.lastpos] ? (n.line++,
                          n.pos = 0) : n.pos++
                  }
                    , c = (e,t)=>{
                      const n = e[2];
                      if (n.test(t)) {
                          const r = n.exec(t);
                          return {
                              node: new a.Node({
                                  nodeType: e[3],
                                  nodeName: `#${e[1]}`,
                                  textContent: r[1]
                              }),
                              str: t.slice(r[0].length)
                          }
                      }
                      return null
                  }
                    , m = (e,t)=>{
                      const n = e[1];
                      if (n.test(t)) {
                          const r = n.exec(t);
                          return {
                              node: new a.Node({
                                  nodeType: e[2],
                                  nodeName: `#${r[1].toLowerCase()}`,
                                  textContent: r[2]
                              }),
                              str: t.slice(r[0].length)
                          }
                      }
                      return null
                  }
                    , f = (e,t)=>{
                      const n = e.indexOf("<");
                      if (0 === n) {
                          for (const t of l)
                              if (1 === t[0]) {
                                  const n = c(t, e);
                                  if (n)
                                      return n
                              } else {
                                  const n = m(t, e);
                                  if (n)
                                      return n
                              }
                          const n = ((e,t)=>{
                              if (o.REG_START_TAG.test(e)) {
                                  const n = {
                                      line: t.line,
                                      pos: t.pos,
                                      lastpos: 0
                                  }
                                    , u = o.REG_START_TAG.exec(e)
                                    , l = {
                                      node: new a.Node({
                                          nodeType: r.NodeType.Tag,
                                          nodeName: u[1],
                                          namespace: "",
                                          selfClose: "/" === u[3]
                                      }),
                                      str: e.slice(u[0].length)
                                  };
                                  if (-1 !== u[1].indexOf(":")) {
                                      const e = u[1].split(":");
                                      if (!e[1])
                                          throw new Error(`错误的开始标签！ 在第 ${t.line} 行第 ${t.pos} 位`);
                                      l.node.nodeName = e[1],
                                      e[0] && (l.node.namespace = e[0])
                                  }
                                  s(u[1].length + 1, u[0], n),
                                  o.REG_ATTR.lastIndex = 0;
                                  let c = o.REG_ATTR.exec(u[2]);
                                  const m = {};
                                  for (; c; ) {
                                      if (s(c.index + u[1].length + 1, u[0], n),
                                      m[c[1]])
                                          throw new Error(`属性名重复！ 在第 ${n.line} 行第 ${n.pos} 位`);
                                      if (m[c[1]] = !0,
                                      -1 !== c[1].indexOf(":")) {
                                          const e = c[1].split(":");
                                          if (!e[1])
                                              throw new Error(`错误的属性名！ 在第 ${n.line + t.line - 1} 行第 ${n.line > 1 ? n.pos : t.pos + n.pos} 位`);
                                          l.node.setAttribute(e[1], i.collapseQuot(c[2]).trim(), e[0])
                                      } else
                                          l.node.setAttribute(c[1], i.collapseQuot(c[2]).trim());
                                      c = o.REG_ATTR.exec(u[2])
                                  }
                                  return l
                              }
                              return null
                          }
                          )(e, t);
                          if (n)
                              return n;
                          const u = ((e,t)=>{
                              if (o.REG_END_TAG.test(e)) {
                                  const n = o.REG_END_TAG.exec(e)
                                    , i = {
                                      node: new a.Node({
                                          nodeType: r.NodeType.EndTag,
                                          nodeName: n[1],
                                          namespace: ""
                                      }),
                                      str: e.slice(n[0].length)
                                  };
                                  if (-1 !== n[1].indexOf(":")) {
                                      const e = n[1].split(":");
                                      if (!e[1])
                                          throw new Error(`错误的结束标签！ 在第 ${t.line} 行第 ${t.pos} 位`);
                                      i.node.nodeName = e[1],
                                      e[0] && (i.node.namespace = e[0])
                                  }
                                  return i
                              }
                              return null
                          }
                          )(e, t);
                          if (u)
                              return u;
                          throw new Error(`解析标签失败！ 在第 ${t.line} 行第 ${t.pos} 位`)
                      }
                      return {
                          node: new a.Node({
                              nodeType: r.NodeType.Text,
                              nodeName: "#text",
                              textContent: u.mixWhiteSpace(e.slice(0, n))
                          }),
                          str: -1 === n ? "" : e.slice(n)
                      }
                  }
                  ;
                  t.Parser = function(e) {
                      return new Promise((t,n)=>{
                          const o = new a.Node({
                              nodeType: r.NodeType.Document,
                              nodeName: "#document"
                          })
                            , i = []
                            , u = {
                              line: 1,
                              pos: 0,
                              lastpos: 0
                          };
                          let l;
                          try {
                              l = f(e.slice(e.indexOf("<")), u)
                          } catch (e) {
                              n(e)
                          }
                          for (o.appendChild(l.node),
                          l.node.nodeType !== r.NodeType.Tag || l.node.selfClose || i.push(l.node); l.str; ) {
                              s(e.indexOf(l.str), e, u);
                              try {
                                  l = f(l.str, u)
                              } catch (e) {
                                  n(e);
                                  break
                              }
                              const t = i.length;
                              l.node.nodeType === r.NodeType.EndTag ? t ? i[t - 1].nodeName === l.node.nodeName && i[t - 1].namespace === l.node.namespace ? (i[t - 1].childNodes.length || (i[t - 1].selfClose = !0),
                              i.pop()) : n(new Error(`开始和结束标签无法匹配！ 在第 ${u.line} 行第 ${u.pos} 位`)) : n(new Error(`意外的结束标签！ 在第 ${u.line} 行第 ${u.pos} 位`)) : (t ? i[t - 1].appendChild(l.node) : l.node.nodeType === r.NodeType.Text || l.node.nodeType === r.NodeType.CDATA ? l.node.textContent.replace(/\s/g, "") && n(new Error(`意外的文本节点！ 在第 ${u.line} 行第 ${u.pos} 位`)) : o.appendChild(l.node),
                              l.node.nodeType !== r.NodeType.Tag || l.node.selfClose || i.push(l.node)),
                              l.str || s(e.length, e, u)
                          }
                          i.length && n(new Error(`文档结构错误！ 在第 ${u.line} 行第 ${u.pos} 位`)),
                          t(o)
                      }
                      )
                  }
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(3);
                  class a {
                      constructor(e) {
                          this.nodeName = e.nodeName,
                          this.nodeType = e.nodeType,
                          this.namespace = e.namespace,
                          this.selfClose = e.selfClose,
                          this.textContent = e.textContent,
                          this.nodeType !== r.NodeType.Tag && this.nodeType !== r.NodeType.Document || (this._attributes = [],
                          this._childNodes = [])
                      }
                      get attributes() {
                          return this._attributes ? Object.freeze(this._attributes.slice()) : null
                      }
                      get childNodes() {
                          return this._childNodes ? Object.freeze(this._childNodes.slice()) : null
                      }
                      cloneNode() {
                          const e = new a({
                              nodeName: this.nodeName,
                              nodeType: this.nodeType,
                              namespace: this.namespace,
                              textContent: this.textContent
                          });
                          return this._attributes && (e._attributes = this._attributes.map(e=>({
                              name: e.name,
                              value: e.value,
                              fullname: e.fullname,
                              namespace: e.namespace
                          }))),
                          e
                      }
                      appendChild(e) {
                          if (this._childNodes) {
                              e.parentNode && e.parentNode !== this && -1 !== e.parentNode.childNodes.indexOf(e) && e.parentNode.removeChild(e);
                              const t = this._childNodes.indexOf(e);
                              -1 !== t && this._childNodes.splice(t, 1),
                              this._childNodes.push(e),
                              e.parentNode = this
                          }
                      }
                      insertBefore(e, t) {
                          if (this._childNodes && -1 !== this._childNodes.indexOf(t)) {
                              const t = this._childNodes.indexOf(e);
                              -1 !== t && this._childNodes.splice(t, 1),
                              e.parentNode = null
                          }
                      }
                      replaceChild(e, ...t) {
                          if (this._childNodes) {
                              const n = this._childNodes.indexOf(e);
                              -1 !== n && (this._childNodes.splice(n, 1, ...t),
                              e.parentNode = null,
                              t.forEach(e=>{
                                  e.parentNode = this
                              }
                              ))
                          }
                      }
                      removeChild(e) {
                          if (this._childNodes) {
                              const t = this._childNodes.indexOf(e);
                              -1 !== t && (this._childNodes.splice(t, 1),
                              e.parentNode = null)
                          }
                      }
                      hasAttribute(e, t) {
                          if (this._attributes)
                              for (const n of this._attributes)
                                  if (!t && n.fullname === e || n.name === e && n.namespace === t)
                                      return !0;
                          return !1
                      }
                      getAttribute(e, t) {
                          if (this._attributes)
                              for (const n of this._attributes)
                                  if (!t && n.fullname === e || n.name === e && n.namespace === t)
                                      return n.value;
                          return null
                      }
                      setAttribute(e, t, n) {
                          if (this._attributes) {
                              for (const r of this._attributes)
                                  if (!n && r.fullname === e || r.name === e && r.namespace === n)
                                      return void (r.value = t);
                              const r = {
                                  name: e,
                                  value: t,
                                  fullname: e
                              };
                              n && (r.fullname = `${n}:${e}`,
                              r.namespace = n),
                              this._attributes.push(r)
                          }
                      }
                      removeAttribute(e, t) {
                          if (this._attributes)
                              for (let n = this._attributes.length; n--; ) {
                                  const r = this._attributes[n];
                                  if (!t && r.fullname === e || r.name === e && r.namespace === t) {
                                      this._attributes.splice(n, 1);
                                      break
                                  }
                              }
                      }
                  }
                  t.Node = a
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  let r = !0;
                  try {
                      r = /\u{20BB7}/u.test("𠮷")
                  } catch (e) {
                      r = !1
                  }
                  const a = `:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD${r ? "\\u{10000}-\\u{EFFFF}" : ""}`
                    , o = `[${a}][${`${a}\\-\\.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040`}]*`
                    , i = "\\s*=\\s*"
                    , u = "[A-Za-z](?:[A-Za-z0-9\\._]|-)*"
                    , l = `\\s+version${i}(?:'1\\.[0-9]+'|"1\\.[0-9]+")`
                    , s = `\\s+encoding${i}(?:'${u}'|"${u}")`
                    , c = `\\s+standalone${i}(?:'(?:yes|no)'|"(?:yes|no)")`
                    , m = `(?:&${o};|&#[0-9]+;|&#x[0-9a-fA-F]+;)`
                    , f = `"(?:[^<&"]|${m})*"|'(?:[^<&']|${m})*'`
                    , p = "(?:[^<>]+|[^<>]*'[^']*'[^<>]*|[^<>]*\"[^\"]*\"[^<>]*|[^<>]*<[^<>]*>[^<>]*)+?";
                  t.REG_XML_DECL = new RegExp(`^<\\?xml((?:${l}|${s}|${c})*\\s*)\\?>`),
                  t.REG_CDATA_SECT = /^<!\[CDATA\[([\d\D]*?)\]\]>/,
                  t.REG_OTHER_SECT = /^<!\[\s?([A-Z]+)\s?\[([\d\D]*?)\]\]>/,
                  t.REG_DOCTYPE = new RegExp(`^<!DOCTYPE\\s+(${p})>`),
                  t.REG_OTHER_DECL = new RegExp(`^<!([A-Z]+)\\s+(${p})>`),
                  t.REG_COMMENTS = /^<!--([\d\D]*?)-->/,
                  t.REG_START_TAG = new RegExp(`^<(${o})((?:\\s+${o}${i}(?:${f}))*)\\s*(\\/?)>`,r ? "u" : ""),
                  t.REG_END_TAG = new RegExp(`^</(${o})\\s*>`,r ? "u" : ""),
                  t.REG_ATTR = new RegExp(`(${o})${i}(${f})`,r ? "gu" : "g")
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  }),
                  t.collapseQuot = (e=>e.slice(1, -1))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  }),
                  t.shorten = (e=>e.replace(/\s*([,()])\s*/g, "$1"))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(26)
                    , a = n(9)
                    , o = (e,t,n,i)=>{
                      let u = 0
                        , l = 0;
                      const s = new r.Vector(a.minus(i[n], i[t]),a.minus(i[n + 1], i[t + 1]));
                      for (let e = t + 2; e < n; e += 2) {
                          const n = new r.Vector(a.minus(i[e], i[t]),a.minus(i[e + 1], i[t + 1]));
                          let o;
                          (o = n.isZero ? 0 : r.Vector.plumb(n, s).modulo) > u && (u = o,
                          l = e)
                      }
                      u <= e ? i.splice(t + 2, n - t - 2) : (l < n - 2 && o(e, l, n, i),
                      l > t + 2 && o(e, t, l, i))
                  }
                  ;
                  t.douglasPeucker = ((e,t)=>(o(e, 0, t.length - 2, t),
                  t))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = 180
                    , a = 1e6;
                  class o {
                      constructor(e=0, t=0) {
                          this.x = e,
                          this.y = t
                      }
                      get modulo() {
                          return o.Rounding(Math.sqrt(this.x * this.x + this.y * this.y))
                      }
                      set modulo(e) {
                          this.normalize(),
                          this.x *= e,
                          this.y *= e
                      }
                      rotate(e) {
                          const t = this.x
                            , n = this.y;
                          return this.x = t * Math.cos(e) - n * Math.sin(e),
                          this.y = t * Math.sin(e) + n * Math.cos(e),
                          this
                      }
                      valueOf() {
                          return this.modulo
                      }
                      toString() {
                          return `[${this.x},${this.y}]`
                      }
                      normalize() {
                          let e = this.modulo;
                          if (0 === e)
                              throw new Error("零向量无法标准化！");
                          return this.x /= e,
                          this.y /= e,
                          this
                      }
                      zero() {
                          return this.x = 0,
                          this.y = 0,
                          this
                      }
                      add(e) {
                          return this.x += e.x,
                          this.y += e.y,
                          this
                      }
                      substract(e) {
                          return this.x -= e.x,
                          this.y -= e.y,
                          this
                      }
                      multiplied(e) {
                          return "number" == typeof e ? (this.x *= e,
                          this.y *= e,
                          this) : e instanceof o ? this.x * e.x + this.y * e.y : void 0
                      }
                      radian(e) {
                          return o.radian(this, e)
                      }
                      angel(e) {
                          return o.angel(this, e)
                      }
                      get isZero() {
                          return 0 === this.x && 0 === this.y
                      }
                      get isNormalize() {
                          return 1 === this.modulo
                      }
                      static add(e, t) {
                          return new o(e.x + t.x,e.y + t.y)
                      }
                      static substract(e, t) {
                          return new o(e.x - t.x,e.y - t.y)
                      }
                      static multiplied(e, t) {
                          return "number" == typeof t ? new o(e.x * t,e.y * t) : t instanceof o ? e.x * t.x + e.y * t.y : void 0
                      }
                      static radian(e, t) {
                          return e.isZero || t.isZero ? NaN : Math.acos(o.multiplied(e, t) / e.modulo / t.modulo)
                      }
                      static angel(e, t) {
                          return e.isZero || t.isZero ? NaN : o.Rounding(r * o.radian(e, t) / Math.PI)
                      }
                      static projected(e, t) {
                          return e.isZero || t.isZero ? new o(0,0) : o.multiplied(t, o.multiplied(e, t) / Math.pow(t.modulo, 2))
                      }
                      static plumb(e, t) {
                          return e.isZero ? new o(0,0) : t.isZero ? new o(e.x,e.y) : o.substract(e, o.projected(e, t))
                      }
                      static Rounding(e) {
                          return Math.round(e * a) / a
                      }
                      static distance(e, t) {
                          return o.substract(e, t).modulo
                      }
                  }
                  t.Vector = o
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(51);
                  t.digit = r.curry((e,t)=>Math.max(a.decimal(e).length, a.decimal(t).length))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(8);
                  t.SPOS_X2 = 0,
                  t.SPOS_Y2 = 1,
                  t.SPOS_X = 2,
                  t.SPOS_Y = 3,
                  t.computeS = ((e,n,o,i)=>(r.lt(a.numberLength(n), a.numberLength(e)) ? o.push({
                      type: "s",
                      from: i.slice(),
                      val: n.slice()
                  }) : o.push({
                      type: "S",
                      from: i.slice(),
                      val: e.slice()
                  }),
                  [e[t.SPOS_X], e[t.SPOS_Y]]))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(7)
                    , a = n(54);
                  t.matchControl = ((e,t,n,o,i)=>r.plus(a.symmetry(e[0], e[2]), t) === o && r.plus(a.symmetry(e[1], e[3]), n) === i)
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(9)
                    , o = n(7)
                    , i = n(8);
                  t.computeH = ((e,n,u,l)=>{
                      const s = u.length;
                      if (s > 0 && "h" === u[s - 1].type.toLowerCase()) {
                          const r = u.pop();
                          return "h" === r.type ? t.computeH(e, o.plus(n, r.val[0]), u, r.from) : t.computeH(e, a.minus(e, r.from[0]), u, r.from)
                      }
                      return 0 !== n ? (r.lt(i.numberLength(n), i.numberLength(e)) ? u.push({
                          type: "h",
                          from: l.slice(),
                          val: [n]
                      }) : u.push({
                          type: "H",
                          from: l.slice(),
                          val: [e]
                      }),
                      [e, l[1]]) : l
                  }
                  )
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(8)
                    , o = n(7)
                    , i = n(9);
                  t.computeV = ((e,n,u,l)=>{
                      const s = u.length;
                      if (s > 0 && "v" === u[s - 1].type.toLowerCase()) {
                          const r = u.pop();
                          return "v" === r.type ? t.computeV(e, o.plus(n, r.val[0]), u, r.from) : t.computeV(e, i.minus(e, r.from[1]), u, r.from)
                      }
                      return 0 !== n ? (r.lt(a.numberLength(n), a.numberLength(e)) ? u.push({
                          type: "v",
                          from: l.slice(),
                          val: [n]
                      }) : u.push({
                          type: "V",
                          from: l.slice(),
                          val: [e]
                      }),
                      [l[0], e]) : l
                  }
                  )
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(7)
                    , o = n(8);
                  t.computeT = ((e,t,n,i)=>{
                      const u = i.slice()
                        , l = n[n.length - 1];
                      return "T" === l.type ? u.push(l.from[2], l.from[3]) : "t" === l.type ? u.push(a.plus(l.from[2], l.from[0]), a.plus(l.from[3], l.from[1])) : "Q" === l.type ? u.push(l.val[0], l.val[1]) : "q" === l.type && u.push(a.plus(l.val[0], l.from[0]), a.plus(l.val[1], l.from[1])),
                      r.lt(o.numberLength(t), o.numberLength(e)) ? n.push({
                          type: "t",
                          from: u,
                          val: t.slice()
                      }) : n.push({
                          type: "T",
                          from: u,
                          val: e.slice()
                      }),
                      e.slice()
                  }
                  )
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(3)
                    , a = n(5);
                  function o(e) {
                      let t = "";
                      switch (e.nodeType) {
                      case r.NodeType.Tag:
                          t += i(e);
                          break;
                      case r.NodeType.Text:
                          t += e.textContent;
                          break;
                      case r.NodeType.XMLDecl:
                          t += `<?xml${a.mixWhiteSpace(` ${e.textContent}`).replace(/\s(?="|=|$)/g, "")}?>`;
                          break;
                      case r.NodeType.Comments:
                          const n = a.mixWhiteSpace(e.textContent).trim();
                          n && (t += `\x3c!--${n}--\x3e`);
                          break;
                      case r.NodeType.CDATA:
                          const o = e.textContent;
                          -1 === o.indexOf("<") ? t += o : t += `<![CDATA[${o}]]>`;
                          break;
                      case r.NodeType.DocType:
                          t += `<!DOCTYPE${a.mixWhiteSpace(` ${e.textContent.trim()}`)}>`
                      }
                      return t
                  }
                  function i(e) {
                      let t = "";
                      if (t += `<${e.namespace ? `${e.namespace}:` : ""}${e.nodeName}`,
                      e.attributes.length)
                          for (const {name: n, value: r, namespace: o} of e.attributes)
                              r.trim() && (t += ` ${o ? `${o}:` : ""}${n}="${a.mixWhiteSpace(r.trim()).replace(/"/g, "&quot;")}"`);
                      return e.childNodes.length ? (t += ">",
                      e.childNodes.forEach(e=>{
                          t += o(e)
                      }
                      ),
                      t += `</${e.namespace ? `${e.namespace}:` : ""}${e.nodeName}>`) : t += "/>",
                      t
                  }
                  t.createNode = o,
                  t.createTag = i,
                  t.createXML = (e=>{
                      if (!e)
                          return "";
                      let t = "";
                      return e.childNodes.forEach(e=>{
                          t += o(e)
                      }
                      ),
                      t
                  }
                  )
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(77)
                    , a = r.startChar.length
                    , o = r.nameChar.length
                    , i = r.startChar.split("");
                  let u = a
                    , l = 0;
                  t.createShortenID = (e=>{
                      for (; e >= u; )
                          i.push.apply(i, r.nameChar.split("").map(e=>i[l] + e)),
                          u += o,
                          l++;
                      return i[e]
                  }
                  )
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  }),
                  function(e) {
                      e[e[">"] = 1] = ">",
                      e[e["+"] = 2] = "+",
                      e[e["~"] = 3] = "~"
                  }(t.selectorUnitCombinator || (t.selectorUnitCombinator = {})),
                  function(e) {
                      e[e["^"] = 1] = "^",
                      e[e.$ = 2] = "$",
                      e[e["~"] = 3] = "~",
                      e[e["|"] = 4] = "|",
                      e[e["*"] = 5] = "*"
                  }(t.attrModifier || (t.attrModifier = {}))
              }
              , function(e, t, n) {
                  "use strict";
                  const r = n(37)
                    , a = n(38)
                    , o = n(91)
                    , i = n(33)
                    , u = n(19);
                  e.exports = ((e,t={})=>new Promise((n,l)=>{
                      u.parse(e).then(e=>{
                          const u = {};
                          Object.assign(u, r.config, t),
                          (async()=>{
                              for (const t of a.rules)
                                  t[0] ? await t[1](e) : await t[1](o.toArray(u[t[2]]), e);
                              n(i.createXML(e))
                          }
                          )()
                      }
                      , l)
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  }),
                  t.config = {
                      "collapse-g": !0,
                      "collapse-textwrap": !0,
                      "combine-path": !0,
                      "combine-transform": [!0, 3, 1],
                      "compute-path": [!0, !1, 0],
                      "douglas-peucker": [!1, 0],
                      "rm-attribute": [!0, !0, !1, !1],
                      "rm-comments": !0,
                      "rm-doctype": !0,
                      "rm-hidden": !0,
                      "rm-irregular-nesting": [!0, []],
                      "rm-irregular-tag": [!0, []],
                      "rm-px": !0,
                      "rm-unnecessary": [!0, ["desc", "discard", "foreignObject", "video", "audio", "iframe", "canvas", "metadata", "script", "title", "unknown"]],
                      "rm-version": !0,
                      "rm-viewbox": !0,
                      "rm-xml-decl": !0,
                      "rm-xmlns": !0,
                      "shape-to-path": !0,
                      "shorten-class": !0,
                      "shorten-color": [!0, !1, 2],
                      "shorten-decimal-digits": [!0, 1, 2],
                      "shorten-defs": !0,
                      "shorten-id": !0,
                      "shorten-style-attr": [!0, !1],
                      "shorten-style-tag": [!0, !0]
                  }
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(39)
                    , a = n(40)
                    , o = n(41)
                    , i = n(42)
                    , u = n(43)
                    , l = n(44)
                    , s = n(45)
                    , c = n(46)
                    , m = n(50)
                    , f = n(60)
                    , p = n(61)
                    , d = n(64)
                    , y = n(65)
                    , b = n(66)
                    , h = n(67)
                    , g = n(68)
                    , v = n(69)
                    , I = n(70)
                    , N = n(71)
                    , A = n(72)
                    , S = n(73)
                    , C = n(74)
                    , x = n(75)
                    , R = n(76)
                    , T = n(78)
                    , _ = n(81)
                    , E = n(82)
                    , w = n(83)
                    , V = n(84)
                    , O = n(87);
                  t.rules = [[1, i.rmUseless], [1, a.combineStyle], [1, r.combineScript], [0, S.rmXMLDecl, "rm-xml-decl"], [0, N.rmVersion, "rm-version"], [0, y.rmDocType, "rm-doctype"], [0, d.rmComments, "rm-comments"], [0, g.rmIrregularTag, "rm-irregular-tag"], [0, h.rmIrregularNesting, "rm-irregular-nesting"], [0, I.rmUnnecessary, "rm-unnecessary"], [0, A.rmViewBox, "rm-viewbox"], [0, p.rmAttribute, "rm-attribute"], [0, w.shortenID, "shorten-id"], [0, R.shortenClass, "shorten-class"], [0, E.shortenDefs, "shorten-defs"], [0, u.collapseG, "collapse-g"], [0, b.rmHidden, "rm-hidden"], [0, v.rmPx, "rm-px"], [0, _.shortenDecimalDigits, "shorten-decimal-digits"], [0, T.shortenColor, "shorten-color"], [0, V.shortenStyleAttr, "shorten-style-attr"], [0, O.shortenStyleTag, "shorten-style-tag"], [0, f.douglasPeucker, "douglas-peucker"], [0, x.shapeToPath, "shape-to-path"], [0, s.combinePath, "combine-path"], [0, m.computePath, "compute-path"], [0, c.combineTransform, "combine-transform"], [0, l.collapseTextwrap, "collapse-textwrap"], [1, o.combineTextNode], [0, C.rmXMLNS, "rm-xmlns"]]
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(3)
                    , o = n(5)
                    , i = n(4)
                    , u = n(1);
                  t.combineScript = (e=>new Promise((t,n)=>{
                      let l, s = null;
                      const c = e=>{
                          for (let t = 0; t < e.childNodes.length; t++) {
                              const n = e.childNodes[t];
                              n.nodeType !== a.NodeType.Text && n.nodeType !== a.NodeType.CDATA ? (i.rmNode(n),
                              t--) : (n.textContent = o.mixWhiteSpace(n.textContent.trim()),
                              n.nodeType === a.NodeType.Text && (n.nodeType = a.NodeType.CDATA),
                              l ? (";" !== l.textContent.slice(-1) && (l.textContent += ";"),
                              l.textContent += n.textContent,
                              i.rmNode(n),
                              t--) : l = n)
                          }
                      }
                      ;
                      if (u.traversalNode(r.propEq("nodeName", "script"), e=>{
                          s ? (c(e),
                          i.rmNode(e)) : (s = e,
                          c(e))
                      }
                      , e),
                      s) {
                          const e = s.childNodes;
                          0 !== e.length && e[0].textContent.replace(/\s/g, "") ? -1 === e[0].textContent.indexOf("<") && (e[0].nodeType = a.NodeType.Text) : i.rmNode(s)
                      }
                      t()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(3)
                    , o = n(5)
                    , i = n(4)
                    , u = n(1);
                  t.combineStyle = (e=>new Promise((t,n)=>{
                      let l, s;
                      const c = e=>{
                          for (let t = 0; t < e.childNodes.length; t++) {
                              const n = e.childNodes[t];
                              n.nodeType !== a.NodeType.Text && n.nodeType !== a.NodeType.CDATA ? (i.rmNode(n),
                              t--) : (n.textContent = o.mixWhiteSpace(n.textContent.trim()),
                              n.nodeType === a.NodeType.Text && (n.nodeType = a.NodeType.CDATA),
                              s ? (s.textContent += n.textContent,
                              i.rmNode(n),
                              t--) : s = n)
                          }
                      }
                      ;
                      if (u.traversalNode(r.propEq("nodeName", "style"), e=>{
                          l ? (c(e),
                          i.rmNode(e)) : (l = e,
                          c(e))
                      }
                      , e),
                      l) {
                          const e = l.childNodes;
                          0 !== e.length && e[0].textContent.replace(/\s/g, "") ? -1 === e[0].textContent.indexOf("<") && (e[0].nodeType = a.NodeType.Text) : l.parentNode.removeChild(l)
                      }
                      t()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(3)
                    , a = n(11)
                    , o = n(5)
                    , i = n(4)
                    , u = n(1);
                  t.combineTextNode = (e=>new Promise((t,n)=>{
                      u.traversalNode(e=>e.nodeType === r.NodeType.Text || e.nodeType === r.NodeType.CDATA, e=>{
                          a.regularTag[e.parentNode.nodeName] && a.regularTag[e.parentNode.nodeName].containTextNode ? e.textContent = o.mixWhiteSpace(e.textContent) : i.rmNode(e)
                      }
                      , e),
                      u.traversalNode(e=>a.regularTag[e.nodeName] && a.regularTag[e.nodeName].containTextNode, e=>{
                          let t = null;
                          for (let n = 0; n < e.childNodes.length; n++) {
                              const a = e.childNodes[n];
                              a.nodeType !== r.NodeType.Text && a.nodeType !== r.NodeType.CDATA || (t && t.nodeType === a.nodeType ? (t.textContent = o.mixWhiteSpace(`${t.textContent}${a.textContent}`),
                              i.rmNode(a),
                              n--) : t = a)
                          }
                      }
                      , e),
                      t()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(3)
                    , o = n(4)
                    , i = n(1);
                  t.rmUseless = (e=>new Promise((t,n)=>{
                      i.traversalNode(r.anyPass([r.propEq("nodeType", a.NodeType.OtherSect), r.propEq("nodeType", a.NodeType.OtherDecl)]), o.rmNode, e),
                      t()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(6)
                    , o = n(12)
                    , i = n(16)
                    , u = n(2)
                    , l = n(4)
                    , s = n(1)
                    , c = e=>{
                      s.traversalNode(r.propEq("nodeName", "g"), e=>{
                          const t = e.childNodes
                            , n = t.filter(u.isTag);
                          n.length ? (e=>e.attributes.filter(e=>-1 !== a.cantCollapseAttributes.indexOf(e.fullname)).length)(e) || (1 === n.length ? (((e,t)=>{
                              const n = {}
                                , r = e.attributes
                                , u = t.attributes;
                              r.forEach(e=>{
                                  n[e.fullname] = e
                              }
                              ),
                              u.forEach(t=>{
                                  if (n[t.fullname]) {
                                      if (-1 !== a.transformAttributes.indexOf(t.fullname))
                                          n[t.fullname].value = `${t.value} ${n[t.fullname].value}`;
                                      else if ("style" === t.fullname) {
                                          const e = o.execStyle(n[t.fullname].value)
                                            , r = o.execStyle(t.value);
                                          n[t.fullname].value = i.stringifyStyle(r.concat(e))
                                      }
                                  } else
                                      e.setAttribute(t.name, t.value, t.namespace),
                                      n[t.fullname] = t
                              }
                              )
                          }
                          )(n[0], e),
                          e.parentNode.replaceChild(e, ...t)) : e.attributes.length || e.parentNode.replaceChild(e, ...t)) : l.rmNode(e)
                      }
                      , e)
                  }
                  ;
                  t.collapseG = ((e,t)=>new Promise((n,r)=>{
                      e[0] && c(t),
                      n()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(11)
                    , a = n(2)
                    , o = n(1);
                  t.collapseTextwrap = ((e,t)=>new Promise((n,i)=>{
                      e[0] && o.traversalNode(a.isTag, e=>{
                          if (r.regularTag[e.nodeName].containTextNode && r.regularTag[e.parentNode.nodeName].containTextNode) {
                              const t = e.attributes;
                              for (let e = t.length; e--; )
                                  if (t[e].value.trim())
                                      return;
                              e.parentNode.replaceChild(e, ...e.childNodes)
                          }
                      }
                      , t),
                      n()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(12)
                    , o = n(2)
                    , i = n(4)
                    , u = n(1);
                  t.combinePath = ((e,t)=>new Promise((n,l)=>{
                      e[0] && u.traversalNode(o.isTag, e=>{
                          const t = {};
                          for (let n = 0; n < e.childNodes.length; n++) {
                              const o = e.childNodes[n];
                              if ("path" === o.nodeName) {
                                  const e = {};
                                  let u = []
                                    , l = null;
                                  if (o.attributes.forEach(t=>{
                                      "style" === t.fullname ? u = a.execStyle(t.value) : "d" === t.fullname ? l = t : e[t.fullname] = t.value
                                  }
                                  ),
                                  u.forEach(t=>{
                                      e[t.name] = t.value
                                  }
                                  ),
                                  l) {
                                      const a = `&${Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}&&style&&${u.map(e=>`${e.name}=${e.value}`).join("&")}&`;
                                      r.has(a, t) ? -1 !== a.indexOf("&fill=none&") && (t[a].value += l.value,
                                      i.rmNode(o),
                                      n--) : t[a] = l
                                  }
                              }
                          }
                      }
                      , t),
                      n()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(6)
                    , a = n(47)
                    , o = n(24)
                    , i = n(2)
                    , u = n(1);
                  t.combineTransform = ((e,t)=>{
                      if (e[0]) {
                          let n = e.length > 1 ? e[1] : 3
                            , l = e.length > 2 ? e[2] : 1;
                          u.traversalNode(i.isTag, e=>{
                              const t = e.attributes;
                              for (let i = t.length; i--; ) {
                                  const u = t[i];
                                  if (-1 !== r.transformAttributes.indexOf(u.fullname)) {
                                      const t = u.value.trim();
                                      if (t) {
                                          const r = o.shorten(a.combineMatrix(t, n, l));
                                          "matrix(1,0,0,1,0,0)" === r ? e.removeAttribute(u.fullname) : r.length < t.length ? u.value = r : u.value = o.shorten(t)
                                      } else
                                          e.removeAttribute(u.fullname)
                                  }
                              }
                          }
                          , t)
                      }
                  }
                  )
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(13)
                    , a = n(48)
                    , o = n(49);
                  t.combineMatrix = function(e, t, n) {
                      let i = new o.Matrix;
                      const u = a.execMatrix(e);
                      for (const e of u)
                          if (i[e.type])
                              i = i[e.type].apply(i, e.val);
                          else {
                              if ("matrix" !== e.type)
                                  return "matrix(1,0,0,1,0,0)";
                              {
                                  const t = new o.Matrix(e.val[0],e.val[1],e.val[2],e.val[3],e.val[4],e.val[5]);
                                  i = i.multiply(t)
                              }
                          }
                      return i.a = r.toFixed(t, i.a),
                      i.b = r.toFixed(t, i.b),
                      i.c = r.toFixed(t, i.c),
                      i.d = r.toFixed(t, i.d),
                      i.e = r.toFixed(n, i.e),
                      i.f = r.toFixed(n, i.f),
                      `matrix(${i.toString()})`
                  }
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = /([a-z]+)\((.+?)\)/gi;
                  t.execMatrix = (e=>{
                      const t = [];
                      r.lastIndex = 0;
                      let n = r.exec(e);
                      for (; null !== n; )
                          t.push({
                              type: n[1],
                              val: n[2].trim().split(/[,\s]+/).map(e=>parseFloat(e.trim()))
                          }),
                          n = r.exec(e);
                      return t
                  }
                  )
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = 180;
                  class a {
                      constructor(e=1, t=0, n=0, r=1, a=0, o=0) {
                          this.a = e,
                          this.b = t,
                          this.c = n,
                          this.d = r,
                          this.e = a,
                          this.f = o
                      }
                      translate(e, t) {
                          return this.multiply(new a(1,0,0,1,e,t))
                      }
                      rotate(e) {
                          const t = e * Math.PI / r;
                          return this.multiply(new a(Math.cos(t),Math.sin(t),-Math.sin(t),Math.cos(t),0,0))
                      }
                      scale(e, t=null) {
                          return this.multiply(new a(e,0,0,null === t ? e : t,0,0))
                      }
                      skewX(e) {
                          const t = e * Math.PI / r;
                          return this.multiply(new a(1,0,Math.tan(t),1,0,0))
                      }
                      skewY(e) {
                          const t = e * Math.PI / r;
                          return this.multiply(new a(1,Math.tan(t),0,1,0,0))
                      }
                      multiply(e) {
                          const t = this.a * e.a + this.c * e.b
                            , n = this.b * e.a + this.d * e.b
                            , r = this.a * e.c + this.c * e.d
                            , a = this.b * e.c + this.d * e.d
                            , o = this.a * e.e + this.c * e.f + this.e
                            , i = this.b * e.e + this.d * e.f + this.f;
                          return this.a = t,
                          this.b = n,
                          this.c = r,
                          this.d = a,
                          this.e = o,
                          this.f = i,
                          this
                      }
                      toString() {
                          return `${this.a},${this.b},${this.c},${this.d},${this.e},${this.f}`
                      }
                  }
                  t.Matrix = a
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(25)
                    , o = n(9)
                    , i = n(7)
                    , u = n(52)
                    , l = n(53)
                    , s = n(30)
                    , c = n(55)
                    , m = n(56)
                    , f = n(57)
                    , p = n(28)
                    , d = n(32)
                    , y = n(31)
                    , b = n(58)
                    , h = n(59)
                    , g = n(1)
                    , v = e=>{
                      const t = [];
                      let n = [0, 0];
                      return e.forEach(e=>{
                          switch (e.type) {
                          case "M":
                              n = m.computeM(e.val, [o.minus(e.val[0], n[0]), o.minus(e.val[1], n[1])], t, n);
                              break;
                          case "m":
                              n = m.computeM([i.plus(e.val[0], n[0]), i.plus(e.val[1], n[1])], e.val, t, n);
                              break;
                          case "Z":
                          case "z":
                              n = b.computeZ(t, n);
                              break;
                          case "H":
                              n = s.computeH(e.val[0], o.minus(e.val[0], n[0]), t, n);
                              break;
                          case "h":
                              n = s.computeH(i.plus(e.val[0], n[0]), e.val[0], t, n);
                              break;
                          case "V":
                              n = y.computeV(e.val[0], o.minus(e.val[0], n[1]), t, n);
                              break;
                          case "v":
                              n = y.computeV(i.plus(e.val[0], n[1]), e.val[0], t, n);
                              break;
                          case "L":
                              for (let r = 0, a = e.val.length; r < a; r += 2)
                                  n = c.computeL([e.val[r], e.val[r + 1]], [o.minus(e.val[r], n[0]), o.minus(e.val[r + 1], n[1])], t, n);
                              break;
                          case "l":
                              for (let r = 0, a = e.val.length; r < a; r += 2)
                                  n = c.computeL([i.plus(e.val[r], n[0]), i.plus(e.val[r + 1], n[1])], [e.val[r], e.val[r + 1]], t, n);
                              break;
                          case "C":
                              n = l.computeC(e.val, e.val.map((e,t)=>o.minus(e, n[t % 2])), t, n);
                              break;
                          case "c":
                              n = l.computeC(e.val.map((e,t)=>i.plus(e, n[t % 2])), e.val, t, n);
                              break;
                          case "S":
                              n = p.computeS(e.val, e.val.map((e,t)=>o.minus(e, n[t % 2])), t, n);
                              break;
                          case "s":
                              n = p.computeS(e.val.map((e,t)=>i.plus(e, n[t % 2])), e.val, t, n);
                              break;
                          case "Q":
                              n = f.computeQ(e.val, e.val.map((e,t)=>o.minus(e, n[t % 2])), t, n);
                              break;
                          case "q":
                              n = f.computeQ(e.val.map((e,t)=>i.plus(e, n[t % 2])), e.val, t, n);
                              break;
                          case "T":
                              n = d.computeT(e.val, e.val.map((e,t)=>o.minus(e, n[t % 2])), t, n);
                              break;
                          case "t":
                              n = d.computeT(e.val.map((e,t)=>i.plus(e, n[t % 2])), e.val, t, n);
                              break;
                          case "A":
                              n = u.computeA(e.val, e.val.map((e,t)=>t < u.APOS_X ? e : o.minus(e, n[1 - t % 2])), t, n);
                              break;
                          case "a":
                              n = u.computeA(e.val.map((e,t)=>t < u.APOS_X ? e : i.plus(e, n[1 - t % 2])), e.val, t, n)
                          }
                      }
                      ),
                      t
                  }
                    , I = e=>{
                      switch (e.type) {
                      case "l":
                          e.val[0] = i.plus(e.val[0], e.from[0]),
                          e.val[1] = i.plus(e.val[1], e.from[1]);
                          for (let t = 2, n = e.val.length; t < n; t += 2)
                              e.val[t] = i.plus(e.val[t], e.val[t - 2]),
                              e.val[t + 1] = i.plus(e.val[t + 1], e.val[t - 1]);
                          break;
                      case "H":
                          e.val.push(e.from[1]);
                          break;
                      case "h":
                          e.val[0] = i.plus(e.val[0], e.from[0]),
                          e.val.push(e.from[1]);
                          break;
                      case "V":
                          e.val.unshift(e.from[0]);
                          break;
                      case "v":
                          e.val.unshift(e.from[0]),
                          e.val[1] = i.plus(e.val[1], e.from[1])
                      }
                      return e.type = "L",
                      e
                  }
                  ;
                  t.computePath = ((e,t)=>new Promise((n,o)=>{
                      e[0] && g.traversalNode(r.propEq("nodeName", "path"), t=>{
                          const n = t.getAttribute("d");
                          if (n) {
                              const r = h.execPath(n);
                              let o = v(r);
                              e[1] && e[2] && (o = v(((e,t)=>{
                                  const n = [];
                                  let r = 0;
                                  for (let o = 0, i = t.length; o < i; o++) {
                                      const i = t[o];
                                      if (-1 !== "LlHhVv".indexOf(i.type)) {
                                          const e = n[r - 1];
                                          "L" === e.type ? (i = i,
                                          (e = e).val = e.val.concat(I(i).val)) : (n.push(I(i)),
                                          r++)
                                      } else {
                                          if (r > 0 && "L" === n[r - 1].type) {
                                              const t = n[r - 1];
                                              t.val = a.douglasPeucker(e, t.from.concat(t.val)).slice(2)
                                          }
                                          n.push(i),
                                          r++
                                      }
                                  }
                                  if ("L" === n[r - 1].type) {
                                      const t = n[r - 1];
                                      t.val = a.douglasPeucker(e, t.from.concat(t.val)).slice(2)
                                  }
                                  return n
                              }
                              )(e[2], o)));
                              let i = "";
                              o.forEach(e=>{
                                  i += `${e.type}${e.val.join(",")}`
                              }
                              ),
                              t.setAttribute("d", i.replace(/,-/g, "-"))
                          }
                      }
                      , t),
                      n()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  }),
                  t.decimal = (e=>{
                      const t = `${e}`;
                      return -1 === t.indexOf(".") ? "" : t.slice(t.indexOf(".") + 1)
                  }
                  )
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(13)
                    , o = n(26)
                    , i = n(8);
                  t.APOS_X = 5,
                  t.APOS_Y = 6,
                  t.computeA = ((e,n,u,l)=>{
                      const s = u.length
                        , c = ((e,t,n,r,i,u)=>{
                          const l = new o.Vector(n - e,r - t);
                          l.modulo = Math.sqrt(i * i - Math.pow(l.modulo / 2, 2));
                          const s = u ? -Math.PI / 2 : Math.PI / 2;
                          l.rotate(s);
                          const c = u ? 1 : -1
                            , m = (e + n) / 2 + c * l.x
                            , f = (t + r) / 2 + c * l.y;
                          return [a.toFixed(3, m), a.toFixed(3, f)]
                      }
                      )(l[0], l[1], e[t.APOS_X], e[t.APOS_Y], e[0], e[3] === e[4]);
                      return ((e,n,a,u)=>{
                          if (s > 0) {
                              const n = e[s - 1];
                              if ("a" === n.type.toLowerCase()) {
                                  const e = e=>r.eqProps(e, n.val, a);
                                  if (r.all(e, [0, 1, 2]) && a[0] === a[1] && (n.from[0] !== a[t.APOS_X] || n.from[1] !== a[t.APOS_Y]) && r.whereEq([n.from[2], n.from[3]], u)) {
                                      const e = new o.Vector(n.from[0] - u[0],n.from[1] - u[1])
                                        , l = new o.Vector(n.val[t.APOS_X] - u[0],n.val[t.APOS_Y] - u[1])
                                        , s = new o.Vector(a[t.APOS_X] - u[0],a[t.APOS_Y] - u[1])
                                        , c = a.slice();
                                      return c[t.APOS_X] -= n.from[0],
                                      c[t.APOS_Y] -= n.from[1],
                                      r.lt(i.numberLength(c), i.numberLength(a)) ? (n.type = "a",
                                      n.val[t.APOS_X] = c[t.APOS_X],
                                      n.val[t.APOS_Y] = c[t.APOS_Y]) : (n.type = "A",
                                      n.val[t.APOS_X] = a[t.APOS_X],
                                      n.val[t.APOS_Y] = a[t.APOS_Y]),
                                      (0 === n.val[3] ? o.Vector.radian(e, l) : 2 * Math.PI - o.Vector.radian(e, l)) + (0 === a[3] ? o.Vector.radian(l, s) : 2 * Math.PI - o.Vector.radian(l, s)) > Math.PI && 0 === n.val[3] && (n.val[3] = 1),
                                      !0
                                  }
                              }
                          }
                          return !1
                      }
                      )(u, 0, e, c) || (r.lt(i.numberLength(n), i.numberLength(e)) ? u.push({
                          type: "a",
                          from: l.concat(c),
                          val: n.slice()
                      }) : u.push({
                          type: "A",
                          from: l.concat(c),
                          val: e.slice()
                      })),
                      [e[t.APOS_X], e[t.APOS_Y]]
                  }
                  )
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(8)
                    , o = n(28)
                    , i = n(29);
                  t.computeC = ((e,t,n,u)=>((e,t,n,r)=>{
                      if (t > 0) {
                          const a = e[t - 1]
                            , o = a.type;
                          if ("C" === o)
                              return i.matchControl(a.val.slice(2), 0, 0, n, r);
                          if ("c" === o)
                              return i.matchControl(a.val.slice(2), a.from[0], a.from[1], n, r);
                          if ("S" === o)
                              return i.matchControl(a.val, 0, 0, n, r);
                          if ("s" === o)
                              return i.matchControl(a.val, a.from[0], a.from[1], n, r)
                      }
                      return !1
                  }
                  )(n, n.length, e[0], e[1]) ? o.computeS(e.slice(2), t.slice(2), n, u) : (r.lt(a.numberLength(t), a.numberLength(e)) ? n.push({
                      type: "c",
                      from: u.slice(),
                      val: t.slice()
                  }) : n.push({
                      type: "C",
                      from: u.slice(),
                      val: e.slice()
                  }),
                  [e[4], e[5]]))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(7)
                    , o = n(9);
                  t.symmetry = r.curry((e,t)=>a.plus(t, o.minus(t, e)))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(9)
                    , o = n(7)
                    , i = n(8)
                    , u = n(30)
                    , l = n(31);
                  t.computeL = ((e,t,n,s)=>{
                      const c = n.length;
                      if (0 === t[0] || 0 === t[1])
                          return 0 !== t[0] ? u.computeH(e[0], t[0], n, s) : 0 !== t[1] ? l.computeV(e[1], t[1], n, s) : s;
                      if (c > 0 && "l" === n[c - 1].type.toLowerCase()) {
                          const u = n[c - 1];
                          if ("l" === u.type) {
                              const e = u.val.slice().concat(t)
                                , n = [];
                              for (let t = 0, r = e.length; t < r; t += 2)
                                  0 === t ? (n[0] = o.plus(u.from[0], e[0]),
                                  n[1] = o.plus(u.from[1], e[1])) : (n[t] = o.plus(n[t - 2], e[t]),
                                  n[t + 1] = o.plus(n[t - 1], e[t + 1]));
                              r.lt(i.numberLength(e), i.numberLength(n)) ? u.val = e : (u.type = "L",
                              u.val = n)
                          } else {
                              const t = u.val.slice().concat(e)
                                , n = [];
                              for (let e = 0, r = t.length; e < r; e += 2)
                                  0 === e ? (n[0] = a.minus(t[0], u.from[0]),
                                  n[1] = a.minus(t[1], u.from[1])) : (n[e] = a.minus(t[e], t[e - 2]),
                                  n[e + 1] = a.minus(t[e + 1], t[e - 1]));
                              r.lt(i.numberLength(n), i.numberLength(t)) ? (u.type = "l",
                              u.val = n) : u.val = t
                          }
                          return e.slice()
                      }
                      return r.lt(i.numberLength(t), i.numberLength(e)) ? n.push({
                          type: "l",
                          from: s.slice(),
                          val: t.slice()
                      }) : n.push({
                          type: "L",
                          from: s.slice(),
                          val: e.slice()
                      }),
                      e.slice()
                  }
                  )
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(9)
                    , o = n(7)
                    , i = n(8);
                  t.computeM = ((e,n,u,l)=>{
                      const s = u.length;
                      if (s > 0 && "m" === u[s - 1].type.toLowerCase()) {
                          const r = u.pop();
                          return "m" === r.type ? t.computeM(e, [o.plus(n[0], r.val[0]), o.plus(n[1], r.val[1])], u, r.from) : t.computeM(e, [a.minus(e[0], r.from[0]), a.minus(e[1], r.from[1])], u, r.from)
                      }
                      return r.lt(i.numberLength(n), i.numberLength(e)) ? u.push({
                          type: "m",
                          from: l.slice(),
                          val: n.slice()
                      }) : u.push({
                          type: "M",
                          from: l.slice(),
                          val: e.slice()
                      }),
                      e.slice()
                  }
                  )
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(8)
                    , o = n(32)
                    , i = n(29);
                  t.computeQ = ((e,t,n,u)=>((e,t,n,r)=>{
                      if (t > 0) {
                          const a = e[t - 1]
                            , o = a.type;
                          if ("Q" === o)
                              return i.matchControl(a.val, 0, 0, n, r);
                          if ("q" === o)
                              return i.matchControl(a.val, a.from[0], a.from[1], n, r);
                          if ("T" === o)
                              return i.matchControl(a.from.slice(2).concat(a.val), a.from[0], a.from[1], n, r);
                          if ("t" === o)
                              return i.matchControl(a.from.slice(2).concat(a.val), a.from[0], a.from[1], n, r)
                      }
                      return !1
                  }
                  )(n, n.length, e[0], e[1]) ? o.computeT(e.slice(2), t.slice(2), n, u) : (r.lt(a.numberLength(t), a.numberLength(e)) ? n.push({
                      type: "Q",
                      from: u.slice(),
                      val: t.slice()
                  }) : n.push({
                      type: "q",
                      from: u.slice(),
                      val: e.slice()
                  }),
                  [e[2], e[3]]))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(7);
                  t.computeZ = ((e,t)=>{
                      const n = e.length;
                      if (n > 0) {
                          const a = e[n - 1];
                          if ("z" !== a.type.toLowerCase() && "m" !== a.type.toLowerCase()) {
                              let a = n - 1
                                , o = null;
                              for (; a--; ) {
                                  if ("m" === e[a].type) {
                                      o = [r.plus(e[a].val[0], e[a].from[0]), r.plus(e[a].val[1], e[a].from[1])];
                                      break
                                  }
                                  if ("M" === e[a].type) {
                                      o = [e[a].val[0], e[a].val[1]];
                                      break
                                  }
                              }
                              return null === o && (o = [0, 0]),
                              e.push({
                                  type: "z",
                                  from: t.slice(),
                                  val: []
                              }),
                              o
                          }
                      }
                      return t
                  }
                  )
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = /([mMzZlLhHvVcCsSqQtTaA])(.*?)(?=[mMzZlLhHvVcCsSqQtTaA]|$)/g;
                  t.execPath = (e=>{
                      const t = [];
                      r.lastIndex = 0;
                      let n = r.exec(e);
                      for (; null !== n; ) {
                          const a = n[2].trim();
                          t.push({
                              type: n[1],
                              val: a ? a.replace(/(\d)(?=-)/g, "$1 ").split(/[,\s]+/).map(e=>parseFloat(e)) : []
                          }),
                          n = r.exec(e)
                      }
                      return t
                  }
                  )
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(25)
                    , o = n(1);
                  t.douglasPeucker = ((e,t)=>new Promise((n,i)=>{
                      e[0] && e[1] && o.traversalNode(r.anyPass([r.propEq("nodeName", "polygon"), r.propEq("nodeName", "polyline")]), t=>{
                          const n = t.getAttribute("points");
                          if (n) {
                              const r = n.trim().split(/[,\s]+/).map(e=>parseFloat(e));
                              t.setAttribute("points", a.douglasPeucker(e[1], r).join(","))
                          }
                      }
                      , t),
                      n()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(6)
                    , a = n(10)
                    , o = n(11)
                    , i = n(17)
                    , u = n(2)
                    , l = n(1);
                  t.rmAttribute = ((e,t)=>new Promise((n,s)=>{
                      e[0] && l.traversalNode(u.isTag, t=>{
                          const n = o.regularTag[t.nodeName]
                            , u = t.getAttribute("attributeName")
                            , l = t.attributes;
                          for (let o = l.length; o--; ) {
                              const s = l[o]
                                , c = a.regularAttr[s.fullname];
                              if (c.isUndef) {
                                  let n = !0;
                                  if ((e[2] && -1 !== r.eventAttributes.indexOf(s.fullname) || e[3] && -1 !== r.ariaAttributes.indexOf(s.fullname)) && (n = !1),
                                  n) {
                                      t.removeAttribute(s.fullname);
                                      continue
                                  }
                              }
                              s.value.trim() && (c.couldBeStyle || -1 !== s.fullname.indexOf("xmlns") || -1 !== n.ownAttributes.indexOf(s.fullname)) && i.legalValue(c, s.value) ? -1 === r.animationAttributes.indexOf(s.fullname) || u && a.regularAttr[u].animatable || (t.removeAttribute(s.fullname),
                              t.removeAttribute("attributeName")) : t.removeAttribute(s.fullname)
                          }
                      }
                      , t),
                      n()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  }),
                  t.useEnum = ((e,t)=>e[e[t]] === t)
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  }),
                  t.useReg = ((e,t)=>e.test(t))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(3)
                    , o = n(4)
                    , i = n(1);
                  t.rmComments = ((e,t)=>new Promise((n,u)=>{
                      e[0] && i.traversalNode(r.propEq("nodeType", a.NodeType.Comments), o.rmNode, t),
                      n()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(3)
                    , o = n(4)
                    , i = n(1);
                  t.rmDocType = ((e,t)=>new Promise((n,u)=>{
                      e[0] && i.traversalNode(r.propEq("nodeType", a.NodeType.DocType), o.rmNode, t),
                      n()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(6)
                    , a = n(11)
                    , o = n(12)
                    , i = n(2)
                    , u = n(4)
                    , l = n(1);
                  t.rmHidden = ((e,t)=>new Promise((n,s)=>{
                      e[0] && l.traversalNode(i.isTag, e=>{
                          if (!e.childNodes.length && a.regularTag[e.nodeName].containTextNode)
                              return void u.rmNode(e);
                          const t = {};
                          let n = null;
                          if (e.attributes.forEach(e=>{
                              "style" === e.fullname ? n = o.execStyle(e.value) : t[e.fullname] = e.value
                          }
                          ),
                          n && n.forEach(e=>{
                              t[e.name] = e.value
                          }
                          ),
                          "none" === t.display)
                              return void u.rmNode(e);
                          const i = "none" === t.fill
                            , l = "none" === t.stroke;
                          if (i && l && -1 !== r.shapeElements.indexOf(e.nodeName))
                              u.rmNode(e);
                          else
                              switch (e.nodeName) {
                              case "path":
                                  t.d || u.rmNode(e);
                                  break;
                              case "rect":
                                  (isNaN(parseFloat(t.width)) || isNaN(parseFloat(t.height)) || parseFloat(t.width) <= 0 || parseFloat(t.height) <= 0) && u.rmNode(e);
                                  break;
                              case "circle":
                                  (isNaN(parseFloat(t.r)) || parseFloat(t.r) <= 0) && u.rmNode(e);
                                  break;
                              case "ellipse":
                                  (isNaN(parseFloat(t.rx)) || isNaN(parseFloat(t.ry)) || parseFloat(t.rx) <= 0 || parseFloat(t.ry) <= 0) && u.rmNode(e);
                                  break;
                              case "line":
                                  const n = {
                                      x1: "0",
                                      y1: "0",
                                      x2: "0",
                                      y2: "0"
                                  };
                                  Object.assign(n, t),
                                  n.x1 === n.x2 && n.y1 === n.y2 && u.rmNode(e);
                                  break;
                              case "polyline":
                              case "polygon":
                                  t.points || u.rmNode(e)
                              }
                      }
                      , t),
                      n()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(11)
                    , a = n(2)
                    , o = n(4)
                    , i = n(1);
                  t.rmIrregularNesting = ((e,t)=>new Promise((n,u)=>{
                      e[0] && i.traversalNode(a.isTag, t=>{
                          if (Array.isArray(e[1]) && -1 !== e[1].indexOf(t.nodeName))
                              return;
                          let n = r.regularTag[t.nodeName].legalChildElements;
                          if (n) {
                              if (n.any)
                                  return;
                              let e = n.noself;
                              if (n.transparent) {
                                  let a = t.parentNode;
                                  for (; "switch" === a.nodeName; )
                                      a = a.parentNode;
                                  if (n = r.regularTag[a.nodeName].legalChildElements,
                                  !e && n.any)
                                      return
                              }
                              const i = t.childNodes;
                              for (let r = i.length; r--; ) {
                                  const u = i[r];
                                  if (a.isTag(u))
                                      if (e && u.nodeName === t.nodeName)
                                          o.rmNode(u);
                                      else {
                                          if (n.any)
                                              continue;
                                          -1 === n.childElements.indexOf(u.nodeName) && o.rmNode(u)
                                      }
                              }
                          }
                      }
                      , t),
                      n()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(11)
                    , a = n(2)
                    , o = n(4)
                    , i = n(1);
                  t.rmIrregularTag = ((e,t)=>new Promise((n,u)=>{
                      e[0] && i.traversalNode(a.isTag, t=>{
                          Array.isArray(e[1]) && -1 !== e[1].indexOf(t.nodeName) || r.regularTag[t.nodeName].isUndef && o.rmNode(t)
                      }
                      , t),
                      n()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(2)
                    , a = n(1)
                    , o = /(^|\(|\s|,|{|;|:)([+-]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)px(?=$|\)|\s|,|;|})/g;
                  t.rmPx = ((e,t)=>{
                      e[0] && a.traversalNode(r.isTag, e=>{
                          e.attributes.forEach(e=>{
                              o.test(e.value) && (e.value = e.value.replace(o, "$1$2"))
                          }
                          ),
                          "style" === e.nodeName && (e.childNodes[0].textContent = e.childNodes[0].textContent.replace(o, "$1$2"))
                      }
                      , t)
                  }
                  )
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(6)
                    , a = n(4)
                    , o = n(1);
                  t.rmUnnecessary = ((e,t)=>new Promise((n,i)=>{
                      e[0] && Array.isArray(e[1]) && e[1].length && o.traversalNode(t=>-1 !== e[1].indexOf(t.nodeName) && -1 !== r.unnecessaryElements.indexOf(t.nodeName), a.rmNode, t),
                      n()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(1);
                  t.rmVersion = ((e,t)=>new Promise((n,o)=>{
                      e[0] && a.traversalNode(r.propEq("nodeName", "svg"), e=>{
                          e.removeAttribute("version")
                      }
                      , t),
                      n()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(1);
                  t.rmViewBox = ((e,t)=>new Promise((n,o)=>{
                      e[0] && a.traversalNode(e=>e.hasAttribute("viewBox"), e=>{
                          const t = {
                              x: "0",
                              y: "0",
                              width: "100%",
                              height: "100%"
                          }
                            , n = {
                              x: "0",
                              y: "0",
                              width: "100%",
                              height: "100%"
                          };
                          e.attributes.forEach(r=>{
                              "marker" === e.nodeName ? "markerWidth" === r.fullname ? t.width = r.value.replace("px", "") : "markerHeight" === r.fullname && (t.height = r.value.replace("px", "")) : "width" === r.fullname ? t.width = r.value.replace("px", "") : "height" === r.fullname && (t.height = r.value.replace("px", "")),
                              "viewBox" === r.fullname && ([n.x,n.y,n.width,n.height] = r.value.split(/[\s,]+/))
                          }
                          ),
                          r.equals(t, n) && e.removeAttribute("viewBox")
                      }
                      , t),
                      n()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(3)
                    , o = n(4)
                    , i = n(1);
                  t.rmXMLDecl = ((e,t)=>new Promise((n,u)=>{
                      e[0] && i.traversalNode(r.propEq("nodeType", a.NodeType.XMLDecl), o.rmNode, t),
                      n()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(2);
                  t.rmXMLNS = ((e,t)=>new Promise((n,a)=>{
                      if (e[0]) {
                          const e = (t,n)=>{
                              if (r.isTag(t)) {
                                  const r = {};
                                  Object.assign(r, n[n.length - 1]);
                                  for (let e = t.attributes.length; e--; ) {
                                      const n = t.attributes[e];
                                      "xmlns" === n.namespace ? r[n.name] = {
                                          target: t,
                                          count: 0
                                      } : n.namespace && (r[n.namespace] ? r[n.namespace].count++ : t.removeAttribute(n.fullname))
                                  }
                                  n.push(r),
                                  t.childNodes.forEach(t=>{
                                      e(t, n)
                                  }
                                  ),
                                  Object.keys(r).forEach(e=>{
                                      0 === r[e].count && t.removeAttribute(`xmlns:${e}`)
                                  }
                                  ),
                                  n.pop()
                              }
                          }
                          ;
                          t.childNodes.forEach(t=>{
                              e(t, [{}])
                          }
                          )
                      }
                      n()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(6)
                    , o = n(33)
                    , i = n(1)
                    , u = (e,t=!1)=>{
                      const n = {
                          points: e.getAttribute("points")
                      };
                      if (n.points) {
                          e.removeAttribute("points"),
                          e.nodeName = "path";
                          const r = n.points.split(/[\s,]+/);
                          r.length % 2 == 1 && r.pop();
                          let a = "";
                          a = 0 === r.length ? "M0,0" : 2 === r.length ? `M${r[0]},${r[1]}` : `M${r[0]},${r[1]}L${r.slice(2).join(",")}`,
                          t && (a += "z"),
                          e.setAttribute("d", a)
                      }
                  }
                  ;
                  t.shapeToPath = ((e,t)=>new Promise((n,l)=>{
                      e[0] && i.traversalNode(e=>-1 !== a.shapeElements.indexOf(e.nodeName), e=>{
                          const t = e.cloneNode();
                          switch (e.nodeName) {
                          case "rect":
                              (e=>{
                                  const t = {
                                      x: "0",
                                      y: "0",
                                      width: "0",
                                      height: "0",
                                      rx: "auto",
                                      ry: "auto"
                                  }
                                    , n = e.attributes;
                                  for (let a = n.length; a--; ) {
                                      const o = n[a];
                                      r.has(o.fullname, t) && (t[o.fullname] = o.value,
                                      e.removeAttribute(o.fullname))
                                  }
                                  "0" !== t.rx && "auto" !== t.rx && "0" !== t.ry || "0" !== t.ry && "auto" !== t.ry && "0" !== t.rx || (e.nodeName = "path",
                                  e.setAttribute("d", `M${t.x},${t.y}h${t.width}v${t.height}h${-t.width}z`))
                              }
                              )(t);
                              break;
                          case "line":
                              (e=>{
                                  const t = {
                                      x1: "0",
                                      y1: "0",
                                      x2: "0",
                                      y2: "0"
                                  }
                                    , n = e.attributes;
                                  for (let a = n.length; a--; ) {
                                      const o = n[a];
                                      r.has(o.fullname, t) && (t[o.fullname] = o.value,
                                      e.removeAttribute(o.fullname))
                                  }
                                  e.nodeName = "path",
                                  e.setAttribute("d", `M${t.x1},${t.y1}L${t.x2},${t.y2}`)
                              }
                              )(t);
                              break;
                          case "polyline":
                              u(t);
                              break;
                          case "polygon":
                              u(t, !0);
                              break;
                          default:
                              t.nodeName = "notneed"
                          }
                          "path" === t.nodeName && o.createTag(t).length <= o.createTag(e).length && Object.assign(e, t)
                      }
                      , t),
                      n()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(14)
                    , o = n(34)
                    , i = n(15)
                    , u = n(5)
                    , l = n(2)
                    , s = n(4)
                    , c = n(1)
                    , m = /\.([^,\*#>+~:{\s\[\.]+)/gi;
                  t.shortenClass = ((e,t)=>new Promise((n,f)=>{
                      if (e[0]) {
                          const e = {};
                          let n, f, p = 0, d = null;
                          const y = (t,n)=>{
                              if (e[t])
                                  return e[t][0];
                              const r = o.createShortenID(p++);
                              return e[t] = [r, n],
                              r
                          }
                          ;
                          c.traversalNode(r.propEq("nodeName", "style"), e=>{
                              n = e,
                              f = e.childNodes[0],
                              (d = a.parse(f.textContent, {
                                  silent: !0
                              })) && (d.stylesheet.rules.forEach(e=>{
                                  "rule" === e.type && (e.ruleId = +new Date,
                                  e.selectors.forEach((t,n)=>{
                                      e.selectors[n] = t.replace(m, (t,n)=>`.${y(n, e.ruleId)}`)
                                  }
                                  ))
                              }
                              ),
                              f.textContent = i.shortenTag(a.stringify(d, {
                                  compress: !0
                              })))
                          }
                          , t),
                          c.traversalNode(l.isTag, t=>{
                              for (let n = t.attributes.length; n--; ) {
                                  const r = t.attributes[n];
                                  if ("class" === r.fullname) {
                                      const n = u.mixWhiteSpace(r.value.trim()).split(/\s/);
                                      for (let t = n.length; t--; )
                                          if (e[n[t]]) {
                                              const r = e[n[t]][0];
                                              delete e[n[t]],
                                              n[t] = r
                                          } else
                                              n.splice(t, 1);
                                      n.length ? r.value = n.join(" ") : t.removeAttribute(r.fullname);
                                      break
                                  }
                              }
                          }
                          , t),
                          Object.values(e).forEach(e=>{
                              const t = new RegExp(`.${e[0]}(?=[,\\*#>+~:{\\s\\[\\.]|$)`);
                              for (let n = d.stylesheet.rules.length; n--; ) {
                                  const r = d.stylesheet.rules[n];
                                  if (r.ruleId === e[1]) {
                                      for (let e = r.selectors.length; e--; )
                                          t.test(r.selectors[e]) && r.selectors.splice(e, 1);
                                      r.selectors.length || d.stylesheet.rules.splice(n, 1);
                                      break
                                  }
                              }
                              d.stylesheet.rules.length ? f.textContent = i.shortenTag(a.stringify(d, {
                                  compress: !0
                              })) : s.rmNode(n)
                          }
                          )
                      }
                      n()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  }),
                  t.startChar = `abcdefghijklmnopqrstuvwxyz${"abcdefghijklmnopqrstuvwxyz".toUpperCase()}_:`,
                  t.nameChar = `${t.startChar}0123456789-.`
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(14)
                    , a = n(0)
                    , o = n(10)
                    , i = n(13)
                    , u = n(24)
                    , l = n(12)
                    , s = n(15)
                    , c = n(16)
                    , m = n(79)
                    , f = n(80)
                    , p = n(18)
                    , d = n(2)
                    , y = n(1)
                    , b = a.pipe(f.toHex, a.toLower, m.fillIn(2))
                    , h = {
                      aliceblue: "#f0f8ff",
                      antiquewhite: "faebd7",
                      aquamarine: "#7fffd4",
                      black: "#000",
                      blanchedalmond: "#ffebcd",
                      blueviolet: "#8a2be2",
                      burlywood: "#deb887",
                      burntsienna: "#ea7e5d",
                      cadetblue: "#5f9ea0",
                      chartreuse: "#7fff00",
                      chocolate: "#d2691e",
                      cornflowerblue: "#6495ed",
                      cornsilk: "#fff8dc",
                      darkblue: "#00008b",
                      darkcyan: "#008b8b",
                      darkgoldenrod: "#b8860b",
                      darkgray: "#a9a9a9",
                      darkgreen: "#006400",
                      darkgrey: "#a9a9a9",
                      darkkhaki: "#bdb76b",
                      darkmagenta: "#8b008b",
                      darkolivegreen: "#556b2f",
                      darkorange: "#ff8c00",
                      darkorchid: "#9932cc",
                      darksalmon: "#e9967a",
                      darkseagreen: "#8fbc8f",
                      darkslateblue: "#483d8b",
                      darkslategray: "#2f4f4f",
                      darkslategrey: "#2f4f4f",
                      darkturquoise: "#00ced1",
                      darkviolet: "#9400d3",
                      deeppink: "#ff1493",
                      deepskyblue: "#00bfff",
                      dodgerblue: "#1e90ff",
                      firebrick: "#b22222",
                      floralwhite: "#fffaf0",
                      forestgreen: "#228b22",
                      gainsboro: "#dcdcdc",
                      ghostwhite: "#f8f8ff",
                      goldenrod: "#daa520",
                      greenyellow: "#adff2f",
                      honeydew: "#f0fff0",
                      indianred: "#cd5c5c",
                      lavender: "#e6e6fa",
                      lavenderblush: "#fff0f5",
                      lawngreen: "#7cfc00",
                      lemonchiffon: "#fffacd",
                      lightblue: "#add8e6",
                      lightcoral: "#f08080",
                      lightcyan: "#e0ffff",
                      lightgoldenrodyellow: "#fafad2",
                      lightgray: "#d3d3d3",
                      lightgreen: "#90ee90",
                      lightgrey: "#d3d3d3",
                      lightpink: "#ffb6c1",
                      lightsalmon: "#ffa07a",
                      lightseagreen: "#20b2aa",
                      lightskyblue: "#87cefa",
                      lightslategray: "#789",
                      lightslategrey: "#789",
                      lightsteelblue: "#b0c4de",
                      lightyellow: "#ffffe0",
                      limegreen: "#32cd32",
                      mediumaquamarine: "#66cdaa",
                      mediumblue: "#0000cd",
                      mediumorchid: "#ba55d3",
                      mediumpurple: "#9370db",
                      mediumseagreen: "#3cb371",
                      mediumslateblue: "#7b68ee",
                      mediumspringgreen: "#00fa9a",
                      mediumturquoise: "#48d1cc",
                      mediumvioletred: "#c71585",
                      midnightblue: "#191970",
                      mintcream: "#f5fffa",
                      mistyrose: "#ffe4e1",
                      moccasin: "#ffe4b5",
                      navajowhite: "#ffdead",
                      olivedrab: "#6b8e23",
                      orangered: "#ff4500",
                      palegoldenrod: "#eee8aa",
                      palegreen: "#98fb98",
                      paleturquoise: "#afeeee",
                      palevioletred: "#db7093",
                      papayawhip: "#ffefd5",
                      peachpuff: "#ffdab9",
                      powderblue: "#b0e0e6",
                      rebeccapurple: "#639",
                      rosybrown: "#bc8f8f",
                      royalblue: "#4169e1",
                      saddlebrown: "#8b4513",
                      sandybrown: "#f4a460",
                      seagreen: "#2e8b57",
                      seashell: "#fff5ee",
                      slateblue: "#6a5acd",
                      slategray: "#708090",
                      slategrey: "#708090",
                      springgreen: "#00ff7f",
                      steelblue: "#4682b4",
                      turquoise: "#40e0d0",
                      white: "#fff",
                      whitesmoke: "#f5f5f5",
                      yellow: "#ff0",
                      yellowgreen: "#9acd32"
                  }
                    , g = new RegExp(`(^|[^a-z])(${Object.keys(h).join("|")})(?=[^a-z]|$)`,"gi")
                    , v = {
                      "#f0ffff": "azure",
                      "#f5f5dc": "beige",
                      "#ffe4c4": "bisque",
                      "#a52a2a": "brown",
                      "#ff7f50": "coral",
                      "#ffd700": "gold",
                      "#808080": "gray",
                      "#008000": "green",
                      "#4b0082": "indigo",
                      "#fffff0": "ivory",
                      "#f0e68c": "khaki",
                      "#faf0e6": "linen",
                      "#800000": "maroon",
                      "#000080": "navy",
                      "#808000": "olive",
                      "#ffa500": "orange",
                      "#da70d6": "orchid",
                      "#cd853f": "peru",
                      "#ffc0cb": "pink",
                      "#dda0dd": "plum",
                      "#800080": "purple",
                      "#f00": "red",
                      "#fa8072": "salmon",
                      "#a0522d": "sienna",
                      "#c0c0c0": "silver",
                      "#fffafa": "snow",
                      "#d2b48c": "tan",
                      "#008080": "teal",
                      "#ff6347": "tomato",
                      "#ee82ee": "violet",
                      "#f5deb3": "wheat"
                  }
                    , I = new RegExp(`(?:${Object.keys(v).join("|")})(?=[^0-9a-f]|$)`,"gi")
                    , N = 255
                    , A = 360
                    , S = 60
                    , C = .5
                    , x = (e,t)=>Math.max(Math.min(e, Math.round(t)), 0)
                    , R = (e,t,n)=>e ? ((e,t)=>Math.round(Math.max(Math.min(100, t), 0) * e / 100))(t, n) : x(t, n)
                    , T = (e,t,n)=>i.toFixed(e, Math.max(Math.min(1, t ? n / 100 : n), 0));
                  function _(e, t, n) {
                      let r, a, o, i, u, l = e % A / S;
                      return r = a = o = n - (u = 2 * t * (n < C ? n : 1 - n)) / 2,
                      a += [i = u * (1 - Math.abs(l % 2 - 1)), u, u, i, 0, 0][l = ~~l],
                      o += [0, 0, i, u, u, i][l],
                      [x(N, (r += [u, i, 0, 0, i, u][l]) * N), x(N, a * N), x(N, o * N)]
                  }
                  const E = "[+-]?(?:\\d+(?:\\.\\d+)?|\\.\\d+)(?:e[+-]?\\d+)?"
                    , w = new RegExp(`((?:rgb|hsl)a?)\\((${E})(%?),(${E})(%?),(${E})(%?)(?:,(${E})(%?))?\\)`,"gi")
                    , V = (e,t,n)=>{
                      let r = u.shorten(n).replace(w, (n,r,a,o,i,u,l,s,c,m)=>{
                          switch (r) {
                          case "rgb":
                              return o === u && o === s ? `#${b(R(o, N, a))}${b(R(o, N, i))}${b(R(o, N, l))}` : "";
                          case "rgba":
                              return o === u && o === s ? e ? `#${b(R(o, N, a))}${b(R(o, N, i))}${b(R(o, N, l))}${b(T(t, m, c))}` : `rgba(${R(o, N, a)},${R(o, N, i)},${R(o, N, l)},${`${T(t, m, c)}`.replace(/^0\./, ".")})` : "";
                          case "hsl":
                              if (!o && u && s) {
                                  const [e,t,n] = _(a, i / 100, l / 100);
                                  return `#${b(e)}${b(t)}${b(n)}`
                              }
                              return "";
                          case "hsla":
                              if (!o && u && s) {
                                  const [n,r,o] = _(a, i / 100, l / 100);
                                  return e ? `#${b(n)}${b(r)}${b(o)}${b(T(t, m, c))}` : `rgba(${n},${r},${o},${`${T(t, m, c)}`.replace(/^0\./, ".")})`
                              }
                              return "";
                          default:
                              return n
                          }
                      }
                      );
                      return r = (r = r.replace(/#([0-9a-f])\1([0-9a-f])\2([0-9a-f])\3(?=[^0-9a-f]|$)/gi, "#$1$2$3")).replace(g, (e,t,n)=>`${t}${h[n]}`).replace(I, e=>`${v[e]}`),
                      e && (r = (r = r.replace(/#([0-9a-f])\1([0-9a-f])\2([0-9a-f])\3([0-9a-f])\4(?=[^0-9a-f]|$)/gi, "#$1$2$3$4")).replace(/transparent/gi, "#0000")),
                      r
                  }
                  ;
                  t.shortenColor = ((e,t)=>new Promise((n,i)=>{
                      e[0] && y.traversalNode(d.isTag, t=>{
                          if (t.attributes.forEach(t=>{
                              if (o.regularAttr[t.fullname].maybeColor)
                                  t.value = V(e[1], e[2], t.value);
                              else if ("style" === t.fullname) {
                                  const n = l.execStyle(t.value);
                                  n.forEach(t=>{
                                      o.regularAttr[t.fullname].maybeColor && (t.value = V(e[1], e[2], t.value))
                                  }
                                  ),
                                  t.value = c.stringifyStyle(n)
                              }
                          }
                          ),
                          "style" === t.nodeName) {
                              const n = r.parse(t.childNodes[0].textContent, {
                                  silent: !0
                              });
                              n && (p.traversalObj(a.both(a.has("property"), a.has("value")), t=>{
                                  o.regularAttr[t.property].maybeColor && (t.value = V(e[1], e[2], t.value))
                              }
                              , n.stylesheet.rules),
                              t.childNodes[0].textContent = s.shortenTag(r.stringify(n, {
                                  compress: !0
                              })))
                          }
                      }
                      , t),
                      n()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0);
                  t.fillIn = r.curry((e,n)=>n.length === e ? n : t.fillIn(e, `0${n}`))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  }),
                  t.toHex = (e=>parseInt(e, 10).toString(16))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(14)
                    , a = n(0)
                    , o = n(10)
                    , i = n(13)
                    , u = n(12)
                    , l = n(15)
                    , s = n(16)
                    , c = n(18)
                    , m = n(2)
                    , f = n(1)
                    , p = n(6)
                    , d = a.curry((e,t)=>t.replace(/\d+(?:\.\d+)?(?:e[+-]?\d+)?/g, t=>`${i.toFixed(e, parseFloat(t))}`.replace(/^0\./, ".")));
                  t.shortenDecimalDigits = ((e,t)=>new Promise((n,i)=>{
                      if (e[0]) {
                          const n = d(e[1])
                            , i = d(e[2]);
                          f.traversalNode(m.isTag, e=>{
                              if ("style" === e.nodeName) {
                                  const t = r.parse(e.childNodes[0].textContent, {
                                      silent: !0
                                  });
                                  t && (c.traversalObj(a.both(a.has("property"), a.has("value")), e=>{
                                      o.regularAttr[e.property].maybeSizeNumber ? e.value = n(e.value) : o.regularAttr[e.property].maybeAccurateNumber && (e.value = i(e.value))
                                  }
                                  , t.stylesheet.rules),
                                  e.childNodes[0].textContent = l.shortenTag(r.stringify(t, {
                                      compress: !0
                                  })))
                              }
                              const t = e.getAttribute("attributeName");
                              e.attributes.forEach(e=>{
                                  if (o.regularAttr[e.fullname].maybeSizeNumber)
                                      e.value = n(e.value);
                                  else if (o.regularAttr[e.fullname].maybeAccurateNumber)
                                      e.value = i(e.value);
                                  else if (-1 !== p.animationAttributes.indexOf(e.fullname))
                                      o.regularAttr[t].maybeSizeNumber ? e.value = n(e.value) : o.regularAttr[t].maybeAccurateNumber && (e.value = i(e.value));
                                  else if ("style" === e.fullname) {
                                      const t = u.execStyle(e.value);
                                      t.forEach(e=>{
                                          o.regularAttr[e.fullname].maybeSizeNumber ? e.value = n(e.value) : o.regularAttr[e.fullname].maybeAccurateNumber && (e.value = i(e.value))
                                      }
                                      ),
                                      e.value = s.stringifyStyle(t)
                                  }
                              }
                              )
                          }
                          , t)
                      }
                      n()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(10)
                    , o = n(2)
                    , i = n(4)
                    , u = n(1)
                    , l = /^url\((["']?)#(.+)\1\)$/
                    , s = /^#(.+)$/
                    , c = (e,t)=>{
                      let n = !1;
                      const r = e.attributes;
                      for (let a = r.length; a--; ) {
                          const o = r[a];
                          if ("id" === o.fullname) {
                              t[o.value] ? n = !0 : e.removeAttribute(o.fullname);
                              break
                          }
                      }
                      if (!n) {
                          const n = e.childNodes;
                          for (let e = n.length; e--; ) {
                              const r = n[e];
                              o.isTag(r) ? c(r, t) : i.rmNode(r)
                          }
                          e.childNodes.length || i.rmNode(e)
                      }
                  }
                  ;
                  t.shortenDefs = ((e,t)=>new Promise((n,m)=>{
                      if (e[0]) {
                          let e;
                          const n = {};
                          u.traversalNode(o.isTag, e=>{
                              e.attributes.forEach(e=>{
                                  if (a.regularAttr[e.fullname].maybeFuncIRI) {
                                      const t = l.exec(e.value);
                                      t && (n[t[2]] = !0)
                                  } else if (a.regularAttr[e.fullname].maybeIRI) {
                                      const t = s.exec(e.value);
                                      t && (n[t[1]] = !0)
                                  }
                              }
                              )
                          }
                          , t),
                          u.traversalNode(r.propEq("nodeName", "defs"), t=>{
                              e ? (t.childNodes.forEach(t=>{
                                  e.appendChild(t)
                              }
                              ),
                              i.rmNode(t)) : e = t
                          }
                          , t),
                          e && c(e, n)
                      }
                      n()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(14)
                    , a = n(34)
                    , o = n(10)
                    , i = n(15)
                    , u = n(2)
                    , l = n(4)
                    , s = n(1)
                    , c = /^url\((["']?)#(.+)\1\)$/
                    , m = /^#(.+)$/
                    , f = /#([^,\*#>+~:{\s\[\.]+)/gi;
                  t.shortenID = ((e,t)=>new Promise((n,p)=>{
                      if (e[0]) {
                          const e = {};
                          let n, p, d = 0, y = null;
                          const b = (t,n,r)=>{
                              if (e[r])
                                  return e[r][0];
                              const o = a.createShortenID(d++);
                              return e[r] = [o, t, n],
                              o
                          }
                          ;
                          s.traversalNode(u.isTag, e=>{
                              "style" === e.nodeName ? (n = e,
                              p = e.childNodes[0],
                              (y = r.parse(p.textContent, {
                                  silent: !0
                              })) && (y.stylesheet.rules.forEach(t=>{
                                  "rule" === t.type && (t.ruleId = +new Date,
                                  t.selectors.forEach((n,r)=>{
                                      t.selectors[r] = n.replace(f, (n,r)=>`#${b(e, t.ruleId, r)}`)
                                  }
                                  ))
                              }
                              ),
                              p.textContent = i.shortenTag(r.stringify(y, {
                                  compress: !0
                              })))) : e.attributes.forEach(t=>{
                                  if (o.regularAttr[t.fullname].maybeFuncIRI) {
                                      const n = c.exec(t.value);
                                      n && (t.value = `url(#${b(e, t.fullname, n[2])})`)
                                  } else if (o.regularAttr[t.fullname].maybeIRI) {
                                      const n = m.exec(t.value);
                                      n && (t.value = `#${b(e, t.fullname, n[1])}`)
                                  }
                              }
                              )
                          }
                          , t),
                          s.traversalNode(u.isTag, t=>{
                              for (let n = t.attributes.length; n--; ) {
                                  const r = t.attributes[n];
                                  if ("id" === r.fullname) {
                                      if (e[r.value]) {
                                          const t = e[r.value][0];
                                          delete e[r.value],
                                          r.value = t
                                      } else
                                          t.removeAttribute(r.fullname);
                                      break
                                  }
                              }
                          }
                          , t),
                          Object.values(e).forEach(e=>{
                              if (e[1])
                                  if ("string" == typeof e[2])
                                      e[1].removeAttribute(e[2]);
                                  else {
                                      const t = new RegExp(`#${e[0]}(?=[,\\*#>+~:{\\s\\[\\.]|$)`);
                                      for (let n = y.stylesheet.rules.length; n--; ) {
                                          const r = y.stylesheet.rules[n];
                                          if (r.ruleId === e[2]) {
                                              for (let e = r.selectors.length; e--; )
                                                  t.test(r.selectors[e]) && r.selectors.splice(e, 1);
                                              r.selectors.length || y.stylesheet.rules.splice(n, 1);
                                              break
                                          }
                                      }
                                      y.stylesheet.rules.length ? p.textContent = i.shortenTag(r.stringify(y, {
                                          compress: !0
                                      })) : l.rmNode(n)
                                  }
                          }
                          )
                      }
                      n()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(0)
                    , a = n(10)
                    , o = n(85)
                    , i = n(12)
                    , u = n(86)
                    , l = n(16)
                    , s = n(17)
                    , c = n(2)
                    , m = n(1)
                    , f = r.pipe(l.stringifyStyle, u.shortenStyle);
                  t.shortenStyleAttr = ((e,t)=>new Promise((n,u)=>{
                      if (e[0]) {
                          let n = !1;
                          m.traversalNode(r.propEq("nodeName", "style"), e=>{
                              n = !0
                          }
                          , t),
                          m.traversalNode(c.isTag, u=>{
                              const l = {};
                              for (let e = u.attributes.length; e--; ) {
                                  const n = u.attributes[e]
                                    , c = a.regularAttr[n.fullname];
                                  if ("style" === n.fullname) {
                                      const e = i.execStyle(n.value)
                                        , c = {};
                                      for (let n = e.length; n--; ) {
                                          const i = e[n]
                                            , m = a.regularAttr[i.fullname];
                                          !c[i.fullname] && m.couldBeStyle && o.checkApply(m, u, t) && s.legalValue(m, i.value) ? (r.has(i.fullname, l) && u.removeAttribute(i.fullname),
                                          c[i.fullname] = !0,
                                          l[i.fullname] = i.value) : e.splice(n, 1)
                                      }
                                      Object.keys(e).length ? n.value = f(e) : u.removeAttribute(n.fullname)
                                  } else
                                      c.couldBeStyle && (!l[n.fullname] && o.checkApply(c, u, t) && s.legalValue(c, n.value) ? l[n.fullname] = n.value : u.removeAttribute(n.fullname))
                              }
                              if (!n || e[1]) {
                                  const e = u.attributes;
                                  if (Object.keys(l).length > 4) {
                                      for (let t = e.length; t--; ) {
                                          const n = e[t];
                                          (a.regularAttr[n.fullname].couldBeStyle || "style" === n.fullname) && u.removeAttribute(n.fullname)
                                      }
                                      u.setAttribute("style", f(Object.keys(l).map(e=>({
                                          name: e,
                                          fullname: e,
                                          value: l[e]
                                      }))))
                                  } else
                                      u.removeAttribute("style"),
                                      e.forEach(e=>{
                                          r.has(e.fullname, l) && delete l[e.fullname]
                                      }
                                      ),
                                      Object.keys(l).forEach(e=>{
                                          u.setAttribute(e, l[e])
                                      }
                                      )
                              }
                          }
                          , t)
                      }
                      n()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(1)
                    , a = n(2)
                    , o = (e,t,n,i)=>{
                      if (-1 !== e.applyTo.indexOf(t.nodeName))
                          return !0;
                      if (-1 !== i.indexOf(t))
                          return;
                      i.push(t);
                      let u = !1;
                      return r.traversalNode(a.isTag, t=>{
                          -1 === i.indexOf(t) && (i.push(t),
                          -1 !== e.applyTo.indexOf(t.nodeName) ? u = !0 : t.hasAttribute("xlink:href") && r.traversalNode(e=>t.getAttribute("xlink:href") === `#${e.getAttribute("id")}`, t=>{
                              o(e, t, n, i) && (u = !0)
                          }
                          , n))
                      }
                      , t),
                      u
                  }
                  ;
                  t.checkApply = ((e,t,n)=>o(e, t, n, []))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(5);
                  t.shortenStyle = (e=>r.mixWhiteSpace(e.trim()).replace(/\s*([@='"#\.\*+>~\[\]\(\){}:,;])\s*/g, "$1").replace(/;$/, ""))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(14)
                    , a = n(0)
                    , o = n(10)
                    , i = n(15)
                    , u = n(5)
                    , l = n(18)
                    , s = n(17)
                    , c = n(88)
                    , m = n(1);
                  t.shortenStyleTag = ((e,t)=>new Promise((n,f)=>{
                      e[0] && m.traversalNode(a.propEq("nodeName", "style"), n=>{
                          const m = n.childNodes[0]
                            , f = r.parse(m.textContent);
                          if (l.traversalObj(a.has("declarations"), (e,t)=>{
                              const n = {};
                              for (let t = e.declarations.length; t--; ) {
                                  const r = e.declarations[t]
                                    , a = r.property;
                                  !n[a] && o.regularAttr[a].couldBeStyle && s.legalValue(o.regularAttr[a], r.value) ? n[a] = !0 : e.declarations.splice(t, 1)
                              }
                              if (!e.declarations.length) {
                                  const n = t.length
                                    , r = t[n - 1];
                                  if (r.splice(r.indexOf(e), 1),
                                  "keyframe" === e.type && !r.length) {
                                      const e = t[n - 3];
                                      e.splice(e.indexOf(t[n - 2]), 1)
                                  }
                              }
                          }
                          , f.stylesheet.rules),
                          e[1]) {
                              const e = {}
                                , n = {};
                              for (let r = 0, a = f.stylesheet.rules.length; r < a; r++) {
                                  const o = f.stylesheet.rules[r];
                                  if ("rule" === o.type) {
                                      for (let e = o.selectors.length; e--; )
                                          c.getBySelector(t, o.selectors[e]).length || o.selectors.splice(e, 1);
                                      if (!o.selectors.length) {
                                          f.stylesheet.rules.splice(r, 1),
                                          r--,
                                          a--;
                                          continue
                                      }
                                      o.selectors.sort((e,t)=>e < t ? -1 : 1),
                                      o.selectors = o.selectors.map(e=>u.mixWhiteSpace(e.trim()));
                                      const i = o.selectors.join(",");
                                      if (e[i]) {
                                          const t = e[i].declarations.concat(o.declarations)
                                            , n = {};
                                          for (let e = t.length; e--; )
                                              n[t[e].property] ? t.splice(e, 1) : n[t[e].property] = !0;
                                          e[i].declarations = t,
                                          f.stylesheet.rules.splice(r, 1),
                                          r--,
                                          a--;
                                          continue
                                      }
                                      e[i] = o,
                                      o.declarations.sort((e,t)=>e.property < t.property ? -1 : 1);
                                      const l = o.declarations.map(e=>`${e.property}:${e.value}`).join(";");
                                      if (n[l]) {
                                          const e = n[l].selectors.concat(o.selectors)
                                            , t = {};
                                          for (let n = e.length; n--; )
                                              t[e[n]] ? e.splice(n, 1) : t[e[n]] = !0;
                                          n[l].selectors = e,
                                          f.stylesheet.rules.splice(r, 1),
                                          r--,
                                          a--;
                                          continue
                                      }
                                      n[l] = o
                                  }
                              }
                          }
                          m.textContent = i.shortenTag(r.stringify(f, {
                              compress: !0
                          }))
                      }
                      , t),
                      n()
                  }
                  ))
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(89)
                    , a = n(2)
                    , o = n(1)
                    , i = n(90)
                    , u = n(35);
                  t.getBySelector = ((e,t)=>{
                      const n = []
                        , l = new RegExp(`^([^\\s>+~#\\.\\[:]+|\\*)?(${i.idChar}|${i.classChar}|${i.attrChar}|${i.pseudoChar})*([\\s>+~]+|$)`);
                      let s = t
                        , c = l.exec(s);
                      for (; c && c[0].length; ) {
                          const e = {
                              id: [],
                              class: [],
                              attr: [],
                              pseudo: []
                          };
                          if (c[1] && ("*" === c[1] ? e.universal = !0 : e.type = c[1]),
                          c[2]) {
                              let t = c[2];
                              const n = new RegExp(`^(?:${i.idChar}|${i.classChar}|${i.attrChar}|${i.pseudoChar}?:)`);
                              let r = n.exec(t);
                              for (; r; ) {
                                  switch (r[0][0]) {
                                  case "#":
                                      e.id.push(r[0].slice(1));
                                      break;
                                  case ".":
                                      e.class.push(r[0].slice(1));
                                      break;
                                  case "[":
                                      const t = r[0].slice(1, -1)
                                        , n = t.indexOf["="];
                                      -1 === n ? e.attr.push({
                                          key: t
                                      }) : u.attrModifier[t[n - 1]] ? e.attr.push({
                                          key: t.slice(0, n - 1),
                                          modifier: u.attrModifier[t[n - 1]],
                                          value: t.slice(n + 1)
                                      }) : e.attr.push({
                                          key: t.slice(0, n),
                                          value: t.slice(n + 1)
                                      });
                                      break;
                                  case ":":
                                      const a = r[0].replace(/^:+/, "")
                                        , o = a.indexOf("(");
                                      -1 === o ? e.pseudo.push({
                                          func: a
                                      }) : e.pseudo.push({
                                          func: a.slice(0, o),
                                          value: a.slice(o + 1, -1)
                                      })
                                  }
                                  t = t.slice(r[0].length),
                                  r = n.exec(t)
                              }
                          }
                          if (c[3]) {
                              const t = c[3].trim();
                              u.selectorUnitCombinator[t] && (e.combinator = u.selectorUnitCombinator[t])
                          }
                          n.push(e),
                          s = s.slice(c[0].length),
                          c = l.exec(s)
                      }
                      const m = n.length
                        , f = [];
                      return o.traversalNode(e=>a.isTag(e) && r.matchSelector(e, n[m - 1]), e=>{
                          let t = m - 2
                            , a = e;
                          for (; t >= 0; ) {
                              switch (n[t].combinator) {
                              case u.selectorUnitCombinator[">"]:
                                  if (!r.matchSelector(a.parentNode, n[t]))
                                      return;
                                  a = e.parentNode;
                                  break;
                              case u.selectorUnitCombinator["+"]:
                                  const o = a.parentNode.childNodes
                                    , i = o.indexOf(a);
                                  if (i <= 0 || !r.matchSelector(o[i - 1], n[t]))
                                      return;
                                  a = o[i - 1];
                                  break;
                              case u.selectorUnitCombinator["~"]:
                                  const l = a.parentNode.childNodes
                                    , s = l.indexOf(a);
                                  if (s <= 0)
                                      return;
                                  let c;
                                  for (let e = s - 1; e--; )
                                      if (c = l[e],
                                      r.matchSelector(c, n[t])) {
                                          a = c;
                                          break
                                      }
                                  if (a !== c)
                                      return;
                                  break;
                              default:
                                  let m = a.parentNode;
                                  for (; "#document" !== m.nodeName; ) {
                                      if (r.matchSelector(m, n[t])) {
                                          a = m;
                                          break
                                      }
                                      m = m.parentNode
                                  }
                                  if (a !== m)
                                      return
                              }
                              t--
                          }
                          f.push(e)
                      }
                      , e),
                      f
                  }
                  )
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  });
                  const r = n(35);
                  t.matchSelector = ((e,t)=>{
                      if (!t)
                          return !1;
                      if (t.type && t.type !== e.nodeName)
                          return !1;
                      if (t.class) {
                          let n = e.getAttribute("class")
                            , r = [];
                          n && (r = n.trim().split(/\s+/));
                          for (let e = t.class.length; e--; )
                              if (-1 === r.indexOf(t.class[e]))
                                  return !1
                      }
                      if (t.id) {
                          let n = e.getAttribute("id");
                          n && (n = n.trim());
                          for (let e = t.id.length; e--; )
                              if (n !== t.id[e])
                                  return !1
                      }
                      if (t.attr)
                          for (let n = t.attr.length; n--; ) {
                              const a = t.attr[n];
                              let o = e.getAttribute(a.key);
                              if (null === o)
                                  return !1;
                              if (a.value)
                                  switch (o = o.trim().toLowerCase(),
                                  a.modifier) {
                                  case r.attrModifier["^"]:
                                      if (0 !== o.indexOf(a.value))
                                          return !1;
                                      break;
                                  case r.attrModifier.$:
                                      if (o.lastIndexOf(a.value) !== o.length - a.value.length)
                                          return !1;
                                      break;
                                  case r.attrModifier["~"]:
                                      if (-1 === o.split(/\s+/).indexOf(a.value))
                                          return !1;
                                      break;
                                  case r.attrModifier["|"]:
                                      if (o !== a.value && 0 !== o.indexOf(`${a.value}-`))
                                          return !1;
                                      break;
                                  case r.attrModifier["*"]:
                                      if (-1 === o.indexOf(a.value))
                                          return !1;
                                      break;
                                  default:
                                      if (o !== a.value)
                                          return !1
                                  }
                          }
                      return !0
                  }
                  )
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  }),
                  t.idChar = "#[^#\\.\\[\\*:]+",
                  t.classChar = "\\.[^#\\.\\[\\*:]+",
                  t.attrChar = "\\[(?:[a-zA-Z][a-zA-Z0-9\\-]*\\|)?[a-zA-Z][a-zA-Z0-9\\-]*(?:[\\|\\^\\$\\*]?=(?:'[^']*'|\"[^\"]*\"|[^'\"\\]]+))?\\]",
                  t.pseudoChar = "\\:{1,2}[a-zA-Z-]+(?:\\((?:[^\\)]+|[^\\(]+\\([^\\)]+\\))\\))?"
              }
              , function(e, t, n) {
                  "use strict";
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  }),
                  t.toArray = (e=>Array.isArray(e) ? e : [e])
              }
              ])
          }
          ,
          e.exports = r()
      }
      ).call(t, n("9AUj"))
  },
  mwrz: function(e, t) {
      "function" == typeof Object.create ? e.exports = function(e, t) {
          t && (e.super_ = t,
          e.prototype = Object.create(t.prototype, {
              constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
              }
          }))
      }
      : e.exports = function(e, t) {
          if (t) {
              e.super_ = t;
              var n = function() {};
              n.prototype = t.prototype,
              e.prototype = new n,
              e.prototype.constructor = e
          }
      }
  },
  oi2c: function(e, t, n) {
      var r = n("hBSA");
      e.exports = function(e) {
          return "\\" === r.sep ? e.replace(/\\/g, "/").replace(/^[a-z]:\/?/i, "/") : e
      }
  },
  "u+5+": function(e, t, n) {
      var r = n("dt0l")
        , a = n("mwrz");
      function o(e) {
          e = e || {},
          r.call(this, e),
          this.indentation = e.indent
      }
      e.exports = o,
      a(o, r),
      o.prototype.compile = function(e) {
          return this.stylesheet(e)
      }
      ,
      o.prototype.stylesheet = function(e) {
          return this.mapVisit(e.stylesheet.rules, "\n\n")
      }
      ,
      o.prototype.comment = function(e) {
          return this.emit(this.indent() + "/*" + e.comment + "*/", e.position)
      }
      ,
      o.prototype.import = function(e) {
          return this.emit("@import " + e.import + ";", e.position)
      }
      ,
      o.prototype.media = function(e) {
          return this.emit("@media " + e.media, e.position) + this.emit(" {\n" + this.indent(1)) + this.mapVisit(e.rules, "\n\n") + this.emit(this.indent(-1) + "\n}")
      }
      ,
      o.prototype.document = function(e) {
          var t = "@" + (e.vendor || "") + "document " + e.document;
          return this.emit(t, e.position) + this.emit("  {\n" + this.indent(1)) + this.mapVisit(e.rules, "\n\n") + this.emit(this.indent(-1) + "\n}")
      }
      ,
      o.prototype.charset = function(e) {
          return this.emit("@charset " + e.charset + ";", e.position)
      }
      ,
      o.prototype.namespace = function(e) {
          return this.emit("@namespace " + e.namespace + ";", e.position)
      }
      ,
      o.prototype.supports = function(e) {
          return this.emit("@supports " + e.supports, e.position) + this.emit(" {\n" + this.indent(1)) + this.mapVisit(e.rules, "\n\n") + this.emit(this.indent(-1) + "\n}")
      }
      ,
      o.prototype.keyframes = function(e) {
          return this.emit("@" + (e.vendor || "") + "keyframes " + e.name, e.position) + this.emit(" {\n" + this.indent(1)) + this.mapVisit(e.keyframes, "\n") + this.emit(this.indent(-1) + "}")
      }
      ,
      o.prototype.keyframe = function(e) {
          var t = e.declarations;
          return this.emit(this.indent()) + this.emit(e.values.join(", "), e.position) + this.emit(" {\n" + this.indent(1)) + this.mapVisit(t, "\n") + this.emit(this.indent(-1) + "\n" + this.indent() + "}\n")
      }
      ,
      o.prototype.page = function(e) {
          var t = e.selectors.length ? e.selectors.join(", ") + " " : "";
          return this.emit("@page " + t, e.position) + this.emit("{\n") + this.emit(this.indent(1)) + this.mapVisit(e.declarations, "\n") + this.emit(this.indent(-1)) + this.emit("\n}")
      }
      ,
      o.prototype["font-face"] = function(e) {
          return this.emit("@font-face ", e.position) + this.emit("{\n") + this.emit(this.indent(1)) + this.mapVisit(e.declarations, "\n") + this.emit(this.indent(-1)) + this.emit("\n}")
      }
      ,
      o.prototype.host = function(e) {
          return this.emit("@host", e.position) + this.emit(" {\n" + this.indent(1)) + this.mapVisit(e.rules, "\n\n") + this.emit(this.indent(-1) + "\n}")
      }
      ,
      o.prototype["custom-media"] = function(e) {
          return this.emit("@custom-media " + e.name + " " + e.media + ";", e.position)
      }
      ,
      o.prototype.rule = function(e) {
          var t = this.indent()
            , n = e.declarations;
          return n.length ? this.emit(e.selectors.map(function(e) {
              return t + e
          }).join(",\n"), e.position) + this.emit(" {\n") + this.emit(this.indent(1)) + this.mapVisit(n, "\n") + this.emit(this.indent(-1)) + this.emit("\n" + this.indent() + "}") : ""
      }
      ,
      o.prototype.declaration = function(e) {
          return this.emit(this.indent()) + this.emit(e.property + ": " + e.value, e.position) + this.emit(";")
      }
      ,
      o.prototype.indent = function(e) {
          return this.level = this.level || 1,
          null != e ? (this.level += e,
          "") : Array(this.level).join(this.indentation || "  ")
      }
  },
  xO9Z: function(e, t) {
      t.GREATEST_LOWER_BOUND = 1,
      t.LEAST_UPPER_BOUND = 2,
      t.search = function(e, n, r, a) {
          if (0 === n.length)
              return -1;
          var o = function e(n, r, a, o, i, u) {
              var l = Math.floor((r - n) / 2) + n
                , s = i(a, o[l], !0);
              return 0 === s ? l : s > 0 ? r - l > 1 ? e(l, r, a, o, i, u) : u == t.LEAST_UPPER_BOUND ? r < o.length ? r : -1 : l : l - n > 1 ? e(n, l, a, o, i, u) : u == t.LEAST_UPPER_BOUND ? l : n < 0 ? -1 : n
          }(-1, n.length, e, n, r, a || t.GREATEST_LOWER_BOUND);
          if (o < 0)
              return -1;
          for (; o - 1 >= 0 && 0 === r(n[o], n[o - 1], !0); )
              --o;
          return o
      }
  }
});
//# sourceMappingURL=0.eac40e1dd82492eaa18a.js.map
