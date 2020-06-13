(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/signup/signup.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding=\"true\">\r\n  <div class=\"center\">\r\n    <img src=\"assets/images/logo1.png\" width=\"88\" height=\"85\" alt=\"logo\" />\r\n    <p class=\"logoname\" style=\"text-align: center;\">accuMeet</p>\r\n  </div>\r\n  <div class=\"head\">\r\n    <h1>Create Account</h1>\r\n  </div>\r\n  <form padding text-center [formGroup]=\"registerForm\">\r\n    <div class=\"adjust\">\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Name</ion-label>\r\n          <!-- [(ngModel)]=\"postData.name\" -->\r\n          <ion-input\r\n            autocomplete=\"off\"\r\n            formControlName=\"name\"\r\n            name=\"name\"\r\n            type=\"text\"\r\n          ></ion-input>\r\n        </ion-item>\r\n        <div\r\n          class=\"noborder\"\r\n          no-lines\r\n          *ngIf=\"!registerForm.controls.name.valid && (registerForm.controls.name.dirty || submitAttempt)\"\r\n        >\r\n          <p text-left text-wrap class=\"error\">Please enter the Name</p>\r\n        </div>\r\n\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Email</ion-label>\r\n          <ion-input\r\n            autocomplete=\"off\"\r\n            formControlName=\"email\"\r\n            name=\"email\"\r\n            type=\"email\"\r\n          ></ion-input>\r\n        </ion-item>\r\n        <div\r\n          class=\"noborder\"\r\n          no-lines\r\n          *ngIf=\"!registerForm.controls.email.valid && (registerForm.controls.email.dirty || submitAttempt)\"\r\n        >\r\n          <p text-left text-wrap class=\"error\">Please enter a valid email</p>\r\n        </div>\r\n\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Mobile No</ion-label>\r\n          <ion-input\r\n            autocomplete=\"off\"\r\n            name=\"mobile\"\r\n            formControlName=\"mobile\"\r\n            type=\"tel\"\r\n          ></ion-input>\r\n        </ion-item>\r\n        <div\r\n          class=\"noborder\"\r\n          no-lines\r\n          *ngIf=\"!registerForm.controls.mobile.valid && (registerForm.controls.mobile.dirty || submitAttempt)\"\r\n        >\r\n          <p text-left text-wrap class=\"error\">\r\n            Please enter 10 digit Mobile No.\r\n          </p>\r\n        </div>\r\n      </ion-list>\r\n      <br />\r\n\r\n      Already have an account? <a routerLink=\"/login\">Sign in.</a>\r\n      <ion-button expand=\"block\" shape=\"round\" (click)=\"signupAction()\"\r\n        >Create Account</ion-button\r\n      >\r\n    </div>\r\n  </form>\r\n\r\n  <div class=\"footer\">\r\n    <p>By signing up! agree with the</p>\r\n    <a href=\"\">term and condition</a>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");







var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-signup .noborder {\n  border-bottom: 0px solid #ffffff !important;\n}\npage-signup .error {\n  font-size: 14.4px !important;\n  color: #ea6153;\n}\n.head {\n  text-align: center;\n  margin-top: 60px;\n  color: #355c7d;\n}\nion-list {\n  border-radius: 15px !important;\n}\nion-content {\n  --background: url(\"https://images.pexels.com/photos/4007310/pexels-photo-4007310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500\")\n    no-repeat center center fixed;\n  background-size: cover;\n}\n.footer {\n  text-align: center;\n  padding-top: 30px;\n}\n.adjust {\n  margin-top: -10px;\n}\n.logoname {\n  margin-top: -25px;\n  margin-left: 20px;\n  color: #081d7c;\n}\nimg {\n  margin-left: 20px;\n  width: 150px;\n  height: 130px;\n}\nion-button {\n  --background: #27496d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0M6XFxVc2Vyc1xcbGVub3ZvXFxEZXNrdG9wXFxwcm9qZWN0XFxBY3VwYWNlLWlvbmljL3NyY1xcYXBwXFxwYWdlc1xcc2lnbnVwXFxzaWdudXAucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLDJDQUFBO0FDREo7QURHRTtFQUNFLDRCQUFBO0VBQ0EsY0FBQTtBQ0RKO0FES0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsY0FBQTtBQ0hGO0FES0E7RUFDRSw4QkFBQTtBQ0ZGO0FES0E7RUFFRTtpQ0FBQTtFQUlBLHNCQUFBO0FDSEY7QURNQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNIRjtBREtBO0VBQ0UsaUJBQUE7QUNGRjtBRElBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNERjtBREdBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0FGO0FER0E7RUFDRSxxQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLXNpZ251cCB7XHJcbiAgLy8gVmFsaWRhdGlvbiBFcnJvciBNc2dcclxuICAubm9ib3JkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNmZmZmZmYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmVycm9yIHtcclxuICAgIGZvbnQtc2l6ZTogMTQuNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2VhNjE1MztcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICAvL3BhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gIGNvbG9yOiAjMzU1YzdkO1xyXG59XHJcbmlvbi1saXN0IHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAvLy0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwZjRjNzUgIWltcG9ydGFudDtcclxuICAtLWJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNDAwNzMxMC9wZXhlbHMtcGhvdG8tNDAwNzMxMC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDAnKVxyXG4gICAgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuLmFkanVzdCB7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuLmxvZ29uYW1lIHtcclxuICBtYXJnaW4tdG9wOiAtMjVweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBjb2xvcjogcmdiKDgsIDI5LCAxMjQpO1xyXG59XHJcbmltZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogIzI3NDk2ZDtcclxufVxyXG4iLCJwYWdlLXNpZ251cCAubm9ib3JkZXIge1xuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxucGFnZS1zaWdudXAgLmVycm9yIHtcbiAgZm9udC1zaXplOiAxNC40cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNlYTYxNTM7XG59XG5cbi5oZWFkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBjb2xvcjogIzM1NWM3ZDtcbn1cblxuaW9uLWxpc3Qge1xuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy80MDA3MzEwL3BleGVscy1waG90by00MDA3MzEwLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiKVxuICAgIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbi5hZGp1c3Qge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLmxvZ29uYW1lIHtcbiAgbWFyZ2luLXRvcDogLTI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBjb2xvcjogIzA4MWQ3Yztcbn1cblxuaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzI3NDk2ZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/signup/signup.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var SignupPage = /** @class */ (function () {
    // postData = {
    //   name: '',
    //   username: '',
    //   email: '',
    //   password: ''
    // };
    function SignupPage(authService, toastService, storageService, router, formBuilder) {
        this.authService = authService;
        this.toastService = toastService;
        this.storageService = storageService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.show = true;
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])]
        });
    }
    SignupPage.prototype.ngOnInit = function () { };
    // validateInputs() {
    //   let username = this.postData.username.trim();
    //   let password = this.postData.password.trim();
    //   let email = this.postData.email.trim();
    //   let name = this.postData.name.trim();
    //   return (
    //     this.postData.name &&
    //     this.postData.username &&
    //     this.postData.password &&
    //     this.postData.email &&
    //     email.length > 0 &&
    //     username.length > 0 &&
    //     email.length > 0 &&
    //     password.length > 0
    //   );
    // }
    SignupPage.prototype.signupAction = function () {
        //   if (this.validateInputs()) { 
        var _this = this;
        this.submitAttempt = true;
        if (this.registerForm.valid) {
            var bodystring = {
                "name": this.registerForm.get('name').value,
                "email": this.registerForm.get('email').value,
                "mobileno": this.registerForm.get('mobile').value,
                "lat": '',
                "long": '',
                "device_id": '',
                "device_details": ''
            };
            this.authService.signup(bodystring).subscribe(function (res) {
                if (res) {
                    _this.toastService.presentToast(res.message);
                    // Storing the User data. 
                    _this.router.navigate(['login']);
                }
                else {
                    // this.toastService.presentToast(
                    //   'Data alreay exists, please enter new details.'
                    // );  
                }
            }, function (error) {
                _this.toastService.presentToast('Network Issue.');
            });
        }
        else {
            this.toastService.presentToast('Please enter name, email, username or password.');
        }
    };
    SignupPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
    ]; };
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/signup/signup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], SignupPage);
    return SignupPage;
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
//# sourceMappingURL=pages-signup-signup-module-es5.js.map