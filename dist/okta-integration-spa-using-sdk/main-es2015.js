(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <meta name=\"description\" content=\"\">\n  <meta name=\"author\" content=\"\">\n\n  <title>Heroic Features - Start Bootstrap Template</title>\n  <base href=\"/\">\n\n</head>\n\n<body>\n\n  <!-- Navigation -->\n  <app-menu></app-menu>\n\n  <router-outlet></router-outlet>\n\n  <!-- Footer -->\n  <footer class=\"py-5 bg-dark\" style=\"background-color: #02305f !important\">\n    <div class=\"container\">\n      <p class=\"m-0 text-center text-white\">Copyright &copy; Your Website 2020</p>\n    </div>\n    <!-- /.container -->\n  </footer>\n\n\n</body>\n\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\n<div class=\"container\">\n    <!-- Jumbotron Header -->\n    <div style=\"padding-top: 100px;\">\n        <header class=\"jumbotron my-4\">\n            <h1 class=\"display-3\" *ngIf=\"!isAuthenticated\">Please click below to Login</h1>\n            <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt\n                possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam\n                repellat.</p>\n            <a href=\"#\" *ngIf=\"!isAuthenticated\" class=\"btn btn-primary btn-lg\"\n                (click)=\"oktaAuth.loginRedirect('dashboard')\">Login</a>\n        </header>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\" style=\"background-color: #02305f !important\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\"><img src=\"/assets/kpmg-logo.png\" height=\"30px\" width=\"60px\" /></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n      aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" *ngIf=\"isAuthenticated\">Audit</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" *ngIf=\"isAuthenticated\">Tax</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" *ngIf=\"isAuthenticated\">Admin</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" *ngIf=\"isAuthenticated\" (click)=\"logout()\" href=\"#\">Logout</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"!isAuthenticated\">\n          <a class=\"nav-link\" href=\"#\" (click)=\"oktaAuth.loginRedirect('dashboard')\">{{isAuthenticated?'Logout':'Login'}}</a>\n        </li>\n\n        <!-- <div *ngIf=\"isAuthenticated\">\n            <button (click)=\"oktaAuth.logout()\">Logout</button>\n          </div> -->\n\n        <!-- <div *ngIf=\"!isAuthenticated\">\n            <button (click)=\"oktaAuth.loginRedirect()\">Login</button>\n          </div> -->\n      </ul>\n      \n\n      \n    </div>\n  </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/okta-initiated-login/okta-initiated-login.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/okta-initiated-login/okta-initiated-login.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets-component/widgets-component.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/widgets-component/widgets-component.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Features -->\n<div class=\"container\">\n\n    <div class=\"row text-center\" style=\"padding-top: 25px;\">\n        <div style=\"padding-top: 50px;\">\n            <header class=\"jumbotron my-4\">\n                <h6 class=\"display-3\">Welcome {{name}} to the Okta-SPA Reference Integration</h6>\n                <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo\n                    sunt\n                    possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat\n                    numquam\n                    repellat.</p>                \n            </header>\n        </div>\n        <div class=\"col-lg-3 col-md-6 mb-4\">\n            <div class=\"card h-100\">\n                <img class=\"card-img-top\" src=\"http://placehold.it/500x325\" alt=\"\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Audit Card 1</h4>\n                    <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse\n                        necessitatibus\n                        neque.</p>\n                </div>\n                <div class=\"card-footer\">\n                    <a href=\"#\" class=\"btn btn-primary\">Find Out More!</a>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-lg-3 col-md-6 mb-4\">\n            <div class=\"card h-100\">\n                <img class=\"card-img-top\" src=\"http://placehold.it/500x325\" alt=\"\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Audit Card 2</h4>\n                    <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni\n                        sapiente,\n                        tempore debitis beatae culpa natus architecto.</p>\n                </div>\n                <div class=\"card-footer\">\n                    <a href=\"#\" class=\"btn btn-primary\">Find Out More!</a>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-lg-3 col-md-6 mb-4\">\n            <div class=\"card h-100\">\n                <img class=\"card-img-top\" src=\"http://placehold.it/500x325\" alt=\"\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Tax Card 1</h4>\n                    <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse\n                        necessitatibus\n                        neque.</p>\n                </div>\n                <div class=\"card-footer\">\n                    <a href=\"#\" class=\"btn btn-primary\">Find Out More!</a>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-lg-3 col-md-6 mb-4\">\n            <div class=\"card h-100\">\n                <img class=\"card-img-top\" src=\"http://placehold.it/500x325\" alt=\"\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Tax Card 2</h4>\n                    <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni\n                        sapiente,\n                        tempore debitis beatae culpa natus architecto.</p>\n                </div>\n                <div class=\"card-footer\">\n                    <a href=\"#\" class=\"btn btn-primary\">Find Out More!</a>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n<!-- /.row -->");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/fesm2015/okta-angular.js");
/* harmony import */ var _widgets_component_widgets_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgets-component/widgets-component.component */ "./src/app/widgets-component/widgets-component.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.guard.service */ "./src/app/auth.guard.service.ts");
/* harmony import */ var _okta_initiated_login_okta_initiated_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./okta-initiated-login/okta-initiated-login.component */ "./src/app/okta-initiated-login/okta-initiated-login.component.ts");








const routes = [{
        path: 'implicit/callback',
        component: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_3__["OktaCallbackComponent"]
    }, {
        path: 'dashboard',
        component: _widgets_component_widgets_component_component__WEBPACK_IMPORTED_MODULE_4__["WidgetsComponentComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
        path: 'login',
        component: _okta_initiated_login_okta_initiated_login_component__WEBPACK_IMPORTED_MODULE_7__["OktaInitiatedLoginComponent"]
    }, {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/fesm2015/okta-angular.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);





let AppComponent = class AppComponent {
    constructor(oktaAuth) {
        this.oktaAuth = oktaAuth;
        this.title = 'okta-integration-spa-using-okta-sdk-library';
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isAuthenticated = yield this.oktaAuth.isAuthenticated();
            this.user = yield this.oktaAuth.getUser();
            this.token = (yield this.oktaAuth.getAccessToken());
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(this.token)) {
                var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_4__(this.token.toString());
                console.log(decoded);
            }
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(this.user)) {
                this.name = this.user.name;
            }
            this.oktaAuth.$authenticationState.subscribe((isAuthenticated) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.isAuthenticated = isAuthenticated;
                this.user = yield this.oktaAuth.getUser();
                this.name = this.user.name;
                this.token = (yield this.oktaAuth.getAccessToken());
                var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_4__(this.token.toString());
                console.log(decoded);
            }));
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__["OktaAuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/fesm2015/okta-angular.js");
/* harmony import */ var _widgets_component_widgets_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgets-component/widgets-component.component */ "./src/app/widgets-component/widgets-component.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
/* harmony import */ var _okta_initiated_login_okta_initiated_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./okta-initiated-login/okta-initiated-login.component */ "./src/app/okta-initiated-login/okta-initiated-login.component.ts");











const config = {
    issuer: _config__WEBPACK_IMPORTED_MODULE_9__["globalConfig"].issuer,
    redirectUri: _config__WEBPACK_IMPORTED_MODULE_9__["globalConfig"].redirectUri,
    clientId: _config__WEBPACK_IMPORTED_MODULE_9__["globalConfig"].clientId,
    scopes: _config__WEBPACK_IMPORTED_MODULE_9__["globalConfig"].scopes
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _widgets_component_widgets_component_component__WEBPACK_IMPORTED_MODULE_6__["WidgetsComponentComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _okta_initiated_login_okta_initiated_login_component__WEBPACK_IMPORTED_MODULE_10__["OktaInitiatedLoginComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _okta_okta_angular__WEBPACK_IMPORTED_MODULE_5__["OktaAuthModule"].initAuth(config)
        ],
        providers: [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_5__["OktaAuthService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth.guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/fesm2015/okta-angular.js");




let AuthGuard = class AuthGuard {
    constructor(oktaAuthService, router) {
        this.oktaAuthService = oktaAuthService;
        this.router = router;
    }
    canActivate(route, state) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('checking isAuthenticated');
            console.log(yield this.oktaAuthService.isAuthenticated());
            if (yield this.oktaAuthService.isAuthenticated()) {
                return true;
            }
            this.router.navigate(['/home']);
            return false;
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_3__["OktaAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: globalConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalConfig", function() { return globalConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const globalConfig = {
    issuer: 'https://kpmganz.oktapreview.com/oauth2/default',
    redirectUri: window.location.origin + '/implicit/callback',
    clientId: '0oaprfwc35y4vAiUQ0h7',
    scopes: ['openid profile email kpmg_scope'],
    logOutRedirectionUrl: window.location.origin
};


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/fesm2015/okta-angular.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HomeComponent = class HomeComponent {
    constructor(oktaAuth, route) {
        this.oktaAuth = oktaAuth;
        this.route = route;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.user = yield this.oktaAuth.getUser();
            this.isAuthenticated = yield this.oktaAuth.isAuthenticated();
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(this.user)) {
                this.name = this.user.name;
            }
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__["OktaAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ----------------------------------\r\nCss Profile Edit Dropdown\r\nAuthor: iModDesign\r\nVersion: 1.0\r\n------------------------------------ */\r\nbody {\r\n\tbackground:#222;\r\n}\r\nul, li {\r\n\tlist-style:none;\r\n\tpadding:0;\r\n\tmargin:0;\r\n}\r\na {text-decoration:none;}\r\n.profile-wrapper {\r\n\twidth:200px;\r\n\tposition:relative;\r\n\tmargin:50px auto;\r\n}\r\n.profile-wrapper::after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttop: 20px;\r\n\tright: 10px;\r\n\tborder-color: #333 transparent transparent;\r\n\tborder-width: 6px;\r\n\tborder-style: solid;\r\n}\r\n.profile-wrapper::before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttop: 20px;\r\n\tright: 10px;\r\n\tborder-color: #eee transparent transparent;\r\n\tborder-width: 6px;\r\n\tborder-style: solid;\r\n}\r\n.profile-wrapper:hover::after {\r\n\tborder-color: #111 transparent transparent;\t\r\n}\r\n.profile {\r\n\tpadding:10px;\r\n\tborder:1px solid #000;\r\n\tborder-radius:3px;\r\n\tbox-shadow:0 1px 0 #555 inset, 0 1px 7px #111;\r\n\tbackground:-webkit-linear-gradient(#222, #111);\r\n}\r\n.profile:hover {\r\n\tcursor:pointer;\r\n\tbackground:-webkit-linear-gradient(#1f1f1f, #0a0a0a);\r\n}\r\n.profile .name {\r\n\tfont-size:12px;\r\n\tcolor:#fff;\r\n\tline-height:26px;\r\n\tmargin-left:10px;\r\n}\r\n.profile .name:hover {\r\n\tcolor:#0088cc;\r\n}\r\n.profile img {\r\n\twidth:25px;\r\n\tdisplay:inline;\r\n\tfloat:left;\r\n\tborder:1px solid #111;\r\n\tborder-radius:3px;\r\n\tbox-shadow:0 0 3px rgba(0, 0, 0, 0.5) inset;\r\n}\r\n/* hide menu */\r\n.menu {\r\n\tdisplay:none;\r\n\tclear:both;\r\n\tmargin:20px 0 0 0;\r\n}\r\n.menu li {\r\n\tfont-size:12px;\r\n\tmargin:0;\r\n  padding: 10px 4px;\r\n}\r\n.menu li a {\r\n\tcolor:#555;\r\n}\r\n.menu li:hover > a{\r\n\tcolor:#eee;\r\n}\r\n.menu li:hover{\r\n\tborder-left: 1px solid #111;\r\n  border-right: 1px solid #222;\r\n  border-bottom: 1px solid #222;\r\n  border-top: 1px solid #111;\r\n  border-radius: 3px;\r\n}\r\n/* hover profile show menu */\r\n.profile:hover .menu {\r\n\tdisplay:block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7c0NBSXNDO0FBQ3RDO0NBQ0MsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsZUFBZTtDQUNmLFNBQVM7Q0FDVCxRQUFRO0FBQ1Q7QUFDQSxHQUFHLG9CQUFvQixDQUFDO0FBRXhCO0NBQ0MsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFdBQVc7Q0FDWCwwQ0FBMEM7Q0FDMUMsaUJBQWlCO0NBQ2pCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsV0FBVztDQUNYLDBDQUEwQztDQUMxQyxpQkFBaUI7Q0FDakIsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQywwQ0FBMEM7QUFDM0M7QUFFQTtDQUNDLFlBQVk7Q0FDWixxQkFBcUI7Q0FDckIsaUJBQWlCO0NBQ2pCLDZDQUE2QztDQUM3Qyw4Q0FBOEM7QUFDL0M7QUFDQTtDQUNDLGNBQWM7Q0FDZCxvREFBb0Q7QUFDckQ7QUFDQTtDQUNDLGNBQWM7Q0FDZCxVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxVQUFVO0NBQ1YsY0FBYztDQUNkLFVBQVU7Q0FDVixxQkFBcUI7Q0FDckIsaUJBQWlCO0NBQ2pCLDJDQUEyQztBQUM1QztBQUVBLGNBQWM7QUFDZDtDQUNDLFlBQVk7Q0FDWixVQUFVO0NBQ1YsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsUUFBUTtFQUNQLGlCQUFpQjtBQUNuQjtBQUNBO0NBQ0MsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxVQUFVO0FBQ1g7QUFFQTtDQUNDLDJCQUEyQjtFQUMxQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7QUFFQSw0QkFBNEI7QUFDNUI7Q0FDQyxhQUFhO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQ3NzIFByb2ZpbGUgRWRpdCBEcm9wZG93blxyXG5BdXRob3I6IGlNb2REZXNpZ25cclxuVmVyc2lvbjogMS4wXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5ib2R5IHtcclxuXHRiYWNrZ3JvdW5kOiMyMjI7XHJcbn1cclxudWwsIGxpIHtcclxuXHRsaXN0LXN0eWxlOm5vbmU7XHJcblx0cGFkZGluZzowO1xyXG5cdG1hcmdpbjowO1xyXG59XHJcbmEge3RleHQtZGVjb3JhdGlvbjpub25lO31cclxuXHJcbi5wcm9maWxlLXdyYXBwZXIge1xyXG5cdHdpZHRoOjIwMHB4O1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdG1hcmdpbjo1MHB4IGF1dG87XHJcbn1cclxuLnByb2ZpbGUtd3JhcHBlcjo6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDIwcHg7XHJcblx0cmlnaHQ6IDEwcHg7XHJcblx0Ym9yZGVyLWNvbG9yOiAjMzMzIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlci13aWR0aDogNnB4O1xyXG5cdGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuLnByb2ZpbGUtd3JhcHBlcjo6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAyMHB4O1xyXG5cdHJpZ2h0OiAxMHB4O1xyXG5cdGJvcmRlci1jb2xvcjogI2VlZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItd2lkdGg6IDZweDtcclxuXHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcbi5wcm9maWxlLXdyYXBwZXI6aG92ZXI6OmFmdGVyIHtcclxuXHRib3JkZXItY29sb3I6ICMxMTEgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHRcclxufVxyXG5cclxuLnByb2ZpbGUge1xyXG5cdHBhZGRpbmc6MTBweDtcclxuXHRib3JkZXI6MXB4IHNvbGlkICMwMDA7XHJcblx0Ym9yZGVyLXJhZGl1czozcHg7XHJcblx0Ym94LXNoYWRvdzowIDFweCAwICM1NTUgaW5zZXQsIDAgMXB4IDdweCAjMTExO1xyXG5cdGJhY2tncm91bmQ6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIzIyMiwgIzExMSk7XHJcbn1cclxuLnByb2ZpbGU6aG92ZXIge1xyXG5cdGN1cnNvcjpwb2ludGVyO1xyXG5cdGJhY2tncm91bmQ6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQoIzFmMWYxZiwgIzBhMGEwYSk7XHJcbn1cclxuLnByb2ZpbGUgLm5hbWUge1xyXG5cdGZvbnQtc2l6ZToxMnB4O1xyXG5cdGNvbG9yOiNmZmY7XHJcblx0bGluZS1oZWlnaHQ6MjZweDtcclxuXHRtYXJnaW4tbGVmdDoxMHB4O1xyXG59XHJcbi5wcm9maWxlIC5uYW1lOmhvdmVyIHtcclxuXHRjb2xvcjojMDA4OGNjO1xyXG59XHJcbi5wcm9maWxlIGltZyB7XHJcblx0d2lkdGg6MjVweDtcclxuXHRkaXNwbGF5OmlubGluZTtcclxuXHRmbG9hdDpsZWZ0O1xyXG5cdGJvcmRlcjoxcHggc29saWQgIzExMTtcclxuXHRib3JkZXItcmFkaXVzOjNweDtcclxuXHRib3gtc2hhZG93OjAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpIGluc2V0O1xyXG59XHJcblxyXG4vKiBoaWRlIG1lbnUgKi9cclxuLm1lbnUge1xyXG5cdGRpc3BsYXk6bm9uZTtcclxuXHRjbGVhcjpib3RoO1xyXG5cdG1hcmdpbjoyMHB4IDAgMCAwO1xyXG59XHJcbi5tZW51IGxpIHtcclxuXHRmb250LXNpemU6MTJweDtcclxuXHRtYXJnaW46MDtcclxuICBwYWRkaW5nOiAxMHB4IDRweDtcclxufVxyXG4ubWVudSBsaSBhIHtcclxuXHRjb2xvcjojNTU1O1xyXG59XHJcbi5tZW51IGxpOmhvdmVyID4gYXtcclxuXHRjb2xvcjojZWVlO1xyXG59XHJcblxyXG4ubWVudSBsaTpob3ZlcntcclxuXHRib3JkZXItbGVmdDogMXB4IHNvbGlkICMxMTE7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzIyMjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIyMjtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzExMTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi8qIGhvdmVyIHByb2ZpbGUgc2hvdyBtZW51ICovXHJcbi5wcm9maWxlOmhvdmVyIC5tZW51IHtcclxuXHRkaXNwbGF5OmJsb2NrO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/fesm2015/okta-angular.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");




let MenuComponent = class MenuComponent {
    constructor(oktaAuth) {
        this.oktaAuth = oktaAuth;
    }
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Read idToken before local session is cleared
            const idToken = yield this.oktaAuth.getIdToken();
            // Clear local session
            yield this.oktaAuth.logout('/');
            // Clear remote session
            window.location.href = `${_config__WEBPACK_IMPORTED_MODULE_3__["globalConfig"].issuer}/v1/logout?id_token_hint=${idToken}&post_logout_redirect_uri=${_config__WEBPACK_IMPORTED_MODULE_3__["globalConfig"].logOutRedirectionUrl}`;
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isAuthenticated = yield this.oktaAuth.isAuthenticated();
            this.oktaAuth.$authenticationState.subscribe((isAuthenticated) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.isAuthenticated = isAuthenticated;
            }));
        });
    }
};
MenuComponent.ctorParameters = () => [
    { type: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__["OktaAuthService"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")).default]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/okta-initiated-login/okta-initiated-login.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/okta-initiated-login/okta-initiated-login.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29rdGEtaW5pdGlhdGVkLWxvZ2luL29rdGEtaW5pdGlhdGVkLWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/okta-initiated-login/okta-initiated-login.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/okta-initiated-login/okta-initiated-login.component.ts ***!
  \************************************************************************/
/*! exports provided: OktaInitiatedLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OktaInitiatedLoginComponent", function() { return OktaInitiatedLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/fesm2015/okta-angular.js");



let OktaInitiatedLoginComponent = class OktaInitiatedLoginComponent {
    constructor(oktaAuth) {
        this.oktaAuth = oktaAuth;
    }
    ngOnInit() {
        this.oktaAuth.loginRedirect('dashboard');
    }
};
OktaInitiatedLoginComponent.ctorParameters = () => [
    { type: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__["OktaAuthService"] }
];
OktaInitiatedLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-okta-initiated-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./okta-initiated-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/okta-initiated-login/okta-initiated-login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./okta-initiated-login.component.css */ "./src/app/okta-initiated-login/okta-initiated-login.component.css")).default]
    })
], OktaInitiatedLoginComponent);



/***/ }),

/***/ "./src/app/widgets-component/widgets-component.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/widgets-component/widgets-component.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMtY29tcG9uZW50L3dpZGdldHMtY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/widgets-component/widgets-component.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/widgets-component/widgets-component.component.ts ***!
  \******************************************************************/
/*! exports provided: WidgetsComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsComponentComponent", function() { return WidgetsComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/fesm2015/okta-angular.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);




let WidgetsComponentComponent = class WidgetsComponentComponent {
    constructor(oktaAuth) {
        this.oktaAuth = oktaAuth;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.user = yield this.oktaAuth.getUser();
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(this.user)) {
                this.name = this.user.name;
            }
        });
    }
};
WidgetsComponentComponent.ctorParameters = () => [
    { type: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__["OktaAuthService"] }
];
WidgetsComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widgets-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./widgets-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/widgets-component/widgets-component.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./widgets-component.component.css */ "./src/app/widgets-component/widgets-component.component.css")).default]
    })
], WidgetsComponentComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mohan1\dev\okta-spa-integration-using-sdk\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map