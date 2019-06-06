(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* html {\n  background:url(../assets/fairyland_2-wallpaper-1366x768.jpg);\n\n}\n */\nh1 {\n  font-family: 'Alfa Slab One', cursive;\n}\n.lead {\n  letter-spacing: 5px;\n  font-family: 'Patrick Hand', cursive;\n}\n.jumbotron {\n  text-align: center;\n  background: url('background.gif');\n  -webkit-background-clip: text;\n  color: rgba(240, 248, 255, 0);\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n      <h1 class=\"display-4\">LIFE {{ title }}</h1>\n      <p class=\"lead\">Find great quotes from great authors and share yours.</p>\n      <hr class=\"my-4\">\n      <a class=\"btn btn-primary btn-lg\" type=\"button\" data-toggle=\"modal\" data-target=\"#exampleModal\" href=\"#\" role=\"button\">New Quote</a>\n  </div>\n  <app-quotes></app-quotes>\n\n\n  <footer>\n    <address>danmark.chemuren@gmail.com\n    </address>\n  </footer>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'HACKS';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quotes/quotes.component */ "./src/app/quotes/quotes.component.ts");
/* harmony import */ var _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quote-details/quote-details.component */ "./src/app/quote-details/quote-details.component.ts");
/* harmony import */ var _time_count_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./time-count.pipe */ "./src/app/time-count.pipe.ts");
/* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./highlight.directive */ "./src/app/highlight.directive.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _delete_quote_delete_quote_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./delete-quote/delete-quote.component */ "./src/app/delete-quote/delete-quote.component.ts");
/* harmony import */ var _voting_voting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./voting/voting.component */ "./src/app/voting/voting.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_4__["QuotesComponent"],
                _highlight_directive__WEBPACK_IMPORTED_MODULE_7__["HighlightDirective"],
                _time_count_pipe__WEBPACK_IMPORTED_MODULE_6__["TimeCountPipe"],
                _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_5__["QuoteDetailsComponent"],
                _forms_forms_component__WEBPACK_IMPORTED_MODULE_8__["FormsComponent"],
                _delete_quote_delete_quote_component__WEBPACK_IMPORTED_MODULE_9__["DeleteQuoteComponent"],
                _voting_voting_component__WEBPACK_IMPORTED_MODULE_10__["VotingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/delete-quote/delete-quote.component.css":
/*!*********************************************************!*\
  !*** ./src/app/delete-quote/delete-quote.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/delete-quote/delete-quote.component.html":
/*!**********************************************************!*\
  !*** ./src/app/delete-quote/delete-quote.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=delete(quote.id) class=\"btn btn-primary\">Delete</button>\n"

/***/ }),

/***/ "./src/app/delete-quote/delete-quote.component.ts":
/*!********************************************************!*\
  !*** ./src/app/delete-quote/delete-quote.component.ts ***!
  \********************************************************/
/*! exports provided: DeleteQuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteQuoteComponent", function() { return DeleteQuoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../database */ "./src/database.ts");
/* harmony import */ var _quotes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quotes */ "./src/app/quotes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteQuoteComponent = /** @class */ (function () {
    function DeleteQuoteComponent() {
    }
    DeleteQuoteComponent.prototype.delete = function (id) {
        _database__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(function (item, index) {
            if (item.id === id) {
                _database__WEBPACK_IMPORTED_MODULE_1__["default"].splice(index, 1);
            }
        });
    };
    DeleteQuoteComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _quotes__WEBPACK_IMPORTED_MODULE_2__["Quotes"])
    ], DeleteQuoteComponent.prototype, "quote", void 0);
    DeleteQuoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-quote',
            template: __webpack_require__(/*! ./delete-quote.component.html */ "./src/app/delete-quote/delete-quote.component.html"),
            styles: [__webpack_require__(/*! ./delete-quote.component.css */ "./src/app/delete-quote/delete-quote.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DeleteQuoteComponent);
    return DeleteQuoteComponent;
}());



/***/ }),

/***/ "./src/app/forms/forms.component.css":
/*!*******************************************!*\
  !*** ./src/app/forms/forms.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n  text-align: center;\n}\n.modal-dialog {\n  background-color: rgb(0, 156, 156);\n}\n#del {\n  color: rgb(255, 0, 0);\n}\n::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.548);\n  font-family: 'Times New Roman', Times, serif;\n  font-style: italic;\n  text-align: center;\n}\n::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.548);\n  font-family: 'Times New Roman', Times, serif;\n  font-style: italic;\n  text-align: center;\n}\n::-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.548);\n  font-family: 'Times New Roman', Times, serif;\n  font-style: italic;\n  text-align: center;\n}\n::placeholder {\n  color: rgba(0, 0, 0, 0.548);\n  font-family: 'Times New Roman', Times, serif;\n  font-style: italic;\n  text-align: center;\n}\n#title {\n  text-align: center;\n}\nform {\n  align-items: center;\n}\ninput {\n  width: 200px;\n  height: 27px;\n  border-radius: 10px;\n}\ntextarea {\n  width: 360px;\n  border-radius: 10px;\n}\n"

/***/ }),

/***/ "./src/app/forms/forms.component.html":
/*!********************************************!*\
  !*** ./src/app/forms/forms.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\" style=\"text-align: center;\">POST A QUOTE</h5>\n          <button type=\"button\" id=\"del\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <form (ngSubmit)=\"submitpost()\" id=\"form\" #quoteForm=\"ngForm\">\n        <div class=\"modal-body\">\n\n            <div class=\"group\">\n                <label for=\"title\" id=\"title\">Quotes:</label>\n                <br/>\n                <textarea class=\"control\" type=\"text\" [(ngModel)]=\"newQuote.title\" placeholder=\"Write your quote here\" rows=\"7\"\n                  name=\"text\" id=\"text\" #text=\"ngModel\"></textarea>\n              </div>\n              <div class=\"group\">\n                <label for=\"author\" id=\"author\">Author:</label>\n                <br/>\n                <input class=\"control\" type=\"text\" [(ngModel)]=\"newQuote.author\" name=\"author\" id=\"writer\"\n                  placeholder=\"Author of the quote\">\n              </div>\n              <div class=\"group\">\n                <label for=\"poster\" id=\"poster\">Your name:</label>\n                <br/>\n                <input class=\"control\" type=\"text\" id=\"post\" [(ngModel)]=\"newQuote.poster\" name=\"post\"\n                  placeholder=\"Enter your name\">\n              </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\n        </div>\n      </form>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/forms/forms.component.ts":
/*!******************************************!*\
  !*** ./src/app/forms/forms.component.ts ***!
  \******************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quotes */ "./src/app/quotes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
        this.newQuote = new _quotes__WEBPACK_IMPORTED_MODULE_1__["Quotes"](0, '', '', '', new Date(), 0, 0);
        this.addQuote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FormsComponent.prototype.submitpost = function () {
        this.addQuote.emit(this.newQuote);
        this.newQuote = new _quotes__WEBPACK_IMPORTED_MODULE_1__["Quotes"](0, '', '', '', new Date(), 0, 0);
    };
    FormsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormsComponent.prototype, "addQuote", void 0);
    FormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(/*! ./forms.component.html */ "./src/app/forms/forms.component.html"),
            styles: [__webpack_require__(/*! ./forms.component.css */ "./src/app/forms/forms.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/highlight.directive.ts":
/*!****************************************!*\
  !*** ./src/app/highlight.directive.ts ***!
  \****************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/compiler */ "./node_modules/@angular/compiler/fesm5/compiler.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HighlightDirective = /** @class */ (function () {
    function HighlightDirective() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_compiler__WEBPACK_IMPORTED_MODULE_1__["Quote"])
    ], HighlightDirective.prototype, "quote", void 0);
    HighlightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHighlight]'
        })
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/quote-details/quote-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center\">\n  <div class=\"card-header\">\n    Posted by: {{quote.poster}}\n  </div>\n  <div class=\"card-body\">\n    <p class=\"card-text\">{{quote.title}}</p>\n    <p class=\"text-muted card-c\"><i>{{quote.author}}</i></p>\n    <app-voting [quote]=\"quote\"></app-voting>\n    <app-delete-quote [quote]=\"quote\" ></app-delete-quote>\n  </div>\n  <div class=\"card-footer text-muted\">\n    {{quote.postTime|timeCount}} hours ago\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.ts ***!
  \**********************************************************/
/*! exports provided: QuoteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailsComponent", function() { return QuoteDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quotes */ "./src/app/quotes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuoteDetailsComponent = /** @class */ (function () {
    function QuoteDetailsComponent() {
    }
    QuoteDetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _quotes__WEBPACK_IMPORTED_MODULE_1__["Quotes"])
    ], QuoteDetailsComponent.prototype, "quote", void 0);
    QuoteDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quote-details',
            template: __webpack_require__(/*! ./quote-details.component.html */ "./src/app/quote-details/quote-details.component.html"),
            styles: [__webpack_require__(/*! ./quote-details.component.css */ "./src/app/quote-details/quote-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuoteDetailsComponent);
    return QuoteDetailsComponent;
}());



/***/ }),

/***/ "./src/app/quotes.ts":
/*!***************************!*\
  !*** ./src/app/quotes.ts ***!
  \***************************/
/*! exports provided: Quotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quotes", function() { return Quotes; });
var Quotes = /** @class */ (function () {
    function Quotes(id, title, author, poster, postTime, upvote, downvote) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.poster = poster;
        this.postTime = postTime;
        this.upvote = upvote;
        this.downvote = downvote;
    }
    return Quotes;
}());



/***/ }),

/***/ "./src/app/quotes/quotes.component.css":
/*!*********************************************!*\
  !*** ./src/app/quotes/quotes.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-quote-details {\n  font-family: 'Special Elite', cursive;\n}\n.quote {\n  padding-bottom: 30px;\n}\n"

/***/ }),

/***/ "./src/app/quotes/quotes.component.html":
/*!**********************************************!*\
  !*** ./src/app/quotes/quotes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-forms (addQuote)=\"addNewQuote($event)\"></app-forms>\n<div class=\"row\">\n    <div class=\"col-md-4 quote\" *ngFor=\"let quote of quotes;let i = index\">\n      <app-quote-details [quote]=\"quote\"></app-quote-details>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/quotes/quotes.component.ts":
/*!********************************************!*\
  !*** ./src/app/quotes/quotes.component.ts ***!
  \********************************************/
/*! exports provided: QuotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesComponent", function() { return QuotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quotes */ "./src/app/quotes.ts");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../database */ "./src/database.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuotesComponent = /** @class */ (function () {
    function QuotesComponent() {
    }
    Object.defineProperty(QuotesComponent.prototype, "quotes", {
        get: function () {
            return _database__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (quote) { return new _quotes__WEBPACK_IMPORTED_MODULE_1__["Quotes"](quote.id, quote.title, quote.author, quote.poster, quote.postTime, quote.upvote, quote.downvote); });
        },
        enumerable: true,
        configurable: true
    });
    QuotesComponent.prototype.addNewQuote = function (quote) {
        var quoteLength = this.quotes.length;
        quote.postTime = new Date(quote.postTime);
        _database__WEBPACK_IMPORTED_MODULE_2__["default"].unshift(quote);
    };
    QuotesComponent.prototype.ngOnInit = function () {
    };
    QuotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quotes',
            template: __webpack_require__(/*! ./quotes.component.html */ "./src/app/quotes/quotes.component.html"),
            styles: [__webpack_require__(/*! ./quotes.component.css */ "./src/app/quotes/quotes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuotesComponent);
    return QuotesComponent;
}());



/***/ }),

/***/ "./src/app/time-count.pipe.ts":
/*!************************************!*\
  !*** ./src/app/time-count.pipe.ts ***!
  \************************************/
/*! exports provided: TimeCountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeCountPipe", function() { return TimeCountPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimeCountPipe = /** @class */ (function () {
    function TimeCountPipe() {
    }
    TimeCountPipe.prototype.transform = function (value) {
        var today = new Date();
        var dateDifference = Math.abs(value - today);
        var secondsInAnHour = 3600;
        var dateDifferenceSeconds = dateDifference * 0.001;
        var dateCounter = Math.round(dateDifferenceSeconds / secondsInAnHour);
        if (dateCounter >= 1) {
            return dateCounter;
        }
        else {
            return 0;
        }
    };
    TimeCountPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'timeCount'
        })
    ], TimeCountPipe);
    return TimeCountPipe;
}());



/***/ }),

/***/ "./src/app/voting/voting.component.css":
/*!*********************************************!*\
  !*** ./src/app/voting/voting.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/voting/voting.component.html":
/*!**********************************************!*\
  !*** ./src/app/voting/voting.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vote1\">\n    <a class=\"btn\" (click)=upvote(quote.id)>\n      <i class=\"fa fa-thumbs-up\"></i>\n      {{quote.upvote}}\n    </a>\n    <a class=\"btn\" (click)=downvote(quote.id)>\n      <i class=\"fa fa-thumbs-down\"></i>\n      {{quote.downvote}}\n    </a>\n</div>\n"

/***/ }),

/***/ "./src/app/voting/voting.component.ts":
/*!********************************************!*\
  !*** ./src/app/voting/voting.component.ts ***!
  \********************************************/
/*! exports provided: VotingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotingComponent", function() { return VotingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../database */ "./src/database.ts");
/* harmony import */ var _quotes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quotes */ "./src/app/quotes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VotingComponent = /** @class */ (function () {
    function VotingComponent() {
    }
    VotingComponent.prototype.upvote = function (id) {
        _database__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(function (quote) {
            if (quote.id === id) {
                quote.upvote = quote.upvote + 1;
            }
        });
    };
    VotingComponent.prototype.downvote = function (id) {
        _database__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(function (quote) {
            if (quote.id === id) {
                quote.downvote = quote.downvote + 1;
            }
        });
    };
    VotingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _quotes__WEBPACK_IMPORTED_MODULE_2__["Quotes"])
    ], VotingComponent.prototype, "quote", void 0);
    VotingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-voting',
            template: __webpack_require__(/*! ./voting.component.html */ "./src/app/voting/voting.component.html"),
            styles: [__webpack_require__(/*! ./voting.component.css */ "./src/app/voting/voting.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VotingComponent);
    return VotingComponent;
}());



/***/ }),

/***/ "./src/database.ts":
/*!*************************!*\
  !*** ./src/database.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
    {
        id: 1,
        title: 'Live for what’s worth dying for, and leverage technology to create the world you wish to see.',
        author: 'Gandhi',
        poster: 'Admin',
        postTime: new Date(2019, 4, 27, 7, 45),
        upvote: 30,
        downvote: 10
    },
    {
        id: 2,
        title: 'Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.',
        author: 'Danmark',
        poster: 'Admin',
        postTime: new Date(2019, 4, 27, 23, 1),
        upvote: 20,
        downvote: 3
    },
    {
        id: 3,
        title: 'A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.',
        author: 'George Bernhard Shaw',
        poster: 'Admin',
        postTime: new Date(2019, 4, 27, 23, 5),
        upvote: 17,
        downvote: 9
    },
    {
        id: 4,
        title: 'He who fears he will suffer, already suffers because he fears.',
        author: 'Michel De Montaigne',
        poster: 'Admin',
        postTime: new Date(2019, 4, 27, 23, 8),
        upvote: 26,
        downvote: 10
    },
    {
        id: 5,
        title: 'We think sometimes that poverty is only being hungry, naked and homeless. The poverty of being unwanted, unloved and uncared for is the greatest poverty.',
        author: ' Mother Theresa',
        poster: 'Admin',
        postTime: new Date(2019, 4, 28, 7, 42),
        upvote: 9,
        downvote: 4
    },
    {
        id: 6,
        title: 'Love is athise — the feeling — is a fruit of love, the verb.',
        author: 'Stephen Covey',
        poster: 'Admin',
        postTime: new Date(2019, 4, 28, 7, 43),
        upvote: 6,
        downvote: 7
    },
    {
        id: 7,
        title: 'Life is really simple, but we insist on making it complicated.',
        author: 'Confucius',
        poster: 'Admin',
        postTime: new Date(2019, 4, 28, 7, 45),
        upvote: 4,
        downvote: 0
    },
    {
        id: 8,
        title: 'If you don’t like something, change it. If you can’t change it, change the way you think about it.',
        author: 'Mary Engelbreit',
        poster: 'Admin',
        postTime: new Date(2019, 4, 28, 7, 46),
        upvote: 0,
        downvote: 0
    },
    {
        id: 9,
        title: 'In seeking happiness for others, you will find it in yourself.',
        author: 'Victor Mutai',
        poster: 'Admin',
        postTime: new Date(2019, 4, 28, 7, 49),
        upvote: 0,
        downvote: 100
    }
]);


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dnmrk/Documents/Quotes/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map