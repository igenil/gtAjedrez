import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Jornada } from '../../interface/jornada.interfaces';
import { ListajornadasProvider } from '../../providers/listajornadas/listajornadas';
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
  constructor(public listajornadas:ListajornadasProvider,public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
    console.log( this.event.startTime)
  }
  save(){
    this.jornada = {nombre: this.event.title, fecha: this.event.startTime,titular1:'paco',titular2:'javi',titular3:'nacho',titular4:'antonio'};
    this.listajornadas.jornadas.push(this.jornada);
    this.viewCtrl.dismiss(this.event)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendariomodalPage');
  }
  
}
