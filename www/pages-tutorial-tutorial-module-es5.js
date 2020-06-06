(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tutorial-tutorial-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tutorial/tutorial.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tutorial/tutorial.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-menu-toggle class=\"class1\">\r\n      <ion-icon name=\"menu\" color=\"light\"></ion-icon>\r\n    </ion-menu-toggle>\r\n    <ion-title>notification</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher\r\n    slot=\"fixed\"\r\n    pullFactor=\"0.5\"\r\n    pullMin=\"100\"\r\n    pullMax=\"200\"\r\n    (ionRefresh)=\"doRefresh($event)\"\r\n  >\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-item lines=\"inset\" *ngFor=\"let item of list\">\r\n    <ion-card>\r\n      <ion-card-content>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n              {{item.role}}\r\n            </ion-col>\r\n            <ion-col>\r\n              {{item.host_name}}\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              {{item.room_id}}\r\n            </ion-col>\r\n            <ion-col>\r\n              Start time: {{item.host_meeting_start_time}}\r\n            </ion-col>\r\n            <ion-col>\r\n              End time: {{item.host_meeting_end_time}}\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <ion-button\r\n          shape=\"round\"\r\n          color=\"danger\"\r\n          routerLink=\"/home/messages\"\r\n          (click)=\"goTo(item,item.host_meeting_start_time,item.host_meeting_end_time)\"\r\n          >start meet</ion-button\r\n        >\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-item>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.module.ts ***!
  \***************************************************/
/*! exports provided: TutorialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tutorial.page */ "./src/app/pages/tutorial/tutorial.page.ts");







var routes = [
    {
        path: '',
        component: _tutorial_page__WEBPACK_IMPORTED_MODULE_6__["TutorialPage"]
    }
];
var TutorialPageModule = /** @class */ (function () {
    function TutorialPageModule() {
    }
    TutorialPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tutorial_page__WEBPACK_IMPORTED_MODULE_6__["TutorialPage"]]
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --ion-background-color: #0f4c81 !important;\n}\n\nion-title {\n  color: white;\n  text-align: center;\n}\n\nion-icon {\n  width: 30px;\n  height: 30px;\n}\n\nion-grid {\n  border-radius: 15px;\n}\n\nion-card {\n  background-color: #1b262c;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHV0b3JpYWwvQzpcXFVzZXJzXFxsZW5vdm9cXERlc2t0b3BcXHByb2plY3RcXGFjdU1FRVQvc3JjXFxhcHBcXHBhZ2VzXFx0dXRvcmlhbFxcdHV0b3JpYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90dXRvcmlhbC90dXRvcmlhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0dGOztBREFBO0VBQ0UsbUJBQUE7QUNHRjs7QURBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHV0b3JpYWwvdHV0b3JpYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwZjRjODEgIWltcG9ydGFudDtcclxufVxyXG5pb24tdGl0bGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLWljb24ge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIyNjJjO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iLCJpb24tdG9vbGJhciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwZjRjODEgIWltcG9ydGFudDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1pY29uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuaW9uLWdyaWQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjI2MmM7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.page.ts ***!
  \*************************************************/
/*! exports provided: TutorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPage", function() { return TutorialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







var TutorialPage = /** @class */ (function () {
    function TutorialPage(webservice, auth, toastService, data) {
        this.webservice = webservice;
        this.auth = auth;
        this.toastService = toastService;
        this.data = data;
        this.submitAttempt = false;
    }
    TutorialPage.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.userData$.subscribe(function (res) {
            _this.authUser = res;
        });
        var email = { attendee_email: this.authUser.user_email };
        console.log(this.authUser);
        this.subscription = this.webservice
            .notificationList(email)
            .subscribe(function (res) {
            _this.list = res.result;
            console.log(_this.list);
        });
    };
    TutorialPage.prototype.goTo = function (object, start_date, end_date) {
        var now = moment__WEBPACK_IMPORTED_MODULE_6__();
        var date = moment__WEBPACK_IMPORTED_MODULE_6__["utc"](start_date).local();
        this.data.setData(object);
        console.log(object);
        if (now.isBefore(end_date) && date.isBefore(now.toISOString(true))) {
            this.toastService.presentToast('to activate meeting press start call');
            this.data.setData(object);
        }
        else {
            this.toastService.presentToast('time out of bounds');
        }
    };
    TutorialPage.prototype.doRefresh = function (event) {
        var _this = this;
        console.log('Begin async operation');
        this.subscription.unsubscribe();
        var email = { attendee_email: this.authUser.user_email };
        this.subscription = this.webservice
            .notificationList(email)
            .subscribe(function (res) {
            _this.list = res.result;
            console.log(_this.list);
        });
        setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    };
    TutorialPage.ctorParameters = function () { return [
        { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
    ]; };
    TutorialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__(/*! raw-loader!./tutorial.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tutorial/tutorial.page.html"),
            styles: [__webpack_require__(/*! ./tutorial.page.scss */ "./src/app/pages/tutorial/tutorial.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], TutorialPage);
    return TutorialPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tutorial-tutorial-module-es5.js.map