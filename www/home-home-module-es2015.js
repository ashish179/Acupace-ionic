(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-menu\r\n  side=\"start\"\r\n  menuId=\"main-menu\"\r\n  contentId=\"main\"\r\n  class=\"my-custom-menu\"\r\n>\r\n  <ion-content>\r\n    <div class=\"user-part\">\r\n      <ion-avatar>\r\n        <img src=\"./assets/images/logo1.png\" alt=\"\" />\r\n      </ion-avatar>\r\n      <h1 class=\"logoname\">acuMeet</h1>\r\n      <ion-card-subtitle class=\"username\" color=\"dark\"\r\n        >@username</ion-card-subtitle\r\n      >\r\n    </div>\r\n\r\n    <ion-list>\r\n      <ion-item routerLink=\"/home\" (click)=\"toggleMenu()\">\r\n        <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\r\n        <ion-label>Home </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item routerLink=\"/home/notifications\" (click)=\"toggleMenu()\">\r\n        <ion-icon name=\"desktop-outline\" slot=\"start\"></ion-icon>\r\n        <ion-label>Host Meeting</ion-label>\r\n      </ion-item>\r\n      <ion-item routerLink=\"/home/meetings\" (click)=\"toggleMenu()\">\r\n        <ion-icon name=\"videocam\" slot=\"start\"></ion-icon>\r\n        <ion-label>Meetings</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item routerLink=\"/home/profile\" (click)=\"toggleMenu()\">\r\n        <ion-icon name=\"person-outline\" slot=\"start\"> </ion-icon>\r\n        <ion-label>Profile</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item routerLink=\"/home/faq\" (click)=\"toggleMenu()\">\r\n        <ion-icon name=\"bar-chart-outline\" slot=\"start\"></ion-icon>\r\n        <ion-label>FAQ</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item routerLink=\"/home/contact-us\" (click)=\"toggleMenu()\">\r\n        <ion-icon name=\"mail-outline\" slot=\"start\"></ion-icon>\r\n        <ion-label>Contact-us</ion-label>\r\n      </ion-item>\r\n\r\n\r\n      <ion-item routerLink=\"/home/about-us\" (click)=\"toggleMenu()\">\r\n        <ion-icon name=\"logo-apple-appstore\" slot=\"start\"></ion-icon>\r\n        <ion-label>About-us</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item routerLink=\"/home/settings\" (click)=\"toggleMenu()\">\r\n        <ion-icon name=\"Settings\" slot=\"start\"></ion-icon>\r\n        <ion-label>Settings</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"logoutAction()\">\r\n        <ion-icon name=\"log-out-outline\" slot=\"start\"></ion-icon>\r\n        <ion-label>LogOut </ion-label>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n<ion-router-outlet id=\"main\"></ion-router-outlet>\r\n"

/***/ }),

/***/ "./src/app/guards/home.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/home.guard.ts ***!
  \**************************************/
/*! exports provided: HomeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeGuard", function() { return HomeGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config_auth_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/auth-constants */ "./src/app/config/auth-constants.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");





let HomeGuard = class HomeGuard {
    constructor(storageService, router) {
        this.storageService = storageService;
        this.router = router;
    }
    canActivate() {
        return new Promise(resolve => {
            this.storageService
                .get(_config_auth_constants__WEBPACK_IMPORTED_MODULE_3__["AuthConstants"].AUTH)
                .then(res => {
                if (res) {
                    resolve(true);
                }
                else {
                    this.router.navigate(['login']);
                    resolve(false);
                }
            })
                .catch(err => {
                resolve(false);
            });
        });
    }
};
HomeGuard.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], HomeGuard);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.router */ "./src/app/home/home.router.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_router__WEBPACK_IMPORTED_MODULE_6__["HomeRouter"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-tab-button {\n  --color-selected: #fff;\n}\n\nimg {\n  margin-left: 1px;\n  margin-top: 10px;\n  height: 85px;\n  width: 85px;\n  position: absolute;\n}\n\nion-card-subtitle {\n  margin-left: 10px;\n  margin-top: 70px;\n  height: 60px;\n}\n\n.user-part {\n  position: relative;\n  width: 300px;\n  height: 123px;\n  background-image: url(\"https://images.pexels.com/photos/4031710/pexels-photo-4031710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300\");\n}\n\nion-item {\n  color: white;\n}\n\nion-item {\n  --ion-background-color: #10375c !important;\n}\n\nion-icon {\n  color: white;\n}\n\nion-content {\n  --ion-background-color: #10375c;\n}\n\n.logoname {\n  color: #1765ca;\n  font-size: 20px;\n  margin-left: 5px;\n  margin-top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGxlbm92b1xcRGVza3RvcFxccHJvamVjdFxcQWN1cGFjZS1pb25pYy9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUlBQUE7QUNJRjs7QUREQTtFQUNFLFlBQUE7QUNJRjs7QUREQTtFQUNFLDBDQUFBO0FDSUY7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FEQ0E7RUFHRSwrQkFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJ1dHRvbiB7XHJcbiAgLS1jb2xvci1zZWxlY3RlZDogI2ZmZjtcclxufVxyXG5pbWcge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBoZWlnaHQ6IDg1cHg7XHJcbiAgd2lkdGg6IDg1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbmlvbi1jYXJkLXN1YnRpdGxlIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG4udXNlci1wYXJ0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMTIzcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy80MDMxNzEwL3BleGVscy1waG90by00MDMxNzEwLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTMwMCcpO1xyXG5cclxufVxyXG5pb24taXRlbSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzEwMzc1YyAhaW1wb3J0YW50O1xyXG4gIC8vIC0tYmFja2dyb3VuZDogdXJsKCdodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8zNTE4NjIzL3BleGVscy1waG90by0zNTE4NjIzLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMCcpO1xyXG4gIC8vIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAvLyAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLy8gYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5pb24taWNvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG5cclxuXHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzEwMzc1YztcclxuXHJcbn1cclxuLmxvZ29uYW1le1xyXG4gIGNvbG9yOiByZ2IoMjMsIDEwMSwgMjAyKTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6NXB4O1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuXHJcbn1cclxuIiwiaW9uLXRhYi1idXR0b24ge1xuICAtLWNvbG9yLXNlbGVjdGVkOiAjZmZmO1xufVxuXG5pbWcge1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBoZWlnaHQ6IDg1cHg7XG4gIHdpZHRoOiA4NXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLnVzZXItcGFydCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDEyM3B4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy80MDMxNzEwL3BleGVscy1waG90by00MDMxNzEwLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTMwMFwiKTtcbn1cblxuaW9uLWl0ZW0ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzEwMzc1YyAhaW1wb3J0YW50O1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTAzNzVjO1xufVxuXG4ubG9nb25hbWUge1xuICBjb2xvcjogIzE3NjVjYTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");




let HomePage = class HomePage {
    constructor(menu, auth) {
        this.menu = menu;
        this.auth = auth;
    }
    toggleMenu() {
        this.menu.toggle(); //Add this method to your button click function
    }
    logoutAction() {
        this.auth.logout();
    }
    ngOnInit() {
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], HomePage);



/***/ }),

/***/ "./src/app/home/home.router.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.router.ts ***!
  \*************************************/
/*! exports provided: HomeRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRouter", function() { return HomeRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _guards_home_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../guards/home.guard */ "./src/app/guards/home.guard.ts");
/* harmony import */ var _resolvers_user_data_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resolvers/user-data.resolver */ "./src/app/resolvers/user-data.resolver.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");






const routes = [
    {
        path: 'home',
        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"],
        canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_3__["HomeGuard"]],
        resolve: {
            userData: _resolvers_user_data_resolver__WEBPACK_IMPORTED_MODULE_4__["UserDataResolver"]
        },
        children: [
            {
                path: 'feed',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | pages-feed-feed-module */[__webpack_require__.e("default~pages-feed-feed-module~pages-profile-profile-module~pages-welcome-welcome-module"), __webpack_require__.e("pages-feed-feed-module")]).then(__webpack_require__.bind(null, /*! ../pages/feed/feed.module */ "./src/app/pages/feed/feed.module.ts")).then(m => m.FeedPageModule)
                    }
                ]
            },
            {
                path: 'messages',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-messages-messages-module */ "pages-messages-messages-module").then(__webpack_require__.bind(null, /*! ../pages/messages/messages.module */ "./src/app/pages/messages/messages.module.ts")).then(m => m.MessagesPageModule)
                    }
                ]
            },
            {
                path: 'notifications',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | pages-notifications-notifications-module */[__webpack_require__.e("default~pages-meetings-meetings-module~pages-notifications-notifications-module~pages-tutorial-tutor~4a6bab91"), __webpack_require__.e("pages-notifications-notifications-module")]).then(__webpack_require__.bind(null, /*! ../pages/notifications/notifications.module */ "./src/app/pages/notifications/notifications.module.ts")).then(m => m.NotificationsPageModule)
                    }
                ]
            },
            {
                path: 'settings',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-settings-settings-module */ "pages-settings-settings-module").then(__webpack_require__.bind(null, /*! ../pages/settings/settings.module */ "./src/app/pages/settings/settings.module.ts")).then(m => m.SettingsPageModule)
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | pages-profile-profile-module */[__webpack_require__.e("default~home-home-module~index-index-module~pages-about-us-about-us-module~pages-meetings-meetings-m~71a403f3"), __webpack_require__.e("default~pages-feed-feed-module~pages-profile-profile-module~pages-welcome-welcome-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../pages/profile/profile.module */ "./src/app/pages/profile/profile.module.ts")).then(m => m.ProfilePageModule)
                    }
                ]
            },
            {
                path: 'contact-us',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-contact-us-contact-us-module */ "pages-contact-us-contact-us-module").then(__webpack_require__.bind(null, /*! ../pages/contact-us/contact-us.module */ "./src/app/pages/contact-us/contact-us.module.ts")).then(m => m.ContactUsPageModule)
                    }
                ]
            },
            {
                path: 'tutorial',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | pages-tutorial-tutorial-module */[__webpack_require__.e("default~home-home-module~index-index-module~pages-about-us-about-us-module~pages-meetings-meetings-m~71a403f3"), __webpack_require__.e("default~pages-meetings-meetings-module~pages-notifications-notifications-module~pages-tutorial-tutor~4a6bab91"), __webpack_require__.e("common"), __webpack_require__.e("pages-tutorial-tutorial-module")]).then(__webpack_require__.bind(null, /*! ../pages/tutorial/tutorial.module */ "./src/app/pages/tutorial/tutorial.module.ts")).then(m => m.TutorialPageModule)
                    }
                ]
            },
            {
                path: 'about-us',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | pages-about-us-about-us-module */[__webpack_require__.e("default~home-home-module~index-index-module~pages-about-us-about-us-module~pages-meetings-meetings-m~71a403f3"), __webpack_require__.e("common"), __webpack_require__.e("pages-about-us-about-us-module")]).then(__webpack_require__.bind(null, /*! ../pages/about-us/about-us.module */ "./src/app/pages/about-us/about-us.module.ts")).then(m => m.AboutUsPageModule)
                    }
                ]
            },
            {
                path: 'meetings',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | pages-meetings-meetings-module */[__webpack_require__.e("default~home-home-module~index-index-module~pages-about-us-about-us-module~pages-meetings-meetings-m~71a403f3"), __webpack_require__.e("default~pages-meetings-meetings-module~pages-notifications-notifications-module~pages-tutorial-tutor~4a6bab91"), __webpack_require__.e("common"), __webpack_require__.e("pages-meetings-meetings-module")]).then(__webpack_require__.bind(null, /*! ../pages/meetings/meetings.module */ "./src/app/pages/meetings/meetings.module.ts")).then(m => m.MeetingsPageModule)
                    }
                ]
            },
            {
                path: 'faq',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-faq-faq-module */ "pages-faq-faq-module").then(__webpack_require__.bind(null, /*! ../pages/faq/faq.module */ "./src/app/pages/faq/faq.module.ts")).then(m => m.FaqPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/home/feed',
                pathMatch: 'full'
            }
        ]
    }
];
let HomeRouter = class HomeRouter {
};
HomeRouter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRouter);



/***/ }),

/***/ "./src/app/resolvers/user-data.resolver.ts":
/*!*************************************************!*\
  !*** ./src/app/resolvers/user-data.resolver.ts ***!
  \*************************************************/
/*! exports provided: UserDataResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataResolver", function() { return UserDataResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



let UserDataResolver = class UserDataResolver {
    constructor(authService) {
        this.authService = authService;
    }
    resolve() {
        console.log('Hello');
        return this.authService.getUserData();
    }
};
UserDataResolver.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
UserDataResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], UserDataResolver);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map