(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/vlad/Documents/projects/git/iss-tracker/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2MiI":
    /*!*******************************************************!*\
      !*** ./src/app/components/header/header.component.ts ***!
      \*******************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function MiI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var src_app_shared_components_confimation_dialog_confimation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/components/confimation-dialog/confimation-dialog.component */
      "fm6V");
      /* harmony import */


      var src_app_store_selectors_iss_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/store/selectors/iss.selectors */
      "6Fv5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function HeaderComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Current Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Lat: ", ctx_r0.getLatitude(), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Lon: ", ctx_r0.getLongitude(), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Time: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](12, 3, ctx_r0.getTimestamp(), "YYYY-LL-MM HH:MM:SS"), "");
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(_store, _dialog) {
          var _this = this;

          _classCallCheck(this, HeaderComponent);

          this._store = _store;
          this._dialog = _dialog;
          this.iss$ = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_store_selectors_iss_selectors__WEBPACK_IMPORTED_MODULE_2__["selectISS"]));
          this.selectedIss$ = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_store_selectors_iss_selectors__WEBPACK_IMPORTED_MODULE_2__["selectSelectedISS"]));
          this.issSubscription = this.iss$.subscribe(function (iss) {
            _this.iss = iss;
          });
          this.selectedIssSubscription = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_store_selectors_iss_selectors__WEBPACK_IMPORTED_MODULE_2__["selectSelectedISS"])).subscribe(function (iss) {
            return _this.selectedIss = iss;
          });
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.issSubscription.unsubscribe();
            this.selectedIssSubscription.unsubscribe();
          }
        }, {
          key: "getLatitude",
          value: function getLatitude() {
            return this.selectedIss ? this.selectedIss.latitude : this.iss.latitude;
          }
        }, {
          key: "getLongitude",
          value: function getLongitude() {
            return this.selectedIss ? this.selectedIss.longitude : this.iss.longitude;
          }
        }, {
          key: "getTimestamp",
          value: function getTimestamp() {
            return this.selectedIss ? this.selectedIss.timestamp : this.iss.timestamp;
          }
        }, {
          key: "favorite",
          value: function favorite() {
            this._dialog.open(src_app_shared_components_confimation_dialog_confimation_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfimationDialogComponent"], {
              data: {
                title: 'Not implemented feature',
                message: 'Sorry, but this is still in development',
                close: true
              }
            });
          }
        }, {
          key: "share",
          value: function share() {
            this._dialog.open(src_app_shared_components_confimation_dialog_confimation_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfimationDialogComponent"], {
              data: {
                title: 'Not implemented feature',
                message: 'Sorry, but this is still in development',
                close: true
              }
            });
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 12,
        vars: 3,
        consts: [[1, "header"], [1, "header_title"], [1, "header_spacer"], ["class", "headear_info", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Favorite", "matTooltip", "Favorite", 3, "click"], ["mat-icon-button", "", "aria-label", "Share", "matTooltip", "Share", 3, "click"], [1, "headear_info"], [1, "header_column-left"], [1, "header_column-right"], [1, "headear_info_block"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "IIS Tracker");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, HeaderComponent_div_4_Template, 13, 6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_6_listener() {
              return ctx.favorite();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_9_listener() {
              return ctx.share();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "share");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 1, ctx.iss$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
        styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.header_spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.headear_info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.header_column-right[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  font-size: 14px;\n  font-weight: normal;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  line-height: 1.5;\n}\n\n.headear_info_block[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type {\n  margin-right: 10px;\n}\n\n@media screen and (max-width: 768px) {\n  .header_column-left[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLE9BQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBRUk7RUFDSSxrQkFBQTtBQUNSOztBQUlJO0VBREo7SUFFUSxhQUFBO0VBQU47QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uaGVhZGVyX3NwYWNlciB7XG4gICAgZmxleDogMTtcbn1cblxuLmhlYWRlYXJfaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyX2NvbHVtbi1yaWdodCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5oZWFkZWFyX2luZm9fYmxvY2sge1xuICAgIHNwYW46Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG59XG5cbi5oZWFkZXJfY29sdW1uLWxlZnQge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "3dq+":
    /*!***********************************************!*\
      !*** ./src/app/store/reducers/app.reducer.ts ***!
      \***********************************************/

    /*! exports provided: appReducers */

    /***/
    function dq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "appReducers", function () {
        return appReducers;
      });
      /* harmony import */


      var _iss_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./iss.reducer */
      "Amm7");

      var appReducers = {
        iss: _iss_reducer__WEBPACK_IMPORTED_MODULE_0__["issReducer"]
      };
      /***/
    },

    /***/
    "6Fv5":
    /*!**************************************************!*\
      !*** ./src/app/store/selectors/iss.selectors.ts ***!
      \**************************************************/

    /*! exports provided: selectISSList, selectISS, selectSelectedISS, selectFilteredISS */

    /***/
    function Fv5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectISSList", function () {
        return selectISSList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectISS", function () {
        return selectISS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectSelectedISS", function () {
        return selectSelectedISS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectFilteredISS", function () {
        return selectFilteredISS;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var issState = function issState(state) {
        return state.iss;
      };

      var selectISSList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(issState, function (state) {
        return state.iSSList;
      });
      var selectISS = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(issState, function (state) {
        return state.iss;
      });
      var selectSelectedISS = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(issState, function (state) {
        return state.selectedISS;
      });
      var selectFilteredISS = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(issState, function (state) {
        return state.filteredList;
      });
      /***/
    },

    /***/
    "8oqf":
    /*!*********************************************!*\
      !*** ./src/app/shared/enums/routes.enum.ts ***!
      \*********************************************/

    /*! exports provided: ROUTES_NAME, ROUTES_INDEXES */

    /***/
    function oqf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES_NAME", function () {
        return ROUTES_NAME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES_INDEXES", function () {
        return ROUTES_INDEXES;
      });

      var ROUTES_NAME;

      (function (ROUTES_NAME) {
        ROUTES_NAME["MAP"] = "map";
        ROUTES_NAME["MAP_DISPLAY"] = "Map";
        ROUTES_NAME["REPORT"] = "report";
        ROUTES_NAME["REPORT_DISPLAY"] = "Report";
      })(ROUTES_NAME || (ROUTES_NAME = {}));

      var ROUTES_INDEXES;

      (function (ROUTES_INDEXES) {
        ROUTES_INDEXES[ROUTES_INDEXES["MAP"] = 0] = "MAP";
        ROUTES_INDEXES[ROUTES_INDEXES["REPORT"] = 1] = "REPORT";
      })(ROUTES_INDEXES || (ROUTES_INDEXES = {}));
      /***/

    },

    /***/
    "Amm7":
    /*!***********************************************!*\
      !*** ./src/app/store/reducers/iss.reducer.ts ***!
      \***********************************************/

    /*! exports provided: issReducer */

    /***/
    function Amm7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "issReducer", function () {
        return issReducer;
      });
      /* harmony import */


      var _actions_iss_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../actions/iss.action */
      "klS1");
      /* harmony import */


      var _state_iss_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../state/iss.state */
      "R/Ou");

      var issReducer = function issReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _state_iss_state__WEBPACK_IMPORTED_MODULE_1__["initialISSState"];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case _actions_iss_action__WEBPACK_IMPORTED_MODULE_0__["EISSActions"].GetISSListSuccess:
            return Object.assign(Object.assign({}, state), {
              iSSList: action.payload
            });

          case _actions_iss_action__WEBPACK_IMPORTED_MODULE_0__["EISSActions"].GetISSSuccess:
            return Object.assign(Object.assign({}, state), {
              iss: action.payload
            });

          case _actions_iss_action__WEBPACK_IMPORTED_MODULE_0__["EISSActions"].GetSelectedISSSuccess:
            return Object.assign(Object.assign({}, state), {
              selectedISS: action.payload
            });

          case _actions_iss_action__WEBPACK_IMPORTED_MODULE_0__["EISSActions"].AddIssSuccess:
            return Object.assign(Object.assign({}, state), {
              iSSList: state.iSSList.concat(action.payload)
            });

          case _actions_iss_action__WEBPACK_IMPORTED_MODULE_0__["EISSActions"].RemoveIssSucess:
            return Object.assign(Object.assign({}, state), {
              iSSList: state.filteredList.filter(function (iss) {
                return iss.timestamp !== +action.payload;
              })
            });

          case _actions_iss_action__WEBPACK_IMPORTED_MODULE_0__["EISSActions"].FilterIssSucess:
            return Object.assign(Object.assign({}, state), {
              filteredList: state.iSSList.filter(function (iss) {
                return iss.name.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1;
              })
            });

          default:
            return state;
        }
      };
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        googleKey: 'AIzaSyAsohlM7JCO4-RJoG_04rBL1ykuaJrMezc'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "IURz":
    /*!***************************************************!*\
      !*** ./src/app/components/main/main.component.ts ***!
      \***************************************************/

    /*! exports provided: MainComponent */

    /***/
    function IURz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_enums_routes_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/enums/routes.enum */
      "8oqf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MainComponent_mat_tab_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-tab", 2);
        }

        if (rf & 2) {
          var tab_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", tab_r1.value.displayName);
        }
      }

      var routesMap = new Map();
      routesMap.set(_shared_enums_routes_enum__WEBPACK_IMPORTED_MODULE_1__["ROUTES_INDEXES"].MAP, {
        path: _shared_enums_routes_enum__WEBPACK_IMPORTED_MODULE_1__["ROUTES_NAME"].MAP,
        displayName: _shared_enums_routes_enum__WEBPACK_IMPORTED_MODULE_1__["ROUTES_NAME"].MAP_DISPLAY
      });
      routesMap.set(_shared_enums_routes_enum__WEBPACK_IMPORTED_MODULE_1__["ROUTES_INDEXES"].REPORT, {
        path: _shared_enums_routes_enum__WEBPACK_IMPORTED_MODULE_1__["ROUTES_NAME"].REPORT,
        displayName: _shared_enums_routes_enum__WEBPACK_IMPORTED_MODULE_1__["ROUTES_NAME"].REPORT_DISPLAY
      });

      var MainComponent = /*#__PURE__*/function () {
        function MainComponent(_router) {
          var _this2 = this;

          _classCallCheck(this, MainComponent);

          this._router = _router;
          this.selectedIndex = -1;
          this.tabsList = routesMap;
          this.routeSubscription = _router.events.subscribe(function (routerEvent) {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
              _router.config.map(function (route) {
                var _a;

                if (routerEvent.url.indexOf(route.path) !== -1 && ((_a = route.data) === null || _a === void 0 ? void 0 : _a.index) !== undefined) {
                  _this2.selectedIndex = route.data.index;
                }
              });
            }
          });
        }

        _createClass(MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.routeSubscription.unsubscribe();
          }
        }, {
          key: "onSelectedTabChange",
          value: function onSelectedTabChange(event) {
            this._router.navigateByUrl("/".concat(routesMap.get(event.index).path));
          }
        }]);

        return MainComponent;
      }();

      MainComponent.ɵfac = function MainComponent_Factory(t) {
        return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
      };

      MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MainComponent,
        selectors: [["app-main"]],
        decls: 4,
        vars: 4,
        consts: [["animationDuration", "0ms", "mat-align-tabs", "start", 3, "selectedIndex", "selectedTabChange"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tab-group", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedTabChange", function MainComponent_Template_mat_tab_group_selectedTabChange_0_listener($event) {
              return ctx.onSelectedTabChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MainComponent_mat_tab_1_Template, 1, 1, "mat-tab", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "keyvalue");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, ctx.tabsList));
          }
        },
        directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "OjAy":
    /*!***********************************************************!*\
      !*** ./src/app/components/iss-list/iss-list.component.ts ***!
      \***********************************************************/

    /*! exports provided: IssListComponent */

    /***/
    function OjAy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IssListComponent", function () {
        return IssListComponent;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var src_app_shared_enums_iss_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/enums/iss.enum */
      "uCdQ");
      /* harmony import */


      var src_app_store_actions_iss_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/store/actions/iss.action */
      "klS1");
      /* harmony import */


      var src_app_store_selectors_iss_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/store/selectors/iss.selectors */
      "6Fv5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_services_iss_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/iss.service */
      "P41H");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _iss_item_iss_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../iss-item/iss-item.component */
      "Zda/");

      function IssListComponent_p_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "You don't have saved location");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function IssListComponent_app_iss_item_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-iss-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onRemove", function IssListComponent_app_iss_item_6_Template_app_iss_item_onRemove_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r3.onRemoveHandler($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var iss_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("iss", iss_r2);
        }
      }

      var IssListComponent = /*#__PURE__*/function () {
        function IssListComponent(_store, _issService) {
          _classCallCheck(this, IssListComponent);

          this._store = _store;
          this._issService = _issService;
          this.issList$ = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_store_selectors_iss_selectors__WEBPACK_IMPORTED_MODULE_3__["selectFilteredISS"]));
        }

        _createClass(IssListComponent, [{
          key: "onkeypress",
          value: function onkeypress($event) {
            if ((($event === null || $event === void 0 ? void 0 : $event.ctrlKey) || ($event === null || $event === void 0 ? void 0 : $event.metaKey)) && ($event === null || $event === void 0 ? void 0 : $event.keyCode) == 90) {
              if (this.removedISS) {
                this._store.dispatch(new src_app_store_actions_iss_action__WEBPACK_IMPORTED_MODULE_2__["AddIss"]({
                  iss: this.removedISS,
                  action: src_app_shared_enums_iss_enum__WEBPACK_IMPORTED_MODULE_1__["ISS_OPERATIONS"].RESTORE
                }));

                this._store.dispatch(new src_app_store_actions_iss_action__WEBPACK_IMPORTED_MODULE_2__["FilterIss"](this._issService.getFilter()));

                this.removedISS = null;
              }
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._store.dispatch(new src_app_store_actions_iss_action__WEBPACK_IMPORTED_MODULE_2__["GetIssList"]());
          }
        }, {
          key: "onRemoveHandler",
          value: function onRemoveHandler(iss) {
            this.removedISS = iss;
          }
        }, {
          key: "isSelected",
          value: function isSelected(iss) {
            var _a;

            return (iss === null || iss === void 0 ? void 0 : iss.timestamp) === ((_a = this.selectedISS) === null || _a === void 0 ? void 0 : _a.timestamp);
          }
        }]);

        return IssListComponent;
      }();

      IssListComponent.ɵfac = function IssListComponent_Factory(t) {
        return new (t || IssListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_iss_service__WEBPACK_IMPORTED_MODULE_5__["IssService"]));
      };

      IssListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: IssListComponent,
        selectors: [["app-iss-list"]],
        hostBindings: function IssListComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function IssListComponent_keydown_HostBindingHandler($event) {
              return ctx.onkeypress($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
          }
        },
        decls: 8,
        vars: 6,
        consts: [[1, "scrollable_container"], [4, "ngIf"], [3, "iss", "onRemove", 4, "ngFor", "ngForOf"], [3, "iss", "onRemove"]],
        template: function IssListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Saved Locations");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, IssListComponent_p_4_Template, 2, 0, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, IssListComponent_app_iss_item_6_Template, 1, 1, "app-iss-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 2, ctx.issList$).length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 4, ctx.issList$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _iss_item_iss_item_component__WEBPACK_IMPORTED_MODULE_7__["IssItemComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
        styles: ["@charset \"UTF-8\";\n.scrollable_container[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 191px);\n  overflow: auto;\n  background: linear-gradient(white 30%, rgba(255, 255, 255, 0)), linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%, radial-gradient(50% 0, farthest-side, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), radial-gradient(50% 100%, farthest-side, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)) 0 100%;\n  background: linear-gradient(white 30%, rgba(255, 255, 255, 0)), linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%, radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)) 0 100%;\n  background-repeat: no-repeat;\n  background-color: white;\n  background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;\n  \n  background-attachment: local, local, scroll, scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2lzcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLDZSQUNrQjtFQUlsQixpU0FDa0I7RUFJbEIsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLDJEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtREFBQTtBQU5KIiwiZmlsZSI6Imlzcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbGFibGVfY29udGFpbmVyIHtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTkxcHgpO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6XG5cdFx0LyogU2hhZG93IGNvdmVycyAqLyBsaW5lYXItZ3JhZGllbnQod2hpdGUgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKSxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHdoaXRlIDcwJSkgMCAxMDAlLFxuICAgICAgICAvKiBTaGFkb3dzICovIHJhZGlhbC1ncmFkaWVudCg1MCUgMCwgZmFydGhlc3Qtc2lkZSwgcmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDApKSxcbiAgICAgICAgcmFkaWFsLWdyYWRpZW50KDUwJSAxMDAlLCBmYXJ0aGVzdC1zaWRlLCByZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMCkpIDAgMTAwJTtcbiAgICBiYWNrZ3JvdW5kOlxuXHRcdC8qIFNoYWRvdyBjb3ZlcnMgKi8gbGluZWFyLWdyYWRpZW50KHdoaXRlIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksXG4gICAgICAgIGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCB3aGl0ZSA3MCUpIDAgMTAwJSxcbiAgICAgICAgLyogU2hhZG93cyAqLyByYWRpYWwtZ3JhZGllbnQoZmFydGhlc3Qtc2lkZSBhdCA1MCUgMCwgcmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDApKSxcbiAgICAgICAgcmFkaWFsLWdyYWRpZW50KGZhcnRoZXN0LXNpZGUgYXQgNTAlIDEwMCUsIHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwKSkgMCAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDQwcHgsIDEwMCUgNDBweCwgMTAwJSAxNHB4LCAxMDAlIDE0cHg7XG4gICAgLyogT3BlcmEgZG9lc27igJl0IHN1cHBvcnQgdGhpcyBpbiB0aGUgc2hvcnRoYW5kICovXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBsb2NhbCwgbG9jYWwsIHNjcm9sbCwgc2Nyb2xsO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "P41H":
    /*!************************************************!*\
      !*** ./src/app/shared/services/iss.service.ts ***!
      \************************************************/

    /*! exports provided: IssService */

    /***/
    function P41H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IssService", function () {
        return IssService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_app_config_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/app.config-module */
      "l+t5");
      /* harmony import */


      var src_app_store_actions_iss_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/store/actions/iss.action */
      "klS1");
      /* harmony import */


      var _enums_loca_storage_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../enums/loca-storage.enum */
      "gdE2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var IssService = /*#__PURE__*/function () {
        function IssService(_httpClient, _store, config) {
          _classCallCheck(this, IssService);

          this._httpClient = _httpClient;
          this._store = _store;
          this.config = config;
          this._stop = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this._start = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        }

        _createClass(IssService, [{
          key: "getISSList",
          value: function getISSList() {
            return JSON.parse(localStorage.getItem(_enums_loca_storage_enum__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE_ITEM"].ISS_LIST)) || [];
          }
        }, {
          key: "getISS",
          value: function getISS() {
            var _this3 = this;

            this.sendRequest().subscribe(function (issHttp) {
              var iss = {
                timestamp: issHttp.timestamp,
                latitude: +issHttp.iss_position.latitude,
                longitude: +issHttp.iss_position.longitude
              };

              _this3._store.dispatch(new src_app_store_actions_iss_action__WEBPACK_IMPORTED_MODULE_3__["GetIss"](iss));
            });
          }
        }, {
          key: "getISSOnce",
          value: function getISSOnce() {
            return this._httpClient.jsonp(this.config.iisApiUrl, "callback").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (iss) {
              return iss;
            }));
          }
        }, {
          key: "sendRequest",
          value: function sendRequest() {
            var _this4 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(2000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function () {
              return _this4._httpClient.jsonp(_this4.config.iisApiUrl, "callback");
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._stop), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["repeatWhen"])(function () {
              return _this4._start;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (e) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(e);
            }));
          }
        }, {
          key: "start",
          value: function start() {
            this._start.next();
          }
        }, {
          key: "stop",
          value: function stop() {
            this._stop.next();
          }
        }, {
          key: "addLocally",
          value: function addLocally(iss) {
            var issList = JSON.parse(localStorage.getItem(_enums_loca_storage_enum__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE_ITEM"].ISS_LIST)) || [];
            issList.push(iss);
            localStorage.setItem(_enums_loca_storage_enum__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE_ITEM"].ISS_LIST, JSON.stringify(issList));
          }
        }, {
          key: "removeLocally",
          value: function removeLocally(id) {
            var issList = JSON.parse(localStorage.getItem(_enums_loca_storage_enum__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE_ITEM"].ISS_LIST)) || [];
            localStorage.setItem(_enums_loca_storage_enum__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE_ITEM"].ISS_LIST, JSON.stringify(_toConsumableArray(issList.filter(function (iss) {
              return iss.timestamp !== id;
            }))));
          }
        }, {
          key: "saveFilter",
          value: function saveFilter(query) {
            localStorage.setItem(_enums_loca_storage_enum__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE_ITEM"].FILTER, query);
          }
        }, {
          key: "getFilter",
          value: function getFilter() {
            return localStorage.getItem(_enums_loca_storage_enum__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE_ITEM"].FILTER) || "";
          }
        }]);

        return IssService;
      }();

      IssService.ɵfac = function IssService_Factory(t) {
        return new (t || IssService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_app_config_module__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"]));
      };

      IssService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: IssService,
        factory: IssService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "R/Ou":
    /*!******************************************!*\
      !*** ./src/app/store/state/iss.state.ts ***!
      \******************************************/

    /*! exports provided: initialISSState */

    /***/
    function ROu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialISSState", function () {
        return initialISSState;
      });

      var initialISSState = {
        iSSList: [],
        filteredList: [],
        iss: null,
        selectedISS: null
      };
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _store_actions_iss_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./store/actions/iss.action */
      "klS1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _shared_services_iss_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/services/iss.service */
      "P41H");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/header/header.component */
      "2MiI");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/sidebar/sidebar.component */
      "zBoC");
      /* harmony import */


      var _components_main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/main/main.component */
      "IURz");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function AppComponent_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_mat_icon_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(_store, _issService) {
          _classCallCheck(this, AppComponent);

          this._store = _store;
          this._issService = _issService;
          this.isOpened = true;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var filter = this._issService.getFilter();

            this._store.dispatch(new _store_actions_iss_action__WEBPACK_IMPORTED_MODULE_0__["GetIssList"]());

            this._store.dispatch(new _store_actions_iss_action__WEBPACK_IMPORTED_MODULE_0__["FilterIss"](filter));

            this.bindDrawerDisplaying();
          }
        }, {
          key: "bindDrawerDisplaying",
          value: function bindDrawerDisplaying() {
            var toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
            this.isOpened = !toMatch.some(function (toMatchItem) {
              return navigator.userAgent.match(toMatchItem);
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_iss_service__WEBPACK_IMPORTED_MODULE_3__["IssService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 10,
        vars: 2,
        consts: [["mat-icon-button", "", "aria-label", "Toggle sidebar", 3, "click"], [4, "ngIf"], ["autosize", ""], ["mode", "side", "opened", ""], ["drawer", ""]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

              return _r2.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_mat_icon_2_Template, 2, 0, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_mat_icon_3_Template, 2, 0, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-drawer-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-drawer", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-main");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r2.opened);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r2.opened);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatDrawer"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]],
        styles: ["app-header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "VALB":
    /*!**********************************************************************************************!*\
      !*** ./src/app/shared/directives/click-stop-propogation/click-stop-propogation.directive.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ClickStopPropagationDirective */

    /***/
    function VALB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClickStopPropagationDirective", function () {
        return ClickStopPropagationDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ClickStopPropagationDirective = /*#__PURE__*/function () {
        function ClickStopPropagationDirective() {
          _classCallCheck(this, ClickStopPropagationDirective);
        }

        _createClass(ClickStopPropagationDirective, [{
          key: "onClick",
          value: function onClick(event) {
            event.stopPropagation();
          }
        }]);

        return ClickStopPropagationDirective;
      }();

      ClickStopPropagationDirective.ɵfac = function ClickStopPropagationDirective_Factory(t) {
        return new (t || ClickStopPropagationDirective)();
      };

      ClickStopPropagationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ClickStopPropagationDirective,
        selectors: [["", "click-stop-propagation", ""]],
        hostBindings: function ClickStopPropagationDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickStopPropagationDirective_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            });
          }
        }
      });
      /***/
    },

    /***/
    "W/RB":
    /*!************************************************************!*\
      !*** ./src/app/shared/modules/material/material.module.ts ***!
      \************************************************************/

    /*! exports provided: MaterialModule */

    /***/
    function WRB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule.ɵfac = function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      };

      MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
        type: MaterialModule
      });
      MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"]], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](MaterialModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"]],
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"]]
        });
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/modules/material/material.module */
      "W/RB");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/sidebar/sidebar.component */
      "zBoC");
      /* harmony import */


      var _components_main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/main/main.component */
      "IURz");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/header/header.component */
      "2MiI");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./store/reducers/app.reducer */
      "3dq+");
      /* harmony import */


      var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ngrx/router-store */
      "99NH");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ngrx/store-devtools */
      "agSv");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _store_effects_iss_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./store/effects/iss.effects */
      "ekq2");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _components_iss_list_iss_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/iss-list/iss-list.component */
      "OjAy");
      /* harmony import */


      var _components_iss_item_iss_item_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/iss-item/iss-item.component */
      "Zda/");
      /* harmony import */


      var _shared_components_confimation_dialog_confimation_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./shared/components/confimation-dialog/confimation-dialog.component */
      "fm6V");
      /* harmony import */


      var _shared_directives_click_stop_propogation_click_stop_propogation_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./shared/directives/click-stop-propogation/click-stop-propogation.directive */
      "VALB");
      /* harmony import */


      var _app_config_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./app.config-module */
      "l+t5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_app_config_module__WEBPACK_IMPORTED_MODULE_23__["AppConfigModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientJsonpModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot(_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_12__["appReducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["EffectsModule"].forRoot([_store_effects_iss_effects__WEBPACK_IMPORTED_MODULE_17__["ISSEffects"]]), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_13__["StoreRouterConnectingModule"].forRoot({
          stateKey: 'router'
        }), !src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtoolsModule"].instrument() : []]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _components_iss_list_iss_list_component__WEBPACK_IMPORTED_MODULE_19__["IssListComponent"], _components_iss_item_iss_item_component__WEBPACK_IMPORTED_MODULE_20__["IssItemComponent"], _shared_components_confimation_dialog_confimation_dialog_component__WEBPACK_IMPORTED_MODULE_21__["ConfimationDialogComponent"], _shared_directives_click_stop_propogation_click_stop_propogation_directive__WEBPACK_IMPORTED_MODULE_22__["ClickStopPropagationDirective"]],
          imports: [_app_config_module__WEBPACK_IMPORTED_MODULE_23__["AppConfigModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientJsonpModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["EffectsRootModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_13__["StoreRouterConnectingModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtoolsModule"]]
        });
      })();
      /***/

    },

    /***/
    "Zda/":
    /*!***********************************************************!*\
      !*** ./src/app/components/iss-item/iss-item.component.ts ***!
      \***********************************************************/

    /*! exports provided: IssItemComponent */

    /***/
    function Zda(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IssItemComponent", function () {
        return IssItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var src_app_shared_components_confimation_dialog_confimation_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/components/confimation-dialog/confimation-dialog.component */
      "fm6V");
      /* harmony import */


      var src_app_store_actions_iss_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/store/actions/iss.action */
      "klS1");
      /* harmony import */


      var src_app_store_selectors_iss_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/store/selectors/iss.selectors */
      "6Fv5");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_shared_services_iss_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/iss.service */
      "P41H");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _shared_directives_click_stop_propogation_click_stop_propogation_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shared/directives/click-stop-propogation/click-stop-propogation.directive */
      "VALB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var IssItemComponent = /*#__PURE__*/function () {
        function IssItemComponent(_store, _dialog, _issService) {
          var _this5 = this;

          _classCallCheck(this, IssItemComponent);

          this._store = _store;
          this._dialog = _dialog;
          this._issService = _issService;
          this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.selectedIssSubscription = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_store_selectors_iss_selectors__WEBPACK_IMPORTED_MODULE_4__["selectSelectedISS"])).subscribe(function (iss) {
            return _this5.selectedISS = iss;
          });
        }

        _createClass(IssItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.selectedIssSubscription.unsubscribe();
          }
        }, {
          key: "remove",
          value: function remove() {
            var _this6 = this;

            var dialogRef = this._dialog.open(src_app_shared_components_confimation_dialog_confimation_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfimationDialogComponent"], {
              data: {
                title: 'Confirmation',
                message: 'Are you sure, that you wanna to delete this Location ?'
              }
            });

            dialogRef.afterClosed().subscribe(function (answer) {
              if (answer) {
                _this6.onRemove.emit(_this6.iss);

                _this6._store.dispatch(new src_app_store_actions_iss_action__WEBPACK_IMPORTED_MODULE_3__["RemoveIss"](_this6.iss.timestamp));

                _this6._store.dispatch(new src_app_store_actions_iss_action__WEBPACK_IMPORTED_MODULE_3__["FilterIss"](_this6._issService.getFilter()));
              }
            });
          }
        }, {
          key: "select",
          value: function select() {
            if (this.isSelected()) {
              this._store.dispatch(new src_app_store_actions_iss_action__WEBPACK_IMPORTED_MODULE_3__["GetSelectedIss"](null));

              this._issService.start();
            } else {
              this._store.dispatch(new src_app_store_actions_iss_action__WEBPACK_IMPORTED_MODULE_3__["GetSelectedIss"](this.iss));

              this._issService.stop();
            }
          }
        }, {
          key: "getTooltipMessage",
          value: function getTooltipMessage() {
            return this.isSelected() ? 'Unselect Location' : 'Select Location';
          }
        }, {
          key: "isSelected",
          value: function isSelected() {
            var _a, _b;

            return ((_a = this.selectedISS) === null || _a === void 0 ? void 0 : _a.timestamp) === ((_b = this.iss) === null || _b === void 0 ? void 0 : _b.timestamp);
          }
        }]);

        return IssItemComponent;
      }();

      IssItemComponent.ɵfac = function IssItemComponent_Factory(t) {
        return new (t || IssItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_iss_service__WEBPACK_IMPORTED_MODULE_6__["IssService"]));
      };

      IssItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IssItemComponent,
        selectors: [["app-iss-item"]],
        inputs: {
          iss: "iss"
        },
        outputs: {
          onRemove: "onRemove"
        },
        decls: 20,
        vars: 10,
        consts: [[1, "iss-item_card", 3, "matTooltip", "click"], ["click-stop-propagation", "", "aria-hidden", "false", "aria-label", "Remove", "matTooltip", "Remove", 1, "iss-item_button_remove", 3, "click"], [1, "iss-item_name"], [1, "iss-item_position"]],
        template: function IssItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssItemComponent_Template_div_click_0_listener() {
              return ctx.select();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssItemComponent_Template_mat_icon_click_1_listener() {
              return ctx.remove();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lat: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lon: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Date: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.isSelected());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.getTooltipMessage());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.iss.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.iss.latitude);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.iss.longitude);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 7, ctx.iss.timestamp, "YYYY-LL-MM HH:MM:SS"));
          }
        },
        directives: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _shared_directives_click_stop_propogation_click_stop_propogation_directive__WEBPACK_IMPORTED_MODULE_9__["ClickStopPropagationDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]],
        styles: [".iss-item_card[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 4px 15px 4px 8px;\n  position: relative;\n  transition: all 0.3s ease-in;\n}\n.iss-item_card[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease-out;\n  transform: scaleY(1.1);\n}\n.iss-item_card.active[_ngcontent-%COMP%] {\n  background-color: rgba(8, 72, 109, 0.3);\n  transition: all 0.3s ease-out;\n}\n.iss-item_button_remove[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -8px;\n  top: 5px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.iss-item_position[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.iss-item_position[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2lzcy1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7QUFFUjtBQUFJO0VBQ0ksdUNBQUE7RUFDQSw2QkFBQTtBQUVSO0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDSjtBQUdJO0VBQ0ksaUJBQUE7QUFBUjtBQUdJO0VBQ0ksaUJBQUE7QUFEUiIsImZpbGUiOiJpc3MtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pc3MtaXRlbV9jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDRweCAxNXB4IDRweCA4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMS4xKTtcbiAgICB9XG4gICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgsIDcyLCAxMDksIDAuMyk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgIH1cbn1cblxuLmlzcy1pdGVtX2J1dHRvbl9yZW1vdmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLThweDtcbiAgICB0b3A6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaXNzLWl0ZW1fcG9zaXRpb24ge1xuICAgIHN0cm9uZyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG59Il19 */"]
      });
      /***/
    },

    /***/
    "ekq2":
    /*!**********************************************!*\
      !*** ./src/app/store/effects/iss.effects.ts ***!
      \**********************************************/

    /*! exports provided: ISSEffects */

    /***/
    function ekq2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ISSEffects", function () {
        return ISSEffects;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_enums_iss_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/enums/iss.enum */
      "uCdQ");
      /* harmony import */


      var _actions_iss_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../actions/iss.action */
      "klS1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_services_iss_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/iss.service */
      "P41H");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");

      var ISSEffects = function ISSEffects(_issService, _actions$, _snackBar) {
        var _this7 = this;

        _classCallCheck(this, ISSEffects);

        this._issService = _issService;
        this._actions$ = _actions$;
        this._snackBar = _snackBar;
        this.getISS$ = this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_iss_action__WEBPACK_IMPORTED_MODULE_5__["EISSActions"].GetISS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_iss_action__WEBPACK_IMPORTED_MODULE_5__["GetIssSuccess"](action.payload));
        }));
        this.getSelectedISS$ = this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_iss_action__WEBPACK_IMPORTED_MODULE_5__["EISSActions"].GetSelectedISS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_iss_action__WEBPACK_IMPORTED_MODULE_5__["GetSelectedISSSuccess"](action.payload));
        }));
        this.addISS$ = this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_iss_action__WEBPACK_IMPORTED_MODULE_5__["EISSActions"].AddISS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) {
          return _this7._issService.addLocally(action.payload.iss);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) {
          var message = '';

          switch (action.payload.action) {
            case src_app_shared_enums_iss_enum__WEBPACK_IMPORTED_MODULE_4__["ISS_OPERATIONS"].RESTORE:
              message = "(".concat(action.payload.iss.name, ") ISS WAS Succesfully Restored");
              break;

            case src_app_shared_enums_iss_enum__WEBPACK_IMPORTED_MODULE_4__["ISS_OPERATIONS"].ADD:
              message = 'ISS Succesfully Saved';
              break;

            default:
              message = '';
              break;
          }

          _this7._snackBar.open(message, null, {
            duration: 3000
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_iss_action__WEBPACK_IMPORTED_MODULE_5__["AddIssSuccess"](action.payload.iss));
        }));
        this.removeISS$ = this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_iss_action__WEBPACK_IMPORTED_MODULE_5__["EISSActions"].RemoveIss), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
          return _this7._snackBar.open('Press C + Z to undo for removing', null, {
            duration: 3000
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) {
          return _this7._issService.removeLocally(action.payload);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_iss_action__WEBPACK_IMPORTED_MODULE_5__["RemoveIssSuccess"](action.payload));
        }));
        this.filterISS$ = this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_iss_action__WEBPACK_IMPORTED_MODULE_5__["EISSActions"].FilterIss), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (action) {
          return _this7._issService.saveFilter(action.payload);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_iss_action__WEBPACK_IMPORTED_MODULE_5__["FilterIssSuccess"](action.payload));
        }));
        this.getISSList$ = this._actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_iss_action__WEBPACK_IMPORTED_MODULE_5__["EISSActions"].GetISSList), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_iss_action__WEBPACK_IMPORTED_MODULE_5__["GetIssListSuccess"](_this7._issService.getISSList()));
        }));
      };

      ISSEffects.ɵfac = function ISSEffects_Factory(t) {
        return new (t || ISSEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_shared_services_iss_service__WEBPACK_IMPORTED_MODULE_7__["IssService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]));
      };

      ISSEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: ISSEffects,
        factory: ISSEffects.ɵfac
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()], ISSEffects.prototype, "getISS$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()], ISSEffects.prototype, "getSelectedISS$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()], ISSEffects.prototype, "addISS$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()], ISSEffects.prototype, "removeISS$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()], ISSEffects.prototype, "filterISS$", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()], ISSEffects.prototype, "getISSList$", void 0);
      /***/
    },

    /***/
    "fm6V":
    /*!**************************************************************************************!*\
      !*** ./src/app/shared/components/confimation-dialog/confimation-dialog.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: ConfimationDialogComponent */

    /***/
    function fm6V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfimationDialogComponent", function () {
        return ConfimationDialogComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function ConfimationDialogComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ConfimationDialogComponent_button_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
        }
      }

      function ConfimationDialogComponent_button_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", false);
        }
      }

      var ConfimationDialogComponent = /*#__PURE__*/function () {
        function ConfimationDialogComponent(data) {
          _classCallCheck(this, ConfimationDialogComponent);

          this.data = data;
        }

        _createClass(ConfimationDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ConfimationDialogComponent;
      }();

      ConfimationDialogComponent.ɵfac = function ConfimationDialogComponent_Factory(t) {
        return new (t || ConfimationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]));
      };

      ConfimationDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ConfimationDialogComponent,
        selectors: [["app-confimation-dialog"]],
        decls: 9,
        vars: 5,
        consts: [["mat-dialog-title", ""], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", 4, "ngIf"], ["mat-button", "", 3, "mat-dialog-close", 4, "ngIf"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close", 4, "ngIf"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", 3, "mat-dialog-close"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]],
        template: function ConfimationDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-dialog-actions", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ConfimationDialogComponent_button_6_Template, 2, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ConfimationDialogComponent_button_7_Template, 2, 1, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ConfimationDialogComponent_button_8_Template, 2, 1, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.message);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.close);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.data.close);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.data.close);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maW1hdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "gdE2":
    /*!***************************************************!*\
      !*** ./src/app/shared/enums/loca-storage.enum.ts ***!
      \***************************************************/

    /*! exports provided: LOCAL_STORAGE_ITEM */

    /***/
    function gdE2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE_ITEM", function () {
        return LOCAL_STORAGE_ITEM;
      });

      var LOCAL_STORAGE_ITEM;

      (function (LOCAL_STORAGE_ITEM) {
        LOCAL_STORAGE_ITEM["ISS_LIST"] = "issList";
        LOCAL_STORAGE_ITEM["FILTER"] = "filter";
      })(LOCAL_STORAGE_ITEM || (LOCAL_STORAGE_ITEM = {}));
      /***/

    },

    /***/
    "klS1":
    /*!*********************************************!*\
      !*** ./src/app/store/actions/iss.action.ts ***!
      \*********************************************/

    /*! exports provided: EISSActions, GetIssList, GetIssListSuccess, GetIss, GetIssSuccess, GetSelectedIss, GetSelectedISSSuccess, AddIss, AddIssSuccess, RemoveIss, RemoveIssSuccess, FilterIss, FilterIssSuccess */

    /***/
    function klS1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EISSActions", function () {
        return EISSActions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetIssList", function () {
        return GetIssList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetIssListSuccess", function () {
        return GetIssListSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetIss", function () {
        return GetIss;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetIssSuccess", function () {
        return GetIssSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetSelectedIss", function () {
        return GetSelectedIss;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetSelectedISSSuccess", function () {
        return GetSelectedISSSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddIss", function () {
        return AddIss;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddIssSuccess", function () {
        return AddIssSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RemoveIss", function () {
        return RemoveIss;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RemoveIssSuccess", function () {
        return RemoveIssSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterIss", function () {
        return FilterIss;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterIssSuccess", function () {
        return FilterIssSuccess;
      });

      var EISSActions;

      (function (EISSActions) {
        EISSActions["GetISSList"] = "[ISS] Get List";
        EISSActions["GetISSListSuccess"] = "[ISS] Get List Success";
        EISSActions["AddISS"] = "[ISS] Add";
        EISSActions["AddIssSuccess"] = "[ISS] Add Success";
        EISSActions["GetISS"] = "[ISS] Get";
        EISSActions["GetISSSuccess"] = "[ISS] Get Success";
        EISSActions["GetSelectedISS"] = "[ISS] Get Selected";
        EISSActions["GetSelectedISSSuccess"] = "[ISS] Get Selected Success";
        EISSActions["RemoveIss"] = "[ISS] Remove";
        EISSActions["RemoveIssSucess"] = "[ISS] Remove Success";
        EISSActions["FilterIss"] = "[ISS] Filter";
        EISSActions["FilterIssSucess"] = "[ISS] Filter Success";
      })(EISSActions || (EISSActions = {}));

      var GetIssList = function GetIssList() {
        _classCallCheck(this, GetIssList);

        this.type = EISSActions.GetISSList;
      };

      var GetIssListSuccess = function GetIssListSuccess(payload) {
        _classCallCheck(this, GetIssListSuccess);

        this.payload = payload;
        this.type = EISSActions.GetISSListSuccess;
      };

      var GetIss = function GetIss(payload) {
        _classCallCheck(this, GetIss);

        this.payload = payload;
        this.type = EISSActions.GetISS;
      };

      var GetIssSuccess = function GetIssSuccess(payload) {
        _classCallCheck(this, GetIssSuccess);

        this.payload = payload;
        this.type = EISSActions.GetISSSuccess;
      };

      var GetSelectedIss = function GetSelectedIss(payload) {
        _classCallCheck(this, GetSelectedIss);

        this.payload = payload;
        this.type = EISSActions.GetSelectedISS;
      };

      var GetSelectedISSSuccess = function GetSelectedISSSuccess(payload) {
        _classCallCheck(this, GetSelectedISSSuccess);

        this.payload = payload;
        this.type = EISSActions.GetSelectedISSSuccess;
      };

      var AddIss = function AddIss(payload) {
        _classCallCheck(this, AddIss);

        this.payload = payload;
        this.type = EISSActions.AddISS;
      };

      var AddIssSuccess = function AddIssSuccess(payload) {
        _classCallCheck(this, AddIssSuccess);

        this.payload = payload;
        this.type = EISSActions.AddIssSuccess;
      };

      var RemoveIss = function RemoveIss(payload) {
        _classCallCheck(this, RemoveIss);

        this.payload = payload;
        this.type = EISSActions.RemoveIss;
      };

      var RemoveIssSuccess = function RemoveIssSuccess(payload) {
        _classCallCheck(this, RemoveIssSuccess);

        this.payload = payload;
        this.type = EISSActions.RemoveIssSucess;
      };

      var FilterIss = function FilterIss(payload) {
        _classCallCheck(this, FilterIss);

        this.payload = payload;
        this.type = EISSActions.FilterIss;
      };

      var FilterIssSuccess = function FilterIssSuccess(payload) {
        _classCallCheck(this, FilterIssSuccess);

        this.payload = payload;
        this.type = EISSActions.FilterIssSucess;
      };
      /***/

    },

    /***/
    "l+t5":
    /*!**************************************!*\
      !*** ./src/app/app.config-module.ts ***!
      \**************************************/

    /*! exports provided: APP_CONFIG, AppConfig, APP_DI_CONFIG, AppConfigModule */

    /***/
    function lT5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APP_CONFIG", function () {
        return APP_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppConfig", function () {
        return AppConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "APP_DI_CONFIG", function () {
        return APP_DI_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppConfigModule", function () {
        return AppConfigModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('app.config');

      var AppConfig = function AppConfig() {
        _classCallCheck(this, AppConfig);
      };

      var APP_DI_CONFIG = {
        pathIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABX0lEQVQ4T43TvW+OURjH8U+9RcTSGsTQVhojKjFhsXev6EZiMEgsEomuQrRCjAZC4k+wVxNbB8ImomGweBkq1FvJj+vIncejnrOcnPvk+73P9bvOGfJ7nMN57Kj1/6ZXuIC7QwVfwklcG0AS+BTu40QETzCHWziAB+tIAh/GMqZwM4KMSI7jEUbwoo8k8B58xG48xFgTNMkRvMMWvClZ9gKP4ju24VngbHQFWT/FfnzBJmyt+UPBG/Gywf0ETbIXX7EBazX/Bf9LkO+bsYpZ7MLpKmelt7+9JbT9/O1ztWsnLmI7Pg0iSGDjVcKPyilzMnnb253eEwSeqOOnjOwnh+TxrUpLd/7c2K4g8EG8rvSfd9JOd/aVaLgu0i9JEwSewUKFttRtVdUdySG8xyQWc5IIAt/AZRzFvT5wyy6SY3icd4DrEVzF2XqNZ9aBmyTX/gpuh2klzGN6ALgruYP5n2oJS7K9P0cOAAAAAElFTkSuQmCC',
        issIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADOElEQVRYR7XXR6heVRQF4C9gRDQW0AycGMUSxUImEguO1JEdUXQiVnAUSURMYsOGHUUc2BAiDiwDRXEiiogiiA7ECqKICsaBih1jsLDC2XByc9/v+8P/H3jw3j3n3rX22mvvfd4S269D8AX+wip8PNif+Z9LBl+8GVdjGV7ERnw0c9Tugz2B/P4b9uj2X8IafDkvEgGN7Be1yHvw3fA13sb181IiBMYiD/j3zQOX4/Z5pSPgW7G0k7iP/AZ82PbiiQ2zNmYIHIk7cQYq8lfRg4dDzHgFflmAxP44C6fhBOyCb3HepPSVCUPiLhyLr3BZF3mBP4eT8MdIOvLeTfgHZw4MGyNHudFq6qvgINy/QOTxwW04pUtHlWjAr8FxOB0p5XMGJD7FEWOVNOwDfToq8iF4np/aIn0S63Bh6x2fNBK34OwO8GfsvRgCOVMkokjJXpEXeJpVPFLg9e00sDESP2DfxRIoEns12U/uXkzkMdqu2LNFnu19cCjeXUCJ+CAm32ENU9AfGKajwDe1pnVBO3w3NuP5Vh1pZqVEQG/Fy3hkWgI5fxTuwINN7m8QZXrwt9rcyPkDsXygRNx/Kb7bGQJF4kok8oewuou8B8/jtXgCMV3Ws4hC742B59mkFAzfSVO5Dz9hJYbg8UYa0LXtxadx7yTwaQlUs3q91XTKs1bAj8f6acCnIXBYkzJGDIH8/I0HWlWMgV+Mh/9vii42BbkhpfTKE5kdIXE4fhzInvyvaPJfNakNT6PAcGT36Qjg43gG9+CSVpIZaFkTp+hiFSiy/Y3p9y4d5+MDbMELKPC891q70Pw6lo5pCAxJpPGkHb/S5kKGVVw/BH8T57Zr3Q53zGkJFIlEmib1WZM5/WGhyB/F0V06tiOxMwTGekp5IuO4ZL8Oj3XgeX5MG9cZYtsuurMikG/V7Ngdb7SbUEVe4CGUKftOVccsCRSJzIpe9gLPHSFjfT/8Wf93zJpAr0SN38ge8LTpAxp4pXHrPAj0JOKDqBHDVuQFnjJeNi8CRSKleeJI5AFP03pqngRCIveDlGhVR55tixz/zroKxspz6ImAZ6TfWIfnrUDhpETfbwPtYHxeG/8BeAbHbS25R5MAAAAASUVORK5CYII=',
        defaultZoom: 4,
        googleApiUrl: "https://maps.googleapis.com/maps/api/js?key=".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].googleKey),
        iisApiUrl: 'http://api.open-notify.org/iss-now.json'
      };

      var AppConfigModule = function AppConfigModule() {
        _classCallCheck(this, AppConfigModule);
      };

      AppConfigModule.ɵfac = function AppConfigModule_Factory(t) {
        return new (t || AppConfigModule)();
      };

      AppConfigModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppConfigModule
      });
      AppConfigModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [{
          provide: APP_CONFIG,
          useValue: APP_DI_CONFIG
        }]
      });
      /***/
    },

    /***/
    "uCdQ":
    /*!******************************************!*\
      !*** ./src/app/shared/enums/iss.enum.ts ***!
      \******************************************/

    /*! exports provided: ISS_OPERATIONS */

    /***/
    function uCdQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ISS_OPERATIONS", function () {
        return ISS_OPERATIONS;
      });

      var ISS_OPERATIONS;

      (function (ISS_OPERATIONS) {
        ISS_OPERATIONS["RESTORE"] = "restore";
        ISS_OPERATIONS["ADD"] = "add";
      })(ISS_OPERATIONS || (ISS_OPERATIONS = {}));
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_enums_routes_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/enums/routes.enum */
      "8oqf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: _shared_enums_routes_enum__WEBPACK_IMPORTED_MODULE_1__["ROUTES_NAME"].MAP,
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-map-map-module */
          "pages-map-map-module").then(__webpack_require__.bind(null,
          /*! ./pages/map/map.module */
          "862v")).then(function (m) {
            return m.MapModule;
          });
        },
        data: {
          index: _shared_enums_routes_enum__WEBPACK_IMPORTED_MODULE_1__["ROUTES_INDEXES"].MAP
        }
      }, {
        path: _shared_enums_routes_enum__WEBPACK_IMPORTED_MODULE_1__["ROUTES_NAME"].REPORT,
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-report-report-module */
          "pages-report-report-module").then(__webpack_require__.bind(null,
          /*! ./pages/report/report.module */
          "Q0Id")).then(function (m) {
            return m.ReportModule;
          });
        },
        data: {
          index: _shared_enums_routes_enum__WEBPACK_IMPORTED_MODULE_1__["ROUTES_INDEXES"].REPORT
        }
      }, {
        path: '**',
        redirectTo: _shared_enums_routes_enum__WEBPACK_IMPORTED_MODULE_1__["ROUTES_NAME"].MAP,
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zBoC":
    /*!*********************************************************!*\
      !*** ./src/app/components/sidebar/sidebar.component.ts ***!
      \*********************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function zBoC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_store_actions_iss_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/store/actions/iss.action */
      "klS1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var src_app_shared_services_iss_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/iss.service */
      "P41H");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _iss_list_iss_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../iss-list/iss-list.component */
      "OjAy");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function SidebarComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r1.clearFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(_store, _issService) {
          var _this8 = this;

          _classCallCheck(this, SidebarComponent);

          this._store = _store;
          this._issService = _issService;
          this.filter = '';
          this.filterChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.filterChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])()).subscribe(function (model) {
            _this8.filter = model;

            _this8.filterList();
          });
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.filter = this._issService.getFilter();

            this._store.dispatch(new src_app_store_actions_iss_action__WEBPACK_IMPORTED_MODULE_2__["GetIssList"]());
          }
        }, {
          key: "clearFilter",
          value: function clearFilter() {
            this.filter = '';
            this.filterList();
          }
        }, {
          key: "onFilterChange",
          value: function onFilterChange(query) {
            this.filterChanged.next(query);
          }
        }, {
          key: "filterList",
          value: function filterList() {
            this._store.dispatch(new src_app_store_actions_iss_action__WEBPACK_IMPORTED_MODULE_2__["FilterIss"](this.filter));
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_iss_service__WEBPACK_IMPORTED_MODULE_5__["IssService"]));
      };

      SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: SidebarComponent,
        selectors: [["app-sidebar"]],
        decls: 7,
        vars: 2,
        consts: [["appearance", "outline"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Search location name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SidebarComponent_Template_input_ngModelChange_4_listener($event) {
              return ctx.filter = $event;
            })("ngModelChange", function SidebarComponent_Template_input_ngModelChange_4_listener($event) {
              return ctx.onFilterChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_button_5_Template, 3, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-iss-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filter);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.filter);
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _iss_list_iss_list_component__WEBPACK_IMPORTED_MODULE_10__["IssListComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"]],
        styles: ["aside[_ngcontent-%COMP%] {\n  min-width: 300px;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhc2lkZSB7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map