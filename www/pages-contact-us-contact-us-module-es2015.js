(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-us-contact-us-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/contact-us/contact-us.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/contact-us/contact-us.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-menu-toggle>\r\n      <ion-icon name=\"menu\" class=\"class1\" color=\"light\"></ion-icon>\r\n    </ion-menu-toggle>\r\n    <ion-title>Contact Us</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form>\r\n    <ion-item>\r\n      <ion-text color=\"secondary\">\r\n        <h1>contact us</h1>\r\n      </ion-text>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Your Name</ion-label>\r\n      <ion-input type=\"text\" name=\"name\" class=\"input\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Your Email</ion-label>\r\n      <ion-input type=\"email\" name=\"email\" class=\"input\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Subject</ion-label>\r\n      <ion-textarea class=\"textarea\" name=\"subject\"></ion-textarea>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Description</ion-label>\r\n      <ion-textarea class=\"textarea\" name=\"message\"></ion-textarea>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-button\r\n        color=\"primary\"\r\n        type=\"submit\"\r\n        class=\"button is-danger is-large\"\r\n        >Submit</ion-button\r\n      >\r\n    </ion-item>\r\n  </form>\r\n  <ion-item>\r\n    <p>Contact us on: &nbsp;</p>\r\n    <ion-icon name=\"logo-facebook\"></ion-icon>\r\n    &nbsp;\r\n    <ion-icon ios=\"ios-mail\" md=\"md-mail\"></ion-icon>\r\n    &nbsp;\r\n    <ion-icon ios=\"logo-instagram\" md=\"logo-instagram\"></ion-icon>\r\n    &nbsp;\r\n    <ion-icon ios=\"logo-twitter\" md=\"logo-twitter\"></ion-icon>\r\n  </ion-item>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.module.ts ***!
  \*******************************************************/
/*! exports provided: ContactUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function() { return ContactUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us.page */ "./src/app/pages/contact-us/contact-us.page.ts");







const routes = [
    {
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]
    }
];
let ContactUsPageModule = class ContactUsPageModule {
};
ContactUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]]
    })
], ContactUsPageModule);



/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".class1 {\n  float: left;\n}\n\nion-toolbar {\n  --ion-background-color: #0f4c81 !important;\n}\n\nion-title {\n  color: white;\n  text-align: center;\n}\n\nion-icon {\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC11cy9DOlxcVXNlcnNcXGxlbm92b1xcRGVza3RvcFxccHJvamVjdFxcYWN1TUVFVC9zcmNcXGFwcFxccGFnZXNcXGNvbnRhY3QtdXNcXGNvbnRhY3QtdXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb250YWN0LXVzL2NvbnRhY3QtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBRENBO0VBQ0UsMENBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtdXMvY29udGFjdC11cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xhc3MxIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzBmNGM4MSAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi10aXRsZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24taWNvbiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbiIsIi5jbGFzczEge1xuICBmbG9hdDogbGVmdDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMGY0YzgxICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.page.ts ***!
  \*****************************************************/
/*! exports provided: ContactUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPage", function() { return ContactUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactUsPage = class ContactUsPage {
    constructor() { }
    ngOnInit() {
    }
};
ContactUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: __webpack_require__(/*! raw-loader!./contact-us.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/contact-us/contact-us.page.html"),
        styles: [__webpack_require__(/*! ./contact-us.page.scss */ "./src/app/pages/contact-us/contact-us.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ContactUsPage);



/***/ })

}]);
//# sourceMappingURL=pages-contact-us-contact-us-module-es2015.js.map