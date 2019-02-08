import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Jornada } from '../../interface/jornada.interfaces';
import { ListajornadasProvider } from '../../providers/listajornadas/listajornadas';
import { ListajugadoresProvider } from '../../providers/listajugadores/listajugadores';
import * as moment from 'moment';

/**
 * Generated class for the CalendariomodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendariomodal',
  templateUrl: 'calendariomodal.html',
})
export class CalendariomodalPage {
  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), Casa: false, Fuera: false, title:''}
  minDate = new Date().toISOString();
  jornada:Jornada;
  titulares:any = [];
  titular1:any;
  titular2:any;
  tirtular3:any;
  titular4:any;
  constructor(public listajornadas:ListajornadasProvider,public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public listajugadores:ListajugadoresProvider) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
    console.log( this.event.startTime)
  }
  save(){
    for (let index = 0; index < this.listajugadores.jugadores.length; index++) {
      if (this.listajugadores.jugadores[index].juega) {
        this.titulares.push(this.listajugadores.jugadores[index]);
        if(this.event.Casa==true){
          this.listajugadores.jugadores[index].c+=1
        }else if(this.event.Fuera==true){
          this.listajugadores.jugadores[index].f+=1
        }

      }
    }
    
    this.jornada = {nombre: this.event.title, fecha: this.event.startTime,titular1:this.titulares[0],titular2:this.titulares[1],titular3:this.titulares[2],titular4:this.titulares[3], n_titular1:0, n_titular2:0,n_titular3:0,n_titular4:0};
    console.log(this.jornada.titular1.nombre)
    this.listajornadas.jornadas.push(this.jornada);
    this.viewCtrl.dismiss(this.event);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendariomodalPage');
  }
  
}
