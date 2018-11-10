webpackJsonp([9],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JUGADORES; });
var JUGADORES = [
    {
        nombre: "Jugador1",
        equipo: "Equipo1",
        j: 4,
        g: 2,
        e: 1,
        p: 1,
        c: 2,
        f: 2,
        ptos: 7
    },
    {
        nombre: "Jugador2",
        equipo: "Equipo2",
        j: 4,
        g: 1,
        e: 2,
        p: 1,
        c: 2,
        f: 2,
        ptos: 5
    },
    {
        nombre: "Jugador3",
        equipo: "Equipo2",
        j: 4,
        g: 1,
        e: 2,
        p: 1,
        c: 2,
        f: 2,
        ptos: 5
    },
    {
        nombre: "Jugador4",
        equipo: "Equipo2",
        j: 4,
        g: 1,
        e: 2,
        p: 1,
        c: 2,
        f: 2,
        ptos: 5
    },
    {
        nombre: "Jugador5",
        equipo: "Equipo2",
        j: 4,
        g: 1,
        e: 2,
        p: 1,
        c: 2,
        f: 2,
        ptos: 5
    }
];
//# sourceMappingURL=data.jugadores.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jugadores_jugadores__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendario_calendario__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equipo_equipo__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jornadas_jornadas__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__calendario_calendario__["a" /* CalendarioPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__equipo_equipo__["a" /* EquipoPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__jugadores_jugadores__["a" /* JugadoresPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__jornadas_jornadas__["a" /* JornadasPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab2Root" tabTitle="Calendario" tabIcon="calendar"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Equipos" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Jugadores" tabIcon="contact"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabTitle="Jornadas" tabIcon="bookmarks"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthService.prototype.signInWithEmail = function (credentials) {
        console.log('Sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService.prototype.signOut = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendariomodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CalendariomodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalendariomodalPage = /** @class */ (function () {
    function CalendariomodalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), Casa: false, Fuera: false };
        this.minDate = new Date().toISOString();
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.navParams.get('selectedDay')).format();
        this.event.startTime = preselectedDate;
        this.event.endTime = preselectedDate;
        console.log(this.event.startTime);
    }
    CalendariomodalPage.prototype.save = function () {
        this.viewCtrl.dismiss(this.event);
    };
    CalendariomodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalendariomodalPage');
    };
    CalendariomodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendariomodal',template:/*ion-inline-start:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\calendariomodal\calendariomodal.html"*/'<!--\n\n  Generated template for the CalendariomodalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Fecha</ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Titulo" [(ngModel)]="event.title"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Comienzo</ion-label>\n\n      <ion-datetime displayFormat="DD/MM/YYYY HH:mm"  pickerFormat="DD/MM/YYYY HH:mm" [(ngModel)]="event.startTime" [min]="minDate"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>Fin</ion-label>\n\n        <ion-datetime displayFormat="DD/MM/YYYY HH:mm"  pickerFormat="DD/MM/YYYY HH:mm" [(ngModel)]="event.endTime" [min]="minDate"></ion-datetime>\n\n    </ion-item>\n\n  </ion-list>\n\n<ion-item *ngIf="!event.Fuera">\n\n<ion-label>Casa</ion-label>\n\n  <ion-checkbox [(ngModel)]="event.Casa"></ion-checkbox>\n\n</ion-item>\n\n<ion-item *ngIf="event.Fuera">\n\n    <ion-label>Casa</ion-label>\n\n      <ion-checkbox disabled=\'true\' [(ngModel)]="event.Casa"></ion-checkbox>\n\n</ion-item>\n\n<ion-item *ngIf="event.Casa">\n\n  <ion-label>Fuera</ion-label>\n\n  <ion-checkbox disabled=\'true\' [(ngModel)]="event.Fuera"></ion-checkbox>\n\n</ion-item>\n\n<ion-item *ngIf="!event.Casa">\n\n    <ion-label>Fuera</ion-label>\n\n    <ion-checkbox [(ngModel)]="event.Fuera"></ion-checkbox>\n\n  </ion-item>\n\n  <button ion-button color="dark" full icon-left (click)="save()">\n\n    <ion-icon name="checkmark"> Añadir Fecha </ion-icon>\n\n</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\calendariomodal\calendariomodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], CalendariomodalPage);
    return CalendariomodalPage;
}());

//# sourceMappingURL=calendariomodal.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_calendariomodal_calendariomodal__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalendarioPage = /** @class */ (function () {
    function CalendarioPage(navCtrl, navParams, modalCtrl, alertCtrl, AfAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.AfAuth = AfAuth;
        this.eventSource = [];
        this.selectedDay = new Date();
        this.calendar = {
            mode: 'month',
            currentDate: this.selectedDay
        };
    }
    CalendarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalendarioPage');
    };
    CalendarioPage.prototype.signOut = function () {
        return this.AfAuth.auth.signOut();
    };
    CalendarioPage.prototype.anadirPartida = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_calendariomodal_calendariomodal__["a" /* CalendariomodalPage */], { selectedDay: this.selectedDay });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                var eventData = data;
                eventData.startTime = new Date(data.startTime);
                eventData.endTime = new Date(data.endTime);
                var events_1 = _this.eventSource;
                events_1.push(eventData);
                _this.eventSource = [];
                setTimeout(function () {
                    _this.eventSource = events_1;
                });
            }
        });
    };
    CalendarioPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    CalendarioPage.prototype.onTimeSelected = function (ev) {
        this.selectedDay = ev.selectedTime;
    };
    CalendarioPage.prototype.onEventSelected = function (event) {
        var start = __WEBPACK_IMPORTED_MODULE_3_moment__(event.startTime).format('LLLL');
        var end = __WEBPACK_IMPORTED_MODULE_3_moment__(event.endTime).format('LLLL');
        if (event.Casa) {
            var alert_1 = this.alertCtrl.create({
                title: '' + event.title,
                subTitle: 'Desde: ' + start + '<br>Hasta: ' + end + '<br> Jugado en casa',
                buttons: ['Volver']
            });
            alert_1.present();
        }
        else if (event.Fuera) {
            var alert_2 = this.alertCtrl.create({
                title: '' + event.title,
                subTitle: 'Desde: ' + start + '<br>Hasta: ' + end + '<br>Jugado fuera de casa',
                buttons: ['Volver']
            });
            alert_2.present();
        }
        else {
            var alert_3 = this.alertCtrl.create({
                title: '' + event.title,
                subTitle: 'Desde: ' + start + '<br>Hasta: ' + end + '<br>Lugar no definido',
                buttons: ['Volver']
            });
            alert_3.present();
        }
    };
    CalendarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendario',template:/*ion-inline-start:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\calendario\calendario.html"*/'<!--\n\n  Generated template for the CalendarioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Calendario</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="signOut()" color="light">\n\n        Cerrar Sesion\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="anadirPartida()" color="dark">\n\n          <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  <ion-item text-center>{{viewTitle}}</ion-item>\n\n  <calendar [eventSource]="eventSource"\n\n    [calendarMode]="calendar.mode"\n\n    [currentDate]="calendar.currentDate"\n\n    (onEventSelected)="onEventSelected($event)"\n\n    (onTitleChanged)="onViewTitleChanged($event)"\n\n    (onTimeSelected)="onTimeSelected($event)"\n\n    step="30"\n\n    class="calendar">\n\n  </calendar>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\calendario\calendario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], CalendarioPage);
    return CalendarioPage;
}());

//# sourceMappingURL=calendario.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddjugadormodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_equipos__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AñadirjugadormodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddjugadormodalPage = /** @class */ (function () {
    function AddjugadormodalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.equipos = [];
        this.jugador = {};
        this.jugadores = [];
        this.equipos = __WEBPACK_IMPORTED_MODULE_2__data_data_equipos__["a" /* EQUIPOS */].slice(0);
        this.eq = "no definido";
        this.jugadores = this.navParams.get('jugadores');
    }
    AddjugadormodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AñadirjugadormodalPage');
    };
    AddjugadormodalPage.prototype.anadirjugador = function () {
        this.jugador = { nombre: this.nom, equipo: this.eq, j: null, g: null, e: null, p: null, c: null, f: null, ptos: null };
        this.jugadores.push(this.jugador);
        console.log(this.jugadores.join());
        this.navCtrl.pop(this.jugadores);
    };
    AddjugadormodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addjugadormodal',template:/*ion-inline-start:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\addjugadormodal\addjugadormodal.html"*/'<!--\n\n  Generated template for the AñadirjugadormodalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Añadir Jugador</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n\n          <ion-label floating>Nombre</ion-label>\n\n          <ion-input type="text" [(ngModel)]="nom"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label  floating>Equipos</ion-label>\n\n            <ion-select [(ngModel)]="eq">\n\n              <span *ngFor = "let equipo of equipos">\n\n                <ion-option value={{equipo.nombre}}>{{ equipo.nombre }}</ion-option>      \n\n              </span>\n\n            </ion-select>\n\n          </ion-item>\n\n      </ion-list>\n\n      <br> \n\n      <button ion-button color="dark" (click)="anadirjugador()">Añadir</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\addjugadormodal\addjugadormodal.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
    ], AddjugadormodalPage);
    return AddjugadormodalPage;
    var _a, _b;
}());

//# sourceMappingURL=addjugadormodal.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosjugadormodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_jugadores__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DatosjugadormodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DatosjugadormodalPage = /** @class */ (function () {
    function DatosjugadormodalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.jugadores = [];
        this.jugador = {};
        this.jugadores = __WEBPACK_IMPORTED_MODULE_2__data_data_jugadores__["a" /* JUGADORES */].slice(0);
    }
    DatosjugadormodalPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad DatosjugadormodalPage');
        var data = this.navParams.get('jugador');
        console.log(data);
        this.jugador = data;
    };
    DatosjugadormodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-datosjugadormodal',template:/*ion-inline-start:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\datosjugadormodal\datosjugadormodal.html"*/'<!--\n  Generated template for the DatosjugadormodalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark"> \n    <ion-title>Datos de {{ jugador.nombre }} </ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n      <p><span style="font-weight: bold;"> Nombre: </span> {{ jugador.nombre }}</p>\n      <p><span style="font-weight: bold;"> Equipo: </span> {{ jugador.equipo }}</p>\n      <p><span style="font-weight: bold;">Partidos Jugados: </span> {{ jugador.j }}</p>\n      <p><span style="font-weight: bold;">Partidos Ganados: </span> {{ jugador.g }}</p>\n      <p><span style="font-weight: bold;">Partidos Empatados: </span> {{ jugador.e }}</p>\n      <p><span style="font-weight: bold;">Partidos Perdidos: </span> {{ jugador.p }}</p>\n      <p><span style="font-weight: bold;">Jugados en Casa: </span> {{ jugador.c }}</p>\n      <p><span style="font-weight: bold;">Jugados Fuera: </span> {{ jugador.f }}</p>\n      <p><span style="font-weight: bold;">Puntos: </span> {{ jugador.ptos }}</p>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\datosjugadormodal\datosjugadormodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], DatosjugadormodalPage);
    return DatosjugadormodalPage;
}());

//# sourceMappingURL=datosjugadormodal.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_data_equipos__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jugadoresmodal_jugadoresmodal__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EquipoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EquipoPage = /** @class */ (function () {
    function EquipoPage(navCtrl, navParams, modalCtrl, AfAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.AfAuth = AfAuth;
        this.equipos = [];
        this.equipos = __WEBPACK_IMPORTED_MODULE_3__data_data_equipos__["a" /* EQUIPOS */].slice(0);
    }
    EquipoPage.prototype.mostrar_modal = function (equipo) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__jugadoresmodal_jugadoresmodal__["a" /* JugadoresmodalPage */], { equipo: equipo });
        modal.present();
    };
    EquipoPage.prototype.signOut = function () {
        return this.AfAuth.auth.signOut();
    };
    EquipoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EquipoPage');
    };
    EquipoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-equipo',template:/*ion-inline-start:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\equipo\equipo.html"*/'<!--\n  Generated template for the EquipoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Equipos</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="signOut()" color="light">\n        Cerrar Sesion\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n      <button ion-item detail-none *ngFor = "let equipo of equipos" (click)="mostrar_modal(equipo)">\n        <h2>{{ equipo.nombre }}</h2>\n        <ion-icon name="contacts" item-left></ion-icon>\n      </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\equipo\equipo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], EquipoPage);
    return EquipoPage;
}());

//# sourceMappingURL=equipo.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_jugadores__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the JugadoresmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JugadoresmodalPage = /** @class */ (function () {
    function JugadoresmodalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.jugadores = [];
        this.equipo = {};
        this.jugadores = __WEBPACK_IMPORTED_MODULE_2__data_data_jugadores__["a" /* JUGADORES */].slice(0);
    }
    JugadoresmodalPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad JugadoresmodalPage');
        var data = this.navParams.get('equipo');
        this.equipo = data;
    };
    JugadoresmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jugadoresmodal',template:/*ion-inline-start:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\jugadoresmodal\jugadoresmodal.html"*/'<!--\n\n  Generated template for the JugadoresmodalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Jugadores de {{equipo.nombre}}</ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <span  *ngFor = "let jugador of jugadores">\n\n          <span *ngIf="jugador.equipo==equipo.nombre">\n\n            <h2>\n\n\n\n                <ion-item ion-item detail-none >\n\n                <ion-icon name="contact" item-left></ion-icon>\n\n                <ion-label>{{ jugador.nombre }}</ion-label>\n\n                <ion-checkbox item-right></ion-checkbox>\n\n              </ion-item>\n\n            </h2>\n\n          </span>\n\n        </span>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\jugadoresmodal\jugadoresmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], JugadoresmodalPage);
    return JugadoresmodalPage;
}());

//# sourceMappingURL=jugadoresmodal.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_data_jugadores__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datosjugadormodal_datosjugadormodal__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addjugadormodal_addjugadormodal__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the JugadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JugadoresPage = /** @class */ (function () {
    function JugadoresPage(navCtrl, navParams, modalCtrl, AfAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.AfAuth = AfAuth;
        this.jugadores = [];
        this.jugadores = __WEBPACK_IMPORTED_MODULE_3__data_data_jugadores__["a" /* JUGADORES */].slice(0);
    }
    JugadoresPage.prototype.signOut = function () {
        return this.AfAuth.auth.signOut();
    };
    JugadoresPage.prototype.mostrar_modal = function (jugador) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__datosjugadormodal_datosjugadormodal__["a" /* DatosjugadormodalPage */], { jugador: jugador });
        modal.present();
    };
    JugadoresPage.prototype.mostrar_modal_anadir = function (jugadores) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__addjugadormodal_addjugadormodal__["a" /* AddjugadormodalPage */], jugadores);
        modal.present();
    };
    JugadoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JugadoresPage');
    };
    JugadoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jugadores',template:/*ion-inline-start:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\jugadores\jugadores.html"*/'<!--\n\n  Generated template for the JugadoresPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Jugadores</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="mostrar_modal_anadir(jugadores)" color="light">Añadir Jugador</button>\n\n      <button ion-button (click)="signOut()" color="light">\n\n        Cerrar Sesion\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n      <button ion-item detail-none  *ngFor = "let jugador of jugadores" (click)="mostrar_modal(jugador)">\n\n        <h2>{{ jugador.nombre }}</h2>\n\n        <ion-icon name="contact" item-left></ion-icon>\n\n      </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\jugadores\jugadores.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]) === "function" && _d || Object])
    ], JugadoresPage);
    return JugadoresPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=jugadores.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JornadasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the JornadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JornadasPage = /** @class */ (function () {
    function JornadasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    JornadasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JornadasPage');
    };
    JornadasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jornadas',template:/*ion-inline-start:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\jornadas\jornadas.html"*/'<!--\n  Generated template for the JornadasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>jornadas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\jornadas\jornadas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], JornadasPage);
    return JornadasPage;
}());

//# sourceMappingURL=jornadas.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, auth, fb) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.loginForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var data = this.loginForm.value;
        if (!data.email) {
            return;
        }
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signInWithEmail(credentials)
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]); }, function (error) { return _this.loginError = error.message; });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\login\login.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>Inciar Sesión</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<form (ngSubmit)="login()" [formGroup]="loginForm">\n\n		<ion-list inset>\n\n\n\n			<ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\', \'dirty\']) }">\n\n				<ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n\n			</ion-item>\n\n\n\n			<div ngxErrors="email" #emailErrors="ngxErrors">\n\n				<div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\', \'dirty\']">It should be a valid email</div>\n\n			</div>\n\n\n\n			<ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n\n				<ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n\n			</ion-item>\n\n\n\n			<div ngxErrors="password" #passwordErrors="ngxErrors">\n\n				<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be at least 5 characters</div>\n\n			</div>\n\n		</ion-list>\n\n\n\n		<div padding-horizontal>\n\n			<div class="form-error">{{loginError}}</div>\n\n\n\n			<button ion-button full type="submit" [disabled]="!loginForm.valid">Log in</button>\n\n		</div>\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 176;

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addjugadormodal/addjugadormodal.module": [
		848,
		8
	],
	"../pages/calendario/calendario.module": [
		847,
		7
	],
	"../pages/calendariomodal/calendariomodal.module": [
		849,
		6
	],
	"../pages/datosjugadormodal/datosjugadormodal.module": [
		850,
		5
	],
	"../pages/equipo/equipo.module": [
		851,
		4
	],
	"../pages/jornadas/jornadas.module": [
		853,
		3
	],
	"../pages/jugadores/jugadores.module": [
		852,
		2
	],
	"../pages/jugadoresmodal/jugadoresmodal.module": [
		855,
		1
	],
	"../pages/login/login.module": [
		854,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 221;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EQUIPOS; });
var EQUIPOS = [
    {
        nombre: "Equipo1",
    },
    {
        nombre: "Equipo2"
    }
];
//# sourceMappingURL=data.equipos.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(495);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ultimate_ngxerrors__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__config__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_jugadores_jugadores__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_calendario_calendario__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_equipo_equipo__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_jornadas_jornadas__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_jugadoresmodal_jugadoresmodal__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic2_calendar__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_calendariomodal_calendariomodal__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_datosjugadormodal_datosjugadormodal__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_calendar__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_addjugadormodal_addjugadormodal__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_jugadores_jugadores__["a" /* JugadoresPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_calendario_calendario__["a" /* CalendarioPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_equipo_equipo__["a" /* EquipoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_jornadas_jornadas__["a" /* JornadasPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_jugadoresmodal_jugadoresmodal__["a" /* JugadoresmodalPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_calendariomodal_calendariomodal__["a" /* CalendariomodalPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_datosjugadormodal_datosjugadormodal__["a" /* DatosjugadormodalPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_addjugadormodal_addjugadormodal__["a" /* AddjugadormodalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/calendario/calendario.module#CalendarioPageModule', name: 'CalendarioPage', segment: 'calendario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addjugadormodal/addjugadormodal.module#AddjugadormodalPageModule', name: 'AddjugadormodalPage', segment: 'addjugadormodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendariomodal/calendariomodal.module#CalendariomodalPageModule', name: 'CalendariomodalPage', segment: 'calendariomodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/datosjugadormodal/datosjugadormodal.module#DatosjugadormodalPageModule', name: 'DatosjugadormodalPage', segment: 'datosjugadormodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/equipo/equipo.module#EquipoPageModule', name: 'EquipoPage', segment: 'equipo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugadores/jugadores.module#JugadoresPageModule', name: 'JugadoresPage', segment: 'jugadores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jornadas/jornadas.module#JornadasPageModule', name: 'JornadasPage', segment: 'jornadas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugadoresmodal/jugadoresmodal.module#JugadoresmodalPageModule', name: 'JugadoresmodalPage', segment: 'jugadoresmodal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__ultimate_ngxerrors__["a" /* NgxErrorsModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_14__config__["a" /* firebaseConfig */].fire),
                __WEBPACK_IMPORTED_MODULE_20_ionic2_calendar__["a" /* NgCalendarModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_jugadores_jugadores__["a" /* JugadoresPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_calendario_calendario__["a" /* CalendarioPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_equipo_equipo__["a" /* EquipoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_jornadas_jornadas__["a" /* JornadasPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_jugadoresmodal_jugadoresmodal__["a" /* JugadoresmodalPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_calendariomodal_calendariomodal__["a" /* CalendariomodalPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_datosjugadormodal_datosjugadormodal__["a" /* DatosjugadormodalPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_addjugadormodal_addjugadormodal__["a" /* AddjugadormodalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_calendar__["a" /* Calendar */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 807:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 322,
	"./af.js": 322,
	"./ar": 323,
	"./ar-dz": 324,
	"./ar-dz.js": 324,
	"./ar-kw": 325,
	"./ar-kw.js": 325,
	"./ar-ly": 326,
	"./ar-ly.js": 326,
	"./ar-ma": 327,
	"./ar-ma.js": 327,
	"./ar-sa": 328,
	"./ar-sa.js": 328,
	"./ar-tn": 329,
	"./ar-tn.js": 329,
	"./ar.js": 323,
	"./az": 330,
	"./az.js": 330,
	"./be": 331,
	"./be.js": 331,
	"./bg": 332,
	"./bg.js": 332,
	"./bm": 333,
	"./bm.js": 333,
	"./bn": 334,
	"./bn.js": 334,
	"./bo": 335,
	"./bo.js": 335,
	"./br": 336,
	"./br.js": 336,
	"./bs": 337,
	"./bs.js": 337,
	"./ca": 338,
	"./ca.js": 338,
	"./cs": 339,
	"./cs.js": 339,
	"./cv": 340,
	"./cv.js": 340,
	"./cy": 341,
	"./cy.js": 341,
	"./da": 342,
	"./da.js": 342,
	"./de": 343,
	"./de-at": 344,
	"./de-at.js": 344,
	"./de-ch": 345,
	"./de-ch.js": 345,
	"./de.js": 343,
	"./dv": 346,
	"./dv.js": 346,
	"./el": 347,
	"./el.js": 347,
	"./en-au": 348,
	"./en-au.js": 348,
	"./en-ca": 349,
	"./en-ca.js": 349,
	"./en-gb": 350,
	"./en-gb.js": 350,
	"./en-ie": 351,
	"./en-ie.js": 351,
	"./en-il": 352,
	"./en-il.js": 352,
	"./en-nz": 353,
	"./en-nz.js": 353,
	"./eo": 354,
	"./eo.js": 354,
	"./es": 355,
	"./es-do": 356,
	"./es-do.js": 356,
	"./es-us": 357,
	"./es-us.js": 357,
	"./es.js": 355,
	"./et": 358,
	"./et.js": 358,
	"./eu": 359,
	"./eu.js": 359,
	"./fa": 360,
	"./fa.js": 360,
	"./fi": 361,
	"./fi.js": 361,
	"./fo": 362,
	"./fo.js": 362,
	"./fr": 363,
	"./fr-ca": 364,
	"./fr-ca.js": 364,
	"./fr-ch": 365,
	"./fr-ch.js": 365,
	"./fr.js": 363,
	"./fy": 366,
	"./fy.js": 366,
	"./gd": 367,
	"./gd.js": 367,
	"./gl": 368,
	"./gl.js": 368,
	"./gom-latn": 369,
	"./gom-latn.js": 369,
	"./gu": 370,
	"./gu.js": 370,
	"./he": 371,
	"./he.js": 371,
	"./hi": 372,
	"./hi.js": 372,
	"./hr": 373,
	"./hr.js": 373,
	"./hu": 374,
	"./hu.js": 374,
	"./hy-am": 375,
	"./hy-am.js": 375,
	"./id": 376,
	"./id.js": 376,
	"./is": 377,
	"./is.js": 377,
	"./it": 378,
	"./it.js": 378,
	"./ja": 379,
	"./ja.js": 379,
	"./jv": 380,
	"./jv.js": 380,
	"./ka": 381,
	"./ka.js": 381,
	"./kk": 382,
	"./kk.js": 382,
	"./km": 383,
	"./km.js": 383,
	"./kn": 384,
	"./kn.js": 384,
	"./ko": 385,
	"./ko.js": 385,
	"./ky": 386,
	"./ky.js": 386,
	"./lb": 387,
	"./lb.js": 387,
	"./lo": 388,
	"./lo.js": 388,
	"./lt": 389,
	"./lt.js": 389,
	"./lv": 390,
	"./lv.js": 390,
	"./me": 391,
	"./me.js": 391,
	"./mi": 392,
	"./mi.js": 392,
	"./mk": 393,
	"./mk.js": 393,
	"./ml": 394,
	"./ml.js": 394,
	"./mn": 395,
	"./mn.js": 395,
	"./mr": 396,
	"./mr.js": 396,
	"./ms": 397,
	"./ms-my": 398,
	"./ms-my.js": 398,
	"./ms.js": 397,
	"./mt": 399,
	"./mt.js": 399,
	"./my": 400,
	"./my.js": 400,
	"./nb": 401,
	"./nb.js": 401,
	"./ne": 402,
	"./ne.js": 402,
	"./nl": 403,
	"./nl-be": 404,
	"./nl-be.js": 404,
	"./nl.js": 403,
	"./nn": 405,
	"./nn.js": 405,
	"./pa-in": 406,
	"./pa-in.js": 406,
	"./pl": 407,
	"./pl.js": 407,
	"./pt": 408,
	"./pt-br": 409,
	"./pt-br.js": 409,
	"./pt.js": 408,
	"./ro": 410,
	"./ro.js": 410,
	"./ru": 411,
	"./ru.js": 411,
	"./sd": 412,
	"./sd.js": 412,
	"./se": 413,
	"./se.js": 413,
	"./si": 414,
	"./si.js": 414,
	"./sk": 415,
	"./sk.js": 415,
	"./sl": 416,
	"./sl.js": 416,
	"./sq": 417,
	"./sq.js": 417,
	"./sr": 418,
	"./sr-cyrl": 419,
	"./sr-cyrl.js": 419,
	"./sr.js": 418,
	"./ss": 420,
	"./ss.js": 420,
	"./sv": 421,
	"./sv.js": 421,
	"./sw": 422,
	"./sw.js": 422,
	"./ta": 423,
	"./ta.js": 423,
	"./te": 424,
	"./te.js": 424,
	"./tet": 425,
	"./tet.js": 425,
	"./tg": 426,
	"./tg.js": 426,
	"./th": 427,
	"./th.js": 427,
	"./tl-ph": 428,
	"./tl-ph.js": 428,
	"./tlh": 429,
	"./tlh.js": 429,
	"./tr": 430,
	"./tr.js": 430,
	"./tzl": 431,
	"./tzl.js": 431,
	"./tzm": 432,
	"./tzm-latn": 433,
	"./tzm-latn.js": 433,
	"./tzm.js": 432,
	"./ug-cn": 434,
	"./ug-cn.js": 434,
	"./uk": 435,
	"./uk.js": 435,
	"./ur": 436,
	"./ur.js": 436,
	"./uz": 437,
	"./uz-latn": 438,
	"./uz-latn.js": 438,
	"./uz.js": 437,
	"./vi": 439,
	"./vi.js": 439,
	"./x-pseudo": 440,
	"./x-pseudo.js": 440,
	"./yo": 441,
	"./yo.js": 441,
	"./zh-cn": 442,
	"./zh-cn.js": 442,
	"./zh-hk": 443,
	"./zh-hk.js": 443,
	"./zh-tw": 444,
	"./zh-tw.js": 444
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 807;

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        var _this = this;
        this.auth = auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.auth.afAuth.authState
                .subscribe(function (user) {
                if (user) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
                }
            }, function () {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
            });
        });
    }
    MyApp.prototype.logout = function () {
        this.auth.signOut();
        this.rootPage(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.login = function () {
        this.auth.signOut();
        this.rootPage(__WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]);
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      hola2\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    fire: {
        apiKey: "AIzaSyAfYBU0sojw6WmDmjPvx3GrFSnKg6OiVjw",
        authDomain: "login-205b5.firebaseapp.com",
        databaseURL: "https://login-205b5.firebaseio.com",
        projectId: "login-205b5",
        storageBucket: "login-205b5.appspot.com",
        messagingSenderId: "994457813758"
    }
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 839:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[490]);
//# sourceMappingURL=main.js.map