(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-report-report-module"], {
    /***/
    "KZJ6":
    /*!**************************************************!*\
      !*** ./src/app/pages/report/report.component.ts ***!
      \**************************************************/

    /*! exports provided: ReportComponent */

    /***/
    function KZJ6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportComponent", function () {
        return ReportComponent;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var src_app_shared_enums_routes_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/enums/routes.enum */
      "8oqf");
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function ReportComponent_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ReportComponent_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r12.name, " ");
        }
      }

      function ReportComponent_th_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Latitude ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ReportComponent_td_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r13.latitude, " ");
        }
      }

      function ReportComponent_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Longitude ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ReportComponent_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r14.longitude, " ");
        }
      }

      function ReportComponent_th_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ReportComponent_td_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r15.timestamp, " ");
        }
      }

      function ReportComponent_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Actions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ReportComponent_td_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReportComponent_td_15_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);

            var element_r16 = ctx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r17.onSelect(element_r16);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r16 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r9.getButtonName(element_r16));
        }
      }

      function ReportComponent_tr_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 13);
        }
      }

      function ReportComponent_tr_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 14);
        }
      }

      var ReportComponent = /*#__PURE__*/function () {
        function ReportComponent(_store, _issService, _router) {
          var _this = this;

          _classCallCheck(this, ReportComponent);

          this._store = _store;
          this._issService = _issService;
          this._router = _router;
          this.displayedColumns = ['name', 'latitude', 'longitude', 'timestamp', 'actions'];
          this.issList$ = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_store_selectors_iss_selectors__WEBPACK_IMPORTED_MODULE_3__["selectFilteredISS"]));
          this.issSubscription = this.issList$.subscribe(function (issList) {
            _this.dataSource = issList;
          });
          this.selectedIssSubscription = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_store_selectors_iss_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSelectedISS"])).subscribe(function (iss) {
            return _this.selectedISS = iss;
          });
        }

        _createClass(ReportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._store.dispatch(new src_app_store_actions_iss_action__WEBPACK_IMPORTED_MODULE_2__["GetIssList"]());
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.issSubscription.unsubscribe();
            this.selectedIssSubscription.unsubscribe();
          }
        }, {
          key: "onSelect",
          value: function onSelect(iss) {
            if (this.isSelected(iss)) {
              this._store.dispatch(new src_app_store_actions_iss_action__WEBPACK_IMPORTED_MODULE_2__["GetSelectedIss"](null));

              this._issService.start();
            } else {
              this._store.dispatch(new src_app_store_actions_iss_action__WEBPACK_IMPORTED_MODULE_2__["GetSelectedIss"](iss));

              this._issService.stop();

              this._router.navigateByUrl("/".concat(src_app_shared_enums_routes_enum__WEBPACK_IMPORTED_MODULE_1__["ROUTES_NAME"].MAP));
            }
          }
        }, {
          key: "getButtonName",
          value: function getButtonName(iss) {
            return this.isSelected(iss) ? 'Unselect' : 'Select';
          }
        }, {
          key: "isSelected",
          value: function isSelected(iss) {
            var _a;

            return (iss === null || iss === void 0 ? void 0 : iss.timestamp) === ((_a = this.selectedISS) === null || _a === void 0 ? void 0 : _a.timestamp);
          }
        }]);

        return ReportComponent;
      }();

      ReportComponent.ɵfac = function ReportComponent_Factory(t) {
        return new (t || ReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_iss_service__WEBPACK_IMPORTED_MODULE_5__["IssService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      ReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: ReportComponent,
        selectors: [["app-report"]],
        decls: 18,
        vars: 3,
        consts: [["mat-table", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "latitude"], ["matColumnDef", "longitude"], ["matColumnDef", "timestamp"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function ReportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ReportComponent_th_2_Template, 2, 0, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ReportComponent_td_3_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](4, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ReportComponent_th_5_Template, 2, 0, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ReportComponent_td_6_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](7, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ReportComponent_th_8_Template, 2, 0, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ReportComponent_td_9_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](10, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ReportComponent_th_11_Template, 2, 0, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ReportComponent_td_12_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](13, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ReportComponent_th_14_Template, 2, 0, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ReportComponent_td_15_Template, 3, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, ReportComponent_tr_16_Template, 1, 0, "tr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ReportComponent_tr_17_Template, 1, 0, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRow"]],
        styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJyZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "Q0Id":
    /*!***********************************************!*\
      !*** ./src/app/pages/report/report.module.ts ***!
      \***********************************************/

    /*! exports provided: ReportModule */

    /***/
    function Q0Id(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportModule", function () {
        return ReportModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _report_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./report-routing.module */
      "UYUb");
      /* harmony import */


      var _report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./report.component */
      "KZJ6");
      /* harmony import */


      var src_app_shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/modules/material/material.module */
      "W/RB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ReportModule = function ReportModule() {
        _classCallCheck(this, ReportModule);
      };

      ReportModule.ɵfac = function ReportModule_Factory(t) {
        return new (t || ReportModule)();
      };

      ReportModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: ReportModule
      });
      ReportModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _report_routing_module__WEBPACK_IMPORTED_MODULE_1__["ReportRoutingModule"], src_app_shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ReportModule, {
          declarations: [_report_component__WEBPACK_IMPORTED_MODULE_2__["ReportComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _report_routing_module__WEBPACK_IMPORTED_MODULE_1__["ReportRoutingModule"], src_app_shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]]
        });
      })();
      /***/

    },

    /***/
    "UYUb":
    /*!*******************************************************!*\
      !*** ./src/app/pages/report/report-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: ReportRoutingModule */

    /***/
    function UYUb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportRoutingModule", function () {
        return ReportRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./report.component */
      "KZJ6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _report_component__WEBPACK_IMPORTED_MODULE_1__["ReportComponent"]
      }];

      var ReportRoutingModule = function ReportRoutingModule() {
        _classCallCheck(this, ReportRoutingModule);
      };

      ReportRoutingModule.ɵfac = function ReportRoutingModule_Factory(t) {
        return new (t || ReportRoutingModule)();
      };

      ReportRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: ReportRoutingModule
      });
      ReportRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ReportRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-report-report-module-es5.js.map