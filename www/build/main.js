webpackJsonp([10],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListajornadasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jugadores_jugadores__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendario_calendario__ = __webpack_require__(91);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab2Root" tabTitle="Calendario" tabIcon="calendar"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Equipos" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Jugadores" tabIcon="contact"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabTitle="Jornadas" tabIcon="bookmarks"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(68);
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

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendariomodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_listajornadas_listajornadas__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
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
            selector: 'page-calendariomodal',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\calendariomodal\calendariomodal.html"*/'<!--\n\n  Generated template for the CalendariomodalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Fecha</ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Titulo" [(ngModel)]="event.title"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Comienzo</ion-label>\n\n      <ion-datetime displayFormat="DD/MM/YYYY HH:mm"  pickerFormat="DD/MM/YYYY HH:mm" [(ngModel)]="event.startTime" [min]="minDate"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>Fin</ion-label>\n\n        <ion-datetime displayFormat="DD/MM/YYYY HH:mm"  pickerFormat="DD/MM/YYYY HH:mm" [(ngModel)]="event.endTime" [min]="minDate"></ion-datetime>\n\n    </ion-item>\n\n  </ion-list>\n\n<ion-item *ngIf="!event.Fuera">\n\n<ion-label>Casa</ion-label>\n\n  <ion-checkbox [(ngModel)]="event.Casa"></ion-checkbox>\n\n</ion-item>\n\n<ion-item *ngIf="event.Fuera">\n\n    <ion-label>Casa</ion-label>\n\n      <ion-checkbox disabled=\'true\' [(ngModel)]="event.Casa"></ion-checkbox>\n\n</ion-item>\n\n<ion-item *ngIf="event.Casa">\n\n  <ion-label>Fuera</ion-label>\n\n  <ion-checkbox disabled=\'true\' [(ngModel)]="event.Fuera"></ion-checkbox>\n\n</ion-item>\n\n<ion-item *ngIf="!event.Casa">\n\n    <ion-label>Fuera</ion-label>\n\n    <ion-checkbox [(ngModel)]="event.Fuera"></ion-checkbox>\n\n  </ion-item>\n\n  <button ion-button color="dark" full icon-left (click)="save()">\n\n    <ion-icon > Añadir Fecha </ion-icon>\n\n</button>\n\n<button ion-button color="dark" full (click)="viewCtrl.dismiss()">Cancelar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\calendariomodal\calendariomodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_listajornadas_listajornadas__["a" /* ListajornadasProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]])
    ], CalendariomodalPage);
    return CalendariomodalPage;
}());

//# sourceMappingURL=calendariomodal.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jugadoresmodal_jugadoresmodal__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_listajugadores_listajugadores__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__);
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
    function EquipoPage(fdb, navCtrl, navParams, modalCtrl, AfAuth, listajugadores) {
        this.fdb = fdb;
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
            selector: 'page-equipo',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\equipo\equipo.html"*/'<!--\n\n  Generated template for the EquipoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Equipos</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="signOut()" color="light">\n\n        Cerrar Sesion\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n      <button ion-item detail-none *ngFor = "let equipo of listajugadores.equipos" (click)="mostrar_modal(equipo)">\n\n        <br>\n\n        <h2>{{ equipo.nombre }}</h2>\n\n        <ion-icon name="contacts" item-left></ion-icon>\n\n      </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\equipo\equipo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]])
    ], EquipoPage);
    return EquipoPage;
}());

//# sourceMappingURL=equipo.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_num_jugadores_num_jugadores__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__ = __webpack_require__(46);
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
            selector: 'page-jugadoresmodal',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jugadoresmodal\jugadoresmodal.html"*/'<!--\n\n  Generated template for the JugadoresmodalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Jugadores de {{equipo.nombre}}</ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <span  *ngFor = "let jugador of listajugadores.jugadores">\n\n          <span *ngIf="jugador.equipo==equipo.nombre && jugador.equipo!=\'Libre\'">\n\n            <h2>\n\n              <ion-item ion-item detail-none *ngIf="equipo.convocados!=4 && jugador.juega==true">\n\n                <ion-icon name="contact" item-left></ion-icon>\n\n                <ion-label>{{ jugador.nombre }}</ion-label>\n\n                <ion-checkbox item-right checked="true" (click)="convocar(jugador, equipo)"></ion-checkbox>\n\n              </ion-item>\n\n              <ion-item ion-item detail-none *ngIf="equipo.convocados!=4 && jugador.juega==false">\n\n                  <ion-icon name="contact" item-left></ion-icon>\n\n                  <ion-label>{{ jugador.nombre }}</ion-label>\n\n                  <ion-checkbox item-right (click)="convocar(jugador, equipo)"></ion-checkbox>\n\n                </ion-item>\n\n              <ion-item ion-item detail-none *ngIf="equipo.convocados==4 && jugador.juega==false">\n\n                <ion-icon name="contact" item-left></ion-icon>\n\n                <ion-label>{{ jugador.nombre }}</ion-label>\n\n                <ion-checkbox item-right disabled=\'true\'></ion-checkbox> \n\n              </ion-item>\n\n              <ion-item ion-item detail-none *ngIf="equipo.convocados==4 && jugador.juega==true">\n\n                <ion-icon name="contact" item-left></ion-icon>\n\n                <ion-label>{{ jugador.nombre }}</ion-label>\n\n                <ion-checkbox item-right checked="true" (click)="convocar(jugador, equipo)"></ion-checkbox> \n\n              </ion-item>\n\n            </h2>\n\n        </span>\n\n        <span *ngIf="jugador.equipo==\'Libre\' && equipo.nombre!=\'Equipo1\'">\n\n            <h2>\n\n              <ion-item ion-item detail-none>\n\n                <ion-icon name="contact" item-left></ion-icon>\n\n                <ion-label>{{ jugador.nombre }}</ion-label>\n\n              </ion-item>\n\n            </h2>\n\n          </span>\n\n      </span>\n\n      \n\n    </ion-list>\n\n    <button ion-button color="dark" (click)="viewCtrl.dismiss()">Listo</button>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jugadoresmodal\jugadoresmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_num_jugadores_num_jugadores__["a" /* NumJugadoresProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]])
    ], JugadoresmodalPage);
    return JugadoresmodalPage;
}());

//# sourceMappingURL=jugadoresmodal.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JornadasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_listajornadas_listajornadas__ = __webpack_require__(133);
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
            selector: 'page-jornadas',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jornadas\jornadas.html"*/'<!--\n\n  Generated template for the JornadasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Jornadas</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="signOut()" color="light">\n\n        Cerrar Sesion\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <button *ngFor = "let jornada of listajornadas.jornadas" ion-item detail-none (click)="mostrar_modal(jornada)">\n\n          <h2>{{ jornada.nombre }}</h2>\n\n          <ion-icon name="game-controller-a" item-left></ion-icon>\n\n        </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jornadas\jornadas.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__ = __webpack_require__(46);
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
            selector: 'page-jornadasmodal',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jornadasmodal\jornadasmodal.html"*/'<!--\n\n  Generated template for the JornadasmodalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark"> \n\n    <ion-title>Datos de {{ jornada.nombre }} </ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <p><span style="font-weight: bold;"> Nombre: </span> {{ jornada.nombre }}</p>\n\n      <p><span style="font-weight: bold;"> Fecha: </span> {{ jornada.fecha }}</p>\n\n      <p>\n\n        <ion-label> \n\n          <span style="font-weight: bold;">    \n\n          Titular 1:\n\n          </span>\n\n          {{ nombre1 }}\n\n          &ensp;&ensp;&ensp;&ensp;\n\n          <span *ngIf="jornada.n_titular1==0">\n\n            G &ensp;<ion-checkbox (click)="gana(jornada.titular1,1)"></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox (click)="empata(jornada.titular1,1)"></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox (click)="pierde(jornada.titular1,1)"></ion-checkbox>\n\n          </span>\n\n          <span *ngIf="jornada.n_titular1==1">\n\n            G &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n          </span>  \n\n          <span *ngIf="jornada.n_titular1==2">\n\n            G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n          </span>  \n\n          <span *ngIf="jornada.n_titular1==3">\n\n            G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>\n\n          </span> \n\n        </ion-label>\n\n      </p>\n\n      <p>\n\n          <ion-label> \n\n            <span style="font-weight: bold;">    \n\n            Titular 2:\n\n            </span>\n\n            {{ nombre2  }}\n\n            &ensp;&ensp;&ensp;&ensp;\n\n            <span *ngIf="jornada.n_titular2==0">\n\n                G &ensp;<ion-checkbox (click)="gana(jornada.titular2,2)"></ion-checkbox>&ensp;&ensp;\n\n                E &ensp;<ion-checkbox (click)="empata(jornada.titular2,2)"></ion-checkbox>&ensp;&ensp;\n\n                P &ensp;<ion-checkbox (click)="pierde(jornada.titular2,2)"></ion-checkbox>\n\n              </span>\n\n              <span *ngIf="jornada.n_titular2==1">\n\n                G &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n              </span>  \n\n              <span *ngIf="jornada.n_titular2==2">\n\n                G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                E &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n              </span>  \n\n              <span *ngIf="jornada.n_titular2==3">\n\n                G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                P &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>\n\n              </span>  \n\n          </ion-label>\n\n        </p>\n\n        <p>\n\n            <ion-label> \n\n              <span style="font-weight: bold;">    \n\n              Titular 3:\n\n              </span>\n\n              {{ nombre3  }}\n\n              &ensp;&ensp;&ensp;&ensp;\n\n              <span *ngIf="jornada.n_titular3==0">\n\n                  G &ensp;<ion-checkbox (click)="gana(jornada.titular3,3)"></ion-checkbox>&ensp;&ensp;\n\n                  E &ensp;<ion-checkbox (click)="empata(jornada.titular3,3)"></ion-checkbox>&ensp;&ensp;\n\n                  P &ensp;<ion-checkbox (click)="pierde(jornada.titular3,3)"></ion-checkbox>\n\n                </span>\n\n                <span *ngIf="jornada.n_titular3==1">\n\n                  G &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                  E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                  P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n                </span>  \n\n                <span *ngIf="jornada.n_titular3==2">\n\n                  G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                  E &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                  P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n                </span>  \n\n                <span *ngIf="jornada.n_titular3==3">\n\n                  G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                  E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                  P &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>\n\n                </span> \n\n            </ion-label>\n\n          </p>\n\n          <p>\n\n              <ion-label> \n\n                <span style="font-weight: bold;">    \n\n                Titular 4:\n\n                </span>\n\n                {{ nombre4 }}\n\n                &ensp;&ensp;&ensp;&ensp;\n\n                <span *ngIf="jornada.n_titular4==0">\n\n                    G &ensp;<ion-checkbox (click)="gana(jornada.titular4,4)"></ion-checkbox>&ensp;&ensp;\n\n                    E &ensp;<ion-checkbox (click)="empata(jornada.titular4,4)"></ion-checkbox>&ensp;&ensp;\n\n                    P &ensp;<ion-checkbox (click)="pierde(jornada.titular4,4)"></ion-checkbox>\n\n                  </span>\n\n                  <span *ngIf="jornada.n_titular4==1">\n\n                    G &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                    E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                    P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n                  </span>  \n\n                  <span *ngIf="jornada.n_titular4==2">\n\n                    G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                    E &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                    P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n                  </span>  \n\n                  <span *ngIf="jornada.n_titular4==3">\n\n                    G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                    E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                    P &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>\n\n                  </span>  \n\n              </ion-label>\n\n            </p>\n\n    </ion-list>\n\n    <button ion-button color="dark" (click)="viewCtrl.dismiss()">Listo</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jornadasmodal\jornadasmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], JornadasmodalPage);
    return JornadasmodalPage;
}());

//# sourceMappingURL=jornadasmodal.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(137);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\login\login.html"*/'<ion-header>\n\n	<ion-navbar color="dark">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>Inciar Sesión</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-image">\n\n	<form (ngSubmit)="login()" [formGroup]="loginForm">\n\n		<ion-list inset>\n\n\n\n			<ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\', \'dirty\']) }">\n\n				<ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n\n			</ion-item>\n\n\n\n			<div ngxErrors="email" #emailErrors="ngxErrors">\n\n				<div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\', \'dirty\']">It should be a valid email</div>\n\n			</div>\n\n\n\n			<ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n\n				<ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n\n			</ion-item>\n\n\n\n			<div ngxErrors="password" #passwordErrors="ngxErrors">\n\n				<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be at least 5 characters</div>\n\n			</div>\n\n		</ion-list>\n\n\n\n		<div padding-horizontal>\n\n			<div class="form-error">{{loginError}}</div>\n\n\n\n			<button ion-button full type="submit" [disabled]="!loginForm.valid">Log in</button>\n\n		</div>\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 200:
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
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addjugadormodal/addjugadormodal.module": [
		666,
		22
	],
	"../pages/calendario/calendario.module": [
		657,
		21
	],
	"../pages/calendariomodal/calendariomodal.module": [
		658,
		20
	],
	"../pages/datosjugadormodal/datosjugadormodal.module": [
		659,
		19
	],
	"../pages/editjugadormodal/editjugadormodal.module": [
		660,
		18
	],
	"../pages/equipo/equipo.module": [
		661,
		17
	],
	"../pages/jornadas/jornadas.module": [
		662,
		16
	],
	"../pages/jornadasmodal/jornadasmodal.module": [
		664,
		15
	],
	"../pages/jugadores/jugadores.module": [
		667,
		14
	],
	"../pages/jugadoresmodal/jugadoresmodal.module": [
		663,
		13
	],
	"../pages/login/login.module": [
		665,
		12
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
webpackAsyncContext.id = 242;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumJugadoresProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datosjugadormodal_datosjugadormodal__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addjugadormodal_addjugadormodal__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editjugadormodal_editjugadormodal__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_listajugadores_listajugadores__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators__ = __webpack_require__(28);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
    function JugadoresPage(afdb, navCtrl, navParams, modalCtrl, AfAuth, listajugadores) {
        this.afdb = afdb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.AfAuth = AfAuth;
        this.listajugadores = listajugadores;
        this.listaJugadores = afdb.list("/jugador");
        this.jugadores = this.listaJugadores.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["map"])(function (changes) { return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); }); }));
        // let hola = afdb.database.ref("/jugador").orderByChild('nombre').on('child_added', function(data){
        //   this.jugadores.
        //   // console.log(data.val().nombre);
        //   // console.log("hola");
        //   console.log(this.jugadores);
        // })
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
            selector: 'page-jugadores',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jugadores\jugadores.html"*/'<!--\n\n  Generated template for the JugadoresPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Jugadores</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="mostrar_modal_anadir()" color="light">\n\n          <ion-icon name="person-add"></ion-icon>\n\n      </button>\n\n      <button ion-button (click)="signOut()" color="light">\n\n        Cerrar Sesion\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let jugador of jugadores | async">\n\n      {{jugador.nombre}}, {{jugador.elo}}\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jugadores\jugadores.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["AngularFireDatabase"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]) === "function" && _f || Object])
    ], JugadoresPage);
    return JugadoresPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=jugadores.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosjugadormodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__ = __webpack_require__(46);
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
            selector: 'page-datosjugadormodal',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\datosjugadormodal\datosjugadormodal.html"*/'<!--\n\n  Generated template for the DatosjugadormodalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark"> \n\n    <ion-title>Datos de {{ jugador.nombre }} </ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <h3><span style="font-weight: bold;"> Nombre: </span> {{ jugador.nombre }}</h3>\n\n      <h3><span style="font-weight: bold;"> Equipo: </span> {{ jugador.equipo }}</h3>\n\n      <h3><span style="font-weight: bold;">Partidos Jugados: </span> {{ jugador.j }}</h3>\n\n      <h3><span style="font-weight: bold;">Partidos Ganados: </span> {{ jugador.g }}</h3>\n\n      <h3><span style="font-weight: bold;">Partidos Empatados: </span> {{ jugador.e }}</h3>\n\n      <h3><span style="font-weight: bold;">Partidos Perdidos: </span> {{ jugador.p }}</h3>\n\n      <h3><span style="font-weight: bold;">Jugados en Casa: </span> {{ jugador.c }}</h3>\n\n      <h3><span style="font-weight: bold;">Jugados Fuera: </span> {{ jugador.f }}</h3>\n\n      <h3><span style="font-weight: bold;">Puntos: </span> {{ jugador.ptos }}</h3>\n\n    </ion-list>\n\n    <button ion-button color="dark" (click)="viewCtrl.dismiss()">Listo</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\datosjugadormodal\datosjugadormodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]])
    ], DatosjugadormodalPage);
    return DatosjugadormodalPage;
}());

//# sourceMappingURL=datosjugadormodal.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditjugadormodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__ = __webpack_require__(46);
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
            selector: 'page-editjugadormodal',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\editjugadormodal\editjugadormodal.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n      \n\n    <ion-title>Editar Jugador</ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n\n          <ion-label floating>Nombre</ion-label>\n\n          <ion-input type="text" [(ngModel)]="jugador.nombre"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label  floating>Equipo</ion-label>\n\n            <ion-select [(ngModel)]="jugador.equipo">\n\n              <span *ngFor = "let equipo of listajugadores.equipos">\n\n                <ion-option value={{equipo.nombre}}>{{ equipo.nombre }}</ion-option>      \n\n              </span>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Partidos Ganados</ion-label>\n\n          <ion-input type="number" [(ngModel)]="jugador.g"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Partidos Empatados</ion-label>\n\n          <ion-input type="number" label="jugador.e" [(ngModel)]="jugador.e"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Partidos Perdidos</ion-label>\n\n          <ion-input type="number" label="jugador.p" [(ngModel)]="jugador.p"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Jugados en Casa</ion-label>\n\n          <ion-input type="number" label="jugador.c" [(ngModel)]="jugador.c"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n      <br> \n\n      <button ion-button color="dark" (click)="editarjugador()">Editar</button>\n\n      <button ion-button color="dark" (click)="viewCtrl.dismiss()">Cancelar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\editjugadormodal\editjugadormodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]])
    ], EditjugadormodalPage);
    return EditjugadormodalPage;
}());

//# sourceMappingURL=editjugadormodal.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddjugadormodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_calendario_calendario__ = __webpack_require__(91);
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
    function AddjugadormodalPage(navCtrl, afdb, toastCtrl) {
        this.navCtrl = navCtrl;
        this.afdb = afdb;
        this.toastCtrl = toastCtrl;
        this.jugador = {
            nombre: '',
            email: '',
            casa: 0,
            fuera: 0,
            empate: 0,
            ganado: 0,
            perdidos: 0,
            jugados: 0,
            elo: 0
        };
    }
    AddjugadormodalPage.prototype.anadir = function () {
        this.afdb.list("/jugador/").push(this.jugador);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_calendario_calendario__["a" /* CalendarioPage */]);
        this.mostrar_mensaje("Jugador " + this.jugador.nombre + " añadido correctamente.");
    };
    AddjugadormodalPage.prototype.mostrar_mensaje = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3500,
            cssClass: "toast"
        });
        toast.present();
    };
    AddjugadormodalPage.prototype.volver = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_calendario_calendario__["a" /* CalendarioPage */]);
    };
    AddjugadormodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addjugadormodal',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\addjugadormodal\addjugadormodal.html"*/'<!--\n\n  Generated template for the AñadirjugadormodalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n      \n\n    <ion-title>Añadir Jugador</ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button\n\n        icon-only (click)="volver()">\n\n          <ion-icon name="md-arrow-back"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n    \n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label floating>Nombre</ion-label>\n\n    <ion-input name="nombre" [(ngModel)]="jugador.nombre"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Correo</ion-label>\n\n    <ion-input name="email" [(ngModel)]="jugador.email"></ion-input>\n\n  </ion-item>\n\n  <br>\n\n  <button ion-button block clear (click)="anadir()">Añadir</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\addjugadormodal\addjugadormodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], AddjugadormodalPage);
    return AddjugadormodalPage;
}());

//# sourceMappingURL=addjugadormodal.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(550);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListajugadoresProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_jugadores__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_equipos__ = __webpack_require__(591);
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

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ultimate_ngxerrors__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__config__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_jugadores_jugadores__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_calendario_calendario__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_equipo_equipo__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_jornadas_jornadas__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_jugadoresmodal_jugadoresmodal__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic2_calendar__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_calendariomodal_calendariomodal__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_datosjugadormodal_datosjugadormodal__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_calendar__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_addjugadormodal_addjugadormodal__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_num_jugadores_num_jugadores__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_listajugadores_listajugadores__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_listajornadas_listajornadas__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_editjugadormodal_editjugadormodal__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_jornadasmodal_jornadasmodal__ = __webpack_require__(166);
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
                __WEBPACK_IMPORTED_MODULE_16__pages_jugadores_jugadores__["a" /* JugadoresPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_calendario_calendario__["a" /* CalendarioPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_equipo_equipo__["a" /* EquipoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_jornadas_jornadas__["a" /* JornadasPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_jugadoresmodal_jugadoresmodal__["a" /* JugadoresmodalPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_calendariomodal_calendariomodal__["a" /* CalendariomodalPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_datosjugadormodal_datosjugadormodal__["a" /* DatosjugadormodalPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_addjugadormodal_addjugadormodal__["a" /* AddjugadormodalPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_editjugadormodal_editjugadormodal__["a" /* EditjugadormodalPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_jornadasmodal_jornadasmodal__["a" /* JornadasmodalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/calendario/calendario.module#CalendarioPageModule', name: 'CalendarioPage', segment: 'calendario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendariomodal/calendariomodal.module#CalendariomodalPageModule', name: 'CalendariomodalPage', segment: 'calendariomodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/datosjugadormodal/datosjugadormodal.module#DatosjugadormodalPageModule', name: 'DatosjugadormodalPage', segment: 'datosjugadormodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editjugadormodal/editjugadormodal.module#EditjugadormodalPageModule', name: 'EditjugadormodalPage', segment: 'editjugadormodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/equipo/equipo.module#EquipoPageModule', name: 'EquipoPage', segment: 'equipo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugadores/jugadores.module#JugadoresPageModule', name: 'JugadoresPage', segment: 'jugadores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jornadas/jornadas.module#JornadasPageModule', name: 'JornadasPage', segment: 'jornadas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugadoresmodal/jugadoresmodal.module#JugadoresmodalPageModule', name: 'JugadoresmodalPage', segment: 'jugadoresmodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jornadasmodal/jornadasmodal.module#JornadasmodalPageModule', name: 'JornadasmodalPage', segment: 'jornadasmodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addjugadormodal/addjugadormodal.module#AddjugadormodalPageModule', name: 'AddjugadormodalPage', segment: 'addjugadormodal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__ultimate_ngxerrors__["a" /* NgxErrorsModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_15__config__["a" /* firebaseConfig */].fire),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_21_ionic2_calendar__["a" /* NgCalendarModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_jugadores_jugadores__["a" /* JugadoresPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_calendario_calendario__["a" /* CalendarioPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_equipo_equipo__["a" /* EquipoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_jornadas_jornadas__["a" /* JornadasPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_jugadoresmodal_jugadoresmodal__["a" /* JugadoresmodalPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_calendariomodal_calendariomodal__["a" /* CalendariomodalPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_datosjugadormodal_datosjugadormodal__["a" /* DatosjugadormodalPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_addjugadormodal_addjugadormodal__["a" /* AddjugadormodalPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_editjugadormodal_editjugadormodal__["a" /* EditjugadormodalPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_jornadasmodal_jornadasmodal__["a" /* JornadasmodalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_calendar__["a" /* Calendar */],
                __WEBPACK_IMPORTED_MODULE_26__providers_num_jugadores_num_jugadores__["a" /* NumJugadoresProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_listajornadas_listajornadas__["a" /* ListajornadasProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 246,
	"./af.js": 246,
	"./ar": 247,
	"./ar-dz": 248,
	"./ar-dz.js": 248,
	"./ar-kw": 249,
	"./ar-kw.js": 249,
	"./ar-ly": 250,
	"./ar-ly.js": 250,
	"./ar-ma": 251,
	"./ar-ma.js": 251,
	"./ar-sa": 252,
	"./ar-sa.js": 252,
	"./ar-tn": 253,
	"./ar-tn.js": 253,
	"./ar.js": 247,
	"./az": 254,
	"./az.js": 254,
	"./be": 255,
	"./be.js": 255,
	"./bg": 256,
	"./bg.js": 256,
	"./bm": 257,
	"./bm.js": 257,
	"./bn": 258,
	"./bn.js": 258,
	"./bo": 259,
	"./bo.js": 259,
	"./br": 260,
	"./br.js": 260,
	"./bs": 261,
	"./bs.js": 261,
	"./ca": 262,
	"./ca.js": 262,
	"./cs": 263,
	"./cs.js": 263,
	"./cv": 264,
	"./cv.js": 264,
	"./cy": 265,
	"./cy.js": 265,
	"./da": 266,
	"./da.js": 266,
	"./de": 267,
	"./de-at": 268,
	"./de-at.js": 268,
	"./de-ch": 269,
	"./de-ch.js": 269,
	"./de.js": 267,
	"./dv": 270,
	"./dv.js": 270,
	"./el": 271,
	"./el.js": 271,
	"./en-SG": 272,
	"./en-SG.js": 272,
	"./en-au": 273,
	"./en-au.js": 273,
	"./en-ca": 274,
	"./en-ca.js": 274,
	"./en-gb": 275,
	"./en-gb.js": 275,
	"./en-ie": 276,
	"./en-ie.js": 276,
	"./en-il": 277,
	"./en-il.js": 277,
	"./en-nz": 278,
	"./en-nz.js": 278,
	"./eo": 279,
	"./eo.js": 279,
	"./es": 280,
	"./es-do": 281,
	"./es-do.js": 281,
	"./es-us": 282,
	"./es-us.js": 282,
	"./es.js": 280,
	"./et": 283,
	"./et.js": 283,
	"./eu": 284,
	"./eu.js": 284,
	"./fa": 285,
	"./fa.js": 285,
	"./fi": 286,
	"./fi.js": 286,
	"./fo": 287,
	"./fo.js": 287,
	"./fr": 288,
	"./fr-ca": 289,
	"./fr-ca.js": 289,
	"./fr-ch": 290,
	"./fr-ch.js": 290,
	"./fr.js": 288,
	"./fy": 291,
	"./fy.js": 291,
	"./ga": 292,
	"./ga.js": 292,
	"./gd": 293,
	"./gd.js": 293,
	"./gl": 294,
	"./gl.js": 294,
	"./gom-latn": 295,
	"./gom-latn.js": 295,
	"./gu": 296,
	"./gu.js": 296,
	"./he": 297,
	"./he.js": 297,
	"./hi": 298,
	"./hi.js": 298,
	"./hr": 299,
	"./hr.js": 299,
	"./hu": 300,
	"./hu.js": 300,
	"./hy-am": 301,
	"./hy-am.js": 301,
	"./id": 302,
	"./id.js": 302,
	"./is": 303,
	"./is.js": 303,
	"./it": 304,
	"./it-ch": 305,
	"./it-ch.js": 305,
	"./it.js": 304,
	"./ja": 306,
	"./ja.js": 306,
	"./jv": 307,
	"./jv.js": 307,
	"./ka": 308,
	"./ka.js": 308,
	"./kk": 309,
	"./kk.js": 309,
	"./km": 310,
	"./km.js": 310,
	"./kn": 311,
	"./kn.js": 311,
	"./ko": 312,
	"./ko.js": 312,
	"./ku": 313,
	"./ku.js": 313,
	"./ky": 314,
	"./ky.js": 314,
	"./lb": 315,
	"./lb.js": 315,
	"./lo": 316,
	"./lo.js": 316,
	"./lt": 317,
	"./lt.js": 317,
	"./lv": 318,
	"./lv.js": 318,
	"./me": 319,
	"./me.js": 319,
	"./mi": 320,
	"./mi.js": 320,
	"./mk": 321,
	"./mk.js": 321,
	"./ml": 322,
	"./ml.js": 322,
	"./mn": 323,
	"./mn.js": 323,
	"./mr": 324,
	"./mr.js": 324,
	"./ms": 325,
	"./ms-my": 326,
	"./ms-my.js": 326,
	"./ms.js": 325,
	"./mt": 327,
	"./mt.js": 327,
	"./my": 328,
	"./my.js": 328,
	"./nb": 329,
	"./nb.js": 329,
	"./ne": 330,
	"./ne.js": 330,
	"./nl": 331,
	"./nl-be": 332,
	"./nl-be.js": 332,
	"./nl.js": 331,
	"./nn": 333,
	"./nn.js": 333,
	"./pa-in": 334,
	"./pa-in.js": 334,
	"./pl": 335,
	"./pl.js": 335,
	"./pt": 336,
	"./pt-br": 337,
	"./pt-br.js": 337,
	"./pt.js": 336,
	"./ro": 338,
	"./ro.js": 338,
	"./ru": 339,
	"./ru.js": 339,
	"./sd": 340,
	"./sd.js": 340,
	"./se": 341,
	"./se.js": 341,
	"./si": 342,
	"./si.js": 342,
	"./sk": 343,
	"./sk.js": 343,
	"./sl": 344,
	"./sl.js": 344,
	"./sq": 345,
	"./sq.js": 345,
	"./sr": 346,
	"./sr-cyrl": 347,
	"./sr-cyrl.js": 347,
	"./sr.js": 346,
	"./ss": 348,
	"./ss.js": 348,
	"./sv": 349,
	"./sv.js": 349,
	"./sw": 350,
	"./sw.js": 350,
	"./ta": 351,
	"./ta.js": 351,
	"./te": 352,
	"./te.js": 352,
	"./tet": 353,
	"./tet.js": 353,
	"./tg": 354,
	"./tg.js": 354,
	"./th": 355,
	"./th.js": 355,
	"./tl-ph": 356,
	"./tl-ph.js": 356,
	"./tlh": 357,
	"./tlh.js": 357,
	"./tr": 358,
	"./tr.js": 358,
	"./tzl": 359,
	"./tzl.js": 359,
	"./tzm": 360,
	"./tzm-latn": 361,
	"./tzm-latn.js": 361,
	"./tzm.js": 360,
	"./ug-cn": 362,
	"./ug-cn.js": 362,
	"./uk": 363,
	"./uk.js": 363,
	"./ur": 364,
	"./ur.js": 364,
	"./uz": 365,
	"./uz-latn": 366,
	"./uz-latn.js": 366,
	"./uz.js": 365,
	"./vi": 367,
	"./vi.js": 367,
	"./x-pseudo": 368,
	"./x-pseudo.js": 368,
	"./yo": 369,
	"./yo.js": 369,
	"./zh-cn": 370,
	"./zh-cn.js": 370,
	"./zh-hk": 371,
	"./zh-hk.js": 371,
	"./zh-tw": 372,
	"./zh-tw.js": 372
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
webpackContext.id = 589;

/***/ }),

/***/ 590:
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

/***/ 591:
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

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(136);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      hola2\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    fire: {
        apiKey: "AIzaSyCpKi9igxm5ID4x7-9l3B3mE-jWwldlhWE",
        authDomain: "ajedrez2.firebaseapp.com",
        databaseURL: "https://ajedrez2.firebaseio.com",
        projectId: "ajedrez2",
        storageBucket: "ajedrez2.appspot.com",
        messagingSenderId: "616548515975"
    }
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 649:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_calendariomodal_calendariomodal__ = __webpack_require__(162);
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
            selector: 'page-calendario',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\calendario\calendario.html"*/'<!--\n\n  Generated template for the CalendarioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Calendario</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="signOut()" color="light">\n\n        Cerrar Sesion\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="anadirPartida()" color="dark">\n\n          <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  <ion-item text-center>{{viewTitle}}</ion-item>\n\n  <calendar [eventSource]="eventSource"\n\n    [calendarMode]="calendar.mode"\n\n    [currentDate]="calendar.currentDate"\n\n    (onEventSelected)="onEventSelected($event)"\n\n    (onTitleChanged)="onViewTitleChanged($event)"\n\n    (onTimeSelected)="onTimeSelected($event)"\n\n    step="30"\n\n    class="calendar">\n\n  </calendar>\n\n</ion-content>'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\calendario\calendario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], CalendarioPage);
    return CalendarioPage;
}());

//# sourceMappingURL=calendario.js.map

/***/ })

},[428]);
//# sourceMappingURL=main.js.map