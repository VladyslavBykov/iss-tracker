(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-map-map-module"], {
    /***/
    "3sZV":
    /*!********************************************************************************!*\
      !*** ./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js ***!
      \********************************************************************************/

    /*! exports provided: GoogleMap, GoogleMapsModule, MapBaseLayer, MapBicyclingLayer, MapCircle, MapDirectionsRenderer, MapDirectionsService, MapGeocoder, MapGroundOverlay, MapHeatmapLayer, MapInfoWindow, MapKmlLayer, MapMarker, MapMarkerClusterer, MapPolygon, MapPolyline, MapRectangle, MapTrafficLayer, MapTransitLayer */

    /***/
    function sZV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleMap", function () {
        return GoogleMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleMapsModule", function () {
        return GoogleMapsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapBaseLayer", function () {
        return MapBaseLayer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapBicyclingLayer", function () {
        return MapBicyclingLayer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapCircle", function () {
        return MapCircle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapDirectionsRenderer", function () {
        return MapDirectionsRenderer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapDirectionsService", function () {
        return MapDirectionsService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapGeocoder", function () {
        return MapGeocoder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapGroundOverlay", function () {
        return MapGroundOverlay;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapHeatmapLayer", function () {
        return MapHeatmapLayer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapInfoWindow", function () {
        return MapInfoWindow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapKmlLayer", function () {
        return MapKmlLayer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapMarker", function () {
        return MapMarker;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapMarkerClusterer", function () {
        return MapMarkerClusterer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapPolygon", function () {
        return MapPolygon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapPolyline", function () {
        return MapPolyline;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapRectangle", function () {
        return MapRectangle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapTrafficLayer", function () {
        return MapTrafficLayer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapTransitLayer", function () {
        return MapTransitLayer;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Manages event on a Google Maps object, ensuring that events are added only when necessary. */


      var _c0 = ["*"];

      var MapEventManager = /*#__PURE__*/function () {
        function MapEventManager(_ngZone) {
          _classCallCheck(this, MapEventManager);

          this._ngZone = _ngZone;
          /** Pending listeners that were added before the target was set. */

          this._pending = [];
          this._listeners = [];
          this._targetStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        }
        /** Clears all currently-registered event listeners. */


        _createClass(MapEventManager, [{
          key: "_clearListeners",
          value: function _clearListeners() {
            var _iterator = _createForOfIteratorHelper(this._listeners),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var listener = _step.value;
                listener.remove();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this._listeners = [];
          }
          /** Gets an observable that adds an event listener to the map when a consumer subscribes to it. */

        }, {
          key: "getLazyEmitter",
          value: function getLazyEmitter(name) {
            var _this = this;

            return this._targetStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (target) {
              var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                // If the target hasn't been initialized yet, cache the observer so it can be added later.
                if (!target) {
                  _this._pending.push({
                    observable: observable,
                    observer: observer
                  });

                  return undefined;
                }

                var listener = target.addListener(name, function (event) {
                  _this._ngZone.run(function () {
                    return observer.next(event);
                  });
                });

                _this._listeners.push(listener);

                return function () {
                  return listener.remove();
                };
              });
              return observable;
            }));
          }
          /** Sets the current target that the manager should bind events to. */

        }, {
          key: "setTarget",
          value: function setTarget(target) {
            var currentTarget = this._targetStream.value;

            if (target === currentTarget) {
              return;
            } // Clear the listeners from the pre-existing target.


            if (currentTarget) {
              this._clearListeners();

              this._pending = [];
            }

            this._targetStream.next(target); // Add the listeners that were bound before the map was initialized.


            this._pending.forEach(function (subscriber) {
              return subscriber.observable.subscribe(subscriber.observer);
            });

            this._pending = [];
          }
          /** Destroys the manager and clears the event listeners. */

        }, {
          key: "destroy",
          value: function destroy() {
            this._clearListeners();

            this._pending = [];

            this._targetStream.complete();
          }
        }]);

        return MapEventManager;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** default options set to the Googleplex */


      var DEFAULT_OPTIONS = {
        center: {
          lat: 37.421995,
          lng: -122.084092
        },
        zoom: 17,
        // Note: the type conversion here isn't necessary for our CI, but it resolves a g3 failure.
        mapTypeId: 'roadmap'
      };
      /** Arbitrary default height for the map element */

      var DEFAULT_HEIGHT = '500px';
      /** Arbitrary default width for the map element */

      var DEFAULT_WIDTH = '500px';
      /**
       * Angular component that renders a Google Map via the Google Maps JavaScript
       * API.
       * @see https://developers.google.com/maps/documentation/javascript/reference/
       */

      var GoogleMap = /*#__PURE__*/function () {
        function GoogleMap(_elementRef, _ngZone, platformId) {
          _classCallCheck(this, GoogleMap);

          this._elementRef = _elementRef;
          this._ngZone = _ngZone;
          this._eventManager = new MapEventManager(this._ngZone);
          /** Height of the map. Set this to `null` if you'd like to control the height through CSS. */

          this.height = DEFAULT_HEIGHT;
          /** Width of the map. Set this to `null` if you'd like to control the width through CSS. */

          this.width = DEFAULT_WIDTH;
          this._options = DEFAULT_OPTIONS;
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.bounds_changed
           */

          this.boundsChanged = this._eventManager.getLazyEmitter('bounds_changed');
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.center_changed
           */

          this.centerChanged = this._eventManager.getLazyEmitter('center_changed');
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.click
           */

          this.mapClick = this._eventManager.getLazyEmitter('click');
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dblclick
           */

          this.mapDblclick = this._eventManager.getLazyEmitter('dblclick');
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.drag
           */

          this.mapDrag = this._eventManager.getLazyEmitter('drag');
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dragend
           */

          this.mapDragend = this._eventManager.getLazyEmitter('dragend');
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dragstart
           */

          this.mapDragstart = this._eventManager.getLazyEmitter('dragstart');
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.heading_changed
           */

          this.headingChanged = this._eventManager.getLazyEmitter('heading_changed');
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.idle
           */

          this.idle = this._eventManager.getLazyEmitter('idle');
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.maptypeid_changed
           */

          this.maptypeidChanged = this._eventManager.getLazyEmitter('maptypeid_changed');
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mousemove
           */

          this.mapMousemove = this._eventManager.getLazyEmitter('mousemove');
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mouseout
           */

          this.mapMouseout = this._eventManager.getLazyEmitter('mouseout');
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mouseover
           */

          this.mapMouseover = this._eventManager.getLazyEmitter('mouseover');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/map#Map.projection_changed
           */

          this.projectionChanged = this._eventManager.getLazyEmitter('projection_changed');
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.rightclick
           */

          this.mapRightclick = this._eventManager.getLazyEmitter('rightclick');
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.tilesloaded
           */

          this.tilesloaded = this._eventManager.getLazyEmitter('tilesloaded');
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.tilt_changed
           */

          this.tiltChanged = this._eventManager.getLazyEmitter('tilt_changed');
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.zoom_changed
           */

          this.zoomChanged = this._eventManager.getLazyEmitter('zoom_changed');
          this._isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId);

          if (this._isBrowser) {
            var googleMapsWindow = window;

            if (!googleMapsWindow.google && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('Namespace google not found, cannot construct embedded google ' + 'map. Please install the Google Maps JavaScript API: ' + 'https://developers.google.com/maps/documentation/javascript/' + 'tutorial#Loading_the_Maps_API');
            }
          }
        }

        _createClass(GoogleMap, [{
          key: "center",
          set: function set(center) {
            this._center = center;
          }
        }, {
          key: "zoom",
          set: function set(zoom) {
            this._zoom = zoom;
          }
        }, {
          key: "options",
          set: function set(options) {
            this._options = options || DEFAULT_OPTIONS;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes['height'] || changes['width']) {
              this._setSize();
            }

            var googleMap = this.googleMap;

            if (googleMap) {
              if (changes['options']) {
                googleMap.setOptions(this._combineOptions());
              }

              if (changes['center'] && this._center) {
                googleMap.setCenter(this._center);
              } // Note that the zoom can be zero.


              if (changes['zoom'] && this._zoom != null) {
                googleMap.setZoom(this._zoom);
              }

              if (changes['mapTypeId'] && this.mapTypeId) {
                googleMap.setMapTypeId(this.mapTypeId);
              }
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            // It should be a noop during server-side rendering.
            if (this._isBrowser) {
              this._mapEl = this._elementRef.nativeElement.querySelector('.map-container');

              this._setSize(); // Create the object outside the zone so its events don't trigger change detection.
              // We'll bring it back in inside the `MapEventManager` only for the events that the
              // user has subscribed to.


              this._ngZone.runOutsideAngular(function () {
                _this2.googleMap = new google.maps.Map(_this2._mapEl, _this2._combineOptions());
              });

              this._eventManager.setTarget(this.googleMap);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._eventManager.destroy();
          }
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.fitBounds
           */

        }, {
          key: "fitBounds",
          value: function fitBounds(bounds, padding) {
            this._assertInitialized();

            this.googleMap.fitBounds(bounds, padding);
          }
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panBy
           */

        }, {
          key: "panBy",
          value: function panBy(x, y) {
            this._assertInitialized();

            this.googleMap.panBy(x, y);
          }
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panTo
           */

        }, {
          key: "panTo",
          value: function panTo(latLng) {
            this._assertInitialized();

            this.googleMap.panTo(latLng);
          }
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panToBounds
           */

        }, {
          key: "panToBounds",
          value: function panToBounds(latLngBounds, padding) {
            this._assertInitialized();

            this.googleMap.panToBounds(latLngBounds, padding);
          }
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getBounds
           */

        }, {
          key: "getBounds",
          value: function getBounds() {
            this._assertInitialized();

            return this.googleMap.getBounds() || null;
          }
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getCenter
           */

        }, {
          key: "getCenter",
          value: function getCenter() {
            this._assertInitialized();

            return this.googleMap.getCenter();
          }
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getClickableIcons
           */

        }, {
          key: "getClickableIcons",
          value: function getClickableIcons() {
            this._assertInitialized();

            return this.googleMap.getClickableIcons();
          }
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getHeading
           */

        }, {
          key: "getHeading",
          value: function getHeading() {
            this._assertInitialized();

            return this.googleMap.getHeading();
          }
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getMapTypeId
           */

        }, {
          key: "getMapTypeId",
          value: function getMapTypeId() {
            this._assertInitialized();

            return this.googleMap.getMapTypeId();
          }
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getProjection
           */

        }, {
          key: "getProjection",
          value: function getProjection() {
            this._assertInitialized();

            return this.googleMap.getProjection();
          }
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getStreetView
           */

        }, {
          key: "getStreetView",
          value: function getStreetView() {
            this._assertInitialized();

            return this.googleMap.getStreetView();
          }
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getTilt
           */

        }, {
          key: "getTilt",
          value: function getTilt() {
            this._assertInitialized();

            return this.googleMap.getTilt();
          }
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getZoom
           */

        }, {
          key: "getZoom",
          value: function getZoom() {
            this._assertInitialized();

            return this.googleMap.getZoom();
          }
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.controls
           */

        }, {
          key: "controls",
          get: function get() {
            this._assertInitialized();

            return this.googleMap.controls;
          }
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.data
           */

        }, {
          key: "data",
          get: function get() {
            this._assertInitialized();

            return this.googleMap.data;
          }
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mapTypes
           */

        }, {
          key: "mapTypes",
          get: function get() {
            this._assertInitialized();

            return this.googleMap.mapTypes;
          }
          /**
           * See
           * https://developers.google.com/maps/documentation/javascript/reference/map#Map.overlayMapTypes
           */

        }, {
          key: "overlayMapTypes",
          get: function get() {
            this._assertInitialized();

            return this.googleMap.overlayMapTypes;
          }
        }, {
          key: "_setSize",
          value: function _setSize() {
            if (this._mapEl) {
              var styles = this._mapEl.style;
              styles.height = this.height === null ? '' : coerceCssPixelValue(this.height) || DEFAULT_HEIGHT;
              styles.width = this.width === null ? '' : coerceCssPixelValue(this.width) || DEFAULT_WIDTH;
            }
          }
          /** Combines the center and zoom and the other map options into a single object */

        }, {
          key: "_combineOptions",
          value: function _combineOptions() {
            var _a, _b;

            var options = this._options || {};
            return Object.assign(Object.assign({}, options), {
              // It's important that we set **some** kind of `center` and `zoom`, otherwise
              // Google Maps will render a blank rectangle which looks broken.
              center: this._center || options.center || DEFAULT_OPTIONS.center,
              zoom: (_b = (_a = this._zoom) !== null && _a !== void 0 ? _a : options.zoom) !== null && _b !== void 0 ? _b : DEFAULT_OPTIONS.zoom,
              // Passing in an undefined `mapTypeId` seems to break tile loading
              // so make sure that we have some kind of default (see #22082).
              mapTypeId: this.mapTypeId || options.mapTypeId || DEFAULT_OPTIONS.mapTypeId
            });
          }
          /** Asserts that the map has been initialized. */

        }, {
          key: "_assertInitialized",
          value: function _assertInitialized() {
            if (!this.googleMap && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
            }
          }
        }]);

        return GoogleMap;
      }();

      GoogleMap.ɵfac = function GoogleMap_Factory(t) {
        return new (t || GoogleMap)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
      };

      GoogleMap.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GoogleMap,
        selectors: [["google-map"]],
        inputs: {
          height: "height",
          width: "width",
          center: "center",
          zoom: "zoom",
          options: "options",
          mapTypeId: "mapTypeId"
        },
        outputs: {
          boundsChanged: "boundsChanged",
          centerChanged: "centerChanged",
          mapClick: "mapClick",
          mapDblclick: "mapDblclick",
          mapDrag: "mapDrag",
          mapDragend: "mapDragend",
          mapDragstart: "mapDragstart",
          headingChanged: "headingChanged",
          idle: "idle",
          maptypeidChanged: "maptypeidChanged",
          mapMousemove: "mapMousemove",
          mapMouseout: "mapMouseout",
          mapMouseover: "mapMouseover",
          projectionChanged: "projectionChanged",
          mapRightclick: "mapRightclick",
          tilesloaded: "tilesloaded",
          tiltChanged: "tiltChanged",
          zoomChanged: "zoomChanged"
        },
        exportAs: ["googleMap"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        consts: [[1, "map-container"]],
        template: function GoogleMap_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      GoogleMap.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      };

      GoogleMap.propDecorators = {
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        mapTypeId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        center: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        zoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        boundsChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        centerChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mapClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mapDblclick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mapDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mapDragend: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mapDragstart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        headingChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        idle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        maptypeidChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mapMousemove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mapMouseout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mapMouseover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        projectionChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mapRightclick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        tilesloaded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        tiltChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        zoomChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleMap, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'google-map',
            exportAs: 'googleMap',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: '<div class="map-container"></div><ng-content></ng-content>',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }];
        }, {
          height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          boundsChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          centerChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mapClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mapDblclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mapDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mapDragend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mapDragstart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          headingChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          idle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          maptypeidChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mapMousemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mapMouseout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mapMouseover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          projectionChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mapRightclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          tilesloaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          tiltChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          zoomChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          center: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          zoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          mapTypeId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var cssUnitsPattern = /([A-Za-z%]+)$/;
      /** Coerces a value to a CSS pixel value. */

      function coerceCssPixelValue(value) {
        if (value == null) {
          return '';
        }

        return cssUnitsPattern.test(value) ? value : "".concat(value, "px");
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MapBaseLayer = /*#__PURE__*/function () {
        function MapBaseLayer(_map, _ngZone) {
          _classCallCheck(this, MapBaseLayer);

          this._map = _map;
          this._ngZone = _ngZone;
        }

        _createClass(MapBaseLayer, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            if (this._map._isBrowser) {
              this._ngZone.runOutsideAngular(function () {
                _this3._initializeObject();
              });

              this._assertInitialized();

              this._setMap();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._unsetMap();
          }
        }, {
          key: "_assertInitialized",
          value: function _assertInitialized() {
            if (!this._map.googleMap) {
              throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
            }
          }
        }, {
          key: "_initializeObject",
          value: function _initializeObject() {}
        }, {
          key: "_setMap",
          value: function _setMap() {}
        }, {
          key: "_unsetMap",
          value: function _unsetMap() {}
        }]);

        return MapBaseLayer;
      }();

      MapBaseLayer.ɵfac = function MapBaseLayer_Factory(t) {
        return new (t || MapBaseLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      MapBaseLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MapBaseLayer,
        selectors: [["map-base-layer"]],
        exportAs: ["mapBaseLayer"]
      });

      MapBaseLayer.ctorParameters = function () {
        return [{
          type: GoogleMap
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapBaseLayer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'map-base-layer',
            exportAs: 'mapBaseLayer'
          }]
        }], function () {
          return [{
            type: GoogleMap
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Angular component that renders a Google Maps Bicycling Layer via the Google Maps JavaScript API.
       *
       * See developers.google.com/maps/documentation/javascript/reference/map#BicyclingLayer
       */


      var MapBicyclingLayer = /*#__PURE__*/function (_MapBaseLayer) {
        _inherits(MapBicyclingLayer, _MapBaseLayer);

        var _super = _createSuper(MapBicyclingLayer);

        function MapBicyclingLayer() {
          _classCallCheck(this, MapBicyclingLayer);

          return _super.apply(this, arguments);
        }

        _createClass(MapBicyclingLayer, [{
          key: "_initializeObject",
          value: function _initializeObject() {
            this.bicyclingLayer = new google.maps.BicyclingLayer();
          }
        }, {
          key: "_setMap",
          value: function _setMap() {
            this._assertLayerInitialized();

            this.bicyclingLayer.setMap(this._map.googleMap);
          }
        }, {
          key: "_unsetMap",
          value: function _unsetMap() {
            if (this.bicyclingLayer) {
              this.bicyclingLayer.setMap(null);
            }
          }
        }, {
          key: "_assertLayerInitialized",
          value: function _assertLayerInitialized() {
            if (!this.bicyclingLayer) {
              throw Error('Cannot interact with a Google Map Bicycling Layer before it has been initialized. ' + 'Please wait for the Transit Layer to load before trying to interact with it.');
            }
          }
        }]);

        return MapBicyclingLayer;
      }(MapBaseLayer);

      MapBicyclingLayer.ɵfac = function MapBicyclingLayer_Factory(t) {
        return ɵMapBicyclingLayer_BaseFactory(t || MapBicyclingLayer);
      };

      MapBicyclingLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MapBicyclingLayer,
        selectors: [["map-bicycling-layer"]],
        exportAs: ["mapBicyclingLayer"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMapBicyclingLayer_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MapBicyclingLayer);

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapBicyclingLayer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'map-bicycling-layer',
            exportAs: 'mapBicyclingLayer'
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Angular component that renders a Google Maps Circle via the Google Maps JavaScript API.
       * @see developers.google.com/maps/documentation/javascript/reference/polygon#Circle
       */


      var MapCircle = /*#__PURE__*/function () {
        function MapCircle(_map, _ngZone) {
          _classCallCheck(this, MapCircle);

          this._map = _map;
          this._ngZone = _ngZone;
          this._eventManager = new MapEventManager(this._ngZone);
          this._options = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
          this._center = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
          this._radius = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
           * @see
           * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.center_changed
           */

          this.centerChanged = this._eventManager.getLazyEmitter('center_changed');
          /**
           * @see
           * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.click
           */

          this.circleClick = this._eventManager.getLazyEmitter('click');
          /**
           * @see
           * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dblclick
           */

          this.circleDblclick = this._eventManager.getLazyEmitter('dblclick');
          /**
           * @see
           * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.drag
           */

          this.circleDrag = this._eventManager.getLazyEmitter('drag');
          /**
           * @see
           * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dragend
           */

          this.circleDragend = this._eventManager.getLazyEmitter('dragend');
          /**
           * @see
           * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dragstart
           */

          this.circleDragstart = this._eventManager.getLazyEmitter('dragstart');
          /**
           * @see
           * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mousedown
           */

          this.circleMousedown = this._eventManager.getLazyEmitter('mousedown');
          /**
           * @see
           * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mousemove
           */

          this.circleMousemove = this._eventManager.getLazyEmitter('mousemove');
          /**
           * @see
           * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseout
           */

          this.circleMouseout = this._eventManager.getLazyEmitter('mouseout');
          /**
           * @see
           * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseover
           */

          this.circleMouseover = this._eventManager.getLazyEmitter('mouseover');
          /**
           * @see
           * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseup
           */

          this.circleMouseup = this._eventManager.getLazyEmitter('mouseup');
          /**
           * @see
           * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.radius_changed
           */

          this.radiusChanged = this._eventManager.getLazyEmitter('radius_changed');
          /**
           * @see
           * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.rightclick
           */

          this.circleRightclick = this._eventManager.getLazyEmitter('rightclick');
        }

        _createClass(MapCircle, [{
          key: "options",
          set: function set(options) {
            this._options.next(options || {});
          }
        }, {
          key: "center",
          set: function set(center) {
            this._center.next(center);
          }
        }, {
          key: "radius",
          set: function set(radius) {
            this._radius.next(radius);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            if (this._map._isBrowser) {
              this._combineOptions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (options) {
                // Create the object outside the zone so its events don't trigger change detection.
                // We'll bring it back in inside the `MapEventManager` only for the events that the
                // user has subscribed to.
                _this4._ngZone.runOutsideAngular(function () {
                  _this4.circle = new google.maps.Circle(options);
                });

                _this4._assertInitialized();

                _this4.circle.setMap(_this4._map.googleMap);

                _this4._eventManager.setTarget(_this4.circle);
              });

              this._watchForOptionsChanges();

              this._watchForCenterChanges();

              this._watchForRadiusChanges();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._eventManager.destroy();

            this._destroyed.next();

            this._destroyed.complete();

            if (this.circle) {
              this.circle.setMap(null);
            }
          }
          /**
           * @see
           * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getBounds
           */

        }, {
          key: "getBounds",
          value: function getBounds() {
            this._assertInitialized();

            return this.circle.getBounds();
          }
          /**
           * @see
           * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getCenter
           */

        }, {
          key: "getCenter",
          value: function getCenter() {
            this._assertInitialized();

            return this.circle.getCenter();
          }
          /**
           * @see
           * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getDraggable
           */

        }, {
          key: "getDraggable",
          value: function getDraggable() {
            this._assertInitialized();

            return this.circle.getDraggable();
          }
          /**
           * @see
           * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getEditable
           */

        }, {
          key: "getEditable",
          value: function getEditable() {
            this._assertInitialized();

            return this.circle.getEditable();
          }
          /**
           * @see
           * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getRadius
           */

        }, {
          key: "getRadius",
          value: function getRadius() {
            this._assertInitialized();

            return this.circle.getRadius();
          }
          /**
           * @see
           * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getVisible
           */

        }, {
          key: "getVisible",
          value: function getVisible() {
            this._assertInitialized();

            return this.circle.getVisible();
          }
        }, {
          key: "_combineOptions",
          value: function _combineOptions() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._options, this._center, this._radius]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 3),
                  options = _ref2[0],
                  center = _ref2[1],
                  radius = _ref2[2];

              var combinedOptions = Object.assign(Object.assign({}, options), {
                center: center || options.center,
                radius: radius !== undefined ? radius : options.radius
              });
              return combinedOptions;
            }));
          }
        }, {
          key: "_watchForOptionsChanges",
          value: function _watchForOptionsChanges() {
            var _this5 = this;

            this._options.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(function (options) {
              _this5._assertInitialized();

              _this5.circle.setOptions(options);
            });
          }
        }, {
          key: "_watchForCenterChanges",
          value: function _watchForCenterChanges() {
            var _this6 = this;

            this._center.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(function (center) {
              if (center) {
                _this6._assertInitialized();

                _this6.circle.setCenter(center);
              }
            });
          }
        }, {
          key: "_watchForRadiusChanges",
          value: function _watchForRadiusChanges() {
            var _this7 = this;

            this._radius.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(function (radius) {
              if (radius !== undefined) {
                _this7._assertInitialized();

                _this7.circle.setRadius(radius);
              }
            });
          }
        }, {
          key: "_assertInitialized",
          value: function _assertInitialized() {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!this._map.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
              }

              if (!this.circle) {
                throw Error('Cannot interact with a Google Map Circle before it has been ' + 'initialized. Please wait for the Circle to load before trying to interact with it.');
              }
            }
          }
        }]);

        return MapCircle;
      }();

      MapCircle.ɵfac = function MapCircle_Factory(t) {
        return new (t || MapCircle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      MapCircle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MapCircle,
        selectors: [["map-circle"]],
        inputs: {
          options: "options",
          center: "center",
          radius: "radius"
        },
        outputs: {
          centerChanged: "centerChanged",
          circleClick: "circleClick",
          circleDblclick: "circleDblclick",
          circleDrag: "circleDrag",
          circleDragend: "circleDragend",
          circleDragstart: "circleDragstart",
          circleMousedown: "circleMousedown",
          circleMousemove: "circleMousemove",
          circleMouseout: "circleMouseout",
          circleMouseover: "circleMouseover",
          circleMouseup: "circleMouseup",
          radiusChanged: "radiusChanged",
          circleRightclick: "circleRightclick"
        },
        exportAs: ["mapCircle"]
      });

      MapCircle.ctorParameters = function () {
        return [{
          type: GoogleMap
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      MapCircle.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        center: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        radius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        centerChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        circleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        circleDblclick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        circleDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        circleDragend: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        circleDragstart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        circleMousedown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        circleMousemove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        circleMouseout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        circleMouseover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        circleMouseup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        radiusChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        circleRightclick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapCircle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'map-circle',
            exportAs: 'mapCircle'
          }]
        }], function () {
          return [{
            type: GoogleMap
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          centerChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          circleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          circleDblclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          circleDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          circleDragend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          circleDragstart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          circleMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          circleMousemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          circleMouseout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          circleMouseover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          circleMouseup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          radiusChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          circleRightclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          center: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Angular component that renders a Google Maps Directions Renderer via the Google Maps
       * JavaScript API.
       *
       * See developers.google.com/maps/documentation/javascript/reference/directions#DirectionsRenderer
       */


      var MapDirectionsRenderer = /*#__PURE__*/function () {
        function MapDirectionsRenderer(_googleMap, _ngZone) {
          _classCallCheck(this, MapDirectionsRenderer);

          this._googleMap = _googleMap;
          this._ngZone = _ngZone;
          this._eventManager = new MapEventManager(this._ngZone);
          /**
           * See developers.google.com/maps/documentation/javascript/reference/directions
           * #DirectionsRenderer.directions_changed
           */

          this.directionsChanged = this._eventManager.getLazyEmitter('directions_changed');
        }
        /**
         * See developers.google.com/maps/documentation/javascript/reference/directions
         * #DirectionsRendererOptions.directions
         */


        _createClass(MapDirectionsRenderer, [{
          key: "directions",
          set: function set(directions) {
            this._directions = directions;
          }
          /**
           * See developers.google.com/maps/documentation/javascript/reference/directions
           * #DirectionsRendererOptions
           */

        }, {
          key: "options",
          set: function set(options) {
            this._options = options;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            if (this._googleMap._isBrowser) {
              // Create the object outside the zone so its events don't trigger change detection.
              // We'll bring it back in inside the `MapEventManager` only for the events that the
              // user has subscribed to.
              this._ngZone.runOutsideAngular(function () {
                _this8.directionsRenderer = new google.maps.DirectionsRenderer(_this8._combineOptions());
              });

              this._assertInitialized();

              this.directionsRenderer.setMap(this._googleMap.googleMap);

              this._eventManager.setTarget(this.directionsRenderer);
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (this.directionsRenderer) {
              if (changes['options']) {
                this.directionsRenderer.setOptions(this._combineOptions());
              }

              if (changes['directions'] && this._directions !== undefined) {
                this.directionsRenderer.setDirections(this._directions);
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._eventManager.destroy();

            if (this.directionsRenderer) {
              this.directionsRenderer.setMap(null);
            }
          }
          /**
           * See developers.google.com/maps/documentation/javascript/reference/directions
           * #DirectionsRenderer.getDirections
           */

        }, {
          key: "getDirections",
          value: function getDirections() {
            this._assertInitialized();

            return this.directionsRenderer.getDirections();
          }
          /**
           * See developers.google.com/maps/documentation/javascript/reference/directions
           * #DirectionsRenderer.getPanel
           */

        }, {
          key: "getPanel",
          value: function getPanel() {
            this._assertInitialized();

            return this.directionsRenderer.getPanel();
          }
          /**
           * See developers.google.com/maps/documentation/javascript/reference/directions
           * #DirectionsRenderer.getRouteIndex
           */

        }, {
          key: "getRouteIndex",
          value: function getRouteIndex() {
            this._assertInitialized();

            return this.directionsRenderer.getRouteIndex();
          }
        }, {
          key: "_combineOptions",
          value: function _combineOptions() {
            var options = this._options || {};
            return Object.assign(Object.assign({}, options), {
              directions: this._directions || options.directions,
              map: this._googleMap.googleMap
            });
          }
        }, {
          key: "_assertInitialized",
          value: function _assertInitialized() {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!this._googleMap.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
              }

              if (!this.directionsRenderer) {
                throw Error('Cannot interact with a Google Map Directions Renderer before it has been ' + 'initialized. Please wait for the Directions Renderer to load before trying ' + 'to interact with it.');
              }
            }
          }
        }]);

        return MapDirectionsRenderer;
      }();

      MapDirectionsRenderer.ɵfac = function MapDirectionsRenderer_Factory(t) {
        return new (t || MapDirectionsRenderer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      MapDirectionsRenderer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MapDirectionsRenderer,
        selectors: [["map-directions-renderer"]],
        inputs: {
          directions: "directions",
          options: "options"
        },
        outputs: {
          directionsChanged: "directionsChanged"
        },
        exportAs: ["mapDirectionsRenderer"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      MapDirectionsRenderer.ctorParameters = function () {
        return [{
          type: GoogleMap
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      MapDirectionsRenderer.propDecorators = {
        directions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        directionsChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapDirectionsRenderer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'map-directions-renderer',
            exportAs: 'mapDirectionsRenderer'
          }]
        }], function () {
          return [{
            type: GoogleMap
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          directionsChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          directions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Angular component that renders a Google Maps Ground Overlay via the Google Maps JavaScript API.
       *
       * See developers.google.com/maps/documentation/javascript/reference/image-overlay#GroundOverlay
       */


      var MapGroundOverlay = /*#__PURE__*/function () {
        function MapGroundOverlay(_map, _ngZone) {
          _classCallCheck(this, MapGroundOverlay);

          this._map = _map;
          this._ngZone = _ngZone;
          this._eventManager = new MapEventManager(this._ngZone);
          this._opacity = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](1);
          this._url = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
          this._bounds = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** Whether the overlay is clickable */

          this.clickable = false;
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/image-overlay#GroundOverlay.click
           */

          this.mapClick = this._eventManager.getLazyEmitter('click');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/image-overlay
           * #GroundOverlay.dblclick
           */

          this.mapDblclick = this._eventManager.getLazyEmitter('dblclick');
        }
        /** URL of the image that will be shown in the overlay. */


        _createClass(MapGroundOverlay, [{
          key: "url",
          set: function set(url) {
            this._url.next(url);
          }
          /** Bounds for the overlay. */

        }, {
          key: "bounds",
          get: function get() {
            return this._bounds.value;
          },
          set: function set(bounds) {
            this._bounds.next(bounds);
          }
          /** Opacity of the overlay. */

        }, {
          key: "opacity",
          set: function set(opacity) {
            this._opacity.next(opacity);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            if (this._map._isBrowser) {
              // The ground overlay setup is slightly different from the other Google Maps objects in that
              // we have to recreate the `GroundOverlay` object whenever the bounds change, because
              // Google Maps doesn't provide an API to update the bounds of an existing overlay.
              this._bounds.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(function (bounds) {
                if (_this9.groundOverlay) {
                  _this9.groundOverlay.setMap(null);

                  _this9.groundOverlay = undefined;
                } // Create the object outside the zone so its events don't trigger change detection.
                // We'll bring it back in inside the `MapEventManager` only for the events that the
                // user has subscribed to.


                if (bounds) {
                  _this9._ngZone.runOutsideAngular(function () {
                    _this9.groundOverlay = new google.maps.GroundOverlay(_this9._url.getValue(), bounds, {
                      clickable: _this9.clickable,
                      opacity: _this9._opacity.value
                    });
                  });

                  _this9._assertInitialized();

                  _this9.groundOverlay.setMap(_this9._map.googleMap);

                  _this9._eventManager.setTarget(_this9.groundOverlay);
                }
              });

              this._watchForOpacityChanges();

              this._watchForUrlChanges();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._eventManager.destroy();

            this._destroyed.next();

            this._destroyed.complete();

            if (this.groundOverlay) {
              this.groundOverlay.setMap(null);
            }
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/image-overlay
           * #GroundOverlay.getBounds
           */

        }, {
          key: "getBounds",
          value: function getBounds() {
            this._assertInitialized();

            return this.groundOverlay.getBounds();
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/image-overlay
           * #GroundOverlay.getOpacity
           */

        }, {
          key: "getOpacity",
          value: function getOpacity() {
            this._assertInitialized();

            return this.groundOverlay.getOpacity();
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/image-overlay
           * #GroundOverlay.getUrl
           */

        }, {
          key: "getUrl",
          value: function getUrl() {
            this._assertInitialized();

            return this.groundOverlay.getUrl();
          }
        }, {
          key: "_watchForOpacityChanges",
          value: function _watchForOpacityChanges() {
            var _this10 = this;

            this._opacity.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(function (opacity) {
              if (opacity != null) {
                _this10._assertInitialized();

                _this10.groundOverlay.setOpacity(opacity);
              }
            });
          }
        }, {
          key: "_watchForUrlChanges",
          value: function _watchForUrlChanges() {
            var _this11 = this;

            this._url.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(function (url) {
              _this11._assertInitialized();

              var overlay = _this11.groundOverlay;
              overlay.set('url', url); // Google Maps only redraws the overlay if we re-set the map.

              overlay.setMap(null);
              overlay.setMap(_this11._map.googleMap);
            });
          }
        }, {
          key: "_assertInitialized",
          value: function _assertInitialized() {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!this._map.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
              }

              if (!this.groundOverlay) {
                throw Error('Cannot interact with a Google Map GroundOverlay before it has been initialized. ' + 'Please wait for the GroundOverlay to load before trying to interact with it.');
              }
            }
          }
        }]);

        return MapGroundOverlay;
      }();

      MapGroundOverlay.ɵfac = function MapGroundOverlay_Factory(t) {
        return new (t || MapGroundOverlay)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      MapGroundOverlay.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MapGroundOverlay,
        selectors: [["map-ground-overlay"]],
        inputs: {
          clickable: "clickable",
          url: "url",
          bounds: "bounds",
          opacity: "opacity"
        },
        outputs: {
          mapClick: "mapClick",
          mapDblclick: "mapDblclick"
        },
        exportAs: ["mapGroundOverlay"]
      });

      MapGroundOverlay.ctorParameters = function () {
        return [{
          type: GoogleMap
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      MapGroundOverlay.propDecorators = {
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bounds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        opacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        mapClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mapDblclick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapGroundOverlay, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'map-ground-overlay',
            exportAs: 'mapGroundOverlay'
          }]
        }], function () {
          return [{
            type: GoogleMap
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          clickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          mapClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mapDblclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          bounds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          opacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Angular component that renders a Google Maps info window via the Google Maps JavaScript API.
       *
       * See developers.google.com/maps/documentation/javascript/reference/info-window
       */


      var MapInfoWindow = /*#__PURE__*/function () {
        function MapInfoWindow(_googleMap, _elementRef, _ngZone) {
          _classCallCheck(this, MapInfoWindow);

          this._googleMap = _googleMap;
          this._elementRef = _elementRef;
          this._ngZone = _ngZone;
          this._eventManager = new MapEventManager(this._ngZone);
          this._options = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
          this._position = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
          this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.closeclick
           */

          this.closeclick = this._eventManager.getLazyEmitter('closeclick');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/info-window
           * #InfoWindow.content_changed
           */

          this.contentChanged = this._eventManager.getLazyEmitter('content_changed');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.domready
           */

          this.domready = this._eventManager.getLazyEmitter('domready');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/info-window
           * #InfoWindow.position_changed
           */

          this.positionChanged = this._eventManager.getLazyEmitter('position_changed');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/info-window
           * #InfoWindow.zindex_changed
           */

          this.zindexChanged = this._eventManager.getLazyEmitter('zindex_changed');
        }

        _createClass(MapInfoWindow, [{
          key: "options",
          set: function set(options) {
            this._options.next(options || {});
          }
        }, {
          key: "position",
          set: function set(position) {
            this._position.next(position);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            if (this._googleMap._isBrowser) {
              var combinedOptionsChanges = this._combineOptions();

              combinedOptionsChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (options) {
                // Create the object outside the zone so its events don't trigger change detection.
                // We'll bring it back in inside the `MapEventManager` only for the events that the
                // user has subscribed to.
                _this12._ngZone.runOutsideAngular(function () {
                  _this12.infoWindow = new google.maps.InfoWindow(options);
                });

                _this12._eventManager.setTarget(_this12.infoWindow);
              });

              this._watchForOptionsChanges();

              this._watchForPositionChanges();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._eventManager.destroy();

            this._destroy.next();

            this._destroy.complete(); // If no info window has been created on the server, we do not try closing it.
            // On the server, an info window cannot be created and this would cause errors.


            if (this.infoWindow) {
              this.close();
            }
          }
          /**
           * See developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.close
           */

        }, {
          key: "close",
          value: function close() {
            this._assertInitialized();

            this.infoWindow.close();
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.getContent
           */

        }, {
          key: "getContent",
          value: function getContent() {
            this._assertInitialized();

            return this.infoWindow.getContent();
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/info-window
           * #InfoWindow.getPosition
           */

        }, {
          key: "getPosition",
          value: function getPosition() {
            this._assertInitialized();

            return this.infoWindow.getPosition();
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.getZIndex
           */

        }, {
          key: "getZIndex",
          value: function getZIndex() {
            this._assertInitialized();

            return this.infoWindow.getZIndex();
          }
          /**
           * Opens the MapInfoWindow using the provided anchor. If the anchor is not set,
           * then the position property of the options input is used instead.
           */

        }, {
          key: "open",
          value: function open(anchor) {
            this._assertInitialized();

            var anchorObject = anchor ? anchor.getAnchor() : undefined; // Prevent the info window from initializing when trying to reopen on the same anchor.
            // Note that when the window is opened for the first time, the anchor will always be
            // undefined. If that's the case, we have to allow it to open in order to handle the
            // case where the window doesn't have an anchor, but is placed at a particular position.

            if (this.infoWindow.get('anchor') !== anchorObject || !anchorObject) {
              this._elementRef.nativeElement.style.display = '';
              this.infoWindow.open(this._googleMap.googleMap, anchorObject);
            }
          }
        }, {
          key: "_combineOptions",
          value: function _combineOptions() {
            var _this13 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._options, this._position]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  options = _ref4[0],
                  position = _ref4[1];

              var combinedOptions = Object.assign(Object.assign({}, options), {
                position: position || options.position,
                content: _this13._elementRef.nativeElement
              });
              return combinedOptions;
            }));
          }
        }, {
          key: "_watchForOptionsChanges",
          value: function _watchForOptionsChanges() {
            var _this14 = this;

            this._options.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy)).subscribe(function (options) {
              _this14._assertInitialized();

              _this14.infoWindow.setOptions(options);
            });
          }
        }, {
          key: "_watchForPositionChanges",
          value: function _watchForPositionChanges() {
            var _this15 = this;

            this._position.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy)).subscribe(function (position) {
              if (position) {
                _this15._assertInitialized();

                _this15.infoWindow.setPosition(position);
              }
            });
          }
        }, {
          key: "_assertInitialized",
          value: function _assertInitialized() {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!this._googleMap.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
              }

              if (!this.infoWindow) {
                throw Error('Cannot interact with a Google Map Info Window before it has been ' + 'initialized. Please wait for the Info Window to load before trying to interact with ' + 'it.');
              }
            }
          }
        }]);

        return MapInfoWindow;
      }();

      MapInfoWindow.ɵfac = function MapInfoWindow_Factory(t) {
        return new (t || MapInfoWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      MapInfoWindow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MapInfoWindow,
        selectors: [["map-info-window"]],
        hostAttrs: [2, "display", "none"],
        inputs: {
          options: "options",
          position: "position"
        },
        outputs: {
          closeclick: "closeclick",
          contentChanged: "contentChanged",
          domready: "domready",
          positionChanged: "positionChanged",
          zindexChanged: "zindexChanged"
        },
        exportAs: ["mapInfoWindow"]
      });

      MapInfoWindow.ctorParameters = function () {
        return [{
          type: GoogleMap
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      MapInfoWindow.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        closeclick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        contentChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        domready: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        positionChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        zindexChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapInfoWindow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'map-info-window',
            exportAs: 'mapInfoWindow',
            host: {
              'style': 'display: none'
            }
          }]
        }], function () {
          return [{
            type: GoogleMap
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          closeclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          contentChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          domready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          positionChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          zindexChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Angular component that renders a Google Maps KML Layer via the Google Maps JavaScript API.
       *
       * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer
       */


      var MapKmlLayer = /*#__PURE__*/function () {
        function MapKmlLayer(_map, _ngZone) {
          _classCallCheck(this, MapKmlLayer);

          this._map = _map;
          this._ngZone = _ngZone;
          this._eventManager = new MapEventManager(this._ngZone);
          this._options = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
          this._url = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
           * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.click
           */

          this.kmlClick = this._eventManager.getLazyEmitter('click');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/kml
           * #KmlLayer.defaultviewport_changed
           */

          this.defaultviewportChanged = this._eventManager.getLazyEmitter('defaultviewport_changed');
          /**
           * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.status_changed
           */

          this.statusChanged = this._eventManager.getLazyEmitter('status_changed');
        }

        _createClass(MapKmlLayer, [{
          key: "options",
          set: function set(options) {
            this._options.next(options || {});
          }
        }, {
          key: "url",
          set: function set(url) {
            this._url.next(url);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            if (this._map._isBrowser) {
              this._combineOptions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (options) {
                // Create the object outside the zone so its events don't trigger change detection.
                // We'll bring it back in inside the `MapEventManager` only for the events that the
                // user has subscribed to.
                _this16._ngZone.runOutsideAngular(function () {
                  return _this16.kmlLayer = new google.maps.KmlLayer(options);
                });

                _this16._assertInitialized();

                _this16.kmlLayer.setMap(_this16._map.googleMap);

                _this16._eventManager.setTarget(_this16.kmlLayer);
              });

              this._watchForOptionsChanges();

              this._watchForUrlChanges();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._eventManager.destroy();

            this._destroyed.next();

            this._destroyed.complete();

            if (this.kmlLayer) {
              this.kmlLayer.setMap(null);
            }
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getDefaultViewport
           */

        }, {
          key: "getDefaultViewport",
          value: function getDefaultViewport() {
            this._assertInitialized();

            return this.kmlLayer.getDefaultViewport();
          }
          /**
           * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getMetadata
           */

        }, {
          key: "getMetadata",
          value: function getMetadata() {
            this._assertInitialized();

            return this.kmlLayer.getMetadata();
          }
          /**
           * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getStatus
           */

        }, {
          key: "getStatus",
          value: function getStatus() {
            this._assertInitialized();

            return this.kmlLayer.getStatus();
          }
          /**
           * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getUrl
           */

        }, {
          key: "getUrl",
          value: function getUrl() {
            this._assertInitialized();

            return this.kmlLayer.getUrl();
          }
          /**
           * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getZIndex
           */

        }, {
          key: "getZIndex",
          value: function getZIndex() {
            this._assertInitialized();

            return this.kmlLayer.getZIndex();
          }
        }, {
          key: "_combineOptions",
          value: function _combineOptions() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._options, this._url]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                  options = _ref6[0],
                  url = _ref6[1];

              var combinedOptions = Object.assign(Object.assign({}, options), {
                url: url || options.url
              });
              return combinedOptions;
            }));
          }
        }, {
          key: "_watchForOptionsChanges",
          value: function _watchForOptionsChanges() {
            var _this17 = this;

            this._options.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(function (options) {
              if (_this17.kmlLayer) {
                _this17._assertInitialized();

                _this17.kmlLayer.setOptions(options);
              }
            });
          }
        }, {
          key: "_watchForUrlChanges",
          value: function _watchForUrlChanges() {
            var _this18 = this;

            this._url.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(function (url) {
              if (url && _this18.kmlLayer) {
                _this18._assertInitialized();

                _this18.kmlLayer.setUrl(url);
              }
            });
          }
        }, {
          key: "_assertInitialized",
          value: function _assertInitialized() {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!this._map.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
              }

              if (!this.kmlLayer) {
                throw Error('Cannot interact with a Google Map KmlLayer before it has been ' + 'initialized. Please wait for the KmlLayer to load before trying to interact with it.');
              }
            }
          }
        }]);

        return MapKmlLayer;
      }();

      MapKmlLayer.ɵfac = function MapKmlLayer_Factory(t) {
        return new (t || MapKmlLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      MapKmlLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MapKmlLayer,
        selectors: [["map-kml-layer"]],
        inputs: {
          options: "options",
          url: "url"
        },
        outputs: {
          kmlClick: "kmlClick",
          defaultviewportChanged: "defaultviewportChanged",
          statusChanged: "statusChanged"
        },
        exportAs: ["mapKmlLayer"]
      });

      MapKmlLayer.ctorParameters = function () {
        return [{
          type: GoogleMap
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      MapKmlLayer.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        kmlClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        defaultviewportChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        statusChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapKmlLayer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'map-kml-layer',
            exportAs: 'mapKmlLayer'
          }]
        }], function () {
          return [{
            type: GoogleMap
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          kmlClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          defaultviewportChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          statusChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Default options for the Google Maps marker component. Displays a marker
       * at the Googleplex.
       */


      var DEFAULT_MARKER_OPTIONS = {
        position: {
          lat: 37.421995,
          lng: -122.084092
        }
      };
      /**
       * Angular component that renders a Google Maps marker via the Google Maps JavaScript API.
       *
       * See developers.google.com/maps/documentation/javascript/reference/marker
       */

      var MapMarker = /*#__PURE__*/function () {
        function MapMarker(_googleMap, _ngZone) {
          _classCallCheck(this, MapMarker);

          this._googleMap = _googleMap;
          this._ngZone = _ngZone;
          this._eventManager = new MapEventManager(this._ngZone);
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.animation_changed
           */

          this.animationChanged = this._eventManager.getLazyEmitter('animation_changed');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.click
           */

          this.mapClick = this._eventManager.getLazyEmitter('click');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.clickable_changed
           */

          this.clickableChanged = this._eventManager.getLazyEmitter('clickable_changed');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.cursor_changed
           */

          this.cursorChanged = this._eventManager.getLazyEmitter('cursor_changed');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dblclick
           */

          this.mapDblclick = this._eventManager.getLazyEmitter('dblclick');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.drag
           */

          this.mapDrag = this._eventManager.getLazyEmitter('drag');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dragend
           */

          this.mapDragend = this._eventManager.getLazyEmitter('dragend');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.draggable_changed
           */

          this.draggableChanged = this._eventManager.getLazyEmitter('draggable_changed');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dragstart
           */

          this.mapDragstart = this._eventManager.getLazyEmitter('dragstart');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.flat_changed
           */

          this.flatChanged = this._eventManager.getLazyEmitter('flat_changed');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.icon_changed
           */

          this.iconChanged = this._eventManager.getLazyEmitter('icon_changed');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mousedown
           */

          this.mapMousedown = this._eventManager.getLazyEmitter('mousedown');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseout
           */

          this.mapMouseout = this._eventManager.getLazyEmitter('mouseout');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseover
           */

          this.mapMouseover = this._eventManager.getLazyEmitter('mouseover');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseup
           */

          this.mapMouseup = this._eventManager.getLazyEmitter('mouseup');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.position_changed
           */

          this.positionChanged = this._eventManager.getLazyEmitter('position_changed');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.rightclick
           */

          this.mapRightclick = this._eventManager.getLazyEmitter('rightclick');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.shape_changed
           */

          this.shapeChanged = this._eventManager.getLazyEmitter('shape_changed');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.title_changed
           */

          this.titleChanged = this._eventManager.getLazyEmitter('title_changed');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.visible_changed
           */

          this.visibleChanged = this._eventManager.getLazyEmitter('visible_changed');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.zindex_changed
           */

          this.zindexChanged = this._eventManager.getLazyEmitter('zindex_changed');
        }
        /**
         * Title of the marker.
         * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.title
         */


        _createClass(MapMarker, [{
          key: "title",
          set: function set(title) {
            this._title = title;
          }
          /**
           * Position of the marker. See:
           * developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.position
           */

        }, {
          key: "position",
          set: function set(position) {
            this._position = position;
          }
          /**
           * Label for the marker.
           * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.label
           */

        }, {
          key: "label",
          set: function set(label) {
            this._label = label;
          }
          /**
           * Whether the marker is clickable. See:
           * developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.clickable
           */

        }, {
          key: "clickable",
          set: function set(clickable) {
            this._clickable = clickable;
          }
          /**
           * Options used to configure the marker.
           * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions
           */

        }, {
          key: "options",
          set: function set(options) {
            this._options = options;
          }
          /**
           * Icon to be used for the marker.
           * See: https://developers.google.com/maps/documentation/javascript/reference/marker#Icon
           */

        }, {
          key: "icon",
          set: function set(icon) {
            this._icon = icon;
          }
          /**
           * Whether the marker is visible.
           * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.visible
           */

        }, {
          key: "visible",
          set: function set(value) {
            this._visible = value;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            if (this._googleMap._isBrowser) {
              // Create the object outside the zone so its events don't trigger change detection.
              // We'll bring it back in inside the `MapEventManager` only for the events that the
              // user has subscribed to.
              this._ngZone.runOutsideAngular(function () {
                _this19.marker = new google.maps.Marker(_this19._combineOptions());
              });

              this._assertInitialized();

              this.marker.setMap(this._googleMap.googleMap);

              this._eventManager.setTarget(this.marker);
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var marker = this.marker,
                _title = this._title,
                _position = this._position,
                _label = this._label,
                _clickable = this._clickable,
                _icon = this._icon,
                _visible = this._visible;

            if (marker) {
              if (changes['options']) {
                marker.setOptions(this._combineOptions());
              }

              if (changes['title'] && _title !== undefined) {
                marker.setTitle(_title);
              }

              if (changes['position'] && _position) {
                marker.setPosition(_position);
              }

              if (changes['label'] && _label !== undefined) {
                marker.setLabel(_label);
              }

              if (changes['clickable'] && _clickable !== undefined) {
                marker.setClickable(_clickable);
              }

              if (changes['icon'] && _icon) {
                marker.setIcon(_icon);
              }

              if (changes['visible'] && _visible !== undefined) {
                marker.setVisible(_visible);
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._eventManager.destroy();

            if (this.marker) {
              this.marker.setMap(null);
            }
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getAnimation
           */

        }, {
          key: "getAnimation",
          value: function getAnimation() {
            this._assertInitialized();

            return this.marker.getAnimation() || null;
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getClickable
           */

        }, {
          key: "getClickable",
          value: function getClickable() {
            this._assertInitialized();

            return this.marker.getClickable();
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getCursor
           */

        }, {
          key: "getCursor",
          value: function getCursor() {
            this._assertInitialized();

            return this.marker.getCursor() || null;
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getDraggable
           */

        }, {
          key: "getDraggable",
          value: function getDraggable() {
            this._assertInitialized();

            return !!this.marker.getDraggable();
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getIcon
           */

        }, {
          key: "getIcon",
          value: function getIcon() {
            this._assertInitialized();

            return this.marker.getIcon() || null;
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getLabel
           */

        }, {
          key: "getLabel",
          value: function getLabel() {
            this._assertInitialized();

            return this.marker.getLabel() || null;
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getOpacity
           */

        }, {
          key: "getOpacity",
          value: function getOpacity() {
            this._assertInitialized();

            return this.marker.getOpacity() || null;
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getPosition
           */

        }, {
          key: "getPosition",
          value: function getPosition() {
            this._assertInitialized();

            return this.marker.getPosition() || null;
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getShape
           */

        }, {
          key: "getShape",
          value: function getShape() {
            this._assertInitialized();

            return this.marker.getShape() || null;
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getTitle
           */

        }, {
          key: "getTitle",
          value: function getTitle() {
            this._assertInitialized();

            return this.marker.getTitle() || null;
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getVisible
           */

        }, {
          key: "getVisible",
          value: function getVisible() {
            this._assertInitialized();

            return this.marker.getVisible();
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getZIndex
           */

        }, {
          key: "getZIndex",
          value: function getZIndex() {
            this._assertInitialized();

            return this.marker.getZIndex() || null;
          }
          /** Gets the anchor point that can be used to attach other Google Maps objects. */

        }, {
          key: "getAnchor",
          value: function getAnchor() {
            this._assertInitialized();

            return this.marker;
          }
          /** Creates a combined options object using the passed-in options and the individual inputs. */

        }, {
          key: "_combineOptions",
          value: function _combineOptions() {
            var _a, _b;

            var options = this._options || DEFAULT_MARKER_OPTIONS;
            return Object.assign(Object.assign({}, options), {
              title: this._title || options.title,
              position: this._position || options.position,
              label: this._label || options.label,
              clickable: (_a = this._clickable) !== null && _a !== void 0 ? _a : options.clickable,
              map: this._googleMap.googleMap,
              icon: this._icon || options.icon,
              visible: (_b = this._visible) !== null && _b !== void 0 ? _b : options.visible
            });
          }
        }, {
          key: "_assertInitialized",
          value: function _assertInitialized() {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!this._googleMap.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
              }

              if (!this.marker) {
                throw Error('Cannot interact with a Google Map Marker before it has been ' + 'initialized. Please wait for the Marker to load before trying to interact with it.');
              }
            }
          }
        }]);

        return MapMarker;
      }();

      MapMarker.ɵfac = function MapMarker_Factory(t) {
        return new (t || MapMarker)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      MapMarker.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MapMarker,
        selectors: [["map-marker"]],
        inputs: {
          title: "title",
          position: "position",
          label: "label",
          clickable: "clickable",
          options: "options",
          icon: "icon",
          visible: "visible"
        },
        outputs: {
          animationChanged: "animationChanged",
          mapClick: "mapClick",
          clickableChanged: "clickableChanged",
          cursorChanged: "cursorChanged",
          mapDblclick: "mapDblclick",
          mapDrag: "mapDrag",
          mapDragend: "mapDragend",
          draggableChanged: "draggableChanged",
          mapDragstart: "mapDragstart",
          flatChanged: "flatChanged",
          iconChanged: "iconChanged",
          mapMousedown: "mapMousedown",
          mapMouseout: "mapMouseout",
          mapMouseover: "mapMouseover",
          mapMouseup: "mapMouseup",
          positionChanged: "positionChanged",
          mapRightclick: "mapRightclick",
          shapeChanged: "shapeChanged",
          titleChanged: "titleChanged",
          visibleChanged: "visibleChanged",
          zindexChanged: "zindexChanged"
        },
        exportAs: ["mapMarker"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      MapMarker.ctorParameters = function () {
        return [{
          type: GoogleMap
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      MapMarker.propDecorators = {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clickable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        animationChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mapClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        clickableChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cursorChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mapDblclick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mapDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mapDragend: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        draggableChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mapDragstart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        flatChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        iconChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mapMousedown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mapMouseout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mapMouseover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mapMouseup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        positionChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        mapRightclick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        shapeChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        titleChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        visibleChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        zindexChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapMarker, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'map-marker',
            exportAs: 'mapMarker'
          }]
        }], function () {
          return [{
            type: GoogleMap
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          animationChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mapClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          clickableChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          cursorChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mapDblclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mapDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mapDragend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          draggableChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mapDragstart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          flatChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          iconChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mapMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mapMouseout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mapMouseover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mapMouseup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          positionChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          mapRightclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          shapeChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          titleChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          visibleChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          zindexChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          clickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Default options for a clusterer. */


      var DEFAULT_CLUSTERER_OPTIONS = {};
      /**
       * Angular component for implementing a Google Maps Marker Clusterer.
       *
       * See https://developers.google.com/maps/documentation/javascript/marker-clustering
       */

      var MapMarkerClusterer = /*#__PURE__*/function () {
        function MapMarkerClusterer(_googleMap, _ngZone) {
          _classCallCheck(this, MapMarkerClusterer);

          this._googleMap = _googleMap;
          this._ngZone = _ngZone;
          this._currentMarkers = new Set();
          this._eventManager = new MapEventManager(this._ngZone);
          this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();

          this.ariaLabelFn = function () {
            return '';
          };
          /**
           * See
           * googlemaps.github.io/v3-utility-library/modules/
           * _google_markerclustererplus.html#clusteringbegin
           */


          this.clusteringbegin = this._eventManager.getLazyEmitter('clusteringbegin');
          /**
           * See
           * googlemaps.github.io/v3-utility-library/modules/_google_markerclustererplus.html#clusteringend
           */

          this.clusteringend = this._eventManager.getLazyEmitter('clusteringend');
          /** Emits when a cluster has been clicked. */

          this.clusterClick = this._eventManager.getLazyEmitter('click');
          this._canInitialize = this._googleMap._isBrowser;
        }

        _createClass(MapMarkerClusterer, [{
          key: "averageCenter",
          set: function set(averageCenter) {
            this._averageCenter = averageCenter;
          }
        }, {
          key: "batchSizeIE",
          set: function set(batchSizeIE) {
            this._batchSizeIE = batchSizeIE;
          }
        }, {
          key: "calculator",
          set: function set(calculator) {
            this._calculator = calculator;
          }
        }, {
          key: "clusterClass",
          set: function set(clusterClass) {
            this._clusterClass = clusterClass;
          }
        }, {
          key: "enableRetinaIcons",
          set: function set(enableRetinaIcons) {
            this._enableRetinaIcons = enableRetinaIcons;
          }
        }, {
          key: "gridSize",
          set: function set(gridSize) {
            this._gridSize = gridSize;
          }
        }, {
          key: "ignoreHidden",
          set: function set(ignoreHidden) {
            this._ignoreHidden = ignoreHidden;
          }
        }, {
          key: "imageExtension",
          set: function set(imageExtension) {
            this._imageExtension = imageExtension;
          }
        }, {
          key: "imagePath",
          set: function set(imagePath) {
            this._imagePath = imagePath;
          }
        }, {
          key: "imageSizes",
          set: function set(imageSizes) {
            this._imageSizes = imageSizes;
          }
        }, {
          key: "maxZoom",
          set: function set(maxZoom) {
            this._maxZoom = maxZoom;
          }
        }, {
          key: "minimumClusterSize",
          set: function set(minimumClusterSize) {
            this._minimumClusterSize = minimumClusterSize;
          }
        }, {
          key: "styles",
          set: function set(styles) {
            this._styles = styles;
          }
        }, {
          key: "title",
          set: function set(title) {
            this._title = title;
          }
        }, {
          key: "zIndex",
          set: function set(zIndex) {
            this._zIndex = zIndex;
          }
        }, {
          key: "zoomOnClick",
          set: function set(zoomOnClick) {
            this._zoomOnClick = zoomOnClick;
          }
        }, {
          key: "options",
          set: function set(options) {
            this._options = options;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            if (this._canInitialize) {
              var clustererWindow = window;

              if (!clustererWindow.MarkerClusterer && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('MarkerClusterer class not found, cannot construct a marker cluster. ' + 'Please install the MarkerClustererPlus library: ' + 'https://github.com/googlemaps/js-markerclustererplus');
              } // Create the object outside the zone so its events don't trigger change detection.
              // We'll bring it back in inside the `MapEventManager` only for the events that the
              // user has subscribed to.


              this._ngZone.runOutsideAngular(function () {
                _this20.markerClusterer = new MarkerClusterer(_this20._googleMap.googleMap, [], _this20._combineOptions());
              });

              this._assertInitialized();

              this._eventManager.setTarget(this.markerClusterer);
            }
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            if (this._canInitialize) {
              this._watchForMarkerChanges();
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var clusterer = this.markerClusterer,
                ariaLabelFn = this.ariaLabelFn,
                _averageCenter = this._averageCenter,
                _batchSizeIE = this._batchSizeIE,
                _calculator = this._calculator,
                _styles = this._styles,
                _clusterClass = this._clusterClass,
                _enableRetinaIcons = this._enableRetinaIcons,
                _gridSize = this._gridSize,
                _ignoreHidden = this._ignoreHidden,
                _imageExtension = this._imageExtension,
                _imagePath = this._imagePath,
                _imageSizes = this._imageSizes,
                _maxZoom = this._maxZoom,
                _minimumClusterSize = this._minimumClusterSize,
                _title = this._title,
                _zIndex = this._zIndex,
                _zoomOnClick = this._zoomOnClick;

            if (clusterer) {
              if (changes['options']) {
                clusterer.setOptions(this._combineOptions());
              }

              if (changes['ariaLabelFn']) {
                clusterer.ariaLabelFn = ariaLabelFn;
              }

              if (changes['averageCenter'] && _averageCenter !== undefined) {
                clusterer.setAverageCenter(_averageCenter);
              }

              if (changes['batchSizeIE'] && _batchSizeIE !== undefined) {
                clusterer.setBatchSizeIE(_batchSizeIE);
              }

              if (changes['calculator'] && !!_calculator) {
                clusterer.setCalculator(_calculator);
              }

              if (changes['clusterClass'] && _clusterClass !== undefined) {
                clusterer.setClusterClass(_clusterClass);
              }

              if (changes['enableRetinaIcons'] && _enableRetinaIcons !== undefined) {
                clusterer.setEnableRetinaIcons(_enableRetinaIcons);
              }

              if (changes['gridSize'] && _gridSize !== undefined) {
                clusterer.setGridSize(_gridSize);
              }

              if (changes['ignoreHidden'] && _ignoreHidden !== undefined) {
                clusterer.setIgnoreHidden(_ignoreHidden);
              }

              if (changes['imageExtension'] && _imageExtension !== undefined) {
                clusterer.setImageExtension(_imageExtension);
              }

              if (changes['imagePath'] && _imagePath !== undefined) {
                clusterer.setImagePath(_imagePath);
              }

              if (changes['imageSizes'] && _imageSizes) {
                clusterer.setImageSizes(_imageSizes);
              }

              if (changes['maxZoom'] && _maxZoom !== undefined) {
                clusterer.setMaxZoom(_maxZoom);
              }

              if (changes['minimumClusterSize'] && _minimumClusterSize !== undefined) {
                clusterer.setMinimumClusterSize(_minimumClusterSize);
              }

              if (changes['styles'] && _styles) {
                clusterer.setStyles(_styles);
              }

              if (changes['title'] && _title !== undefined) {
                clusterer.setTitle(_title);
              }

              if (changes['zIndex'] && _zIndex !== undefined) {
                clusterer.setZIndex(_zIndex);
              }

              if (changes['zoomOnClick'] && _zoomOnClick !== undefined) {
                clusterer.setZoomOnClick(_zoomOnClick);
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroy.next();

            this._destroy.complete();

            this._eventManager.destroy();

            if (this.markerClusterer) {
              this.markerClusterer.setMap(null);
            }
          }
        }, {
          key: "fitMapToMarkers",
          value: function fitMapToMarkers(padding) {
            this._assertInitialized();

            this.markerClusterer.fitMapToMarkers(padding);
          }
        }, {
          key: "getAverageCenter",
          value: function getAverageCenter() {
            this._assertInitialized();

            return this.markerClusterer.getAverageCenter();
          }
        }, {
          key: "getBatchSizeIE",
          value: function getBatchSizeIE() {
            this._assertInitialized();

            return this.markerClusterer.getBatchSizeIE();
          }
        }, {
          key: "getCalculator",
          value: function getCalculator() {
            this._assertInitialized();

            return this.markerClusterer.getCalculator();
          }
        }, {
          key: "getClusterClass",
          value: function getClusterClass() {
            this._assertInitialized();

            return this.markerClusterer.getClusterClass();
          }
        }, {
          key: "getClusters",
          value: function getClusters() {
            this._assertInitialized();

            return this.markerClusterer.getClusters();
          }
        }, {
          key: "getEnableRetinaIcons",
          value: function getEnableRetinaIcons() {
            this._assertInitialized();

            return this.markerClusterer.getEnableRetinaIcons();
          }
        }, {
          key: "getGridSize",
          value: function getGridSize() {
            this._assertInitialized();

            return this.markerClusterer.getGridSize();
          }
        }, {
          key: "getIgnoreHidden",
          value: function getIgnoreHidden() {
            this._assertInitialized();

            return this.markerClusterer.getIgnoreHidden();
          }
        }, {
          key: "getImageExtension",
          value: function getImageExtension() {
            this._assertInitialized();

            return this.markerClusterer.getImageExtension();
          }
        }, {
          key: "getImagePath",
          value: function getImagePath() {
            this._assertInitialized();

            return this.markerClusterer.getImagePath();
          }
        }, {
          key: "getImageSizes",
          value: function getImageSizes() {
            this._assertInitialized();

            return this.markerClusterer.getImageSizes();
          }
        }, {
          key: "getMaxZoom",
          value: function getMaxZoom() {
            this._assertInitialized();

            return this.markerClusterer.getMaxZoom();
          }
        }, {
          key: "getMinimumClusterSize",
          value: function getMinimumClusterSize() {
            this._assertInitialized();

            return this.markerClusterer.getMinimumClusterSize();
          }
        }, {
          key: "getStyles",
          value: function getStyles() {
            this._assertInitialized();

            return this.markerClusterer.getStyles();
          }
        }, {
          key: "getTitle",
          value: function getTitle() {
            this._assertInitialized();

            return this.markerClusterer.getTitle();
          }
        }, {
          key: "getTotalClusters",
          value: function getTotalClusters() {
            this._assertInitialized();

            return this.markerClusterer.getTotalClusters();
          }
        }, {
          key: "getTotalMarkers",
          value: function getTotalMarkers() {
            this._assertInitialized();

            return this.markerClusterer.getTotalMarkers();
          }
        }, {
          key: "getZIndex",
          value: function getZIndex() {
            this._assertInitialized();

            return this.markerClusterer.getZIndex();
          }
        }, {
          key: "getZoomOnClick",
          value: function getZoomOnClick() {
            this._assertInitialized();

            return this.markerClusterer.getZoomOnClick();
          }
        }, {
          key: "_combineOptions",
          value: function _combineOptions() {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;

            var options = this._options || DEFAULT_CLUSTERER_OPTIONS;
            return Object.assign(Object.assign({}, options), {
              ariaLabelFn: (_a = this.ariaLabelFn) !== null && _a !== void 0 ? _a : options.ariaLabelFn,
              averageCenter: (_b = this._averageCenter) !== null && _b !== void 0 ? _b : options.averageCenter,
              batchSize: (_c = this.batchSize) !== null && _c !== void 0 ? _c : options.batchSize,
              batchSizeIE: (_d = this._batchSizeIE) !== null && _d !== void 0 ? _d : options.batchSizeIE,
              calculator: (_e = this._calculator) !== null && _e !== void 0 ? _e : options.calculator,
              clusterClass: (_f = this._clusterClass) !== null && _f !== void 0 ? _f : options.clusterClass,
              enableRetinaIcons: (_g = this._enableRetinaIcons) !== null && _g !== void 0 ? _g : options.enableRetinaIcons,
              gridSize: (_h = this._gridSize) !== null && _h !== void 0 ? _h : options.gridSize,
              ignoreHidden: (_j = this._ignoreHidden) !== null && _j !== void 0 ? _j : options.ignoreHidden,
              imageExtension: (_k = this._imageExtension) !== null && _k !== void 0 ? _k : options.imageExtension,
              imagePath: (_l = this._imagePath) !== null && _l !== void 0 ? _l : options.imagePath,
              imageSizes: (_m = this._imageSizes) !== null && _m !== void 0 ? _m : options.imageSizes,
              maxZoom: (_o = this._maxZoom) !== null && _o !== void 0 ? _o : options.maxZoom,
              minimumClusterSize: (_p = this._minimumClusterSize) !== null && _p !== void 0 ? _p : options.minimumClusterSize,
              styles: (_q = this._styles) !== null && _q !== void 0 ? _q : options.styles,
              title: (_r = this._title) !== null && _r !== void 0 ? _r : options.title,
              zIndex: (_s = this._zIndex) !== null && _s !== void 0 ? _s : options.zIndex,
              zoomOnClick: (_t = this._zoomOnClick) !== null && _t !== void 0 ? _t : options.zoomOnClick
            });
          }
        }, {
          key: "_watchForMarkerChanges",
          value: function _watchForMarkerChanges() {
            var _this21 = this;

            this._assertInitialized();

            var initialMarkers = [];

            var _iterator2 = _createForOfIteratorHelper(this._getInternalMarkers(this._markers.toArray())),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var marker = _step2.value;

                this._currentMarkers.add(marker);

                initialMarkers.push(marker);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.markerClusterer.addMarkers(initialMarkers);

            this._markers.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy)).subscribe(function (markerComponents) {
              _this21._assertInitialized();

              var newMarkers = new Set(_this21._getInternalMarkers(markerComponents));
              var markersToAdd = [];
              var markersToRemove = [];

              for (var _i2 = 0, _Array$from = Array.from(newMarkers); _i2 < _Array$from.length; _i2++) {
                var marker = _Array$from[_i2];

                if (!_this21._currentMarkers.has(marker)) {
                  _this21._currentMarkers.add(marker);

                  markersToAdd.push(marker);
                }
              }

              for (var _i3 = 0, _Array$from2 = Array.from(_this21._currentMarkers); _i3 < _Array$from2.length; _i3++) {
                var _marker = _Array$from2[_i3];

                if (!newMarkers.has(_marker)) {
                  markersToRemove.push(_marker);
                }
              }

              _this21.markerClusterer.addMarkers(markersToAdd, true);

              _this21.markerClusterer.removeMarkers(markersToRemove, true);

              _this21.markerClusterer.repaint();

              for (var _i4 = 0, _markersToRemove = markersToRemove; _i4 < _markersToRemove.length; _i4++) {
                var _marker2 = _markersToRemove[_i4];

                _this21._currentMarkers["delete"](_marker2);
              }
            });
          }
        }, {
          key: "_getInternalMarkers",
          value: function _getInternalMarkers(markers) {
            return markers.filter(function (markerComponent) {
              return !!markerComponent.marker;
            }).map(function (markerComponent) {
              return markerComponent.marker;
            });
          }
        }, {
          key: "_assertInitialized",
          value: function _assertInitialized() {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!this._googleMap.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
              }

              if (!this.markerClusterer) {
                throw Error('Cannot interact with a MarkerClusterer before it has been initialized. ' + 'Please wait for the MarkerClusterer to load before trying to interact with it.');
              }
            }
          }
        }]);

        return MapMarkerClusterer;
      }();

      MapMarkerClusterer.ɵfac = function MapMarkerClusterer_Factory(t) {
        return new (t || MapMarkerClusterer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      MapMarkerClusterer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MapMarkerClusterer,
        selectors: [["map-marker-clusterer"]],
        contentQueries: function MapMarkerClusterer_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MapMarker, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._markers = _t);
          }
        },
        inputs: {
          ariaLabelFn: "ariaLabelFn",
          averageCenter: "averageCenter",
          batchSizeIE: "batchSizeIE",
          calculator: "calculator",
          clusterClass: "clusterClass",
          enableRetinaIcons: "enableRetinaIcons",
          gridSize: "gridSize",
          ignoreHidden: "ignoreHidden",
          imageExtension: "imageExtension",
          imagePath: "imagePath",
          imageSizes: "imageSizes",
          maxZoom: "maxZoom",
          minimumClusterSize: "minimumClusterSize",
          styles: "styles",
          title: "title",
          zIndex: "zIndex",
          zoomOnClick: "zoomOnClick",
          options: "options",
          batchSize: "batchSize"
        },
        outputs: {
          clusteringbegin: "clusteringbegin",
          clusteringend: "clusteringend",
          clusterClick: "clusterClick"
        },
        exportAs: ["mapMarkerClusterer"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MapMarkerClusterer_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      MapMarkerClusterer.ctorParameters = function () {
        return [{
          type: GoogleMap
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      MapMarkerClusterer.propDecorators = {
        ariaLabelFn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        averageCenter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        batchSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        batchSizeIE: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        calculator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clusterClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        enableRetinaIcons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        gridSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ignoreHidden: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageExtension: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imagePath: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageSizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minimumClusterSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        styles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        zoomOnClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clusteringbegin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        clusteringend: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        clusterClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        _markers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [MapMarker, {
            descendants: true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapMarkerClusterer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'map-marker-clusterer',
            exportAs: 'mapMarkerClusterer',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: '<ng-content></ng-content>',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: GoogleMap
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          ariaLabelFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          clusteringbegin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          clusteringend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          clusterClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          averageCenter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          batchSizeIE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          calculator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          clusterClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          enableRetinaIcons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          gridSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ignoreHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          imageExtension: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          imagePath: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          imageSizes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          maxZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          minimumClusterSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          styles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          zoomOnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          batchSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _markers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [MapMarker, {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Angular component that renders a Google Maps Polygon via the Google Maps JavaScript API.
       *
       * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon
       */


      var MapPolygon = /*#__PURE__*/function () {
        function MapPolygon(_map, _ngZone) {
          _classCallCheck(this, MapPolygon);

          this._map = _map;
          this._ngZone = _ngZone;
          this._eventManager = new MapEventManager(this._ngZone);
          this._options = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
          this._paths = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.click
           */

          this.polygonClick = this._eventManager.getLazyEmitter('click');
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dblclick
           */

          this.polygonDblclick = this._eventManager.getLazyEmitter('dblclick');
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.drag
           */

          this.polygonDrag = this._eventManager.getLazyEmitter('drag');
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dragend
           */

          this.polygonDragend = this._eventManager.getLazyEmitter('dragend');
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dragstart
           */

          this.polygonDragstart = this._eventManager.getLazyEmitter('dragstart');
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mousedown
           */

          this.polygonMousedown = this._eventManager.getLazyEmitter('mousedown');
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mousemove
           */

          this.polygonMousemove = this._eventManager.getLazyEmitter('mousemove');
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseout
           */

          this.polygonMouseout = this._eventManager.getLazyEmitter('mouseout');
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseover
           */

          this.polygonMouseover = this._eventManager.getLazyEmitter('mouseover');
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseup
           */

          this.polygonMouseup = this._eventManager.getLazyEmitter('mouseup');
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.rightclick
           */

          this.polygonRightclick = this._eventManager.getLazyEmitter('rightclick');
        }

        _createClass(MapPolygon, [{
          key: "options",
          set: function set(options) {
            this._options.next(options || {});
          }
        }, {
          key: "paths",
          set: function set(paths) {
            this._paths.next(paths);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this22 = this;

            if (this._map._isBrowser) {
              this._combineOptions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (options) {
                // Create the object outside the zone so its events don't trigger change detection.
                // We'll bring it back in inside the `MapEventManager` only for the events that the
                // user has subscribed to.
                _this22._ngZone.runOutsideAngular(function () {
                  _this22.polygon = new google.maps.Polygon(options);
                });

                _this22._assertInitialized();

                _this22.polygon.setMap(_this22._map.googleMap);

                _this22._eventManager.setTarget(_this22.polygon);
              });

              this._watchForOptionsChanges();

              this._watchForPathChanges();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._eventManager.destroy();

            this._destroyed.next();

            this._destroyed.complete();

            if (this.polygon) {
              this.polygon.setMap(null);
            }
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getDraggable
           */

        }, {
          key: "getDraggable",
          value: function getDraggable() {
            this._assertInitialized();

            return this.polygon.getDraggable();
          }
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getEditable
           */

        }, {
          key: "getEditable",
          value: function getEditable() {
            this._assertInitialized();

            return this.polygon.getEditable();
          }
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getPath
           */

        }, {
          key: "getPath",
          value: function getPath() {
            this._assertInitialized();

            return this.polygon.getPath();
          }
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getPaths
           */

        }, {
          key: "getPaths",
          value: function getPaths() {
            this._assertInitialized();

            return this.polygon.getPaths();
          }
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getVisible
           */

        }, {
          key: "getVisible",
          value: function getVisible() {
            this._assertInitialized();

            return this.polygon.getVisible();
          }
        }, {
          key: "_combineOptions",
          value: function _combineOptions() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._options, this._paths]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref7) {
              var _ref8 = _slicedToArray(_ref7, 2),
                  options = _ref8[0],
                  paths = _ref8[1];

              var combinedOptions = Object.assign(Object.assign({}, options), {
                paths: paths || options.paths
              });
              return combinedOptions;
            }));
          }
        }, {
          key: "_watchForOptionsChanges",
          value: function _watchForOptionsChanges() {
            var _this23 = this;

            this._options.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(function (options) {
              _this23._assertInitialized();

              _this23.polygon.setOptions(options);
            });
          }
        }, {
          key: "_watchForPathChanges",
          value: function _watchForPathChanges() {
            var _this24 = this;

            this._paths.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(function (paths) {
              if (paths) {
                _this24._assertInitialized();

                _this24.polygon.setPaths(paths);
              }
            });
          }
        }, {
          key: "_assertInitialized",
          value: function _assertInitialized() {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!this._map.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
              }

              if (!this.polygon) {
                throw Error('Cannot interact with a Google Map Polygon before it has been ' + 'initialized. Please wait for the Polygon to load before trying to interact with it.');
              }
            }
          }
        }]);

        return MapPolygon;
      }();

      MapPolygon.ɵfac = function MapPolygon_Factory(t) {
        return new (t || MapPolygon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      MapPolygon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MapPolygon,
        selectors: [["map-polygon"]],
        inputs: {
          options: "options",
          paths: "paths"
        },
        outputs: {
          polygonClick: "polygonClick",
          polygonDblclick: "polygonDblclick",
          polygonDrag: "polygonDrag",
          polygonDragend: "polygonDragend",
          polygonDragstart: "polygonDragstart",
          polygonMousedown: "polygonMousedown",
          polygonMousemove: "polygonMousemove",
          polygonMouseout: "polygonMouseout",
          polygonMouseover: "polygonMouseover",
          polygonMouseup: "polygonMouseup",
          polygonRightclick: "polygonRightclick"
        },
        exportAs: ["mapPolygon"]
      });

      MapPolygon.ctorParameters = function () {
        return [{
          type: GoogleMap
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      MapPolygon.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        paths: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        polygonClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        polygonDblclick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        polygonDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        polygonDragend: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        polygonDragstart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        polygonMousedown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        polygonMousemove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        polygonMouseout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        polygonMouseover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        polygonMouseup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        polygonRightclick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapPolygon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'map-polygon',
            exportAs: 'mapPolygon'
          }]
        }], function () {
          return [{
            type: GoogleMap
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          polygonClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          polygonDblclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          polygonDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          polygonDragend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          polygonDragstart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          polygonMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          polygonMousemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          polygonMouseout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          polygonMouseover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          polygonMouseup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          polygonRightclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          paths: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Angular component that renders a Google Maps Polyline via the Google Maps JavaScript API.
       *
       * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline
       */


      var MapPolyline = /*#__PURE__*/function () {
        function MapPolyline(_map, _ngZone) {
          _classCallCheck(this, MapPolyline);

          this._map = _map;
          this._ngZone = _ngZone;
          this._eventManager = new MapEventManager(this._ngZone);
          this._options = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
          this._path = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.click
           */

          this.polylineClick = this._eventManager.getLazyEmitter('click');
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dblclick
           */

          this.polylineDblclick = this._eventManager.getLazyEmitter('dblclick');
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.drag
           */

          this.polylineDrag = this._eventManager.getLazyEmitter('drag');
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dragend
           */

          this.polylineDragend = this._eventManager.getLazyEmitter('dragend');
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dragstart
           */

          this.polylineDragstart = this._eventManager.getLazyEmitter('dragstart');
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mousedown
           */

          this.polylineMousedown = this._eventManager.getLazyEmitter('mousedown');
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mousemove
           */

          this.polylineMousemove = this._eventManager.getLazyEmitter('mousemove');
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseout
           */

          this.polylineMouseout = this._eventManager.getLazyEmitter('mouseout');
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseover
           */

          this.polylineMouseover = this._eventManager.getLazyEmitter('mouseover');
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseup
           */

          this.polylineMouseup = this._eventManager.getLazyEmitter('mouseup');
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.rightclick
           */

          this.polylineRightclick = this._eventManager.getLazyEmitter('rightclick');
        }

        _createClass(MapPolyline, [{
          key: "options",
          set: function set(options) {
            this._options.next(options || {});
          }
        }, {
          key: "path",
          set: function set(path) {
            this._path.next(path);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            if (this._map._isBrowser) {
              this._combineOptions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (options) {
                // Create the object outside the zone so its events don't trigger change detection.
                // We'll bring it back in inside the `MapEventManager` only for the events that the
                // user has subscribed to.
                _this25._ngZone.runOutsideAngular(function () {
                  return _this25.polyline = new google.maps.Polyline(options);
                });

                _this25._assertInitialized();

                _this25.polyline.setMap(_this25._map.googleMap);

                _this25._eventManager.setTarget(_this25.polyline);
              });

              this._watchForOptionsChanges();

              this._watchForPathChanges();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._eventManager.destroy();

            this._destroyed.next();

            this._destroyed.complete();

            if (this.polyline) {
              this.polyline.setMap(null);
            }
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getDraggable
           */

        }, {
          key: "getDraggable",
          value: function getDraggable() {
            this._assertInitialized();

            return this.polyline.getDraggable();
          }
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getEditable
           */

        }, {
          key: "getEditable",
          value: function getEditable() {
            this._assertInitialized();

            return this.polyline.getEditable();
          }
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getPath
           */

        }, {
          key: "getPath",
          value: function getPath() {
            this._assertInitialized();

            return this.polyline.getPath();
          }
          /**
           * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getVisible
           */

        }, {
          key: "getVisible",
          value: function getVisible() {
            this._assertInitialized();

            return this.polyline.getVisible();
          }
        }, {
          key: "_combineOptions",
          value: function _combineOptions() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._options, this._path]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref9) {
              var _ref10 = _slicedToArray(_ref9, 2),
                  options = _ref10[0],
                  path = _ref10[1];

              var combinedOptions = Object.assign(Object.assign({}, options), {
                path: path || options.path
              });
              return combinedOptions;
            }));
          }
        }, {
          key: "_watchForOptionsChanges",
          value: function _watchForOptionsChanges() {
            var _this26 = this;

            this._options.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(function (options) {
              _this26._assertInitialized();

              _this26.polyline.setOptions(options);
            });
          }
        }, {
          key: "_watchForPathChanges",
          value: function _watchForPathChanges() {
            var _this27 = this;

            this._path.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(function (path) {
              if (path) {
                _this27._assertInitialized();

                _this27.polyline.setPath(path);
              }
            });
          }
        }, {
          key: "_assertInitialized",
          value: function _assertInitialized() {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!this._map.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
              }

              if (!this.polyline) {
                throw Error('Cannot interact with a Google Map Polyline before it has been ' + 'initialized. Please wait for the Polyline to load before trying to interact with it.');
              }
            }
          }
        }]);

        return MapPolyline;
      }();

      MapPolyline.ɵfac = function MapPolyline_Factory(t) {
        return new (t || MapPolyline)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      MapPolyline.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MapPolyline,
        selectors: [["map-polyline"]],
        inputs: {
          options: "options",
          path: "path"
        },
        outputs: {
          polylineClick: "polylineClick",
          polylineDblclick: "polylineDblclick",
          polylineDrag: "polylineDrag",
          polylineDragend: "polylineDragend",
          polylineDragstart: "polylineDragstart",
          polylineMousedown: "polylineMousedown",
          polylineMousemove: "polylineMousemove",
          polylineMouseout: "polylineMouseout",
          polylineMouseover: "polylineMouseover",
          polylineMouseup: "polylineMouseup",
          polylineRightclick: "polylineRightclick"
        },
        exportAs: ["mapPolyline"]
      });

      MapPolyline.ctorParameters = function () {
        return [{
          type: GoogleMap
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      MapPolyline.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        path: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        polylineClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        polylineDblclick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        polylineDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        polylineDragend: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        polylineDragstart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        polylineMousedown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        polylineMousemove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        polylineMouseout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        polylineMouseover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        polylineMouseup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        polylineRightclick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapPolyline, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'map-polyline',
            exportAs: 'mapPolyline'
          }]
        }], function () {
          return [{
            type: GoogleMap
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          polylineClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          polylineDblclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          polylineDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          polylineDragend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          polylineDragstart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          polylineMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          polylineMousemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          polylineMouseout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          polylineMouseover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          polylineMouseup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          polylineRightclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          path: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Angular component that renders a Google Maps Rectangle via the Google Maps JavaScript API.
       *
       * See developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle
       */


      var MapRectangle = /*#__PURE__*/function () {
        function MapRectangle(_map, _ngZone) {
          _classCallCheck(this, MapRectangle);

          this._map = _map;
          this._ngZone = _ngZone;
          this._eventManager = new MapEventManager(this._ngZone);
          this._options = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
          this._bounds = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.boundsChanged
           */

          this.boundsChanged = this._eventManager.getLazyEmitter('bounds_changed');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.click
           */

          this.rectangleClick = this._eventManager.getLazyEmitter('click');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dblclick
           */

          this.rectangleDblclick = this._eventManager.getLazyEmitter('dblclick');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.drag
           */

          this.rectangleDrag = this._eventManager.getLazyEmitter('drag');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dragend
           */

          this.rectangleDragend = this._eventManager.getLazyEmitter('dragend');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dragstart
           */

          this.rectangleDragstart = this._eventManager.getLazyEmitter('dragstart');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mousedown
           */

          this.rectangleMousedown = this._eventManager.getLazyEmitter('mousedown');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mousemove
           */

          this.rectangleMousemove = this._eventManager.getLazyEmitter('mousemove');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseout
           */

          this.rectangleMouseout = this._eventManager.getLazyEmitter('mouseout');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseover
           */

          this.rectangleMouseover = this._eventManager.getLazyEmitter('mouseover');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseup
           */

          this.rectangleMouseup = this._eventManager.getLazyEmitter('mouseup');
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.rightclick
           */

          this.rectangleRightclick = this._eventManager.getLazyEmitter('rightclick');
        }

        _createClass(MapRectangle, [{
          key: "options",
          set: function set(options) {
            this._options.next(options || {});
          }
        }, {
          key: "bounds",
          set: function set(bounds) {
            this._bounds.next(bounds);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this28 = this;

            if (this._map._isBrowser) {
              this._combineOptions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (options) {
                // Create the object outside the zone so its events don't trigger change detection.
                // We'll bring it back in inside the `MapEventManager` only for the events that the
                // user has subscribed to.
                _this28._ngZone.runOutsideAngular(function () {
                  _this28.rectangle = new google.maps.Rectangle(options);
                });

                _this28._assertInitialized();

                _this28.rectangle.setMap(_this28._map.googleMap);

                _this28._eventManager.setTarget(_this28.rectangle);
              });

              this._watchForOptionsChanges();

              this._watchForBoundsChanges();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._eventManager.destroy();

            this._destroyed.next();

            this._destroyed.complete();

            if (this.rectangle) {
              this.rectangle.setMap(null);
            }
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getBounds
           */

        }, {
          key: "getBounds",
          value: function getBounds() {
            this._assertInitialized();

            return this.rectangle.getBounds();
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getDraggable
           */

        }, {
          key: "getDraggable",
          value: function getDraggable() {
            this._assertInitialized();

            return this.rectangle.getDraggable();
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getEditable
           */

        }, {
          key: "getEditable",
          value: function getEditable() {
            this._assertInitialized();

            return this.rectangle.getEditable();
          }
          /**
           * See
           * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getVisible
           */

        }, {
          key: "getVisible",
          value: function getVisible() {
            this._assertInitialized();

            return this.rectangle.getVisible();
          }
        }, {
          key: "_combineOptions",
          value: function _combineOptions() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._options, this._bounds]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref11) {
              var _ref12 = _slicedToArray(_ref11, 2),
                  options = _ref12[0],
                  bounds = _ref12[1];

              var combinedOptions = Object.assign(Object.assign({}, options), {
                bounds: bounds || options.bounds
              });
              return combinedOptions;
            }));
          }
        }, {
          key: "_watchForOptionsChanges",
          value: function _watchForOptionsChanges() {
            var _this29 = this;

            this._options.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(function (options) {
              _this29._assertInitialized();

              _this29.rectangle.setOptions(options);
            });
          }
        }, {
          key: "_watchForBoundsChanges",
          value: function _watchForBoundsChanges() {
            var _this30 = this;

            this._bounds.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(function (bounds) {
              if (bounds) {
                _this30._assertInitialized();

                _this30.rectangle.setBounds(bounds);
              }
            });
          }
        }, {
          key: "_assertInitialized",
          value: function _assertInitialized() {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!this._map.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
              }

              if (!this.rectangle) {
                throw Error('Cannot interact with a Google Map Rectangle before it has been initialized. ' + 'Please wait for the Rectangle to load before trying to interact with it.');
              }
            }
          }
        }]);

        return MapRectangle;
      }();

      MapRectangle.ɵfac = function MapRectangle_Factory(t) {
        return new (t || MapRectangle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      MapRectangle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MapRectangle,
        selectors: [["map-rectangle"]],
        inputs: {
          options: "options",
          bounds: "bounds"
        },
        outputs: {
          boundsChanged: "boundsChanged",
          rectangleClick: "rectangleClick",
          rectangleDblclick: "rectangleDblclick",
          rectangleDrag: "rectangleDrag",
          rectangleDragend: "rectangleDragend",
          rectangleDragstart: "rectangleDragstart",
          rectangleMousedown: "rectangleMousedown",
          rectangleMousemove: "rectangleMousemove",
          rectangleMouseout: "rectangleMouseout",
          rectangleMouseover: "rectangleMouseover",
          rectangleMouseup: "rectangleMouseup",
          rectangleRightclick: "rectangleRightclick"
        },
        exportAs: ["mapRectangle"]
      });

      MapRectangle.ctorParameters = function () {
        return [{
          type: GoogleMap
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      MapRectangle.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bounds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        boundsChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        rectangleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        rectangleDblclick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        rectangleDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        rectangleDragend: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        rectangleDragstart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        rectangleMousedown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        rectangleMousemove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        rectangleMouseout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        rectangleMouseover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        rectangleMouseup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        rectangleRightclick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapRectangle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'map-rectangle',
            exportAs: 'mapRectangle'
          }]
        }], function () {
          return [{
            type: GoogleMap
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          boundsChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          rectangleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          rectangleDblclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          rectangleDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          rectangleDragend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          rectangleDragstart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          rectangleMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          rectangleMousemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          rectangleMouseout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          rectangleMouseover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          rectangleMouseup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          rectangleRightclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          bounds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Angular component that renders a Google Maps Traffic Layer via the Google Maps JavaScript API.
       *
       * See developers.google.com/maps/documentation/javascript/reference/map#TrafficLayer
       */


      var MapTrafficLayer = /*#__PURE__*/function () {
        function MapTrafficLayer(_map, _ngZone) {
          _classCallCheck(this, MapTrafficLayer);

          this._map = _map;
          this._ngZone = _ngZone;
          this._autoRefresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }
        /**
         * Whether the traffic layer refreshes with updated information automatically.
         */


        _createClass(MapTrafficLayer, [{
          key: "autoRefresh",
          set: function set(autoRefresh) {
            this._autoRefresh.next(autoRefresh);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this31 = this;

            if (this._map._isBrowser) {
              this._combineOptions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (options) {
                // Create the object outside the zone so its events don't trigger change detection.
                _this31._ngZone.runOutsideAngular(function () {
                  _this31.trafficLayer = new google.maps.TrafficLayer(options);
                });

                _this31._assertInitialized();

                _this31.trafficLayer.setMap(_this31._map.googleMap);
              });

              this._watchForAutoRefreshChanges();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();

            if (this.trafficLayer) {
              this.trafficLayer.setMap(null);
            }
          }
        }, {
          key: "_combineOptions",
          value: function _combineOptions() {
            return this._autoRefresh.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (autoRefresh) {
              var combinedOptions = {
                autoRefresh: autoRefresh
              };
              return combinedOptions;
            }));
          }
        }, {
          key: "_watchForAutoRefreshChanges",
          value: function _watchForAutoRefreshChanges() {
            var _this32 = this;

            this._combineOptions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(function (options) {
              _this32._assertInitialized();

              _this32.trafficLayer.setOptions(options);
            });
          }
        }, {
          key: "_assertInitialized",
          value: function _assertInitialized() {
            if (!this._map.googleMap) {
              throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
            }

            if (!this.trafficLayer) {
              throw Error('Cannot interact with a Google Map Traffic Layer before it has been initialized. ' + 'Please wait for the Traffic Layer to load before trying to interact with it.');
            }
          }
        }]);

        return MapTrafficLayer;
      }();

      MapTrafficLayer.ɵfac = function MapTrafficLayer_Factory(t) {
        return new (t || MapTrafficLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      MapTrafficLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MapTrafficLayer,
        selectors: [["map-traffic-layer"]],
        inputs: {
          autoRefresh: "autoRefresh"
        },
        exportAs: ["mapTrafficLayer"]
      });

      MapTrafficLayer.ctorParameters = function () {
        return [{
          type: GoogleMap
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      MapTrafficLayer.propDecorators = {
        autoRefresh: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapTrafficLayer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'map-traffic-layer',
            exportAs: 'mapTrafficLayer'
          }]
        }], function () {
          return [{
            type: GoogleMap
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          autoRefresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Angular component that renders a Google Maps Transit Layer via the Google Maps JavaScript API.
       *
       * See developers.google.com/maps/documentation/javascript/reference/map#TransitLayer
       */


      var MapTransitLayer = /*#__PURE__*/function (_MapBaseLayer2) {
        _inherits(MapTransitLayer, _MapBaseLayer2);

        var _super2 = _createSuper(MapTransitLayer);

        function MapTransitLayer() {
          _classCallCheck(this, MapTransitLayer);

          return _super2.apply(this, arguments);
        }

        _createClass(MapTransitLayer, [{
          key: "_initializeObject",
          value: function _initializeObject() {
            this.transitLayer = new google.maps.TransitLayer();
          }
        }, {
          key: "_setMap",
          value: function _setMap() {
            this._assertLayerInitialized();

            this.transitLayer.setMap(this._map.googleMap);
          }
        }, {
          key: "_unsetMap",
          value: function _unsetMap() {
            if (this.transitLayer) {
              this.transitLayer.setMap(null);
            }
          }
        }, {
          key: "_assertLayerInitialized",
          value: function _assertLayerInitialized() {
            if (!this.transitLayer) {
              throw Error('Cannot interact with a Google Map Transit Layer before it has been initialized. ' + 'Please wait for the Transit Layer to load before trying to interact with it.');
            }
          }
        }]);

        return MapTransitLayer;
      }(MapBaseLayer);

      MapTransitLayer.ɵfac = function MapTransitLayer_Factory(t) {
        return ɵMapTransitLayer_BaseFactory(t || MapTransitLayer);
      };

      MapTransitLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MapTransitLayer,
        selectors: [["map-transit-layer"]],
        exportAs: ["mapTransitLayer"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMapTransitLayer_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MapTransitLayer);

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapTransitLayer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'map-transit-layer',
            exportAs: 'mapTransitLayer'
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Angular directive that renders a Google Maps heatmap via the Google Maps JavaScript API.
       *
       * See: https://developers.google.com/maps/documentation/javascript/reference/visualization
       */


      var MapHeatmapLayer = /*#__PURE__*/function () {
        function MapHeatmapLayer(_googleMap, _ngZone) {
          _classCallCheck(this, MapHeatmapLayer);

          this._googleMap = _googleMap;
          this._ngZone = _ngZone;
        }
        /**
         * Data shown on the heatmap.
         * See: https://developers.google.com/maps/documentation/javascript/reference/visualization
         */


        _createClass(MapHeatmapLayer, [{
          key: "data",
          set: function set(data) {
            this._data = data;
          }
          /**
           * Options used to configure the heatmap. See:
           * developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayerOptions
           */

        }, {
          key: "options",
          set: function set(options) {
            this._options = options;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this33 = this;

            var _a, _b;

            if (this._googleMap._isBrowser) {
              if (!((_b = (_a = window.google) === null || _a === void 0 ? void 0 : _a.maps) === null || _b === void 0 ? void 0 : _b.visualization) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('Namespace `google.maps.visualization` not found, cannot construct heatmap. ' + 'Please install the Google Maps JavaScript API with the "visualization" library: ' + 'https://developers.google.com/maps/documentation/javascript/visualization');
              } // Create the object outside the zone so its events don't trigger change detection.
              // We'll bring it back in inside the `MapEventManager` only for the events that the
              // user has subscribed to.


              this._ngZone.runOutsideAngular(function () {
                _this33.heatmap = new google.maps.visualization.HeatmapLayer(_this33._combineOptions());
              });

              this._assertInitialized();

              this.heatmap.setMap(this._googleMap.googleMap);
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _data = this._data,
                heatmap = this.heatmap;

            if (heatmap) {
              if (changes['options']) {
                heatmap.setOptions(this._combineOptions());
              }

              if (changes['data'] && _data !== undefined) {
                heatmap.setData(this._normalizeData(_data));
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.heatmap) {
              this.heatmap.setMap(null);
            }
          }
          /**
           * Gets the data that is currently shown on the heatmap.
           * See: developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayer
           */

        }, {
          key: "getData",
          value: function getData() {
            this._assertInitialized();

            return this.heatmap.getData();
          }
          /** Creates a combined options object using the passed-in options and the individual inputs. */

        }, {
          key: "_combineOptions",
          value: function _combineOptions() {
            var options = this._options || {};
            return Object.assign(Object.assign({}, options), {
              data: this._normalizeData(this._data || options.data || []),
              map: this._googleMap.googleMap
            });
          }
          /**
           * Most Google Maps APIs support both `LatLng` objects and `LatLngLiteral`. The latter is more
           * convenient to write out, because the Google Maps API doesn't have to have been loaded in order
           * to construct them. The `HeatmapLayer` appears to be an exception that only allows a `LatLng`
           * object, or it throws a runtime error. Since it's more convenient and we expect that Angular
           * users will load the API asynchronously, we allow them to pass in a `LatLngLiteral` and we
           * convert it to a `LatLng` object before passing it off to Google Maps.
           */

        }, {
          key: "_normalizeData",
          value: function _normalizeData(data) {
            var result = [];
            data.forEach(function (item) {
              result.push(isLatLngLiteral(item) ? new google.maps.LatLng(item.lat, item.lng) : item);
            });
            return result;
          }
          /** Asserts that the heatmap object has been initialized. */

        }, {
          key: "_assertInitialized",
          value: function _assertInitialized() {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!this._googleMap.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
              }

              if (!this.heatmap) {
                throw Error('Cannot interact with a Google Map HeatmapLayer before it has been ' + 'initialized. Please wait for the heatmap to load before trying to interact with it.');
              }
            }
          }
        }]);

        return MapHeatmapLayer;
      }();

      MapHeatmapLayer.ɵfac = function MapHeatmapLayer_Factory(t) {
        return new (t || MapHeatmapLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      MapHeatmapLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MapHeatmapLayer,
        selectors: [["map-heatmap-layer"]],
        inputs: {
          data: "data",
          options: "options"
        },
        exportAs: ["mapHeatmapLayer"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      MapHeatmapLayer.ctorParameters = function () {
        return [{
          type: GoogleMap
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      MapHeatmapLayer.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapHeatmapLayer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'map-heatmap-layer',
            exportAs: 'mapHeatmapLayer'
          }]
        }], function () {
          return [{
            type: GoogleMap
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /** Asserts that an object is a `LatLngLiteral`. */


      function isLatLngLiteral(value) {
        return value && typeof value.lat === 'number' && typeof value.lng === 'number';
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var COMPONENTS = [GoogleMap, MapBaseLayer, MapBicyclingLayer, MapCircle, MapDirectionsRenderer, MapGroundOverlay, MapInfoWindow, MapKmlLayer, MapMarker, MapMarkerClusterer, MapPolygon, MapPolyline, MapRectangle, MapTrafficLayer, MapTransitLayer, MapHeatmapLayer];

      var GoogleMapsModule = function GoogleMapsModule() {
        _classCallCheck(this, GoogleMapsModule);
      };

      GoogleMapsModule.ɵfac = function GoogleMapsModule_Factory(t) {
        return new (t || GoogleMapsModule)();
      };

      GoogleMapsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: GoogleMapsModule
      });
      GoogleMapsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GoogleMapsModule, {
          declarations: [GoogleMap, MapBaseLayer, MapBicyclingLayer, MapCircle, MapDirectionsRenderer, MapGroundOverlay, MapInfoWindow, MapKmlLayer, MapMarker, MapMarkerClusterer, MapPolygon, MapPolyline, MapRectangle, MapTrafficLayer, MapTransitLayer, MapHeatmapLayer],
          exports: [GoogleMap, MapBaseLayer, MapBicyclingLayer, MapCircle, MapDirectionsRenderer, MapGroundOverlay, MapInfoWindow, MapKmlLayer, MapMarker, MapMarkerClusterer, MapPolygon, MapPolyline, MapRectangle, MapTrafficLayer, MapTransitLayer, MapHeatmapLayer]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleMapsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: COMPONENTS,
            exports: COMPONENTS
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Angular service that wraps the Google Maps DirectionsService from the Google Maps JavaScript
       * API.
       *
       * See developers.google.com/maps/documentation/javascript/reference/directions#DirectionsService
       */


      var MapDirectionsService = /*#__PURE__*/function () {
        function MapDirectionsService(_ngZone) {
          _classCallCheck(this, MapDirectionsService);

          this._ngZone = _ngZone;
        }
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/directions
         * #DirectionsService.route
         */


        _createClass(MapDirectionsService, [{
          key: "route",
          value: function route(request) {
            var _this34 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              // Initialize the `DirectionsService` lazily since the Google Maps API may
              // not have been loaded when the provider is instantiated.
              if (!_this34._directionsService) {
                _this34._directionsService = new google.maps.DirectionsService();
              }

              var callback = function callback(result, status) {
                _this34._ngZone.run(function () {
                  observer.next({
                    result: result,
                    status: status
                  });
                  observer.complete();
                });
              };

              _this34._directionsService.route(request, callback);
            });
          }
        }]);

        return MapDirectionsService;
      }();

      MapDirectionsService.ɵfac = function MapDirectionsService_Factory(t) {
        return new (t || MapDirectionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      MapDirectionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function MapDirectionsService_Factory() {
          return new MapDirectionsService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
        },
        token: MapDirectionsService,
        providedIn: "root"
      });

      MapDirectionsService.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapDirectionsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Angular service that wraps the Google Maps Geocoder from the Google Maps JavaScript API.
       * See developers.google.com/maps/documentation/javascript/reference/geocoder#Geocoder
       */


      var MapGeocoder = /*#__PURE__*/function () {
        function MapGeocoder(_ngZone) {
          _classCallCheck(this, MapGeocoder);

          this._ngZone = _ngZone;
        }
        /**
         * See developers.google.com/maps/documentation/javascript/reference/geocoder#Geocoder.geocode
         */


        _createClass(MapGeocoder, [{
          key: "geocode",
          value: function geocode(request) {
            var _this35 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              // Initialize the `Geocoder` lazily since the Google Maps API may
              // not have been loaded when the provider is instantiated.
              if (!_this35._geocoder) {
                _this35._geocoder = new google.maps.Geocoder();
              }

              _this35._geocoder.geocode(request, function (results, status) {
                _this35._ngZone.run(function () {
                  observer.next({
                    results: results,
                    status: status
                  });
                  observer.complete();
                });
              });
            });
          }
        }]);

        return MapGeocoder;
      }();

      MapGeocoder.ɵfac = function MapGeocoder_Factory(t) {
        return new (t || MapGeocoder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      MapGeocoder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function MapGeocoder_Factory() {
          return new MapGeocoder(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
        },
        token: MapGeocoder,
        providedIn: "root"
      });

      MapGeocoder.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapGeocoder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=google-maps.js.map

      /***/

    },

    /***/
    "5T7I":
    /*!********************************************!*\
      !*** ./src/app/pages/map/map.component.ts ***!
      \********************************************/

    /*! exports provided: MapComponent */

    /***/
    function T7I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
        return MapComponent;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var src_app_app_config_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/app.config-module */
      "l+t5");
      /* harmony import */


      var src_app_store_selectors_iss_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/store/selectors/iss.selectors */
      "6Fv5");
      /* harmony import */


      var _components_save_dialog_save_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/save-dialog/save-dialog.component */
      "atJs");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/map.service */
      "q82f");
      /* harmony import */


      var src_app_shared_services_iss_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/iss.service */
      "P41H");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_google_maps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/google-maps */
      "3sZV");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function MapComponent_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function MapComponent_div_0_div_3_map_marker_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "map-marker", 9);
        }

        if (rf & 2) {
          var marker_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("position", marker_r6.position)("icon", marker_r6.icon);
        }
      }

      function MapComponent_div_0_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MapComponent_div_0_div_3_map_marker_1_Template, 1, 2, "map-marker", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.markersList);
        }
      }

      function MapComponent_div_0_map_marker_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "map-marker", 9);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("position", ctx_r3.marker.position)("icon", ctx_r3.marker.icon);
        }
      }

      function MapComponent_div_0_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MapComponent_div_0_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r7.savePosition();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "save");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function MapComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MapComponent_div_0_div_1_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "google-map", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MapComponent_div_0_div_3_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MapComponent_div_0_map_marker_4_Template, 1, 2, "map-marker", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-slide-toggle", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MapComponent_div_0_Template_mat_slide_toggle_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r9.isShowPath = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Show Session Path");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, MapComponent_div_0_button_8_Template, 3, 0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.marker);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("center", ctx_r0.center)("zoom", ctx_r0.zoom);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.isShowPath);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.marker && !ctx_r0.isShowPath);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.isShowPath);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.marker);
        }
      }

      var MapComponent = /*#__PURE__*/function () {
        function MapComponent(_store, _mapService, _issService, _dialog, _route, config) {
          var _this36 = this;

          _classCallCheck(this, MapComponent);

          this._store = _store;
          this._mapService = _mapService;
          this._issService = _issService;
          this._dialog = _dialog;
          this._route = _route;
          this.config = config;
          this.zoom = this.config.defaultZoom;
          this.markersList = [];
          this.iss$ = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_store_selectors_iss_selectors__WEBPACK_IMPORTED_MODULE_2__["selectISS"]));
          this.selectedIss$ = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_app_store_selectors_iss_selectors__WEBPACK_IMPORTED_MODULE_2__["selectSelectedISS"]));
          this.isShowPath = false;
          this.counter = 0;
          this.fragment = '';
          this.apiLoaded = this._mapService.sendGoogleAPI();
          this.issSubscription = this.iss$.subscribe(function (iss) {
            return _this36.updatePosition(iss);
          });

          this._route.fragment.subscribe(function (fragment) {
            _this36.fragment = fragment;
          });

          this.selectedIssSubscription = this.selectedIss$.subscribe(function (iss) {
            if (iss) {
              setTimeout(function () {
                return _this36.updatePosition(iss);
              }, 1000);
            } else {
              _this36.marker = null;

              if (_this36.isTest()) {
                _this36._issService.getISSOnce().subscribe(function (issTest) {
                  return _this36.updatePosition({
                    latitude: +issTest.iss_position.latitude,
                    longitude: +issTest.iss_position.longitude,
                    timestamp: issTest.timestamp
                  });
                });
              } else {
                _this36._issService.getISS();
              }
            }
          });
        }

        _createClass(MapComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a, _b;

            (_a = this.issSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            (_b = this.selectedIssSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
          }
        }, {
          key: "updatePosition",
          value: function updatePosition(iss) {
            if (!iss) return;

            if (this.counter === 0) {
              this.markersList.push({
                icon: this.config.pathIcon,
                position: {
                  lat: iss.latitude,
                  lng: iss.longitude
                }
              });
            }

            this.iss = iss;
            this.counter === 5 ? this.counter = 0 : this.counter += 1;
            this.marker = {
              icon: this.config.issIcon,
              position: {
                lat: +iss.latitude,
                lng: +iss.longitude
              }
            };
            this.center = {
              lat: iss.latitude,
              lng: iss.longitude
            };
          }
        }, {
          key: "savePosition",
          value: function savePosition() {
            this._dialog.open(_components_save_dialog_save_dialog_component__WEBPACK_IMPORTED_MODULE_3__["SaveDialogComponent"], {
              data: {
                iss: this.iss
              }
            });
          }
        }, {
          key: "isTest",
          value: function isTest() {
            return this.fragment === 'test';
          }
        }]);

        return MapComponent;
      }();

      MapComponent.ɵfac = function MapComponent_Factory(t) {
        return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_iss_service__WEBPACK_IMPORTED_MODULE_6__["IssService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_app_config_module__WEBPACK_IMPORTED_MODULE_1__["APP_CONFIG"]));
      };

      MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: MapComponent,
        selectors: [["app-map"]],
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], ["class", "google-map_loader", 4, "ngIf"], [1, "google-map", 3, "center", "zoom"], [3, "position", "icon", 4, "ngIf"], [1, "google-map_path"], [3, "ngModel", "ngModelChange"], ["mat-mini-fab", "", "aria-label", "Save ISS Position", "class", "google-map_button_save-pos", "matTooltip", "Save ISS Position", "matTooltipPosition", "above", 3, "click", 4, "ngIf"], [1, "google-map_loader"], [3, "position", "icon", 4, "ngFor", "ngForOf"], [3, "position", "icon"], ["mat-mini-fab", "", "aria-label", "Save ISS Position", "matTooltip", "Save ISS Position", "matTooltipPosition", "above", 1, "google-map_button_save-pos", 3, "click"]],
        template: function MapComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MapComponent_div_0_Template, 9, 7, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.apiLoaded));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_10__["GoogleMap"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_10__["MapMarker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
        styles: [".google-map {\n  width: 100%;\n  height: calc(100vh - 113px);\n  display: block;\n}\n.google-map .map-container {\n  width: 100% !important;\n  height: 100% !important;\n}\n.google-map_path {\n  position: absolute;\n  top: 60px;\n  left: 10px;\n  padding: 4px 8px;\n  background-color: white;\n  border-radius: 20px;\n}\n.google-map_button_save-pos {\n  position: absolute;\n  right: 10px;\n  top: 4px;\n  z-index: 1;\n}\n.google-map_loader {\n  background-color: white;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUFJO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQUVSO0FBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBQ0o7QUFFQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0oiLCJmaWxlIjoibWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdvb2dsZS1tYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDExM3B4KTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAubWFwLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLmdvb2dsZS1tYXBfcGF0aCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjBweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmdvb2dsZS1tYXBfYnV0dG9uX3NhdmUtcG9zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiA0cHg7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmdvb2dsZS1tYXBfbG9hZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "862v":
    /*!*****************************************!*\
      !*** ./src/app/pages/map/map.module.ts ***!
      \*****************************************/

    /*! exports provided: MapModule */

    /***/
    function v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapModule", function () {
        return MapModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _map_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./map-routing.module */
      "oLE7");
      /* harmony import */


      var _map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./map.component */
      "5T7I");
      /* harmony import */


      var src_app_shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/modules/material/material.module */
      "W/RB");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/google-maps */
      "3sZV");
      /* harmony import */


      var _components_save_dialog_save_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/save-dialog/save-dialog.component */
      "atJs");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MapModule = function MapModule() {
        _classCallCheck(this, MapModule);
      };

      MapModule.ɵfac = function MapModule_Factory(t) {
        return new (t || MapModule)();
      };

      MapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: MapModule
      });
      MapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _map_routing_module__WEBPACK_IMPORTED_MODULE_1__["MapRoutingModule"], src_app_shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientJsonpModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMapsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](MapModule, {
          declarations: [_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"], _components_save_dialog_save_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SaveDialogComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _map_routing_module__WEBPACK_IMPORTED_MODULE_1__["MapRoutingModule"], src_app_shared_modules_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientJsonpModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMapsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]
        });
      })();
      /***/

    },

    /***/
    "atJs":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/map/components/save-dialog/save-dialog.component.ts ***!
      \***************************************************************************/

    /*! exports provided: SaveDialogComponent */

    /***/
    function atJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SaveDialogComponent", function () {
        return SaveDialogComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var src_app_shared_enums_iss_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/enums/iss.enum */
      "uCdQ");
      /* harmony import */


      var src_app_shared_validators_iss_name_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/validators/iss-name.validator */
      "lHJL");
      /* harmony import */


      var src_app_store_actions_iss_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/store/actions/iss.action */
      "klS1");
      /* harmony import */


      var src_app_store_selectors_iss_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/store/selectors/iss.selectors */
      "6Fv5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_services_iss_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/iss.service */
      "P41H");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function SaveDialogComponent_mat_error_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.getErrorMessage());
        }
      }

      var SaveDialogComponent = /*#__PURE__*/function () {
        function SaveDialogComponent(data, _store, _dialogRef, _issService) {
          var _this37 = this;

          _classCallCheck(this, SaveDialogComponent);

          this.data = data;
          this._store = _store;
          this._dialogRef = _dialogRef;
          this._issService = _issService;
          this.selectedISSListSubscription = this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_store_selectors_iss_selectors__WEBPACK_IMPORTED_MODULE_6__["selectISSList"])).subscribe(function (issList) {
            _this37.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4), src_app_shared_validators_iss_name_validator__WEBPACK_IMPORTED_MODULE_4__["ISSValidators"].unicName(issList)]);
          });
        }

        _createClass(SaveDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.selectedISSListSubscription.unsubscribe();
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage() {
            if (this.name.hasError('required')) {
              return 'Field is required';
            }

            if (this.name.hasError('minlength')) {
              return 'Minimum length is 4 characters';
            }

            if (this.name.hasError('namePrefix')) {
              return 'Name should starts with: ISS';
            }

            if (this.name.hasError('unicName')) {
              return 'Name should be unic';
            }

            return '';
          }
        }, {
          key: "onSave",
          value: function onSave() {
            if (!this.name.valid) {
              this.name.markAllAsTouched();
              return;
            }

            var iss = {
              latitude: this.data.iss.latitude,
              longitude: this.data.iss.longitude,
              timestamp: this.data.iss.timestamp,
              name: this.name.value
            };

            this._store.dispatch(new src_app_store_actions_iss_action__WEBPACK_IMPORTED_MODULE_5__["AddIss"]({
              iss: iss,
              action: src_app_shared_enums_iss_enum__WEBPACK_IMPORTED_MODULE_3__["ISS_OPERATIONS"].ADD
            }));

            this._store.dispatch(new src_app_store_actions_iss_action__WEBPACK_IMPORTED_MODULE_5__["FilterIss"](this._issService.getFilter()));

            this._dialogRef.close({
              iss: iss
            });
          }
        }]);

        return SaveDialogComponent;
      }();

      SaveDialogComponent.ɵfac = function SaveDialogComponent_Factory(t) {
        return new (t || SaveDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_iss_service__WEBPACK_IMPORTED_MODULE_8__["IssService"]));
      };

      SaveDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: SaveDialogComponent,
        selectors: [["app-save-dialog"]],
        decls: 30,
        vars: 8,
        consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["appearance", "outline"], ["matInput", "", "required", "", "id", "name", 3, "formControl"], [4, "ngIf"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "id", "save-dialog_cancel"], ["mat-button", "", "cdkFocusInitial", "", "id", "save-dialog_save", 3, "click"]],
        template: function SaveDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Save ISS Position");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-dialog-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "International Space Station (");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, ") Current Location is:");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Latitude: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Longtude: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Please, enter name to save the selected position.");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Enter name");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, SaveDialogComponent_mat_error_24_Template, 2, 1, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-dialog-actions", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveDialogComponent_Template_button_click_28_listener() {
              return ctx.onSave();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](7, 5, ctx.data.iss.timestamp, "mediumTime"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.data.iss.latitude);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.data.iss.longitude);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.name.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYXZlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "lHJL":
    /*!*********************************************************!*\
      !*** ./src/app/shared/validators/iss-name.validator.ts ***!
      \*********************************************************/

    /*! exports provided: ISSValidators */

    /***/
    function lHJL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ISSValidators", function () {
        return ISSValidators;
      });

      var ISSValidators = /*#__PURE__*/function () {
        function ISSValidators() {
          _classCallCheck(this, ISSValidators);
        }

        _createClass(ISSValidators, null, [{
          key: "unicName",
          value: function unicName(issList) {
            return function (control) {
              return issList.find(function (iss) {
                return iss.name === control.value;
              }) ? {
                unicName: control.value
              } : null;
            };
          }
        }]);

        return ISSValidators;
      }();
      /***/

    },

    /***/
    "oLE7":
    /*!*************************************************!*\
      !*** ./src/app/pages/map/map-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: MapRoutingModule */

    /***/
    function oLE7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapRoutingModule", function () {
        return MapRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./map.component */
      "5T7I");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _map_component__WEBPACK_IMPORTED_MODULE_1__["MapComponent"]
      }];

      var MapRoutingModule = function MapRoutingModule() {
        _classCallCheck(this, MapRoutingModule);
      };

      MapRoutingModule.ɵfac = function MapRoutingModule_Factory(t) {
        return new (t || MapRoutingModule)();
      };

      MapRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: MapRoutingModule
      });
      MapRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MapRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "q82f":
    /*!***************************************************!*\
      !*** ./src/app/pages/map/services/map.service.ts ***!
      \***************************************************/

    /*! exports provided: MapService */

    /***/
    function q82f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapService", function () {
        return MapService;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var MapService = /*#__PURE__*/function () {
        function MapService(_httpClient, config) {
          _classCallCheck(this, MapService);

          this._httpClient = _httpClient;
          this.config = config;
        }

        _createClass(MapService, [{
          key: "sendGoogleAPI",
          value: function sendGoogleAPI() {
            return this._httpClient.jsonp(this.config.googleApiUrl, 'callback').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
              return true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(false);
            }));
          }
        }]);

        return MapService;
      }();

      MapService.ɵfac = function MapService_Factory(t) {
        return new (t || MapService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_app_config_module__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"]));
      };

      MapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: MapService,
        factory: MapService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-map-map-module-es5.js.map