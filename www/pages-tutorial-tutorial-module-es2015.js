(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tutorial-tutorial-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tutorial/tutorial.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tutorial/tutorial.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-menu-toggle class=\"class1\">\r\n      <ion-icon name=\"menu\" color=\"light\"></ion-icon>\r\n    </ion-menu-toggle>\r\n    <ion-title>Meetings as attendee</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n      pullingIcon=\"chevron-down-circle-outline\"\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\"\r\n      refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n\r\n\r\n  <ion-item routerLink=\"/home/meetings\" >\r\n    <ion-icon\r\n      name=\"notifications-outline\"\r\n      color=\"dark\"\r\n      slot=\"start\"\r\n    ></ion-icon>\r\n    <ion-button color=\"dark\">view as host</ion-button>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"inset\" *ngFor=\"let item of list\">\r\n    <ion-card color=\"light\">\r\n      <ion-card-content>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n              {{item.role}}\r\n            </ion-col>\r\n            <ion-col>\r\n              {{item.host_name}}\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              {{item.room_id}}\r\n            </ion-col>\r\n            <ion-col>\r\n              Start time: {{item.host_meeting_start_time}}\r\n            </ion-col>\r\n            <ion-col>\r\n              End time: {{item.host_meeting_end_time}}\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <ion-button\r\n          shape=\"round\"\r\n          routerLink=\"/home/messages\"\r\n          (click)=\"goTo(item,item.host_meeting_start_time,item.host_meeting_end_time)\"\r\n          >start meet</ion-button\r\n        >\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-item>\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tutorial.page */ "./src/app/pages/tutorial/tutorial.page.ts");







const routes = [
    {
        path: '',
        component: _tutorial_page__WEBPACK_IMPORTED_MODULE_6__["TutorialPage"]
    }
];
let TutorialPageModule = class TutorialPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/tutorial/tutorial.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --ion-background-color: #0f4c81 !important;\n}\n\nion-title {\n  color: white;\n  margin-left: 80px;\n  margin-top: 5px;\n}\n\nion-icon {\n  width: 30px;\n  height: 30px;\n}\n\nion-grid {\n  border-radius: 15px;\n}\n\nion-card {\n  color: dark;\n}\n\n.class1 {\n  float: left;\n}\n\nion-button {\n  --background: #0f4c81;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHV0b3JpYWwvQzpcXFVzZXJzXFxsZW5vdm9cXERlc2t0b3BcXHByb2plY3RcXEFjdXBhY2UtaW9uaWMvc3JjXFxhcHBcXHBhZ2VzXFx0dXRvcmlhbFxcdHV0b3JpYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90dXRvcmlhbC90dXRvcmlhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUVBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNFRjs7QURDQTtFQUNFLG1CQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0FDR0Y7O0FEQUE7RUFDRSxxQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHV0b3JpYWwvdHV0b3JpYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwZjRjODEgIWltcG9ydGFudDtcclxufVxyXG5pb24tdGl0bGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAvLyAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5pb24taWNvbiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIGNvbG9yOiBkYXJrO1xyXG59XHJcbi5jbGFzczEge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6ICMwZjRjODE7XHJcbn1cclxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMGY0YzgxICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuaW9uLWljb24ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG5pb24tZ3JpZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgY29sb3I6IGRhcms7XG59XG5cbi5jbGFzczEge1xuICBmbG9hdDogbGVmdDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzBmNGM4MTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







let TutorialPage = class TutorialPage {
    constructor(webservice, auth, toastService, data) {
        this.webservice = webservice;
        this.auth = auth;
        this.toastService = toastService;
        this.data = data;
        this.submitAttempt = false;
    }
    ngOnInit() {
        this.auth.userData$.subscribe((res) => {
            this.authUser = res;
        });
        let email = { attendee_email: this.authUser.user_email };
        console.log(this.authUser);
        this.subscription = this.webservice
            .notificationList(email)
            .subscribe((res) => {
            this.list = res.result;
            console.log(this.list);
            this.list.reduce((arr, item) => {
                let exists = !!arr.find(x => x.host_room_id === item.host_room_id);
                if (!exists) {
                    arr.push(item);
                }
                return arr;
            }, []);
            console.log(this.list);
            this.leng = this.list.length;
        });
    }
    goTo(object, start_date, end_date) {
        let now = moment__WEBPACK_IMPORTED_MODULE_6__().format("YYYY-MM-DDTHH:mm");
        let date = moment__WEBPACK_IMPORTED_MODULE_6__(start_date).format("YYYY-MM-DDTHH:mm");
        console.log(now, date);
        if (moment__WEBPACK_IMPORTED_MODULE_6__(now).isBefore(moment__WEBPACK_IMPORTED_MODULE_6__(end_date).format("YYYY-MM-DDTHH:mm")) && moment__WEBPACK_IMPORTED_MODULE_6__(moment__WEBPACK_IMPORTED_MODULE_6__(start_date).format("YYYY-MM-DDTHH:mm")).isBefore(moment__WEBPACK_IMPORTED_MODULE_6__(now))) {
            this.data.setData(object);
        }
        else {
            this.toastService.presentToast('time out of bounds');
        }
    }
    doRefresh(event) {
        this.subscription.unsubscribe();
        let email = { attendee_email: this.authUser.user_email };
        console.log(this.authUser);
        this.subscription = this.webservice
            .notificationList(email)
            .subscribe((res) => {
            this.list = res.result;
            console.log(this.list);
            this.list.reduce((arr, item) => {
                let exists = !!arr.find(x => x.host_room_id === item.host_room_id);
                if (!exists) {
                    arr.push(item);
                }
                return arr;
            }, []);
            console.log(this.list);
            if (this.leng < this.list.length) {
                this.toastService.presentToast('you have new invitation');
                this.leng = this.list.length;
            }
            if (event) {
                event.target.complete();
            }
        });
    }
};
TutorialPage.ctorParameters = () => [
    { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
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



/***/ })

}]);
//# sourceMappingURL=pages-tutorial-tutorial-module-es2015.js.map