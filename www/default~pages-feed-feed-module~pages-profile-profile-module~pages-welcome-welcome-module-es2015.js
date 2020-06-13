(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-feed-feed-module~pages-profile-profile-module~pages-welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/feed-card/feed-card.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/feed-card/feed-card.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card *ngFor=\"let feed of feedData; let i = index\">\r\n  <ion-card-content>\r\n    <button (click)=\"feedDeleteAction(i, feed.feed_id)\" class=\"right\">\r\n      <ion-icon name=\"trash\"></ion-icon>\r\n    </button>\r\n    <p [innerHTML]=\"feed.feed\"></p>\r\n    <app-timeago [created]=\"feed.created\"></app-timeago>\r\n  </ion-card-content>\r\n</ion-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/feed-update/feed-update.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/feed-update/feed-update.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item>\r\n  <ion-textarea placeholder=\"Enter more information here...\" [(ngModel)]=\"postData.feed\"></ion-textarea>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-button color='dark' item-end (click)=\"feedUpdateAction()\">Update</ion-button>\r\n</ion-item>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/slides/slides.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/slides/slides.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\r\n  <img class=\"logo\" src=\"assets/images/logo1.png\" alt=\"\" />\r\n  <h1 class=\"logoname\">acumeet</h1>\r\n<ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n\r\n  <ion-slide>\r\n    <img src=\"assets/images/logo1.png\" alt=\"\" />\r\n  </ion-slide>\r\n\r\n\r\n  <ion-slide>\r\n    <img src=\"assets/images/logo1.png\" alt=\"\" />\r\n  </ion-slide>\r\n\r\n  <ion-slide>\r\n    <img src=\"assets/images/logo1.png\" alt=\"\" />\r\n  </ion-slide>\r\n</ion-slides>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/start-button/start-button.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/start-button/start-button.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-button expand=\"block\" share=\"round\" (click)=\"navigateToLogin()\"\r\n  >Start</ion-button\r\n>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/timeago/timeago.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/timeago/timeago.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  {{newTime | timeAgo}} \r\n</div>"

/***/ }),

/***/ "./node_modules/time-ago-pipe/esm2015/time-ago-pipe.js":
/*!*************************************************************!*\
  !*** ./node_modules/time-ago-pipe/esm2015/time-ago-pipe.js ***!
  \*************************************************************/
/*! exports provided: TimeAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeAgoPipe", function() { return TimeAgoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TimeAgoPipe {
    /**
     * @param {?} changeDetectorRef
     * @param {?} ngZone
     */
    constructor(changeDetectorRef, ngZone) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        this.removeTimer();
        let /** @type {?} */ d = new Date(value);
        let /** @type {?} */ now = new Date();
        let /** @type {?} */ seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        let /** @type {?} */ timeToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) * 1000;
        this.timer = this.ngZone.runOutsideAngular(() => {
            if (typeof window !== 'undefined') {
                return window.setTimeout(() => {
                    this.ngZone.run(() => this.changeDetectorRef.markForCheck());
                }, timeToUpdate);
            }
            return null;
        });
        let /** @type {?} */ minutes = Math.round(Math.abs(seconds / 60));
        let /** @type {?} */ hours = Math.round(Math.abs(minutes / 60));
        let /** @type {?} */ days = Math.round(Math.abs(hours / 24));
        let /** @type {?} */ months = Math.round(Math.abs(days / 30.416));
        let /** @type {?} */ years = Math.round(Math.abs(days / 365));
        if (Number.isNaN(seconds)) {
            return '';
        }
        else if (seconds <= 45) {
            return 'a few seconds ago';
        }
        else if (seconds <= 90) {
            return 'a minute ago';
        }
        else if (minutes <= 45) {
            return minutes + ' minutes ago';
        }
        else if (minutes <= 90) {
            return 'an hour ago';
        }
        else if (hours <= 22) {
            return hours + ' hours ago';
        }
        else if (hours <= 36) {
            return 'a day ago';
        }
        else if (days <= 25) {
            return days + ' days ago';
        }
        else if (days <= 45) {
            return 'a month ago';
        }
        else if (days <= 345) {
            return months + ' months ago';
        }
        else if (days <= 545) {
            return 'a year ago';
        }
        else {
            // (days > 545)
            return years + ' years ago';
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeTimer();
    }
    /**
     * @return {?}
     */
    removeTimer() {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    }
    /**
     * @param {?} seconds
     * @return {?}
     */
    getSecondsUntilUpdate(seconds) {
        let /** @type {?} */ min = 60;
        let /** @type {?} */ hr = min * 60;
        let /** @type {?} */ day = hr * 24;
        if (seconds < min) {
            // less than 1 min, update every 2 secs
            return 2;
        }
        else if (seconds < hr) {
            // less than an hour, update every 30 secs
            return 30;
        }
        else if (seconds < day) {
            // less then a day, update every 5 mins
            return 300;
        }
        else {
            // update every hour
            return 3600;
        }
    }
}
TimeAgoPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'timeAgo',
                pure: false
            },] },
];
/** @nocollapse */
TimeAgoPipe.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=time-ago-pipe.js.map


/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm2015/time-ago-pipe.js");
/* harmony import */ var _feed_card_feed_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed-card/feed-card.component */ "./src/app/components/feed-card/feed-card.component.ts");
/* harmony import */ var _feed_update_feed_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feed-update/feed-update.component */ "./src/app/components/feed-update/feed-update.component.ts");
/* harmony import */ var _slides_slides_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slides/slides.component */ "./src/app/components/slides/slides.component.ts");
/* harmony import */ var _start_button_start_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./start-button/start-button.component */ "./src/app/components/start-button/start-button.component.ts");
/* harmony import */ var _timeago_timeago_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timeago/timeago.component */ "./src/app/components/timeago/timeago.component.ts");











let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _slides_slides_component__WEBPACK_IMPORTED_MODULE_8__["SlidesComponent"],
            _start_button_start_button_component__WEBPACK_IMPORTED_MODULE_9__["StartButtonComponent"],
            _feed_card_feed_card_component__WEBPACK_IMPORTED_MODULE_6__["FeedCardComponent"],
            _feed_update_feed_update_component__WEBPACK_IMPORTED_MODULE_7__["FeedUpdateComponent"],
            _timeago_timeago_component__WEBPACK_IMPORTED_MODULE_10__["TimeagoComponent"],
            time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__["TimeAgoPipe"]
        ],
        exports: [
            _slides_slides_component__WEBPACK_IMPORTED_MODULE_8__["SlidesComponent"],
            _start_button_start_button_component__WEBPACK_IMPORTED_MODULE_9__["StartButtonComponent"],
            _feed_card_feed_card_component__WEBPACK_IMPORTED_MODULE_6__["FeedCardComponent"],
            _feed_update_feed_update_component__WEBPACK_IMPORTED_MODULE_7__["FeedUpdateComponent"],
            _timeago_timeago_component__WEBPACK_IMPORTED_MODULE_10__["TimeagoComponent"]
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/feed-card/feed-card.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/feed-card/feed-card.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right {\n  float: right;\n}\n.right ion-icon {\n  font-size: 18px;\n}\nion-card-content p {\n  color: #333333 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWVkLWNhcmQvQzpcXFVzZXJzXFxsZW5vdm9cXERlc2t0b3BcXHByb2plY3RcXEFjdXBhY2UtaW9uaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZlZWQtY2FyZFxcZmVlZC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZlZWQtY2FyZC9mZWVkLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7QURBRTtFQUNFLGVBQUE7QUNFSjtBREVFO0VBQ0UseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVlZC1jYXJkL2ZlZWQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuaW9uLWNhcmQtY29udGVudHtcclxuICBwe1xyXG4gICAgY29sb3I6IzMzMzMzMyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCIucmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG4ucmlnaHQgaW9uLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQgcCB7XG4gIGNvbG9yOiAjMzMzMzMzICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/feed-card/feed-card.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/feed-card/feed-card.component.ts ***!
  \*************************************************************/
/*! exports provided: FeedCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedCardComponent", function() { return FeedCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_feed_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/feed.service */ "./src/app/services/feed.service.ts");




let FeedCardComponent = class FeedCardComponent {
    constructor(feedSerivce, alertSerivce) {
        this.feedSerivce = feedSerivce;
        this.alertSerivce = alertSerivce;
        this.postData = {
            user_id: '',
            token: '',
            feed_id: ''
        };
    }
    ngOnInit() {
        this.feedSerivce.feedData$.subscribe((res) => {
            this.feedData = res;
        });
    }
    feedDeleteAction(msgIndex, feed_id) {
        this.postData.user_id = this.loginUser.user_id;
        this.postData.token = this.loginUser.token;
        this.postData.feed_id = feed_id;
        this.alertSerivce
            .presentAlertConfirm('Delete feed', 'Do you want to delete this feed?')
            .then((res) => {
            if (res.role === 'okay') {
                this.feedSerivce.feedDelete(this.postData).subscribe((res) => {
                    if (res.success) {
                        this.feedSerivce.deleteFeedData(msgIndex);
                    }
                });
            }
        });
    }
};
FeedCardComponent.ctorParameters = () => [
    { type: _services_feed_service__WEBPACK_IMPORTED_MODULE_3__["FeedService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FeedCardComponent.prototype, "loginUser", void 0);
FeedCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feed-card',
        template: __webpack_require__(/*! raw-loader!./feed-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/feed-card/feed-card.component.html"),
        styles: [__webpack_require__(/*! ./feed-card.component.scss */ "./src/app/components/feed-card/feed-card.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_feed_service__WEBPACK_IMPORTED_MODULE_3__["FeedService"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
], FeedCardComponent);



/***/ }),

/***/ "./src/app/components/feed-update/feed-update.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/feed-update/feed-update.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVlZC11cGRhdGUvZmVlZC11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/feed-update/feed-update.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/feed-update/feed-update.component.ts ***!
  \*****************************************************************/
/*! exports provided: FeedUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedUpdateComponent", function() { return FeedUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_feed_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/feed.service */ "./src/app/services/feed.service.ts");



let FeedUpdateComponent = class FeedUpdateComponent {
    constructor(feedService) {
        this.feedService = feedService;
        this.postData = {
            feed: '',
            feed_id: '',
            lastCreated: '',
            token: '',
            user_id: ''
        };
    }
    ngOnInit() { }
    feedUpdateAction() {
        if (this.postData.feed.length > 0) {
            this.postData.lastCreated = '';
            this.postData.user_id = this.loginUser.user_id;
            this.postData.token = this.loginUser.token;
            this.feedService.feedUpdate(this.postData).subscribe((res) => {
                this.postData.feed = '';
                this.feedService.updateFeedData(res.feedData);
            });
        }
    }
};
FeedUpdateComponent.ctorParameters = () => [
    { type: _services_feed_service__WEBPACK_IMPORTED_MODULE_2__["FeedService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FeedUpdateComponent.prototype, "loginUser", void 0);
FeedUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feed-update',
        template: __webpack_require__(/*! raw-loader!./feed-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/feed-update/feed-update.component.html"),
        styles: [__webpack_require__(/*! ./feed-update.component.scss */ "./src/app/components/feed-update/feed-update.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_feed_service__WEBPACK_IMPORTED_MODULE_2__["FeedService"]])
], FeedUpdateComponent);



/***/ }),

/***/ "./src/app/components/slides/slides.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/slides/slides.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slide {\n  padding: 300px 20px 160px 20px;\n  display: block;\n}\nion-slide h2 {\n  font-size: 36px;\n  font-weight: bold;\n  color: #fcfcfc;\n  padding-bottom: 20px;\n}\n.head {\n  background-image: url(\"https://images.pexels.com/photos/4226263/pexels-photo-4226263.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500\");\n}\nimg {\n  height: 100px;\n  width: 100px;\n  padding-top: 70px;\n  padding-right: 40px;\n  position: relative;\n}\n.logo {\n  margin-left: 110px;\n  margin-top: -50px;\n  position: absolute;\n  height: 180px;\n  width: 180px;\n}\n.logoname {\n  margin-top: 100px;\n  margin-left: 140px;\n  color: #081d7c;\n  font-size: 125%;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXMvQzpcXFVzZXJzXFxsZW5vdm9cXERlc2t0b3BcXHByb2plY3RcXEFjdXBhY2UtaW9uaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNsaWRlc1xcc2xpZGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NsaWRlcy9zbGlkZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtFQUNBLGNBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDQ0o7QURHQTtFQUNFLGlJQUFBO0FDQUY7QURHQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUY7QURFQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQ0Y7QURFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NsaWRlcy9zbGlkZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGUge1xyXG4gIHBhZGRpbmc6IDMwMHB4IDIwcHggMTYwcHggMjBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogaHNsKDAsIDAlLCA5OSUpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzQyMjYyNjMvcGV4ZWxzLXBob3RvLTQyMjYyNjMuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwJyk7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDcwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmxvZ297XHJcbiAgbWFyZ2luLWxlZnQ6IDExMHB4O1xyXG4gIG1hcmdpbi10b3A6LTUwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG59XHJcblxyXG4ubG9nb25hbWUge1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNDBweDtcclxuICBjb2xvcjogcmdiKDgsIDI5LCAxMjQpO1xyXG4gIGZvbnQtc2l6ZTogMTI1JTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuIiwiaW9uLXNsaWRlIHtcbiAgcGFkZGluZzogMzAwcHggMjBweCAxNjBweCAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1zbGlkZSBoMiB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmNmY2ZjO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLmhlYWQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy80MjI2MjYzL3BleGVscy1waG90by00MjI2MjYzLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MSZ3PTUwMFwiKTtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nLXRvcDogNzBweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbi1sZWZ0OiAxMTBweDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxODBweDtcbiAgd2lkdGg6IDE4MHB4O1xufVxuXG4ubG9nb25hbWUge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDE0MHB4O1xuICBjb2xvcjogIzA4MWQ3YztcbiAgZm9udC1zaXplOiAxMjUlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/slides/slides.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/slides/slides.component.ts ***!
  \*******************************************************/
/*! exports provided: SlidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesComponent", function() { return SlidesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SlidesComponent = class SlidesComponent {
    constructor() {
        this.slideOpts = {
            speed: 400
        };
    }
};
SlidesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slides',
        template: __webpack_require__(/*! raw-loader!./slides.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/slides/slides.component.html"),
        styles: [__webpack_require__(/*! ./slides.component.scss */ "./src/app/components/slides/slides.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SlidesComponent);



/***/ }),

/***/ "./src/app/components/start-button/start-button.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/start-button/start-button.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  --background: #303960;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGFydC1idXR0b24vQzpcXFVzZXJzXFxsZW5vdm9cXERlc2t0b3BcXHByb2plY3RcXEFjdXBhY2UtaW9uaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHN0YXJ0LWJ1dHRvblxcc3RhcnQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N0YXJ0LWJ1dHRvbi9zdGFydC1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdGFydC1idXR0b24vc3RhcnQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMzAzOTYwO1xyXG59XHJcbiIsImlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMzMDM5NjA7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/start-button/start-button.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/start-button/start-button.component.ts ***!
  \*******************************************************************/
/*! exports provided: StartButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartButtonComponent", function() { return StartButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let StartButtonComponent = class StartButtonComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    navigateToLogin() {
        this.router.navigate(['/login']);
    }
};
StartButtonComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
StartButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start-button',
        template: __webpack_require__(/*! raw-loader!./start-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/start-button/start-button.component.html"),
        styles: [__webpack_require__(/*! ./start-button.component.scss */ "./src/app/components/start-button/start-button.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], StartButtonComponent);



/***/ }),

/***/ "./src/app/components/timeago/timeago.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/timeago/timeago.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGltZWFnby90aW1lYWdvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/timeago/timeago.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/timeago/timeago.component.ts ***!
  \*********************************************************/
/*! exports provided: TimeagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeagoComponent", function() { return TimeagoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TimeagoComponent = class TimeagoComponent {
    constructor() { }
    ngOnInit() {
        this.newTime = this.converTime(this.created);
        ;
    }
    converTime(time) {
        let a = new Date(time * 1000);
        return a;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TimeagoComponent.prototype, "created", void 0);
TimeagoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timeago',
        template: __webpack_require__(/*! raw-loader!./timeago.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/timeago/timeago.component.html"),
        styles: [__webpack_require__(/*! ./timeago.component.scss */ "./src/app/components/timeago/timeago.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TimeagoComponent);



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let AlertService = class AlertService {
    constructor(alertController) {
        this.alertController = alertController;
    }
    presentAlertConfirm(header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let choice;
            const alert = yield this.alertController.create({
                header: header,
                message: message,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Okay',
                        role: 'okay'
                    }
                ]
            });
            yield alert.present();
            yield alert.onDidDismiss().then(data => {
                choice = data;
            });
            return choice;
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], AlertService);



/***/ }),

/***/ "./src/app/services/feed.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/feed.service.ts ***!
  \******************************************/
/*! exports provided: FeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedService", function() { return FeedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");




let FeedService = class FeedService {
    constructor(httpService) {
        this.httpService = httpService;
        this.feedData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    changeFeedData(data) {
        this.feedData$.next(data);
    }
    getCurrentFeedData() {
        return this.feedData$.getValue();
    }
    updateFeedData(newFeed) {
        let data = [];
        data.push(newFeed);
        let currentFeedData = this.getCurrentFeedData();
        let newFeedUpdateData = data.concat(currentFeedData);
        this.changeFeedData(newFeedUpdateData);
    }
    deleteFeedData(msgIndex) {
        let data = [];
        let currentFeedData = this.getCurrentFeedData();
        currentFeedData.splice(msgIndex, 1);
        let newFeedUpdateData = data.concat(currentFeedData);
        this.changeFeedData(newFeedUpdateData);
    }
    feedData(postData) {
        return this.httpService.post('feed', postData);
    }
    feedDelete(postData) {
        return this.httpService.post('feedDelete', postData);
    }
    feedUpdate(postData) {
        return this.httpService.post('feedUpdate', postData);
    }
};
FeedService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
FeedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
], FeedService);



/***/ })

}]);
//# sourceMappingURL=default~pages-feed-feed-module~pages-profile-profile-module~pages-welcome-welcome-module-es2015.js.map