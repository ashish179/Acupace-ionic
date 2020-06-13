(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-faq-faq-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/faq/faq.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/faq/faq.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-menu-toggle class=\"class1\">\r\n      <ion-icon name=\"menu\" color=\"light\" style=\"zoom:2.0\" ></ion-icon>\r\n    </ion-menu-toggle>\r\n    <ion-title>FAQ</ion-title>\r\n  </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content fullscreen>\r\n    <ion-card>\r\n      <h2>Where do I download the of Acumeet App?</h2>\r\n      <h3>\r\n        Acumeet can be easily install from our\r\n        <a href=\"www.accumeet.com\">Download Center.</a>\r\n      </h3>\r\n    </ion-card>\r\n  \r\n    <ion-card>\r\n      <h2>How do I signup for Acumeet?</h2>\r\n      <h3>\r\n        You can sign up for a free Acumeet account at\r\n        <a href=\"www.accumeet.com\">accumeet.in/signup.</a>\r\n      </h3>\r\n    </ion-card>\r\n  \r\n    <ion-card>\r\n      <h2>How do I join a Acumeet meeting?</h2>\r\n      <h3>\r\n        You can join a meeting by clicking the meeting link or manually filling\r\n        the Meeting ID and Password ,send by the host.\r\n        <a href=\"www.accumeet.com\">Know more</a>\r\n      </h3>\r\n    </ion-card>\r\n  \r\n    <ion-card>\r\n      <h2>How do I share my screen?</h2>\r\n      <h3>\r\n        Click Share in your meeting and choose the screen that you would like to\r\n        share. <a href=\"www.accumeet.com\">Know more</a>\r\n      </h3>\r\n    </ion-card>\r\n  \r\n    <ion-card>\r\n      <h2>How do I reset my password?</h2>\r\n      <h3>\r\n        You can easily change password by clicking Edit Profile Under Profile\r\n        Section.\r\n      </h3>\r\n    </ion-card>\r\n  \r\n    <ion-card>\r\n      <h2>How do I reset my password?</h2>\r\n      <h3>\r\n        You can easily change password by clicking Edit Profile Under Profile\r\n        Section.\r\n      </h3>\r\n    </ion-card>\r\n  \r\n    <ion-item-divider></ion-item-divider>\r\n  \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Ask Question</ion-label>\r\n      <ion-textarea class=\"textarea\" name=\"msg\" row=\"100\" col=\"20\"></ion-textarea>\r\n  \r\n      <ion-button color=\"primary\" type=\"submit\">Submit</ion-button>\r\n    </ion-item>\r\n  \r\n    <ion-item-divider></ion-item-divider>\r\n    <ion-item-divider></ion-item-divider>\r\n    <ion-item-divider></ion-item-divider>\r\n  </ion-content>\r\n  "

/***/ }),

/***/ "./src/app/pages/faq/faq.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/faq/faq.module.ts ***!
  \*****************************************/
/*! exports provided: FaqPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq.page */ "./src/app/pages/faq/faq.page.ts");







const routes = [
    {
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_6__["FaqPage"]
    }
];
let FaqPageModule = class FaqPageModule {
};
FaqPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_6__["FaqPage"]]
    })
], FaqPageModule);



/***/ }),

/***/ "./src/app/pages/faq/faq.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/faq/faq.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  margin-left: 10px;\n  color: #3cbff3;\n  font: italic small-caps bold 20px Georgia, serif;\n}\n\nh3 {\n  margin-left: 10px;\n  margin-top: 15px;\n  margin-bottom: 20px;\n  -webkit-text-decoration-color: rgba(60, 60, 60, 0.768627451);\n          text-decoration-color: rgba(60, 60, 60, 0.768627451);\n}\n\n.class1 {\n  float: left;\n}\n\nion-toolbar {\n  --ion-background-color: #0f4c81 !important;\n}\n\nion-title {\n  color: white;\n  margin-left: 100px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmFxL0M6XFxVc2Vyc1xcbGVub3ZvXFxEZXNrdG9wXFxwcm9qZWN0XFxBY3VwYWNlLWlvbmljL3NyY1xcYXBwXFxwYWdlc1xcZmFxXFxmYXEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mYXEvZmFxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdEQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0REFBQTtVQUFBLG9EQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0FDRUY7O0FEQUE7RUFDRSwwQ0FBQTtBQ0dGOztBRERBO0VBQ0UsWUFBQTtFQUdBLGtCQUFBO0VBQ0EsZUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmFxL2ZhcS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6IHJnYig2MCwgMTkxLCAyNDMpO1xyXG4gIGZvbnQ6IGl0YWxpYyBzbWFsbC1jYXBzIGJvbGQgMjBweCBHZW9yZ2lhLCBzZXJpZjtcclxufVxyXG5oMyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogZ3JheXNjYWxlKCRjb2xvcjogIzQ2MzIzMmM0KTtcclxufVxyXG5cclxuLmNsYXNzMSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwZjRjODEgIWltcG9ydGFudDtcclxufVxyXG5pb24tdGl0bGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAvL3RleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICBtYXJnaW4tbGVmdDoxMDBweDtcclxuICBtYXJnaW4tdG9wOjVweDtcclxufVxyXG4iLCJoMiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogIzNjYmZmMztcbiAgZm9udDogaXRhbGljIHNtYWxsLWNhcHMgYm9sZCAyMHB4IEdlb3JnaWEsIHNlcmlmO1xufVxuXG5oMyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHJnYmEoNjAsIDYwLCA2MCwgMC43Njg2Mjc0NTEpO1xufVxuXG4uY2xhc3MxIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzBmNGM4MSAhaW1wb3J0YW50O1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/faq/faq.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/faq/faq.page.ts ***!
  \***************************************/
/*! exports provided: FaqPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPage", function() { return FaqPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FaqPage = class FaqPage {
    constructor() { }
    ngOnInit() {
    }
};
FaqPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faq',
        template: __webpack_require__(/*! raw-loader!./faq.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/faq/faq.page.html"),
        styles: [__webpack_require__(/*! ./faq.page.scss */ "./src/app/pages/faq/faq.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FaqPage);



/***/ })

}]);
//# sourceMappingURL=pages-faq-faq-module-es2015.js.map