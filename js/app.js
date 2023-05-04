(() => {
  var e = {
      807: (e) => {
        var t = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
        e.exports = t;
      },
    },
    t = {};
  function s(i) {
    var n = t[i];
    if (void 0 !== n) return n.exports;
    var a = (t[i] = { exports: {} });
    return e[i](a, a.exports, s), a.exports;
  }
  (() => {
    "use strict";
    var e, t;
    function i(e, t) {
      if (null == e) return {};
      var s,
        i,
        n = {},
        a = Object.keys(e);
      for (i = 0; i < a.length; i++)
        (s = a[i]), t.indexOf(s) >= 0 || (n[s] = e[s]);
      return n;
    }
    function n(e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return new n.InputMask(e, t);
    }
    (e = window),
      (t = function () {
        return (function (e) {
          var t = {};
          function s(i) {
            if (t[i]) return t[i].exports;
            var n = (t[i] = { i, l: !1, exports: {} });
            return e[i].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
          }
          return (
            (s.m = e),
            (s.c = t),
            (s.d = function (e, t, i) {
              s.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: i });
            }),
            (s.r = function (e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (s.t = function (e, t) {
              if ((1 & t && (e = s(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var i = Object.create(null);
              if (
                (s.r(i),
                Object.defineProperty(i, "default", {
                  enumerable: !0,
                  value: e,
                }),
                2 & t && "string" != typeof e)
              )
                for (var n in e)
                  s.d(
                    i,
                    n,
                    function (t) {
                      return e[t];
                    }.bind(null, n)
                  );
              return i;
            }),
            (s.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return s.d(t, "a", t), t;
            }),
            (s.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (s.p = ""),
            s((s.s = 0))
          );
        })([
          function (e, t, s) {
            s(1);
            var i = [],
              n = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              a = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
              r = {
                t: "top",
                r: "right",
                b: "bottom",
                l: "left",
                c: "centered",
              };
            function l() {}
            var o = ["click", "focusin", "keydown", "input"];
            function u(e) {
              return Array.isArray(e)
                ? e.map(u)
                : "[object Object]" === {}.toString.call(e)
                ? Object.keys(e).reduce(function (t, s) {
                    return (t[s] = u(e[s])), t;
                  }, {})
                : e;
            }
            function c(e, t) {
              var s = e.calendar.querySelector(".qs-overlay"),
                i = s && !s.classList.contains("qs-hidden");
              (t = t || new Date(e.currentYear, e.currentMonth)),
                (e.calendar.innerHTML = [h(t, e, i), d(t, e, i), p(e, i)].join(
                  ""
                )),
                i &&
                  setTimeout(function () {
                    A(!0, e);
                  }, 10);
            }
            function h(e, t, s) {
              return [
                '<div class="qs-controls' + (s ? " qs-blur" : "") + '">',
                '<div class="qs-arrow qs-left"></div>',
                '<div class="qs-month-year">',
                '<span class="qs-month">' + t.months[e.getMonth()] + "</span>",
                '<span class="qs-year">' + e.getFullYear() + "</span>",
                "</div>",
                '<div class="qs-arrow qs-right"></div>',
                "</div>",
              ].join("");
            }
            function d(e, t, s) {
              var i = t.currentMonth,
                n = t.currentYear,
                a = t.dateSelected,
                r = t.maxDate,
                l = t.minDate,
                o = t.showAllDates,
                u = t.days,
                c = t.disabledDates,
                h = t.disabler,
                d = t.noWeekends,
                p = t.startDay,
                g = t.weekendIndices,
                f = t.events,
                m = t.getRange ? t.getRange() : {},
                v = +m.start,
                b = +m.end,
                E = new Date(),
                S = n === E.getFullYear() && i === E.getMonth(),
                k = y(new Date(e).setDate(1)),
                A = k.getDay() - p,
                _ = A < 0 ? 7 : 0;
              k.setMonth(k.getMonth() + 1), k.setDate(0);
              var C = k.getDate(),
                x = [],
                w = _ + 7 * (((A + C) / 7) | 0);
              (w += (A + C) % 7 ? 7 : 0), 0 !== p && 0 === A && (w += 7);
              for (var D = 1; D <= w; D++) {
                var O = (D - 1) % 7,
                  F = u[O],
                  M = D - (A >= 0 ? A : 7 + A),
                  T = new Date(n, i, M),
                  B = f[+T],
                  L = "qs-num",
                  P = '<span class="qs-num">' + T.getDate() + "</span>",
                  I = v && b && +T >= v && +T <= b;
                M < 1 || M > C
                  ? ((L = "qs-empty qs-outside-current-month"),
                    o
                      ? (B && (L += " qs-event"), (L += " qs-disabled"))
                      : (P = ""))
                  : (((l && T < l) ||
                      (r && T > r) ||
                      h(T) ||
                      c.some(function (e) {
                        return e === +T;
                      }) ||
                      (d &&
                        g.some(function (e) {
                          return e === O;
                        }))) &&
                      (L = "qs-disabled"),
                    B && (L += " qs-event"),
                    S && M === E.getDate() && (L += " qs-current"),
                    +T == +a && (L += " qs-active"),
                    I &&
                      ((L += " qs-range-date-" + O),
                      v !== b &&
                        (L +=
                          +T === v
                            ? " qs-range-date-start qs-active"
                            : +T === b
                            ? " qs-range-date-end qs-active"
                            : " qs-range-date-middle"))),
                  x.push(
                    '<div class="qs-square ' + L + " " + F + '">' + P + "</div>"
                  );
              }
              var q = u
                .map(function (e) {
                  return '<div class="qs-square qs-day">' + e + "</div>";
                })
                .concat(x);
              if (q.length % 7 != 0)
                throw "Calendar not constructed properly. The # of squares should be a multiple of 7.";
              return (
                q.unshift(
                  '<div class="qs-squares' + (s ? " qs-blur" : "") + '">'
                ),
                q.push("</div>"),
                q.join("")
              );
            }
            function p(e, t) {
              var s = e.overlayPlaceholder,
                i = e.overlayButton;
              return [
                '<div class="qs-overlay' + (t ? "" : " qs-hidden") + '">',
                "<div>",
                '<input class="qs-overlay-year" placeholder="' + s + '" />',
                '<div class="qs-close">&#10005;</div>',
                "</div>",
                '<div class="qs-overlay-month-container">' +
                  e.overlayMonths
                    .map(function (e, t) {
                      return [
                        '<div class="qs-overlay-month" data-month-num="' +
                          t +
                          '">',
                        '<span data-month-num="' + t + '">' + e + "</span>",
                        "</div>",
                      ].join("");
                    })
                    .join("") +
                  "</div>",
                '<div class="qs-submit qs-disabled">' + i + "</div>",
                "</div>",
              ].join("");
            }
            function g(e, t, s) {
              var i = t.el,
                n = t.calendar.querySelector(".qs-active"),
                a = e.textContent,
                r = t.sibling;
              ((i.disabled || i.readOnly) && t.respectDisabledReadOnly) ||
                ((t.dateSelected = s
                  ? void 0
                  : new Date(t.currentYear, t.currentMonth, a)),
                n && n.classList.remove("qs-active"),
                s || e.classList.add("qs-active"),
                m(i, t, s),
                s || S(t),
                r &&
                  (f({ instance: t, deselect: s }),
                  t.first &&
                    !r.dateSelected &&
                    ((r.currentYear = t.currentYear),
                    (r.currentMonth = t.currentMonth),
                    (r.currentMonthName = t.currentMonthName)),
                  c(t),
                  c(r)),
                t.onSelect(t, s ? void 0 : new Date(t.dateSelected)));
            }
            function f(e) {
              var t = e.instance.first ? e.instance : e.instance.sibling,
                s = t.sibling;
              t === e.instance
                ? e.deselect
                  ? ((t.minDate = t.originalMinDate),
                    (s.minDate = s.originalMinDate))
                  : (s.minDate = t.dateSelected)
                : e.deselect
                ? ((s.maxDate = s.originalMaxDate),
                  (t.maxDate = t.originalMaxDate))
                : (t.maxDate = s.dateSelected);
            }
            function m(e, t, s) {
              if (!t.nonInput)
                return s
                  ? (e.value = "")
                  : t.formatter !== l
                  ? t.formatter(e, t.dateSelected, t)
                  : void (e.value = t.dateSelected.toDateString());
            }
            function v(e, t, s, i) {
              s || i
                ? (s && (t.currentYear = +s), i && (t.currentMonth = +i))
                : ((t.currentMonth += e.contains("qs-right") ? 1 : -1),
                  12 === t.currentMonth
                    ? ((t.currentMonth = 0), t.currentYear++)
                    : -1 === t.currentMonth &&
                      ((t.currentMonth = 11), t.currentYear--)),
                (t.currentMonthName = t.months[t.currentMonth]),
                c(t),
                t.onMonthChange(t);
            }
            function b(e) {
              if (!e.noPosition) {
                var t = e.position.top,
                  s = e.position.right;
                if (e.position.centered)
                  return e.calendarContainer.classList.add("qs-centered");
                var i = [e.parent, e.el, e.calendarContainer].map(function (e) {
                    return e.getBoundingClientRect();
                  }),
                  n = i[0],
                  a = i[1],
                  r = i[2],
                  l =
                    a.top -
                    n.top +
                    e.parent.scrollTop -
                    (t ? r.height : -1 * a.height) +
                    "px",
                  o = a.left - n.left + (s ? a.width - r.width : 0) + "px";
                e.calendarContainer.style.setProperty("top", l),
                  e.calendarContainer.style.setProperty("left", o);
              }
            }
            function E(e) {
              return (
                "[object Date]" === {}.toString.call(e) &&
                "Invalid Date" !== e.toString()
              );
            }
            function y(e) {
              if (E(e) || ("number" == typeof e && !isNaN(e))) {
                var t = new Date(+e);
                return new Date(t.getFullYear(), t.getMonth(), t.getDate());
              }
            }
            function S(e) {
              e.disabled ||
                (!e.calendarContainer.classList.contains("qs-hidden") &&
                  !e.alwaysShow &&
                  (A(!0, e),
                  e.calendarContainer.classList.add("qs-hidden"),
                  e.onHide(e)));
            }
            function k(e) {
              e.disabled ||
                (e.calendarContainer.classList.remove("qs-hidden"),
                b(e),
                e.onShow(e));
            }
            function A(e, t) {
              var s = t.calendar;
              if (s) {
                var i = s.querySelector(".qs-overlay"),
                  n = i.querySelector(".qs-overlay-year"),
                  a = s.querySelector(".qs-controls"),
                  r = s.querySelector(".qs-squares");
                e
                  ? (i.classList.add("qs-hidden"),
                    a.classList.remove("qs-blur"),
                    r.classList.remove("qs-blur"),
                    (n.value = ""))
                  : (i.classList.remove("qs-hidden"),
                    a.classList.add("qs-blur"),
                    r.classList.add("qs-blur"),
                    n.focus());
              }
            }
            function _(e, t, s, i) {
              var n = isNaN(+new Date().setFullYear(t.value || void 0)),
                a = n ? null : t.value;
              13 === (e.which || e.keyCode) || "click" === e.type
                ? i
                  ? v(null, s, a, i)
                  : n || t.classList.contains("qs-disabled") || v(null, s, a, i)
                : s.calendar.contains(t) &&
                  s.calendar
                    .querySelector(".qs-submit")
                    .classList[n ? "add" : "remove"]("qs-disabled");
            }
            function C(e) {
              var t = e.type,
                s = e.target,
                n = s.classList,
                a = i.filter(function (e) {
                  return e.calendar.contains(s) || e.el === s;
                })[0],
                r = a && a.calendar.contains(s);
              if (!(a && a.isMobile && a.disableMobile))
                if ("click" === t) {
                  if (!a) return i.forEach(S);
                  if (a.disabled) return;
                  var l = a.calendar,
                    o = a.calendarContainer,
                    u = a.disableYearOverlay,
                    c = a.nonInput,
                    h = l.querySelector(".qs-overlay-year"),
                    d = !!l.querySelector(".qs-hidden"),
                    p = l.querySelector(".qs-month-year").contains(s),
                    f = s.dataset.monthNum;
                  if (a.noPosition && !r)
                    (o.classList.contains("qs-hidden") ? k : S)(a);
                  else if (n.contains("qs-arrow")) v(n, a);
                  else if (p || n.contains("qs-close")) u || A(!d, a);
                  else if (f) _(e, h, a, f);
                  else {
                    if (n.contains("qs-num")) {
                      var m = "SPAN" === s.nodeName ? s.parentNode : s;
                      return void (m.classList.contains("qs-active")
                        ? g(m, a, !0)
                        : m.classList.contains("qs-disabled") || g(m, a));
                    }
                    n.contains("qs-submit") && !n.contains("qs-disabled")
                      ? _(e, h, a)
                      : c && s === a.el && k(a);
                  }
                } else if ("focusin" === t && a)
                  k(a),
                    i.forEach(function (e) {
                      e !== a && S(e);
                    });
                else if ("keydown" === t && a && !a.disabled) {
                  var b = !a.calendar
                    .querySelector(".qs-overlay")
                    .classList.contains("qs-hidden");
                  13 === (e.which || e.keyCode) && b && r
                    ? _(e, s, a)
                    : 27 === (e.which || e.keyCode) && b && r && A(!0, a);
                } else if ("input" === t) {
                  if (!a || !a.calendar.contains(s)) return;
                  var E = a.calendar.querySelector(".qs-submit"),
                    y = s.value
                      .split("")
                      .reduce(function (e, t) {
                        return e || "0" !== t
                          ? e + (t.match(/[0-9]/) ? t : "")
                          : "";
                      }, "")
                      .slice(0, 4);
                  (s.value = y),
                    E.classList[4 === y.length ? "remove" : "add"](
                      "qs-disabled"
                    );
                }
            }
            function x() {
              k(this);
            }
            function w() {
              S(this);
            }
            function D(e, t) {
              var s = y(e),
                i = this.currentYear,
                n = this.currentMonth,
                a = this.sibling;
              if (null == e)
                return (
                  (this.dateSelected = void 0),
                  m(this.el, this, !0),
                  a && (f({ instance: this, deselect: !0 }), c(a)),
                  c(this),
                  this
                );
              if (!E(e)) throw "`setDate` needs a JavaScript Date object.";
              if (
                this.disabledDates.some(function (e) {
                  return +e == +s;
                }) ||
                s < this.minDate ||
                s > this.maxDate
              )
                throw "You can't manually set a date that's disabled.";
              return (
                (this.dateSelected = s),
                t &&
                  ((this.currentYear = s.getFullYear()),
                  (this.currentMonth = s.getMonth()),
                  (this.currentMonthName = this.months[s.getMonth()])),
                m(this.el, this),
                a && (f({ instance: this }), c(a)),
                ((i === s.getFullYear() && n === s.getMonth()) || t) &&
                  c(this, s),
                this
              );
            }
            function O(e) {
              return M(this, e, !0);
            }
            function F(e) {
              return M(this, e);
            }
            function M(e, t, s) {
              var i = e.dateSelected,
                n = e.first,
                a = e.sibling,
                r = e.minDate,
                l = e.maxDate,
                o = y(t),
                u = s ? "Min" : "Max";
              function h() {
                return "original" + u + "Date";
              }
              function d() {
                return u.toLowerCase() + "Date";
              }
              function p() {
                return "set" + u;
              }
              function g() {
                throw "Out-of-range date passed to " + p();
              }
              if (null == t)
                (e[h()] = void 0),
                  a
                    ? ((a[h()] = void 0),
                      s
                        ? ((n && !i) || (!n && !a.dateSelected)) &&
                          ((e.minDate = void 0), (a.minDate = void 0))
                        : ((n && !a.dateSelected) || (!n && !i)) &&
                          ((e.maxDate = void 0), (a.maxDate = void 0)))
                    : (e[d()] = void 0);
              else {
                if (!E(t)) throw "Invalid date passed to " + p();
                a
                  ? (((n && s && o > (i || l)) ||
                      (n && !s && o < (a.dateSelected || r)) ||
                      (!n && s && o > (a.dateSelected || l)) ||
                      (!n && !s && o < (i || r))) &&
                      g(),
                    (e[h()] = o),
                    (a[h()] = o),
                    ((s && ((n && !i) || (!n && !a.dateSelected))) ||
                      (!s && ((n && !a.dateSelected) || (!n && !i)))) &&
                      ((e[d()] = o), (a[d()] = o)))
                  : (((s && o > (i || l)) || (!s && o < (i || r))) && g(),
                    (e[d()] = o));
              }
              return a && c(a), c(e), e;
            }
            function T() {
              var e = this.first ? this : this.sibling,
                t = e.sibling;
              return { start: e.dateSelected, end: t.dateSelected };
            }
            function B() {
              var e = this.inlinePosition,
                t = this.parent,
                s = this.calendarContainer,
                n = this.el,
                a = this.sibling,
                r = this;
              for (var l in (e &&
                (i.some(function (e) {
                  return e !== r && e.parent === t;
                }) ||
                  t.style.setProperty("position", null)),
              s.remove(),
              (i = i.filter(function (e) {
                return e.el !== n;
              })),
              a && delete a.sibling,
              this))
                delete this[l];
              i.length ||
                o.forEach(function (e) {
                  document.removeEventListener(e, C);
                });
            }
            e.exports = function (e, t) {
              i.length ||
                o.forEach(function (e) {
                  document.addEventListener(e, C);
                });
              var s = (function (e, t) {
                var s = e;
                if (
                  ("string" == typeof s &&
                    (s =
                      "#" === s[0]
                        ? document.getElementById(s.slice(1))
                        : document.querySelector(s)),
                  !s)
                )
                  throw "No selector / element found.";
                var o = (function (e, t) {
                    if (
                      i.some(function (e) {
                        return e.el === t;
                      })
                    )
                      throw "A datepicker already exists on that element.";
                    var s = u(e);
                    s.events &&
                      (s.events = s.events.reduce(function (e, t) {
                        if (!E(t))
                          throw '"options.events" must only contain valid JavaScript Date objects.';
                        return (e[+y(t)] = !0), e;
                      }, {})),
                      [
                        "startDate",
                        "dateSelected",
                        "minDate",
                        "maxDate",
                      ].forEach(function (e) {
                        var t = s[e];
                        if (t && !E(t))
                          throw (
                            '"options.' +
                            e +
                            '" needs to be a valid JavaScript Date object.'
                          );
                        s[e] = y(t);
                      });
                    var a = s.position,
                      o = s.maxDate,
                      c = s.minDate,
                      h = s.dateSelected,
                      d = s.overlayPlaceholder,
                      p = s.overlayButton,
                      g = s.startDay,
                      f = s.id;
                    if (
                      ((s.startDate = y(s.startDate || h || new Date())),
                      (s.disabledDates = (s.disabledDates || []).map(function (
                        e
                      ) {
                        var t = +y(e);
                        if (!E(e))
                          throw 'You supplied an invalid date to "options.disabledDates".';
                        if (t === +y(h))
                          throw '"disabledDates" cannot contain the same date as "dateSelected".';
                        return t;
                      })),
                      s.hasOwnProperty("id") && null == f)
                    )
                      throw "Id cannot be `null` or `undefined`";
                    if (null != f) {
                      var m = i.filter(function (e) {
                        return e.id === f;
                      });
                      if (m.length > 1)
                        throw "Only two datepickers can share an id.";
                      m.length
                        ? ((s.second = !0), (s.sibling = m[0]))
                        : (s.first = !0);
                    }
                    var v = ["tr", "tl", "br", "bl", "c"].some(function (e) {
                      return a === e;
                    });
                    if (a && !v)
                      throw '"options.position" must be one of the following: tl, tr, bl, br, or c.';
                    if (
                      ((s.position = (function (e) {
                        var t = e[0],
                          s = e[1],
                          i = {};
                        return (i[r[t]] = 1), s && (i[r[s]] = 1), i;
                      })(a || "bl")),
                      o < c)
                    )
                      throw '"maxDate" in options is less than "minDate".';
                    if (h) {
                      function k(e) {
                        throw (
                          '"dateSelected" in options is ' +
                          (e ? "less" : "greater") +
                          ' than "' +
                          (e || "max") +
                          'Date".'
                        );
                      }
                      c > h && k("min"), o < h && k();
                    }
                    if (
                      ([
                        "onSelect",
                        "onShow",
                        "onHide",
                        "onMonthChange",
                        "formatter",
                        "disabler",
                      ].forEach(function (e) {
                        "function" != typeof s[e] && (s[e] = l);
                      }),
                      [
                        "customDays",
                        "customMonths",
                        "customOverlayMonths",
                      ].forEach(function (e, t) {
                        var i = s[e],
                          n = t ? 12 : 7;
                        if (i) {
                          if (
                            !Array.isArray(i) ||
                            i.length !== n ||
                            i.some(function (e) {
                              return "string" != typeof e;
                            })
                          )
                            throw (
                              '"' +
                              e +
                              '" must be an array with ${num} strings.'
                            );
                          s[t ? (t < 2 ? "months" : "overlayMonths") : "days"] =
                            i;
                        }
                      }),
                      g && g > 0 && g < 7)
                    ) {
                      var b = (s.customDays || n).slice(),
                        S = b.splice(0, g);
                      (s.customDays = b.concat(S)),
                        (s.startDay = +g),
                        (s.weekendIndices = [b.length - 1, b.length]);
                    } else (s.startDay = 0), (s.weekendIndices = [6, 0]);
                    return (
                      "string" != typeof d && delete s.overlayPlaceholder,
                      "string" != typeof p && delete s.overlayButton,
                      s
                    );
                  })(t || { startDate: y(new Date()), position: "bl" }, s),
                  c = s === document.body,
                  h = c ? document.body : s.parentElement,
                  d = document.createElement("div"),
                  p = document.createElement("div");
                (d.className = "qs-datepicker-container qs-hidden"),
                  (p.className = "qs-datepicker");
                var g = {
                  el: s,
                  parent: h,
                  nonInput: "INPUT" !== s.nodeName,
                  noPosition: c,
                  position: !c && o.position,
                  startDate: o.startDate,
                  dateSelected: o.dateSelected,
                  disabledDates: o.disabledDates,
                  minDate: o.minDate,
                  maxDate: o.maxDate,
                  noWeekends: !!o.noWeekends,
                  weekendIndices: o.weekendIndices,
                  calendarContainer: d,
                  calendar: p,
                  currentMonth: (o.startDate || o.dateSelected).getMonth(),
                  currentMonthName: (o.months || a)[
                    (o.startDate || o.dateSelected).getMonth()
                  ],
                  currentYear: (o.startDate || o.dateSelected).getFullYear(),
                  events: o.events || {},
                  setDate: D,
                  remove: B,
                  setMin: O,
                  setMax: F,
                  show: x,
                  hide: w,
                  onSelect: o.onSelect,
                  onShow: o.onShow,
                  onHide: o.onHide,
                  onMonthChange: o.onMonthChange,
                  formatter: o.formatter,
                  disabler: o.disabler,
                  months: o.months || a,
                  days: o.customDays || n,
                  startDay: o.startDay,
                  overlayMonths:
                    o.overlayMonths ||
                    (o.months || a).map(function (e) {
                      return e.slice(0, 3);
                    }),
                  overlayPlaceholder: o.overlayPlaceholder || "4-digit year",
                  overlayButton: o.overlayButton || "Submit",
                  disableYearOverlay: !!o.disableYearOverlay,
                  disableMobile: !!o.disableMobile,
                  isMobile: "ontouchstart" in window,
                  alwaysShow: !!o.alwaysShow,
                  id: o.id,
                  showAllDates: !!o.showAllDates,
                  respectDisabledReadOnly: !!o.respectDisabledReadOnly,
                  first: o.first,
                  second: o.second,
                };
                if (o.sibling) {
                  var f = o.sibling,
                    v = g,
                    b = f.minDate || v.minDate,
                    S = f.maxDate || v.maxDate;
                  (v.sibling = f),
                    (f.sibling = v),
                    (f.minDate = b),
                    (f.maxDate = S),
                    (v.minDate = b),
                    (v.maxDate = S),
                    (f.originalMinDate = b),
                    (f.originalMaxDate = S),
                    (v.originalMinDate = b),
                    (v.originalMaxDate = S),
                    (f.getRange = T),
                    (v.getRange = T);
                }
                o.dateSelected && m(s, g);
                var A = getComputedStyle(h).position;
                return (
                  c ||
                    (A && "static" !== A) ||
                    ((g.inlinePosition = !0),
                    h.style.setProperty("position", "relative")),
                  g.inlinePosition &&
                    i.forEach(function (e) {
                      e.parent === g.parent && (e.inlinePosition = !0);
                    }),
                  i.push(g),
                  d.appendChild(p),
                  h.appendChild(d),
                  g.alwaysShow && k(g),
                  g
                );
              })(e, t);
              if (s.second) {
                var h = s.sibling;
                f({ instance: s, deselect: !s.dateSelected }),
                  f({ instance: h, deselect: !h.dateSelected }),
                  c(h);
              }
              return (
                c(s, s.startDate || s.dateSelected), s.alwaysShow && b(s), s
              );
            };
          },
          function (e, t, s) {},
        ]);
      }),
      "object" == typeof exports && "object" == typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
        ? define([], t)
        : "object" == typeof exports
        ? (exports.datepicker = t())
        : (e.datepicker = t());
    class a {
      constructor(e) {
        Object.assign(
          this,
          { inserted: "", rawInserted: "", skip: !1, tailShift: 0 },
          e
        );
      }
      aggregate(e) {
        return (
          (this.rawInserted += e.rawInserted),
          (this.skip = this.skip || e.skip),
          (this.inserted += e.inserted),
          (this.tailShift += e.tailShift),
          this
        );
      }
      get offset() {
        return this.tailShift + this.inserted.length;
      }
    }
    function r(e) {
      return "string" == typeof e || e instanceof String;
    }
    n.ChangeDetails = a;
    const l = {
      NONE: "NONE",
      LEFT: "LEFT",
      FORCE_LEFT: "FORCE_LEFT",
      RIGHT: "RIGHT",
      FORCE_RIGHT: "FORCE_RIGHT",
    };
    function o(e) {
      return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
    }
    function u(e) {
      return Array.isArray(e) ? e : [e, new a()];
    }
    function c(e, t) {
      if (t === e) return !0;
      var s,
        i = Array.isArray(t),
        n = Array.isArray(e);
      if (i && n) {
        if (t.length != e.length) return !1;
        for (s = 0; s < t.length; s++) if (!c(t[s], e[s])) return !1;
        return !0;
      }
      if (i != n) return !1;
      if (t && e && "object" == typeof t && "object" == typeof e) {
        var a = t instanceof Date,
          r = e instanceof Date;
        if (a && r) return t.getTime() == e.getTime();
        if (a != r) return !1;
        var l = t instanceof RegExp,
          o = e instanceof RegExp;
        if (l && o) return t.toString() == e.toString();
        if (l != o) return !1;
        var u = Object.keys(t);
        for (s = 0; s < u.length; s++)
          if (!Object.prototype.hasOwnProperty.call(e, u[s])) return !1;
        for (s = 0; s < u.length; s++) if (!c(e[u[s]], t[u[s]])) return !1;
        return !0;
      }
      return (
        !(!t || !e || "function" != typeof t || "function" != typeof e) &&
        t.toString() === e.toString()
      );
    }
    class h {
      constructor(e, t, s, i) {
        for (
          this.value = e,
            this.cursorPos = t,
            this.oldValue = s,
            this.oldSelection = i;
          this.value.slice(0, this.startChangePos) !==
          this.oldValue.slice(0, this.startChangePos);

        )
          --this.oldSelection.start;
      }
      get startChangePos() {
        return Math.min(this.cursorPos, this.oldSelection.start);
      }
      get insertedCount() {
        return this.cursorPos - this.startChangePos;
      }
      get inserted() {
        return this.value.substr(this.startChangePos, this.insertedCount);
      }
      get removedCount() {
        return Math.max(
          this.oldSelection.end - this.startChangePos ||
            this.oldValue.length - this.value.length,
          0
        );
      }
      get removed() {
        return this.oldValue.substr(this.startChangePos, this.removedCount);
      }
      get head() {
        return this.value.substring(0, this.startChangePos);
      }
      get tail() {
        return this.value.substring(this.startChangePos + this.insertedCount);
      }
      get removeDirection() {
        return !this.removedCount || this.insertedCount
          ? l.NONE
          : (this.oldSelection.end !== this.cursorPos &&
              this.oldSelection.start !== this.cursorPos) ||
            this.oldSelection.end !== this.oldSelection.start
          ? l.LEFT
          : l.RIGHT;
      }
    }
    class d {
      constructor() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          s = arguments.length > 2 ? arguments[2] : void 0;
        (this.value = e), (this.from = t), (this.stop = s);
      }
      toString() {
        return this.value;
      }
      extend(e) {
        this.value += String(e);
      }
      appendTo(e) {
        return e
          .append(this.toString(), { tail: !0 })
          .aggregate(e._appendPlaceholder());
      }
      get state() {
        return { value: this.value, from: this.from, stop: this.stop };
      }
      set state(e) {
        Object.assign(this, e);
      }
      unshift(e) {
        if (!this.value.length || (null != e && this.from >= e)) return "";
        const t = this.value[0];
        return (this.value = this.value.slice(1)), t;
      }
      shift() {
        if (!this.value.length) return "";
        const e = this.value[this.value.length - 1];
        return (this.value = this.value.slice(0, -1)), e;
      }
    }
    class p {
      constructor(e) {
        (this._value = ""),
          this._update(Object.assign({}, p.DEFAULTS, e)),
          (this.isInitialized = !0);
      }
      updateOptions(e) {
        Object.keys(e).length &&
          this.withValueRefresh(this._update.bind(this, e));
      }
      _update(e) {
        Object.assign(this, e);
      }
      get state() {
        return { _value: this.value };
      }
      set state(e) {
        this._value = e._value;
      }
      reset() {
        this._value = "";
      }
      get value() {
        return this._value;
      }
      set value(e) {
        this.resolve(e);
      }
      resolve(e) {
        return (
          this.reset(),
          this.append(e, { input: !0 }, ""),
          this.doCommit(),
          this.value
        );
      }
      get unmaskedValue() {
        return this.value;
      }
      set unmaskedValue(e) {
        this.reset(), this.append(e, {}, ""), this.doCommit();
      }
      get typedValue() {
        return this.doParse(this.value);
      }
      set typedValue(e) {
        this.value = this.doFormat(e);
      }
      get rawInputValue() {
        return this.extractInput(0, this.value.length, { raw: !0 });
      }
      set rawInputValue(e) {
        this.reset(), this.append(e, { raw: !0 }, ""), this.doCommit();
      }
      get displayValue() {
        return this.value;
      }
      get isComplete() {
        return !0;
      }
      get isFilled() {
        return this.isComplete;
      }
      nearestInputPos(e, t) {
        return e;
      }
      totalInputPositions() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.value.length;
        return Math.min(this.value.length, t - e);
      }
      extractInput() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.value.length;
        return this.value.slice(e, t);
      }
      extractTail() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.value.length;
        return new d(this.extractInput(e, t), e);
      }
      appendTail(e) {
        return r(e) && (e = new d(String(e))), e.appendTo(this);
      }
      _appendCharRaw(e) {
        return e
          ? ((this._value += e), new a({ inserted: e, rawInserted: e }))
          : new a();
      }
      _appendChar(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          s = arguments.length > 2 ? arguments[2] : void 0;
        const i = this.state;
        let n;
        if (
          (([e, n] = u(this.doPrepare(e, t))),
          (n = n.aggregate(this._appendCharRaw(e, t))),
          n.inserted)
        ) {
          let e,
            r = !1 !== this.doValidate(t);
          if (r && null != s) {
            const t = this.state;
            !0 === this.overwrite &&
              ((e = s.state), s.unshift(this.value.length - n.tailShift));
            let i = this.appendTail(s);
            (r = i.rawInserted === s.toString()),
              (r && i.inserted) ||
                "shift" !== this.overwrite ||
                ((this.state = t),
                (e = s.state),
                s.shift(),
                (i = this.appendTail(s)),
                (r = i.rawInserted === s.toString())),
              r && i.inserted && (this.state = t);
          }
          r || ((n = new a()), (this.state = i), s && e && (s.state = e));
        }
        return n;
      }
      _appendPlaceholder() {
        return new a();
      }
      _appendEager() {
        return new a();
      }
      append(e, t, s) {
        if (!r(e)) throw new Error("value should be string");
        const i = new a(),
          n = r(s) ? new d(String(s)) : s;
        null != t && t.tail && (t._beforeTailState = this.state);
        for (let s = 0; s < e.length; ++s) {
          const a = this._appendChar(e[s], t, n);
          if (!a.rawInserted && !this.doSkipInvalid(e[s], t, n)) break;
          i.aggregate(a);
        }
        return (
          null != n && (i.tailShift += this.appendTail(n).tailShift),
          (!0 === this.eager || "append" === this.eager) &&
            null != t &&
            t.input &&
            e &&
            i.aggregate(this._appendEager()),
          i
        );
      }
      remove() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.value.length;
        return (
          (this._value = this.value.slice(0, e) + this.value.slice(t)), new a()
        );
      }
      withValueRefresh(e) {
        if (this._refreshing || !this.isInitialized) return e();
        this._refreshing = !0;
        const t = this.rawInputValue,
          s = this.value,
          i = e();
        return (
          (this.rawInputValue = t),
          this.value &&
            this.value !== s &&
            0 === s.indexOf(this.value) &&
            this.append(s.slice(this.value.length), {}, ""),
          delete this._refreshing,
          i
        );
      }
      runIsolated(e) {
        if (this._isolated || !this.isInitialized) return e(this);
        this._isolated = !0;
        const t = this.state,
          s = e(this);
        return (this.state = t), delete this._isolated, s;
      }
      doSkipInvalid(e) {
        return this.skipInvalid;
      }
      doPrepare(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return this.prepare ? this.prepare(e, this, t) : e;
      }
      doValidate(e) {
        return (
          (!this.validate || this.validate(this.value, this, e)) &&
          (!this.parent || this.parent.doValidate(e))
        );
      }
      doCommit() {
        this.commit && this.commit(this.value, this);
      }
      doFormat(e) {
        return this.format ? this.format(e, this) : e;
      }
      doParse(e) {
        return this.parse ? this.parse(e, this) : e;
      }
      splice(e, t, s, i) {
        let n =
          arguments.length > 4 && void 0 !== arguments[4]
            ? arguments[4]
            : { input: !0 };
        const r = e + t,
          o = this.extractTail(r),
          u = !0 === this.eager || "remove" === this.eager;
        let c;
        u &&
          ((i = (function (e) {
            switch (e) {
              case l.LEFT:
                return l.FORCE_LEFT;
              case l.RIGHT:
                return l.FORCE_RIGHT;
              default:
                return e;
            }
          })(i)),
          (c = this.extractInput(0, r, { raw: !0 })));
        let h = e;
        const d = new a();
        if (
          (i !== l.NONE &&
            ((h = this.nearestInputPos(e, t > 1 && 0 !== e && !u ? l.NONE : i)),
            (d.tailShift = h - e)),
          d.aggregate(this.remove(h)),
          u && i !== l.NONE && c === this.rawInputValue)
        )
          if (i === l.FORCE_LEFT) {
            let e;
            for (; c === this.rawInputValue && (e = this.value.length); )
              d.aggregate(new a({ tailShift: -1 })).aggregate(
                this.remove(e - 1)
              );
          } else i === l.FORCE_RIGHT && o.unshift();
        return d.aggregate(this.append(s, n, o));
      }
      maskEquals(e) {
        return this.mask === e;
      }
      typedValueEquals(e) {
        const t = this.typedValue;
        return (
          e === t ||
          (p.EMPTY_VALUES.includes(e) && p.EMPTY_VALUES.includes(t)) ||
          this.doFormat(e) === this.doFormat(this.typedValue)
        );
      }
    }
    function g(e) {
      if (null == e) throw new Error("mask property should be defined");
      return e instanceof RegExp
        ? n.MaskedRegExp
        : r(e)
        ? n.MaskedPattern
        : e instanceof Date || e === Date
        ? n.MaskedDate
        : e instanceof Number || "number" == typeof e || e === Number
        ? n.MaskedNumber
        : Array.isArray(e) || e === Array
        ? n.MaskedDynamic
        : n.Masked && e.prototype instanceof n.Masked
        ? e
        : e instanceof n.Masked
        ? e.constructor
        : e instanceof Function
        ? n.MaskedFunction
        : (console.warn("Mask not found for mask", e), n.Masked);
    }
    function f(e) {
      if (n.Masked && e instanceof n.Masked) return e;
      const t = (e = Object.assign({}, e)).mask;
      if (n.Masked && t instanceof n.Masked) return t;
      const s = g(t);
      if (!s)
        throw new Error(
          "Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask."
        );
      return new s(e);
    }
    (p.DEFAULTS = { format: String, parse: (e) => e, skipInvalid: !0 }),
      (p.EMPTY_VALUES = [void 0, null, ""]),
      (n.Masked = p),
      (n.createMask = f);
    const m = [
        "parent",
        "isOptional",
        "placeholderChar",
        "displayChar",
        "lazy",
        "eager",
      ],
      v = {
        0: /\d/,
        a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        "*": /./,
      };
    class b {
      constructor(e) {
        const {
            parent: t,
            isOptional: s,
            placeholderChar: n,
            displayChar: a,
            lazy: r,
            eager: l,
          } = e,
          o = i(e, m);
        (this.masked = f(o)),
          Object.assign(this, {
            parent: t,
            isOptional: s,
            placeholderChar: n,
            displayChar: a,
            lazy: r,
            eager: l,
          });
      }
      reset() {
        (this.isFilled = !1), this.masked.reset();
      }
      remove() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.value.length;
        return 0 === e && t >= 1
          ? ((this.isFilled = !1), this.masked.remove(e, t))
          : new a();
      }
      get value() {
        return (
          this.masked.value ||
          (this.isFilled && !this.isOptional ? this.placeholderChar : "")
        );
      }
      get unmaskedValue() {
        return this.masked.unmaskedValue;
      }
      get displayValue() {
        return (this.masked.value && this.displayChar) || this.value;
      }
      get isComplete() {
        return Boolean(this.masked.value) || this.isOptional;
      }
      _appendChar(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (this.isFilled) return new a();
        const s = this.masked.state,
          i = this.masked._appendChar(e, t);
        return (
          i.inserted &&
            !1 === this.doValidate(t) &&
            ((i.inserted = i.rawInserted = ""), (this.masked.state = s)),
          i.inserted ||
            this.isOptional ||
            this.lazy ||
            t.input ||
            (i.inserted = this.placeholderChar),
          (i.skip = !i.inserted && !this.isOptional),
          (this.isFilled = Boolean(i.inserted)),
          i
        );
      }
      append() {
        return this.masked.append(...arguments);
      }
      _appendPlaceholder() {
        const e = new a();
        return (
          this.isFilled ||
            this.isOptional ||
            ((this.isFilled = !0), (e.inserted = this.placeholderChar)),
          e
        );
      }
      _appendEager() {
        return new a();
      }
      extractTail() {
        return this.masked.extractTail(...arguments);
      }
      appendTail() {
        return this.masked.appendTail(...arguments);
      }
      extractInput() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.value.length,
          s = arguments.length > 2 ? arguments[2] : void 0;
        return this.masked.extractInput(e, t, s);
      }
      nearestInputPos(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : l.NONE;
        const s = this.value.length,
          i = Math.min(Math.max(e, 0), s);
        switch (t) {
          case l.LEFT:
          case l.FORCE_LEFT:
            return this.isComplete ? i : 0;
          case l.RIGHT:
          case l.FORCE_RIGHT:
            return this.isComplete ? i : s;
          case l.NONE:
          default:
            return i;
        }
      }
      totalInputPositions() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.value.length;
        return this.value.slice(e, t).length;
      }
      doValidate() {
        return (
          this.masked.doValidate(...arguments) &&
          (!this.parent || this.parent.doValidate(...arguments))
        );
      }
      doCommit() {
        this.masked.doCommit();
      }
      get state() {
        return { masked: this.masked.state, isFilled: this.isFilled };
      }
      set state(e) {
        (this.masked.state = e.masked), (this.isFilled = e.isFilled);
      }
    }
    class E {
      constructor(e) {
        Object.assign(this, e), (this._value = ""), (this.isFixed = !0);
      }
      get value() {
        return this._value;
      }
      get unmaskedValue() {
        return this.isUnmasking ? this.value : "";
      }
      get displayValue() {
        return this.value;
      }
      reset() {
        (this._isRawInput = !1), (this._value = "");
      }
      remove() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this._value.length;
        return (
          (this._value = this._value.slice(0, e) + this._value.slice(t)),
          this._value || (this._isRawInput = !1),
          new a()
        );
      }
      nearestInputPos(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : l.NONE;
        const s = this._value.length;
        switch (t) {
          case l.LEFT:
          case l.FORCE_LEFT:
            return 0;
          case l.NONE:
          case l.RIGHT:
          case l.FORCE_RIGHT:
          default:
            return s;
        }
      }
      totalInputPositions() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this._value.length;
        return this._isRawInput ? t - e : 0;
      }
      extractInput() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this._value.length;
        return (
          ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
            .raw &&
            this._isRawInput &&
            this._value.slice(e, t)) ||
          ""
        );
      }
      get isComplete() {
        return !0;
      }
      get isFilled() {
        return Boolean(this._value);
      }
      _appendChar(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const s = new a();
        if (this.isFilled) return s;
        const i = !0 === this.eager || "append" === this.eager,
          n =
            this.char === e &&
            (this.isUnmasking || t.input || t.raw) &&
            (!t.raw || !i) &&
            !t.tail;
        return (
          n && (s.rawInserted = this.char),
          (this._value = s.inserted = this.char),
          (this._isRawInput = n && (t.raw || t.input)),
          s
        );
      }
      _appendEager() {
        return this._appendChar(this.char, { tail: !0 });
      }
      _appendPlaceholder() {
        const e = new a();
        return this.isFilled || (this._value = e.inserted = this.char), e;
      }
      extractTail() {
        return (
          (arguments.length > 1 && void 0 !== arguments[1]) ||
            this.value.length,
          new d("")
        );
      }
      appendTail(e) {
        return r(e) && (e = new d(String(e))), e.appendTo(this);
      }
      append(e, t, s) {
        const i = this._appendChar(e[0], t);
        return null != s && (i.tailShift += this.appendTail(s).tailShift), i;
      }
      doCommit() {}
      get state() {
        return { _value: this._value, _isRawInput: this._isRawInput };
      }
      set state(e) {
        Object.assign(this, e);
      }
    }
    const y = ["chunks"];
    class S {
      constructor() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        (this.chunks = e), (this.from = t);
      }
      toString() {
        return this.chunks.map(String).join("");
      }
      extend(e) {
        if (!String(e)) return;
        r(e) && (e = new d(String(e)));
        const t = this.chunks[this.chunks.length - 1],
          s =
            t &&
            (t.stop === e.stop || null == e.stop) &&
            e.from === t.from + t.toString().length;
        if (e instanceof d) s ? t.extend(e.toString()) : this.chunks.push(e);
        else if (e instanceof S) {
          if (null == e.stop) {
            let t;
            for (; e.chunks.length && null == e.chunks[0].stop; )
              (t = e.chunks.shift()), (t.from += e.from), this.extend(t);
          }
          e.toString() && ((e.stop = e.blockIndex), this.chunks.push(e));
        }
      }
      appendTo(e) {
        if (!(e instanceof n.MaskedPattern)) {
          return new d(this.toString()).appendTo(e);
        }
        const t = new a();
        for (let s = 0; s < this.chunks.length && !t.skip; ++s) {
          const i = this.chunks[s],
            n = e._mapPosToBlock(e.value.length),
            a = i.stop;
          let r;
          if (null != a && (!n || n.index <= a)) {
            if (i instanceof S || e._stops.indexOf(a) >= 0) {
              const s = e._appendPlaceholder(a);
              t.aggregate(s);
            }
            r = i instanceof S && e._blocks[a];
          }
          if (r) {
            const s = r.appendTail(i);
            (s.skip = !1), t.aggregate(s), (e._value += s.inserted);
            const n = i.toString().slice(s.rawInserted.length);
            n && t.aggregate(e.append(n, { tail: !0 }));
          } else t.aggregate(e.append(i.toString(), { tail: !0 }));
        }
        return t;
      }
      get state() {
        return {
          chunks: this.chunks.map((e) => e.state),
          from: this.from,
          stop: this.stop,
          blockIndex: this.blockIndex,
        };
      }
      set state(e) {
        const { chunks: t } = e,
          s = i(e, y);
        Object.assign(this, s),
          (this.chunks = t.map((e) => {
            const t = "chunks" in e ? new S() : new d();
            return (t.state = e), t;
          }));
      }
      unshift(e) {
        if (!this.chunks.length || (null != e && this.from >= e)) return "";
        const t = null != e ? e - this.from : e;
        let s = 0;
        for (; s < this.chunks.length; ) {
          const e = this.chunks[s],
            i = e.unshift(t);
          if (e.toString()) {
            if (!i) break;
            ++s;
          } else this.chunks.splice(s, 1);
          if (i) return i;
        }
        return "";
      }
      shift() {
        if (!this.chunks.length) return "";
        let e = this.chunks.length - 1;
        for (; 0 <= e; ) {
          const t = this.chunks[e],
            s = t.shift();
          if (t.toString()) {
            if (!s) break;
            --e;
          } else this.chunks.splice(e, 1);
          if (s) return s;
        }
        return "";
      }
    }
    class k {
      constructor(e, t) {
        (this.masked = e), (this._log = []);
        const { offset: s, index: i } =
          e._mapPosToBlock(t) ||
          (t < 0
            ? { index: 0, offset: 0 }
            : { index: this.masked._blocks.length, offset: 0 });
        (this.offset = s), (this.index = i), (this.ok = !1);
      }
      get block() {
        return this.masked._blocks[this.index];
      }
      get pos() {
        return this.masked._blockStartPos(this.index) + this.offset;
      }
      get state() {
        return { index: this.index, offset: this.offset, ok: this.ok };
      }
      set state(e) {
        Object.assign(this, e);
      }
      pushState() {
        this._log.push(this.state);
      }
      popState() {
        const e = this._log.pop();
        return (this.state = e), e;
      }
      bindBlock() {
        this.block ||
          (this.index < 0 && ((this.index = 0), (this.offset = 0)),
          this.index >= this.masked._blocks.length &&
            ((this.index = this.masked._blocks.length - 1),
            (this.offset = this.block.value.length)));
      }
      _pushLeft(e) {
        for (
          this.pushState(), this.bindBlock();
          0 <= this.index;
          --this.index,
            this.offset =
              (null === (t = this.block) || void 0 === t
                ? void 0
                : t.value.length) || 0
        ) {
          var t;
          if (e()) return (this.ok = !0);
        }
        return (this.ok = !1);
      }
      _pushRight(e) {
        for (
          this.pushState(), this.bindBlock();
          this.index < this.masked._blocks.length;
          ++this.index, this.offset = 0
        )
          if (e()) return (this.ok = !0);
        return (this.ok = !1);
      }
      pushLeftBeforeFilled() {
        return this._pushLeft(() => {
          if (!this.block.isFixed && this.block.value)
            return (
              (this.offset = this.block.nearestInputPos(
                this.offset,
                l.FORCE_LEFT
              )),
              0 !== this.offset || void 0
            );
        });
      }
      pushLeftBeforeInput() {
        return this._pushLeft(() => {
          if (!this.block.isFixed)
            return (
              (this.offset = this.block.nearestInputPos(this.offset, l.LEFT)),
              !0
            );
        });
      }
      pushLeftBeforeRequired() {
        return this._pushLeft(() => {
          if (
            !(
              this.block.isFixed ||
              (this.block.isOptional && !this.block.value)
            )
          )
            return (
              (this.offset = this.block.nearestInputPos(this.offset, l.LEFT)),
              !0
            );
        });
      }
      pushRightBeforeFilled() {
        return this._pushRight(() => {
          if (!this.block.isFixed && this.block.value)
            return (
              (this.offset = this.block.nearestInputPos(
                this.offset,
                l.FORCE_RIGHT
              )),
              this.offset !== this.block.value.length || void 0
            );
        });
      }
      pushRightBeforeInput() {
        return this._pushRight(() => {
          if (!this.block.isFixed)
            return (
              (this.offset = this.block.nearestInputPos(this.offset, l.NONE)),
              !0
            );
        });
      }
      pushRightBeforeRequired() {
        return this._pushRight(() => {
          if (
            !(
              this.block.isFixed ||
              (this.block.isOptional && !this.block.value)
            )
          )
            return (
              (this.offset = this.block.nearestInputPos(this.offset, l.NONE)),
              !0
            );
        });
      }
    }
    n.MaskedRegExp = class extends p {
      _update(e) {
        e.mask && (e.validate = (t) => t.search(e.mask) >= 0), super._update(e);
      }
    };
    const A = ["_blocks"];
    class _ extends p {
      constructor() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (e.definitions = Object.assign({}, v, e.definitions)),
          super(Object.assign({}, _.DEFAULTS, e));
      }
      _update() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (e.definitions = Object.assign({}, this.definitions, e.definitions)),
          super._update(e),
          this._rebuildMask();
      }
      _rebuildMask() {
        const e = this.definitions;
        (this._blocks = []), (this._stops = []), (this._maskedBlocks = {});
        let t = this.mask;
        if (!t || !e) return;
        let s = !1,
          i = !1;
        for (let l = 0; l < t.length; ++l) {
          var a, r;
          if (this.blocks) {
            const e = t.slice(l),
              s = Object.keys(this.blocks).filter((t) => 0 === e.indexOf(t));
            s.sort((e, t) => t.length - e.length);
            const i = s[0];
            if (i) {
              const e = f(
                Object.assign(
                  {
                    parent: this,
                    lazy: this.lazy,
                    eager: this.eager,
                    placeholderChar: this.placeholderChar,
                    displayChar: this.displayChar,
                    overwrite: this.overwrite,
                  },
                  this.blocks[i]
                )
              );
              e &&
                (this._blocks.push(e),
                this._maskedBlocks[i] || (this._maskedBlocks[i] = []),
                this._maskedBlocks[i].push(this._blocks.length - 1)),
                (l += i.length - 1);
              continue;
            }
          }
          let o = t[l],
            u = o in e;
          if (o === _.STOP_CHAR) {
            this._stops.push(this._blocks.length);
            continue;
          }
          if ("{" === o || "}" === o) {
            s = !s;
            continue;
          }
          if ("[" === o || "]" === o) {
            i = !i;
            continue;
          }
          if (o === _.ESCAPE_CHAR) {
            if ((++l, (o = t[l]), !o)) break;
            u = !1;
          }
          const c =
              null === (a = e[o]) ||
              void 0 === a ||
              !a.mask ||
              (null === (r = e[o]) || void 0 === r
                ? void 0
                : r.mask.prototype) instanceof n.Masked
                ? { mask: e[o] }
                : e[o],
            h = u
              ? new b(
                  Object.assign(
                    {
                      parent: this,
                      isOptional: i,
                      lazy: this.lazy,
                      eager: this.eager,
                      placeholderChar: this.placeholderChar,
                      displayChar: this.displayChar,
                    },
                    c
                  )
                )
              : new E({ char: o, eager: this.eager, isUnmasking: s });
          this._blocks.push(h);
        }
      }
      get state() {
        return Object.assign({}, super.state, {
          _blocks: this._blocks.map((e) => e.state),
        });
      }
      set state(e) {
        const { _blocks: t } = e,
          s = i(e, A);
        this._blocks.forEach((e, s) => (e.state = t[s])), (super.state = s);
      }
      reset() {
        super.reset(), this._blocks.forEach((e) => e.reset());
      }
      get isComplete() {
        return this._blocks.every((e) => e.isComplete);
      }
      get isFilled() {
        return this._blocks.every((e) => e.isFilled);
      }
      get isFixed() {
        return this._blocks.every((e) => e.isFixed);
      }
      get isOptional() {
        return this._blocks.every((e) => e.isOptional);
      }
      doCommit() {
        this._blocks.forEach((e) => e.doCommit()), super.doCommit();
      }
      get unmaskedValue() {
        return this._blocks.reduce((e, t) => e + t.unmaskedValue, "");
      }
      set unmaskedValue(e) {
        super.unmaskedValue = e;
      }
      get value() {
        return this._blocks.reduce((e, t) => e + t.value, "");
      }
      set value(e) {
        super.value = e;
      }
      get displayValue() {
        return this._blocks.reduce((e, t) => e + t.displayValue, "");
      }
      appendTail(e) {
        return super.appendTail(e).aggregate(this._appendPlaceholder());
      }
      _appendEager() {
        var e;
        const t = new a();
        let s =
          null === (e = this._mapPosToBlock(this.value.length)) || void 0 === e
            ? void 0
            : e.index;
        if (null == s) return t;
        this._blocks[s].isFilled && ++s;
        for (let e = s; e < this._blocks.length; ++e) {
          const s = this._blocks[e]._appendEager();
          if (!s.inserted) break;
          t.aggregate(s);
        }
        return t;
      }
      _appendCharRaw(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const s = this._mapPosToBlock(this.value.length),
          i = new a();
        if (!s) return i;
        for (let a = s.index; ; ++a) {
          var n, r;
          const s = this._blocks[a];
          if (!s) break;
          const l = s._appendChar(
              e,
              Object.assign({}, t, {
                _beforeTailState:
                  null === (n = t._beforeTailState) ||
                  void 0 === n ||
                  null === (r = n._blocks) ||
                  void 0 === r
                    ? void 0
                    : r[a],
              })
            ),
            o = l.skip;
          if ((i.aggregate(l), o || l.rawInserted)) break;
        }
        return i;
      }
      extractTail() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.value.length;
        const s = new S();
        return (
          e === t ||
            this._forEachBlocksInRange(e, t, (e, t, i, n) => {
              const a = e.extractTail(i, n);
              (a.stop = this._findStopBefore(t)),
                (a.from = this._blockStartPos(t)),
                a instanceof S && (a.blockIndex = t),
                s.extend(a);
            }),
          s
        );
      }
      extractInput() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.value.length,
          s =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (e === t) return "";
        let i = "";
        return (
          this._forEachBlocksInRange(e, t, (e, t, n, a) => {
            i += e.extractInput(n, a, s);
          }),
          i
        );
      }
      _findStopBefore(e) {
        let t;
        for (let s = 0; s < this._stops.length; ++s) {
          const i = this._stops[s];
          if (!(i <= e)) break;
          t = i;
        }
        return t;
      }
      _appendPlaceholder(e) {
        const t = new a();
        if (this.lazy && null == e) return t;
        const s = this._mapPosToBlock(this.value.length);
        if (!s) return t;
        const i = s.index,
          n = null != e ? e : this._blocks.length;
        return (
          this._blocks.slice(i, n).forEach((s) => {
            if (!s.lazy || null != e) {
              const e = null != s._blocks ? [s._blocks.length] : [],
                i = s._appendPlaceholder(...e);
              (this._value += i.inserted), t.aggregate(i);
            }
          }),
          t
        );
      }
      _mapPosToBlock(e) {
        let t = "";
        for (let s = 0; s < this._blocks.length; ++s) {
          const i = this._blocks[s],
            n = t.length;
          if (((t += i.value), e <= t.length))
            return { index: s, offset: e - n };
        }
      }
      _blockStartPos(e) {
        return this._blocks.slice(0, e).reduce((e, t) => e + t.value.length, 0);
      }
      _forEachBlocksInRange(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.value.length,
          s = arguments.length > 2 ? arguments[2] : void 0;
        const i = this._mapPosToBlock(e);
        if (i) {
          const e = this._mapPosToBlock(t),
            n = e && i.index === e.index,
            a = i.offset,
            r = e && n ? e.offset : this._blocks[i.index].value.length;
          if ((s(this._blocks[i.index], i.index, a, r), e && !n)) {
            for (let t = i.index + 1; t < e.index; ++t)
              s(this._blocks[t], t, 0, this._blocks[t].value.length);
            s(this._blocks[e.index], e.index, 0, e.offset);
          }
        }
      }
      remove() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.value.length;
        const s = super.remove(e, t);
        return (
          this._forEachBlocksInRange(e, t, (e, t, i, n) => {
            s.aggregate(e.remove(i, n));
          }),
          s
        );
      }
      nearestInputPos(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : l.NONE;
        if (!this._blocks.length) return 0;
        const s = new k(this, e);
        if (t === l.NONE)
          return s.pushRightBeforeInput()
            ? s.pos
            : (s.popState(),
              s.pushLeftBeforeInput() ? s.pos : this.value.length);
        if (t === l.LEFT || t === l.FORCE_LEFT) {
          if (t === l.LEFT) {
            if ((s.pushRightBeforeFilled(), s.ok && s.pos === e)) return e;
            s.popState();
          }
          if (
            (s.pushLeftBeforeInput(),
            s.pushLeftBeforeRequired(),
            s.pushLeftBeforeFilled(),
            t === l.LEFT)
          ) {
            if (
              (s.pushRightBeforeInput(),
              s.pushRightBeforeRequired(),
              s.ok && s.pos <= e)
            )
              return s.pos;
            if ((s.popState(), s.ok && s.pos <= e)) return s.pos;
            s.popState();
          }
          return s.ok
            ? s.pos
            : t === l.FORCE_LEFT
            ? 0
            : (s.popState(), s.ok ? s.pos : (s.popState(), s.ok ? s.pos : 0));
        }
        return t === l.RIGHT || t === l.FORCE_RIGHT
          ? (s.pushRightBeforeInput(),
            s.pushRightBeforeRequired(),
            s.pushRightBeforeFilled()
              ? s.pos
              : t === l.FORCE_RIGHT
              ? this.value.length
              : (s.popState(),
                s.ok
                  ? s.pos
                  : (s.popState(),
                    s.ok ? s.pos : this.nearestInputPos(e, l.LEFT))))
          : e;
      }
      totalInputPositions() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.value.length,
          s = 0;
        return (
          this._forEachBlocksInRange(e, t, (e, t, i, n) => {
            s += e.totalInputPositions(i, n);
          }),
          s
        );
      }
      maskedBlock(e) {
        return this.maskedBlocks(e)[0];
      }
      maskedBlocks(e) {
        const t = this._maskedBlocks[e];
        return t ? t.map((e) => this._blocks[e]) : [];
      }
    }
    (_.DEFAULTS = { lazy: !0, placeholderChar: "_" }),
      (_.STOP_CHAR = "`"),
      (_.ESCAPE_CHAR = "\\"),
      (_.InputDefinition = b),
      (_.FixedDefinition = E),
      (n.MaskedPattern = _);
    class C extends _ {
      get _matchFrom() {
        return this.maxLength - String(this.from).length;
      }
      _update(e) {
        e = Object.assign(
          {
            to: this.to || 0,
            from: this.from || 0,
            maxLength: this.maxLength || 0,
          },
          e
        );
        let t = String(e.to).length;
        null != e.maxLength && (t = Math.max(t, e.maxLength)),
          (e.maxLength = t);
        const s = String(e.from).padStart(t, "0"),
          i = String(e.to).padStart(t, "0");
        let n = 0;
        for (; n < i.length && i[n] === s[n]; ) ++n;
        (e.mask = i.slice(0, n).replace(/0/g, "\\0") + "0".repeat(t - n)),
          super._update(e);
      }
      get isComplete() {
        return super.isComplete && Boolean(this.value);
      }
      boundaries(e) {
        let t = "",
          s = "";
        const [, i, n] = e.match(/^(\D*)(\d*)(\D*)/) || [];
        return (
          n && ((t = "0".repeat(i.length) + n), (s = "9".repeat(i.length) + n)),
          (t = t.padEnd(this.maxLength, "0")),
          (s = s.padEnd(this.maxLength, "9")),
          [t, s]
        );
      }
      doPrepare(e) {
        let t,
          s =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (
          (([e, t] = u(super.doPrepare(e.replace(/\D/g, ""), s))),
          !this.autofix || !e)
        )
          return e;
        const i = String(this.from).padStart(this.maxLength, "0"),
          n = String(this.to).padStart(this.maxLength, "0");
        let a = this.value + e;
        if (a.length > this.maxLength) return "";
        const [r, l] = this.boundaries(a);
        return Number(l) < this.from
          ? i[a.length - 1]
          : Number(r) > this.to
          ? "pad" === this.autofix && a.length < this.maxLength
            ? ["", t.aggregate(this.append(i[a.length - 1] + e, s))]
            : n[a.length - 1]
          : e;
      }
      doValidate() {
        const e = this.value;
        if (-1 === e.search(/[^0]/) && e.length <= this._matchFrom) return !0;
        const [t, s] = this.boundaries(e);
        return (
          this.from <= Number(s) &&
          Number(t) <= this.to &&
          super.doValidate(...arguments)
        );
      }
    }
    n.MaskedRange = C;
    class x extends _ {
      constructor(e) {
        super(Object.assign({}, x.DEFAULTS, e));
      }
      _update(e) {
        e.mask === Date && delete e.mask, e.pattern && (e.mask = e.pattern);
        const t = e.blocks;
        (e.blocks = Object.assign({}, x.GET_DEFAULT_BLOCKS())),
          e.min && (e.blocks.Y.from = e.min.getFullYear()),
          e.max && (e.blocks.Y.to = e.max.getFullYear()),
          e.min &&
            e.max &&
            e.blocks.Y.from === e.blocks.Y.to &&
            ((e.blocks.m.from = e.min.getMonth() + 1),
            (e.blocks.m.to = e.max.getMonth() + 1),
            e.blocks.m.from === e.blocks.m.to &&
              ((e.blocks.d.from = e.min.getDate()),
              (e.blocks.d.to = e.max.getDate()))),
          Object.assign(e.blocks, this.blocks, t),
          Object.keys(e.blocks).forEach((t) => {
            const s = e.blocks[t];
            !("autofix" in s) && "autofix" in e && (s.autofix = e.autofix);
          }),
          super._update(e);
      }
      doValidate() {
        const e = this.date;
        return (
          super.doValidate(...arguments) &&
          (!this.isComplete ||
            (this.isDateExist(this.value) &&
              null != e &&
              (null == this.min || this.min <= e) &&
              (null == this.max || e <= this.max)))
        );
      }
      isDateExist(e) {
        return this.format(this.parse(e, this), this).indexOf(e) >= 0;
      }
      get date() {
        return this.typedValue;
      }
      set date(e) {
        this.typedValue = e;
      }
      get typedValue() {
        return this.isComplete ? super.typedValue : null;
      }
      set typedValue(e) {
        super.typedValue = e;
      }
      maskEquals(e) {
        return e === Date || super.maskEquals(e);
      }
    }
    (x.DEFAULTS = {
      pattern: "d{.}`m{.}`Y",
      format: (e) => {
        if (!e) return "";
        return [
          String(e.getDate()).padStart(2, "0"),
          String(e.getMonth() + 1).padStart(2, "0"),
          e.getFullYear(),
        ].join(".");
      },
      parse: (e) => {
        const [t, s, i] = e.split(".");
        return new Date(i, s - 1, t);
      },
    }),
      (x.GET_DEFAULT_BLOCKS = () => ({
        d: { mask: C, from: 1, to: 31, maxLength: 2 },
        m: { mask: C, from: 1, to: 12, maxLength: 2 },
        Y: { mask: C, from: 1900, to: 9999 },
      })),
      (n.MaskedDate = x);
    class w {
      get selectionStart() {
        let e;
        try {
          e = this._unsafeSelectionStart;
        } catch (e) {}
        return null != e ? e : this.value.length;
      }
      get selectionEnd() {
        let e;
        try {
          e = this._unsafeSelectionEnd;
        } catch (e) {}
        return null != e ? e : this.value.length;
      }
      select(e, t) {
        if (
          null != e &&
          null != t &&
          (e !== this.selectionStart || t !== this.selectionEnd)
        )
          try {
            this._unsafeSelect(e, t);
          } catch (e) {}
      }
      _unsafeSelect(e, t) {}
      get isActive() {
        return !1;
      }
      bindEvents(e) {}
      unbindEvents() {}
    }
    n.MaskElement = w;
    class D extends w {
      constructor(e) {
        super(), (this.input = e), (this._handlers = {});
      }
      get rootElement() {
        var e, t, s;
        return null !==
          (e =
            null === (t = (s = this.input).getRootNode) || void 0 === t
              ? void 0
              : t.call(s)) && void 0 !== e
          ? e
          : document;
      }
      get isActive() {
        return this.input === this.rootElement.activeElement;
      }
      get _unsafeSelectionStart() {
        return this.input.selectionStart;
      }
      get _unsafeSelectionEnd() {
        return this.input.selectionEnd;
      }
      _unsafeSelect(e, t) {
        this.input.setSelectionRange(e, t);
      }
      get value() {
        return this.input.value;
      }
      set value(e) {
        this.input.value = e;
      }
      bindEvents(e) {
        Object.keys(e).forEach((t) =>
          this._toggleEventHandler(D.EVENTS_MAP[t], e[t])
        );
      }
      unbindEvents() {
        Object.keys(this._handlers).forEach((e) => this._toggleEventHandler(e));
      }
      _toggleEventHandler(e, t) {
        this._handlers[e] &&
          (this.input.removeEventListener(e, this._handlers[e]),
          delete this._handlers[e]),
          t && (this.input.addEventListener(e, t), (this._handlers[e] = t));
      }
    }
    (D.EVENTS_MAP = {
      selectionChange: "keydown",
      input: "input",
      drop: "drop",
      click: "click",
      focus: "focus",
      commit: "blur",
    }),
      (n.HTMLMaskElement = D);
    class O extends D {
      get _unsafeSelectionStart() {
        const e = this.rootElement,
          t = e.getSelection && e.getSelection(),
          s = t && t.anchorOffset,
          i = t && t.focusOffset;
        return null == i || null == s || s < i ? s : i;
      }
      get _unsafeSelectionEnd() {
        const e = this.rootElement,
          t = e.getSelection && e.getSelection(),
          s = t && t.anchorOffset,
          i = t && t.focusOffset;
        return null == i || null == s || s > i ? s : i;
      }
      _unsafeSelect(e, t) {
        if (!this.rootElement.createRange) return;
        const s = this.rootElement.createRange();
        s.setStart(this.input.firstChild || this.input, e),
          s.setEnd(this.input.lastChild || this.input, t);
        const i = this.rootElement,
          n = i.getSelection && i.getSelection();
        n && (n.removeAllRanges(), n.addRange(s));
      }
      get value() {
        return this.input.textContent;
      }
      set value(e) {
        this.input.textContent = e;
      }
    }
    n.HTMLContenteditableMaskElement = O;
    const F = ["mask"];
    n.InputMask = class {
      constructor(e, t) {
        (this.el =
          e instanceof w
            ? e
            : e.isContentEditable &&
              "INPUT" !== e.tagName &&
              "TEXTAREA" !== e.tagName
            ? new O(e)
            : new D(e)),
          (this.masked = f(t)),
          (this._listeners = {}),
          (this._value = ""),
          (this._unmaskedValue = ""),
          (this._saveSelection = this._saveSelection.bind(this)),
          (this._onInput = this._onInput.bind(this)),
          (this._onChange = this._onChange.bind(this)),
          (this._onDrop = this._onDrop.bind(this)),
          (this._onFocus = this._onFocus.bind(this)),
          (this._onClick = this._onClick.bind(this)),
          (this.alignCursor = this.alignCursor.bind(this)),
          (this.alignCursorFriendly = this.alignCursorFriendly.bind(this)),
          this._bindEvents(),
          this.updateValue(),
          this._onChange();
      }
      get mask() {
        return this.masked.mask;
      }
      maskEquals(e) {
        var t;
        return (
          null == e ||
          (null === (t = this.masked) || void 0 === t
            ? void 0
            : t.maskEquals(e))
        );
      }
      set mask(e) {
        if (this.maskEquals(e)) return;
        if (!(e instanceof n.Masked) && this.masked.constructor === g(e))
          return void this.masked.updateOptions({ mask: e });
        const t = f({ mask: e });
        (t.unmaskedValue = this.masked.unmaskedValue), (this.masked = t);
      }
      get value() {
        return this._value;
      }
      set value(e) {
        this.value !== e &&
          ((this.masked.value = e), this.updateControl(), this.alignCursor());
      }
      get unmaskedValue() {
        return this._unmaskedValue;
      }
      set unmaskedValue(e) {
        this.unmaskedValue !== e &&
          ((this.masked.unmaskedValue = e),
          this.updateControl(),
          this.alignCursor());
      }
      get typedValue() {
        return this.masked.typedValue;
      }
      set typedValue(e) {
        this.masked.typedValueEquals(e) ||
          ((this.masked.typedValue = e),
          this.updateControl(),
          this.alignCursor());
      }
      get displayValue() {
        return this.masked.displayValue;
      }
      _bindEvents() {
        this.el.bindEvents({
          selectionChange: this._saveSelection,
          input: this._onInput,
          drop: this._onDrop,
          click: this._onClick,
          focus: this._onFocus,
          commit: this._onChange,
        });
      }
      _unbindEvents() {
        this.el && this.el.unbindEvents();
      }
      _fireEvent(e) {
        for (
          var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          s[i - 1] = arguments[i];
        const n = this._listeners[e];
        n && n.forEach((e) => e(...s));
      }
      get selectionStart() {
        return this._cursorChanging
          ? this._changingCursorPos
          : this.el.selectionStart;
      }
      get cursorPos() {
        return this._cursorChanging
          ? this._changingCursorPos
          : this.el.selectionEnd;
      }
      set cursorPos(e) {
        this.el &&
          this.el.isActive &&
          (this.el.select(e, e), this._saveSelection());
      }
      _saveSelection() {
        this.displayValue !== this.el.value &&
          console.warn(
            "Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."
          ),
          (this._selection = {
            start: this.selectionStart,
            end: this.cursorPos,
          });
      }
      updateValue() {
        (this.masked.value = this.el.value), (this._value = this.masked.value);
      }
      updateControl() {
        const e = this.masked.unmaskedValue,
          t = this.masked.value,
          s = this.displayValue,
          i = this.unmaskedValue !== e || this.value !== t;
        (this._unmaskedValue = e),
          (this._value = t),
          this.el.value !== s && (this.el.value = s),
          i && this._fireChangeEvents();
      }
      updateOptions(e) {
        const { mask: t } = e,
          s = i(e, F),
          n = !this.maskEquals(t),
          a = !c(this.masked, s);
        n && (this.mask = t),
          a && this.masked.updateOptions(s),
          (n || a) && this.updateControl();
      }
      updateCursor(e) {
        null != e && ((this.cursorPos = e), this._delayUpdateCursor(e));
      }
      _delayUpdateCursor(e) {
        this._abortUpdateCursor(),
          (this._changingCursorPos = e),
          (this._cursorChanging = setTimeout(() => {
            this.el &&
              ((this.cursorPos = this._changingCursorPos),
              this._abortUpdateCursor());
          }, 10));
      }
      _fireChangeEvents() {
        this._fireEvent("accept", this._inputEvent),
          this.masked.isComplete &&
            this._fireEvent("complete", this._inputEvent);
      }
      _abortUpdateCursor() {
        this._cursorChanging &&
          (clearTimeout(this._cursorChanging), delete this._cursorChanging);
      }
      alignCursor() {
        this.cursorPos = this.masked.nearestInputPos(
          this.masked.nearestInputPos(this.cursorPos, l.LEFT)
        );
      }
      alignCursorFriendly() {
        this.selectionStart === this.cursorPos && this.alignCursor();
      }
      on(e, t) {
        return (
          this._listeners[e] || (this._listeners[e] = []),
          this._listeners[e].push(t),
          this
        );
      }
      off(e, t) {
        if (!this._listeners[e]) return this;
        if (!t) return delete this._listeners[e], this;
        const s = this._listeners[e].indexOf(t);
        return s >= 0 && this._listeners[e].splice(s, 1), this;
      }
      _onInput(e) {
        if (
          ((this._inputEvent = e), this._abortUpdateCursor(), !this._selection)
        )
          return this.updateValue();
        const t = new h(
            this.el.value,
            this.cursorPos,
            this.displayValue,
            this._selection
          ),
          s = this.masked.rawInputValue,
          i = this.masked.splice(
            t.startChangePos,
            t.removed.length,
            t.inserted,
            t.removeDirection,
            { input: !0, raw: !0 }
          ).offset,
          n = s === this.masked.rawInputValue ? t.removeDirection : l.NONE;
        let a = this.masked.nearestInputPos(t.startChangePos + i, n);
        n !== l.NONE && (a = this.masked.nearestInputPos(a, l.NONE)),
          this.updateControl(),
          this.updateCursor(a),
          delete this._inputEvent;
      }
      _onChange() {
        this.displayValue !== this.el.value && this.updateValue(),
          this.masked.doCommit(),
          this.updateControl(),
          this._saveSelection();
      }
      _onDrop(e) {
        e.preventDefault(), e.stopPropagation();
      }
      _onFocus(e) {
        this.alignCursorFriendly();
      }
      _onClick(e) {
        this.alignCursorFriendly();
      }
      destroy() {
        this._unbindEvents(), (this._listeners.length = 0), delete this.el;
      }
    };
    n.MaskedEnum = class extends _ {
      _update(e) {
        e.enum && (e.mask = "*".repeat(e.enum[0].length)), super._update(e);
      }
      doValidate() {
        return (
          this.enum.some((e) => e.indexOf(this.unmaskedValue) >= 0) &&
          super.doValidate(...arguments)
        );
      }
    };
    class M extends p {
      constructor(e) {
        super(Object.assign({}, M.DEFAULTS, e));
      }
      _update(e) {
        super._update(e), this._updateRegExps();
      }
      _updateRegExps() {
        let e = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
          t =
            (this.scale
              ? "(".concat(o(this.radix), "\\d{0,").concat(this.scale, "})?")
              : "") + "$";
        (this._numberRegExp = new RegExp(e + "\\d*" + t)),
          (this._mapToRadixRegExp = new RegExp(
            "[".concat(this.mapToRadix.map(o).join(""), "]"),
            "g"
          )),
          (this._thousandsSeparatorRegExp = new RegExp(
            o(this.thousandsSeparator),
            "g"
          ));
      }
      _removeThousandsSeparators(e) {
        return e.replace(this._thousandsSeparatorRegExp, "");
      }
      _insertThousandsSeparators(e) {
        const t = e.split(this.radix);
        return (
          (t[0] = t[0].replace(
            /\B(?=(\d{3})+(?!\d))/g,
            this.thousandsSeparator
          )),
          t.join(this.radix)
        );
      }
      doPrepare(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        e = this._removeThousandsSeparators(
          this.scale &&
            this.mapToRadix.length &&
            ((t.input && t.raw) || (!t.input && !t.raw))
            ? e.replace(this._mapToRadixRegExp, this.radix)
            : e
        );
        const [s, i] = u(super.doPrepare(e, t));
        return e && !s && (i.skip = !0), [s, i];
      }
      _separatorsCount(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          s = 0;
        for (let i = 0; i < e; ++i)
          this._value.indexOf(this.thousandsSeparator, i) === i &&
            (++s, t && (e += this.thousandsSeparator.length));
        return s;
      }
      _separatorsCountFromSlice() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : this._value;
        return this._separatorsCount(
          this._removeThousandsSeparators(e).length,
          !0
        );
      }
      extractInput() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.value.length,
          s = arguments.length > 2 ? arguments[2] : void 0;
        return (
          ([e, t] = this._adjustRangeWithSeparators(e, t)),
          this._removeThousandsSeparators(super.extractInput(e, t, s))
        );
      }
      _appendCharRaw(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!this.thousandsSeparator) return super._appendCharRaw(e, t);
        const s =
            t.tail && t._beforeTailState
              ? t._beforeTailState._value
              : this._value,
          i = this._separatorsCountFromSlice(s);
        this._value = this._removeThousandsSeparators(this.value);
        const n = super._appendCharRaw(e, t);
        this._value = this._insertThousandsSeparators(this._value);
        const a =
            t.tail && t._beforeTailState
              ? t._beforeTailState._value
              : this._value,
          r = this._separatorsCountFromSlice(a);
        return (
          (n.tailShift += (r - i) * this.thousandsSeparator.length),
          (n.skip = !n.rawInserted && e === this.thousandsSeparator),
          n
        );
      }
      _findSeparatorAround(e) {
        if (this.thousandsSeparator) {
          const t = e - this.thousandsSeparator.length + 1,
            s = this.value.indexOf(this.thousandsSeparator, t);
          if (s <= e) return s;
        }
        return -1;
      }
      _adjustRangeWithSeparators(e, t) {
        const s = this._findSeparatorAround(e);
        s >= 0 && (e = s);
        const i = this._findSeparatorAround(t);
        return i >= 0 && (t = i + this.thousandsSeparator.length), [e, t];
      }
      remove() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.value.length;
        [e, t] = this._adjustRangeWithSeparators(e, t);
        const s = this.value.slice(0, e),
          i = this.value.slice(t),
          n = this._separatorsCount(s.length);
        this._value = this._insertThousandsSeparators(
          this._removeThousandsSeparators(s + i)
        );
        const r = this._separatorsCountFromSlice(s);
        return new a({ tailShift: (r - n) * this.thousandsSeparator.length });
      }
      nearestInputPos(e, t) {
        if (!this.thousandsSeparator) return e;
        switch (t) {
          case l.NONE:
          case l.LEFT:
          case l.FORCE_LEFT: {
            const s = this._findSeparatorAround(e - 1);
            if (s >= 0) {
              const i = s + this.thousandsSeparator.length;
              if (e < i || this.value.length <= i || t === l.FORCE_LEFT)
                return s;
            }
            break;
          }
          case l.RIGHT:
          case l.FORCE_RIGHT: {
            const t = this._findSeparatorAround(e);
            if (t >= 0) return t + this.thousandsSeparator.length;
          }
        }
        return e;
      }
      doValidate(e) {
        let t = Boolean(
          this._removeThousandsSeparators(this.value).match(this._numberRegExp)
        );
        if (t) {
          const e = this.number;
          t =
            t &&
            !isNaN(e) &&
            (null == this.min || this.min >= 0 || this.min <= this.number) &&
            (null == this.max || this.max <= 0 || this.number <= this.max);
        }
        return t && super.doValidate(e);
      }
      doCommit() {
        if (this.value) {
          const e = this.number;
          let t = e;
          null != this.min && (t = Math.max(t, this.min)),
            null != this.max && (t = Math.min(t, this.max)),
            t !== e && (this.unmaskedValue = this.doFormat(t));
          let s = this.value;
          this.normalizeZeros && (s = this._normalizeZeros(s)),
            this.padFractionalZeros &&
              this.scale > 0 &&
              (s = this._padFractionalZeros(s)),
            (this._value = s);
        }
        super.doCommit();
      }
      _normalizeZeros(e) {
        const t = this._removeThousandsSeparators(e).split(this.radix);
        return (
          (t[0] = t[0].replace(/^(\D*)(0*)(\d*)/, (e, t, s, i) => t + i)),
          e.length && !/\d$/.test(t[0]) && (t[0] = t[0] + "0"),
          t.length > 1 &&
            ((t[1] = t[1].replace(/0*$/, "")), t[1].length || (t.length = 1)),
          this._insertThousandsSeparators(t.join(this.radix))
        );
      }
      _padFractionalZeros(e) {
        if (!e) return e;
        const t = e.split(this.radix);
        return (
          t.length < 2 && t.push(""),
          (t[1] = t[1].padEnd(this.scale, "0")),
          t.join(this.radix)
        );
      }
      doSkipInvalid(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          s = arguments.length > 2 ? arguments[2] : void 0;
        const i =
          0 === this.scale &&
          e !== this.thousandsSeparator &&
          (e === this.radix ||
            e === M.UNMASKED_RADIX ||
            this.mapToRadix.includes(e));
        return super.doSkipInvalid(e, t, s) && !i;
      }
      get unmaskedValue() {
        return this._removeThousandsSeparators(
          this._normalizeZeros(this.value)
        ).replace(this.radix, M.UNMASKED_RADIX);
      }
      set unmaskedValue(e) {
        super.unmaskedValue = e;
      }
      get typedValue() {
        return this.doParse(this.unmaskedValue);
      }
      set typedValue(e) {
        this.rawInputValue = this.doFormat(e).replace(
          M.UNMASKED_RADIX,
          this.radix
        );
      }
      get number() {
        return this.typedValue;
      }
      set number(e) {
        this.typedValue = e;
      }
      get allowNegative() {
        return (
          this.signed ||
          (null != this.min && this.min < 0) ||
          (null != this.max && this.max < 0)
        );
      }
      typedValueEquals(e) {
        return (
          (super.typedValueEquals(e) ||
            (M.EMPTY_VALUES.includes(e) &&
              M.EMPTY_VALUES.includes(this.typedValue))) &&
          !(0 === e && "" === this.value)
        );
      }
    }
    (M.UNMASKED_RADIX = "."),
      (M.DEFAULTS = {
        radix: ",",
        thousandsSeparator: "",
        mapToRadix: [M.UNMASKED_RADIX],
        scale: 2,
        signed: !1,
        normalizeZeros: !0,
        padFractionalZeros: !1,
        parse: Number,
        format: (e) =>
          e.toLocaleString("en-US", {
            useGrouping: !1,
            maximumFractionDigits: 20,
          }),
      }),
      (M.EMPTY_VALUES = [...p.EMPTY_VALUES, 0]),
      (n.MaskedNumber = M);
    n.MaskedFunction = class extends p {
      _update(e) {
        e.mask && (e.validate = e.mask), super._update(e);
      }
    };
    const T = ["compiledMasks", "currentMaskRef", "currentMask"],
      B = ["mask"];
    class L extends p {
      constructor(e) {
        super(Object.assign({}, L.DEFAULTS, e)), (this.currentMask = null);
      }
      _update(e) {
        super._update(e),
          "mask" in e &&
            (this.compiledMasks = Array.isArray(e.mask)
              ? e.mask.map((e) => f(e))
              : []);
      }
      _appendCharRaw(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const s = this._applyDispatch(e, t);
        return (
          this.currentMask &&
            s.aggregate(
              this.currentMask._appendChar(e, this.currentMaskFlags(t))
            ),
          s
        );
      }
      _applyDispatch() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          s =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        const i =
            t.tail && null != t._beforeTailState
              ? t._beforeTailState._value
              : this.value,
          n = this.rawInputValue,
          r =
            t.tail && null != t._beforeTailState
              ? t._beforeTailState._rawInputValue
              : n,
          l = n.slice(r.length),
          o = this.currentMask,
          u = new a(),
          c = null == o ? void 0 : o.state;
        if (
          ((this.currentMask = this.doDispatch(e, Object.assign({}, t), s)),
          this.currentMask)
        )
          if (this.currentMask !== o) {
            if ((this.currentMask.reset(), r)) {
              const e = this.currentMask.append(r, { raw: !0 });
              u.tailShift = e.inserted.length - i.length;
            }
            l &&
              (u.tailShift += this.currentMask.append(l, {
                raw: !0,
                tail: !0,
              }).tailShift);
          } else this.currentMask.state = c;
        return u;
      }
      _appendPlaceholder() {
        const e = this._applyDispatch(...arguments);
        return (
          this.currentMask &&
            e.aggregate(this.currentMask._appendPlaceholder()),
          e
        );
      }
      _appendEager() {
        const e = this._applyDispatch(...arguments);
        return (
          this.currentMask && e.aggregate(this.currentMask._appendEager()), e
        );
      }
      appendTail(e) {
        const t = new a();
        return (
          e && t.aggregate(this._applyDispatch("", {}, e)),
          t.aggregate(
            this.currentMask
              ? this.currentMask.appendTail(e)
              : super.appendTail(e)
          )
        );
      }
      currentMaskFlags(e) {
        var t, s;
        return Object.assign({}, e, {
          _beforeTailState:
            ((null === (t = e._beforeTailState) || void 0 === t
              ? void 0
              : t.currentMaskRef) === this.currentMask &&
              (null === (s = e._beforeTailState) || void 0 === s
                ? void 0
                : s.currentMask)) ||
            e._beforeTailState,
        });
      }
      doDispatch(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          s =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return this.dispatch(e, this, t, s);
      }
      doValidate(e) {
        return (
          super.doValidate(e) &&
          (!this.currentMask ||
            this.currentMask.doValidate(this.currentMaskFlags(e)))
        );
      }
      doPrepare(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          [s, i] = u(super.doPrepare(e, t));
        if (this.currentMask) {
          let e;
          ([s, e] = u(super.doPrepare(s, this.currentMaskFlags(t)))),
            (i = i.aggregate(e));
        }
        return [s, i];
      }
      reset() {
        var e;
        null === (e = this.currentMask) || void 0 === e || e.reset(),
          this.compiledMasks.forEach((e) => e.reset());
      }
      get value() {
        return this.currentMask ? this.currentMask.value : "";
      }
      set value(e) {
        super.value = e;
      }
      get unmaskedValue() {
        return this.currentMask ? this.currentMask.unmaskedValue : "";
      }
      set unmaskedValue(e) {
        super.unmaskedValue = e;
      }
      get typedValue() {
        return this.currentMask ? this.currentMask.typedValue : "";
      }
      set typedValue(e) {
        let t = String(e);
        this.currentMask &&
          ((this.currentMask.typedValue = e),
          (t = this.currentMask.unmaskedValue)),
          (this.unmaskedValue = t);
      }
      get displayValue() {
        return this.currentMask ? this.currentMask.displayValue : "";
      }
      get isComplete() {
        var e;
        return Boolean(
          null === (e = this.currentMask) || void 0 === e
            ? void 0
            : e.isComplete
        );
      }
      get isFilled() {
        var e;
        return Boolean(
          null === (e = this.currentMask) || void 0 === e ? void 0 : e.isFilled
        );
      }
      remove() {
        const e = new a();
        return (
          this.currentMask &&
            e
              .aggregate(this.currentMask.remove(...arguments))
              .aggregate(this._applyDispatch()),
          e
        );
      }
      get state() {
        var e;
        return Object.assign({}, super.state, {
          _rawInputValue: this.rawInputValue,
          compiledMasks: this.compiledMasks.map((e) => e.state),
          currentMaskRef: this.currentMask,
          currentMask:
            null === (e = this.currentMask) || void 0 === e ? void 0 : e.state,
        });
      }
      set state(e) {
        const { compiledMasks: t, currentMaskRef: s, currentMask: n } = e,
          a = i(e, T);
        this.compiledMasks.forEach((e, s) => (e.state = t[s])),
          null != s && ((this.currentMask = s), (this.currentMask.state = n)),
          (super.state = a);
      }
      extractInput() {
        return this.currentMask
          ? this.currentMask.extractInput(...arguments)
          : "";
      }
      extractTail() {
        return this.currentMask
          ? this.currentMask.extractTail(...arguments)
          : super.extractTail(...arguments);
      }
      doCommit() {
        this.currentMask && this.currentMask.doCommit(), super.doCommit();
      }
      nearestInputPos() {
        return this.currentMask
          ? this.currentMask.nearestInputPos(...arguments)
          : super.nearestInputPos(...arguments);
      }
      get overwrite() {
        return this.currentMask ? this.currentMask.overwrite : super.overwrite;
      }
      set overwrite(e) {
        console.warn(
          '"overwrite" option is not available in dynamic mask, use this option in siblings'
        );
      }
      get eager() {
        return this.currentMask ? this.currentMask.eager : super.eager;
      }
      set eager(e) {
        console.warn(
          '"eager" option is not available in dynamic mask, use this option in siblings'
        );
      }
      get skipInvalid() {
        return this.currentMask
          ? this.currentMask.skipInvalid
          : super.skipInvalid;
      }
      set skipInvalid(e) {
        (this.isInitialized || e !== p.DEFAULTS.skipInvalid) &&
          console.warn(
            '"skipInvalid" option is not available in dynamic mask, use this option in siblings'
          );
      }
      maskEquals(e) {
        return (
          Array.isArray(e) &&
          this.compiledMasks.every((t, s) => {
            if (!e[s]) return;
            const n = e[s],
              { mask: a } = n;
            return c(t, i(n, B)) && t.maskEquals(a);
          })
        );
      }
      typedValueEquals(e) {
        var t;
        return Boolean(
          null === (t = this.currentMask) || void 0 === t
            ? void 0
            : t.typedValueEquals(e)
        );
      }
    }
    (L.DEFAULTS = {
      dispatch: (e, t, s, i) => {
        if (!t.compiledMasks.length) return;
        const n = t.rawInputValue,
          a = t.compiledMasks.map((a, r) => {
            const o = t.currentMask === a,
              u = o
                ? a.value.length
                : a.nearestInputPos(a.value.length, l.FORCE_LEFT);
            return (
              a.rawInputValue !== n
                ? (a.reset(), a.append(n, { raw: !0 }))
                : o || a.remove(u),
              a.append(e, t.currentMaskFlags(s)),
              a.appendTail(i),
              {
                index: r,
                weight: a.rawInputValue.length,
                totalInputPositions: a.totalInputPositions(
                  0,
                  Math.max(u, a.nearestInputPos(a.value.length, l.FORCE_LEFT))
                ),
              }
            );
          });
        return (
          a.sort(
            (e, t) =>
              t.weight - e.weight ||
              t.totalInputPositions - e.totalInputPositions
          ),
          t.compiledMasks[a[0].index]
        );
      },
    }),
      (n.MaskedDynamic = L);
    const P = {
      MASKED: "value",
      UNMASKED: "unmaskedValue",
      TYPED: "typedValue",
    };
    function I(e) {
      let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : P.MASKED,
        s =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : P.MASKED;
      const i = f(e);
      return (e) => i.runIsolated((i) => ((i[t] = e), i[s]));
    }
    (n.PIPE_TYPE = P),
      (n.createPipe = I),
      (n.pipe = function (e) {
        for (
          var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          s[i - 1] = arguments[i];
        return I(...s)(e);
      });
    try {
      globalThis.IMask = n;
    } catch (e) {}
    class q {
      constructor(e) {
        let t = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("Проснулся"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t)
              return (
                e.preventDefault(),
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `Ой ой, не заполнен атрибут у ${t.classList}`
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this)
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this)
          ),
          document.querySelector("form[data-ajax],form[data-dev]") &&
            document.addEventListener(
              "formSent",
              function (e) {
                const t = e.detail.form.dataset.popupMessage;
                t && this.open(t);
              }.bind(this)
            ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this)
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this)
            ));
      }
      open(e) {
        if (
          (e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute
              )}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const s = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${s}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : z(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } })
            ),
            this.popupLogging("Открыл попап");
        } else
          this.popupLogging(
            "Ой ой, такого попапа нет. Проверьте корректность ввода. "
          );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            $ &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              z(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("Закрыл попап"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`
        ) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          s = Array.prototype.slice.call(t),
          i = s.indexOf(document.activeElement);
        e.shiftKey && 0 === i && (s[s.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            i !== s.length - 1 ||
            (s[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging && U(`[Попапос]: ${e}`);
      }
    }
    class R {
      constructor(e, t = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
          this.config.init)
        ) {
          const e = document.querySelectorAll("[data-prlx-mouse]");
          e.length
            ? (this.paralaxMouseInit(e),
              this.setLogging(`Проснулся, слежу за объектами: (${e.length})`))
            : this.setLogging("Нет ни одного объекта. Сплю...zzZZZzZZz...");
        }
      }
      paralaxMouseInit(e) {
        e.forEach((e) => {
          const t = e.closest("[data-prlx-mouse-wrapper]"),
            s = e.dataset.prlxCx ? +e.dataset.prlxCx : 100,
            i = e.dataset.prlxCy ? +e.dataset.prlxCy : 100,
            n = e.hasAttribute("data-prlx-dxr") ? -1 : 1,
            a = e.hasAttribute("data-prlx-dyr") ? -1 : 1,
            r = e.dataset.prlxA ? +e.dataset.prlxA : 50;
          let l = 0,
            o = 0,
            u = 0,
            c = 0;
          function h(t = window) {
            t.addEventListener("mousemove", function (t) {
              const s = e.getBoundingClientRect().top + window.scrollY;
              if (s >= window.scrollY || s + e.offsetHeight >= window.scrollY) {
                const e = window.innerWidth,
                  s = window.innerHeight,
                  i = t.clientX - e / 2,
                  n = t.clientY - s / 2;
                (u = (i / e) * 100), (c = (n / s) * 100);
              }
            });
          }
          !(function t() {
            (l += ((u - l) * r) / 1e3),
              (o += ((c - o) * r) / 1e3),
              (e.style.cssText = `transform: translate3D(${
                (n * l) / (s / 10)
              }%,${(a * o) / (i / 10)}%,0);`),
              requestAnimationFrame(t);
          })(),
            t ? h(t) : h();
        });
      }
      setLogging(e) {
        this.config.logging && U(`[PRLX Mouse]: ${e}`);
      }
    }
    let V = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          V.Android() || V.BlackBerry() || V.iOS() || V.Opera() || V.Windows()
        );
      },
    };
    let N = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t));
      },
      j = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let i = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = i + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide");
            }, t);
        }
      },
      W = (e, t = 500) => (e.hidden ? j(e, t) : N(e, t)),
      $ = !0,
      z = (e = 500) => {
        document.documentElement.classList.contains("lock") ? H(e) : Y(e);
      },
      H = (e = 500) => {
        let t = document.querySelector("body");
        if ($) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            ($ = !1),
            setTimeout(function () {
              $ = !0;
            }, e);
        }
      },
      Y = (e = 500) => {
        let t = document.querySelector("body");
        if ($) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            ($ = !1),
            setTimeout(function () {
              $ = !0;
            }, e);
        }
      };
    function U(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    let X = (e, t = !1, s = 500, i = 0) => {
      const n = document.querySelector(e);
      if (n) {
        let a = "",
          r = 0;
        t &&
          ((a = "header.header"), (r = document.querySelector(a).offsetHeight));
        let l = {
          speedAsDuration: !0,
          speed: s,
          header: a,
          offset: i,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (H(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(n, "", l);
        else {
          let e = n.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: r ? e - r : e, behavior: "smooth" });
        }
        U(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else U(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    class G {
      constructor(e, t = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
          (this.selectClasses = {
            classSelect: "select",
            classSelectBody: "select__body",
            classSelectTitle: "select__title",
            classSelectValue: "select__value",
            classSelectLabel: "select__label",
            classSelectInput: "select__input",
            classSelectText: "select__text",
            classSelectLink: "select__link",
            classSelectOptions: "select__options",
            classSelectOptionsScroll: "select__scroll",
            classSelectOption: "select__option",
            classSelectContent: "select__content",
            classSelectRow: "select__row",
            classSelectData: "select__asset",
            classSelectDisabled: "_select-disabled",
            classSelectTag: "_select-tag",
            classSelectOpen: "_select-open",
            classSelectActive: "_select-active",
            classSelectFocus: "_select-focus",
            classSelectMultiple: "_select-multiple",
            classSelectCheckBox: "_select-checkbox",
            classSelectOptionSelected: "_select-selected",
          }),
          (this._this = this),
          this.config.init)
        ) {
          const e = t
            ? document.querySelectorAll(t)
            : document.querySelectorAll("select");
          e.length
            ? (this.selectsInit(e),
              this.setLogging(`Проснулся, построил селектов: (${e.length})`))
            : this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
        }
      }
      getSelectClass(e) {
        return `.${e}`;
      }
      getSelectElement(e, t) {
        return {
          originalSelect: e.querySelector("select"),
          selectElement: e.querySelector(this.getSelectClass(t)),
        };
      }
      selectsInit(e) {
        e.forEach((e, t) => {
          this.selectInit(e, t + 1);
        }),
          document.addEventListener(
            "click",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "keydown",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusin",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusout",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          );
      }
      selectInit(e, t) {
        const s = this;
        let i = document.createElement("div");
        if (
          (i.classList.add(this.selectClasses.classSelect),
          e.parentNode.insertBefore(i, e),
          i.appendChild(e),
          (e.hidden = !0),
          t && (e.dataset.id = t),
          i.insertAdjacentHTML(
            "beforeend",
            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
          ),
          this.selectBuild(e),
          this.getSelectPlaceholder(e) &&
            ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
            this.getSelectPlaceholder(e).label.show))
        ) {
          this.getSelectElement(
            i,
            this.selectClasses.classSelectTitle
          ).selectElement.insertAdjacentHTML(
            "afterbegin",
            `<span class="${this.selectClasses.classSelectLabel}">${
              this.getSelectPlaceholder(e).label.text
                ? this.getSelectPlaceholder(e).label.text
                : this.getSelectPlaceholder(e).value
            }</span>`
          );
        }
        (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
          e.addEventListener("change", function (e) {
            s.selectChange(e);
          });
      }
      selectBuild(e) {
        const t = e.parentElement;
        (t.dataset.id = e.dataset.id),
          t.classList.add(
            e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
          ),
          e.multiple
            ? t.classList.add(this.selectClasses.classSelectMultiple)
            : t.classList.remove(this.selectClasses.classSelectMultiple),
          e.hasAttribute("data-checkbox") && e.multiple
            ? t.classList.add(this.selectClasses.classSelectCheckBox)
            : t.classList.remove(this.selectClasses.classSelectCheckBox),
          this.setSelectTitleValue(t, e),
          this.setOptions(t, e),
          e.hasAttribute("data-search") && this.searchActions(t),
          e.hasAttribute("data-open") && this.selectAction(t),
          this.selectDisabled(t, e);
      }
      selectsActions(e) {
        const t = e.target,
          s = e.type;
        if (
          t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
          t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
        ) {
          const i = t.closest(".select")
              ? t.closest(".select")
              : document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${
                    t.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag)
                    ).dataset.selectId
                  }"]`
                ),
            n = this.getSelectElement(i).originalSelect;
          if ("click" === s) {
            if (!n.disabled)
              if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                )
              ) {
                const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ),
                  s = document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                  );
                this.optionAction(i, n, s);
              } else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle)
                )
              )
                this.selectAction(i);
              else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                )
              ) {
                const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                );
                this.optionAction(i, n, e);
              }
          } else
            "focusin" === s || "focusout" === s
              ? t.closest(
                  this.getSelectClass(this.selectClasses.classSelect)
                ) &&
                ("focusin" === s
                  ? i.classList.add(this.selectClasses.classSelectFocus)
                  : i.classList.remove(this.selectClasses.classSelectFocus))
              : "keydown" === s && "Escape" === e.code && this.selectsСlose();
        } else this.selectsСlose();
      }
      selectsСlose() {
        const e = document.querySelectorAll(
          `${this.getSelectClass(
            this.selectClasses.classSelect
          )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
        );
        e.length &&
          e.forEach((e) => {
            this.selectAction(e);
          });
      }
      selectAction(e) {
        const t = this.getSelectElement(e).originalSelect,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement;
        s.classList.contains("_slide") ||
          (e.classList.toggle(this.selectClasses.classSelectOpen),
          W(s, t.dataset.speed));
      }
      setSelectTitleValue(e, t) {
        const s = this.getSelectElement(
            e,
            this.selectClasses.classSelectBody
          ).selectElement,
          i = this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement;
        i && i.remove(),
          s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
      }
      getSelectTitleValue(e, t) {
        let s = this.getSelectedOptionsData(t, 2).html;
        if (
          (t.multiple &&
            t.hasAttribute("data-tags") &&
            ((s = this.getSelectedOptionsData(t)
              .elements.map(
                (t) =>
                  `<span role="button" data-select-id="${
                    e.dataset.id
                  }" data-value="${
                    t.value
                  }" class="_select-tag">${this.getSelectElementContent(
                    t
                  )}</span>`
              )
              .join("")),
            t.dataset.tags &&
              document.querySelector(t.dataset.tags) &&
              ((document.querySelector(t.dataset.tags).innerHTML = s),
              t.hasAttribute("data-search") && (s = !1))),
          (s = s.length ? s : t.dataset.placeholder),
          this.getSelectedOptionsData(t).values.length
            ? e.classList.add(this.selectClasses.classSelectActive)
            : e.classList.remove(this.selectClasses.classSelectActive),
          t.hasAttribute("data-search"))
        )
          return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
        {
          const e =
            this.getSelectedOptionsData(t).elements.length &&
            this.getSelectedOptionsData(t).elements[0].dataset.class
              ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
              : "";
          return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
        }
      }
      getSelectElementContent(e) {
        const t = e.dataset.asset ? `${e.dataset.asset}` : "",
          s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
        let i = "";
        return (
          (i += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectData}">`
            : ""),
          (i += t ? s : ""),
          (i += t ? "</span>" : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectText}">`
            : ""),
          (i += e.textContent),
          (i += t ? "</span>" : ""),
          (i += t ? "</span>" : ""),
          i
        );
      }
      getSelectPlaceholder(e) {
        const t = Array.from(e.options).find((e) => !e.value);
        if (t)
          return {
            value: t.textContent,
            show: t.hasAttribute("data-show"),
            label: {
              show: t.hasAttribute("data-label"),
              text: t.dataset.label,
            },
          };
      }
      getSelectedOptionsData(e, t) {
        let s = [];
        return (
          e.multiple
            ? (s = Array.from(e.options)
                .filter((e) => e.value)
                .filter((e) => e.selected))
            : s.push(e.options[e.selectedIndex]),
          {
            elements: s.map((e) => e),
            values: s.filter((e) => e.value).map((e) => e.value),
            html: s.map((e) => this.getSelectElementContent(e)),
          }
        );
      }
      getOptions(e) {
        let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
          s = e.dataset.scroll
            ? `style="max-height:${e.dataset.scroll}px"`
            : "",
          i = Array.from(e.options);
        if (i.length > 0) {
          let n = "";
          return (
            ((this.getSelectPlaceholder(e) &&
              !this.getSelectPlaceholder(e).show) ||
              e.multiple) &&
              (i = i.filter((e) => e.value)),
            (n += t
              ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
              : ""),
            i.forEach((t) => {
              n += this.getOption(t, e);
            }),
            (n += t ? "</div>" : ""),
            n
          );
        }
      }
      getOption(e, t) {
        const s =
            e.selected && t.multiple
              ? ` ${this.selectClasses.classSelectOptionSelected}`
              : "",
          i =
            e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
          n = e.dataset.class ? ` ${e.dataset.class}` : "",
          a = !!e.dataset.href && e.dataset.href,
          r = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
        let l = "";
        return (
          (l += a
            ? `<a ${r} ${i} href="${a}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${n}${s}">`
            : `<button ${i} class="${this.selectClasses.classSelectOption}${n}${s}" data-value="${e.value}" type="button">`),
          (l += this.getSelectElementContent(e)),
          (l += a ? "</a>" : "</button>"),
          l
        );
      }
      setOptions(e, t) {
        this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement.innerHTML = this.getOptions(t);
      }
      optionAction(e, t, s) {
        if (t.multiple) {
          s.classList.toggle(this.selectClasses.classSelectOptionSelected);
          this.getSelectedOptionsData(t).elements.forEach((e) => {
            e.removeAttribute("selected");
          });
          e.querySelectorAll(
            this.getSelectClass(this.selectClasses.classSelectOptionSelected)
          ).forEach((e) => {
            t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
              "selected",
              "selected"
            );
          });
        } else
          t.hasAttribute("data-show-selected") ||
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ) &&
              (e.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption
                )}[hidden]`
              ).hidden = !1),
            (s.hidden = !0)),
            (t.value = s.hasAttribute("data-value")
              ? s.dataset.value
              : s.textContent),
            this.selectAction(e);
        this.setSelectTitleValue(e, t), this.setSelectChange(t);
      }
      selectChange(e) {
        const t = e.target;
        this.selectBuild(t), this.setSelectChange(t);
      }
      setSelectChange(e) {
        if (
          (e.hasAttribute("data-validate") && K.validateInput(e),
          e.hasAttribute("data-submit") && e.value)
        ) {
          let t = document.createElement("button");
          (t.type = "submit"),
            e.closest("form").append(t),
            t.click(),
            t.remove();
        }
        const t = e.parentElement;
        this.selectCallback(t, e);
      }
      selectDisabled(e, t) {
        t.disabled
          ? (e.classList.add(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !0))
          : (e.classList.remove(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !1));
      }
      searchActions(e) {
        this.getSelectElement(e).originalSelect;
        const t = this.getSelectElement(
            e,
            this.selectClasses.classSelectInput
          ).selectElement,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement,
          i = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
          n = this;
        t.addEventListener("input", function () {
          i.forEach((e) => {
            e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
              ? (e.hidden = !1)
              : (e.hidden = !0);
          }),
            !0 === s.hidden && n.selectAction(e);
        });
      }
      selectCallback(e, t) {
        document.dispatchEvent(
          new CustomEvent("selectCallback", { detail: { select: t } })
        );
      }
      setLogging(e) {
        this.config.logging && U(`[select]: ${e}`);
      }
    }
    const Z = { inputMaskModule: null, selectModule: null };
    let K = {
      getErrors(e) {
        let t = 0,
          s = e.querySelectorAll("*[data-required]");
        return (
          s.length &&
            s.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error")
            );
      },
      formClean(e) {
        e.reset(),
          setTimeout(() => {
            let t = e.querySelectorAll("input,textarea");
            for (let e = 0; e < t.length; e++) {
              const s = t[e];
              s.parentElement.classList.remove("_form-focus"),
                s.classList.remove("_form-focus"),
                K.removeError(s),
                (s.value = s.dataset.placeholder);
            }
            let s = e.querySelectorAll(".checkbox__input");
            if (s.length > 0)
              for (let e = 0; e < s.length; e++) {
                s[e].checked = !1;
              }
            if (Z.selectModule) {
              let t = e.querySelectorAll(".select");
              if (t.length)
                for (let e = 0; e < t.length; e++) {
                  const s = t[e].querySelector("select");
                  Z.selectModule.selectBuild(s);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    var J = s(807);
    const Q = function (e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    };
    const ee =
      "object" == typeof global && global && global.Object === Object && global;
    var te = "object" == typeof self && self && self.Object === Object && self;
    const se = ee || te || Function("return this")();
    const ie = function () {
      return se.Date.now();
    };
    var ne = /\s/;
    const ae = function (e) {
      for (var t = e.length; t-- && ne.test(e.charAt(t)); );
      return t;
    };
    var re = /^\s+/;
    const le = function (e) {
      return e ? e.slice(0, ae(e) + 1).replace(re, "") : e;
    };
    const oe = se.Symbol;
    var ue = Object.prototype,
      ce = ue.hasOwnProperty,
      he = ue.toString,
      de = oe ? oe.toStringTag : void 0;
    const pe = function (e) {
      var t = ce.call(e, de),
        s = e[de];
      try {
        e[de] = void 0;
        var i = !0;
      } catch (e) {}
      var n = he.call(e);
      return i && (t ? (e[de] = s) : delete e[de]), n;
    };
    var ge = Object.prototype.toString;
    const fe = function (e) {
      return ge.call(e);
    };
    var me = oe ? oe.toStringTag : void 0;
    const ve = function (e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : me && me in Object(e)
        ? pe(e)
        : fe(e);
    };
    const be = function (e) {
      return null != e && "object" == typeof e;
    };
    const Ee = function (e) {
      return "symbol" == typeof e || (be(e) && "[object Symbol]" == ve(e));
    };
    var ye = /^[-+]0x[0-9a-f]+$/i,
      Se = /^0b[01]+$/i,
      ke = /^0o[0-7]+$/i,
      Ae = parseInt;
    const _e = function (e) {
      if ("number" == typeof e) return e;
      if (Ee(e)) return NaN;
      if (Q(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = Q(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = le(e);
      var s = Se.test(e);
      return s || ke.test(e)
        ? Ae(e.slice(2), s ? 2 : 8)
        : ye.test(e)
        ? NaN
        : +e;
    };
    var Ce = Math.max,
      xe = Math.min;
    const we = function (e, t, s) {
      var i,
        n,
        a,
        r,
        l,
        o,
        u = 0,
        c = !1,
        h = !1,
        d = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      function p(t) {
        var s = i,
          a = n;
        return (i = n = void 0), (u = t), (r = e.apply(a, s));
      }
      function g(e) {
        var s = e - o;
        return void 0 === o || s >= t || s < 0 || (h && e - u >= a);
      }
      function f() {
        var e = ie();
        if (g(e)) return m(e);
        l = setTimeout(
          f,
          (function (e) {
            var s = t - (e - o);
            return h ? xe(s, a - (e - u)) : s;
          })(e)
        );
      }
      function m(e) {
        return (l = void 0), d && i ? p(e) : ((i = n = void 0), r);
      }
      function v() {
        var e = ie(),
          s = g(e);
        if (((i = arguments), (n = this), (o = e), s)) {
          if (void 0 === l)
            return (function (e) {
              return (u = e), (l = setTimeout(f, t)), c ? p(e) : r;
            })(o);
          if (h) return clearTimeout(l), (l = setTimeout(f, t)), p(o);
        }
        return void 0 === l && (l = setTimeout(f, t)), r;
      }
      return (
        (t = _e(t) || 0),
        Q(s) &&
          ((c = !!s.leading),
          (a = (h = "maxWait" in s) ? Ce(_e(s.maxWait) || 0, t) : a),
          (d = "trailing" in s ? !!s.trailing : d)),
        (v.cancel = function () {
          void 0 !== l && clearTimeout(l), (u = 0), (i = o = n = l = void 0);
        }),
        (v.flush = function () {
          return void 0 === l ? r : m(ie());
        }),
        v
      );
    };
    const De = function (e, t, s) {
      var i = !0,
        n = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      return (
        Q(s) &&
          ((i = "leading" in s ? !!s.leading : i),
          (n = "trailing" in s ? !!s.trailing : n)),
        we(e, t, { leading: i, maxWait: t, trailing: n })
      );
    };
    var Oe = function () {
        return (
          (Oe =
            Object.assign ||
            function (e) {
              for (var t, s = 1, i = arguments.length; s < i; s++)
                for (var n in (t = arguments[s]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }),
          Oe.apply(this, arguments)
        );
      },
      Fe = null,
      Me = null;
    function Te() {
      if (null === Fe) {
        if ("undefined" == typeof document) return (Fe = 0);
        var e = document.body,
          t = document.createElement("div");
        t.classList.add("simplebar-hide-scrollbar"), e.appendChild(t);
        var s = t.getBoundingClientRect().right;
        e.removeChild(t), (Fe = s);
      }
      return Fe;
    }
    function Be(e) {
      return e && e.ownerDocument && e.ownerDocument.defaultView
        ? e.ownerDocument.defaultView
        : window;
    }
    function Le(e) {
      return e && e.ownerDocument ? e.ownerDocument : document;
    }
    J &&
      window.addEventListener("resize", function () {
        Me !== window.devicePixelRatio &&
          ((Me = window.devicePixelRatio), (Fe = null));
      });
    var Pe = function (e) {
      return Array.prototype.reduce.call(
        e,
        function (e, t) {
          var s = t.name.match(/data-simplebar-(.+)/);
          if (s) {
            var i = s[1].replace(/\W+(.)/g, function (e, t) {
              return t.toUpperCase();
            });
            switch (t.value) {
              case "true":
                e[i] = !0;
                break;
              case "false":
                e[i] = !1;
                break;
              case void 0:
                e[i] = !0;
                break;
              default:
                e[i] = t.value;
            }
          }
          return e;
        },
        {}
      );
    };
    function Ie(e, t) {
      var s;
      e && (s = e.classList).add.apply(s, t.split(" "));
    }
    function qe(e, t) {
      e &&
        t.split(" ").forEach(function (t) {
          e.classList.remove(t);
        });
    }
    function Re(e) {
      return ".".concat(e.split(" ").join("."));
    }
    var Ve = Object.freeze({
        __proto__: null,
        getElementWindow: Be,
        getElementDocument: Le,
        getOptions: Pe,
        addClasses: Ie,
        removeClasses: qe,
        classNamesToQuery: Re,
      }),
      Ne = Be,
      je = Le,
      We = Pe,
      $e = Ie,
      ze = qe,
      He = Re,
      Ye = (function () {
        function e(t, s) {
          void 0 === s && (s = {});
          var i = this;
          if (
            ((this.removePreventClickId = null),
            (this.minScrollbarWidth = 20),
            (this.stopScrollDelay = 175),
            (this.isScrolling = !1),
            (this.isMouseEntering = !1),
            (this.scrollXTicking = !1),
            (this.scrollYTicking = !1),
            (this.wrapperEl = null),
            (this.contentWrapperEl = null),
            (this.contentEl = null),
            (this.offsetEl = null),
            (this.maskEl = null),
            (this.placeholderEl = null),
            (this.heightAutoObserverWrapperEl = null),
            (this.heightAutoObserverEl = null),
            (this.rtlHelpers = null),
            (this.scrollbarWidth = 0),
            (this.resizeObserver = null),
            (this.mutationObserver = null),
            (this.elStyles = null),
            (this.isRtl = null),
            (this.mouseX = 0),
            (this.mouseY = 0),
            (this.onMouseMove = function () {}),
            (this.onWindowResize = function () {}),
            (this.onStopScrolling = function () {}),
            (this.onMouseEntered = function () {}),
            (this.onScroll = function () {
              var e = Ne(i.el);
              i.scrollXTicking ||
                (e.requestAnimationFrame(i.scrollX), (i.scrollXTicking = !0)),
                i.scrollYTicking ||
                  (e.requestAnimationFrame(i.scrollY), (i.scrollYTicking = !0)),
                i.isScrolling ||
                  ((i.isScrolling = !0), $e(i.el, i.classNames.scrolling)),
                i.showScrollbar("x"),
                i.showScrollbar("y"),
                i.onStopScrolling();
            }),
            (this.scrollX = function () {
              i.axis.x.isOverflowing && i.positionScrollbar("x"),
                (i.scrollXTicking = !1);
            }),
            (this.scrollY = function () {
              i.axis.y.isOverflowing && i.positionScrollbar("y"),
                (i.scrollYTicking = !1);
            }),
            (this._onStopScrolling = function () {
              ze(i.el, i.classNames.scrolling),
                i.options.autoHide &&
                  (i.hideScrollbar("x"), i.hideScrollbar("y")),
                (i.isScrolling = !1);
            }),
            (this.onMouseEnter = function () {
              i.isMouseEntering ||
                ($e(i.el, i.classNames.mouseEntered),
                i.showScrollbar("x"),
                i.showScrollbar("y"),
                (i.isMouseEntering = !0)),
                i.onMouseEntered();
            }),
            (this._onMouseEntered = function () {
              ze(i.el, i.classNames.mouseEntered),
                i.options.autoHide &&
                  (i.hideScrollbar("x"), i.hideScrollbar("y")),
                (i.isMouseEntering = !1);
            }),
            (this._onMouseMove = function (e) {
              (i.mouseX = e.clientX),
                (i.mouseY = e.clientY),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  i.onMouseMoveForAxis("x"),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  i.onMouseMoveForAxis("y");
            }),
            (this.onMouseLeave = function () {
              i.onMouseMove.cancel(),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  i.onMouseLeaveForAxis("x"),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  i.onMouseLeaveForAxis("y"),
                (i.mouseX = -1),
                (i.mouseY = -1);
            }),
            (this._onWindowResize = function () {
              (i.scrollbarWidth = i.getScrollbarWidth()),
                i.hideNativeScrollbar();
            }),
            (this.onPointerEvent = function (e) {
              var t, s;
              i.axis.x.track.el &&
                i.axis.y.track.el &&
                i.axis.x.scrollbar.el &&
                i.axis.y.scrollbar.el &&
                ((i.axis.x.track.rect =
                  i.axis.x.track.el.getBoundingClientRect()),
                (i.axis.y.track.rect =
                  i.axis.y.track.el.getBoundingClientRect()),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  (t = i.isWithinBounds(i.axis.x.track.rect)),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  (s = i.isWithinBounds(i.axis.y.track.rect)),
                (t || s) &&
                  (e.stopPropagation(),
                  "pointerdown" === e.type &&
                    "touch" !== e.pointerType &&
                    (t &&
                      ((i.axis.x.scrollbar.rect =
                        i.axis.x.scrollbar.el.getBoundingClientRect()),
                      i.isWithinBounds(i.axis.x.scrollbar.rect)
                        ? i.onDragStart(e, "x")
                        : i.onTrackClick(e, "x")),
                    s &&
                      ((i.axis.y.scrollbar.rect =
                        i.axis.y.scrollbar.el.getBoundingClientRect()),
                      i.isWithinBounds(i.axis.y.scrollbar.rect)
                        ? i.onDragStart(e, "y")
                        : i.onTrackClick(e, "y")))));
            }),
            (this.drag = function (t) {
              var s, n, a, r, l, o, u, c, h, d, p;
              if (i.draggedAxis && i.contentWrapperEl) {
                var g = i.axis[i.draggedAxis].track,
                  f =
                    null !==
                      (n =
                        null === (s = g.rect) || void 0 === s
                          ? void 0
                          : s[i.axis[i.draggedAxis].sizeAttr]) && void 0 !== n
                      ? n
                      : 0,
                  m = i.axis[i.draggedAxis].scrollbar,
                  v =
                    null !==
                      (r =
                        null === (a = i.contentWrapperEl) || void 0 === a
                          ? void 0
                          : a[i.axis[i.draggedAxis].scrollSizeAttr]) &&
                    void 0 !== r
                      ? r
                      : 0,
                  b = parseInt(
                    null !==
                      (o =
                        null === (l = i.elStyles) || void 0 === l
                          ? void 0
                          : l[i.axis[i.draggedAxis].sizeAttr]) && void 0 !== o
                      ? o
                      : "0px",
                    10
                  );
                t.preventDefault(), t.stopPropagation();
                var E =
                    ("y" === i.draggedAxis ? t.pageY : t.pageX) -
                    (null !==
                      (c =
                        null === (u = g.rect) || void 0 === u
                          ? void 0
                          : u[i.axis[i.draggedAxis].offsetAttr]) && void 0 !== c
                      ? c
                      : 0) -
                    i.axis[i.draggedAxis].dragOffset,
                  y =
                    ((E =
                      "x" === i.draggedAxis && i.isRtl
                        ? (null !==
                            (d =
                              null === (h = g.rect) || void 0 === h
                                ? void 0
                                : h[i.axis[i.draggedAxis].sizeAttr]) &&
                          void 0 !== d
                            ? d
                            : 0) -
                          m.size -
                          E
                        : E) /
                      (f - m.size)) *
                    (v - b);
                "x" === i.draggedAxis &&
                  i.isRtl &&
                  (y = (
                    null === (p = e.getRtlHelpers()) || void 0 === p
                      ? void 0
                      : p.isScrollingToNegative
                  )
                    ? -y
                    : y),
                  (i.contentWrapperEl[i.axis[i.draggedAxis].scrollOffsetAttr] =
                    y);
              }
            }),
            (this.onEndDrag = function (e) {
              var t = je(i.el),
                s = Ne(i.el);
              e.preventDefault(),
                e.stopPropagation(),
                ze(i.el, i.classNames.dragging),
                t.removeEventListener("mousemove", i.drag, !0),
                t.removeEventListener("mouseup", i.onEndDrag, !0),
                (i.removePreventClickId = s.setTimeout(function () {
                  t.removeEventListener("click", i.preventClick, !0),
                    t.removeEventListener("dblclick", i.preventClick, !0),
                    (i.removePreventClickId = null);
                }));
            }),
            (this.preventClick = function (e) {
              e.preventDefault(), e.stopPropagation();
            }),
            (this.el = t),
            (this.options = Oe(Oe({}, e.defaultOptions), s)),
            (this.classNames = Oe(
              Oe({}, e.defaultOptions.classNames),
              s.classNames
            )),
            (this.axis = {
              x: {
                scrollOffsetAttr: "scrollLeft",
                sizeAttr: "width",
                scrollSizeAttr: "scrollWidth",
                offsetSizeAttr: "offsetWidth",
                offsetAttr: "left",
                overflowAttr: "overflowX",
                dragOffset: 0,
                isOverflowing: !0,
                forceVisible: !1,
                track: { size: null, el: null, rect: null, isVisible: !1 },
                scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
              },
              y: {
                scrollOffsetAttr: "scrollTop",
                sizeAttr: "height",
                scrollSizeAttr: "scrollHeight",
                offsetSizeAttr: "offsetHeight",
                offsetAttr: "top",
                overflowAttr: "overflowY",
                dragOffset: 0,
                isOverflowing: !0,
                forceVisible: !1,
                track: { size: null, el: null, rect: null, isVisible: !1 },
                scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
              },
            }),
            "object" != typeof this.el || !this.el.nodeName)
          )
            throw new Error(
              "Argument passed to SimpleBar must be an HTML element instead of ".concat(
                this.el
              )
            );
          (this.onMouseMove = De(this._onMouseMove, 64)),
            (this.onWindowResize = we(this._onWindowResize, 64, {
              leading: !0,
            })),
            (this.onStopScrolling = we(
              this._onStopScrolling,
              this.stopScrollDelay
            )),
            (this.onMouseEntered = we(
              this._onMouseEntered,
              this.stopScrollDelay
            )),
            this.init();
        }
        return (
          (e.getRtlHelpers = function () {
            if (e.rtlHelpers) return e.rtlHelpers;
            var t = document.createElement("div");
            t.innerHTML =
              '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
            var s = t.firstElementChild,
              i = null == s ? void 0 : s.firstElementChild;
            if (!i) return null;
            document.body.appendChild(s), (s.scrollLeft = 0);
            var n = e.getOffset(s),
              a = e.getOffset(i);
            s.scrollLeft = -999;
            var r = e.getOffset(i);
            return (
              document.body.removeChild(s),
              (e.rtlHelpers = {
                isScrollOriginAtZero: n.left !== a.left,
                isScrollingToNegative: a.left !== r.left,
              }),
              e.rtlHelpers
            );
          }),
          (e.prototype.getScrollbarWidth = function () {
            try {
              return (this.contentWrapperEl &&
                "none" ===
                  getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
                    .display) ||
                "scrollbarWidth" in document.documentElement.style ||
                "-ms-overflow-style" in document.documentElement.style
                ? 0
                : Te();
            } catch (e) {
              return Te();
            }
          }),
          (e.getOffset = function (e) {
            var t = e.getBoundingClientRect(),
              s = je(e),
              i = Ne(e);
            return {
              top: t.top + (i.pageYOffset || s.documentElement.scrollTop),
              left: t.left + (i.pageXOffset || s.documentElement.scrollLeft),
            };
          }),
          (e.prototype.init = function () {
            J &&
              (this.initDOM(),
              (this.rtlHelpers = e.getRtlHelpers()),
              (this.scrollbarWidth = this.getScrollbarWidth()),
              this.recalculate(),
              this.initListeners());
          }),
          (e.prototype.initDOM = function () {
            var e, t;
            (this.wrapperEl = this.el.querySelector(
              He(this.classNames.wrapper)
            )),
              (this.contentWrapperEl =
                this.options.scrollableNode ||
                this.el.querySelector(He(this.classNames.contentWrapper))),
              (this.contentEl =
                this.options.contentNode ||
                this.el.querySelector(He(this.classNames.contentEl))),
              (this.offsetEl = this.el.querySelector(
                He(this.classNames.offset)
              )),
              (this.maskEl = this.el.querySelector(He(this.classNames.mask))),
              (this.placeholderEl = this.findChild(
                this.wrapperEl,
                He(this.classNames.placeholder)
              )),
              (this.heightAutoObserverWrapperEl = this.el.querySelector(
                He(this.classNames.heightAutoObserverWrapperEl)
              )),
              (this.heightAutoObserverEl = this.el.querySelector(
                He(this.classNames.heightAutoObserverEl)
              )),
              (this.axis.x.track.el = this.findChild(
                this.el,
                ""
                  .concat(He(this.classNames.track))
                  .concat(He(this.classNames.horizontal))
              )),
              (this.axis.y.track.el = this.findChild(
                this.el,
                ""
                  .concat(He(this.classNames.track))
                  .concat(He(this.classNames.vertical))
              )),
              (this.axis.x.scrollbar.el =
                (null === (e = this.axis.x.track.el) || void 0 === e
                  ? void 0
                  : e.querySelector(He(this.classNames.scrollbar))) || null),
              (this.axis.y.scrollbar.el =
                (null === (t = this.axis.y.track.el) || void 0 === t
                  ? void 0
                  : t.querySelector(He(this.classNames.scrollbar))) || null),
              this.options.autoHide ||
                ($e(this.axis.x.scrollbar.el, this.classNames.visible),
                $e(this.axis.y.scrollbar.el, this.classNames.visible));
          }),
          (e.prototype.initListeners = function () {
            var e,
              t = this,
              s = Ne(this.el);
            if (
              (this.el.addEventListener("mouseenter", this.onMouseEnter),
              this.el.addEventListener("pointerdown", this.onPointerEvent, !0),
              this.el.addEventListener("mousemove", this.onMouseMove),
              this.el.addEventListener("mouseleave", this.onMouseLeave),
              null === (e = this.contentWrapperEl) ||
                void 0 === e ||
                e.addEventListener("scroll", this.onScroll),
              s.addEventListener("resize", this.onWindowResize),
              this.contentEl)
            ) {
              if (window.ResizeObserver) {
                var i = !1,
                  n = s.ResizeObserver || ResizeObserver;
                (this.resizeObserver = new n(function () {
                  i &&
                    s.requestAnimationFrame(function () {
                      t.recalculate();
                    });
                })),
                  this.resizeObserver.observe(this.el),
                  this.resizeObserver.observe(this.contentEl),
                  s.requestAnimationFrame(function () {
                    i = !0;
                  });
              }
              (this.mutationObserver = new s.MutationObserver(function () {
                s.requestAnimationFrame(function () {
                  t.recalculate();
                });
              })),
                this.mutationObserver.observe(this.contentEl, {
                  childList: !0,
                  subtree: !0,
                  characterData: !0,
                });
            }
          }),
          (e.prototype.recalculate = function () {
            if (
              this.heightAutoObserverEl &&
              this.contentEl &&
              this.contentWrapperEl &&
              this.wrapperEl &&
              this.placeholderEl
            ) {
              var e = Ne(this.el);
              (this.elStyles = e.getComputedStyle(this.el)),
                (this.isRtl = "rtl" === this.elStyles.direction);
              var t = this.contentEl.offsetWidth,
                s = this.heightAutoObserverEl.offsetHeight <= 1,
                i = this.heightAutoObserverEl.offsetWidth <= 1 || t > 0,
                n = this.contentWrapperEl.offsetWidth,
                a = this.elStyles.overflowX,
                r = this.elStyles.overflowY;
              (this.contentEl.style.padding = ""
                .concat(this.elStyles.paddingTop, " ")
                .concat(this.elStyles.paddingRight, " ")
                .concat(this.elStyles.paddingBottom, " ")
                .concat(this.elStyles.paddingLeft)),
                (this.wrapperEl.style.margin = "-"
                  .concat(this.elStyles.paddingTop, " -")
                  .concat(this.elStyles.paddingRight, " -")
                  .concat(this.elStyles.paddingBottom, " -")
                  .concat(this.elStyles.paddingLeft));
              var l = this.contentEl.scrollHeight,
                o = this.contentEl.scrollWidth;
              (this.contentWrapperEl.style.height = s ? "auto" : "100%"),
                (this.placeholderEl.style.width = i
                  ? "".concat(t || o, "px")
                  : "auto"),
                (this.placeholderEl.style.height = "".concat(l, "px"));
              var u = this.contentWrapperEl.offsetHeight;
              (this.axis.x.isOverflowing = 0 !== t && o > t),
                (this.axis.y.isOverflowing = l > u),
                (this.axis.x.isOverflowing =
                  "hidden" !== a && this.axis.x.isOverflowing),
                (this.axis.y.isOverflowing =
                  "hidden" !== r && this.axis.y.isOverflowing),
                (this.axis.x.forceVisible =
                  "x" === this.options.forceVisible ||
                  !0 === this.options.forceVisible),
                (this.axis.y.forceVisible =
                  "y" === this.options.forceVisible ||
                  !0 === this.options.forceVisible),
                this.hideNativeScrollbar();
              var c = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                h = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
              (this.axis.x.isOverflowing =
                this.axis.x.isOverflowing && o > n - h),
                (this.axis.y.isOverflowing =
                  this.axis.y.isOverflowing && l > u - c),
                (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
                (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
                this.axis.x.scrollbar.el &&
                  (this.axis.x.scrollbar.el.style.width = "".concat(
                    this.axis.x.scrollbar.size,
                    "px"
                  )),
                this.axis.y.scrollbar.el &&
                  (this.axis.y.scrollbar.el.style.height = "".concat(
                    this.axis.y.scrollbar.size,
                    "px"
                  )),
                this.positionScrollbar("x"),
                this.positionScrollbar("y"),
                this.toggleTrackVisibility("x"),
                this.toggleTrackVisibility("y");
            }
          }),
          (e.prototype.getScrollbarSize = function (e) {
            var t, s;
            if (
              (void 0 === e && (e = "y"),
              !this.axis[e].isOverflowing || !this.contentEl)
            )
              return 0;
            var i,
              n = this.contentEl[this.axis[e].scrollSizeAttr],
              a =
                null !==
                  (s =
                    null === (t = this.axis[e].track.el) || void 0 === t
                      ? void 0
                      : t[this.axis[e].offsetSizeAttr]) && void 0 !== s
                  ? s
                  : 0,
              r = a / n;
            return (
              (i = Math.max(~~(r * a), this.options.scrollbarMinSize)),
              this.options.scrollbarMaxSize &&
                (i = Math.min(i, this.options.scrollbarMaxSize)),
              i
            );
          }),
          (e.prototype.positionScrollbar = function (t) {
            var s, i, n;
            void 0 === t && (t = "y");
            var a = this.axis[t].scrollbar;
            if (
              this.axis[t].isOverflowing &&
              this.contentWrapperEl &&
              a.el &&
              this.elStyles
            ) {
              var r = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                l =
                  (null === (s = this.axis[t].track.el) || void 0 === s
                    ? void 0
                    : s[this.axis[t].offsetSizeAttr]) || 0,
                o = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                u = this.contentWrapperEl[this.axis[t].scrollOffsetAttr];
              (u =
                "x" === t &&
                this.isRtl &&
                (null === (i = e.getRtlHelpers()) || void 0 === i
                  ? void 0
                  : i.isScrollOriginAtZero)
                  ? -u
                  : u),
                "x" === t &&
                  this.isRtl &&
                  (u = (
                    null === (n = e.getRtlHelpers()) || void 0 === n
                      ? void 0
                      : n.isScrollingToNegative
                  )
                    ? u
                    : -u);
              var c = u / (r - o),
                h = ~~((l - a.size) * c);
              (h = "x" === t && this.isRtl ? -h + (l - a.size) : h),
                (a.el.style.transform =
                  "x" === t
                    ? "translate3d(".concat(h, "px, 0, 0)")
                    : "translate3d(0, ".concat(h, "px, 0)"));
            }
          }),
          (e.prototype.toggleTrackVisibility = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].track.el,
              s = this.axis[e].scrollbar.el;
            t &&
              s &&
              this.contentWrapperEl &&
              (this.axis[e].isOverflowing || this.axis[e].forceVisible
                ? ((t.style.visibility = "visible"),
                  (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                    "scroll"),
                  this.el.classList.add(
                    "".concat(this.classNames.scrollable, "-").concat(e)
                  ))
                : ((t.style.visibility = "hidden"),
                  (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                    "hidden"),
                  this.el.classList.remove(
                    "".concat(this.classNames.scrollable, "-").concat(e)
                  )),
              this.axis[e].isOverflowing
                ? (s.style.display = "block")
                : (s.style.display = "none"));
          }),
          (e.prototype.showScrollbar = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].isOverflowing &&
                !this.axis[e].scrollbar.isVisible &&
                ($e(this.axis[e].scrollbar.el, this.classNames.visible),
                (this.axis[e].scrollbar.isVisible = !0));
          }),
          (e.prototype.hideScrollbar = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].isOverflowing &&
                this.axis[e].scrollbar.isVisible &&
                (ze(this.axis[e].scrollbar.el, this.classNames.visible),
                (this.axis[e].scrollbar.isVisible = !1));
          }),
          (e.prototype.hideNativeScrollbar = function () {
            this.offsetEl &&
              ((this.offsetEl.style[this.isRtl ? "left" : "right"] =
                this.axis.y.isOverflowing || this.axis.y.forceVisible
                  ? "-".concat(this.scrollbarWidth, "px")
                  : "0px"),
              (this.offsetEl.style.bottom =
                this.axis.x.isOverflowing || this.axis.x.forceVisible
                  ? "-".concat(this.scrollbarWidth, "px")
                  : "0px"));
          }),
          (e.prototype.onMouseMoveForAxis = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e];
            t.track.el &&
              t.scrollbar.el &&
              ((t.track.rect = t.track.el.getBoundingClientRect()),
              (t.scrollbar.rect = t.scrollbar.el.getBoundingClientRect()),
              this.isWithinBounds(t.track.rect)
                ? (this.showScrollbar(e),
                  $e(t.track.el, this.classNames.hover),
                  this.isWithinBounds(t.scrollbar.rect)
                    ? $e(t.scrollbar.el, this.classNames.hover)
                    : ze(t.scrollbar.el, this.classNames.hover))
                : (ze(t.track.el, this.classNames.hover),
                  this.options.autoHide && this.hideScrollbar(e)));
          }),
          (e.prototype.onMouseLeaveForAxis = function (e) {
            void 0 === e && (e = "y"),
              ze(this.axis[e].track.el, this.classNames.hover),
              ze(this.axis[e].scrollbar.el, this.classNames.hover),
              this.options.autoHide && this.hideScrollbar(e);
          }),
          (e.prototype.onDragStart = function (e, t) {
            var s;
            void 0 === t && (t = "y");
            var i = je(this.el),
              n = Ne(this.el),
              a = this.axis[t].scrollbar,
              r = "y" === t ? e.pageY : e.pageX;
            (this.axis[t].dragOffset =
              r -
              ((null === (s = a.rect) || void 0 === s
                ? void 0
                : s[this.axis[t].offsetAttr]) || 0)),
              (this.draggedAxis = t),
              $e(this.el, this.classNames.dragging),
              i.addEventListener("mousemove", this.drag, !0),
              i.addEventListener("mouseup", this.onEndDrag, !0),
              null === this.removePreventClickId
                ? (i.addEventListener("click", this.preventClick, !0),
                  i.addEventListener("dblclick", this.preventClick, !0))
                : (n.clearTimeout(this.removePreventClickId),
                  (this.removePreventClickId = null));
          }),
          (e.prototype.onTrackClick = function (e, t) {
            var s,
              i,
              n,
              a,
              r = this;
            void 0 === t && (t = "y");
            var l = this.axis[t];
            if (
              this.options.clickOnTrack &&
              l.scrollbar.el &&
              this.contentWrapperEl
            ) {
              e.preventDefault();
              var o = Ne(this.el);
              this.axis[t].scrollbar.rect =
                l.scrollbar.el.getBoundingClientRect();
              var u =
                  null !==
                    (i =
                      null === (s = this.axis[t].scrollbar.rect) || void 0 === s
                        ? void 0
                        : s[this.axis[t].offsetAttr]) && void 0 !== i
                    ? i
                    : 0,
                c = parseInt(
                  null !==
                    (a =
                      null === (n = this.elStyles) || void 0 === n
                        ? void 0
                        : n[this.axis[t].sizeAttr]) && void 0 !== a
                    ? a
                    : "0px",
                  10
                ),
                h = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                d =
                  ("y" === t ? this.mouseY - u : this.mouseX - u) < 0 ? -1 : 1,
                p = -1 === d ? h - c : h + c,
                g = function () {
                  r.contentWrapperEl &&
                    (-1 === d
                      ? h > p &&
                        ((h -= 40),
                        (r.contentWrapperEl[r.axis[t].scrollOffsetAttr] = h),
                        o.requestAnimationFrame(g))
                      : h < p &&
                        ((h += 40),
                        (r.contentWrapperEl[r.axis[t].scrollOffsetAttr] = h),
                        o.requestAnimationFrame(g)));
                };
              g();
            }
          }),
          (e.prototype.getContentElement = function () {
            return this.contentEl;
          }),
          (e.prototype.getScrollElement = function () {
            return this.contentWrapperEl;
          }),
          (e.prototype.removeListeners = function () {
            var e = Ne(this.el);
            this.el.removeEventListener("mouseenter", this.onMouseEnter),
              this.el.removeEventListener(
                "pointerdown",
                this.onPointerEvent,
                !0
              ),
              this.el.removeEventListener("mousemove", this.onMouseMove),
              this.el.removeEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl &&
                this.contentWrapperEl.removeEventListener(
                  "scroll",
                  this.onScroll
                ),
              e.removeEventListener("resize", this.onWindowResize),
              this.mutationObserver && this.mutationObserver.disconnect(),
              this.resizeObserver && this.resizeObserver.disconnect(),
              this.onMouseMove.cancel(),
              this.onWindowResize.cancel(),
              this.onStopScrolling.cancel(),
              this.onMouseEntered.cancel();
          }),
          (e.prototype.unMount = function () {
            this.removeListeners();
          }),
          (e.prototype.isWithinBounds = function (e) {
            return (
              this.mouseX >= e.left &&
              this.mouseX <= e.left + e.width &&
              this.mouseY >= e.top &&
              this.mouseY <= e.top + e.height
            );
          }),
          (e.prototype.findChild = function (e, t) {
            var s =
              e.matches ||
              e.webkitMatchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector;
            return Array.prototype.filter.call(e.children, function (e) {
              return s.call(e, t);
            })[0];
          }),
          (e.rtlHelpers = null),
          (e.defaultOptions = {
            forceVisible: !1,
            clickOnTrack: !0,
            scrollbarMinSize: 25,
            scrollbarMaxSize: 0,
            ariaLabel: "scrollable content",
            classNames: {
              contentEl: "simplebar-content",
              contentWrapper: "simplebar-content-wrapper",
              offset: "simplebar-offset",
              mask: "simplebar-mask",
              wrapper: "simplebar-wrapper",
              placeholder: "simplebar-placeholder",
              scrollbar: "simplebar-scrollbar",
              track: "simplebar-track",
              heightAutoObserverWrapperEl:
                "simplebar-height-auto-observer-wrapper",
              heightAutoObserverEl: "simplebar-height-auto-observer",
              visible: "simplebar-visible",
              horizontal: "simplebar-horizontal",
              vertical: "simplebar-vertical",
              hover: "simplebar-hover",
              dragging: "simplebar-dragging",
              scrolling: "simplebar-scrolling",
              scrollable: "simplebar-scrollable",
              mouseEntered: "simplebar-mouse-entered",
            },
            scrollableNode: null,
            contentNode: null,
            autoHide: !0,
          }),
          (e.getOptions = We),
          (e.helpers = Ve),
          e
        );
      })(),
      Ue = function (e, t) {
        return (
          (Ue =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var s in t)
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            }),
          Ue(e, t)
        );
      };
    var Xe = Ye.helpers,
      Ge = Xe.getOptions,
      Ze = Xe.addClasses,
      Ke = (function (e) {
        function t() {
          for (var s = [], i = 0; i < arguments.length; i++)
            s[i] = arguments[i];
          var n = e.apply(this, s) || this;
          return t.instances.set(s[0], n), n;
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function s() {
              this.constructor = e;
            }
            Ue(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((s.prototype = t.prototype), new s()));
          })(t, e),
          (t.initDOMLoadedElements = function () {
            document.removeEventListener(
              "DOMContentLoaded",
              this.initDOMLoadedElements
            ),
              window.removeEventListener("load", this.initDOMLoadedElements),
              Array.prototype.forEach.call(
                document.querySelectorAll("[data-simplebar]"),
                function (e) {
                  "init" === e.getAttribute("data-simplebar") ||
                    t.instances.has(e) ||
                    new t(e, Ge(e.attributes));
                }
              );
          }),
          (t.removeObserver = function () {
            var e;
            null === (e = t.globalObserver) || void 0 === e || e.disconnect();
          }),
          (t.prototype.initDOM = function () {
            var e,
              t,
              s,
              i = this;
            if (
              !Array.prototype.filter.call(this.el.children, function (e) {
                return e.classList.contains(i.classNames.wrapper);
              }).length
            ) {
              for (
                this.wrapperEl = document.createElement("div"),
                  this.contentWrapperEl = document.createElement("div"),
                  this.offsetEl = document.createElement("div"),
                  this.maskEl = document.createElement("div"),
                  this.contentEl = document.createElement("div"),
                  this.placeholderEl = document.createElement("div"),
                  this.heightAutoObserverWrapperEl =
                    document.createElement("div"),
                  this.heightAutoObserverEl = document.createElement("div"),
                  Ze(this.wrapperEl, this.classNames.wrapper),
                  Ze(this.contentWrapperEl, this.classNames.contentWrapper),
                  Ze(this.offsetEl, this.classNames.offset),
                  Ze(this.maskEl, this.classNames.mask),
                  Ze(this.contentEl, this.classNames.contentEl),
                  Ze(this.placeholderEl, this.classNames.placeholder),
                  Ze(
                    this.heightAutoObserverWrapperEl,
                    this.classNames.heightAutoObserverWrapperEl
                  ),
                  Ze(
                    this.heightAutoObserverEl,
                    this.classNames.heightAutoObserverEl
                  );
                this.el.firstChild;

              )
                this.contentEl.appendChild(this.el.firstChild);
              this.contentWrapperEl.appendChild(this.contentEl),
                this.offsetEl.appendChild(this.contentWrapperEl),
                this.maskEl.appendChild(this.offsetEl),
                this.heightAutoObserverWrapperEl.appendChild(
                  this.heightAutoObserverEl
                ),
                this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                this.wrapperEl.appendChild(this.maskEl),
                this.wrapperEl.appendChild(this.placeholderEl),
                this.el.appendChild(this.wrapperEl),
                null === (e = this.contentWrapperEl) ||
                  void 0 === e ||
                  e.setAttribute("tabindex", "0"),
                null === (t = this.contentWrapperEl) ||
                  void 0 === t ||
                  t.setAttribute("role", "region"),
                null === (s = this.contentWrapperEl) ||
                  void 0 === s ||
                  s.setAttribute("aria-label", this.options.ariaLabel);
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
              var n = document.createElement("div"),
                a = document.createElement("div");
              Ze(n, this.classNames.track),
                Ze(a, this.classNames.scrollbar),
                n.appendChild(a),
                (this.axis.x.track.el = n.cloneNode(!0)),
                Ze(this.axis.x.track.el, this.classNames.horizontal),
                (this.axis.y.track.el = n.cloneNode(!0)),
                Ze(this.axis.y.track.el, this.classNames.vertical),
                this.el.appendChild(this.axis.x.track.el),
                this.el.appendChild(this.axis.y.track.el);
            }
            Ye.prototype.initDOM.call(this),
              this.el.setAttribute("data-simplebar", "init");
          }),
          (t.prototype.unMount = function () {
            Ye.prototype.unMount.call(this), t.instances.delete(this.el);
          }),
          (t.initHtmlApi = function () {
            (this.initDOMLoadedElements =
              this.initDOMLoadedElements.bind(this)),
              "undefined" != typeof MutationObserver &&
                ((this.globalObserver = new MutationObserver(
                  t.handleMutations
                )),
                this.globalObserver.observe(document, {
                  childList: !0,
                  subtree: !0,
                })),
              "complete" === document.readyState ||
              ("loading" !== document.readyState &&
                !document.documentElement.doScroll)
                ? window.setTimeout(this.initDOMLoadedElements)
                : (document.addEventListener(
                    "DOMContentLoaded",
                    this.initDOMLoadedElements
                  ),
                  window.addEventListener("load", this.initDOMLoadedElements));
          }),
          (t.handleMutations = function (e) {
            e.forEach(function (e) {
              e.addedNodes.forEach(function (e) {
                1 === e.nodeType &&
                  (e.hasAttribute("data-simplebar")
                    ? !t.instances.has(e) &&
                      document.documentElement.contains(e) &&
                      new t(e, Ge(e.attributes))
                    : e
                        .querySelectorAll("[data-simplebar]")
                        .forEach(function (e) {
                          "init" !== e.getAttribute("data-simplebar") &&
                            !t.instances.has(e) &&
                            document.documentElement.contains(e) &&
                            new t(e, Ge(e.attributes));
                        }));
              }),
                e.removedNodes.forEach(function (e) {
                  1 === e.nodeType &&
                    ("init" === e.getAttribute("data-simplebar")
                      ? t.instances.has(e) &&
                        !document.documentElement.contains(e) &&
                        t.instances.get(e).unMount()
                      : Array.prototype.forEach.call(
                          e.querySelectorAll('[data-simplebar="init"]'),
                          function (e) {
                            t.instances.has(e) &&
                              !document.documentElement.contains(e) &&
                              t.instances.get(e).unMount();
                          }
                        ));
                });
            });
          }),
          (t.instances = new WeakMap()),
          t
        );
      })(Ye);
    J && Ke.initHtmlApi();
    let Je = !1;
    setTimeout(() => {
      if (Je) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0),
      window.addEventListener("load", function (e) {
        datepicker("[calendar]");
      });
    var Qe = document.getElementById("selector");
    IMask(Qe, { mask: "+{7}(000)000-00-00" });
    document
      .querySelectorAll("[data-default]")
      .addEventListener("click", function (e) {
        e.preventDefault();
      }),
      (window.FLS = !0),
      V.any() && document.documentElement.classList.add("touch"),
      new q({}),
      new R({}),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]"
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              K.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && K.validateInput(t));
          });
      })(),
      (function (e) {
        const t = document.forms;
        if (t.length)
          for (const e of t)
            e.addEventListener("submit", function (e) {
              s(e.target, e);
            }),
              e.addEventListener("reset", function (e) {
                const t = e.target;
                K.formClean(t);
              });
        async function s(t, s) {
          if (0 === (e ? K.getErrors(t) : 0)) {
            if (t.hasAttribute("data-ajax")) {
              s.preventDefault();
              const e = t.getAttribute("action")
                  ? t.getAttribute("action").trim()
                  : "#",
                n = t.getAttribute("method")
                  ? t.getAttribute("method").trim()
                  : "GET",
                a = new FormData(t);
              t.classList.add("_sending");
              const r = await fetch(e, { method: n, body: a });
              if (r.ok) {
                await r.json();
                t.classList.remove("_sending"), i(t);
              } else alert("Ошибка"), t.classList.remove("_sending");
            } else t.hasAttribute("data-dev") && (s.preventDefault(), i(t));
          } else {
            s.preventDefault();
            const e = t.querySelector("._form-error");
            e && t.hasAttribute("data-goto-error") && X(e, !0, 1e3);
          }
        }
        function i(e) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: e } })
          ),
            K.formClean(e),
            U(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0),
      (Z.selectModule = new G({}));
  })();
})();
