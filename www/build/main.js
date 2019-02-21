webpackJsonp([14],{

/***/ 140:
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitanesPage; });
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
    CapitanesPage.prototype.destituir = function (capitan) {
        capitan.capitan = false;
        this.afdb.list("/jugador").update(capitan.key, capitan);
    };
    CapitanesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-capitanes',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\capitanes\capitanes.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Capitanes</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="signOut()" color="light">\n\n        Cerrar Sesion\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n      <span *ngFor="let capitan of capitanes | async">\n\n         <ion-list>\n\n          <ion-item-sliding #item>\n\n            <ion-item>\n\n              <ion-icon name="ribbon" item-start></ion-icon>\n\n              <h2>{{capitan.nombre}}</h2> \n\n            </ion-item>\n\n            <ion-item-options side="right">\n\n              <button ion-button (click)="destituir(capitan)" style="background-color: transparent; border:none">\n\n                <ion-icon color="danger" name="close" ></ion-icon>\n\n\n\n\n\n              </button>\n\n            </ion-item-options>\n\n          </ion-item-sliding>\n\n        </ion-list>\n\n      </span>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\capitanes\capitanes.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _d || Object])
    ], CapitanesPage);
    return CapitanesPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=capitanes.js.map

/***/ }),

/***/ 167:
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

/***/ 168:
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

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditjugadormodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(18);
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

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jugadoresmodal_jugadoresmodal__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_listajugadores_listajugadores__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_addequiposmodal_addequiposmodal__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editequipomodal_editequipomodal__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(88);
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
            selector: 'page-equipo',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\equipo\equipo.html"*/'<!--\n\n  Generated template for the EquipoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Equipos</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="mostrar_modal_anadir()" color="light">\n\n        <ion-icon name="person-add"></ion-icon>\n\n      </button>\n\n      <button ion-button (click)="signOut()" color="light">\n\n        Cerrar Sesion\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <span *ngFor="let equipo of equipos | async">\n\n         <ion-list>\n\n          <ion-item-sliding #item> \n\n            <ion-item>  \n\n              <ion-icon name="contacts" item-start></ion-icon>\n\n              <h2>{{equipo.nombre}}</h2> \n\n            </ion-item>\n\n            <ion-item-options side="right">\n\n              <button ion-button (click)="mostrar_modal(equipo)" color="secondary">\n\n                <ion-icon name="eye" ></ion-icon>\n\n                Ver\n\n              </button>\n\n              <span *ngIf="rolAdmin==true">\n\n                <button ion-button (click)="mostrar_modal_editar(equipo)" color="primary">\n\n                  <ion-icon name="build" ></ion-icon>\n\n                  Editar\n\n                </button>\n\n                <button ion-button (click)="eliminar_equipo(equipo)" color="danger">\n\n                  <ion-icon name="trash" ></ion-icon>\n\n                  Eliminar\n\n                </button>\n\n              </span>\n\n            </ion-item-options>\n\n          </ion-item-sliding>\n\n        </ion-list>\n\n      </span>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\equipo\equipo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]])
    ], EquipoPage);
    return EquipoPage;
}());

//# sourceMappingURL=equipo.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_num_jugadores_num_jugadores__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(88);
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
    function JugadoresmodalPage(toastCtrl, prov, afdb, navCtrl, navParams, viewCtrl, numJugadores, listajugadores) {
        this.toastCtrl = toastCtrl;
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
    JugadoresmodalPage.prototype.mostrar_mensaje = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3500,
            cssClass: "toast"
        });
        toast.present();
    };
    JugadoresmodalPage.prototype.convocar = function (jugador) {
        var _this = this;
        if (!jugador.juega) {
            jugador.juega = true;
            this.afdb.list("/jugador").update(jugador.key, jugador);
            var mensaje = "Jugador " + jugador.nombre + " convocado";
            this.mostrar_mensaje(mensaje);
        }
        else if (jugador.juega) {
            jugador.juega = false;
            this.afdb.list("/jugador").update(jugador.key, jugador);
            var mensaje = "Jugador " + jugador.nombre + " desconvocado";
            this.mostrar_mensaje(mensaje);
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
            var mensaje = "Jugador " + jugador.nombre + " elegido como capitan";
            this.mostrar_mensaje(mensaje);
        }
        else if (jugador.capitan) {
            jugador.capitan = false;
            this.isCapitan = false;
            this.afdb.list("/jugador").update(jugador.key, jugador);
            var mensaje_1 = "Jugador " + jugador.nombre + " destituido como capitan";
            this.mostrar_mensaje(mensaje_1);
        }
    };
    JugadoresmodalPage.prototype.volver = function () {
        this.viewCtrl.dismiss();
    };
    JugadoresmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jugadoresmodal',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jugadoresmodal\jugadoresmodal.html"*/'<!--\n\n  Generated template for the JugadoresmodalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Jugadores</ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list> \n\n      <span *ngFor="let jugador of equipo | async">\n\n\n\n        <ion-item ion-item detail-none *ngIf="(jugador.juega==false && (rolCapitan || rolAdmin) && Nconvocados <5 && !rolAdmin) || (jugador.juega==false && rolAdmin && Nconvocados <5)">\n\n            <ion-label>{{ jugador.nombre }}</ion-label>\n\n            <ion-checkbox item-right checked="false"  (click)="convocar(jugador)"></ion-checkbox>\n\n            <button item-right ion-button color="dark" (click)="capitan(jugador)" *ngIf="!isCapitan && rolAdmin">\n\n                <ion-icon color="whithe" name="ribbon"></ion-icon>\n\n            </button>\n\n            <button item-right ion-button color="dark" icon-only (click)="capitan(jugador)" *ngIf="jugador.capitan && rolAdmin">\n\n                <ion-icon color="whithe" name="ribbon"></ion-icon>\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item ion-item detail-none *ngIf="(jugador.juega==false && rolCapitan && Nconvocados>=5 && !rolAdmin) || (jugador.juega==false && rolAdmin && Nconvocados>=5)">\n\n            <ion-label>{{ jugador.nombre }}</ion-label>\n\n            <ion-checkbox item-right checked="false" disabled=\'true\' (click)="convocar(jugador)"></ion-checkbox>\n\n            <button item-right ion-button color="dark" (click)="capitan(jugador)" *ngIf="!isCapitan && rolAdmin">\n\n                <ion-icon color="whithe"  name="ribbon"></ion-icon>\n\n            </button>\n\n            <button item-right ion-button color="dark" icon-only (click)="capitan(jugador)" *ngIf="jugador.capitan && rolAdmin">\n\n                <ion-icon color="whithe" name="ribbon"></ion-icon>\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item ion-item detail-none *ngIf="jugador.juega==false && !rolCapitan && !rolAdmin">\n\n            <ion-label>{{ jugador.nombre }}</ion-label>\n\n            <ion-checkbox item-right  checked="false" disabled=\'true\' (click)="convocar(jugador)"></ion-checkbox>\n\n            <button item-right ion-button color="dark" (click)="capitan(jugador)" *ngIf="!isCapitan && rolAdmin ">\n\n                <ion-icon color="whithe" name="ribbon"></ion-icon>\n\n            </button>\n\n            <button item-right ion-button icon-only (click)="capitan(jugador)" *ngIf="jugador.capitan && rolAdmin">\n\n                <ion-icon color="whithe" name="ribbon"></ion-icon>\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item ion-item detail-none *ngIf="(jugador.juega==true && rolCapitan && !rolAdmin) || (jugador.juega==true && rolAdmin)">\n\n          <ion-label>{{ jugador.nombre }}</ion-label>\n\n          <ion-checkbox item-right checked="true" (click)="convocar(jugador)"></ion-checkbox>\n\n          <button item-right ion-button color="dark" (click)="capitan(jugador)" *ngIf="!isCapitan && rolAdmin">\n\n                <ion-icon color="whithe" name="ribbon"></ion-icon>\n\n          </button>\n\n          <button item-right ion-button icon-only (click)="capitan(jugador)" *ngIf="jugador.capitan && rolAdmin">\n\n                <ion-icon color="whithe" name="ribbon"></ion-icon>\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item ion-item detail-none *ngIf="(jugador.juega==true && !rolCapitan && !rolAdmin )">\n\n          <ion-label>{{ jugador.nombre }}</ion-label>\n\n          <ion-checkbox item-right checked="true"  disabled=\'true\' (click)="convocar(jugador)"></ion-checkbox>\n\n          <button item-right ion-button icon-only color="dark" (click)="capitan(jugador)" *ngIf="!isCapitan && rolAdmin">\n\n                <ion-icon color="whithe" name="ribbon"></ion-icon>\n\n          </button>\n\n          <button item-right ion-button icon-only (click)="capitan(jugador)" *ngIf="jugador.capitan && rolAdmin">\n\n                <ion-icon color="whithe" name="ribbon"></ion-icon>\n\n          </button>\n\n\n\n        </ion-item>\n\n      </span>\n\n    </ion-list>\n\n    <button ion-button color="dark" (click)="viewCtrl.dismiss()">Listo</button>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jugadoresmodal\jugadoresmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_num_jugadores_num_jugadores__["a" /* NumJugadoresProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]])
    ], JugadoresmodalPage);
    return JugadoresmodalPage;
}());

//# sourceMappingURL=jugadoresmodal.js.map

/***/ }),

/***/ 172:
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

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JornadasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_listajornadas_listajornadas__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jornadasmodal_jornadasmodal__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calendariomodal_calendariomodal__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_listajugadores_listajugadores__ = __webpack_require__(46);
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
    function JornadasPage(prov, toastCtrl, afdb, modalCtrl, navCtrl, navParams, AfAuth, listajornadas) {
        this.prov = prov;
        this.toastCtrl = toastCtrl;
        this.afdb = afdb;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AfAuth = AfAuth;
        this.listajornadas = listajornadas;
        this.rolAdmin = false;
        this.rolCapitan = false;
        this.listJornadas = afdb.list("/jornada");
        this.jornadas = this.listJornadas.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(function (changes) { return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); }); }));
    }
    JornadasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad JornadasPage');
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
    JornadasPage.prototype.mostrar_modal = function (jornada) {
        var equipo = this.afdb.list('/equipo', function (ref) { return ref.orderByKey().equalTo(jornada.equipo); }).valueChanges();
        var titular1 = this.afdb.list('/jugador', function (ref) { return ref.orderByChild('email').equalTo(jornada.titular1); }).valueChanges();
        var titular2 = this.afdb.list('/jugador', function (ref) { return ref.orderByChild('email').equalTo(jornada.titular2); }).valueChanges();
        var titular3 = this.afdb.list('/jugador', function (ref) { return ref.orderByChild('email').equalTo(jornada.titular3); }).valueChanges();
        var titular4 = this.afdb.list('/jugador', function (ref) { return ref.orderByChild('email').equalTo(jornada.titular4); }).valueChanges();
        var titular5 = this.afdb.list('/jugador', function (ref) { return ref.orderByChild('email').equalTo(jornada.titular5); }).valueChanges();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__jornadasmodal_jornadasmodal__["a" /* JornadasmodalPage */], { jornada: jornada, equipo: equipo, titular1: titular1, titular2: titular2, titular3: titular3, titular4: titular4, titular5: titular5 });
        modal.present();
    };
    JornadasPage.prototype.signOut = function () {
        return this.AfAuth.auth.signOut();
    };
    JornadasPage.prototype.mostrar_modal_add = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__calendariomodal_calendariomodal__["a" /* CalendariomodalPage */]);
        modal.present();
    };
    JornadasPage.prototype.eliminar = function (jornada) {
        var id = jornada.key;
        this.mostrar_mensaje("Jornada  eliminada con exito.");
        this.afdb.database.ref('/jornada/' + jornada.key).remove();
    };
    JornadasPage.prototype.mostrar_mensaje = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3500,
            cssClass: "toast"
        });
        toast.present();
    };
    JornadasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jornadas',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jornadas\jornadas.html"*/'<!--\n\n  Generated template for the JornadasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Jornadas</ion-title>\n\n    <ion-buttons end>\n\n    <button end ion-button icon-only (click)="mostrar_modal_add()" color="white">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n      <button ion-button (click)="signOut()" color="light">\n\n        Cerrar Sesion\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <span *ngFor="let jornada of jornadas | async">\n\n      <ion-list >\n\n        <ion-item-sliding #item>\n\n          <ion-item>\n\n            {{jornada.titulo}}\n\n          </ion-item>\n\n          <ion-item-options side="right">\n\n            <button ion-button (click)="mostrar_modal(jornada)" color="secondary">\n\n              <ion-icon name="eye" ></ion-icon>\n\n              Ver\n\n            </button>\n\n            <span *ngIf="rolAdmin==true">\n\n              <button ion-button (click)="mostrar_modal_editar(jornada)" color="primary">\n\n                <ion-icon name="build" ></ion-icon>\n\n                Editar\n\n              </button>\n\n              <button ion-button (click)="eliminar(jornada)" color="danger">\n\n                <ion-icon name="trash" ></ion-icon>\n\n                Eliminar\n\n              </button>\n\n            </span>\n\n          </ion-item-options>\n\n        </ion-item-sliding>\n\n        </ion-list>\n\n      </span>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jornadas\jornadas.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__providers_listajornadas_listajornadas__["a" /* ListajornadasProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_listajornadas_listajornadas__["a" /* ListajornadasProvider */]) === "function" && _h || Object])
    ], JornadasPage);
    return JornadasPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=jornadas.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datosjugadormodal_datosjugadormodal__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editjugadormodal_editjugadormodal__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_listajugadores_listajugadores__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(88);
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
        this.afdb.database.ref('/jugador/' + jugador.key).remove();
        this.mostrar_mensaje("Jugador " + jugador.nombre + " eliminado con exito.");
    };
    JugadoresPage.prototype.recargar_jugadores = function (event) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            console.log('Async operation has ended');
            _this.listaJugadores = _this.afdb.list("/jugador", function (ref) { return ref.orderByChild('elo'); });
            _this.jugadores = _this.listaJugadores.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (changes) { return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); }).reverse(); }));
            ;
            event.complete();
        }, 500);
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
            selector: 'page-jugadores',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jugadores\jugadores.html"*/'<!--\n\n  Generated template for the JugadoresPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Jugadores</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="signOut()" color="light">\n\n        Cerrar Sesion\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n      <span *ngFor="let jugador of jugadores | async ">\n\n         <ion-list>\n\n          <ion-item-sliding #item>\n\n            <ion-item>\n\n              <ion-icon name="contact" item-start></ion-icon>\n\n\n\n              <h2>{{jugador.nombre}}, {{jugador.elo}}</h2> \n\n            </ion-item>\n\n            <ion-item-options side="right">\n\n              <button ion-button (click)="mostrar_modal(jugador)" color="secondary">\n\n                <ion-icon name="eye" ></ion-icon>\n\n                Ver\n\n              </button>\n\n              <span *ngIf="rolAdmin==true">\n\n              <button ion-button (click)="mostrar_modal_editar(jugador)" color="primary">\n\n                <ion-icon name="build" ></ion-icon>\n\n                Editar\n\n              </button>\n\n              <button ion-button (click)="eliminar_jugador(jugador)" color="danger">\n\n                <ion-icon name="trash" ></ion-icon>\n\n                Eliminar\n\n              </button>\n\n              </span>\n\n            </ion-item-options>\n\n          </ion-item-sliding>\n\n        </ion-list>\n\n      </span>\n\n  </ion-list>\n\n   <ion-refresher (ionRefresh)="recargar_jugadores($event)">\n\n <ion-refresher-content></ion-refresher-content>\n\n </ion-refresher>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jugadores\jugadores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_5__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]])
    ], JugadoresPage);
    return JugadoresPage;
}());

//# sourceMappingURL=jugadores.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_registro_registro__ = __webpack_require__(176);
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

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(89);
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

/***/ 209:
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
webpackEmptyAsyncContext.id = 209;

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addequiposmodal/addequiposmodal.module": [
		665,
		30
	],
	"../pages/calendario/calendario.module": [
		667,
		29
	],
	"../pages/calendariomodal/calendariomodal.module": [
		666,
		28
	],
	"../pages/capitanes/capitanes.module": [
		668,
		27
	],
	"../pages/capitanesmodal/capitanesmodal.module": [
		669,
		26
	],
	"../pages/datosjugadormodal/datosjugadormodal.module": [
		670,
		25
	],
	"../pages/editequipomodal/editequipomodal.module": [
		674,
		24
	],
	"../pages/editjugadormodal/editjugadormodal.module": [
		671,
		23
	],
	"../pages/equipo/equipo.module": [
		672,
		22
	],
	"../pages/jornadas/jornadas.module": [
		673,
		21
	],
	"../pages/jornadasmodal/jornadasmodal.module": [
		679,
		20
	],
	"../pages/jugadores/jugadores.module": [
		675,
		19
	],
	"../pages/jugadoresmodal/jugadoresmodal.module": [
		676,
		18
	],
	"../pages/login/login.module": [
		677,
		17
	],
	"../pages/registro/registro.module": [
		678,
		16
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
webpackAsyncContext.id = 251;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 390:
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

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JornadasmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
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
    function JornadasmodalPage(afdb, listajugadores, navCtrl, navParams, viewCtrl) {
        this.afdb = afdb;
        this.listajugadores = listajugadores;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.jornada = {};
    }
    JornadasmodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JornadasmodalPage');
        this.jornada = this.navParams.get('jornada');
        this.equipo = this.navParams.get('equipo');
        this.equipo = this.navParams.get('equipo');
        this.titular1 = this.navParams.get('titular1');
        this.titular2 = this.navParams.get('titular2');
        this.titular3 = this.navParams.get('titular3');
        this.titular4 = this.navParams.get('titular4');
        this.titular5 = this.navParams.get('titular5');
        console.log(this.jornada);
        // this.nombre1 = this.jornada.titular1.nombre;
        // this.nombre2 = this.jornada.titular2.nombre;
        // this.nombre3 = this.jornada.titular3.nombre;
        // this.nombre4 = this.jornada.titular4.nombre;
        // this.jornada.fecha = this.jornada.fecha.substring(0, 10);
    };
    JornadasmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jornadasmodal',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jornadasmodal\jornadasmodal.html"*/'<!--\n\n  Generated template for the JornadasmodalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark"> \n\n    <ion-title>Datos de {{ jornada.titulo }} </ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n\n\n\n\n    <ion-list>\n\n    \n\n      <p><span style="font-weight: bold;"> Nombre: </span> {{ jornada.titulo }}</p>\n\n      <p><span style="font-weight: bold;"> Fecha: </span> {{ jornada.fecha }}</p>\n\n      <span *ngFor="let equip of equipo | async">\n\n        <p><span style="font-weight: bold;"> Equipo: </span> {{ equip.nombre }}</p>\n\n      </span>\n\n\n\n      <span *ngFor="let titularUno of titular1 | async">\n\n        <p>\n\n          <span style="font-weight: bold;"> Titular 1: </span> {{ titularUno.nombre }},\n\n          <span *ngIf="jornada.resultado1 == 0">Sin asignar</span>\n\n          <span color="secondary" *ngIf="jornada.resultado1 == 1">Victoria</span>\n\n          <span color="primary" *ngIf="jornada.resultado1 == 2">Empate</span>\n\n          <span color="danger" *ngIf="jornada.resultado1 == 3">Derrota</span>\n\n        </p>\n\n      </span>\n\n\n\n      <span *ngFor="let titularDos of titular2 | async">\n\n        <p><span style="font-weight: bold;"> Titular 2: </span> {{ titularDos.nombre }}, <span *ngIf="jornada.resultado2 == 0">Sin asignar</span></p>\n\n      </span>\n\n      \n\n      <span *ngFor="let titularTres of titular3 | async">\n\n        <p><span style="font-weight: bold;"> Titular 3: </span> {{ titularTres.nombre }}, <span *ngIf="jornada.resultado3 == 0">Sin asignar</span></p>\n\n      </span>\n\n\n\n      <span *ngFor="let titularCuatro of titular4 | async">\n\n        <p><span style="font-weight: bold;"> Titular 4: </span> {{ titularCuatro.nombre }}, <span *ngIf="jornada.resultado4 == 0">Sin asignar</span></p>\n\n      </span>\n\n\n\n      <span *ngFor="let titularCinco of titular5 | async">\n\n        <p><span style="font-weight: bold;"> Titular 5: </span> {{ titularCinco.nombre }}, <span *ngIf="jornada.resultado5 == 0">Sin asignar</span></p>\n\n      </span>\n\n      <!--\n\n      <p>\n\n        <ion-label> \n\n          <span style="font-weight: bold;">    \n\n          Titular 1:\n\n          </span>\n\n          {{ nombre1 }}\n\n          &ensp;&ensp;&ensp;&ensp;\n\n          <span *ngIf="jornada.n_titular1==0">\n\n            G &ensp;<ion-checkbox (click)="gana(jornada.titular1,1)"></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox (click)="empata(jornada.titular1,1)"></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox (click)="pierde(jornada.titular1,1)"></ion-checkbox>\n\n          </span>\n\n          <span *ngIf="jornada.n_titular1==1">\n\n            G &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n          </span>  \n\n          <span *ngIf="jornada.n_titular1==2">\n\n            G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n          </span>  \n\n          <span *ngIf="jornada.n_titular1==3">\n\n            G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>\n\n          </span> \n\n        </ion-label>\n\n      </p>\n\n      <p>\n\n          <ion-label> \n\n            <span style="font-weight: bold;">    \n\n            Titular 2:\n\n            </span>\n\n            {{ nombre2  }}\n\n            &ensp;&ensp;&ensp;&ensp;\n\n            <span *ngIf="jornada.n_titular2==0">\n\n                G &ensp;<ion-checkbox (click)="gana(jornada.titular2,2)"></ion-checkbox>&ensp;&ensp;\n\n                E &ensp;<ion-checkbox (click)="empata(jornada.titular2,2)"></ion-checkbox>&ensp;&ensp;\n\n                P &ensp;<ion-checkbox (click)="pierde(jornada.titular2,2)"></ion-checkbox>\n\n              </span>\n\n              <span *ngIf="jornada.n_titular2==1">\n\n                G &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n              </span>  \n\n              <span *ngIf="jornada.n_titular2==2">\n\n                G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                E &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n              </span>  \n\n              <span *ngIf="jornada.n_titular2==3">\n\n                G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                P &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>\n\n              </span>  \n\n          </ion-label>\n\n        </p>\n\n        <p>\n\n            <ion-label> \n\n              <span style="font-weight: bold;">    \n\n              Titular 3:\n\n              </span>\n\n              {{ nombre3  }}\n\n              &ensp;&ensp;&ensp;&ensp;\n\n              <span *ngIf="jornada.n_titular3==0">\n\n                  G &ensp;<ion-checkbox (click)="gana(jornada.titular3,3)"></ion-checkbox>&ensp;&ensp;\n\n                  E &ensp;<ion-checkbox (click)="empata(jornada.titular3,3)"></ion-checkbox>&ensp;&ensp;\n\n                  P &ensp;<ion-checkbox (click)="pierde(jornada.titular3,3)"></ion-checkbox>\n\n                </span>\n\n                <span *ngIf="jornada.n_titular3==1">\n\n                  G &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                  E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                  P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n                </span>  \n\n                <span *ngIf="jornada.n_titular3==2">\n\n                  G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                  E &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                  P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n                </span>  \n\n                <span *ngIf="jornada.n_titular3==3">\n\n                  G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                  E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                  P &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>\n\n                </span> \n\n            </ion-label>\n\n          </p>\n\n          <p>\n\n              <ion-label> \n\n                <span style="font-weight: bold;">    \n\n                Titular 4:\n\n                </span>\n\n                {{ nombre4 }}\n\n                &ensp;&ensp;&ensp;&ensp;\n\n                <span *ngIf="jornada.n_titular4==0">\n\n                    G &ensp;<ion-checkbox (click)="gana(jornada.titular4,4)"></ion-checkbox>&ensp;&ensp;\n\n                    E &ensp;<ion-checkbox (click)="empata(jornada.titular4,4)"></ion-checkbox>&ensp;&ensp;\n\n                    P &ensp;<ion-checkbox (click)="pierde(jornada.titular4,4)"></ion-checkbox>\n\n                  </span>\n\n                  <span *ngIf="jornada.n_titular4==1">\n\n                    G &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                    E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                    P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n                  </span>  \n\n                  <span *ngIf="jornada.n_titular4==2">\n\n                    G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                    E &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                    P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n                  </span>  \n\n                  <span *ngIf="jornada.n_titular4==3">\n\n                    G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                    E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                    P &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>\n\n                  </span>  \n\n              </ion-label>\n\n            </p>\n\n            -->\n\n    </ion-list>\n\n    <button ion-button color="dark" (click)="viewCtrl.dismiss()">Listo</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jornadasmodal\jornadasmodal.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" && _e || Object])
    ], JornadasmodalPage);
    return JornadasmodalPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=jornadasmodal.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_calendariomodal_calendariomodal__ = __webpack_require__(96);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ultimate_ngxerrors__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__config__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_jugadores_jugadores__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_calendario_calendario__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_equipo_equipo__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_jornadas_jornadas__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_jugadoresmodal_jugadoresmodal__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic2_calendar__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_calendariomodal_calendariomodal__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_datosjugadormodal_datosjugadormodal__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_calendar__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_num_jugadores_num_jugadores__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_listajugadores_listajugadores__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_listajornadas_listajornadas__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_editjugadormodal_editjugadormodal__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_jornadasmodal_jornadasmodal__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_addequiposmodal_addequiposmodal__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_registro_registro__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_editequipomodal_editequipomodal__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_capitanes_capitanes__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_capitanesmodal_capitanesmodal__ = __webpack_require__(167);
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
                        { loadChildren: '../pages/calendariomodal/calendariomodal.module#CalendariomodalPageModule', name: 'CalendariomodalPage', segment: 'calendariomodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendario/calendario.module#CalendarioPageModule', name: 'CalendarioPage', segment: 'calendario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/capitanes/capitanes.module#CapitanesPageModule', name: 'CapitanesPage', segment: 'capitanes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/capitanesmodal/capitanesmodal.module#CapitanesmodalPageModule', name: 'CapitanesmodalPage', segment: 'capitanesmodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/datosjugadormodal/datosjugadormodal.module#DatosjugadormodalPageModule', name: 'DatosjugadormodalPage', segment: 'datosjugadormodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editjugadormodal/editjugadormodal.module#EditjugadormodalPageModule', name: 'EditjugadormodalPage', segment: 'editjugadormodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/equipo/equipo.module#EquipoPageModule', name: 'EquipoPage', segment: 'equipo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jornadas/jornadas.module#JornadasPageModule', name: 'JornadasPage', segment: 'jornadas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editequipomodal/editequipomodal.module#EditequipomodalPageModule', name: 'EditequipomodalPage', segment: 'editequipomodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jornadasmodal/jornadasmodal.module#JornadasmodalPageModule', name: 'JornadasmodalPage', segment: 'jornadasmodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugadores/jugadores.module#JugadoresPageModule', name: 'JugadoresPage', segment: 'jugadores', priority: 'low', defaultHistory: [] },
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
	"./af": 263,
	"./af.js": 263,
	"./ar": 264,
	"./ar-dz": 265,
	"./ar-dz.js": 265,
	"./ar-kw": 266,
	"./ar-kw.js": 266,
	"./ar-ly": 267,
	"./ar-ly.js": 267,
	"./ar-ma": 268,
	"./ar-ma.js": 268,
	"./ar-sa": 269,
	"./ar-sa.js": 269,
	"./ar-tn": 270,
	"./ar-tn.js": 270,
	"./ar.js": 264,
	"./az": 271,
	"./az.js": 271,
	"./be": 272,
	"./be.js": 272,
	"./bg": 273,
	"./bg.js": 273,
	"./bm": 274,
	"./bm.js": 274,
	"./bn": 275,
	"./bn.js": 275,
	"./bo": 276,
	"./bo.js": 276,
	"./br": 277,
	"./br.js": 277,
	"./bs": 278,
	"./bs.js": 278,
	"./ca": 279,
	"./ca.js": 279,
	"./cs": 280,
	"./cs.js": 280,
	"./cv": 281,
	"./cv.js": 281,
	"./cy": 282,
	"./cy.js": 282,
	"./da": 283,
	"./da.js": 283,
	"./de": 284,
	"./de-at": 285,
	"./de-at.js": 285,
	"./de-ch": 286,
	"./de-ch.js": 286,
	"./de.js": 284,
	"./dv": 287,
	"./dv.js": 287,
	"./el": 288,
	"./el.js": 288,
	"./en-SG": 289,
	"./en-SG.js": 289,
	"./en-au": 290,
	"./en-au.js": 290,
	"./en-ca": 291,
	"./en-ca.js": 291,
	"./en-gb": 292,
	"./en-gb.js": 292,
	"./en-ie": 293,
	"./en-ie.js": 293,
	"./en-il": 294,
	"./en-il.js": 294,
	"./en-nz": 295,
	"./en-nz.js": 295,
	"./eo": 296,
	"./eo.js": 296,
	"./es": 297,
	"./es-do": 298,
	"./es-do.js": 298,
	"./es-us": 299,
	"./es-us.js": 299,
	"./es.js": 297,
	"./et": 300,
	"./et.js": 300,
	"./eu": 301,
	"./eu.js": 301,
	"./fa": 302,
	"./fa.js": 302,
	"./fi": 303,
	"./fi.js": 303,
	"./fo": 304,
	"./fo.js": 304,
	"./fr": 305,
	"./fr-ca": 306,
	"./fr-ca.js": 306,
	"./fr-ch": 307,
	"./fr-ch.js": 307,
	"./fr.js": 305,
	"./fy": 308,
	"./fy.js": 308,
	"./ga": 309,
	"./ga.js": 309,
	"./gd": 310,
	"./gd.js": 310,
	"./gl": 311,
	"./gl.js": 311,
	"./gom-latn": 312,
	"./gom-latn.js": 312,
	"./gu": 313,
	"./gu.js": 313,
	"./he": 314,
	"./he.js": 314,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 316,
	"./hr.js": 316,
	"./hu": 317,
	"./hu.js": 317,
	"./hy-am": 318,
	"./hy-am.js": 318,
	"./id": 319,
	"./id.js": 319,
	"./is": 320,
	"./is.js": 320,
	"./it": 321,
	"./it-ch": 322,
	"./it-ch.js": 322,
	"./it.js": 321,
	"./ja": 323,
	"./ja.js": 323,
	"./jv": 324,
	"./jv.js": 324,
	"./ka": 325,
	"./ka.js": 325,
	"./kk": 326,
	"./kk.js": 326,
	"./km": 327,
	"./km.js": 327,
	"./kn": 328,
	"./kn.js": 328,
	"./ko": 329,
	"./ko.js": 329,
	"./ku": 330,
	"./ku.js": 330,
	"./ky": 331,
	"./ky.js": 331,
	"./lb": 332,
	"./lb.js": 332,
	"./lo": 333,
	"./lo.js": 333,
	"./lt": 334,
	"./lt.js": 334,
	"./lv": 335,
	"./lv.js": 335,
	"./me": 336,
	"./me.js": 336,
	"./mi": 337,
	"./mi.js": 337,
	"./mk": 338,
	"./mk.js": 338,
	"./ml": 339,
	"./ml.js": 339,
	"./mn": 340,
	"./mn.js": 340,
	"./mr": 341,
	"./mr.js": 341,
	"./ms": 342,
	"./ms-my": 343,
	"./ms-my.js": 343,
	"./ms.js": 342,
	"./mt": 344,
	"./mt.js": 344,
	"./my": 345,
	"./my.js": 345,
	"./nb": 346,
	"./nb.js": 346,
	"./ne": 347,
	"./ne.js": 347,
	"./nl": 348,
	"./nl-be": 349,
	"./nl-be.js": 349,
	"./nl.js": 348,
	"./nn": 350,
	"./nn.js": 350,
	"./pa-in": 351,
	"./pa-in.js": 351,
	"./pl": 352,
	"./pl.js": 352,
	"./pt": 353,
	"./pt-br": 354,
	"./pt-br.js": 354,
	"./pt.js": 353,
	"./ro": 355,
	"./ro.js": 355,
	"./ru": 356,
	"./ru.js": 356,
	"./sd": 357,
	"./sd.js": 357,
	"./se": 358,
	"./se.js": 358,
	"./si": 359,
	"./si.js": 359,
	"./sk": 360,
	"./sk.js": 360,
	"./sl": 361,
	"./sl.js": 361,
	"./sq": 362,
	"./sq.js": 362,
	"./sr": 363,
	"./sr-cyrl": 364,
	"./sr-cyrl.js": 364,
	"./sr.js": 363,
	"./ss": 365,
	"./ss.js": 365,
	"./sv": 366,
	"./sv.js": 366,
	"./sw": 367,
	"./sw.js": 367,
	"./ta": 368,
	"./ta.js": 368,
	"./te": 369,
	"./te.js": 369,
	"./tet": 370,
	"./tet.js": 370,
	"./tg": 371,
	"./tg.js": 371,
	"./th": 372,
	"./th.js": 372,
	"./tl-ph": 373,
	"./tl-ph.js": 373,
	"./tlh": 374,
	"./tlh.js": 374,
	"./tr": 375,
	"./tr.js": 375,
	"./tzl": 376,
	"./tzl.js": 376,
	"./tzm": 377,
	"./tzm-latn": 378,
	"./tzm-latn.js": 378,
	"./tzm.js": 377,
	"./ug-cn": 379,
	"./ug-cn.js": 379,
	"./uk": 380,
	"./uk.js": 380,
	"./ur": 381,
	"./ur.js": 381,
	"./uz": 382,
	"./uz-latn": 383,
	"./uz-latn.js": 383,
	"./uz.js": 382,
	"./vi": 384,
	"./vi.js": 384,
	"./x-pseudo": 385,
	"./x-pseudo.js": 385,
	"./yo": 386,
	"./yo.js": 386,
	"./zh-cn": 387,
	"./zh-cn.js": 387,
	"./zh-hk": 388,
	"./zh-hk.js": 388,
	"./zh-tw": 389,
	"./zh-tw.js": 389
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(89);
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

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jugadores_jugadores__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equipo_equipo__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jornadas_jornadas__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__capitanes_capitanes__ = __webpack_require__(166);
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
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__equipo_equipo__["a" /* EquipoPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__jugadores_jugadores__["a" /* JugadoresPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_3__jornadas_jornadas__["a" /* JornadasPage */];
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_4__capitanes_capitanes__["a" /* CapitanesPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab3Root" tabTitle="Equipos" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Jugadores" tabIcon="contact"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabTitle="Jornadas" tabIcon="bookmarks"></ion-tab>\n\n  <ion-tab [root]="tab6Root" tabTitle="Capitanes" tabIcon="ribbon"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 90:
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

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendariomodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_listajornadas_listajornadas__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(18);
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






var CalendariomodalPage = /** @class */ (function () {
    function CalendariomodalPage(prov, toastCtrl, afdb, listajornadas, navCtrl, navParams, viewCtrl, listajugadores) {
        this.prov = prov;
        this.toastCtrl = toastCtrl;
        this.afdb = afdb;
        this.listajornadas = listajornadas;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.listajugadores = listajugadores;
        this.jornada = {
            titulo: '',
            casa: false,
            fecha: null,
            equipo: '',
            titular1: '',
            titular2: '',
            titular3: '',
            titular4: '',
            titular5: '',
            resultado1: 0,
            resultado2: 0,
            resultado3: 0,
            resultado4: 0,
            resultado5: 0
        };
        this.listEquipos = afdb.list("/equipo");
        this.equipos = this.listEquipos.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (changes) { return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); }); }));
    }
    CalendariomodalPage.prototype.add = function () {
        var _this = this;
        console.log(this.jornada.equipo);
        this.listajugadores.Covocados(this.jornada.equipo).then(function (existe) {
            if (existe) {
                for (var i = 0; i < Object.keys(_this.prov.convocados).length; i++) {
                    if (_this.prov.convocados[i].juega) {
                        console.log(i);
                        if (i == 0) {
                            _this.jornada.titular1 = _this.prov.convocados[i].email;
                        }
                        else if (i == 1) {
                            _this.jornada.titular2 = _this.prov.convocados[i].email;
                        }
                        else if (i == 2) {
                            _this.jornada.titular3 = _this.prov.convocados[i].email;
                        }
                        else if (i == 3) {
                            _this.jornada.titular4 = _this.prov.convocados[i].email;
                        }
                        else if (i == 4) {
                            _this.jornada.titular5 = _this.prov.convocados[i].email;
                        }
                    }
                }
                console.log(_this.jornada);
                _this.afdb.list("/jornada").push(_this.jornada);
                _this.viewCtrl.dismiss();
                _this.mostrar_mensaje("Jornada añadida con exito!.");
            }
        });
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
            selector: 'page-calendariomodal',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\calendariomodal\calendariomodal.html"*/'<!--\n\n  Generated template for the CalendariomodalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Fecha</ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-item>\n\n    <ion-label floating>Titulo</ion-label>\n\n    <ion-input type="text" label="jornada.titulo" [(ngModel)]="jornada.titulo"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Fecha</ion-label>\n\n    <ion-input type="date" label="jornada.fecha" [(ngModel)]="jornada.fecha"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Equipo</ion-label>\n\n    <ion-select value="" [(ngModel)]="jornada.equipo" okText="Aceptar" cancelText="Cancelar">\n\n      <ion-option *ngFor="let equipo of equipos | async" value="{{equipo.key}}">{{equipo.nombre}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Casa</ion-label>\n\n        <ion-checkbox [(ngModel)]="jornada.casa"></ion-checkbox>\n\n  </ion-item>\n\n  <button ion-button color="dark" full icon-left (click)="add()">\n\n    <ion-icon > Añadir Jornada </ion-icon>\n\n  </button>\n\n  <button ion-button color="dark" full (click)="viewCtrl.dismiss()">Cancelar</button>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\calendariomodal\calendariomodal.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_listajornadas_listajornadas__["a" /* ListajornadasProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_listajornadas_listajornadas__["a" /* ListajornadasProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]) === "function" && _h || Object])
    ], CalendariomodalPage);
    return CalendariomodalPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=calendariomodal.js.map

/***/ })

},[437]);
//# sourceMappingURL=main.js.map