(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-meetings-meetings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/meetings/meetings.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/meetings/meetings.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-menu-toggle class=\"class1\">\r\n      <ion-icon name=\"menu\" color=\"light\"></ion-icon>\r\n    </ion-menu-toggle>\r\n    <ion-title>Meetings as host</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher\r\n    slot=\"fixed\"\r\n    pullFactor=\"0.5\"\r\n    pullMin=\"100\"\r\n    pullMax=\"200\"\r\n    (ionRefresh)=\"doRefresh($event)\"\r\n  >\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-item routerLink=\"/home/tutorial\">\r\n    <ion-icon\r\n      name=\"notifications-outline\"\r\n      color=\"dark\"\r\n      slot=\"start\"\r\n    ></ion-icon>\r\n    <ion-button color=\"dark\">view as attendee</ion-button>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"inset\" *ngFor=\"let item of list\">\r\n    <ion-card>\r\n      <ion-card-content>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n              {{item.role}}\r\n            </ion-col>\r\n            <ion-col>\r\n              {{item.host_name}}\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              {{item.room_id}}\r\n            </ion-col>\r\n            <ion-col>\r\n              Start time: {{item.host_meeting_start_time}}\r\n            </ion-col>\r\n            <ion-col>\r\n              End time: {{item.host_meeting_end_time}}\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <ion-button\r\n          shape=\"round\"\r\n        color=\"secondary\"\r\n          routerLink=\"/home/messages\"\r\n          (click)=\"goTo(item,item.host_meeting_start_time,item.host_meeting_end_time)\"\r\n          >start meet</ion-button\r\n        >\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-item>\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _meetings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meetings.page */ "./src/app/pages/meetings/meetings.page.ts");







var routes = [
    {
        path: '',
        component: _meetings_page__WEBPACK_IMPORTED_MODULE_6__["MeetingsPage"]
    }
];
var MeetingsPageModule = /** @class */ (function () {
    function MeetingsPageModule() {
    }
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
    return MeetingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/meetings/meetings.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/meetings/meetings.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --ion-background-color: #0f4c81 !important;\n}\n\nion-title {\n  color: white;\n  margin-left: 80px;\n  margin-top: 5px;\n}\n\nion-icon {\n  width: 30px;\n  height: 30px;\n}\n\nion-grid {\n  border-radius: 15px;\n}\n\nion-card {\n  background-color: #120136;\n  color: white;\n}\n\n.class1 {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVldGluZ3MvQzpcXFVzZXJzXFxsZW5vdm9cXERlc2t0b3BcXHByb2plY3RcXEFjdXBhY2UtaW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFxtZWV0aW5nc1xcbWVldGluZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tZWV0aW5ncy9tZWV0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUVBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNFRjs7QURDQTtFQUNFLG1CQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lZXRpbmdzL21lZXRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMGY0YzgxICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5pb24taWNvbiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjAxMzY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jbGFzczEge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbiIsImlvbi10b29sYmFyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzBmNGM4MSAhaW1wb3J0YW50O1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuaW9uLWdyaWQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjAxMzY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNsYXNzMSB7XG4gIGZsb2F0OiBsZWZ0O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







var MeetingsPage = /** @class */ (function () {
    function MeetingsPage(auth, webservice, toastService, data) {
        this.auth = auth;
        this.webservice = webservice;
        this.toastService = toastService;
        this.data = data;
    }
    MeetingsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.userData$.subscribe(function (res) {
            _this.authUser = res;
        });
        this.subscription = this.webservice.meetingList({ "host_id": this.authUser.ID }).subscribe(function (res) {
            console.log(res);
            _this.list = res.result;
            var art = _this.list.reduce(function (arr, item) {
                var exists = !!arr.find(function (x) { return x.host_room_id === item.host_room_id; });
                if (!exists) {
                    arr.push(item);
                }
                return arr;
            }, []);
            console.log(art);
            _this.list = art;
            _this.leng = _this.list.length;
        });
        console.log(this.authUser);
    };
    MeetingsPage.prototype.goTo = function (object, start_date, end_date) {
        var now = moment__WEBPACK_IMPORTED_MODULE_6__().format("YYYY-MM-DDTHH:mm");
        var date = moment__WEBPACK_IMPORTED_MODULE_6__(start_date).format("YYYY-MM-DDTHH:mm");
        console.log(now, date);
        if (moment__WEBPACK_IMPORTED_MODULE_6__(now).isBefore(moment__WEBPACK_IMPORTED_MODULE_6__(end_date).format("YYYY-MM-DDTHH:mm")) && moment__WEBPACK_IMPORTED_MODULE_6__(moment__WEBPACK_IMPORTED_MODULE_6__(start_date).format("YYYY-MM-DDTHH:mm")).isBefore(moment__WEBPACK_IMPORTED_MODULE_6__(now))) {
            this.data.setData(object);
        }
        else {
            this.toastService.presentToast('time out of bounds');
        }
    };
    MeetingsPage.prototype.doRefresh = function (event) {
        var _this = this;
        this.subscription.unsubscribe();
        this.subscription = this.webservice.meetingList({ "host_id": this.authUser.ID }).subscribe(function (res) {
            console.log(res);
            _this.list = res.result;
            var art = _this.list.reduce(function (arr, item) {
                var exists = !!arr.find(function (x) { return x.host_room_id === item.host_room_id; });
                if (!exists) {
                    arr.push(item);
                }
                return arr;
            }, []);
            console.log(art);
            _this.list = art;
            console.log(_this.leng - _this.list.length);
            if (event) {
                event.target.complete();
            }
        });
    };
    MeetingsPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
    ]; };
    MeetingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meetings',
            template: __webpack_require__(/*! raw-loader!./meetings.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/meetings/meetings.page.html"),
            styles: [__webpack_require__(/*! ./meetings.page.scss */ "./src/app/pages/meetings/meetings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], MeetingsPage);
    return MeetingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-meetings-meetings-module-es5.js.map