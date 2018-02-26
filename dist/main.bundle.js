webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initiatives_initiatives_component__ = __webpack_require__("../../../../../src/app/initiatives/initiatives.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__faq_faq_component__ = __webpack_require__("../../../../../src/app/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__photos_and_stories_photos_and_stories_component__ = __webpack_require__("../../../../../src/app/photos-and-stories/photos-and-stories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__races_and_events_races_and_events_component__ = __webpack_require__("../../../../../src/app/races-and-events/races-and-events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resources_resources_component__ = __webpack_require__("../../../../../src/app/resources/resources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__youth_youth_component__ = __webpack_require__("../../../../../src/app/youth/youth.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: 'races-and-events', component: __WEBPACK_IMPORTED_MODULE_5__races_and_events_races_and_events_component__["a" /* RacesAndEventsComponent */] },
    { path: 'resources', component: __WEBPACK_IMPORTED_MODULE_6__resources_resources_component__["a" /* ResourcesComponent */] },
    { path: 'initiatives', component: __WEBPACK_IMPORTED_MODULE_2__initiatives_initiatives_component__["a" /* InitiativesComponent */] },
    { path: 'faq', component: __WEBPACK_IMPORTED_MODULE_3__faq_faq_component__["a" /* FaqComponent */] },
    { path: 'photos-and-stories', component: __WEBPACK_IMPORTED_MODULE_4__photos_and_stories_photos_and_stories_component__["a" /* PhotosAndStoriesComponent */] },
    { path: 'youth', component: __WEBPACK_IMPORTED_MODULE_7__youth_youth_component__["a" /* YouthComponent */] },
    { path: '', pathMatch: 'full', redirectTo: 'youth' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes, {})
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nyrr-navbar{\r\n    background: #00215A;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\n.nyrr-navbar a,\r\n.nyrr-navbar span{    \r\n    text-decoration: none;\r\n    color: #e5e5e5;\r\n}\r\n\r\n.nyrr-logo{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: -webkit-flex;\r\n    -ms-flex-preferred-size: 20%;\r\n        flex-basis: 20%;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center; \r\n}\r\n\r\n.nyrr-navbar-wrapper{\r\n    -ms-flex-preferred-size: 80%;\r\n        flex-basis: 80%;\r\n}\r\n\r\n.nyrr-navbar-login{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    padding: 0.5em 2em;\r\n    border-left: 1px solid #999999;\r\n    border-bottom: 1px solid #999999;\r\n}\r\n\r\n.nyrr-links a{\r\n    padding: 0em 0.5em;\r\n}\r\n\r\n.nyrr-navbar-container{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n\r\n    -webkit-box-orient: horizontal;\r\n\r\n    -webkit-box-direction: normal;\r\n\r\n        -ms-flex-flow: row no-wrap;\r\n\r\n            flex-flow: row no-wrap;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    border-left: 1px solid #999999;\r\n    padding: 2em 1em;\r\n}\r\n\r\n.nyrr-navbar-container a{\r\n    padding: 0 1em;\r\n}\r\n\r\n.nyrr-navbar-mobile{\r\n    visibility: hidden;\r\n}\r\n\r\n@media all and (max-width: 800px) {\r\n    .nyrr-navbar-container{\r\n        -ms-flex-pack: distribute;\r\n            justify-content: space-around;\r\n    }\r\n}\r\n\r\n@media all and (max-width: 600px) {\r\n    .nyrr-navbar-wrapper{\r\n        display: none;\r\n    }\r\n\r\n    .nyrr-navbar-mobile{\r\n        visibility: visible;\r\n        -ms-flex-preferred-size: 20%;\r\n            flex-basis: 20%;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center; \r\n    }\r\n    \r\n    .nyrr-navbar-mobile a{\r\n        cursor: pointer;\r\n    }\r\n\r\n    .nyrr-navbar{\r\n        -webkit-box-pack: justify;\r\n            -ms-flex-pack: justify;\r\n                justify-content: space-between;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav class=\"nyrr-navbar\">\r\n    <div class=\"nyrr-logo\">\r\n        <a routerLink=\"/youth\" routerLinkActive=\"active\">\r\n          <img src=\"http://fpoimg.com/120x50?text=Preview&bg_color=169abb&text_color=ffffff\" \r\n          width=\"120\" height=\"50\" />\r\n        </a>        \r\n    </div>\r\n    <div class=\"nyrr-navbar-mobile\">\r\n      <a (click)=openMenu()>Menu</a>\r\n    </div>\r\n    <div class=\"nyrr-navbar-wrapper\">\r\n      <div class=\"nyrr-navbar-login\">\r\n        <div>\r\n          <span>NYRR</span>\r\n        </div>\r\n        <div class=\"nyrr-links\">\r\n          <a>Donate</a>\r\n          <a>Help</a>\r\n          <a>Sign in or Join</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"nyrr-navbar-container\">\r\n        <a routerLink=\"/races-and-events\" routerLinkActive=\"active\">Races & Events</a>\r\n        <a routerLink=\"/resources\" routerLinkActive=\"active\">Resources</a>\r\n        <a routerLink=\"/initiatives\" routerLinkActive=\"active\">Initiatives</a>\r\n        <a routerLink=\"/faq\" routerLinkActive=\"active\">FAQ</a>\r\n        <a routerLink=\"/photos-and-stories\" routerLinkActive=\"active\">Photos & Stories</a>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n<section>\r\n  <router-outlet></router-outlet>\r\n</section>\r\n<app-mobile-menu-bar [(isMenuActive)]=\"isMenuActive\">\r\n</app-mobile-menu-bar>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isMenuActive = false;
    }
    AppComponent.prototype.openMenu = function () {
        this.isMenuActive = true;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__races_and_events_races_and_events_component__ = __webpack_require__("../../../../../src/app/races-and-events/races-and-events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resources_resources_component__ = __webpack_require__("../../../../../src/app/resources/resources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__initiatives_initiatives_component__ = __webpack_require__("../../../../../src/app/initiatives/initiatives.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__faq_faq_component__ = __webpack_require__("../../../../../src/app/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__photos_and_stories_photos_and_stories_component__ = __webpack_require__("../../../../../src/app/photos-and-stories/photos-and-stories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mobile_menu_bar_mobile_menu_bar_component__ = __webpack_require__("../../../../../src/app/mobile-menu-bar/mobile-menu-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__youth_youth_component__ = __webpack_require__("../../../../../src/app/youth/youth.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__races_and_events_races_and_events_component__["a" /* RacesAndEventsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__resources_resources_component__["a" /* ResourcesComponent */],
                __WEBPACK_IMPORTED_MODULE_5__initiatives_initiatives_component__["a" /* InitiativesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__faq_faq_component__["a" /* FaqComponent */],
                __WEBPACK_IMPORTED_MODULE_7__photos_and_stories_photos_and_stories_component__["a" /* PhotosAndStoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__mobile_menu_bar_mobile_menu_bar_component__["a" /* MobileMenuBarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__youth_youth_component__["a" /* YouthComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/faq/faq.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  faq works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-faq',
            template: __webpack_require__("../../../../../src/app/faq/faq.component.html"),
            styles: [__webpack_require__("../../../../../src/app/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "../../../../../src/app/initiatives/initiatives.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/initiatives/initiatives.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  initiatives works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/initiatives/initiatives.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitiativesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InitiativesComponent = /** @class */ (function () {
    function InitiativesComponent() {
    }
    InitiativesComponent.prototype.ngOnInit = function () {
    };
    InitiativesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-initiatives',
            template: __webpack_require__("../../../../../src/app/initiatives/initiatives.component.html"),
            styles: [__webpack_require__("../../../../../src/app/initiatives/initiatives.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InitiativesComponent);
    return InitiativesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mobile-menu-bar/mobile-menu-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nyrr-mobile-menu{\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.inactive{\r\n    display: none;\r\n}\r\n\r\n@media all and (max-width: 600px) {\r\n    .nyrr-mobile-menu{\r\n        display: block;\r\n        background-color:#00A2DD;\r\n        position: fixed;\r\n        width:100%;\r\n        height:100%;\r\n        top:0px;\r\n        left:0px;\r\n        z-index:1000;\r\n    }\r\n\r\n    .nyrr-close{\r\n        min-height: 40px;\r\n        -ms-flex-preferred-size: 30%;\r\n            flex-basis: 30%;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n        border-left: 1px solid #999999;\r\n    }\r\n\r\n    .nyrr-container{\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n    }\r\n\r\n    .nyrr-signin,\r\n    .nyrr-header-bar{\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: row;\r\n                flex-direction: row;\r\n        -webkit-box-pack: justify;\r\n            -ms-flex-pack: justify;\r\n                justify-content: space-between;\r\n        color: #e5e5e5;\r\n        border-bottom: 1px solid #999999;\r\n    }\r\n\r\n    .nyrr-signin{\r\n        padding-right: 1em;\r\n        border-top: 1px solid #999999;\r\n    }\r\n\r\n    .nyrr-signin > div:first-of-type{\r\n        border-right: 1px solid #999999;\r\n    }\r\n\r\n    .nyrr-signin div{\r\n        -ms-flex-preferred-size: 50%;\r\n            flex-basis: 50%;\r\n        text-align: center;\r\n    }\r\n\r\n    .nyrr-mobile-about > div{\r\n        -ms-flex-preferred-size: 50%;\r\n            flex-basis: 50%;\r\n        padding-top: 1em;\r\n        padding-bottom: 1em;\r\n    }\r\n\r\n    .nyrr-mobile-about > div > div{\r\n        padding-bottom: 0.5em;\r\n    }\r\n\r\n    .nyrr-mobile-row{\r\n        min-height: 40px;\r\n        color:  #e5e5e5;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        padding-left: 1em;\r\n    }\r\n\r\n    .nyrr-mobile-calendar{\r\n        padding-top: 1em;\r\n        padding-bottom: 1em;\r\n    }\r\n\r\n    .nyrr-calendar-button{\r\n        min-height: 60px;\r\n        color: #e5e5e5;\r\n        background-color: #3480DE;\r\n        border-radius: 30px;\r\n        border: none;\r\n        width: 95%;\r\n    }\r\n\r\n    .nyrr-mobile-search{\r\n        border-bottom: 1px solid #999999;\r\n        padding-left: 1em;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mobile-menu-bar/mobile-menu-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"inactive\" [class.nyrr-mobile-menu]=\"isMenuActive\">\r\n    <div class=\"nyrr-container\">\r\n        <div class=\"nyrr-header-bar\">\r\n            <div class=\"nyrr-logo\">\r\n                <img src=\"http://fpoimg.com/120x40?bg_color=169abb&text_color=ffffff\" width=\"120\" height=\"40\" />\r\n            </div>\r\n            <div class=\"nyrr-close\">\r\n                <div (click)=\"setMenuActive()\">CLOSE</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"nyrr-mobile-row nyrr-mobile-search\">\r\n            <div>Search</div>\r\n        </div>\r\n        <div class=\"nyrr-mobile-row\">\r\n            <div>HOME</div>\r\n        </div>\r\n        <div class=\"nyrr-mobile-row\">\r\n            <div>DISCOVER</div>\r\n        </div>\r\n        <div class=\"nyrr-mobile-row\">\r\n            <div>RUN</div>\r\n        </div>\r\n        <div class=\"nyrr-mobile-row\">\r\n            <div>YOUTH</div>\r\n        </div>\r\n        <div class=\"nyrr-mobile-row\">\r\n            <div>TRAIN</div>\r\n        </div>\r\n        <div class=\"nyrr-mobile-row\">\r\n            <div>GET INVOLVED</div>\r\n        </div>\r\n        <div class=\"nyrr-mobile-row nyrr-mobile-calendar\">\r\n            <button class=\"nyrr-calendar-button\">CALENDAR</button>\r\n        </div>\r\n        <div class=\"nyrr-mobile-row nyrr-signin\">\r\n            <div>Sign in</div>\r\n            <div>Join</div>\r\n        </div>\r\n        <div class=\"nyrr-mobile-row nyrr-mobile-about\">\r\n            <div>\r\n                <div>\r\n                    About NYRR\r\n                </div>\r\n                <div>\r\n                    TCS NYC Marathon\r\n                </div>\r\n                <div>\r\n                    Run Center\r\n                </div>\r\n                <div>\r\n                    Results\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <div>\r\n                    Team for Kids\r\n                </div>\r\n                <div>\r\n                    Shop\r\n                </div>\r\n                <div>\r\n                    Donate\r\n                </div>\r\n                <div>\r\n                    Help\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/mobile-menu-bar/mobile-menu-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileMenuBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MobileMenuBarComponent = /** @class */ (function () {
    function MobileMenuBarComponent() {
        this.isMenuActiveChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    MobileMenuBarComponent.prototype.setMenuActive = function () {
        this.isMenuActiveChange.emit(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('isMenuActive'),
        __metadata("design:type", Boolean)
    ], MobileMenuBarComponent.prototype, "isMenuActive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], MobileMenuBarComponent.prototype, "isMenuActiveChange", void 0);
    MobileMenuBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mobile-menu-bar',
            template: __webpack_require__("../../../../../src/app/mobile-menu-bar/mobile-menu-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/mobile-menu-bar/mobile-menu-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MobileMenuBarComponent);
    return MobileMenuBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/photos-and-stories/photos-and-stories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/photos-and-stories/photos-and-stories.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  photos-and-stories works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/photos-and-stories/photos-and-stories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosAndStoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotosAndStoriesComponent = /** @class */ (function () {
    function PhotosAndStoriesComponent() {
    }
    PhotosAndStoriesComponent.prototype.ngOnInit = function () {
    };
    PhotosAndStoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-photos-and-stories',
            template: __webpack_require__("../../../../../src/app/photos-and-stories/photos-and-stories.component.html"),
            styles: [__webpack_require__("../../../../../src/app/photos-and-stories/photos-and-stories.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotosAndStoriesComponent);
    return PhotosAndStoriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/races-and-events/races-and-events.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/races-and-events/races-and-events.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  races-and-events works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/races-and-events/races-and-events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RacesAndEventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RacesAndEventsComponent = /** @class */ (function () {
    function RacesAndEventsComponent() {
    }
    RacesAndEventsComponent.prototype.ngOnInit = function () {
    };
    RacesAndEventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-races-and-events',
            template: __webpack_require__("../../../../../src/app/races-and-events/races-and-events.component.html"),
            styles: [__webpack_require__("../../../../../src/app/races-and-events/races-and-events.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RacesAndEventsComponent);
    return RacesAndEventsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/resources/resources.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resources/resources.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  resources works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/resources/resources.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResourcesComponent = /** @class */ (function () {
    function ResourcesComponent() {
    }
    ResourcesComponent.prototype.ngOnInit = function () {
    };
    ResourcesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-resources',
            template: __webpack_require__("../../../../../src/app/resources/resources.component.html"),
            styles: [__webpack_require__("../../../../../src/app/resources/resources.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResourcesComponent);
    return ResourcesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/youth/youth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nyrr-youth-content{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.nyrr-banner{\r\n    background-color: #999999;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    min-height: 150px;\r\n    width: 100%;\r\n}\r\n\r\n.nyrr-banner> div:first-of-type{\r\n    background-color: #999999;\r\n    border-color: #3480DE transparent transparent transparent;\r\n    border-width: 150px 100px 0 0;\r\n    height: 0;\r\n    left: 0;\r\n    position: absolute;\r\n    width: 30%;\r\n    border-style: solid;\r\n}\r\n\r\n.nyrr-banner > div:last-of-type{\r\n    position: relative;\r\n    -ms-flex-preferred-size: 30%;\r\n        flex-basis: 30%;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n}\r\n\r\n.nyrr-banner > div:last-of-type > h1{\r\n    color: #e5e5e5;\r\n    margin-left: 2em;\r\n}\r\n\r\n.nyrr-video{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\n.nyrr-video > div{\r\n    -ms-flex-preferred-size: 50%;\r\n        flex-basis: 50%;\r\n}\r\n\r\n.nyrr-video > div > p{\r\n    margin: 0;\r\n    padding: 1.5em;\r\n}\r\n\r\n.nyrr-video-wrapper{\r\n    padding: 1.5em;\r\n}\r\n\r\n.nyrr-video-wrapper > iframe{\r\n    min-height: 300px;\r\n    width: 100%;\r\n}\r\n\r\n.nyrr-content-row{\r\n    display: block;\r\n    padding: 1.5em;\r\n}\r\n\r\n@media all and (max-width: 600px) {    \r\n    .nyrr-banner{\r\n        min-height: 75px;\r\n    }\r\n    .nyrr-banner> div:first-of-type{\r\n        border-width: 0px;\r\n    }\r\n    .nyrr-video{\r\n        display: block;\r\n        -ms-flex-pack: distribute;\r\n            justify-content: space-around;\r\n    }\r\n    .nyrr-video > div{\r\n        -ms-flex-preferred-size: 50%;\r\n            flex-basis: 50%;\r\n    }\r\n    .nyrr-video > div > p{\r\n        margin: 0;\r\n    }\r\n    .nyrr-video-wrapper > iframe{\r\n        min-height: 250px;\r\n        width: 100%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/youth/youth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nyrr-youth-content\">\r\n  <div class=\"nyrr-banner\">\r\n    <div></div>\r\n    <div>\r\n      <h1>\r\n        Youth\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"nyrr-video\">\r\n    <div>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n        aliqua. Felis eget nunc lobortis mattis aliquam faucibus purus. Nunc scelerisque viverra mauris in aliquam sem fringilla\r\n        ut. Commodo elit at imperdiet dui accumsan sit. Luctus accumsan tortor posuere ac.</p>\r\n    </div>\r\n    <div>\r\n      <div class=\"nyrr-video-wrapper\">\r\n        <iframe src=\"https://www.youtube.com/embed/3pcZiAfLNII\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <table class=\"nyrr-content-row\">\r\n    <tr>\r\n      <td>\r\n          <img src=\"http://fpoimg.com/600x300\" width=\"600\" height=\"300\" />\r\n          <div>\r\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo sed egestas egestas fringilla.\r\n          </div>\r\n      </td>\r\n      <td>\r\n          <img src=\"http://fpoimg.com/400x300\" width=\"400\" height=\"300\" />\r\n          <div>\r\n              consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas\r\n          </div>\r\n      </td>\r\n      <td>\r\n          <img src=\"http://fpoimg.com/290x300\" width=\"290\" height=\"300\" />\r\n          <div>\r\n              consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas\r\n          </div>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/youth/youth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YouthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var YouthComponent = /** @class */ (function () {
    function YouthComponent() {
    }
    YouthComponent.prototype.ngOnInit = function () {
    };
    YouthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-youth',
            template: __webpack_require__("../../../../../src/app/youth/youth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/youth/youth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], YouthComponent);
    return YouthComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map