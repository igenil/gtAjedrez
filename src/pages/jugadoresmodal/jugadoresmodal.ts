import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { NumJugadoresProvider } from '../../providers/num-jugadores/num-jugadores';
import { ListajugadoresProvider } from '../../providers/listajugadores/listajugadores';
import { jugador } from '../../models/jugador';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-jugadoresmodal',
  templateUrl: 'jugadoresmodal.html',
})
export class JugadoresmodalPage {

  equipo:Array<jugador>;
  rolAdmin: boolean;
  rolCapitan:boolean = false;
  Nconvocados:Number = 0;
  key: string;
  isCapitan: boolean;

  constructor(private toastCtrl: ToastController,private prov: ListajugadoresProvider,private afdb: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, public numJugadores:NumJugadoresProvider, public listajugadores:ListajugadoresProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresmodalPage');
    
    this.equipo= this.navParams.get('listaJugadores');
    this.key = this.navParams.get('keyEquipo');

    var user = firebase.auth().currentUser;
    this.prov.verificarUsuario(user.email).then(existe =>{
      if(existe) {
        if (this.prov.admin[0].admin) {
          this.rolAdmin = true;
        }
      }if(this.prov.admin[0].capitan){
          this.rolCapitan = true;
      }
    })

    this.listajugadores.Covocados(this.key).then(existe =>{
      if(existe) {
          for (let i = 0; i < Object.keys(this.prov.convocados).length; i++) {
            if (this.prov.convocados[i].juega) {
              this.Nconvocados = Number(this.Nconvocados) + 1;
            }
          }
          console.log(this.Nconvocados); 
      }
    })

    this.listajugadores.Covocados(this.key).then(existe =>{
      if(existe) {
          for (let i = 0; i < Object.keys(this.prov.convocados).length; i++) {
            if (this.prov.convocados[i].capitan) {
              this.isCapitan = true;
            }
          }
      }
    })
  }

  mostrar_mensaje( mensaje:string ){
    let toast = this.toastCtrl.create({
    message: mensaje,
    duration: 3500,
    cssClass: "toast"
    });
    toast.present();
   }
  
  convocar(jugador){
    if(!jugador.juega){
      jugador.juega  = true;
      this.afdb.list("/jugador").update(jugador.key, jugador);
      let mensaje = "Jugador " + jugador.nombre + " convocado";
      this.mostrar_mensaje(mensaje);
    }else if(jugador.juega){
      jugador.juega  = false;
      this.afdb.list("/jugador").update(jugador.key, jugador);
      let mensaje = "Jugador " + jugador.nombre + " desconvocado";
      this.mostrar_mensaje(mensaje);
      
    }

    this.listajugadores.Covocados(this.key).then(existe =>{
      if(existe) {
          for (let i = 0; i < Object.keys(this.prov.convocados).length; i++) {
            if (this.prov.convocados[i].juega) {
              this.Nconvocados = Number(this.Nconvocados) + 1;
            }
          }
      }
    })
    this.Nconvocados = 0;
  }

  capitan(jugador){
    if(!jugador.capitan){
      jugador.capitan  = true;
      this.isCapitan = true;
      this.afdb.list("/jugador").update(jugador.key, jugador);
      var mensaje = "Jugador " + jugador.nombre + " elegido como capitan";
      this.mostrar_mensaje(mensaje);
    }else if(jugador.capitan){
      jugador.capitan  = false;
      this.isCapitan = false;
      this.afdb.list("/jugador").update(jugador.key, jugador);
      let mensaje = "Jugador " + jugador.nombre + " destituido como capitan";
      this.mostrar_mensaje(mensaje);
    }
  }

  volver(){
    this.viewCtrl.dismiss();
  }
}