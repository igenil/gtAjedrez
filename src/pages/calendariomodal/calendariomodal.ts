import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { ListajornadasProvider } from '../../providers/listajornadas/listajornadas';
import { ListajugadoresProvider } from '../../providers/listajugadores/listajugadores';
import { jornadas } from '../../models/jornadas';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { equipo } from '../../models/equipo';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-calendariomodal',
  templateUrl: 'calendariomodal.html',
})
export class CalendariomodalPage {
  equipos: Observable<equipo[]>;
  listEquipos: AngularFireList<any>;
  jornada: jornadas = {
    titulo: '',
    casa:false,
    fecha:null,
    equipo:''
  };

  constructor(private prov: ListajugadoresProvider, private toastCtrl: ToastController,private afdb: AngularFireDatabase,public listajornadas:ListajornadasProvider,public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public listajugadores:ListajugadoresProvider) {
    this.listEquipos = afdb.list("/equipo");
    this.equipos =  this.listEquipos.snapshotChanges().pipe(
       map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    );
  }
  
  add(){
    
    this.afdb.list("/jornada").push(this.jornada);
    this.viewCtrl.dismiss();
    this.mostrar_mensaje("Jornada añadida con exito!.");
  }

  mostrar_mensaje( mensaje:string ){
    let toast = this.toastCtrl.create({
    message: mensaje,
    duration: 3500,
    cssClass: "toast"
    });
    toast.present();
   }
   
}
