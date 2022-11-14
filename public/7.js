(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/landing/Appointment.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/landing/Appointment.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_appointment_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/appointment_service */ "./resources/js/services/appointment_service.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      appointments_data: {},
      appointment_form: {
        cough_check_no: '',
        cough_check_yes: '',
        shortness_check_no: '',
        shortness_check_yes: '',
        appointment_date: '',
        department: '',
        visiting_person: '',
        selected_day: '',
        schedule_id: '',
        selected_year: ''
      },
      schedules: {},
      available_schedule: {},
      available_department: {},
      available_person: {},
      available_days: {},
      qrData: '',
      errors: ''
    };
  },
  watch: {
    'appointment_form.appointment_date': {
      handler: function handler(newVal, oldVal) {
        this.appointment_form.department = '';
        this.appointment_form.visiting_person = '';
        this.available_schedule = {};
        this.available_department = {};
        this.available_person = {};
        this.available_days = {};
        var sel_date = new Date(newVal).getFullYear();
        var day_name = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date(newVal).getDay()];
        this.appointment_form.selected_day = day_name;
        var schedules_data = this.schedules;
        var department = [];
        var available = [];
        this.appointment_form.selected_year = sel_date;
        $.each(schedules_data, function (key, value) {
          if (value.school_year == sel_date) {
            if (value.day == day_name) {
              department.push(value.employee.department);
              available.push(value);
            }
          }
        });

        var unique_department = _toConsumableArray(new Set(department));

        this.available_department = unique_department;
        this.available_schedule = available;
      },
      deep: true
    },
    'appointment_form.department': {
      handler: function handler(newVal, oldVal) {
        this.appointment_form.visiting_person = '';
        var sel_department = newVal;
        var available_sched = this.available_schedule;
        var sel_day = this.appointment_form.selected_day;
        var persons = [];
        $.each(available_sched, function (key, value) {
          if (value.employee.department == sel_department) {
            if (value.day == sel_day) {
              persons.push({
                'id': value.employee.id,
                'name': value.employee.fname,
                'schedule_id': value.id,
                'schedule_day': value.day
              });
            }
          }
        });

        var unique_persons = _toConsumableArray(new Map(persons.map(function (item) {
          return [item['id'], item];
        })).values());

        this.available_person = unique_persons;
      },
      deep: true
    },
    'appointment_form.visiting_person': {
      handler: function handler(newVal, oldVal) {
        var sel_person = newVal;
        var schedules_data = this.schedules;
        var available_per_sched = this.available_schedule;
        var sel_year = this.appointment_form.selected_year;
        var sel_schedule_id = '';
        var sel_day = this.appointment_form.selected_day;
        console.log(sel_person);
        $.each(schedules_data, function (key, value) {
          if (value.school_year == sel_year) {
            if (value.day == sel_day) {
              if (value.employee_id == sel_person) {
                sel_schedule_id = value.id;
              }
            }
          }
        });
        this.appointment_form.schedule_id = sel_schedule_id;
      },
      deep: true
    },
    'appointment_form.cough_check_no': {
      handler: function handler(newVal, oldVal) {
        if (newVal == true) {
          // this.appointment_form.cough_check_no = 1
          this.appointment_form.cough_check_yes = false;
        }

        if (newVal == false) {
          this.appointment_form.cough_check_no = ""; // this.appointment_form.cough_check_yes = ""
        }
      },
      deep: true
    },
    'appointment_form.cough_check_yes': {
      handler: function handler(newVal, oldVal) {
        if (newVal == true) {
          // this.appointment_form.cough_check_yes = 1
          this.appointment_form.cough_check_no = false;
        }

        if (newVal == false) {
          this.appointment_form.cough_check_yes = ""; // this.appointment_form.cough_check_no = ""
        }
      },
      deep: true
    },
    'appointment_form.shortness_check_no': {
      handler: function handler(newVal, oldVal) {
        if (newVal == true) {
          this.appointment_form.shortness_check_yes = 0;
        }
      },
      deep: true
    },
    'appointment_form.shortness_check_yes': {
      handler: function handler(newVal, oldVal) {
        if (newVal == true) {
          this.appointment_form.shortness_check_no = 0;
        }
      },
      deep: true
    }
  },
  methods: {
    getAllSchedules: function () {
      var _getAllSchedules = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_appointment_service__WEBPACK_IMPORTED_MODULE_0__["get_all_schedules"]();

              case 3:
                response = _context.sent;
                this.schedules = response.data;
                _context.next = 9;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function getAllSchedules() {
        return _getAllSchedules.apply(this, arguments);
      }

      return getAllSchedules;
    }(),
    getAllAppointments: function () {
      var _getAllAppointments = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_appointment_service__WEBPACK_IMPORTED_MODULE_0__["get_all_appointments"]();

              case 3:
                response = _context2.sent;
                this.appointments_data = response.data;
                _context2.next = 9;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function getAllAppointments() {
        return _getAllAppointments.apply(this, arguments);
      }

      return getAllAppointments;
    }(),
    addAppointmentBtn: function addAppointmentBtn() {
      this.$refs.addAppointmentMdl.show();
    },
    addAppointment: function () {
      var _addAppointment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var formData, response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                //   var current_page = this.guests_data.current_page;
                this.$Progress.start();
                formData = new FormData();
                formData.append("cough_check_no", this.appointment_form.cough_check_no);
                formData.append("cough_check_yes", this.appointment_form.cough_check_yes);
                formData.append("shortness_check_no", this.appointment_form.shortness_check_no);
                formData.append("shortness_check_yes", this.appointment_form.shortness_check_yes);
                formData.append("appointment_date", this.appointment_form.appointment_date);
                formData.append("department", this.appointment_form.department);
                formData.append("visiting_person", this.appointment_form.visiting_person);
                formData.append("selected_day", this.appointment_form.selected_day);
                formData.append("schedule_id", this.appointment_form.schedule_id);
                formData.append("selected_year", this.appointment_form.selected_year);
                _context3.next = 15;
                return _services_appointment_service__WEBPACK_IMPORTED_MODULE_0__["create_appointment"](formData);

              case 15:
                response = _context3.sent;
                // this.loadPage(current_page);        
                this.getAllSchedules();
                this.$refs.addAppointmentMdl.hide();
                Toast.fire({
                  icon: "success",
                  title: "Successfully added!"
                });
                _context3.next = 23;
                break;

              case 21:
                _context3.prev = 21;
                _context3.t0 = _context3["catch"](0);

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 21]]);
      }));

      function addAppointment() {
        return _addAppointment.apply(this, arguments);
      }

      return addAppointment;
    }(),
    showQrCode: function showQrCode(data) {
      var appointment_data = _objectSpread({}, data);

      this.qrData = appointment_data.appointment_code;
      this.$refs.qrCodeMdl.show();
    },
    hideQrMdl: function hideQrMdl() {
      this.$refs.qrCodeMdl.hide();
    }
  },
  mounted: function mounted() {
    this.getAllSchedules();
    this.getAllAppointments();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/landing/Appointment.vue?vue&type=template&id=92c499fe&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/landing/Appointment.vue?vue&type=template&id=92c499fe& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row justify-content-md-center"
  }, [_c("div", {
    staticClass: "col-11"
  }, [_c("h3", {
    staticClass: "m-5"
  }, [_vm._v("Appointments  "), _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.addAppointmentBtn();
      }
    }
  }, [_vm._v("Add "), _c("i", {
    staticClass: "fa-solid fa-plus"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row justify-content-md-center"
  }, [_c("div", {
    staticClass: "col-11"
  }, [_c("div", {
    staticClass: "card-body p-0"
  }, [_c("table", {
    staticClass: "table"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", _vm._l(_vm.appointments_data.data, function (appointment, index) {
    return _c("tr", {
      key: index,
      staticStyle: {
        "text-align": "center"
      }
    }, [_c("td", [_vm._v(_vm._s(appointment.id))]), _vm._v(" "), _c("td", [_vm._v("2")]), _vm._v(" "), _c("th", [_vm._v(_vm._s(appointment.schedule.employee.department))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("upText")(appointment.schedule.employee.fname)) + " " + _vm._s(_vm._f("upText")(appointment.schedule.employee.mname)) + ". " + _vm._s(_vm._f("upText")(appointment.schedule.employee.lname)))]), _vm._v(" "), _c("th", [_vm._v("Date")]), _vm._v(" "), _c("th", [_vm._v("status here")]), _vm._v(" "), _c("th", [_c("b-button", {
      staticClass: "mr-1",
      attrs: {
        size: "sm",
        variant: "primary"
      },
      on: {
        click: function click($event) {
          return _vm.showQrCode(appointment, index, $event.target);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-qrcode"
    })])], 1), _vm._v(" "), _vm._m(2, true)]);
  }), 0)])])])])])])]), _vm._v(" "), _c("b-modal", {
    ref: "addAppointmentMdl",
    attrs: {
      size: "lg",
      "hide-footer": "",
      title: "Appointment Form"
    }
  }, [_c("div", {
    staticClass: "d-block"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.addAppointment.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "h5 pb-2 mb-2 col-md-12 form-group text-primary border-bottom border-primary"
  }, [_vm._v("\n                            COVID-19 Self Screening Questionnaire\n                        ")]), _vm._v(" "), _c("p", [_vm._v("\n                            You must answer “NO” to all the questions in this questionnaire in order to enter our physical location. If you answer “YES” to any of the questions, \n                            please DO NOT come enter the School buildings.\n                        ")]), _vm._v(" "), _c("p", {
    staticClass: "mb-3"
  }, [_vm._v("\n                            If you experience any symptoms or answer “YES” to any of these questions, you must immediately contact your health care professional\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "card-body table-responsive p-0"
  }, [_c("table", {
    staticClass: "table table-hover text-nowrap"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      "border-top": "none"
    },
    attrs: {
      scope: "col"
    }
  }), _vm._v(" "), _c("th", {
    staticStyle: {
      "border-top": "none"
    },
    attrs: {
      scope: "col"
    }
  }, [_vm._v("No")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "border-top": "none"
    },
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Yes")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticStyle: {
      "border-top": "none"
    }
  }, [_vm._v("1) Have you had any of the following symptoms in the last 24 hours? "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), _c("td", {
    staticStyle: {
      "border-top": "none"
    }
  }), _vm._v(" "), _c("td", {
    staticStyle: {
      "border-top": "none"
    }
  })]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      "border-top": "none"
    }
  }, [_c("span", {
    staticStyle: {
      "margin-left": "5%"
    }
  }, [_vm._v("Cough")])]), _vm._v(" "), _c("td", {
    staticStyle: {
      "border-top": "none"
    }
  }, [_c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.appointment_form.cough_check_no,
      expression: "appointment_form.cough_check_no"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.appointment_form.cough_check_no) ? _vm._i(_vm.appointment_form.cough_check_no, null) > -1 : _vm.appointment_form.cough_check_no
    },
    on: {
      change: function change($event) {
        var $$a = _vm.appointment_form.cough_check_no,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;

        if (Array.isArray($$a)) {
          var $$v = null,
              $$i = _vm._i($$a, $$v);

          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.appointment_form, "cough_check_no", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.appointment_form, "cough_check_no", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.appointment_form, "cough_check_no", $$c);
        }
      }
    }
  })])]), _vm._v(" "), _c("td", {
    staticStyle: {
      "border-top": "none"
    }
  }, [_c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.appointment_form.cough_check_yes,
      expression: "appointment_form.cough_check_yes"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.appointment_form.cough_check_yes) ? _vm._i(_vm.appointment_form.cough_check_yes, null) > -1 : _vm.appointment_form.cough_check_yes
    },
    on: {
      change: function change($event) {
        var $$a = _vm.appointment_form.cough_check_yes,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;

        if (Array.isArray($$a)) {
          var $$v = null,
              $$i = _vm._i($$a, $$v);

          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.appointment_form, "cough_check_yes", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.appointment_form, "cough_check_yes", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.appointment_form, "cough_check_yes", $$c);
        }
      }
    }
  })])])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      "border-top": "none"
    }
  }, [_c("span", {
    staticStyle: {
      "margin-left": "5%"
    }
  }, [_vm._v(" Shortness of breath of difficulty breathing")])]), _vm._v(" "), _c("td", {
    staticStyle: {
      "border-top": "none"
    }
  }, [_c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.appointment_form.shortness_check_no,
      expression: "appointment_form.shortness_check_no"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.appointment_form.shortness_check_no) ? _vm._i(_vm.appointment_form.shortness_check_no, null) > -1 : _vm.appointment_form.shortness_check_no
    },
    on: {
      change: function change($event) {
        var $$a = _vm.appointment_form.shortness_check_no,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;

        if (Array.isArray($$a)) {
          var $$v = null,
              $$i = _vm._i($$a, $$v);

          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.appointment_form, "shortness_check_no", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.appointment_form, "shortness_check_no", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.appointment_form, "shortness_check_no", $$c);
        }
      }
    }
  })])]), _vm._v(" "), _c("td", {
    staticStyle: {
      "border-top": "none"
    }
  }, [_c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.appointment_form.shortness_check_yes,
      expression: "appointment_form.shortness_check_yes"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.appointment_form.shortness_check_yes) ? _vm._i(_vm.appointment_form.shortness_check_yes, null) > -1 : _vm.appointment_form.shortness_check_yes
    },
    on: {
      change: function change($event) {
        var $$a = _vm.appointment_form.shortness_check_yes,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;

        if (Array.isArray($$a)) {
          var $$v = null,
              $$i = _vm._i($$a, $$v);

          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.appointment_form, "shortness_check_yes", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.appointment_form, "shortness_check_yes", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.appointment_form, "shortness_check_yes", $$c);
        }
      }
    }
  })])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "h5 pb-2 mb-2 col-md-12 form-group text-primary border-bottom border-primary"
  }, [_vm._v("\n                            Appointment\n                        ")]), _vm._v(" "), _c("label", {
    staticClass: "col-sm-3 col-form-label",
    attrs: {
      "for": "inputEmail3"
    }
  }, [_vm._v("Date")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-9 mb-2"
  }, [_c("b-form-datepicker", {
    staticClass: "form-control",
    model: {
      value: _vm.appointment_form.appointment_date,
      callback: function callback($$v) {
        _vm.$set(_vm.appointment_form, "appointment_date", $$v);
      },
      expression: "appointment_form.appointment_date"
    }
  })], 1), _vm._v(" "), _c("label", {
    staticClass: "col-sm-3 col-form-label",
    attrs: {
      "for": "inputEmail3"
    }
  }, [_vm._v("Department")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-9 mb-2"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.appointment_form.department,
      expression: "appointment_form.department"
    }],
    staticClass: "custom-select",
    "class": _vm.errors.department ? "is-invalid" : "",
    attrs: {
      id: "selectpos"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });

        _vm.$set(_vm.appointment_form, "department", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: ""
    }
  }, [_vm._v("Select Department")]), _vm._v(" "), _vm._l(_vm.available_department, function (department, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: department
      }
    }, [_vm._v(_vm._s(department))]);
  })], 2), _vm._v(" "), _vm.errors.department ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v(_vm._s(_vm.errors.department[0]))]) : _vm._e()]), _vm._v(" "), _c("label", {
    staticClass: "col-sm-3 col-form-label",
    attrs: {
      "for": "inputEmail3"
    }
  }, [_vm._v("Person to meet")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-9 mb-2"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.appointment_form.visiting_person,
      expression: "appointment_form.visiting_person"
    }],
    staticClass: "custom-select",
    "class": _vm.errors.department ? "is-invalid" : "",
    attrs: {
      id: "selectpos"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });

        _vm.$set(_vm.appointment_form, "visiting_person", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: ""
    }
  }, [_vm._v("Select Person")]), _vm._v(" "), _vm._l(_vm.available_person, function (person, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: person.id
      }
    }, [_vm._v(_vm._s(person.name))]);
  })], 2), _vm._v(" "), _vm.errors.department ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v(_vm._s(_vm.errors.department[0]))]) : _vm._e()]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary col-12",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Submit")])])])])])]), _vm._v(" "), _c("b-modal", {
    ref: "qrCodeMdl",
    attrs: {
      centered: "",
      size: "md",
      "hide-footer": "",
      title: "QR Code"
    }
  }, [_c("div", {
    staticClass: "d-block"
  }, [_c("div", {
    staticClass: "row col mb-2 justify-content-center qrcode"
  }, [_c("qr-code", {
    ref: "printcontent",
    staticStyle: {
      cursor: "pointer",
      width: "50%",
      "margin-left": "auto",
      "margin-right": "auto"
    },
    attrs: {
      text: _vm.qrData
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "text-right"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.hideQrMdl
    }
  }, [_vm._v("\n                Cancel\n            ")])])])], 1);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("header", {
    staticClass: "py-5 bg-light border-bottom mb-4"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "text-center my-5"
  }, [_c("h1", {
    staticClass: "fw-bolder"
  }, [_vm._v("Appointment")]), _vm._v(" "), _c("p", {
    staticClass: "lead mb-0"
  })])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("thead", [_c("tr", {
    staticStyle: {
      "text-align": "center"
    }
  }, [_c("th", [_vm._v("#")]), _vm._v(" "), _c("th", [_vm._v("Schedule")]), _vm._v(" "), _c("th", [_vm._v("Department")]), _vm._v(" "), _c("th", [_vm._v("Visiting")]), _vm._v(" "), _c("th", [_vm._v("Date")]), _vm._v(" "), _c("th", [_vm._v("Status")]), _vm._v(" "), _c("th", [_vm._v("QR code")]), _vm._v(" "), _c("th", [_vm._v("Action")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("td", [_c("button", {
    staticClass: "btn btn-success",
    attrs: {
      type: "button"
    }
  }, [_vm._v("\n                                                    Edit "), _c("i", {
    staticClass: "fa-solid fa-pen-to-square"
  })]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-danger",
    attrs: {
      type: "button"
    }
  }, [_vm._v("\n                                                    Delete "), _c("i", {
    staticClass: "fa-solid fa-trash"
  })])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/pages/landing/Appointment.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/pages/landing/Appointment.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Appointment_vue_vue_type_template_id_92c499fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Appointment.vue?vue&type=template&id=92c499fe& */ "./resources/js/components/pages/landing/Appointment.vue?vue&type=template&id=92c499fe&");
/* harmony import */ var _Appointment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Appointment.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/landing/Appointment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Appointment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Appointment_vue_vue_type_template_id_92c499fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Appointment_vue_vue_type_template_id_92c499fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/landing/Appointment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/landing/Appointment.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pages/landing/Appointment.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Appointment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Appointment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/landing/Appointment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Appointment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/landing/Appointment.vue?vue&type=template&id=92c499fe&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/pages/landing/Appointment.vue?vue&type=template&id=92c499fe& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Appointment_vue_vue_type_template_id_92c499fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Appointment.vue?vue&type=template&id=92c499fe& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/landing/Appointment.vue?vue&type=template&id=92c499fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Appointment_vue_vue_type_template_id_92c499fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Appointment_vue_vue_type_template_id_92c499fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/appointment_service.js":
/*!******************************************************!*\
  !*** ./resources/js/services/appointment_service.js ***!
  \******************************************************/
/*! exports provided: get_all_schedules, get_all_appointments, create_appointment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_all_schedules", function() { return get_all_schedules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_all_appointments", function() { return get_all_appointments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create_appointment", function() { return create_appointment; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function get_all_schedules() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/get-all-schedules');
}
function get_all_appointments() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/appointment');
}
function create_appointment(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/appointment', data);
} // export function update_guest(id, data){
//     return httpFile().post(`guest/${id}`, data);
// }
// export function delete_guest(id){
//     return http().delete(`guest/${id}`);
// }
// export function guest_page(page){
//     return httpFile().get('/guest?page=' + page)
// }

/***/ })

}]);