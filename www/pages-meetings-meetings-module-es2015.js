(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-meetings-meetings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/meetings/meetings.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/meetings/meetings.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>meetings</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/meetings/meetings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/meetings/meetings.module.ts ***!
  \***************************************************/
/*! exports provided: MeetingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsPageModule", function() { return MeetingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _meetings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meetings.page */ "./src/app/pages/meetings/meetings.page.ts");







const routes = [
    {
        path: '',
        component: _meetings_page__WEBPACK_IMPORTED_MODULE_6__["MeetingsPage"]
    }
];
let MeetingsPageModule = class MeetingsPageModule {
};
MeetingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_meetings_page__WEBPACK_IMPORTED_MODULE_6__["MeetingsPage"]]
    })
], MeetingsPageModule);



/***/ }),

/***/ "./src/app/pages/meetings/meetings.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/meetings/meetings.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lZXRpbmdzL21lZXRpbmdzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/meetings/meetings.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/meetings/meetings.page.ts ***!
  \*************************************************/
/*! exports provided: MeetingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsPage", function() { return MeetingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");



let MeetingsPage = class MeetingsPage {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        this.auth.userData$.subscribe((res) => {
            this.authUser = res;
            console.log(this.authUser);
        });
        console.log(this.authUser);
    }
};
MeetingsPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
MeetingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-meetings',
        template: __webpack_require__(/*! raw-loader!./meetings.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/meetings/meetings.page.html"),
        styles: [__webpack_require__(/*! ./meetings.page.scss */ "./src/app/pages/meetings/meetings.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], MeetingsPage);



/***/ })

}]);
//# sourceMappingURL=pages-meetings-meetings-module-es2015.js.map