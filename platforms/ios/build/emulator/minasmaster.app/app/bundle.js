module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = global["webpackJsonp"] = global["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./main.ts","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../node_modules/css-loader/index.js?!../node_modules/nativescript-theme-core/css/core.light.css"), "");

// module
exports.push([module.i, "/*\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. For a full list of class names in the theme\nrefer to http://docs.nativescript.org/ui/theme.\n*/\n", ""]);

// exports


/***/ }),

/***/ "./app/CarritoCompra/CarritoCompra.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/CarritoCompra/CarritoCompra.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarritoCompraComponent", function() { return CarritoCompraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");


var CarritoCompraComponent = /** @class */ (function () {
    function CarritoCompraComponent(router) {
        this.router = router;
    }
    CarritoCompraComponent.prototype.ngOnInit = function () {
    };
    CarritoCompraComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-details",
            template: __webpack_require__("./app/CarritoCompra/CarritoCompra.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CarritoCompraComponent);
    return CarritoCompraComponent;
}());



/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _item_items_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/item/items.component.ts");
/* harmony import */ var _item_item_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/item/item-detail.component.ts");
/* harmony import */ var _bus_bus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/bus/bus.component.ts");





var routes = [
    { path: "", redirectTo: "/bus", pathMatch: "full" },
    { path: "bus", component: _bus_bus_component__WEBPACK_IMPORTED_MODULE_4__["BusComponent"] },
    { path: "item/:id", component: _item_item_detail_component__WEBPACK_IMPORTED_MODULE_3__["ItemDetailComponent"] },
    { path: "item", component: _item_items_component__WEBPACK_IMPORTED_MODULE_2__["ItemsComponent"] },
    { path: "bus", component: _bus_bus_component__WEBPACK_IMPORTED_MODULE_4__["BusComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- https://docs.nativescript.org/angular/core-concepts/angular-navigation.html#page-router-outlet -->\n<page-router-outlet></page-router-outlet>\n"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __webpack_require__("./app/app.component.html"),
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CarritoCompra_CarritoCompra_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/CarritoCompra/CarritoCompra.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _item_items_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/item/items.component.ts");
/* harmony import */ var _item_item_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/item/item-detail.component.ts");
/* harmony import */ var _bus_bus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/bus/bus.component.ts");








// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the H ttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _item_items_component__WEBPACK_IMPORTED_MODULE_5__["ItemsComponent"],
                _item_item_detail_component__WEBPACK_IMPORTED_MODULE_6__["ItemDetailComponent"],
                _bus_bus_component__WEBPACK_IMPORTED_MODULE_7__["BusComponent"],
                _CarritoCompra_CarritoCompra_component__WEBPACK_IMPORTED_MODULE_2__["CarritoCompraComponent"]
            ],
            providers: [],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/bus/bus.component.html":
/***/ (function(module, exports) {

module.exports = "<Page xlmns=\"http://schemas.nativescript.org/tns.xsd\">\n        <ScrollView>\n                <GridLayout  columns=\"*\" rows=\"auto,auto,auto\"   width=\"100%\"  backgroundColor=\"lightgray\">\n\n                        <GridLayout col=\"0\" row=\"0\" class=\"grid\"   *ngIf=\"columnaniv1==4 \" verticalAlignment=\"top\"  columns=\"auto,auto,auto,auto\" rows=\"auto,auto,auto,auto\" backgroundColor=\"lightgray\" border=\"100\" border-color=\"blue\">\n                                <template *ngFor=\"let asiento of Asientos;let indice = index\">\n                                        <template *ngIf=\"asiento.nivel==1\">\n                                                <Image class=\"Img\" (tap)=\"rabus(asiento,indice)\" [col]=\"asiento.columna\" [row]=\"asiento.fila\" [src]=\"asiento.urlimage\"  class=\"img-rounded p-l-15 p-r-15 p-t-15\" [width]=\"anchoImagenniv1\" [height]=\"altoImagenniv1\" ></Image>\n                                                <Image [col]=\"2\" [row]=\"asiento.fila\" src=\"~/images/clg.png\"  class=\"img-rounded p-l-15 p-r-15 p-t-15\" width=\"40\" height=\"40\"></Image>\n                                        </template>              \n                                </template>\n                        </GridLayout>\n\n                        <GridLayout col=\"0\" row=\"0\" class=\"grid\"    *ngIf=\"columnaniv1==5\" verticalAlignment=\"top\"  columns=\"auto,auto,auto,auto,auto\" rows=\"auto,auto,auto,auto\" backgroundColor=\"lightgray\" border=\"100\" border-color=\"blue\">\n                                <template *ngFor=\"let asiento of Asientos;let indice = index\">\n                                        <template *ngIf=\"asiento.nivel==1\">\n                                                <Image class=\"Img\" (tap)=\"rabus(asiento,indice)\" [col]=\"asiento.columna\" [row]=\"asiento.fila\" [src]=\"asiento.urlimage\"   class=\"img-rounded p-l-15 p-r-15 p-t-15\"   [width]=\"anchoImagenniv1\" [height]=\"altoImagenniv1\" ></Image>\n                                                <Image [col]=\"2\" [row]=\"asiento.fila\" src=\"~/images/clg.png\"  class=\"img-rounded p-l-15 p-r-15 p-t-15\" width=\"40\" height=\"40\" ></Image>\n                                                <Image [col]=\"3\" [row]=\"asiento.fila\" src=\"~/images/clg.png\"  class=\"img-rounded p-l-15 p-r-15 p-t-15\" width=\"40\" height=\"40\"></Image>\n                                        </template>\n                                </template>\n                        </GridLayout>\n\n                        <GridLayout col=\"0\" row=\"1\" class=\"grid\"   *ngIf=\"columnaniv2==4\" verticalAlignment=\"top\"  columns=\"auto,auto,auto,auto\" rows=\"auto,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto\" backgroundColor=\"lightgray\" border=\"100\" border-color=\"blue\">\n                                <template *ngFor=\"let asiento of Asientos;let indice = index\">\n                                        <template *ngIf=\"asiento.nivel==2\">\n                                                <Image class=\"Img\" (tap)=\"rabus(asiento,indice)\" [col]=\"asiento.columna\"  [row]=\"asiento.fila\" [src]=\"asiento.urlimage\" class=\"img-rounded p-l-15 p-r-15 p-t-15\" [width]=\"anchoImagenniv2\" [height]=\"altoImagenniv2\" ></Image>\n                                                <Image [col]=\"2\" [row]=\"asiento.fila\" src=\"~/images/clg.png\"  class=\"img-rounded p-l-15 p-r-15 p-t-15\" width=\"40\" height=\"40\" ></Image>\n                                        </template>\n                                </template>\n                        </GridLayout>  \n\n                        <GridLayout col=\"0\" row=\"1\" class=\"grid\"   *ngIf=\"columnaniv2==5 \" verticalAlignment=\"top\"  columns=\"auto,auto,auto,auto,auto\" rows=\"auto,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto\" backgroundColor=\"lightgray\" border=\"100\" border-color=\"blue\">\n                                <template *ngFor=\"let asiento of Asientos;let indice = index\">\n                                        <template *ngIf=\"asiento.nivel==2\">\n                                                <Image class=\"Img\" (tap)=\"rabus(asiento,indice)\" [col]=\"asiento.columna\" [row]=\"asiento.fila\" [src]=\"asiento.urlimage\" class=\"img-rounded p-l-15 p-r-15 p-t-15\" [width]=\"anchoImagenniv2\" [height]=\"altoImagenniv2\" ></Image>\n                                                <Image [col]=\"2\" [row]=\"asiento.fila\" src=\"~/images/clg.png\"  class=\"img-rounded p-l-15 p-r-15 p-t-15\" width=\"20\" height=\"20\"></Image>\n                                        </template>     \n                                </template>\n                        </GridLayout> \n\n                        <Button col=\"0\" row=\"2\" text=\"Log In\" class=\"btn btn-primary\" ></Button>\n\n                </GridLayout>\n        </ScrollView>\n                        \n</Page>\n"

/***/ }),

/***/ "./app/bus/bus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusComponent", function() { return BusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var tns_core_modules_platform_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var tns_core_modules_platform_platform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform_platform__WEBPACK_IMPORTED_MODULE_2__);



var BusComponent = /** @class */ (function () {
    function BusComponent(router) {
        this.router = router;
        this.columnaniv1 = 4;
        this.columnaniv2 = 5;
        this.urlasientoniv2 = "";
        this.urlasientoniv1 = "";
        this.Asientos = [{ nivel: 1, fila: 0, columna: 0, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 1, fila: 0, columna: 1, tipo: 'A', disponibilidad: 0, urlimage: "" },
            { nivel: 1, fila: 0, columna: 4, tipo: 'A', disponibilidad: 0, urlimage: "" },
            { nivel: 1, fila: 1, columna: 0, tipo: 'A', disponibilidad: 0, urlimage: "" },
            { nivel: 1, fila: 1, columna: 1, tipo: 'A', disponibilidad: 0, urlimage: "" },
            { nivel: 1, fila: 1, columna: 4, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 1, fila: 2, columna: 0, tipo: 'A', disponibilidad: 0, urlimage: "" },
            { nivel: 1, fila: 2, columna: 1, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 1, fila: 2, columna: 4, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 1, fila: 3, columna: 0, tipo: 'A', disponibilidad: 0, urlimage: "" },
            { nivel: 1, fila: 3, columna: 1, tipo: 'A', disponibilidad: 0, urlimage: "" },
            { nivel: 1, fila: 3, columna: 4, tipo: 'A', disponibilidad: 0, urlimage: "" },
            { nivel: 2, fila: 0, columna: 0, tipo: 'A', disponibilidad: 0, urlimage: "" },
            { nivel: 2, fila: 0, columna: 1, tipo: 'A', disponibilidad: 0, urlimage: "" },
            { nivel: 2, fila: 0, columna: 3, tipo: 'A', disponibilidad: 0, urlimage: "" },
            { nivel: 2, fila: 0, columna: 4, tipo: 'A', disponibilidad: 0, urlimage: "" },
            { nivel: 2, fila: 1, columna: 0, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 1, columna: 1, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 1, columna: 3, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 1, columna: 4, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 2, columna: 0, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 2, columna: 1, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 2, columna: 3, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 2, columna: 4, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 3, columna: 0, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 3, columna: 1, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 3, columna: 3, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 3, columna: 4, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 4, columna: 0, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 4, columna: 1, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 4, columna: 3, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 4, columna: 4, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 5, columna: 0, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 5, columna: 1, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 5, columna: 3, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 5, columna: 4, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 6, columna: 0, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 6, columna: 1, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 6, columna: 3, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 6, columna: 4, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 7, columna: 0, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 7, columna: 1, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 7, columna: 3, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 7, columna: 4, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 8, columna: 0, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 8, columna: 1, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 8, columna: 3, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 8, columna: 4, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 9, columna: 0, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 9, columna: 1, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 9, columna: 3, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 9, columna: 4, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 10, columna: 0, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 10, columna: 1, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 10, columna: 3, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 10, columna: 4, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 11, columna: 0, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 11, columna: 1, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 11, columna: 3, tipo: 'A', disponibilidad: 1, urlimage: "" },
            { nivel: 2, fila: 11, columna: 4, tipo: 'A', disponibilidad: 1, urlimage: "" },
        ];
        this.Asientos_sel = [];
    }
    BusComponent.prototype.ngOnInit = function () {
        this.anchoPantalla = tns_core_modules_platform_platform__WEBPACK_IMPORTED_MODULE_2__["screen"].mainScreen.widthDIPs;
        if (320 >= tns_core_modules_platform_platform__WEBPACK_IMPORTED_MODULE_2__["screen"].mainScreen.widthDIPs) {
        }
        else if (320 < tns_core_modules_platform_platform__WEBPACK_IMPORTED_MODULE_2__["screen"].mainScreen.widthDIPs) {
        }
        console.log(tns_core_modules_platform_platform__WEBPACK_IMPORTED_MODULE_2__["screen"].mainScreen.heightDIPs);
        this.ponerImagen2();
    };
    BusComponent.prototype.rabus = function (asiento, indice) {
        if (asiento.disponibilidad == 0) {
            if (asiento.urlimage == "~/images/asiento4_sel.png") {
                this.index = this.Asientos_sel.findIndex(function (x) { return x.columna == asiento.columna && x.fila == asiento.fila; });
                this.Asientos_sel[this.index].remove;
                this.Asientos[indice].urlimage = "~/images/asiento4.png";
            }
            else if (asiento.urlimage == "~/images/asiento_sel.png") {
                this.index = this.Asientos_sel.findIndex(function (x) { return x.columna == asiento.columna && x.fila == asiento.fila; });
                this.Asientos_sel[this.index].remove;
                this.Asientos[indice].urlimage = "~/images/asiento.png";
            }
            else if (asiento.urlimage == "~/images/asiento4.png") {
                this.Asientos_sel.push(asiento);
                this.Asientos[indice].urlimage = "~/images/asiento4_sel.png";
            }
            else if (asiento.urlimage == "~/images/asiento.png") {
                this.Asientos_sel.push(asiento);
                this.Asientos[indice].urlimage = "~/images/asiento_sel.png";
            }
            console.log(this.Asientos_sel);
        }
    };
    BusComponent.prototype.obtenercol1 = function () {
        return this.columnaniv1;
    };
    BusComponent.prototype.obtenercol2 = function () {
        return this.columnaniv2;
    };
    BusComponent.prototype.ponerImagen2 = function () {
        for (var i in this.Asientos) {
            if (this.obtenercol1() == 4 && this.Asientos[i].nivel == 1) {
                if (320 >= tns_core_modules_platform_platform__WEBPACK_IMPORTED_MODULE_2__["screen"].mainScreen.widthDIPs) {
                    this.altoImagenniv1 = 60;
                    this.anchoImagenniv1 = 60;
                }
                else if (320 < tns_core_modules_platform_platform__WEBPACK_IMPORTED_MODULE_2__["screen"].mainScreen.widthDIPs) {
                    this.altoImagenniv1 = 80;
                    this.anchoImagenniv1 = 80;
                }
                if (this.Asientos[i].disponibilidad == 0) {
                    this.Asientos[i].urlimage = "~/images/asiento4.png";
                }
                else if (this.Asientos[i].disponibilidad == 1) {
                    this.Asientos[i].urlimage = "~/images/asiento4_reservado.png";
                }
            }
            else if (this.obtenercol1() == 5 && this.Asientos[i].nivel == 1) {
                if (320 >= tns_core_modules_platform_platform__WEBPACK_IMPORTED_MODULE_2__["screen"].mainScreen.widthDIPs) {
                    this.altoImagenniv1 = 60;
                    this.anchoImagenniv1 = 60;
                }
                else if (320 < tns_core_modules_platform_platform__WEBPACK_IMPORTED_MODULE_2__["screen"].mainScreen.widthDIPs) {
                    this.altoImagenniv1 = 60;
                    this.anchoImagenniv1 = 60;
                }
                if (this.Asientos[i].disponibilidad == 0) {
                    this.Asientos[i].urlimage = "~/images/asiento.png";
                }
                else if (this.Asientos[i].disponibilidad == 1) {
                    this.Asientos[i].urlimage = "~/images/asiento_reservado.png";
                }
            }
            if (this.obtenercol2() == 4 && this.Asientos[i].nivel == 2) {
                if (320 >= tns_core_modules_platform_platform__WEBPACK_IMPORTED_MODULE_2__["screen"].mainScreen.widthDIPs) {
                    this.altoImagenniv2 = 60;
                    this.anchoImagenniv2 = 60;
                }
                else if (320 < tns_core_modules_platform_platform__WEBPACK_IMPORTED_MODULE_2__["screen"].mainScreen.widthDIPs) {
                    this.altoImagenniv2 = 75;
                    this.anchoImagenniv2 = 75;
                }
                if (this.Asientos[i].disponibilidad == 0) {
                    this.Asientos[i].urlimage = "~/images/asiento4.png";
                }
                else if (this.Asientos[i].disponibilidad == 1) {
                    this.Asientos[i].urlimage = "~/images/asiento4_reservado.png";
                }
            }
            else if (this.obtenercol2() == 5 && this.Asientos[i].nivel == 2) {
                if (320 >= tns_core_modules_platform_platform__WEBPACK_IMPORTED_MODULE_2__["screen"].mainScreen.widthDIPs) {
                    this.altoImagenniv2 = 50;
                    this.anchoImagenniv2 = 50;
                }
                else if (320 < tns_core_modules_platform_platform__WEBPACK_IMPORTED_MODULE_2__["screen"].mainScreen.widthDIPs) {
                    this.altoImagenniv2 = 65;
                    this.anchoImagenniv2 = 65;
                }
                if (this.Asientos[i].disponibilidad == 0) {
                    this.Asientos[i].urlimage = "~/images/asiento.png";
                }
                else if (this.Asientos[i].disponibilidad == 1) {
                    this.Asientos[i].urlimage = "~/images/asiento5_reservado.png";
                }
            }
        }
    };
    BusComponent.prototype.iraCarritoCompra = function () {
        this.router.navigate(['/CarritoCompra', this.Asientos_sel]);
    };
    BusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-details",
            template: __webpack_require__("./app/bus/bus.component.html"),
            styles: [__webpack_require__("./app/bus/bus.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BusComponent);
    return BusComponent;
}());



/***/ }),

/***/ "./app/bus/bus.css":
/***/ (function(module, exports) {

module.exports = ".grid{\n    border-color: blue;\n    border-width: 3px;\n    margin:15%;\n    margin-top:10px;\n    width:70%;\n}\n"

/***/ }),

/***/ "./app/item/item-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Details\" class=\"action-bar\"></ActionBar>\n<TextField hint=\"Enter date\" \n           [text]='birthDate | date:\"MM/dd/yy\"' \n           secure=\"false\"\n           keyboardType=\"datetime\"\n           returnKeyType=\"done\" \n           (returnPress)=\"onReturnPress($event)\"\n           autocorrect=\"false\"\n           maxLength=\"10\"\n           (focus)=\"onFocus($event)\" \n           (blur)=\"onBlur($event)\" \n           class=\"input input-border\"></TextField>"

/***/ }),

/***/ "./app/item/item-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailComponent", function() { return ItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/item/item.service.ts");



var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(itemService, route) {
        this.itemService = itemService;
        this.route = route;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);
    };
    ItemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-details",
            template: __webpack_require__("./app/item/item-detail.component.html"),
        }),
        __metadata("design:paramtypes", [_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());



/***/ }),

/***/ "./app/item/item.css":
/***/ (function(module, exports) {

module.exports = ".page {\n    align-items: center;\n    flex-direction: column;\n  }\n  .form {\n    margin-left: 30;\n    margin-right: 30;\n    flex-grow: 2;\n    vertical-align: middle;\n  }\n"

/***/ }),

/***/ "./app/item/item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var ItemService = /** @class */ (function () {
    function ItemService() {
        this.items = new Array({ id: 1, name: "Ter Stegen", role: "Goalkeeper" }, { id: 3, name: "Piqué", role: "Defender" }, { id: 4, name: "I. Rakitic", role: "Midfielder" }, { id: 5, name: "Sergio", role: "Midfielder" }, { id: 6, name: "Denis Suárez", role: "Midfielder" }, { id: 7, name: "Arda", role: "Midfielder" }, { id: 8, name: "A. Iniesta", role: "Midfielder" }, { id: 9, name: "Suárez", role: "Forward" }, { id: 10, name: "Messi", role: "Forward" }, { id: 11, name: "Neymar", role: "Forward" }, { id: 12, name: "Rafinha", role: "Midfielder" }, { id: 13, name: "Cillessen", role: "Goalkeeper" }, { id: 14, name: "Mascherano", role: "Defender" }, { id: 17, name: "Paco Alcácer", role: "Forward" }, { id: 18, name: "Jordi Alba", role: "Defender" }, { id: 19, name: "Digne", role: "Defender" }, { id: 20, name: "Sergi Roberto", role: "Midfielder" }, { id: 21, name: "André Gomes", role: "Midfielder" }, { id: 22, name: "Aleix Vidal", role: "Midfielder" }, { id: 23, name: "Umtiti", role: "Defender" }, { id: 24, name: "Mathieu", role: "Defender" }, { id: 25, name: "Masip", role: "Goalkeeper" });
    }
    ItemService.prototype.getItems = function () {
        return this.items;
    };
    ItemService.prototype.getItem = function (id) {
        return this.items.filter(function (item) { return item.id === id; })[0];
    };
    ItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        })
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "./app/item/items.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\nThe template defines the view of the component - what is actually rendered.\nIn NativeScript applications the template is defined with XML using NativeScript UI elements.\nIt is different from HTML. So instead of <input>, <span>, <div> etc. - we have <TextField>, <Label> and layouts.\nThe important thing is that although the elements are different - all of the Angular’s template syntax works exactly the same.\nSo you can still use template expressions, bindings, templates as well as all the built-in directives.\n-->\n\n<!--\nThe ActionBar is the NativeScript common abstraction over the Android ActionBar and iOS NavigationBar.\nhttp://docs.nativescript.org/ui/action-bar\n-->\n<ActionBar title=\"My App\" class=\"action-bar\">\n</ActionBar>\n\n<!--\nThe StackLayout stacks UI components on the screen — either vertically or horizontally.\nIn this case, the StackLayout does vertical stacking; you can change the stacking to\nhorizontal by applying a orientation=\"horizontal\" attribute to the <StackLayout> element.\nYou can learn more about NativeScript layouts at https://docs.nativescript.org/ui/layout-containers.\n\nThese components make use of several CSS class names that are part of the NativeScript\ncore theme, such as p-20, btn, h2, and list-group. You can view a full list of the\nclass names available for styling your app at https://docs.nativescript.org/ui/theme.\n-->\n<FlexboxLayout class=\"page\">\n    <StackLayout class=\"form\">\n            <Image src=\"~/images/logotipo-cruz-del-sur.png\" horizontalAlignment=\"center\" stretch=\"none\" class=\"img-rounded p-l-15 p-r-15 p-t-15\"></Image>\n        <StackLayout class=\"input-field\">\n                <TextField #secondTx hint=\"Enter some text and click the button\" autocorrect=\"false\" returnKeyType=\"done\" (returnPress)=\"submit(secondTx.text)\"\n                class=\"input input-border\"></TextField>\n        </StackLayout>\n        <StackLayout class=\"input-field\">\n                <TextField #secondTx hint=\"Enter some text and click the button\" autocorrect=\"false\" returnKeyType=\"done\" (returnPress)=\"submit(secondTx.text)\"\n                class=\"input input-border\"></TextField>\n        </StackLayout>\n        <Button text=\"Log In\" class=\"btn btn-primary\" (tap)=\"irabus()\"></Button>\n    </StackLayout>\n</FlexboxLayout>"

/***/ }),

/***/ "./app/item/items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/item/item.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");



var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService, router) {
        this.itemService = itemService;
        this.router = router;
    }
    ItemsComponent.prototype.ngOnInit = function () {
    };
    ItemsComponent.prototype.irabus = function () {
        this.router.navigate(['/heroe']);
    };
    ItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-items",
            template: __webpack_require__("./app/item/items.component.html"),
            styles: [__webpack_require__("./app/item/item.css")]
        }),
        __metadata("design:paramtypes", [_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-angular/platform.js");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        // this import should be first in order to load some required settings (like globals and reflect-metadata)


// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
Object(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"main.js","android":{"v8Flags":"--expose_gc"}};

/***/ })

/******/ });