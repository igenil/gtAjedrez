webpackJsonp([16],{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(21);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(21);
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
            selector: 'page-capitanes',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\capitanes\capitanes.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Capitanes</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="signOut()" color="light">\n\n        Cerrar Sesion\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n      <span *ngFor="let capitan of capitanes | async">\n\n         <ion-list>\n\n          <ion-item-sliding #item>\n\n            <ion-item>\n\n              <ion-icon name="ribbon" item-start></ion-icon>\n\n              <h2><b>{{capitan.nombre}}</b></h2> \n\n            </ion-item>\n\n            <ion-item-options side="right">\n\n              <button ion-button (click)="destituir(capitan)" style="background-color: transparent; border:none">\n\n                <ion-icon color="danger" name="close" ></ion-icon>\n\n\n\n\n\n              </button>\n\n            </ion-item-options>\n\n          </ion-item-sliding>\n\n        </ion-list>\n\n      </span>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\capitanes\capitanes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CapitanesPage);
    return CapitanesPage;
}());

//# sourceMappingURL=capitanes.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosjugadormodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__ = __webpack_require__(34);
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

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditequipomodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(21);
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

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditjornadamodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(21);
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
 * Generated class for the EditjornadamodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditjornadamodalPage = /** @class */ (function () {
    function EditjornadamodalPage(afdb, listajugadores, navCtrl, navParams, viewCtrl) {
        this.afdb = afdb;
        this.listajugadores = listajugadores;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.jornada = {};
    }
    EditjornadamodalPage.prototype.ionViewDidLoad = function () {
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
    };
    EditjornadamodalPage.prototype.ganatitular1 = function (jornada, titular1) {
        if (jornada.resultado1 == 1) {
            titular1.jugados = Number(titular1.jugados) - 1;
            titular1.ganado = Number(titular1.ganado) - 1;
            titular1.elo = Number(titular1.elo) - 3;
            if (jornada.casa) {
                titular1.casa = Number(titular1.casa) - 1;
            }
            else {
                titular1.fuera = Number(titular1.fuera) - 1;
            }
            this.afdb.list("/jugador").update(titular1.key, titular1);
            jornada.resultado1 = 0;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
        else {
            titular1.jugados = Number(titular1.jugados) + 1;
            titular1.ganado = Number(titular1.ganado) + 1;
            titular1.elo = Number(titular1.elo) + 3;
            if (jornada.casa) {
                titular1.casa = Number(titular1.casa) + 1;
            }
            else {
                titular1.fuera = Number(titular1.fuera) + 1;
            }
            this.afdb.list("/jugador").update(titular1.key, titular1);
            jornada.resultado1 = 1;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
    };
    EditjornadamodalPage.prototype.ganatitular2 = function (jornada, titular2) {
        if (jornada.resultado2 == 1) {
            titular2.jugados = Number(titular2.jugados) - 1;
            titular2.ganado = Number(titular2.ganado) - 1;
            titular2.elo = Number(titular2.elo) - 3;
            if (jornada.casa) {
                titular2.casa = Number(titular2.casa) - 1;
            }
            else {
                titular2.fuera = Number(titular2.fuera) - 1;
            }
            this.afdb.list("/jugador").update(titular2.key, titular2);
            jornada.resultado2 = 0;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
        else {
            titular2.jugados = Number(titular2.jugados) + 1;
            titular2.ganado = Number(titular2.ganado) + 1;
            titular2.elo = Number(titular2.elo) + 3;
            if (jornada.casa) {
                titular2.casa = Number(titular2.casa) + 1;
            }
            else {
                titular2.fuera = Number(titular2.fuera) + 1;
            }
            this.afdb.list("/jugador").update(titular2.key, titular2);
            jornada.resultado2 = 1;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
    };
    EditjornadamodalPage.prototype.ganatitular3 = function (jornada, titular3) {
        if (jornada.resultado3 == 1) {
            titular3.jugados = Number(titular3.jugados) - 1;
            titular3.ganado = Number(titular3.ganado) - 1;
            titular3.elo = Number(titular3.elo) - 3;
            if (jornada.casa) {
                titular3.casa = Number(titular3.casa) - 1;
            }
            else {
                titular3.fuera = Number(titular3.fuera) - 1;
            }
            this.afdb.list("/jugador").update(titular3.key, titular3);
            jornada.resultado3 = 0;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
        else {
            titular3.jugados = Number(titular3.jugados) + 1;
            titular3.ganado = Number(titular3.ganado) + 1;
            titular3.elo = Number(titular3.elo) + 3;
            if (jornada.casa) {
                titular3.casa = Number(titular3.casa) + 1;
            }
            else {
                titular3.fuera = Number(titular3.fuera) + 1;
            }
            this.afdb.list("/jugador").update(titular3.key, titular3);
            jornada.resultado3 = 1;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
    };
    EditjornadamodalPage.prototype.ganatitular4 = function (jornada, titular4) {
        if (jornada.resultado4 == 1) {
            titular4.jugados = Number(titular4.jugados) - 1;
            titular4.ganado = Number(titular4.ganado) - 1;
            titular4.elo = Number(titular4.elo) - 3;
            if (jornada.casa) {
                titular4.casa = Number(titular4.casa) - 1;
            }
            else {
                titular4.fuera = Number(titular4.fuera) - 1;
            }
            this.afdb.list("/jugador").update(titular4.key, titular4);
            jornada.resultado4 = 0;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
        else {
            titular4.jugados = Number(titular4.jugados) + 1;
            titular4.ganado = Number(titular4.ganado) + 1;
            titular4.elo = Number(titular4.elo) + 3;
            if (jornada.casa) {
                titular4.casa = Number(titular4.casa) + 1;
            }
            else {
                titular4.fuera = Number(titular4.fuera) + 1;
            }
            this.afdb.list("/jugador").update(titular4.key, titular4);
            jornada.resultado4 = 1;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
    };
    EditjornadamodalPage.prototype.ganatitular5 = function (jornada, titular5) {
        if (jornada.resultado5 == 1) {
            titular5.jugados = Number(titular5.jugados) - 1;
            titular5.ganado = Number(titular5.ganado) - 1;
            titular5.elo = Number(titular5.elo) - 3;
            if (jornada.casa) {
                titular5.casa = Number(titular5.casa) - 1;
            }
            else {
                titular5.fuera = Number(titular5.fuera) - 1;
            }
            this.afdb.list("/jugador").update(titular5.key, titular5);
            jornada.resultado5 = 0;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
        else {
            titular5.jugados = Number(titular5.jugados) + 1;
            titular5.ganado = Number(titular5.ganado) + 1;
            titular5.elo = Number(titular5.elo) + 3;
            if (jornada.casa) {
                titular5.casa = Number(titular5.casa) + 1;
            }
            else {
                titular5.fuera = Number(titular5.fuera) + 1;
            }
            this.afdb.list("/jugador").update(titular5.key, titular5);
            jornada.resultado5 = 1;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
    };
    EditjornadamodalPage.prototype.empatatitular1 = function (jornada, titular1) {
        if (jornada.resultado1 == 2) {
            titular1.jugados = Number(titular1.jugados) - 1;
            titular1.empate = Number(titular1.empate) - 1;
            titular1.elo = Number(titular1.elo) - 1;
            if (jornada.casa) {
                titular1.casa = Number(titular1.casa) - 1;
            }
            else {
                titular1.fuera = Number(titular1.fuera) - 1;
            }
            this.afdb.list("/jugador").update(titular1.key, titular1);
            jornada.resultado1 = 0;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
        else {
            titular1.jugados = Number(titular1.jugados) + 1;
            titular1.empate = Number(titular1.empate) + 1;
            titular1.elo = Number(titular1.elo) + 1;
            if (jornada.casa) {
                titular1.casa = Number(titular1.casa) + 1;
            }
            else {
                titular1.fuera = Number(titular1.fuera) + 1;
            }
            this.afdb.list("/jugador").update(titular1.key, titular1);
            jornada.resultado1 = 2;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
    };
    EditjornadamodalPage.prototype.empatatitular2 = function (jornada, titular2) {
        if (jornada.resultado2 == 2) {
            titular2.jugados = Number(titular2.jugados) - 1;
            titular2.empate = Number(titular2.empate) - 1;
            titular2.elo = Number(titular2.elo) - 1;
            if (jornada.casa) {
                titular2.casa = Number(titular2.casa) - 1;
            }
            else {
                titular2.fuera = Number(titular2.fuera) - 1;
            }
            this.afdb.list("/jugador").update(titular2.key, titular2);
            jornada.resultado2 = 0;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
        else {
            titular2.jugados = Number(titular2.jugados) + 1;
            titular2.empate = Number(titular2.empate) + 1;
            titular2.elo = Number(titular2.elo) + 1;
            if (jornada.casa) {
                titular2.casa = Number(titular2.casa) + 1;
            }
            else {
                titular2.fuera = Number(titular2.fuera) + 1;
            }
            this.afdb.list("/jugador").update(titular2.key, titular2);
            jornada.resultado2 = 2;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
    };
    EditjornadamodalPage.prototype.empatatitular3 = function (jornada, titular3) {
        if (jornada.resultado3 == 2) {
            titular3.jugados = Number(titular3.jugados) - 1;
            titular3.empate = Number(titular3.empate) - 1;
            titular3.elo = Number(titular3.elo) - 1;
            if (jornada.casa) {
                titular3.casa = Number(titular3.casa) - 1;
            }
            else {
                titular3.fuera = Number(titular3.fuera) - 1;
            }
            this.afdb.list("/jugador").update(titular3.key, titular3);
            jornada.resultado3 = 0;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
        else {
            titular3.jugados = Number(titular3.jugados) + 1;
            titular3.empate = Number(titular3.empate) + 1;
            titular3.elo = Number(titular3.elo) + 1;
            if (jornada.casa) {
                titular3.casa = Number(titular3.casa) + 1;
            }
            else {
                titular3.fuera = Number(titular3.fuera) + 1;
            }
            this.afdb.list("/jugador").update(titular3.key, titular3);
            jornada.resultado3 = 2;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
    };
    EditjornadamodalPage.prototype.empatatitular4 = function (jornada, titular4) {
        if (jornada.resultado4 == 2) {
            titular4.jugados = Number(titular4.jugados) - 1;
            titular4.empate = Number(titular4.empate) - 1;
            titular4.elo = Number(titular4.elo) - 1;
            if (jornada.casa) {
                titular4.casa = Number(titular4.casa) - 1;
            }
            else {
                titular4.fuera = Number(titular4.fuera) - 1;
            }
            this.afdb.list("/jugador").update(titular4.key, titular4);
            jornada.resultado4 = 0;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
        else {
            titular4.jugados = Number(titular4.jugados) + 1;
            titular4.empate = Number(titular4.empate) + 1;
            titular4.elo = Number(titular4.elo) + 1;
            if (jornada.casa) {
                titular4.casa = Number(titular4.casa) + 1;
            }
            else {
                titular4.fuera = Number(titular4.fuera) + 1;
            }
            this.afdb.list("/jugador").update(titular4.key, titular4);
            jornada.resultado4 = 2;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
    };
    EditjornadamodalPage.prototype.empatatitular5 = function (jornada, titular5) {
        if (jornada.resultado5 == 2) {
            titular5.jugados = Number(titular5.jugados) - 1;
            titular5.empate = Number(titular5.empate) - 1;
            titular5.elo = Number(titular5.elo) - 1;
            if (jornada.casa) {
                titular5.casa = Number(titular5.casa) - 1;
            }
            else {
                titular5.fuera = Number(titular5.fuera) - 1;
            }
            this.afdb.list("/jugador").update(titular5.key, titular5);
            jornada.resultado5 = 0;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
        else {
            titular5.jugados = Number(titular5.jugados) + 1;
            titular5.empate = Number(titular5.empatado) + 1;
            titular5.elo = Number(titular5.elo) + 1;
            if (jornada.casa) {
                titular5.casa = Number(titular5.casa) + 1;
            }
            else {
                titular5.fuera = Number(titular5.fuera) + 1;
            }
            this.afdb.list("/jugador").update(titular5.key, titular5);
            jornada.resultado5 = 2;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
    };
    EditjornadamodalPage.prototype.pierdetitular1 = function (jornada, titular1) {
        if (jornada.resultado1 == 3) {
            titular1.jugados = Number(titular1.jugados) - 1;
            titular1.perdidos = Number(titular1.perdidos) - 1;
            if (jornada.casa) {
                titular1.casa = Number(titular1.casa) - 1;
            }
            else {
                titular1.fuera = Number(titular1.fuera) - 1;
            }
            this.afdb.list("/jugador").update(titular1.key, titular1);
            jornada.resultado1 = 0;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
        else {
            titular1.jugados = Number(titular1.jugados) + 1;
            titular1.perdidos = Number(titular1.perdidos) + 1;
            if (jornada.casa) {
                titular1.casa = Number(titular1.casa) + 1;
            }
            else {
                titular1.fuera = Number(titular1.fuera) + 1;
            }
            this.afdb.list("/jugador").update(titular1.key, titular1);
            jornada.resultado1 = 3;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
    };
    EditjornadamodalPage.prototype.pierdetitular2 = function (jornada, titular2) {
        if (jornada.resultado2 == 3) {
            titular2.jugados = Number(titular2.jugados) - 1;
            titular2.perdidos = Number(titular2.perdidos) - 1;
            if (jornada.casa) {
                titular2.casa = Number(titular2.casa) - 1;
            }
            else {
                titular2.fuera = Number(titular2.fuera) - 1;
            }
            this.afdb.list("/jugador").update(titular2.key, titular2);
            jornada.resultado2 = 0;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
        else {
            titular2.jugados = Number(titular2.jugados) + 1;
            titular2.perdidos = Number(titular2.perdidos) + 1;
            if (jornada.casa) {
                titular2.casa = Number(titular2.casa) + 1;
            }
            else {
                titular2.fuera = Number(titular2.fuera) + 1;
            }
            this.afdb.list("/jugador").update(titular2.key, titular2);
            jornada.resultado2 = 3;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
    };
    EditjornadamodalPage.prototype.pierdetitular3 = function (jornada, titular3) {
        if (jornada.resultado3 == 3) {
            titular3.jugados = Number(titular3.jugados) - 1;
            titular3.perdidos = Number(titular3.perdidos) - 1;
            if (jornada.casa) {
                titular3.casa = Number(titular3.casa) - 1;
            }
            else {
                titular3.fuera = Number(titular3.fuera) - 1;
            }
            this.afdb.list("/jugador").update(titular3.key, titular3);
            jornada.resultado3 = 0;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
        else {
            titular3.jugados = Number(titular3.jugados) + 1;
            titular3.perdidos = Number(titular3.perdidos) + 1;
            if (jornada.casa) {
                titular3.casa = Number(titular3.casa) + 1;
            }
            else {
                titular3.fuera = Number(titular3.fuera) + 1;
            }
            this.afdb.list("/jugador").update(titular3.key, titular3);
            jornada.resultado3 = 3;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
    };
    EditjornadamodalPage.prototype.pierdetitular4 = function (jornada, titular4) {
        if (jornada.resultado4 == 3) {
            titular4.jugados = Number(titular4.jugados) - 1;
            titular4.perdidos = Number(titular4.perdidos) - 1;
            if (jornada.casa) {
                titular4.casa = Number(titular4.casa) - 1;
            }
            else {
                titular4.fuera = Number(titular4.fuera) - 1;
            }
            this.afdb.list("/jugador").update(titular4.key, titular4);
            jornada.resultado4 = 0;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
        else {
            titular4.jugados = Number(titular4.jugados) + 1;
            titular4.perdidos = Number(titular4.perdidos) + 1;
            if (jornada.casa) {
                titular4.casa = Number(titular4.casa) + 1;
            }
            else {
                titular4.fuera = Number(titular4.fuera) + 1;
            }
            this.afdb.list("/jugador").update(titular4.key, titular4);
            jornada.resultado4 = 3;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
    };
    EditjornadamodalPage.prototype.pierdetitular5 = function (jornada, titular5) {
        if (jornada.resultado5 == 3) {
            titular5.jugados = Number(titular5.jugados) - 1;
            titular5.perdidos = Number(titular5.perdidos) - 1;
            if (jornada.casa) {
                titular5.casa = Number(titular5.casa) - 1;
            }
            else {
                titular5.fuera = Number(titular5.fuera) - 1;
            }
            this.afdb.list("/jugador").update(titular5.key, titular5);
            jornada.resultado5 = 0;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
        else {
            titular5.jugados = Number(titular5.jugados) + 1;
            titular5.perdidos = Number(titular5.perdidos) + 1;
            if (jornada.casa) {
                titular5.casa = Number(titular5.casa) + 1;
            }
            else {
                titular5.fuera = Number(titular5.fuera) + 1;
            }
            this.afdb.list("/jugador").update(titular5.key, titular5);
            jornada.resultado5 = 3;
            this.afdb.list("/jornada").update(jornada.key, jornada);
        }
    };
    EditjornadamodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editjornadamodal',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\editjornadamodal\editjornadamodal.html"*/'<!--\n\n  Generated template for the EditjornadamodalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n   <ion-navbar color="dark"> \n\n    <ion-title>Editar {{ jornada.titulo }} </ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<ion-list>\n\n    \n\n      <p><span style="font-weight: bold;"> Nombre: </span> {{ jornada.titulo }}</p>\n\n      <p><span style="font-weight: bold;"> Fecha: </span> {{ jornada.fecha }}</p>\n\n      <span *ngFor="let equip of equipo | async">\n\n        <p><span style="font-weight: bold;"> Equipo: </span> {{ equip.nombre }}</p>\n\n      </span>\n\n\n\n      <span *ngFor="let titularUno of titular1 | async">\n\n        <p>\n\n          <span style="font-weight: bold;"> Titular 1: </span> {{ titularUno.nombre }},\n\n          <span *ngIf="jornada.resultado1 == 0">\n\n            G &ensp;<ion-checkbox (click)="ganatitular1(jornada, titularUno)"></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox (click)="empatatitular1(jornada, titularUno)"></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox (click)="pierdetitular1(jornada, titularUno)"></ion-checkbox>\n\n          </span>\n\n\n\n          <span *ngIf="jornada.resultado1 == 1">\n\n            G &ensp;<ion-checkbox checked = "true" (click)="ganatitular1(jornada, titularUno)"></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox disabled=\'true\'(click)="empatatitular1(jornada, titularUno)"></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox disabled=\'true\' (click)="pierdetitular1(jornada, titularUno)"></ion-checkbox>\n\n          </span>\n\n\n\n          <span *ngIf="jornada.resultado1 == 2">\n\n            G &ensp;<ion-checkbox disabled=\'true\' (click)="ganatitular1(jornada, titularUno)"></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox checked = "true"(click)="empatatitular1(jornada, titularUno)"></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox disabled=\'true\' (click)="pierdetitular1(jornada, titularUno)"></ion-checkbox>\n\n          </span>\n\n\n\n          <span *ngIf="jornada.resultado1 == 3">\n\n            G &ensp;<ion-checkbox  disabled=\'true\' (click)="ganatitular1(jornada, titularUno)"></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox disabled=\'true\'(click)="empatatitular1(jornada, titularUno)"></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox checked = "true" (click)="pierdetitular1(jornada, titularUno)"></ion-checkbox>\n\n          </span>\n\n        </p>\n\n      </span>\n\n\n\n      <span *ngFor="let titularDos of titular2 | async">\n\n         <p>\n\n          <span style="font-weight: bold;"> Titular 2: </span> {{ titularDos.nombre }},\n\n          <span *ngIf="jornada.resultado2 == 0">\n\n            G &ensp;<ion-checkbox (click)="ganatitular2(jornada, titularDos)"></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox (click)="empatatitular2(jornada, titularDos)"></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox (click)="pierdetitular2(jornada, titularDos)"></ion-checkbox>\n\n          </span>\n\n\n\n          <span *ngIf="jornada.resultado2 == 1">\n\n            G &ensp;<ion-checkbox checked = "true" (click)="ganatitular2(jornada, titularDos)"></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox disabled=\'true\'(click)="empatatitular2(jornada, titularDos)"></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox disabled=\'true\' (click)="pierdetitular2(jornada, titularDos)"></ion-checkbox>\n\n          </span>\n\n\n\n          <span *ngIf="jornada.resultado2 == 2">\n\n            G &ensp;<ion-checkbox disabled=\'true\' (click)="ganatitular2(jornada, titularDos)"></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox checked = "true"(click)="empatatitular2(jornada, titularDos)"></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox disabled=\'true\' (click)="pierdetitular2(jornada, titularDos)"></ion-checkbox>\n\n          </span>\n\n\n\n          <span *ngIf="jornada.resultado2 == 3">\n\n            G &ensp;<ion-checkbox  disabled=\'true\' (click)="ganatitular2(jornada, titularDos)"></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox disabled=\'true\'(click)="empatatitular2(jornada, titularDos)"></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox checked = "true" (click)="pierdetitular2(jornada, titularDos)"></ion-checkbox>\n\n          </span>\n\n        </p>\n\n      </span>\n\n      \n\n      <span *ngFor="let titularTres of titular3 | async">\n\n           <p>\n\n          <span style="font-weight: bold;"> Titular 2: </span> {{ titularTres.nombre }},\n\n          <span *ngIf="jornada.resultado3 == 0">\n\n            G &ensp;<ion-checkbox (click)="ganatitular3(jornada, titularTres)"></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox (click)="empatatitular3(jornada, titularTres)"></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox (click)="pierdetitular3(jornada, titularTres)"></ion-checkbox>\n\n          </span>\n\n\n\n          <span *ngIf="jornada.resultado3 == 1">\n\n            G &ensp;<ion-checkbox checked = "true" (click)="ganatitular3(jornada, titularTres)"></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox disabled=\'true\'(click)="empatatitular3(jornada, titularTres)"></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox disabled=\'true\' (click)="pierdetitular3(jornada, titularTres)"></ion-checkbox>\n\n          </span>\n\n\n\n          <span *ngIf="jornada.resultado3 == 2">\n\n            G &ensp;<ion-checkbox disabled=\'true\' (click)="ganatitular3(jornada, titularTres)"></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox checked = "true"(click)="empatatitular3(jornada, titularTres)"></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox disabled=\'true\' (click)="pierdetitular3(jornada, titularTres)"></ion-checkbox>\n\n          </span>\n\n\n\n          <span *ngIf="jornada.resultado3 == 3">\n\n            G &ensp;<ion-checkbox  disabled=\'true\' (click)="ganatitular3(jornada, titularTres)"></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox disabled=\'true\'(click)="empatatitular3(jornada, titularTres)"></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox checked = "true" (click)="pierdetitular3(jornada, titularTres)"></ion-checkbox>\n\n          </span>\n\n        </p>\n\n      </span>\n\n\n\n      <span *ngFor="let titularCuatro of titular4 | async">\n\n         <p>\n\n          <span style="font-weight: bold;"> Titular 4: </span> {{ titularCuatro.nombre }},\n\n          <span *ngIf="jornada.resultado4 == 0">\n\n            G &ensp;<ion-checkbox (click)="ganatitular4(jornada, titularCuatro)"></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox (click)="empatatitular4(jornada, titularCuatro)"></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox (click)="pierdetitular4(jornada, titularCuatro)"></ion-checkbox>\n\n          </span>\n\n\n\n          <span *ngIf="jornada.resultado4 == 1">\n\n            G &ensp;<ion-checkbox checked = "true" (click)="ganatitular4(jornada, titularCuatro)"></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox disabled=\'true\'(click)="empatatitular4(jornada, titularCuatro)"></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox disabled=\'true\' (click)="pierdetitular4(jornada, titularCuatro)"></ion-checkbox>\n\n          </span>\n\n\n\n          <span *ngIf="jornada.resultado4 == 2">\n\n            G &ensp;<ion-checkbox disabled=\'true\' (click)="ganatitular4(jornada, titularCuatro)"></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox checked = "true"(click)="empatatitular4(jornada, titularCuatro)"></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox disabled=\'true\' (click)="pierdetitular4(jornada, titularCuatro)"></ion-checkbox>\n\n          </span>\n\n\n\n          <span *ngIf="jornada.resultado4 == 3">\n\n            G &ensp;<ion-checkbox  disabled=\'true\' (click)="ganatitular4(jornada, titularCuatro)"></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox disabled=\'true\'(click)="empatatitular4(jornada, titularCuatro)"></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox checked = "true" (click)="pierdetitular4(jornada, titularCuatro)"></ion-checkbox>\n\n          </span>\n\n        </p>\n\n      </span>\n\n\n\n      <span *ngFor="let titularCinco of titular5 | async">\n\n        <p>\n\n          <span style="font-weight: bold;"> Titular 5: </span> {{ titularCinco.nombre }},\n\n          <span *ngIf="jornada.resultado5 == 0">\n\n            G &ensp;<ion-checkbox (click)="ganatitular5(jornada, titularCinco)"></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox (click)="empatatitular5(jornada, titularCinco)"></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox (click)="pierdetitular5(jornada, titularCinco)"></ion-checkbox>\n\n          </span>\n\n\n\n          <span *ngIf="jornada.resultado5 == 1">\n\n            G &ensp;<ion-checkbox checked = "true" (click)="ganatitular5(jornada, titularCinco)"></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox disabled=\'true\'(click)="empatatitular5(jornada, titularCinco)"></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox disabled=\'true\' (click)="pierdetitular5(jornada, titularCinco)"></ion-checkbox>\n\n          </span>\n\n\n\n          <span *ngIf="jornada.resultado5 == 2">\n\n            G &ensp;<ion-checkbox disabled=\'true\' (click)="ganatitular5(jornada, titularCinco)"></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox checked = "true"(click)="empatatitular5(jornada, titularCinco)"></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox disabled=\'true\' (click)="pierdetitular5(jornada, titularCinco)"></ion-checkbox>\n\n          </span>\n\n\n\n          <span *ngIf="jornada.resultado5 == 3">\n\n            G &ensp;<ion-checkbox  disabled=\'true\' (click)="ganatitular5(jornada)"></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox disabled=\'true\'(click)="empatatitular5(jornada)"></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox checked = "true" (click)="pierdetitular5(jornada)"></ion-checkbox>\n\n          </span>\n\n        </p>\n\n      </span>\n\n    </ion-list>\n\n     <button ion-button color="dark" (click)="viewCtrl.dismiss()">Listo</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\editjornadamodal\editjornadamodal.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" && _e || Object])
    ], EditjornadamodalPage);
    return EditjornadamodalPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=editjornadamodal.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditjugadormodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(21);
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

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jugadoresmodal_jugadoresmodal__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_listajugadores_listajugadores__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_addequiposmodal_addequiposmodal__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editequipomodal_editequipomodal__ = __webpack_require__(168);
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
            selector: 'page-equipo',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\equipo\equipo.html"*/'<!--\n\n  Generated template for the EquipoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Equipos</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="mostrar_modal_anadir()" color="light">\n\n        <ion-icon name="person-add"></ion-icon>\n\n      </button>\n\n      <button ion-button (click)="signOut()" color="light">\n\n        Cerrar Sesion\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <span *ngFor="let equipo of equipos | async">\n\n         <ion-list>\n\n          <ion-item-sliding #item> \n\n            <ion-item>  \n\n              <ion-icon name="contacts" item-start></ion-icon>\n\n              <h2><b>{{equipo.nombre}}</b></h2> \n\n            </ion-item>\n\n            <ion-item-options side="right">\n\n              <button ion-button (click)="mostrar_modal(equipo)"   style="background-color: transparent; border:none">\n\n                <ion-icon name="eye" color="secondary" ></ion-icon>\n\n                Ver\n\n              </button>\n\n              <span *ngIf="rolAdmin==true">\n\n                <button ion-button (click)="mostrar_modal_editar(equipo)" style="background-color: transparent; border:none">\n\n                  <ion-icon name="build" color="primary"></ion-icon>\n\n                  Editar\n\n                </button>\n\n                <button ion-button (click)="eliminar_equipo(equipo)" style="background-color: transparent; border:none">\n\n                  <ion-icon name="trash" color="danger"></ion-icon>\n\n                  Eliminar\n\n                </button>\n\n              </span>\n\n            </ion-item-options>\n\n          </ion-item-sliding>\n\n        </ion-list>\n\n      </span>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\equipo\equipo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]])
    ], EquipoPage);
    return EquipoPage;
}());

//# sourceMappingURL=equipo.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_num_jugadores_num_jugadores__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(21);
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
            selector: 'page-jugadoresmodal',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jugadoresmodal\jugadoresmodal.html"*/'<!--\n\n  Generated template for the JugadoresmodalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Jugadores</ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list> \n\n      <span *ngFor="let jugador of equipo | async">\n\n\n\n        <ion-item ion-item detail-none *ngIf="(jugador.juega==false && (rolCapitan || rolAdmin) && Nconvocados <5 && !rolAdmin) || (jugador.juega==false && rolAdmin && Nconvocados <5)">\n\n            <ion-label>{{ jugador.nombre }}</ion-label>\n\n            <ion-checkbox item-right checked="false"  (click)="convocar(jugador)"></ion-checkbox>\n\n            <button item-right ion-button color="dark" (click)="capitan(jugador)" *ngIf="!isCapitan && rolAdmin"  style="background-color: transparent; border:none">\n\n                <ion-icon color="green" name="ribbon"></ion-icon>\n\n            </button>\n\n            <button item-right ion-button color="dark" icon-only (click)="capitan(jugador)" *ngIf="jugador.capitan && rolAdmin"  style="background-color: transparent; border:none">\n\n                <ion-icon color="danger" name="ribbon"></ion-icon>\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item ion-item detail-none *ngIf="(jugador.juega==false && rolCapitan && Nconvocados>=5 && !rolAdmin) || (jugador.juega==false && rolAdmin && Nconvocados>=5)">\n\n            <ion-label>{{ jugador.nombre }}</ion-label>\n\n            <ion-checkbox item-right checked="false" disabled=\'true\' (click)="convocar(jugador)"></ion-checkbox>\n\n            <button item-right ion-button color="dark" (click)="capitan(jugador)" *ngIf="!isCapitan && rolAdmin"  style="background-color: transparent; border:none">\n\n                <ion-icon color="green"  name="ribbon"></ion-icon>\n\n            </button>\n\n            <button item-right ion-button color="dark" icon-only (click)="capitan(jugador)" *ngIf="jugador.capitan && rolAdmin" style="background-color: transparent; border:none">\n\n                <ion-icon color="danger" name="ribbon"></ion-icon>\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item ion-item detail-none *ngIf="jugador.juega==false && !rolCapitan && !rolAdmin" > \n\n            <ion-label>{{ jugador.nombre }}</ion-label>\n\n            <ion-checkbox item-right  checked="false" disabled=\'true\' (click)="convocar(jugador)"></ion-checkbox>\n\n            <button item-right ion-button color="dark" (click)="capitan(jugador)" *ngIf="!isCapitan && rolAdmin "  style="background-color: transparent; border:none">\n\n                <ion-icon color="green" name="ribbon"></ion-icon>\n\n            </button>\n\n            <button item-right ion-button icon-only (click)="capitan(jugador)" *ngIf="jugador.capitan && rolAdmin"  style="background-color: transparent; border:none">\n\n                <ion-icon color="danger" name="ribbon"></ion-icon>\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item ion-item detail-none *ngIf="(jugador.juega==true && rolCapitan && !rolAdmin) || (jugador.juega==true && rolAdmin)">\n\n          <ion-label>{{ jugador.nombre }}</ion-label>\n\n          <ion-checkbox item-right checked="true" (click)="convocar(jugador)"></ion-checkbox>\n\n          <button item-right ion-button color="dark" (click)="capitan(jugador)" *ngIf="!isCapitan && rolAdmin"  style="background-color: transparent; border:none">\n\n                <ion-icon color="green" name="ribbon"></ion-icon>\n\n          </button>\n\n          <button item-right ion-button icon-only (click)="capitan(jugador)" *ngIf="jugador.capitan && rolAdmin"  style="background-color: transparent; border:none">\n\n                <ion-icon color="danger" name="ribbon"></ion-icon>\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item ion-item detail-none *ngIf="(jugador.juega==true && !rolCapitan && !rolAdmin )">\n\n          <ion-label>{{ jugador.nombre }}</ion-label>\n\n          <ion-checkbox item-right checked="true"  disabled=\'true\' (click)="convocar(jugador)"></ion-checkbox>\n\n          <button item-right ion-button icon-only color="dark" (click)="capitan(jugador)" *ngIf="!isCapitan && rolAdmin"  style="background-color: transparent; border:none">\n\n                <ion-icon color="green" name="ribbon"></ion-icon>\n\n          </button>\n\n          <button item-right ion-button icon-only (click)="capitan(jugador)" *ngIf="jugador.capitan && rolAdmin"  style="background-color: transparent; border:none">\n\n                <ion-icon color="danger" name="ribbon"></ion-icon>\n\n          </button>\n\n\n\n        </ion-item>\n\n      </span>\n\n    </ion-list>\n\n    <button ion-button color="dark" (click)="viewCtrl.dismiss()">Listo</button>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jugadoresmodal\jugadoresmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_num_jugadores_num_jugadores__["a" /* NumJugadoresProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]])
    ], JugadoresmodalPage);
    return JugadoresmodalPage;
}());

//# sourceMappingURL=jugadoresmodal.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jornadasmodal_jornadasmodal__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calendariomodal_calendariomodal__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_listajugadores_listajugadores__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__editjornadamodal_editjornadamodal__ = __webpack_require__(169);
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
    JornadasPage.prototype.mostrar_modal_editar = function (jornada) {
        var equipo = this.afdb.list('/equipo', function (ref) { return ref.orderByKey().equalTo(jornada.equipo); }).valueChanges();
        var titular1 = this.afdb.list('/jugador', function (ref) { return ref.orderByChild('email').equalTo(jornada.titular1); }).valueChanges();
        var titular2 = this.afdb.list('/jugador', function (ref) { return ref.orderByChild('email').equalTo(jornada.titular2); }).valueChanges();
        var titular3 = this.afdb.list('/jugador', function (ref) { return ref.orderByChild('email').equalTo(jornada.titular3); }).valueChanges();
        var titular4 = this.afdb.list('/jugador', function (ref) { return ref.orderByChild('email').equalTo(jornada.titular4); }).valueChanges();
        var titular5 = this.afdb.list('/jugador', function (ref) { return ref.orderByChild('email').equalTo(jornada.titular5); }).valueChanges();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__editjornadamodal_editjornadamodal__["a" /* EditjornadamodalPage */], { jornada: jornada, equipo: equipo, titular1: titular1, titular2: titular2, titular3: titular3, titular4: titular4, titular5: titular5 });
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
            selector: 'page-jornadas',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jornadas\jornadas.html"*/'<!--\n\n  Generated template for the JornadasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Jornadas</ion-title>\n\n    <ion-buttons end>\n\n    <button end ion-button icon-only (click)="mostrar_modal_add()" color="white">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n      <button ion-button (click)="signOut()" color="light">\n\n        Cerrar Sesion\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <span *ngFor="let jornada of jornadas | async">\n\n      <ion-list >\n\n        <ion-item-sliding #item>\n\n            <ion-item>  \n\n              <ion-icon name="calendar" item-start></ion-icon>\n\n              <h2><b>{{jornada.titulo}}</b></h2> \n\n            </ion-item>\n\n          <ion-item-options side="right">\n\n            <button ion-button (click)="mostrar_modal(jornada)" style="background-color: transparent; border:none">\n\n              <ion-icon color="secondary" name="eye" ></ion-icon>\n\n              Ver\n\n            </button>\n\n            <span *ngIf="rolAdmin==true">\n\n              <button ion-button (click)="mostrar_modal_editar(jornada)" style="background-color: transparent; border:none">\n\n                <ion-icon color="primary" name="build" ></ion-icon>\n\n                Editar\n\n              </button>\n\n              <button ion-button (click)="eliminar(jornada)" style="background-color: transparent; border:none" >\n\n                <ion-icon name="trash" color="danger" ></ion-icon>\n\n                Eliminar\n\n              </button>\n\n            </span>\n\n          </ion-item-options>\n\n        </ion-item-sliding>\n\n        </ion-list>\n\n      </span>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jornadas\jornadas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_3__providers_listajornadas_listajornadas__["a" /* ListajornadasProvider */]])
    ], JornadasPage);
    return JornadasPage;
}());

//# sourceMappingURL=jornadas.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JornadasmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(21);
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
    };
    JornadasmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jornadasmodal',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jornadasmodal\jornadasmodal.html"*/'<!--\n\n  Generated template for the JornadasmodalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark"> \n\n    <ion-title>Datos de {{ jornada.titulo }} </ion-title>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n\n\n\n\n    <ion-list>\n\n    \n\n      <p><span style="font-weight: bold;"> Nombre: </span> {{ jornada.titulo }}</p>\n\n      <p><span style="font-weight: bold;"> Fecha: </span> {{ jornada.fecha }}</p>\n\n      <span *ngFor="let equip of equipo | async">\n\n        <p><span style="font-weight: bold;"> Equipo: </span> {{ equip.nombre }}</p>\n\n      </span>\n\n\n\n      <span *ngFor="let titularUno of titular1 | async">\n\n        <p>\n\n          <span style="font-weight: bold;"> Titular 1: </span> {{ titularUno.nombre }},\n\n          <span *ngIf="jornada.resultado1 == 0">Sin asignar</span>\n\n          <span color="secondary" *ngIf="jornada.resultado1 == 1">Victoria</span>\n\n          <span color="primary" *ngIf="jornada.resultado1 == 2">Empate</span>\n\n          <span color="danger" *ngIf="jornada.resultado1 == 3">Derrota</span>\n\n        </p>\n\n      </span>\n\n\n\n      <span *ngFor="let titularDos of titular2 | async">\n\n        <p>\n\n          <span style="font-weight: bold;"> Titular 2: </span> {{ titularDos.nombre }},\n\n          <span *ngIf="jornada.resultado2 == 0">Sin asignar</span>\n\n          <span color="secondary" *ngIf="jornada.resultado2 == 1">Victoria</span>\n\n          <span color="primary" *ngIf="jornada.resultado2 == 2">Empate</span>\n\n          <span color="danger" *ngIf="jornada.resultado2 == 3">Derrota</span>\n\n        </p>\n\n      </span>\n\n      \n\n      <span *ngFor="let titularTres of titular3 | async">\n\n        <p>\n\n          <span style="font-weight: bold;"> Titular 3: </span> {{ titularTres.nombre }},\n\n          <span *ngIf="jornada.resultado3 == 0">Sin asignar</span>\n\n          <span color="secondary" *ngIf="jornada.resultado3 == 1">Victoria</span>\n\n          <span color="primary" *ngIf="jornada.resultado3 == 2">Empate</span>\n\n          <span color="danger" *ngIf="jornada.resultado3 == 3">Derrota</span>\n\n        </p>\n\n      </span>\n\n\n\n      <span *ngFor="let titularCuatro of titular4 | async">\n\n        <p>\n\n          <span style="font-weight: bold;"> Titular 4: </span> {{ titularCuatro.nombre }},\n\n          <span *ngIf="jornada.resultado4 == 0">Sin asignar</span>\n\n          <span color="secondary" *ngIf="jornada.resultado4 == 1">Victoria</span>\n\n          <span color="primary" *ngIf="jornada.resultado4 == 2">Empate</span>\n\n          <span color="danger" *ngIf="jornada.resultado4 == 3">Derrota</span>\n\n        </p>\n\n      </span>\n\n\n\n      <span *ngFor="let titularCinco of titular5 | async">\n\n        <p>\n\n          <span style="font-weight: bold;"> Titular 5: </span> {{ titularCinco.nombre }},\n\n          <span *ngIf="jornada.resultado5 == 0">Sin asignar</span>\n\n          <span color="secondary" *ngIf="jornada.resultado5 == 1">Victoria</span>\n\n          <span color="primary" *ngIf="jornada.resultado5 == 2">Empate</span>\n\n          <span color="danger" *ngIf="jornada.resultado5 == 3">Derrota</span>\n\n        </p>\n\n      </span>\n\n      <!--\n\n      <p>\n\n        <ion-label> \n\n          <span style="font-weight: bold;">    \n\n          Titular 1:\n\n          </span>\n\n          {{ nombre1 }}\n\n          &ensp;&ensp;&ensp;&ensp;\n\n          <span *ngIf="jornada.n_titular1==0">\n\n            G &ensp;<ion-checkbox (click)="gana(jornada.titular1,1)"></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox (click)="empata(jornada.titular1,1)"></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox (click)="pierde(jornada.titular1,1)"></ion-checkbox>\n\n          </span>\n\n          <span *ngIf="jornada.n_titular1==1">\n\n            G &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n          </span>  \n\n          <span *ngIf="jornada.n_titular1==2">\n\n            G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n          </span>  \n\n          <span *ngIf="jornada.n_titular1==3">\n\n            G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n            E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n            P &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>\n\n          </span> \n\n        </ion-label>\n\n      </p>\n\n      <p>\n\n          <ion-label> \n\n            <span style="font-weight: bold;">    \n\n            Titular 2:\n\n            </span>\n\n            {{ nombre2  }}\n\n            &ensp;&ensp;&ensp;&ensp;\n\n            <span *ngIf="jornada.n_titular2==0">\n\n                G &ensp;<ion-checkbox (click)="gana(jornada.titular2,2)"></ion-checkbox>&ensp;&ensp;\n\n                E &ensp;<ion-checkbox (click)="empata(jornada.titular2,2)"></ion-checkbox>&ensp;&ensp;\n\n                P &ensp;<ion-checkbox (click)="pierde(jornada.titular2,2)"></ion-checkbox>\n\n              </span>\n\n              <span *ngIf="jornada.n_titular2==1">\n\n                G &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n              </span>  \n\n              <span *ngIf="jornada.n_titular2==2">\n\n                G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                E &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n              </span>  \n\n              <span *ngIf="jornada.n_titular2==3">\n\n                G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                P &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>\n\n              </span>  \n\n          </ion-label>\n\n        </p>\n\n        <p>\n\n            <ion-label> \n\n              <span style="font-weight: bold;">    \n\n              Titular 3:\n\n              </span>\n\n              {{ nombre3  }}\n\n              &ensp;&ensp;&ensp;&ensp;\n\n              <span *ngIf="jornada.n_titular3==0">\n\n                  G &ensp;<ion-checkbox (click)="gana(jornada.titular3,3)"></ion-checkbox>&ensp;&ensp;\n\n                  E &ensp;<ion-checkbox (click)="empata(jornada.titular3,3)"></ion-checkbox>&ensp;&ensp;\n\n                  P &ensp;<ion-checkbox (click)="pierde(jornada.titular3,3)"></ion-checkbox>\n\n                </span>\n\n                <span *ngIf="jornada.n_titular3==1">\n\n                  G &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                  E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                  P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n                </span>  \n\n                <span *ngIf="jornada.n_titular3==2">\n\n                  G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                  E &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                  P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n                </span>  \n\n                <span *ngIf="jornada.n_titular3==3">\n\n                  G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                  E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                  P &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>\n\n                </span> \n\n            </ion-label>\n\n          </p>\n\n          <p>\n\n              <ion-label> \n\n                <span style="font-weight: bold;">    \n\n                Titular 4:\n\n                </span>\n\n                {{ nombre4 }}\n\n                &ensp;&ensp;&ensp;&ensp;\n\n                <span *ngIf="jornada.n_titular4==0">\n\n                    G &ensp;<ion-checkbox (click)="gana(jornada.titular4,4)"></ion-checkbox>&ensp;&ensp;\n\n                    E &ensp;<ion-checkbox (click)="empata(jornada.titular4,4)"></ion-checkbox>&ensp;&ensp;\n\n                    P &ensp;<ion-checkbox (click)="pierde(jornada.titular4,4)"></ion-checkbox>\n\n                  </span>\n\n                  <span *ngIf="jornada.n_titular4==1">\n\n                    G &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                    E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                    P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n                  </span>  \n\n                  <span *ngIf="jornada.n_titular4==2">\n\n                    G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                    E &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                    P &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>\n\n                  </span>  \n\n                  <span *ngIf="jornada.n_titular4==3">\n\n                    G &ensp;<ion-checkbox  disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                    E &ensp;<ion-checkbox disabled=\'true\'></ion-checkbox>&ensp;&ensp;\n\n                    P &ensp;<ion-checkbox checked = "true" disabled=\'true\'></ion-checkbox>\n\n                  </span>  \n\n              </ion-label>\n\n            </p>\n\n            -->\n\n    </ion-list>\n\n    <button ion-button color="dark" (click)="viewCtrl.dismiss()">Listo</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jornadasmodal\jornadasmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], JornadasmodalPage);
    return JornadasmodalPage;
}());

//# sourceMappingURL=jornadasmodal.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datosjugadormodal_datosjugadormodal__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editjugadormodal_editjugadormodal__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_listajugadores_listajugadores__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(21);
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
            selector: 'page-jugadores',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jugadores\jugadores.html"*/'<!--\n\n  Generated template for the JugadoresPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Jugadores</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="signOut()" color="light">\n\n        Cerrar Sesion\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n       <span *ngFor="let jugador of jugadores | async ">\n\n          <ion-list>\n\n          <ion-item-sliding #item>\n\n            <ion-item>\n\n              <ion-icon name="contact" item-start></ion-icon>\n\n              <h2><b>{{jugador.nombre}} - {{jugador.elo}}</b></h2> \n\n            </ion-item>\n\n            <ion-item-options side="right">\n\n              <button ion-button (click)="mostrar_modal(jugador)" style="background-color: transparent; border:none">\n\n                <ion-icon name="eye" color="secondary"></ion-icon>\n\n                Ver\n\n              </button>\n\n              <span *ngIf="rolAdmin==true">\n\n              <button ion-button (click)="mostrar_modal_editar(jugador)" style="background-color: transparent; border:none">\n\n                <ion-icon name="build" color="primary"></ion-icon>\n\n                Editar\n\n              </button>\n\n              <button ion-button (click)="eliminar_jugador(jugador)" style="background-color: transparent; border:none">\n\n                <ion-icon name="trash" color="danger"></ion-icon>\n\n                Eliminar\n\n              </button>\n\n              </span>\n\n            </ion-item-options>\n\n          </ion-item-sliding>\n\n        </ion-list>\n\n      </span>\n\n  </ion-list> \n\n   <ion-refresher (ionRefresh)="recargar_jugadores($event)">\n\n <ion-refresher-content></ion-refresher-content>\n\n </ion-refresher>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\jugadores\jugadores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_5__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]])
    ], JugadoresPage);
    return JugadoresPage;
}());

//# sourceMappingURL=jugadores.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(21);
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

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(89);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\login\login.html"*/'<ion-header>\n\n	<ion-navbar color="dark">\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>Inciar Sesión</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-image">\n\n	<div style="background-color:white;">\n\n		<form (ngSubmit)="login()" [formGroup]="loginForm">\n\n			<ion-list inset>\n\n				<label><b>Email</b></label>\n\n				<ion-item [ngClass]="{ invalid: emailErrors.hasError(\'*\', [\'touched\', \'dirty\']) }">\n\n					<ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n\n				</ion-item>\n\n\n\n				<div ngxErrors="email" #emailErrors="ngxErrors">\n\n					<div [ngxError]="[\'email\', \'required\']" [when]="[\'touched\', \'dirty\']"><span style="color:red">Debes introducir un email válido</span></div>\n\n				</div>\n\n				<br>\n\n				<label><b>Contraseña</b></label>\n\n				<ion-item [ngClass]="{ invalid: passwordErrors.hasError(\'*\', [\'touched\']) }">\n\n					<ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n\n				</ion-item>\n\n\n\n				<div ngxErrors="password" #passwordErrors="ngxErrors">\n\n					<div [ngxError]="[\'minlength\', \'required\']" [when]="[\'touched\']"><span style="color:red">La contraseña debe tener al menos 5 caracteres</span></div>\n\n				</div>\n\n\n\n			</ion-list>\n\n\n\n			<div padding-horizontal>\n\n				<div class="form-error">{{loginError}}</div>\n\n\n\n				<button ion-button full type="submit" [disabled]="!loginForm.valid">Entrar</button>\n\n			</div>\n\n			<div padding-horizontal>\n\n				<button ion-button full (click)="signup()" style="background-color:green">\n\n					Registrarse\n\n				</button>\n\n			</div>\n\n		</form>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\javi2\Desktop\2 DAM\ionic\gtAjedrez\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 210:
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
webpackEmptyAsyncContext.id = 210;

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addequiposmodal/addequiposmodal.module": [
		666,
		15
	],
	"../pages/calendario/calendario.module": [
		669,
		14
	],
	"../pages/calendariomodal/calendariomodal.module": [
		667,
		13
	],
	"../pages/capitanes/capitanes.module": [
		668,
		12
	],
	"../pages/capitanesmodal/capitanesmodal.module": [
		674,
		11
	],
	"../pages/datosjugadormodal/datosjugadormodal.module": [
		670,
		10
	],
	"../pages/editequipomodal/editequipomodal.module": [
		671,
		9
	],
	"../pages/editjornadamodal/editjornadamodal.module": [
		672,
		8
	],
	"../pages/editjugadormodal/editjugadormodal.module": [
		673,
		7
	],
	"../pages/equipo/equipo.module": [
		675,
		6
	],
	"../pages/jornadas/jornadas.module": [
		676,
		5
	],
	"../pages/jornadasmodal/jornadasmodal.module": [
		677,
		4
	],
	"../pages/jugadores/jugadores.module": [
		678,
		3
	],
	"../pages/jugadoresmodal/jugadoresmodal.module": [
		679,
		2
	],
	"../pages/login/login.module": [
		681,
		1
	],
	"../pages/registro/registro.module": [
		680,
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
webpackAsyncContext.id = 252;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListajugadoresProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(21);
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

/***/ 391:
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitanesmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(21);
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

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(560);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ultimate_ngxerrors__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__config__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_jugadores_jugadores__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_calendario_calendario__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_equipo_equipo__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_jornadas_jornadas__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_jugadoresmodal_jugadoresmodal__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic2_calendar__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_calendariomodal_calendariomodal__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_datosjugadormodal_datosjugadormodal__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_calendar__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_num_jugadores_num_jugadores__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_listajugadores_listajugadores__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_listajornadas_listajornadas__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_editjugadormodal_editjugadormodal__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_jornadasmodal_jornadasmodal__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_addequiposmodal_addequiposmodal__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_registro_registro__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_editequipomodal_editequipomodal__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_capitanes_capitanes__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_capitanesmodal_capitanesmodal__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_editjornadamodal_editjornadamodal__ = __webpack_require__(169);
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
                __WEBPACK_IMPORTED_MODULE_34__pages_capitanesmodal_capitanesmodal__["a" /* CapitanesmodalPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_editjornadamodal_editjornadamodal__["a" /* EditjornadamodalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addequiposmodal/addequiposmodal.module#AddequiposmodalPageModule', name: 'AddequiposmodalPage', segment: 'addequiposmodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendariomodal/calendariomodal.module#CalendariomodalPageModule', name: 'CalendariomodalPage', segment: 'calendariomodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/capitanes/capitanes.module#CapitanesPageModule', name: 'CapitanesPage', segment: 'capitanes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendario/calendario.module#CalendarioPageModule', name: 'CalendarioPage', segment: 'calendario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/datosjugadormodal/datosjugadormodal.module#DatosjugadormodalPageModule', name: 'DatosjugadormodalPage', segment: 'datosjugadormodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editequipomodal/editequipomodal.module#EditequipomodalPageModule', name: 'EditequipomodalPage', segment: 'editequipomodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editjornadamodal/editjornadamodal.module#EditjornadamodalPageModule', name: 'EditjornadamodalPage', segment: 'editjornadamodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editjugadormodal/editjugadormodal.module#EditjugadormodalPageModule', name: 'EditjugadormodalPage', segment: 'editjugadormodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/capitanesmodal/capitanesmodal.module#CapitanesmodalPageModule', name: 'CapitanesmodalPage', segment: 'capitanesmodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/equipo/equipo.module#EquipoPageModule', name: 'EquipoPage', segment: 'equipo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jornadas/jornadas.module#JornadasPageModule', name: 'JornadasPage', segment: 'jornadas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jornadasmodal/jornadasmodal.module#JornadasmodalPageModule', name: 'JornadasmodalPage', segment: 'jornadasmodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugadores/jugadores.module#JugadoresPageModule', name: 'JugadoresPage', segment: 'jugadores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jugadoresmodal/jugadoresmodal.module#JugadoresmodalPageModule', name: 'JugadoresmodalPage', segment: 'jugadoresmodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_34__pages_capitanesmodal_capitanesmodal__["a" /* CapitanesmodalPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_editjornadamodal_editjornadamodal__["a" /* EditjornadamodalPage */]
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

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 264,
	"./af.js": 264,
	"./ar": 265,
	"./ar-dz": 266,
	"./ar-dz.js": 266,
	"./ar-kw": 267,
	"./ar-kw.js": 267,
	"./ar-ly": 268,
	"./ar-ly.js": 268,
	"./ar-ma": 269,
	"./ar-ma.js": 269,
	"./ar-sa": 270,
	"./ar-sa.js": 270,
	"./ar-tn": 271,
	"./ar-tn.js": 271,
	"./ar.js": 265,
	"./az": 272,
	"./az.js": 272,
	"./be": 273,
	"./be.js": 273,
	"./bg": 274,
	"./bg.js": 274,
	"./bm": 275,
	"./bm.js": 275,
	"./bn": 276,
	"./bn.js": 276,
	"./bo": 277,
	"./bo.js": 277,
	"./br": 278,
	"./br.js": 278,
	"./bs": 279,
	"./bs.js": 279,
	"./ca": 280,
	"./ca.js": 280,
	"./cs": 281,
	"./cs.js": 281,
	"./cv": 282,
	"./cv.js": 282,
	"./cy": 283,
	"./cy.js": 283,
	"./da": 284,
	"./da.js": 284,
	"./de": 285,
	"./de-at": 286,
	"./de-at.js": 286,
	"./de-ch": 287,
	"./de-ch.js": 287,
	"./de.js": 285,
	"./dv": 288,
	"./dv.js": 288,
	"./el": 289,
	"./el.js": 289,
	"./en-SG": 290,
	"./en-SG.js": 290,
	"./en-au": 291,
	"./en-au.js": 291,
	"./en-ca": 292,
	"./en-ca.js": 292,
	"./en-gb": 293,
	"./en-gb.js": 293,
	"./en-ie": 294,
	"./en-ie.js": 294,
	"./en-il": 295,
	"./en-il.js": 295,
	"./en-nz": 296,
	"./en-nz.js": 296,
	"./eo": 297,
	"./eo.js": 297,
	"./es": 298,
	"./es-do": 299,
	"./es-do.js": 299,
	"./es-us": 300,
	"./es-us.js": 300,
	"./es.js": 298,
	"./et": 301,
	"./et.js": 301,
	"./eu": 302,
	"./eu.js": 302,
	"./fa": 303,
	"./fa.js": 303,
	"./fi": 304,
	"./fi.js": 304,
	"./fo": 305,
	"./fo.js": 305,
	"./fr": 306,
	"./fr-ca": 307,
	"./fr-ca.js": 307,
	"./fr-ch": 308,
	"./fr-ch.js": 308,
	"./fr.js": 306,
	"./fy": 309,
	"./fy.js": 309,
	"./ga": 310,
	"./ga.js": 310,
	"./gd": 311,
	"./gd.js": 311,
	"./gl": 312,
	"./gl.js": 312,
	"./gom-latn": 313,
	"./gom-latn.js": 313,
	"./gu": 314,
	"./gu.js": 314,
	"./he": 315,
	"./he.js": 315,
	"./hi": 316,
	"./hi.js": 316,
	"./hr": 317,
	"./hr.js": 317,
	"./hu": 318,
	"./hu.js": 318,
	"./hy-am": 319,
	"./hy-am.js": 319,
	"./id": 320,
	"./id.js": 320,
	"./is": 321,
	"./is.js": 321,
	"./it": 322,
	"./it-ch": 323,
	"./it-ch.js": 323,
	"./it.js": 322,
	"./ja": 324,
	"./ja.js": 324,
	"./jv": 325,
	"./jv.js": 325,
	"./ka": 326,
	"./ka.js": 326,
	"./kk": 327,
	"./kk.js": 327,
	"./km": 328,
	"./km.js": 328,
	"./kn": 329,
	"./kn.js": 329,
	"./ko": 330,
	"./ko.js": 330,
	"./ku": 331,
	"./ku.js": 331,
	"./ky": 332,
	"./ky.js": 332,
	"./lb": 333,
	"./lb.js": 333,
	"./lo": 334,
	"./lo.js": 334,
	"./lt": 335,
	"./lt.js": 335,
	"./lv": 336,
	"./lv.js": 336,
	"./me": 337,
	"./me.js": 337,
	"./mi": 338,
	"./mi.js": 338,
	"./mk": 339,
	"./mk.js": 339,
	"./ml": 340,
	"./ml.js": 340,
	"./mn": 341,
	"./mn.js": 341,
	"./mr": 342,
	"./mr.js": 342,
	"./ms": 343,
	"./ms-my": 344,
	"./ms-my.js": 344,
	"./ms.js": 343,
	"./mt": 345,
	"./mt.js": 345,
	"./my": 346,
	"./my.js": 346,
	"./nb": 347,
	"./nb.js": 347,
	"./ne": 348,
	"./ne.js": 348,
	"./nl": 349,
	"./nl-be": 350,
	"./nl-be.js": 350,
	"./nl.js": 349,
	"./nn": 351,
	"./nn.js": 351,
	"./pa-in": 352,
	"./pa-in.js": 352,
	"./pl": 353,
	"./pl.js": 353,
	"./pt": 354,
	"./pt-br": 355,
	"./pt-br.js": 355,
	"./pt.js": 354,
	"./ro": 356,
	"./ro.js": 356,
	"./ru": 357,
	"./ru.js": 357,
	"./sd": 358,
	"./sd.js": 358,
	"./se": 359,
	"./se.js": 359,
	"./si": 360,
	"./si.js": 360,
	"./sk": 361,
	"./sk.js": 361,
	"./sl": 362,
	"./sl.js": 362,
	"./sq": 363,
	"./sq.js": 363,
	"./sr": 364,
	"./sr-cyrl": 365,
	"./sr-cyrl.js": 365,
	"./sr.js": 364,
	"./ss": 366,
	"./ss.js": 366,
	"./sv": 367,
	"./sv.js": 367,
	"./sw": 368,
	"./sw.js": 368,
	"./ta": 369,
	"./ta.js": 369,
	"./te": 370,
	"./te.js": 370,
	"./tet": 371,
	"./tet.js": 371,
	"./tg": 372,
	"./tg.js": 372,
	"./th": 373,
	"./th.js": 373,
	"./tl-ph": 374,
	"./tl-ph.js": 374,
	"./tlh": 375,
	"./tlh.js": 375,
	"./tr": 376,
	"./tr.js": 376,
	"./tzl": 377,
	"./tzl.js": 377,
	"./tzm": 378,
	"./tzm-latn": 379,
	"./tzm-latn.js": 379,
	"./tzm.js": 378,
	"./ug-cn": 380,
	"./ug-cn.js": 380,
	"./uk": 381,
	"./uk.js": 381,
	"./ur": 382,
	"./ur.js": 382,
	"./uz": 383,
	"./uz-latn": 384,
	"./uz-latn.js": 384,
	"./uz.js": 383,
	"./vi": 385,
	"./vi.js": 385,
	"./x-pseudo": 386,
	"./x-pseudo.js": 386,
	"./yo": 387,
	"./yo.js": 387,
	"./zh-cn": 388,
	"./zh-cn.js": 388,
	"./zh-hk": 389,
	"./zh-hk.js": 389,
	"./zh-tw": 390,
	"./zh-tw.js": 390
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
webpackContext.id = 605;

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(90);
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

/***/ 636:
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

/***/ 637:
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

/***/ 653:
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

/***/ 658:
/***/ (function(module, exports) {

/* (ignored) */

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

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jugadores_jugadores__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equipo_equipo__ = __webpack_require__(171);
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

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendariomodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_listajornadas_listajornadas__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(21);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2__providers_listajornadas_listajornadas__["a" /* ListajornadasProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_listajugadores_listajugadores__["a" /* ListajugadoresProvider */]])
    ], CalendariomodalPage);
    return CalendariomodalPage;
}());

//# sourceMappingURL=calendariomodal.js.map

/***/ })

},[438]);
//# sourceMappingURL=main.js.map