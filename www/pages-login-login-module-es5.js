(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"content\" padding=\"true\">\r\n  <div class=\"center\">\r\n    <h1>Sign In</h1>\r\n  </div>\r\n  <form [formGroup]=\"loginForm\">\r\n    <ion-list>\r\n      <ion-item>\r\n        <div\r\n          class=\"noborder\"\r\n          no-lines\r\n          *ngIf=\"!loginForm.controls.mobileno.valid && (loginForm.controls.mobileno.dirty || submitAttempt)\"\r\n        >\r\n          <p text-left text-wrap class=\"error\" color=\"danger\">\r\n            Please enter the mobile number\r\n          </p>\r\n        </div>\r\n        <ion-label position=\"stacked\">Username</ion-label>\r\n        <ion-input\r\n          formControlName=\"mobileno\"\r\n          autocomplete=\"off\"\r\n          type=\"tel\"\r\n          name=\"mobileno\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <!-- [(ngModel)]=\"postData.mobileno\" -->\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Password</ion-label>\r\n        <ion-input\r\n          autocomplete=\"off\"\r\n          formControlName=\"password\"\r\n          type=\"password\"\r\n          name=\"password\"\r\n        ></ion-input>\r\n        <!-- [(ngModel)]=\"postData.password\" -->\r\n      </ion-item>\r\n      <div\r\n        class=\"noborder\"\r\n        no-lines\r\n        *ngIf=\"!loginForm.controls.password.valid && (loginForm.controls.password.dirty || submitAttempt)\"\r\n      ></div>\r\n    </ion-list>\r\n    <p>\r\n      Dont have account ?\r\n      <a routerLink=\"/signup\">Create Account</a>\r\n    </p>\r\n\r\n    <ion-button\r\n      shape=\"round\"\r\n      expand=\"block\"\r\n      color=\"secondary\"\r\n      (click)=\"loginAction()\"\r\n      >Login</ion-button\r\n    >\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-login .noborder {\n  border-bottom: 0px solid #ffffff !important;\n}\npage-login .error {\n  font-size: 14.4px !important;\n  color: #ea6153;\n}\nion-toolbar {\n  text-align: center;\n}\nion-content {\n  --background: url(\"https://images.pexels.com/photos/4007310/pexels-photo-4007310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500\")\n    no-repeat center center fixed;\n  background-size: cover;\n}\nion-list {\n  border-radius: 15px !important;\n}\nh1 {\n  margin-top: 150px;\n  padding-bottom: 30px;\n  color: #355c7d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxsZW5vdm9cXERlc2t0b3BcXHByb2plY3RcXGFjdU1FRVQvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSwyQ0FBQTtBQ0RKO0FER0U7RUFDRSw0QkFBQTtFQUNBLGNBQUE7QUNESjtBREtBO0VBQ0Usa0JBQUE7QUNGRjtBREtBO0VBRUU7aUNBQUE7RUFJQSxzQkFBQTtBQ0hGO0FETUE7RUFDRSw4QkFBQTtBQ0hGO0FETUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicGFnZS1sb2dpbiB7XHJcbiAgLy8gVmFsaWRhdGlvbiBFcnJvciBNc2dcclxuICAubm9ib3JkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNmZmZmZmYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmVycm9yIHtcclxuICAgIGZvbnQtc2l6ZTogMTQuNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2VhNjE1MztcclxuICB9XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAvLy0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwZjRjNzUgIWltcG9ydGFudDtcclxuICAtLWJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNDAwNzMxMC9wZXhlbHMtcGhvdG8tNDAwNzMxMC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDAnKVxyXG4gICAgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgY29sb3I6ICMzNTVjN2Q7XHJcbn1cclxuIiwicGFnZS1sb2dpbiAubm9ib3JkZXIge1xuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxucGFnZS1sb2dpbiAuZXJyb3Ige1xuICBmb250LXNpemU6IDE0LjRweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2VhNjE1Mztcbn1cblxuaW9uLXRvb2xiYXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy80MDA3MzEwL3BleGVscy1waG90by00MDA3MzEwLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiKVxuICAgIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuaW9uLWxpc3Qge1xuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmgxIHtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBjb2xvcjogIzM1NWM3ZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_auth_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/auth-constants */ "./src/app/config/auth-constants.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var LoginPage = /** @class */ (function () {
    // postData = {
    //   mobileno: '',
    //   password: ''
    // };
    function LoginPage(router, authService, storageService, toastService, formBuilder) {
        this.router = router;
        this.authService = authService;
        this.storageService = storageService;
        this.toastService = toastService;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.loginForm = this.formBuilder.group({
            mobileno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])]
        });
    }
    LoginPage.prototype.ngOnInit = function () { };
    // validateInputs() {
    //   console.log(this.loginForm);
    //   let mobileno = this.loginForm.mobileno.trim();
    //   let password = this.loginForm.password.trim();
    //   return ( 
    //     this.loginForm.mobileno &&
    //     this.loginForm.password &&
    //     mobileno.length <= 10 &&
    //     password.length > 0
    //   );
    // }
    LoginPage.prototype.loginAction = function () {
        var _this = this;
        this.submitAttempt = true;
        // if (this.validateInputs()) {
        if (this.loginForm.valid) {
            var bodystring = {
                "mobileno": this.loginForm.get('mobileno').value,
                "password": this.loginForm.get('password').value,
            };
            this.authService.login(bodystring).subscribe(function (res) {
                console.log('logged data', JSON.stringify(res));
                var data = JSON.stringify(res);
                console.log('login res -> ', res['result']);
                if (res['result'] != 'No Record') {
                    // Storing the User data.
                    _this.storageService
                        .store(_config_auth_constants__WEBPACK_IMPORTED_MODULE_3__["AuthConstants"].AUTH, res.result)
                        .then(function (res) {
                        _this.router.navigate(['home']);
                    });
                }
                else {
                    _this.toastService.presentToast('Incorrect username and password.');
                }
            }, function (error) {
                _this.toastService.presentToast('Network Issue.');
            });
        }
        else {
            this.toastService.presentToast('Please enter mobileno or password.');
        }
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
    ], LoginPage);
    return LoginPage;
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
//# sourceMappingURL=pages-login-login-module-es5.js.map