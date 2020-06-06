(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/signup/signup.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding=\"true\">\r\n  <div class=\"center\">\r\n    <h1>Create Account</h1>\r\n  </div>\r\n  <form padding text-center [formGroup]=\"registerForm\">\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Name</ion-label>\r\n        <!-- [(ngModel)]=\"postData.name\" -->\r\n        <ion-input\r\n          autocomplete=\"off\"\r\n          formControlName=\"name\"\r\n          name=\"name\"\r\n          type=\"text\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <div\r\n        class=\"noborder\"\r\n        no-lines\r\n        *ngIf=\"!registerForm.controls.name.valid && (registerForm.controls.name.dirty || submitAttempt)\"\r\n      >\r\n        <p text-left text-wrap class=\"error\">Please enter the Name</p>\r\n      </div>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Email</ion-label>\r\n        <ion-input\r\n          autocomplete=\"off\"\r\n          formControlName=\"email\"\r\n          name=\"email\"\r\n          type=\"email\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <div\r\n        class=\"noborder\"\r\n        no-lines\r\n        *ngIf=\"!registerForm.controls.email.valid && (registerForm.controls.email.dirty || submitAttempt)\"\r\n      >\r\n        <p text-left text-wrap class=\"error\">Please enter a valid email</p>\r\n      </div>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Mobile No</ion-label>\r\n        <ion-input\r\n          autocomplete=\"off\"\r\n          name=\"mobile\"\r\n          formControlName=\"mobile\"\r\n          type=\"tel\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <div\r\n        class=\"noborder\"\r\n        no-lines\r\n        *ngIf=\"!registerForm.controls.mobile.valid && (registerForm.controls.mobile.dirty || submitAttempt)\"\r\n      >\r\n        <p text-left text-wrap class=\"error\">\r\n          Please enter 10 digit Mobile No.\r\n        </p>\r\n      </div>\r\n    </ion-list>\r\n    <br />\r\n\r\n    Already have an account? <a routerLink=\"/login\">Sign in.</a>\r\n    <ion-button\r\n      expand=\"block\"\r\n      shape=\"round\"\r\n      color=\"secondary\"\r\n      (click)=\"signupAction()\"\r\n      >Create Account</ion-button\r\n    >\r\n  </form>\r\n\r\n  <div class=\"footer\">\r\n    <p>By signing up! agree with the</p>\r\n    <a href=\"\">term and condition</a>\r\n  </div>\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");







const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
let SignupPageModule = class SignupPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/signup/signup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-signup .noborder {\n  border-bottom: 0px solid #ffffff !important;\n}\npage-signup .error {\n  font-size: 14.4px !important;\n  color: #ea6153;\n}\nh1 {\n  margin-top: 120px;\n  padding-bottom: 30px;\n  color: #355c7d;\n}\nion-list {\n  border-radius: 15px !important;\n}\nion-content {\n  --background: url(\"https://images.pexels.com/photos/4007310/pexels-photo-4007310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500\")\n    no-repeat center center fixed;\n  background-size: cover;\n}\n.footer {\n  text-align: center;\n  padding-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0M6XFxVc2Vyc1xcbGVub3ZvXFxEZXNrdG9wXFxwcm9qZWN0XFxhY3VNRUVUL3NyY1xcYXBwXFxwYWdlc1xcc2lnbnVwXFxzaWdudXAucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLDJDQUFBO0FDREo7QURHRTtFQUNFLDRCQUFBO0VBQ0EsY0FBQTtBQ0RKO0FES0E7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0ZGO0FESUE7RUFDRSw4QkFBQTtBQ0RGO0FESUE7RUFFRTtpQ0FBQTtFQUlBLHNCQUFBO0FDRkY7QURLQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicGFnZS1zaWdudXAge1xyXG4gIC8vIFZhbGlkYXRpb24gRXJyb3IgTXNnXHJcbiAgLm5vYm9yZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5lcnJvciB7XHJcbiAgICBmb250LXNpemU6IDE0LjRweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNlYTYxNTM7XHJcbiAgfVxyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luLXRvcDogMTIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgY29sb3I6ICMzNTVjN2Q7XHJcbn1cclxuaW9uLWxpc3Qge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC8vLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzBmNGM3NSAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKCdodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy80MDA3MzEwL3BleGVscy1waG90by00MDA3MzEwLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMCcpXHJcbiAgICBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG4iLCJwYWdlLXNpZ251cCAubm9ib3JkZXIge1xuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxucGFnZS1zaWdudXAgLmVycm9yIHtcbiAgZm9udC1zaXplOiAxNC40cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNlYTYxNTM7XG59XG5cbmgxIHtcbiAgbWFyZ2luLXRvcDogMTIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBjb2xvcjogIzM1NWM3ZDtcbn1cblxuaW9uLWxpc3Qge1xuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy80MDA3MzEwL3BleGVscy1waG90by00MDA3MzEwLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiKVxuICAgIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let SignupPage = class SignupPage {
    // postData = {
    //   name: '',
    //   username: '',
    //   email: '',
    //   password: ''
    // };
    constructor(authService, toastService, storageService, router, formBuilder) {
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
    ngOnInit() { }
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
    signupAction() {
        //   if (this.validateInputs()) { 
        this.submitAttempt = true;
        if (this.registerForm.valid) {
            let bodystring = {
                "name": this.registerForm.get('name').value,
                "email": this.registerForm.get('email').value,
                "mobileno": this.registerForm.get('mobile').value,
                "lat": '',
                "long": '',
                "device_id": '',
                "device_details": ''
            };
            this.authService.signup(bodystring).subscribe((res) => {
                if (res) {
                    this.toastService.presentToast(res.message);
                    // Storing the User data. 
                    this.router.navigate(['login']);
                }
                else {
                    // this.toastService.presentToast(
                    //   'Data alreay exists, please enter new details.'
                    // );  
                }
            }, (error) => {
                this.toastService.presentToast('Network Issue.');
            });
        }
        else {
            this.toastService.presentToast('Please enter name, email, username or password.');
        }
    }
};
SignupPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let ToastService = class ToastService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    presentToast(infoMessage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: infoMessage,
                duration: 2000
            });
            toast.present();
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], ToastService);



/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module-es2015.js.map