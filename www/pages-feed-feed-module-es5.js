(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-feed-feed-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/feed/feed.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/feed/feed.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-menu-toggle class=\"class1\">\r\n      <ion-icon name=\"menu\" color=\"light\"></ion-icon>\r\n    </ion-menu-toggle>\r\n    <ion-title\r\n      >Dashboard\r\n\r\n      <ion-icon\r\n        (click)=\"refresh()\"\r\n        class=\"notification\"\r\n        routerLink=\"/home/tutorial\"\r\n        name=\"notifications-outline\"\r\n        color=\"light\"\r\n      ></ion-icon\r\n    ></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content scroll-y=\"true\">\r\n  <h2>Hello {{ authUser?.name }},</h2>\r\n  <h2>Welcome To Acupace</h2>\r\n\r\n  <ion-slides>\r\n    <ion-slide>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <img\r\n            src=\"https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500\"\r\n            alt=\"\"\r\n          />\r\n          <ion-card-subtitle></ion-card-subtitle>\r\n          <ion-card-title>AcuMEET</ion-card-title>\r\n        </ion-card-header>\r\n\r\n        <ion-card-content>\r\n          Keep close to Nature's heart... and break clear away, once in awhile,\r\n          and climb a mountain or spend a week in the woods. Wash your spirit\r\n          clean.\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <img\r\n            src=\"https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500\"\r\n            alt=\"\"\r\n          />\r\n          <ion-card-subtitle></ion-card-subtitle>\r\n          <ion-card-title>AcuMEET</ion-card-title>\r\n        </ion-card-header>\r\n\r\n        <ion-card-content>\r\n          Keep close to Nature's heart... and break clear away, once in awhile,\r\n          and climb a mountain or spend a week in the woods. Wash your spirit\r\n          clean.\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <img\r\n            src=\"https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500\"\r\n            alt=\"\"\r\n          />\r\n          <ion-card-subtitle></ion-card-subtitle>\r\n          <ion-card-title>AcuMEET</ion-card-title>\r\n        </ion-card-header>\r\n\r\n        <ion-card-content>\r\n          Keep close to Nature's heart... and break clear away, once in awhile,\r\n          and climb a mountain or spend a week in the woods. Wash your spirit\r\n          clean.\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          <img\r\n            src=\"https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500\"\r\n            alt=\"\"\r\n          />\r\n          <ion-card-subtitle></ion-card-subtitle>\r\n          <ion-card-title>AcuMEET</ion-card-title>\r\n        </ion-card-header>\r\n\r\n        <ion-card-content>\r\n          Keep close to Nature's heart... and break clear away, once in awhile,\r\n          and climb a mountain or spend a week in the woods. Wash your spirit\r\n          clean.\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/feed/feed.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/feed/feed.module.ts ***!
  \*******************************************/
/*! exports provided: FeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feed.page */ "./src/app/pages/feed/feed.page.ts");








var routes = [
    {
        path: '',
        component: _feed_page__WEBPACK_IMPORTED_MODULE_7__["FeedPage"]
    }
];
var FeedPageModule = /** @class */ (function () {
    function FeedPageModule() {
    }
    FeedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_7__["FeedPage"]]
        })
    ], FeedPageModule);
    return FeedPageModule;
}());



/***/ }),

/***/ "./src/app/pages/feed/feed.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/feed/feed.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".class1 {\n  float: left;\n}\n\nion-toolbar {\n  --ion-background-color: #0f4c81 !important;\n}\n\nion-title {\n  color: white;\n  text-align: center;\n}\n\n.notification {\n  float: right;\n}\n\nion-icon {\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmVlZC9DOlxcVXNlcnNcXGxlbm92b1xcRGVza3RvcFxccHJvamVjdFxcYWN1TUVFVC9zcmNcXGFwcFxccGFnZXNcXGZlZWRcXGZlZWQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mZWVkL2ZlZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBRENBO0VBQ0UsMENBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0dGOztBREFBO0VBQ0UsWUFBQTtBQ0dGOztBREFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlZWQvZmVlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xhc3MxIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzBmNGM4MSAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi10aXRsZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbiIsIi5jbGFzczEge1xuICBmbG9hdDogbGVmdDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMGY0YzgxICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5pb24taWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/feed/feed.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/feed/feed.page.ts ***!
  \*****************************************/
/*! exports provided: FeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPage", function() { return FeedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_feed_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/feed.service */ "./src/app/services/feed.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/toast.service */ "./src/app/services/toast.service.ts");






var FeedPage = /** @class */ (function () {
    function FeedPage(auth, feedSerive, toastService, webservice) {
        this.auth = auth;
        this.feedSerive = feedSerive;
        this.toastService = toastService;
        this.webservice = webservice;
        this.page_name = 'Feed';
        this.submitAttempt = false;
        this.postData = {
            user_id: '',
            token: '',
        };
    }
    FeedPage.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.userData$.subscribe(function (res) {
            _this.authUser = res;
            _this.feedData();
        });
    };
    FeedPage.prototype.feedData = function () {
        var _this = this;
        console.log(this.authUser);
        this.postData.user_id = this.authUser.user_id;
        this.postData.token = this.authUser.token;
        if (this.postData.user_id && this.postData.token) {
            this.feedSerive.feedData(this.postData).subscribe(function (res) {
                _this.feedSerive.changeFeedData(res.feedData);
            }, function (error) {
                _this.toastService.presentToast('Network Issue.');
            });
        }
    };
    FeedPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: src_app_services_feed_service__WEBPACK_IMPORTED_MODULE_2__["FeedService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
        { type: _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }
    ]; };
    FeedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! raw-loader!./feed.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/feed/feed.page.html"),
            styles: [__webpack_require__(/*! ./feed.page.scss */ "./src/app/pages/feed/feed.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_services_feed_service__WEBPACK_IMPORTED_MODULE_2__["FeedService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], FeedPage);
    return FeedPage;
}());



/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NotificationService = /** @class */ (function () {
    function NotificationService(httpservice, router) {
        this.httpservice = httpservice;
        this.router = router;
    }
    NotificationService.prototype.AddInvitation = function (bodystring) {
        return this.httpservice.post("add_invitation_details.php", bodystring);
    };
    NotificationService.prototype.notificationList = function (bodystring) {
        return this.httpservice.post("invitation_notificationlist.php", bodystring);
    };
    NotificationService.prototype.meetingList = function (bodystring) {
        return this.httpservice.post("host_invitation_notificationlist.php", bodystring);
    };
    NotificationService.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ToastService = /** @class */ (function () {
    function ToastService(toastController) {
        this.toastController = toastController;
    }
    ToastService.prototype.presentToast = function (infoMessage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: infoMessage,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToastService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], ToastService);
    return ToastService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-feed-feed-module-es5.js.map