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
    equipo:'',
    titular1: '',
    titular2:'' ,
    titular3:'' ,
    titular4:'' ,
    titular5: '',
    resultado1: 0,
    resultado2:0 ,
    resultado3:0 ,
    resultado4:0 ,
    resultado5: 0
    };

  constructor(private prov: ListajugadoresProvider, private toastCtrl: ToastController,private afdb: AngularFireDatabase,public listajornadas:ListajornadasProvider,public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public listajugadores:ListajugadoresProvider) {
    this.listEquipos = afdb.list("/equipo");
    this.equipos =  this.listEquipos.snapshotChanges().pipe(
       map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    );
  }
  
  add(){
    console.log(this.jornada.equipo);
    this.listajugadores.Covocados(this.jornada.equipo).then(existe =>{
      if(existe) {
        let cont = 0;
          for (let i = 0; i < Object.keys(this.prov.convocados).length; i++) {
            if (this.prov.convocados[i].juega) {
              console.log( this.jornada.titular1.length)
              if (cont == 0) {
                this.jornada.titular1 = this.prov.convocados[i].email
                cont += 1;
              }else if(cont == 1){
                this.jornada.titular2 = this.prov.convocados[i].email
                cont += 1;
              }else if(cont == 2){
                this.jornada.titular3 = this.prov.convocados[i].email
                cont += 1;
              }else if(cont == 3){
                this.jornada.titular4 = this.prov.convocados[i].email
                cont += 1;
              }else if(cont == 4){
                this.jornada.titular5 = this.prov.convocados[i].email
                cont += 1;
              }
            }
          } 
          cont =0;
          console.log(this.jornada);
          this.afdb.list("/jornada").push(this.jornada);
          this.viewCtrl.dismiss();
          this.mostrar_mensaje("Jornada añadida con exito!.");
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
   
}
