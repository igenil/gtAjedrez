webpackJsonp([15],{

/***/ 139:
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

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddequiposmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
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
 * Generated class for the AddequiposmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddequiposmodalPage = /** @class */ (function () {
    function AddequiposmodalPage(viewCtrl, afdb, toastCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.afdb = afdb;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.equipo = {
            nombre: ''
        };
    }
    AddequiposmodalPage.prototype.anadir = function () {
        this.afdb.list("/equipo/").push(this.equipo);
        this.viewCtrl.dismiss();
        this.mostrar_mensaje("Equipo " + this.equipo.nombre + " añadido correctamente.");
    };
    AddequiposmodalPage.prototype.volver = function () {
        this.viewCtrl.dismiss();
    };
    AddequiposmodalPage.prototype.mostrar_mensaje = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3500,
            cssClass: "toast"
        });
        toast.present();
    };
    AddequiposmodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddequiposmodalPage');
    };
    AddequiposmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addequiposmodal',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\addequiposmodal\addequiposmodal.html"*/'<!--\n\n  Generated template for the AddequiposmodalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n      \n\n    <ion-title>Añadir Equipo</ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button\n\n        icon-only (click)="volver()">\n\n          <ion-icon name="md-arrow-back"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n    \n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label floating>Nombre</ion-label>\n\n    <ion-input name="nombre" [(ngModel)]="equipo.nombre"></ion-input>\n\n  </ion-item>\n\n  <br>\n\n  <button ion-button block clear (click)="anadir()">Añadir</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\addequiposmodal\addequiposmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AddequiposmodalPage);
    return AddequiposmodalPage;
}());

//# sourceMappingURL=addequiposmodal.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_calendariomodal_calendariomodal__ = __webpack_require__(95);
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
            selector: 'page-calendario',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\calendario\calendario.html"*/'<!--\n\n  Generated template for the CalendarioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Calendario</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="signOut()" color="light">\n\n        Cerrar Sesion\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-buttons end>\n\n      \n\n    </ion-buttons>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\calendario\calendario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], CalendarioPage);
    return CalendarioPage;
}());

//# sourceMappingURL=calendario.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitanesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__capitanesmodal_capitanesmodal__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CapitanesPage = /** @class */ (function () {
    function CapitanesPage(navCtrl, afdb, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.afdb = afdb;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.capitanes = this.afdb.list('/jugador', function (ref) { return ref.orderByChild('capitan').equalTo(true); }).valueChanges();
    }
    CapitanesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CapitanesPage');
    };
    CapitanesPage.prototype.mostrar_modal = function (capitan) {
        this.listEquipos = this.afdb.list("/equipo").valueChanges();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__capitanesmodal_capitanesmodal__["a" /* CapitanesmodalPage */], { 'listEquipos': this.listEquipos, 'capitan': capitan });
        modal.present();
    };
    CapitanesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-capitanes',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\capitanes\capitanes.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Capitanes</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="signOut()" color="light">\n\n        Cerrar Sesion\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n      <span *ngFor="let capitan of capitanes | async">\n\n         <ion-list>\n\n          <ion-item-sliding #item>\n\n            <ion-item>\n\n              <ion-icon name="contact" item-start></ion-icon>\n\n              <h2>{{capitan.nombre}}</h2> \n\n            </ion-item>\n\n            <ion-item-options side="right">\n\n              <button ion-button (click)="mostrar_modal(capitan)" color="secondary">\n\n                <ion-icon name="eye" ></ion-icon>\n\n                Ver\n\n              </button>\n\n            </ion-item-options>\n\n          </ion-item-sliding>\n\n        </ion-list>\n\n      </span>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\capitanes\capitanes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CapitanesPage);
    return CapitanesPage;
}());

//# sourceMappingURL=capitanes.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitanesmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
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
 * Generated class for the CapitanesmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CapitanesmodalPage = /** @class */ (function () {
    function CapitanesmodalPage(afdb, navCtrl, viewCtrl, navParams) {
        this.afdb = afdb;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    CapitanesmodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CapitanesmodalPage');
        this.listEquipos = this.navParams.get('listEquipos');
        this.capitan = this.navParams.get('capitan');
    };
    CapitanesmodalPage.prototype.asignar = function (jugador) {
        if (!jugador.capitan) {
            jugador.capitan = true;
            this.afdb.list("/jugador").update(jugador.capitan, jugador);
        }
        else if (jugador.capitan) {
            jugador.capitan = false;
            this.afdb.list("/jugador").update(jugador.capitan, jugador);
        }
    };
    CapitanesmodalPage.prototype.volver = function () {
        this.viewCtrl.dismiss();
    };
    CapitanesmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-capitanesmodal',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\capitanesmodal\capitanesmodal.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n      \n\n    <ion-title>Equipos</ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list> \n\n      <span *ngFor="let equipo of listEquipos | async">\n\n       <ion-item ion-item detail-none *ngIf="capitan.capitan==false">\n\n          <ion-label>{{ equipos.nombre }}</ion-label>\n\n          <ion-checkbox item-right checked="false"  (click)="asignar(capitan)"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item ion-item detail-none *ngIf="capitan.capitan==true">\n\n        <ion-label>{{ equipo.nombre }}</ion-label>\n\n        <ion-checkbox item-right checked="true" (click)="asignar(capitan)"></ion-checkbox>\n\n      </ion-item>\n\n    </span>\n\n    </ion-list>\n\n    <button ion-button color="dark" (click)="viewCtrl.dismiss()">Listo</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\capitanesmodal\capitanesmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CapitanesmodalPage);
    return CapitanesmodalPage;
}());

//# sourceMappingURL=capitanesmodal.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosjugadormodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        var data = this.navParams.get('jugador');
        this.jugador = data;
        this.equipo = this.navParams.get('equipo');
    }
    DatosjugadormodalPage.prototype.ionViewDidLoad = function () {
        console.log(this.navParams.get('equipo'));
    };
    DatosjugadormodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-datosjugadormodal',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\datosjugadormodal\datosjugadormodal.html"*/'<!--\n\n  Generated template for the DatosjugadormodalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark"> \n\n    <ion-title>Datos de {{ jugador.nombre }} </ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <h3><span style="font-weight: bold;">Nombre: </span> {{ jugador.nombre }}</h3>\n\n      <span *ngFor="let equip of equipo | async">\n\n        <h3><span style="font-weight: bold;">Equipo: </span> {{ equip.nombre }}</h3>\n\n      </span>\n\n      <h3><span style="font-weight: bold;">Partidos Jugados: </span> {{ jugador.jugados }}</h3>\n\n      <h3><span style="font-weight: bold;">Partidos Ganados: </span> {{ jugador.ganado }}</h3>\n\n      <h3><span style="font-weight: bold;">Partidos Empatados: </span> {{ jugador.empate }}</h3>\n\n      <h3><span style="font-weight: bold;">Partidos Perdidos: </span> {{ jugador.perdidos }}</h3>\n\n      <h3><span style="font-weight: bold;">Jugados en Casa: </span> {{ jugador.casa }}</h3>\n\n      <h3><span style="font-weight: bold;">Jugados Fuera: </span> {{ jugador.fuera }}</h3>\n\n      <h3><span style="font-weight: bold;">Puntos: </span> {{ jugador.elo }}</h3>\n\n    </ion-list>\n\n    <button ion-button color="dark" (click)="viewCtrl.dismiss()">Listo</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\datosjugadormodal\datosjugadormodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]])
    ], DatosjugadormodalPage);
    return DatosjugadormodalPage;
}());

//# sourceMappingURL=datosjugadormodal.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditequipomodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
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
 * Generated class for the EditequipomodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditequipomodalPage = /** @class */ (function () {
    function EditequipomodalPage(viewCtrl, afdb, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.afdb = afdb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.equipo = this.navParams.get('equipo');
    }
    EditequipomodalPage.prototype.editarequipo = function () {
        this.afdb.list("/equipo").update(this.equipo.key, this.equipo);
        this.viewCtrl.dismiss();
    };
    EditequipomodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditequipomodalPage');
    };
    EditequipomodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editequipomodal',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\editequipomodal\editequipomodal.html"*/'<!--\n\n  Generated template for the EditequipomodalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n      \n\n    <ion-title>Editar equipo</ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n\n          <ion-label floating>Nombre</ion-label>\n\n          <ion-input type="text" [(ngModel)]="equipo.nombre"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n      <br> \n\n      <button ion-button color="dark" (click)="editarequipo()">Editar</button>\n\n      <button ion-button color="dark" (click)="viewCtrl.dismiss()">Cancelar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\editequipomodal\editequipomodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EditequipomodalPage);
    return EditequipomodalPage;
}());

//# sourceMappingURL=editequipomodal.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditjugadormodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
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
 * Generated class for the EditjugadormodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditjugadormodalPage = /** @class */ (function () {
    function EditjugadormodalPage(afdb, navCtrl, navParams, viewCtrl, listajugadores) {
        this.afdb = afdb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.listajugadores = listajugadores;
        var data = this.navParams.get('jugador');
        this.jugador = data;
        this.listEquipos = afdb.list("/equipo");
        this.equipos = this.listEquipos.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) { return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); }); }));
    }
    EditjugadormodalPage.prototype.ionViewDidLoad = function () {
    };
    EditjugadormodalPage.prototype.editarjugador = function () {
        this.jugador.elo = Number(this.jugador.elo);
        if (this.jugador.equipo != this.equipo) {
            this.jugador.juega = false;
        }
        ;
        this.afdb.list("/jugador").update(this.jugador.key, this.jugador);
        this.viewCtrl.dismiss();
    };
    EditjugadormodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editjugadormodal',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\editjugadormodal\editjugadormodal.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n      \n\n    <ion-title>Editar Jugador</ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n\n          <ion-label floating>Nombre</ion-label>\n\n          <ion-input type="text" [(ngModel)]="jugador.nombre"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Partidos Jugados</ion-label>\n\n          <ion-input type="number" [(ngModel)]="jugador.jugados"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Partidos Ganados</ion-label>\n\n          <ion-input type="number" [(ngModel)]="jugador.ganado"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Partidos Empatados</ion-label>\n\n          <ion-input type="number" label="jugador.e" [(ngModel)]="jugador.empate"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Partidos Perdidos</ion-label>\n\n          <ion-input type="number" label="jugador.p" [(ngModel)]="jugador.perdidos"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Jugados en Casa</ion-label>\n\n          <ion-input type="number" label="jugador.c" [(ngModel)]="jugador.casa"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Elo</ion-label>\n\n          <ion-input type="number" label="jugador.elo" [(ngModel)]="jugador.elo"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Equipo</ion-label>\n\n          <ion-select value="" [(ngModel)]="jugador.equipo" okText="Aceptar" cancelText="Cancelar">\n\n            <ion-option *ngFor="let equipo of equipos | async" value="{{equipo.key}}">{{equipo.nombre}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Capitan</ion-label>\n\n          <ion-input type="number" label="jugador.capitan" [(ngModel)]="jugador.capitan"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Admin</ion-label>\n\n          <ion-input type="number" label="jugador.admin" [(ngModel)]="jugador.admin"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Juega</ion-label>\n\n          <ion-input type="number" label="jugador.juega" [(ngModel)]="jugador.juega"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n      <br> \n\n      <button ion-button color="dark" (click)="editarjugador()">Editar</button>\n\n      <button ion-button color="dark" (click)="viewCtrl.dismiss()">Cancelar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\editjugadormodal\editjugadormodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]])
    ], EditjugadormodalPage);
    return EditjugadormodalPage;
}());

//# sourceMappingURL=editjugadormodal.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JornadasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_listajornadas_listajornadas__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jornadasmodal_jornadasmodal__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calendariomodal_calendariomodal__ = __webpack_require__(95);
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
 * Generated class for the JornadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JornadasPage = /** @class */ (function () {
    function JornadasPage(afdb, modalCtrl, navCtrl, navParams, AfAuth, listajornadas) {
        this.afdb = afdb;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AfAuth = AfAuth;
        this.listajornadas = listajornadas;
        this.listJornadas = afdb.list("/jornada");
        this.jornadas = this.listJornadas.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (changes) { return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); }); }));
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
    JornadasPage.prototype.anadirPartida = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__calendariomodal_calendariomodal__["a" /* CalendariomodalPage */]);
        modal.present();
    };
    JornadasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jornadas',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jornadas\jornadas.html"*/'<!--\n\n  Generated template for the JornadasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Jornadas</ion-title>\n\n    <ion-buttons end>\n\n    <button end ion-button icon-only (click)="anadirPartida()" color="white">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n      <button ion-button (click)="signOut()" color="light">\n\n        Cerrar Sesion\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-buttons end>\n\n    \n\n  </ion-buttons>\n\n  <ion-list>\n\n    <ion-item *ngFor="let jornada of jornadas | async">\n\n      {{jornada.titulo}}\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jornadas\jornadas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_3__providers_listajornadas_listajornadas__["a" /* ListajornadasProvider */]])
    ], JornadasPage);
    return JornadasPage;
}());

//# sourceMappingURL=jornadas.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JornadasmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jugadoresmodal_jugadoresmodal__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_listajugadores_listajugadores__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_addequiposmodal_addequiposmodal__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editequipomodal_editequipomodal__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
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
 * Generated class for the EquipoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EquipoPage = /** @class */ (function () {
    function EquipoPage(prov, toastCtrl, afdb, navCtrl, navParams, modalCtrl, AfAuth, listajugadores) {
        this.prov = prov;
        this.toastCtrl = toastCtrl;
        this.afdb = afdb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.AfAuth = AfAuth;
        this.listajugadores = listajugadores;
        this.rolCapitan = false;
        this.listEquipos = afdb.list("/equipo");
        this.equipos = this.listEquipos.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (changes) { return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); }); }));
    }
    EquipoPage.prototype.mostrar_modal_anadir = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_addequiposmodal_addequiposmodal__["a" /* AddequiposmodalPage */], this.listajugadores);
        modal.present();
    };
    EquipoPage.prototype.mostrar_modal = function (equipo) {
        var jugadoresequipo = this.afdb.list('/jugador', function (ref) { return ref.orderByChild('equipo').equalTo(equipo.key); }).valueChanges();
        console.log(jugadoresequipo);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__jugadoresmodal_jugadoresmodal__["a" /* JugadoresmodalPage */], { 'listaJugadores': jugadoresequipo, 'keyEquipo': equipo.key });
        modal.present();
    };
    EquipoPage.prototype.mostrar_modal_editar = function (equipo) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__editequipomodal_editequipomodal__["a" /* EditequipomodalPage */], { 'equipo': equipo });
        modal.present();
    };
    EquipoPage.prototype.mostrar_mensaje = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3500,
            cssClass: "toast"
        });
        toast.present();
    };
    EquipoPage.prototype.eliminar_equipo = function (equipo) {
        var id = equipo.key;
        console.log(equipo.key);
        this.afdb.database.ref('/equipo/' + equipo.key).remove();
        this.mostrar_mensaje("Equipo " + equipo.nombre + " elimanado con exito.");
    };
    EquipoPage.prototype.signOut = function () {
        return this.AfAuth.auth.signOut();
    };
    EquipoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad EquipoPage');
        var user = __WEBPACK_IMPORTED_MODULE_9_firebase___default.a.auth().currentUser;
        this.prov.verificarUsuario(user.email).then(function (existe) {
            if (existe) {
                if (_this.prov.admin[0].admin) {
                    _this.rolAdmin = true;
                }
            }
            else if (_this.prov.admin[0].capitan) {
                _this.rolCapitan = true;
            }
        });
    };
    EquipoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-equipo',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\equipo\equipo.html"*/'<!--\n\n  Generated template for the EquipoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Equipos</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="mostrar_modal_anadir()" color="light">\n\n        <ion-icon name="person-add"></ion-icon>\n\n      </button>\n\n      <button ion-button (click)="signOut()" color="light">\n\n        Cerrar Sesion\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <span *ngFor="let equipo of equipos | async">\n\n         <ion-list>\n\n          <ion-item-sliding #item> \n\n            <ion-item >\n\n              <h2>{{equipo.nombre}}</h2> \n\n            </ion-item>\n\n            <ion-item-options side="right">\n\n              <button ion-button (click)="mostrar_modal(equipo)" color="secondary">\n\n                <ion-icon name="eye" ></ion-icon>\n\n                Ver\n\n              </button>\n\n              <span *ngIf="rolAdmin==true">\n\n                <button ion-button (click)="mostrar_modal_editar(equipo)" color="primary">\n\n                  <ion-icon name="build" ></ion-icon>\n\n                  Editar\n\n                </button>\n\n                <button ion-button (click)="eliminar_equipo(equipo)" color="danger">\n\n                  <ion-icon name="trash" ></ion-icon>\n\n                  Eliminar\n\n                </button>\n\n              </span>\n\n            </ion-item-options>\n\n          </ion-item-sliding>\n\n        </ion-list>\n\n      </span>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\equipo\equipo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]])
    ], EquipoPage);
    return EquipoPage;
}());

//# sourceMappingURL=equipo.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_num_jugadores_num_jugadores__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
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
    function JugadoresmodalPage(prov, afdb, navCtrl, navParams, viewCtrl, numJugadores, listajugadores) {
        this.prov = prov;
        this.afdb = afdb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.numJugadores = numJugadores;
        this.listajugadores = listajugadores;
        this.rolCapitan = false;
        this.Nconvocados = 0;
    }
    JugadoresmodalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad JugadoresmodalPage');
        this.equipo = this.navParams.get('listaJugadores');
        this.key = this.navParams.get('keyEquipo');
        var user = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().currentUser;
        this.prov.verificarUsuario(user.email).then(function (existe) {
            if (existe) {
                if (_this.prov.admin[0].admin) {
                    _this.rolAdmin = true;
                }
            }
            if (_this.prov.admin[0].capitan) {
                _this.rolCapitan = true;
            }
        });
        this.listajugadores.Covocados(this.key).then(function (existe) {
            if (existe) {
                for (var i = 0; i < Object.keys(_this.prov.convocados).length; i++) {
                    if (_this.prov.convocados[i].juega) {
                        _this.Nconvocados = Number(_this.Nconvocados) + 1;
                    }
                }
                console.log(_this.Nconvocados);
            }
        });
        this.listajugadores.Covocados(this.key).then(function (existe) {
            if (existe) {
                for (var i = 0; i < Object.keys(_this.prov.convocados).length; i++) {
                    if (_this.prov.convocados[i].capitan) {
                        _this.isCapitan = true;
                    }
                }
            }
        });
    };
    JugadoresmodalPage.prototype.convocar = function (jugador) {
        var _this = this;
        if (!jugador.juega) {
            jugador.juega = true;
            this.afdb.list("/jugador").update(jugador.key, jugador);
        }
        else if (jugador.juega) {
            jugador.juega = false;
            this.afdb.list("/jugador").update(jugador.key, jugador);
        }
        this.listajugadores.Covocados(this.key).then(function (existe) {
            if (existe) {
                for (var i = 0; i < Object.keys(_this.prov.convocados).length; i++) {
                    if (_this.prov.convocados[i].juega) {
                        _this.Nconvocados = Number(_this.Nconvocados) + 1;
                    }
                }
            }
        });
        this.Nconvocados = 0;
    };
    JugadoresmodalPage.prototype.capitan = function (jugador) {
        if (!jugador.capitan) {
            jugador.capitan = true;
            this.isCapitan = true;
            this.afdb.list("/jugador").update(jugador.key, jugador);
        }
        else if (jugador.capitan) {
            jugador.capitan = false;
            this.isCapitan = false;
            this.afdb.list("/jugador").update(jugador.key, jugador);
        }
    };
    JugadoresmodalPage.prototype.volver = function () {
        this.viewCtrl.dismiss();
    };
    JugadoresmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jugadoresmodal',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jugadoresmodal\jugadoresmodal.html"*/'<!--\n\n  Generated template for the JugadoresmodalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Jugadores</ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list> \n\n      <span *ngFor="let jugador of equipo | async">\n\n\n\n        <ion-item ion-item detail-none *ngIf="jugador.juega==false && rolCapitan && Nconvocados <5">\n\n            <ion-label>{{ jugador.nombre }}</ion-label>\n\n            <ion-checkbox item-right checked="false"  (click)="convocar(jugador)"></ion-checkbox>\n\n            <button item-right ion-button  color="dark" (click)="capitan(jugador)" *ngIf="!isCapitan && rolAdmin">\n\n                <ion-icon color="dark" name="ribbon"></ion-icon>\n\n            </button>\n\n            \n\n        </ion-item>\n\n\n\n        <ion-item ion-item detail-none *ngIf="jugador.juega==false && rolCapitan && Nconvocados>=5">\n\n            <ion-label>{{ jugador.nombre }}</ion-label>\n\n            <ion-checkbox item-right checked="false" disabled=\'true\' (click)="convocar(jugador)"></ion-checkbox>\n\n            <button item-right ion-button  color="dark" (click)="capitan(jugador)" *ngIf="!isCapitan && rolAdmin">\n\n                <ion-icon color="dark" name="ribbon"></ion-icon>\n\n            </button>\n\n      \n\n        </ion-item>\n\n\n\n        <ion-item ion-item detail-none *ngIf="jugador.juega==false && !rolCapitan">\n\n            <ion-label>{{ jugador.nombre }}</ion-label>\n\n            <ion-checkbox item-right checked="false" disabled=\'true\' (click)="convocar(jugador)"></ion-checkbox>\n\n            <button item-right ion-button  color="dark" (click)="capitan(jugador)" *ngIf="!isCapitan && rolAdmin">\n\n                <ion-icon color="dark" name="ribbon"></ion-icon>\n\n            </button>\n\n\n\n        </ion-item>\n\n\n\n        <ion-item ion-item detail-none *ngIf="jugador.juega==true && rolCapitan">\n\n          <ion-label>{{ jugador.nombre }}</ion-label>\n\n          <ion-checkbox item-right checked="true" (click)="convocar(jugador)"></ion-checkbox>\n\n          <button item-right ion-button color="dark" (click)="capitan(jugador)" *ngIf="!isCapitan && rolAdmin">\n\n                <ion-icon color="dark" name="ribbon"></ion-icon>\n\n          </button>\n\n\n\n        </ion-item>\n\n\n\n        <ion-item ion-item detail-none *ngIf="jugador.juega==true && !rolCapitan">\n\n          <ion-label>{{ jugador.nombre }}</ion-label>\n\n          <ion-checkbox item-right checked="true" disabled=\'true\' (click)="convocar(jugador)"></ion-checkbox>\n\n          <button item-right ion-button icon-only (click)="capitan(jugador)" *ngIf="!isCapitan && rolAdmin">\n\n                <ion-icon color="dark" name="ribbon"></ion-icon>\n\n          </button>\n\n\n\n        </ion-item>\n\n                  <button ion-button color="dark" icon-only (click)="capitan(jugador)" *ngIf="jugador.capitan && rolAdmin">\n\n                Existe Capitan\n\n            </button>\n\n      </span>\n\n    </ion-list>\n\n    <button ion-button color="dark" (click)="viewCtrl.dismiss()">Listo</button>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jugadoresmodal\jugadoresmodal.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__providers_num_jugadores_num_jugadores__["a" /* NumJugadoresProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_num_jugadores_num_jugadores__["a" /* NumJugadoresProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]) === "function" && _g || Object])
    ], JugadoresmodalPage);
    return JugadoresmodalPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=jugadoresmodal.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datosjugadormodal_datosjugadormodal__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editjugadormodal_editjugadormodal__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_listajugadores_listajugadores__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
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
    function JugadoresPage(prov, toastCtrl, afdb, navCtrl, navParams, modalCtrl, AfAuth, listajugadores) {
        this.prov = prov;
        this.toastCtrl = toastCtrl;
        this.afdb = afdb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.AfAuth = AfAuth;
        this.listajugadores = listajugadores;
        this.rolAdmin = false;
        this.rolCapitan = false;
        this.listaJugadores = afdb.list("/jugador", function (ref) { return ref.orderByChild('elo'); });
        this.jugadores = this.listaJugadores.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (changes) { return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); }).reverse(); }));
        ;
    }
    JugadoresPage.prototype.signOut = function () {
        return this.AfAuth.auth.signOut();
    };
    JugadoresPage.prototype.mostrar_mensaje = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3500,
            cssClass: "toast"
        });
        toast.present();
    };
    JugadoresPage.prototype.mostrar_modal = function (jugador) {
        var equipo = this.afdb.list('/equipo', function (ref) { return ref.orderByKey().equalTo(jugador.equipo); }).valueChanges();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__datosjugadormodal_datosjugadormodal__["a" /* DatosjugadormodalPage */], { 'jugador': jugador, 'equipo': equipo });
        modal.present();
    };
    JugadoresPage.prototype.mostrar_modal_editar = function (jugador) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__editjugadormodal_editjugadormodal__["a" /* EditjugadormodalPage */], { 'jugador': jugador });
        modal.present();
    };
    JugadoresPage.prototype.hacer_capitan = function (jugador) {
        jugador.capitan = true;
        this.afdb.list("/jugador").update(jugador.key, jugador);
    };
    JugadoresPage.prototype.eliminar_jugador = function (jugador) {
        var id = jugador.key;
        console.log(jugador.key);
        this.afdb.database.ref('/jugador/' + jugador.key).remove();
        this.mostrar_mensaje("Jugador " + jugador.nombre + " elimanado con exito.");
    };
    JugadoresPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad JugadoresPage');
        var user = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.auth().currentUser;
        this.prov.verificarUsuario(user.email).then(function (existe) {
            if (existe) {
                if (_this.prov.admin[0].admin) {
                    _this.rolAdmin = true;
                }
            }
            else if (_this.prov.admin[0].capitan) {
                _this.rolCapitan = true;
            }
        });
    };
    JugadoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jugadores',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jugadores\jugadores.html"*/'<!--\n\n  Generated template for the JugadoresPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Jugadores</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="signOut()" color="light">\n\n        Cerrar Sesion\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n      <span *ngFor="let jugador of jugadores | async ">\n\n         <ion-list>\n\n          <ion-item-sliding #item>\n\n            <ion-item>\n\n              <ion-icon name="contact" item-start></ion-icon>\n\n\n\n              <h2>{{jugador.nombre}}, {{jugador.elo}}</h2> \n\n            </ion-item>\n\n            <ion-item-options side="right">\n\n              <button ion-button (click)="mostrar_modal(jugador)" color="secondary">\n\n                <ion-icon name="eye" ></ion-icon>\n\n                Ver\n\n              </button>\n\n              <span *ngIf="rolAdmin==true">\n\n              <button ion-button (click)="mostrar_modal_editar(jugador)" color="primary">\n\n                <ion-icon name="build" ></ion-icon>\n\n                Editar\n\n              </button>\n\n              <button ion-button (click)="eliminar_jugador(jugador)" color="danger">\n\n                <ion-icon name="trash" ></ion-icon>\n\n                Eliminar\n\n              </button>\n\n              </span>\n\n            </ion-item-options>\n\n          </ion-item-sliding>\n\n        </ion-list>\n\n      </span>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jugadores\jugadores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_5__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]])
    ], JugadoresPage);
    return JugadoresPage;
}());

//# sourceMappingURL=jugadores.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_registro_registro__ = __webpack_require__(178);
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
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_registro_registro__["a" /* RegistroPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\login\login.html"*/'<ion-header>\n\n	<ion-navbar color="dark">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>Inciar Sesión</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-image">\n\n	<form (ngSubmit)="login()" [formGroup]="loginForm">\n\n		<ion-list inset>\n\n\n\n			<ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\', \'dirty\']) }">\n\n				<ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n\n			</ion-item>\n\n\n\n			<div ngxErrors="email" #emailErrors="ngxErrors">\n\n				<div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\', \'dirty\']">It should be a valid email</div>\n\n			</div>\n\n\n\n			<ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n\n				<ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n\n			</ion-item>\n\n\n\n			<div ngxErrors="password" #passwordErrors="ngxErrors">\n\n				<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be at least 5 characters</div>\n\n			</div>\n\n\n\n			<button ion-button icon-left block clear (click)="signup()">\n\n					<ion-icon name="person-add"></ion-icon>\n\n					Registrarse\n\n			</button>\n\n		</ion-list>\n\n\n\n		<div padding-horizontal>\n\n			<div class="form-error">{{loginError}}</div>\n\n\n\n			<button ion-button full type="submit" [disabled]="!loginForm.valid">Log in</button>\n\n		</div>\n\n\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(26);
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
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistroPage = /** @class */ (function () {
    function RegistroPage(fb, auth, navCtrl, afdb) {
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.afdb = afdb;
        this.jugador = {
            nombre: '',
            email: '',
            casa: 0,
            fuera: 0,
            empate: 0,
            ganado: 0,
            perdidos: 0,
            jugados: 0,
            elo: 0,
            capitan: false,
            admin: false,
            equipo: "sin equipo",
            juega: false
        };
        this.form = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)])],
            Usuario: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    RegistroPage.prototype.signup = function () {
        var _this = this;
        var data = this.form.value;
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.jugador.email = data.email;
        this.jugador.nombre = data.Usuario;
        this.auth.signUp(credentials).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]); }, function (error) { return _this.signupError = error.message; });
        this.afdb.list("/jugador/").push(this.jugador);
    };
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\registro\registro.html"*/'<!--\n\n  Generated template for the RegistroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Registro</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n	<form (ngSubmit)="signup()" [formGroup]="form">\n\n		<ion-list inset>\n\n\n\n			<ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\']) }">\n\n				<ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n\n			</ion-item>\n\n\n\n      <ion-item>\n\n				<ion-input type="text" placeholder="Usuario" formControlName="Usuario"></ion-input>\n\n			</ion-item>\n\n\n\n			<div ngxErrors="email" #emailErrors="ngxErrors">\n\n				<div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\']">It should be a valid email</div>\n\n			</div>\n\n\n\n			<ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n\n				<ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n\n			</ion-item>\n\n\n\n			<div ngxErrors="password" #passwordErrors="ngxErrors">\n\n				<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']">It should be at least 6 characters</div>\n\n			</div>\n\n\n\n      \n\n		</ion-list>\n\n\n\n		<div padding-horizontal>\n\n			<div class="form-error">{{signupError}}</div>\n\n\n\n			<button ion-button full type="submit" [disabled]="!form.valid">Sign up</button>\n\n		</div>\n\n	</form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\registro\registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 211:
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
webpackEmptyAsyncContext.id = 211;

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addequiposmodal/addequiposmodal.module": [
		665,
		14
	],
	"../pages/calendario/calendario.module": [
		666,
		13
	],
	"../pages/calendariomodal/calendariomodal.module": [
		667,
		12
	],
	"../pages/capitanes/capitanes.module": [
		668,
		11
	],
	"../pages/capitanesmodal/capitanesmodal.module": [
		669,
		10
	],
	"../pages/datosjugadormodal/datosjugadormodal.module": [
		670,
		9
	],
	"../pages/editequipomodal/editequipomodal.module": [
		671,
		8
	],
	"../pages/editjugadormodal/editjugadormodal.module": [
		672,
		7
	],
	"../pages/equipo/equipo.module": [
		674,
		6
	],
	"../pages/jornadas/jornadas.module": [
		673,
		5
	],
	"../pages/jornadasmodal/jornadasmodal.module": [
		676,
		4
	],
	"../pages/jugadores/jugadores.module": [
		675,
		3
	],
	"../pages/jugadoresmodal/jugadoresmodal.module": [
		677,
		2
	],
	"../pages/login/login.module": [
		678,
		1
	],
	"../pages/registro/registro.module": [
		679,
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
webpackAsyncContext.id = 253;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 392:
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

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(559);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListajugadoresProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
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
    function ListajugadoresProvider(afDB) {
        this.afDB = afDB;
    }
    ListajugadoresProvider.prototype.verificarUsuario = function (email) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afDB.list('/jugador/', function (ref) { return ref.orderByChild('email').equalTo(email); })
                .valueChanges().subscribe(function (data) {
                console.log(data);
                if (data) {
                    _this.email = email;
                    _this.admin = data;
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            });
        });
    };
    ListajugadoresProvider.prototype.Covocados = function (key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afDB.list("/jugador", function (ref) {
                return ref.orderByChild('equipo').equalTo(key);
            }).valueChanges().subscribe(function (data) {
                console.log(data);
                if (data) {
                    _this.convocados = data;
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            });
        });
    };
    ListajugadoresProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"]])
    ], ListajugadoresProvider);
    return ListajugadoresProvider;
}());

//# sourceMappingURL=listajugadores.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ultimate_ngxerrors__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__config__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_jugadores_jugadores__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_calendario_calendario__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_equipo_equipo__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_jornadas_jornadas__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_jugadoresmodal_jugadoresmodal__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic2_calendar__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_calendariomodal_calendariomodal__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_datosjugadormodal_datosjugadormodal__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_calendar__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_num_jugadores_num_jugadores__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_listajugadores_listajugadores__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_listajornadas_listajornadas__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_editjugadormodal_editjugadormodal__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_jornadasmodal_jornadasmodal__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_addequiposmodal_addequiposmodal__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_registro_registro__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_editequipomodal_editequipomodal__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_capitanes_capitanes__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_capitanesmodal_capitanesmodal__ = __webpack_require__(168);
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
                __WEBPACK_IMPORTED_MODULE_30__pages_addequiposmodal_addequiposmodal__["a" /* AddequiposmodalPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_jornadas_jornadas__["a" /* JornadasPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_jugadoresmodal_jugadoresmodal__["a" /* JugadoresmodalPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_calendariomodal_calendariomodal__["a" /* CalendariomodalPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_datosjugadormodal_datosjugadormodal__["a" /* DatosjugadormodalPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_editjugadormodal_editjugadormodal__["a" /* EditjugadormodalPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_jornadasmodal_jornadasmodal__["a" /* JornadasmodalPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_editequipomodal_editequipomodal__["a" /* EditequipomodalPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_capitanes_capitanes__["a" /* CapitanesPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_capitanesmodal_capitanesmodal__["a" /* CapitanesmodalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addequiposmodal/addequiposmodal.module#AddequiposmodalPageModule', name: 'AddequiposmodalPage', segment: 'addequiposmodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendario/calendario.module#CalendarioPageModule', name: 'CalendarioPage', segment: 'calendario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendariomodal/calendariomodal.module#CalendariomodalPageModule', name: 'CalendariomodalPage', segment: 'calendariomodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/capitanes/capitanes.module#CapitanesPageModule', name: 'CapitanesPage', segment: 'capitanes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/capitanesmodal/capitanesmodal.module#CapitanesmodalPageModule', name: 'CapitanesmodalPage', segment: 'capitanesmodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/datosjugadormodal/datosjugadormodal.module#DatosjugadormodalPageModule', name: 'DatosjugadormodalPage', segment: 'datosjugadormodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editequipomodal/editequipomodal.module#EditequipomodalPageModule', name: 'EditequipomodalPage', segment: 'editequipomodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editjugadormodal/editjugadormodal.module#EditjugadormodalPageModule', name: 'EditjugadormodalPage', segment: 'editjugadormodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jornadas/jornadas.module#JornadasPageModule', name: 'JornadasPage', segment: 'jornadas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/equipo/equipo.module#EquipoPageModule', name: 'EquipoPage', segment: 'equipo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugadores/jugadores.module#JugadoresPageModule', name: 'JugadoresPage', segment: 'jugadores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jornadasmodal/jornadasmodal.module#JornadasmodalPageModule', name: 'JornadasmodalPage', segment: 'jornadasmodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugadoresmodal/jugadoresmodal.module#JugadoresmodalPageModule', name: 'JugadoresmodalPage', segment: 'jugadoresmodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_30__pages_addequiposmodal_addequiposmodal__["a" /* AddequiposmodalPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_calendariomodal_calendariomodal__["a" /* CalendariomodalPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_datosjugadormodal_datosjugadormodal__["a" /* DatosjugadormodalPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_editjugadormodal_editjugadormodal__["a" /* EditjugadormodalPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_jornadasmodal_jornadasmodal__["a" /* JornadasmodalPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_editequipomodal_editequipomodal__["a" /* EditequipomodalPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_capitanes_capitanes__["a" /* CapitanesPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_capitanesmodal_capitanesmodal__["a" /* CapitanesmodalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_calendar__["a" /* Calendar */],
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

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 265,
	"./af.js": 265,
	"./ar": 266,
	"./ar-dz": 267,
	"./ar-dz.js": 267,
	"./ar-kw": 268,
	"./ar-kw.js": 268,
	"./ar-ly": 269,
	"./ar-ly.js": 269,
	"./ar-ma": 270,
	"./ar-ma.js": 270,
	"./ar-sa": 271,
	"./ar-sa.js": 271,
	"./ar-tn": 272,
	"./ar-tn.js": 272,
	"./ar.js": 266,
	"./az": 273,
	"./az.js": 273,
	"./be": 274,
	"./be.js": 274,
	"./bg": 275,
	"./bg.js": 275,
	"./bm": 276,
	"./bm.js": 276,
	"./bn": 277,
	"./bn.js": 277,
	"./bo": 278,
	"./bo.js": 278,
	"./br": 279,
	"./br.js": 279,
	"./bs": 280,
	"./bs.js": 280,
	"./ca": 281,
	"./ca.js": 281,
	"./cs": 282,
	"./cs.js": 282,
	"./cv": 283,
	"./cv.js": 283,
	"./cy": 284,
	"./cy.js": 284,
	"./da": 285,
	"./da.js": 285,
	"./de": 286,
	"./de-at": 287,
	"./de-at.js": 287,
	"./de-ch": 288,
	"./de-ch.js": 288,
	"./de.js": 286,
	"./dv": 289,
	"./dv.js": 289,
	"./el": 290,
	"./el.js": 290,
	"./en-SG": 291,
	"./en-SG.js": 291,
	"./en-au": 292,
	"./en-au.js": 292,
	"./en-ca": 293,
	"./en-ca.js": 293,
	"./en-gb": 294,
	"./en-gb.js": 294,
	"./en-ie": 295,
	"./en-ie.js": 295,
	"./en-il": 296,
	"./en-il.js": 296,
	"./en-nz": 297,
	"./en-nz.js": 297,
	"./eo": 298,
	"./eo.js": 298,
	"./es": 299,
	"./es-do": 300,
	"./es-do.js": 300,
	"./es-us": 301,
	"./es-us.js": 301,
	"./es.js": 299,
	"./et": 302,
	"./et.js": 302,
	"./eu": 303,
	"./eu.js": 303,
	"./fa": 304,
	"./fa.js": 304,
	"./fi": 305,
	"./fi.js": 305,
	"./fo": 306,
	"./fo.js": 306,
	"./fr": 307,
	"./fr-ca": 308,
	"./fr-ca.js": 308,
	"./fr-ch": 309,
	"./fr-ch.js": 309,
	"./fr.js": 307,
	"./fy": 310,
	"./fy.js": 310,
	"./ga": 311,
	"./ga.js": 311,
	"./gd": 312,
	"./gd.js": 312,
	"./gl": 313,
	"./gl.js": 313,
	"./gom-latn": 314,
	"./gom-latn.js": 314,
	"./gu": 315,
	"./gu.js": 315,
	"./he": 316,
	"./he.js": 316,
	"./hi": 317,
	"./hi.js": 317,
	"./hr": 318,
	"./hr.js": 318,
	"./hu": 319,
	"./hu.js": 319,
	"./hy-am": 320,
	"./hy-am.js": 320,
	"./id": 321,
	"./id.js": 321,
	"./is": 322,
	"./is.js": 322,
	"./it": 323,
	"./it-ch": 324,
	"./it-ch.js": 324,
	"./it.js": 323,
	"./ja": 325,
	"./ja.js": 325,
	"./jv": 326,
	"./jv.js": 326,
	"./ka": 327,
	"./ka.js": 327,
	"./kk": 328,
	"./kk.js": 328,
	"./km": 329,
	"./km.js": 329,
	"./kn": 330,
	"./kn.js": 330,
	"./ko": 331,
	"./ko.js": 331,
	"./ku": 332,
	"./ku.js": 332,
	"./ky": 333,
	"./ky.js": 333,
	"./lb": 334,
	"./lb.js": 334,
	"./lo": 335,
	"./lo.js": 335,
	"./lt": 336,
	"./lt.js": 336,
	"./lv": 337,
	"./lv.js": 337,
	"./me": 338,
	"./me.js": 338,
	"./mi": 339,
	"./mi.js": 339,
	"./mk": 340,
	"./mk.js": 340,
	"./ml": 341,
	"./ml.js": 341,
	"./mn": 342,
	"./mn.js": 342,
	"./mr": 343,
	"./mr.js": 343,
	"./ms": 344,
	"./ms-my": 345,
	"./ms-my.js": 345,
	"./ms.js": 344,
	"./mt": 346,
	"./mt.js": 346,
	"./my": 347,
	"./my.js": 347,
	"./nb": 348,
	"./nb.js": 348,
	"./ne": 349,
	"./ne.js": 349,
	"./nl": 350,
	"./nl-be": 351,
	"./nl-be.js": 351,
	"./nl.js": 350,
	"./nn": 352,
	"./nn.js": 352,
	"./pa-in": 353,
	"./pa-in.js": 353,
	"./pl": 354,
	"./pl.js": 354,
	"./pt": 355,
	"./pt-br": 356,
	"./pt-br.js": 356,
	"./pt.js": 355,
	"./ro": 357,
	"./ro.js": 357,
	"./ru": 358,
	"./ru.js": 358,
	"./sd": 359,
	"./sd.js": 359,
	"./se": 360,
	"./se.js": 360,
	"./si": 361,
	"./si.js": 361,
	"./sk": 362,
	"./sk.js": 362,
	"./sl": 363,
	"./sl.js": 363,
	"./sq": 364,
	"./sq.js": 364,
	"./sr": 365,
	"./sr-cyrl": 366,
	"./sr-cyrl.js": 366,
	"./sr.js": 365,
	"./ss": 367,
	"./ss.js": 367,
	"./sv": 368,
	"./sv.js": 368,
	"./sw": 369,
	"./sw.js": 369,
	"./ta": 370,
	"./ta.js": 370,
	"./te": 371,
	"./te.js": 371,
	"./tet": 372,
	"./tet.js": 372,
	"./tg": 373,
	"./tg.js": 373,
	"./th": 374,
	"./th.js": 374,
	"./tl-ph": 375,
	"./tl-ph.js": 375,
	"./tlh": 376,
	"./tlh.js": 376,
	"./tr": 377,
	"./tr.js": 377,
	"./tzl": 378,
	"./tzl.js": 378,
	"./tzm": 379,
	"./tzm-latn": 380,
	"./tzm-latn.js": 380,
	"./tzm.js": 379,
	"./ug-cn": 381,
	"./ug-cn.js": 381,
	"./uk": 382,
	"./uk.js": 382,
	"./ur": 383,
	"./ur.js": 383,
	"./uz": 384,
	"./uz-latn": 385,
	"./uz-latn.js": 385,
	"./uz.js": 384,
	"./vi": 386,
	"./vi.js": 386,
	"./x-pseudo": 387,
	"./x-pseudo.js": 387,
	"./yo": 388,
	"./yo.js": 388,
	"./zh-cn": 389,
	"./zh-cn.js": 389,
	"./zh-hk": 390,
	"./zh-hk.js": 390,
	"./zh-tw": 391,
	"./zh-tw.js": 391
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
webpackContext.id = 604;

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(88);
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

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 652:
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

/***/ 657:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jugadores_jugadores__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendario_calendario__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equipo_equipo__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jornadas_jornadas__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__capitanes_capitanes__ = __webpack_require__(167);
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
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_5__capitanes_capitanes__["a" /* CapitanesPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab2Root" tabTitle="Calendario" tabIcon="calendar"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Equipos" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Jugadores" tabIcon="contact"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabTitle="Jornadas" tabIcon="bookmarks"></ion-tab>\n\n  <ion-tab [root]="tab6Root" tabTitle="Capitanes" tabIcon="ribbon"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(54);
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
    AuthService.prototype.signUp = function (credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendariomodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_listajornadas_listajornadas__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(26);
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
 * Generated class for the CalendariomodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalendariomodalPage = /** @class */ (function () {
    function CalendariomodalPage(toastCtrl, afdb, listajornadas, navCtrl, navParams, viewCtrl, listajugadores) {
        this.toastCtrl = toastCtrl;
        this.afdb = afdb;
        this.listajornadas = listajornadas;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.listajugadores = listajugadores;
        this.event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), Casa: false, Fuera: false, title: '' };
        this.minDate = new Date().toISOString();
        this.titulares = [];
        this.jorna = {
            titulo: '',
            casa: false,
            fecha: null
        };
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.navParams.get('selectedDay')).format();
        this.event.startTime = preselectedDate;
        this.event.endTime = preselectedDate;
        console.log(this.event.startTime);
    }
    CalendariomodalPage.prototype.save = function () {
        this.jorna.titulo = this.event.title;
        if (this.event.Casa) {
            this.jorna.casa = true;
        }
        else {
            this.jorna.casa = false;
        }
        this.jorna.fecha = new Date(this.event.startTime);
        this.afdb.list("/jornada/").push(this.jorna);
        this.mostrar_mensaje(this.jorna.titulo + " añadida correctamente.");
        this.viewCtrl.dismiss();
    };
    CalendariomodalPage.prototype.mostrar_mensaje = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3500,
            cssClass: "toast"
        });
        toast.present();
    };
    CalendariomodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendariomodal',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\calendariomodal\calendariomodal.html"*/'<!--\n\n  Generated template for the CalendariomodalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Fecha</ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="Titulo" [(ngModel)]="event.title"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Comienzo</ion-label>\n\n      <ion-datetime displayFormat="DD/MM/YYYY HH:mm"  pickerFormat="DD/MM/YYYY HH:mm" [(ngModel)]="event.startTime" [min]="minDate"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label>Fin</ion-label>\n\n        <ion-datetime displayFormat="DD/MM/YYYY HH:mm"  pickerFormat="DD/MM/YYYY HH:mm" [(ngModel)]="event.endTime" [min]="minDate"></ion-datetime>\n\n    </ion-item>\n\n  </ion-list>\n\n<ion-item *ngIf="!event.Fuera">\n\n<ion-label>Casa</ion-label>\n\n  <ion-checkbox [(ngModel)]="event.Casa"></ion-checkbox>\n\n</ion-item>\n\n<ion-item *ngIf="event.Fuera">\n\n    <ion-label>Casa</ion-label>\n\n      <ion-checkbox disabled=\'true\' [(ngModel)]="event.Casa"></ion-checkbox>\n\n</ion-item>\n\n<ion-item *ngIf="event.Casa">\n\n  <ion-label>Fuera</ion-label>\n\n  <ion-checkbox disabled=\'true\' [(ngModel)]="event.Fuera"></ion-checkbox>\n\n</ion-item>\n\n<ion-item *ngIf="!event.Casa">\n\n    <ion-label>Fuera</ion-label>\n\n    <ion-checkbox [(ngModel)]="event.Fuera"></ion-checkbox>\n\n  </ion-item>\n\n  <button ion-button color="dark" full icon-left (click)="save()">\n\n    <ion-icon > Añadir Fecha </ion-icon>\n\n</button>\n\n<button ion-button color="dark" full (click)="viewCtrl.dismiss()">Cancelar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\calendariomodal\calendariomodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2__providers_listajornadas_listajornadas__["a" /* ListajornadasProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]])
    ], CalendariomodalPage);
    return CalendariomodalPage;
}());

//# sourceMappingURL=calendariomodal.js.map

/***/ })

},[437]);
//# sourceMappingURL=main.js.map