import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { ListajornadasProvider } from '../../providers/listajornadas/listajornadas';
import { ListajugadoresProvider } from '../../providers/listajugadores/listajugadores';
import { jornadas } from '../../models/jornadas';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { equipo } from '../../models/equipo';
import { map } from 'rxjs/operators';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-calendariomodal',
  templateUrl: 'calendariomodal.html',
})
export class CalendariomodalPage {
  equipos: Observable<equipo[]>;
  listEquipos: AngularFireList<any>;
  admin: {};
  rolAdmin:boolean = false;
  rolCapitan:boolean = false;
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
    this.mostrar_mensaje("Jornada " + this.jornada.titulo + " añadida correctamente.");
  }

  eliminar(jornada){
    var id = jornada.key;
    this.afdb.database.ref('/jornada/'+ jornada.key).remove();
    this.mostrar_mensaje("Jornada " + jornada.nombre + " eliminada con exito.");
  }

  mostrar_mensaje( mensaje:string ){
    let toast = this.toastCtrl.create({
    message: mensaje,
    duration: 3500,
    cssClass: "toast"
    });
    toast.present();
   }
   
   ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresPage');
    var user = firebase.auth().currentUser;
    this.prov.verificarUsuario(user.email).then(existe =>{
      if(existe) {
        if (this.prov.admin[0].admin) {
          this.rolAdmin = true;
        }
      }else if(this.prov.admin[0].capitan){
          this.rolCapitan = true;
      }
    })
  }
}
