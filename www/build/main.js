webpackJsonp([11],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListajornadasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListajornadasProvider = /** @class */ (function () {
    function ListajornadasProvider() {
        this.jornadas = [];
    }
    ListajornadasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ListajornadasProvider);
    return ListajornadasProvider;
}());

//# sourceMappingURL=listajornadas.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jugadores_jugadores__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendario_calendario__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equipo_equipo__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jornadas_jornadas__ = __webpack_require__(165);
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

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(48);
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

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendariomodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_listajornadas_listajornadas__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
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
    function CalendariomodalPage(listajornadas, navCtrl, navParams, viewCtrl, listajugadores) {
        this.listajornadas = listajornadas;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.listajugadores = listajugadores;
        this.event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), Casa: false, Fuera: false, title: '' };
        this.minDate = new Date().toISOString();
        this.titulares = [];
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.navParams.get('selectedDay')).format();
        this.event.startTime = preselectedDate;
        this.event.endTime = preselectedDate;
        console.log(this.event.startTime);
    }
    CalendariomodalPage.prototype.save = function () {
        for (var index = 0; index < this.listajugadores.jugadores.length; index++) {
            if (this.listajugadores.jugadores[index].juega) {
                this.titulares.push(this.listajugadores.jugadores[index]);
                if (this.event.Casa == true) {
                    this.listajugadores.jugadores[index].c += 1;
                }
                else if (this.event.Fuera == true) {
                    this.listajugadores.jugadores[index].f += 1;
                }
            }
        }
        this.jornada = { nombre: this.event.title, fecha: this.event.startTime, titular1: this.titulares[0], titular2: this.titulares[1], titular3: this.titulares[2], titular4: this.titulares[3], n_titular1: 0, n_titular2: 0, n_titular3: 0, n_titular4: 0 };
        console.log(this.jornada.titular1.nombre);
        this.listajornadas.jornadas.push(this.jornada);
        this.viewCtrl.dismiss(this.event);
    };
    CalendariomodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalendariomodalPage');
    };
    CalendariomodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendariomodal',template:/*ion-inline-start:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\calendariomodal\calendariomodal.html"*/'<!--\n\n  Generated template for the CalendariomodalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Fecha</ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Titulo" [(ngModel)]="event.title"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Comienzo</ion-label>\n\n      <ion-datetime displayFormat="DD/MM/YYYY HH:mm"  pickerFormat="DD/MM/YYYY HH:mm" [(ngModel)]="event.startTime" [min]="minDate"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>Fin</ion-label>\n\n        <ion-datetime displayFormat="DD/MM/YYYY HH:mm"  pickerFormat="DD/MM/YYYY HH:mm" [(ngModel)]="event.endTime" [min]="minDate"></ion-datetime>\n\n    </ion-item>\n\n  </ion-list>\n\n<ion-item *ngIf="!event.Fuera">\n\n<ion-label>Casa</ion-label>\n\n  <ion-checkbox [(ngModel)]="event.Casa"></ion-checkbox>\n\n</ion-item>\n\n<ion-item *ngIf="event.Fuera">\n\n    <ion-label>Casa</ion-label>\n\n      <ion-checkbox disabled=\'true\' [(ngModel)]="event.Casa"></ion-checkbox>\n\n</ion-item>\n\n<ion-item *ngIf="event.Casa">\n\n  <ion-label>Fuera</ion-label>\n\n  <ion-checkbox disabled=\'true\' [(ngModel)]="event.Fuera"></ion-checkbox>\n\n</ion-item>\n\n<ion-item *ngIf="!event.Casa">\n\n    <ion-label>Fuera</ion-label>\n\n    <ion-checkbox [(ngModel)]="event.Fuera"></ion-checkbox>\n\n  </ion-item>\n\n  <button ion-button color="dark" full icon-left (click)="save()">\n\n    <ion-icon name="checkmark"> Añadir Fecha </ion-icon>\n\n</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\calendariomodal\calendariomodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_listajornadas_listajornadas__["a" /* ListajornadasProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]])
    ], CalendariomodalPage);
    return CalendariomodalPage;
}());

//# sourceMappingURL=calendariomodal.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddjugadormodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__ = __webpack_require__(33);
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
    function AddjugadormodalPage(navCtrl, navParams, viewCtrl, listajugadores) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.listajugadores = listajugadores;
        this.juega = false;
    }
    AddjugadormodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AñadirjugadormodalPage');
    };
    AddjugadormodalPage.prototype.anadirjugador = function () {
        this.jugador = { nombre: this.nom, equipo: this.eq, j: Number(this.g) + Number(this.e) + Number(this.p), g: this.g, e: this.e, p: this.p, c: this.c, f: Number(this.g) + Number(this.e) + Number(this.p) - Number(this.c), ptos: Number(this.g) * 3 + Number(this.e), juega: this.juega };
        this.listajugadores.jugadores.push(this.jugador);
        this.listajugadores.jugadores.sort(function (a, b) {
            if (Number(a.ptos) > Number(b.ptos)) {
                return -1;
            }
            else if (Number(a.ptos) < Number(b.ptos)) {
                return 1;
            }
            else {
                return 0;
            }
        });
        this.viewCtrl.dismiss();
    };
    AddjugadormodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addjugadormodal',template:/*ion-inline-start:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\addjugadormodal\addjugadormodal.html"*/'<!--\n\n  Generated template for the AñadirjugadormodalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n      \n\n    <ion-title>Añadir Jugador</ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n\n          <ion-label floating>Nombre</ion-label>\n\n          <ion-input type="text" [(ngModel)]="nom"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label  floating>Equipo</ion-label>\n\n            <ion-select [(ngModel)]="eq">\n\n              <span *ngFor = "let equipo of listajugadores.equipos">\n\n                <ion-option value={{equipo.nombre}}>{{ equipo.nombre }}</ion-option>      \n\n              </span>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Partidos Ganados</ion-label>\n\n          <ion-input type="number" [(ngModel)]="g"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Partidos Empatados</ion-label>\n\n          <ion-input type="number" [(ngModel)]="e"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Partidos Perdidos</ion-label>\n\n          <ion-input type="number" [(ngModel)]="p"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Partidos en Casa</ion-label>\n\n          <ion-input type="number" [(ngModel)]="c"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n      <br> \n\n      <button ion-button color="dark" (click)="anadirjugador(jugadores)">Añadir</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\addjugadormodal\addjugadormodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]])
    ], AddjugadormodalPage);
    return AddjugadormodalPage;
}());

//# sourceMappingURL=addjugadormodal.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_calendariomodal_calendariomodal__ = __webpack_require__(158);
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

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosjugadormodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__ = __webpack_require__(33);
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
    function DatosjugadormodalPage(navCtrl, navParams, viewCtrl, listajugadores) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.listajugadores = listajugadores;
        this.jugador = {};
    }
    DatosjugadormodalPage.prototype.ionViewDidLoad = function () {
        var data = this.navParams.get('jugador');
        this.jugador = data;
    };
    DatosjugadormodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-datosjugadormodal',template:/*ion-inline-start:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\datosjugadormodal\datosjugadormodal.html"*/'<!--\n\n  Generated template for the DatosjugadormodalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark"> \n\n    <ion-title>Datos de {{ jugador.nombre }} </ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <h3><span style="font-weight: bold;"> Nombre: </span> {{ jugador.nombre }}</h3>\n\n      <h3><span style="font-weight: bold;"> Equipo: </span> {{ jugador.equipo }}</h3>\n\n      <h3><span style="font-weight: bold;">Partidos Jugados: </span> {{ jugador.j }}</h3>\n\n      <h3><span style="font-weight: bold;">Partidos Ganados: </span> {{ jugador.g }}</h3>\n\n      <h3><span style="font-weight: bold;">Partidos Empatados: </span> {{ jugador.e }}</h3>\n\n      <h3><span style="font-weight: bold;">Partidos Perdidos: </span> {{ jugador.p }}</h3>\n\n      <h3><span style="font-weight: bold;">Jugados en Casa: </span> {{ jugador.c }}</h3>\n\n      <h3><span style="font-weight: bold;">Jugados Fuera: </span> {{ jugador.f }}</h3>\n\n      <h3><span style="font-weight: bold;">Puntos: </span> {{ jugador.ptos }}</h3>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\datosjugadormodal\datosjugadormodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]])
    ], DatosjugadormodalPage);
    return DatosjugadormodalPage;
}());

//# sourceMappingURL=datosjugadormodal.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditjugadormodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__ = __webpack_require__(33);
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
 * Generated class for the EditjugadormodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditjugadormodalPage = /** @class */ (function () {
    function EditjugadormodalPage(navCtrl, navParams, viewCtrl, listajugadores) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.listajugadores = listajugadores;
        this.jugador = {};
    }
    EditjugadormodalPage.prototype.ionViewDidLoad = function () {
        var data = this.navParams.get('jugador');
        this.jugador = data;
        console.log('ionViewDidLoad EditjugadormodalPage');
    };
    EditjugadormodalPage.prototype.editarjugador = function () {
        for (var index = 0; index < this.listajugadores.jugadores.length; index++) {
            if (this.listajugadores.jugadores[index].nombre == this.jugador.nombre) {
                this.listajugadores.jugadores[index] = this.jugador;
                this.listajugadores.jugadores[index].j = Number(this.jugador.g) + Number(this.jugador.e) + Number(this.jugador.p);
                this.listajugadores.jugadores[index].f = Number(this.jugador.g) + Number(this.jugador.e) + Number(this.jugador.p) - Number(this.jugador.c);
                this.listajugadores.jugadores[index].ptos = Number(this.jugador.g) * 3 + Number(this.jugador.e);
                this.listajugadores.jugadores.sort(function (a, b) {
                    if (Number(a.ptos) > Number(b.ptos)) {
                        return -1;
                    }
                    else if (Number(a.ptos) < Number(b.ptos)) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
            }
        }
        this.viewCtrl.dismiss();
    };
    EditjugadormodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editjugadormodal',template:/*ion-inline-start:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\editjugadormodal\editjugadormodal.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n      \n\n    <ion-title>Editar Jugador</ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n\n          <ion-label floating>Nombre</ion-label>\n\n          <ion-input type="text" [(ngModel)]="jugador.nombre"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label  floating>Equipo</ion-label>\n\n            <ion-select [(ngModel)]="jugador.equipo">\n\n              <span *ngFor = "let equipo of listajugadores.equipos">\n\n                <ion-option value={{equipo.nombre}}>{{ equipo.nombre }}</ion-option>      \n\n              </span>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Partidos Ganados</ion-label>\n\n          <ion-input type="number" [(ngModel)]="jugador.g"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Partidos Empatados</ion-label>\n\n          <ion-input type="number" label="jugador.e" [(ngModel)]="jugador.e"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Partidos Perdidos</ion-label>\n\n          <ion-input type="number" label="jugador.p" [(ngModel)]="jugador.p"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Jugados en Casa</ion-label>\n\n          <ion-input type="number" label="jugador.c" [(ngModel)]="jugador.c"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n      <br> \n\n      <button ion-button color="dark" (click)="editarjugador()">Editar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\editjugadormodal\editjugadormodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]])
    ], EditjugadormodalPage);
    return EditjugadormodalPage;
}());

//# sourceMappingURL=editjugadormodal.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jugadoresmodal_jugadoresmodal__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_listajugadores_listajugadores__ = __webpack_require__(33);
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
    function EquipoPage(navCtrl, navParams, modalCtrl, AfAuth, listajugadores) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.AfAuth = AfAuth;
        this.listajugadores = listajugadores;
    }
    EquipoPage.prototype.mostrar_modal = function (equipo) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__jugadoresmodal_jugadoresmodal__["a" /* JugadoresmodalPage */], { equipo: equipo });
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
            selector: 'page-equipo',template:/*ion-inline-start:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\equipo\equipo.html"*/'<!--\n\n  Generated template for the EquipoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Equipos</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="signOut()" color="light">\n\n        Cerrar Sesion\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n      <button ion-item detail-none *ngFor = "let equipo of listajugadores.equipos" (click)="mostrar_modal(equipo)">\n\n        <br>\n\n        <h2>{{ equipo.nombre }}</h2>\n\n        <ion-icon name="contacts" item-left></ion-icon>\n\n      </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\equipo\equipo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]])
    ], EquipoPage);
    return EquipoPage;
}());

//# sourceMappingURL=equipo.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_num_jugadores_num_jugadores__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__ = __webpack_require__(33);
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
    function JugadoresmodalPage(navCtrl, navParams, viewCtrl, numJugadores, listajugadores) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.numJugadores = numJugadores;
        this.listajugadores = listajugadores;
        this.equipo = {};
        console.log(listajugadores.jugadores);
    }
    JugadoresmodalPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad JugadoresmodalPage');
        var data = this.navParams.get('equipo');
        this.equipo = data;
    };
    JugadoresmodalPage.prototype.convocar = function (jugador, equipo) {
        if (!jugador.juega) {
            equipo.convocados += 1;
            console.log(equipo.convocados);
            jugador.juega = true;
        }
        else if (jugador.juega, equipo) {
            equipo.convocados -= 1;
            console.log(equipo.convocados);
            jugador.juega = false;
        }
    };
    JugadoresmodalPage.prototype.volver = function () {
        this.viewCtrl.dismiss();
    };
    JugadoresmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jugadoresmodal',template:/*ion-inline-start:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\jugadoresmodal\jugadoresmodal.html"*/'<!--\n\n  Generated template for the JugadoresmodalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Jugadores de {{equipo.nombre}}</ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <span  *ngFor = "let jugador of listajugadores.jugadores">\n\n          <span *ngIf="jugador.equipo==equipo.nombre && jugador.equipo!=\'Libre\'">\n\n            <h2>\n\n              <ion-item ion-item detail-none *ngIf="equipo.convocados!=4 && jugador.juega==true">\n\n                <ion-icon name="contact" item-left></ion-icon>\n\n                <ion-label>{{ jugador.nombre }}</ion-label>\n\n                <ion-checkbox item-right checked="true" (click)="convocar(jugador, equipo)"></ion-checkbox>\n\n              </ion-item>\n\n              <ion-item ion-item detail-none *ngIf="equipo.convocados!=4 && jugador.juega==false">\n\n                  <ion-icon name="contact" item-left></ion-icon>\n\n                  <ion-label>{{ jugador.nombre }}</ion-label>\n\n                  <ion-checkbox item-right (click)="convocar(jugador, equipo)"></ion-checkbox>\n\n                </ion-item>\n\n              <ion-item ion-item detail-none *ngIf="equipo.convocados==4 && jugador.juega==false">\n\n                <ion-icon name="contact" item-left></ion-icon>\n\n                <ion-label>{{ jugador.nombre }}</ion-label>\n\n                <ion-checkbox item-right disabled=\'true\'></ion-checkbox> \n\n              </ion-item>\n\n              <ion-item ion-item detail-none *ngIf="equipo.convocados==4 && jugador.juega==true">\n\n                <ion-icon name="contact" item-left></ion-icon>\n\n                <ion-label>{{ jugador.nombre }}</ion-label>\n\n                <ion-checkbox item-right checked="true" (click)="convocar(jugador, equipo)"></ion-checkbox> \n\n              </ion-item>\n\n            </h2>\n\n        </span>\n\n        <span *ngIf="jugador.equipo==\'Libre\' && equipo.nombre!=\'Equipo1\'">\n\n            <h2>\n\n              <ion-item ion-item detail-none>\n\n                <ion-icon name="contact" item-left></ion-icon>\n\n                <ion-label>{{ jugador.nombre }}</ion-label>\n\n              </ion-item>\n\n            </h2>\n\n          </span>\n\n      </span>\n\n      \n\n    </ion-list>\n\n    <button ion-button color="dark" (click)="viewCtrl.dismiss()">Listo</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\jugadoresmodal\jugadoresmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_num_jugadores_num_jugadores__["a" /* NumJugadoresProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]])
    ], JugadoresmodalPage);
    return JugadoresmodalPage;
}());

//# sourceMappingURL=jugadoresmodal.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JornadasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_listajornadas_listajornadas__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jornadasmodal_jornadasmodal__ = __webpack_require__(166);
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
    function JornadasPage(modalCtrl, navCtrl, navParams, AfAuth, listajornadas) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AfAuth = AfAuth;
        this.listajornadas = listajornadas;
    }
    JornadasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JornadasPage');
    };
    JornadasPage.prototype.mostrar_modal = function (jornada) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__jornadasmodal_jornadasmodal__["a" /* JornadasmodalPage */], { jornada: jornada });
        modal.present();
    };
    JornadasPage.prototype.signOut = function () {
        return this.AfAuth.auth.signOut();
    };
    JornadasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jornadas',template:/*ion-inline-start:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\jornadas\jornadas.html"*/'<!--\n\n  Generated template for the JornadasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Jornadas</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="signOut()" color="light">\n\n        Cerrar Sesion\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <button *ngFor = "let jornada of listajornadas.jornadas" ion-item detail-none (click)="mostrar_modal(jornada)">\n\n          <h2>{{ jornada.nombre }}</h2>\n\n          <ion-icon name="game-controller-a" item-left></ion-icon>\n\n        </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\jornadas\jornadas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_3__providers_listajornadas_listajornadas__["a" /* ListajornadasProvider */]])
    ], JornadasPage);
    return JornadasPage;
}());

//# sourceMappingURL=jornadas.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JornadasmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__ = __webpack_require__(33);
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
 * Generated class for the JornadasmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JornadasmodalPage = /** @class */ (function () {
    function JornadasmodalPage(listajugadores, navCtrl, navParams, viewCtrl) {
        this.listajugadores = listajugadores;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.jornada = {};
        this.titular1 = 0;
        this.titular2 = 0;
        this.titular3 = 0;
        this.titular4 = 0;
    }
    JornadasmodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JornadasmodalPage');
        this.jornada = this.navParams.get('jornada');
        this.nombre1 = this.jornada.titular1.nombre;
        this.nombre2 = this.jornada.titular2.nombre;
        this.nombre3 = this.jornada.titular3.nombre;
        this.nombre4 = this.jornada.titular4.nombre;
        this.jornada.fecha = this.jornada.fecha.substring(0, 10);
        ;
    };
    JornadasmodalPage.prototype.gana = function (jugador, n_titular) {
        if (n_titular == 1) {
            jugador.j = Number(jugador.j) + 1;
            jugador.g = Number(jugador.g) + 1;
            jugador.ptos = Number(jugador.ptos) + 3;
            this.jornada.n_titular1 = 1;
        }
        else if (n_titular == 2) {
            jugador.j = Number(jugador.j) + 1;
            jugador.g = Number(jugador.g) + 1;
            jugador.ptos = Number(jugador.ptos) + 3;
            this.jornada.n_titular2 = 1;
        }
        else if (n_titular == 3) {
            jugador.j = Number(jugador.j) + 1;
            jugador.g = Number(jugador.g) + 1;
            jugador.ptos = Number(jugador.ptos) + 3;
            this.jornada.n_titular3 = 1;
        }
        else if (n_titular == 4) {
            jugador.j = Number(jugador.j) + 1;
            jugador.g = Number(jugador.g) + 1;
            jugador.ptos = Number(jugador.ptos) + 3;
            this.jornada.n_titular4 = 1;
        }
        this.listajugadores.jugadores.sort(function (a, b) {
            if (Number(a.ptos) > Number(b.ptos)) {
                return -1;
            }
            else if (Number(a.ptos) < Number(b.ptos)) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    JornadasmodalPage.prototype.empata = function (jugador, n_titular) {
        if (n_titular == 1) {
            jugador.j = Number(jugador.j) + 1;
            jugador.e = Number(jugador.g) + 1;
            jugador.ptos = Number(jugador.ptos) + 3;
            this.jornada.n_titular1 = 2;
        }
        else if (n_titular == 2) {
            jugador.j = Number(jugador.j) + 1;
            jugador.e = Number(jugador.g) + 1;
            jugador.ptos = Number(jugador.ptos) + 3;
            this.jornada.n_titular2 = 2;
        }
        else if (n_titular == 3) {
            jugador.j = Number(jugador.j) + 1;
            jugador.e = Number(jugador.g) + 1;
            jugador.ptos = Number(jugador.ptos) + 3;
            this.jornada.n_titular3 = 2;
        }
        else if (n_titular == 4) {
            jugador.j = Number(jugador.j) + 1;
            jugador.e = Number(jugador.g) + 1;
            jugador.ptos = Number(jugador.ptos) + 3;
            this.jornada.n_titular4 = 2;
        }
        this.listajugadores.jugadores.sort(function (a, b) {
            if (Number(a.ptos) > Number(b.ptos)) {
                return -1;
            }
            else if (Number(a.ptos) < Number(b.ptos)) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    JornadasmodalPage.prototype.pierde = function (jugador, n_titular) {
        if (n_titular == 1) {
            jugador.j = Number(jugador.j) + 1;
            jugador.p = Number(jugador.p) + 1;
            this.jornada.n_titular1 = 3;
        }
        else if (n_titular == 2) {
            jugador.j = Number(jugador.j) + 1;
            jugador.p = Number(jugador.p) + 1;
            this.jornada.n_titular2 = 3;
        }
        else if (n_titular == 3) {
            jugador.j = Number(jugador.j) + 1;
            jugador.p = Number(jugador.p) + 1;
            this.jornada.n_titular3 = 3;
        }
        else if (n_titular == 4) {
            jugador.j = Number(jugador.j) + 1;
            jugador.p = Number(jugador.p) + 1;
            this.jornada.n_titular4 = 3;
        }
    };
    JornadasmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jornadasmodal',template:/*ion-inline-start:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\jornadasmodal\jornadasmodal.html"*/'<!--\n\n  Generated template for the JornadasmodalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark"> \n\n    <ion-title>Datos de {{ jornada.nombre }} </ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <p><span style="font-weight: bold;"> Nombre: </span> {{ jornada.nombre }}</p>\n\n      <p><span style="font-weight: bold;"> Fecha: </span> {{ jornada.fecha }}</p>\n\n      <p>\n\n        <ion-label> \n\n          <span style="font-weight: bold;">    \n\n          Titular 1:\n\n          </span>\n\n          {{ nombre1 }}\n\n          &ensp;&ensp;&ensp;&ensp;\n\n          <span *ngIf="jornada.n_titular1==0">\n\n            G &ensp;<ion-checkbox (click)="gana(jornada.titular1,1)"></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox (click)="empata(jornada.titular1,1)"></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox (click)="pierde(jornada.titular1,1)"></ion-checkbox>\n\n          </span>\n\n          <span *ngIf="jornada.n_titular1==1">\n\n            G &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n          </span>  \n\n          <span *ngIf="jornada.n_titular1==2">\n\n            G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n          </span>  \n\n          <span *ngIf="jornada.n_titular1==3">\n\n            G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>\n\n          </span> \n\n        </ion-label>\n\n      </p>\n\n      <p>\n\n          <ion-label> \n\n            <span style="font-weight: bold;">    \n\n            Titular 2:\n\n            </span>\n\n            {{ nombre2  }}\n\n            &ensp;&ensp;&ensp;&ensp;\n\n            <span *ngIf="jornada.n_titular2==0">\n\n                G &ensp;<ion-checkbox (click)="gana(jornada.titular2,2)"></ion-checkbox>&ensp;&ensp;\n\n                E &ensp;<ion-checkbox (click)="empata(jornada.titular2,2)"></ion-checkbox>&ensp;&ensp;\n\n                P &ensp;<ion-checkbox (click)="pierde(jornada.titular2,2)"></ion-checkbox>\n\n              </span>\n\n              <span *ngIf="jornada.n_titular2==1">\n\n                G &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n              </span>  \n\n              <span *ngIf="jornada.n_titular2==2">\n\n                G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                E &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n              </span>  \n\n              <span *ngIf="jornada.n_titular2==3">\n\n                G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                P &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>\n\n              </span>  \n\n          </ion-label>\n\n        </p>\n\n        <p>\n\n            <ion-label> \n\n              <span style="font-weight: bold;">    \n\n              Titular 3:\n\n              </span>\n\n              {{ nombre3  }}\n\n              &ensp;&ensp;&ensp;&ensp;\n\n              <span *ngIf="jornada.n_titular3==0">\n\n                  G &ensp;<ion-checkbox (click)="gana(jornada.titular3,3)"></ion-checkbox>&ensp;&ensp;\n\n                  E &ensp;<ion-checkbox (click)="empata(jornada.titular3,3)"></ion-checkbox>&ensp;&ensp;\n\n                  P &ensp;<ion-checkbox (click)="pierde(jornada.titular3,3)"></ion-checkbox>\n\n                </span>\n\n                <span *ngIf="jornada.n_titular3==1">\n\n                  G &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                  E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                  P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n                </span>  \n\n                <span *ngIf="jornada.n_titular3==2">\n\n                  G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                  E &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                  P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n                </span>  \n\n                <span *ngIf="jornada.n_titular3==3">\n\n                  G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                  E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                  P &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>\n\n                </span> \n\n            </ion-label>\n\n          </p>\n\n          <p>\n\n              <ion-label> \n\n                <span style="font-weight: bold;">    \n\n                Titular 4:\n\n                </span>\n\n                {{ nombre4 }}\n\n                &ensp;&ensp;&ensp;&ensp;\n\n                <span *ngIf="jornada.n_titular4==0">\n\n                    G &ensp;<ion-checkbox (click)="gana(jornada.titular4,4)"></ion-checkbox>&ensp;&ensp;\n\n                    E &ensp;<ion-checkbox (click)="empata(jornada.titular4,4)"></ion-checkbox>&ensp;&ensp;\n\n                    P &ensp;<ion-checkbox (click)="pierde(jornada.titular4,4)"></ion-checkbox>\n\n                  </span>\n\n                  <span *ngIf="jornada.n_titular4==1">\n\n                    G &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                    E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                    P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n                  </span>  \n\n                  <span *ngIf="jornada.n_titular4==2">\n\n                    G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                    E &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                    P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n                  </span>  \n\n                  <span *ngIf="jornada.n_titular4==3">\n\n                    G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                    E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                    P &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>\n\n                  </span>  \n\n              </ion-label>\n\n            </p>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\jornadasmodal\jornadasmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], JornadasmodalPage);
    return JornadasmodalPage;
}());

//# sourceMappingURL=jornadasmodal.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datosjugadormodal_datosjugadormodal__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addjugadormodal_addjugadormodal__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editjugadormodal_editjugadormodal__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_listajugadores_listajugadores__ = __webpack_require__(33);
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
    function JugadoresPage(navCtrl, navParams, modalCtrl, AfAuth, listajugadores) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.AfAuth = AfAuth;
        this.listajugadores = listajugadores;
    }
    JugadoresPage.prototype.signOut = function () {
        return this.AfAuth.auth.signOut();
    };
    JugadoresPage.prototype.mostrar_modal = function (jugador) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__datosjugadormodal_datosjugadormodal__["a" /* DatosjugadormodalPage */], { jugador: jugador });
        modal.present();
    };
    JugadoresPage.prototype.mostrar_modal_anadir = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__addjugadormodal_addjugadormodal__["a" /* AddjugadormodalPage */], this.listajugadores.jugadores);
        modal.present();
    };
    JugadoresPage.prototype.mostrar_modal_editar = function (jugador) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__editjugadormodal_editjugadormodal__["a" /* EditjugadormodalPage */], { jugador: jugador });
        modal.present();
    };
    JugadoresPage.prototype.eliminar_jugador = function (jugador) {
        for (var index = 0; index < this.listajugadores.jugadores.length; index++) {
            if (this.listajugadores.jugadores[index].nombre == jugador.nombre) {
                this.listajugadores.jugadores.splice(index, 1);
            }
        }
    };
    JugadoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JugadoresPage');
    };
    JugadoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jugadores',template:/*ion-inline-start:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\jugadores\jugadores.html"*/'<!--\n\n  Generated template for the JugadoresPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Jugadores</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="mostrar_modal_anadir()" color="light">\n\n          <ion-icon name="person-add"></ion-icon>\n\n      </button>\n\n      <button ion-button (click)="signOut()" color="light">\n\n        Cerrar Sesion\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n      <span *ngFor = "let jugador of listajugadores.jugadores">\n\n        <h4>\n\n          <ion-icon name="contact" item-start></ion-icon>\n\n          {{ jugador.nombre }}\n\n          <ion-buttons end>\n\n            <button ion-button (click)="mostrar_modal(jugador)" color="dark">\n\n              <ion-icon name="eye" ></ion-icon>\n\n            </button>\n\n            <button ion-button (click)="mostrar_modal_editar(jugador)" color="dark">\n\n                <ion-icon name="create" ></ion-icon>\n\n            </button>\n\n            <button ion-button (click)="eliminar_jugador(jugador)" color="dark">\n\n              <ion-icon name="trash" ></ion-icon>\n\n          </button>\n\n          </ion-buttons>\n\n        </h4>\n\n    </span>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\jugadores\jugadores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_6__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]])
    ], JugadoresPage);
    return JugadoresPage;
}());

//# sourceMappingURL=jugadores.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(133);
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

/***/ 179:
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
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addjugadormodal/addjugadormodal.module": [
		852,
		10
	],
	"../pages/calendario/calendario.module": [
		853,
		9
	],
	"../pages/calendariomodal/calendariomodal.module": [
		854,
		8
	],
	"../pages/datosjugadormodal/datosjugadormodal.module": [
		855,
		7
	],
	"../pages/editjugadormodal/editjugadormodal.module": [
		856,
		6
	],
	"../pages/equipo/equipo.module": [
		857,
		5
	],
	"../pages/jornadas/jornadas.module": [
		858,
		4
	],
	"../pages/jornadasmodal/jornadasmodal.module": [
		859,
		3
	],
	"../pages/jugadores/jugadores.module": [
		860,
		2
	],
	"../pages/jugadoresmodal/jugadoresmodal.module": [
		861,
		1
	],
	"../pages/login/login.module": [
		862,
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
webpackAsyncContext.id = 224;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListajugadoresProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_jugadores__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_equipos__ = __webpack_require__(519);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListajugadoresProvider = /** @class */ (function () {
    function ListajugadoresProvider() {
        this.jugadores = __WEBPACK_IMPORTED_MODULE_1__data_data_jugadores__["a" /* JUGADORES */].slice(0).sort(function (a, b) {
            if (Number(a.ptos) > Number(b.ptos)) {
                return -1;
            }
            else if (Number(a.ptos) < Number(b.ptos)) {
                return 1;
            }
            else {
                return 0;
            }
        });
        this.equipos = __WEBPACK_IMPORTED_MODULE_2__data_data_equipos__["a" /* EQUIPOS */].slice(0);
    }
    ListajugadoresProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ListajugadoresProvider);
    return ListajugadoresProvider;
}());

//# sourceMappingURL=listajugadores.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumJugadoresProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the NumJugadoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NumJugadoresProvider = /** @class */ (function () {
    function NumJugadoresProvider() {
        this.numJugadores = 0;
    }
    NumJugadoresProvider.prototype.sumar_numJugadores = function () {
        this.numJugadores += 1;
    };
    NumJugadoresProvider.prototype.restar_numJugadores = function () {
        this.numJugadores -= 1;
    };
    NumJugadoresProvider.prototype.cargar_numJugadores = function () {
        return this.numJugadores;
    };
    NumJugadoresProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NumJugadoresProvider);
    return NumJugadoresProvider;
}());

//# sourceMappingURL=num-jugadores.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(498);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ultimate_ngxerrors__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__config__ = __webpack_require__(839);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_jugadores_jugadores__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_calendario_calendario__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_equipo_equipo__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_jornadas_jornadas__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_jugadoresmodal_jugadoresmodal__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic2_calendar__ = __webpack_require__(840);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_calendariomodal_calendariomodal__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_datosjugadormodal_datosjugadormodal__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_calendar__ = __webpack_require__(851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_addjugadormodal_addjugadormodal__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_num_jugadores_num_jugadores__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_listajugadores_listajugadores__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_listajornadas_listajornadas__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_editjugadormodal_editjugadormodal__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_jornadasmodal_jornadasmodal__ = __webpack_require__(166);
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
                __WEBPACK_IMPORTED_MODULE_24__pages_addjugadormodal_addjugadormodal__["a" /* AddjugadormodalPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_editjugadormodal_editjugadormodal__["a" /* EditjugadormodalPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_jornadasmodal_jornadasmodal__["a" /* JornadasmodalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addjugadormodal/addjugadormodal.module#AddjugadormodalPageModule', name: 'AddjugadormodalPage', segment: 'addjugadormodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendario/calendario.module#CalendarioPageModule', name: 'CalendarioPage', segment: 'calendario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendariomodal/calendariomodal.module#CalendariomodalPageModule', name: 'CalendariomodalPage', segment: 'calendariomodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/datosjugadormodal/datosjugadormodal.module#DatosjugadormodalPageModule', name: 'DatosjugadormodalPage', segment: 'datosjugadormodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editjugadormodal/editjugadormodal.module#EditjugadormodalPageModule', name: 'EditjugadormodalPage', segment: 'editjugadormodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/equipo/equipo.module#EquipoPageModule', name: 'EquipoPage', segment: 'equipo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jornadas/jornadas.module#JornadasPageModule', name: 'JornadasPage', segment: 'jornadas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jornadasmodal/jornadasmodal.module#JornadasmodalPageModule', name: 'JornadasmodalPage', segment: 'jornadasmodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugadores/jugadores.module#JugadoresPageModule', name: 'JugadoresPage', segment: 'jugadores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugadoresmodal/jugadoresmodal.module#JugadoresmodalPageModule', name: 'JugadoresmodalPage', segment: 'jugadoresmodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_24__pages_addjugadormodal_addjugadormodal__["a" /* AddjugadormodalPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_editjugadormodal_editjugadormodal__["a" /* EditjugadormodalPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_jornadasmodal_jornadasmodal__["a" /* JornadasmodalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_calendar__["a" /* Calendar */],
                __WEBPACK_IMPORTED_MODULE_25__providers_num_jugadores_num_jugadores__["a" /* NumJugadoresProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_listajornadas_listajornadas__["a" /* ListajornadasProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 518:
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
        ptos: 9,
        juega: true
    },
    {
        nombre: "Jugador2",
        equipo: "Equipo1",
        j: 4,
        g: 1,
        e: 2,
        p: 1,
        c: 2,
        f: 2,
        ptos: 5,
        juega: true
    },
    {
        nombre: "Jugador3",
        equipo: "Equipo1",
        j: 4,
        g: 1,
        e: 2,
        p: 1,
        c: 2,
        f: 2,
        ptos: 5,
        juega: true
    },
    {
        nombre: "Jugador4",
        equipo: "Equipo1",
        j: 4,
        g: 1,
        e: 2,
        p: 1,
        c: 2,
        f: 2,
        ptos: 5,
        juega: true
    },
    {
        nombre: "Jugador5",
        equipo: "Equipo1",
        j: 4,
        g: 1,
        e: 1,
        p: 1,
        c: 2,
        f: 2,
        ptos: 4,
        juega: false
    },
    {
        nombre: "Jugador6",
        equipo: "Libre",
        j: 4,
        g: 3,
        e: 2,
        p: 1,
        c: 2,
        f: 2,
        ptos: 11,
        juega: false
    }
];
//# sourceMappingURL=data.jugadores.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EQUIPOS; });
var EQUIPOS = [
    {
        nombre: "Equipo1",
        convocados: 4,
    },
    {
        nombre: "Libre",
        convocados: 0,
    }
];
//# sourceMappingURL=data.equipos.js.map

/***/ }),

/***/ 812:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 325,
	"./af.js": 325,
	"./ar": 326,
	"./ar-dz": 327,
	"./ar-dz.js": 327,
	"./ar-kw": 328,
	"./ar-kw.js": 328,
	"./ar-ly": 329,
	"./ar-ly.js": 329,
	"./ar-ma": 330,
	"./ar-ma.js": 330,
	"./ar-sa": 331,
	"./ar-sa.js": 331,
	"./ar-tn": 332,
	"./ar-tn.js": 332,
	"./ar.js": 326,
	"./az": 333,
	"./az.js": 333,
	"./be": 334,
	"./be.js": 334,
	"./bg": 335,
	"./bg.js": 335,
	"./bm": 336,
	"./bm.js": 336,
	"./bn": 337,
	"./bn.js": 337,
	"./bo": 338,
	"./bo.js": 338,
	"./br": 339,
	"./br.js": 339,
	"./bs": 340,
	"./bs.js": 340,
	"./ca": 341,
	"./ca.js": 341,
	"./cs": 342,
	"./cs.js": 342,
	"./cv": 343,
	"./cv.js": 343,
	"./cy": 344,
	"./cy.js": 344,
	"./da": 345,
	"./da.js": 345,
	"./de": 346,
	"./de-at": 347,
	"./de-at.js": 347,
	"./de-ch": 348,
	"./de-ch.js": 348,
	"./de.js": 346,
	"./dv": 349,
	"./dv.js": 349,
	"./el": 350,
	"./el.js": 350,
	"./en-au": 351,
	"./en-au.js": 351,
	"./en-ca": 352,
	"./en-ca.js": 352,
	"./en-gb": 353,
	"./en-gb.js": 353,
	"./en-ie": 354,
	"./en-ie.js": 354,
	"./en-il": 355,
	"./en-il.js": 355,
	"./en-nz": 356,
	"./en-nz.js": 356,
	"./eo": 357,
	"./eo.js": 357,
	"./es": 358,
	"./es-do": 359,
	"./es-do.js": 359,
	"./es-us": 360,
	"./es-us.js": 360,
	"./es.js": 358,
	"./et": 361,
	"./et.js": 361,
	"./eu": 362,
	"./eu.js": 362,
	"./fa": 363,
	"./fa.js": 363,
	"./fi": 364,
	"./fi.js": 364,
	"./fo": 365,
	"./fo.js": 365,
	"./fr": 366,
	"./fr-ca": 367,
	"./fr-ca.js": 367,
	"./fr-ch": 368,
	"./fr-ch.js": 368,
	"./fr.js": 366,
	"./fy": 369,
	"./fy.js": 369,
	"./gd": 370,
	"./gd.js": 370,
	"./gl": 371,
	"./gl.js": 371,
	"./gom-latn": 372,
	"./gom-latn.js": 372,
	"./gu": 373,
	"./gu.js": 373,
	"./he": 374,
	"./he.js": 374,
	"./hi": 375,
	"./hi.js": 375,
	"./hr": 376,
	"./hr.js": 376,
	"./hu": 377,
	"./hu.js": 377,
	"./hy-am": 378,
	"./hy-am.js": 378,
	"./id": 379,
	"./id.js": 379,
	"./is": 380,
	"./is.js": 380,
	"./it": 381,
	"./it.js": 381,
	"./ja": 382,
	"./ja.js": 382,
	"./jv": 383,
	"./jv.js": 383,
	"./ka": 384,
	"./ka.js": 384,
	"./kk": 385,
	"./kk.js": 385,
	"./km": 386,
	"./km.js": 386,
	"./kn": 387,
	"./kn.js": 387,
	"./ko": 388,
	"./ko.js": 388,
	"./ky": 389,
	"./ky.js": 389,
	"./lb": 390,
	"./lb.js": 390,
	"./lo": 391,
	"./lo.js": 391,
	"./lt": 392,
	"./lt.js": 392,
	"./lv": 393,
	"./lv.js": 393,
	"./me": 394,
	"./me.js": 394,
	"./mi": 395,
	"./mi.js": 395,
	"./mk": 396,
	"./mk.js": 396,
	"./ml": 397,
	"./ml.js": 397,
	"./mn": 398,
	"./mn.js": 398,
	"./mr": 399,
	"./mr.js": 399,
	"./ms": 400,
	"./ms-my": 401,
	"./ms-my.js": 401,
	"./ms.js": 400,
	"./mt": 402,
	"./mt.js": 402,
	"./my": 403,
	"./my.js": 403,
	"./nb": 404,
	"./nb.js": 404,
	"./ne": 405,
	"./ne.js": 405,
	"./nl": 406,
	"./nl-be": 407,
	"./nl-be.js": 407,
	"./nl.js": 406,
	"./nn": 408,
	"./nn.js": 408,
	"./pa-in": 409,
	"./pa-in.js": 409,
	"./pl": 410,
	"./pl.js": 410,
	"./pt": 411,
	"./pt-br": 412,
	"./pt-br.js": 412,
	"./pt.js": 411,
	"./ro": 413,
	"./ro.js": 413,
	"./ru": 414,
	"./ru.js": 414,
	"./sd": 415,
	"./sd.js": 415,
	"./se": 416,
	"./se.js": 416,
	"./si": 417,
	"./si.js": 417,
	"./sk": 418,
	"./sk.js": 418,
	"./sl": 419,
	"./sl.js": 419,
	"./sq": 420,
	"./sq.js": 420,
	"./sr": 421,
	"./sr-cyrl": 422,
	"./sr-cyrl.js": 422,
	"./sr.js": 421,
	"./ss": 423,
	"./ss.js": 423,
	"./sv": 424,
	"./sv.js": 424,
	"./sw": 425,
	"./sw.js": 425,
	"./ta": 426,
	"./ta.js": 426,
	"./te": 427,
	"./te.js": 427,
	"./tet": 428,
	"./tet.js": 428,
	"./tg": 429,
	"./tg.js": 429,
	"./th": 430,
	"./th.js": 430,
	"./tl-ph": 431,
	"./tl-ph.js": 431,
	"./tlh": 432,
	"./tlh.js": 432,
	"./tr": 433,
	"./tr.js": 433,
	"./tzl": 434,
	"./tzl.js": 434,
	"./tzm": 435,
	"./tzm-latn": 436,
	"./tzm-latn.js": 436,
	"./tzm.js": 435,
	"./ug-cn": 437,
	"./ug-cn.js": 437,
	"./uk": 438,
	"./uk.js": 438,
	"./ur": 439,
	"./ur.js": 439,
	"./uz": 440,
	"./uz-latn": 441,
	"./uz-latn.js": 441,
	"./uz.js": 440,
	"./vi": 442,
	"./vi.js": 442,
	"./x-pseudo": 443,
	"./x-pseudo.js": 443,
	"./yo": 444,
	"./yo.js": 444,
	"./zh-cn": 445,
	"./zh-cn.js": 445,
	"./zh-hk": 446,
	"./zh-hk.js": 446,
	"./zh-tw": 447,
	"./zh-tw.js": 447
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
webpackContext.id = 812;

/***/ }),

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(132);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nacho\Desktop\DAM\Ionic\gtAjedrez\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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

/***/ 839:
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

/***/ 844:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[493]);
//# sourceMappingURL=main.js.map