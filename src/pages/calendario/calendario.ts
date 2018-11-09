import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import * as moment from 'moment';
import { CalendariomodalPage } from '../../pages/calendariomodal/calendariomodal';
import { Calendar } from '@ionic-native/calendar';
/**
 * Generated class for the CalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html',
})
export class CalendarioPage {
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: this.selectedDay
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, private alertCtrl: AlertController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarioPage');
  }
  anadirPartida(){
    let modal = this.modalCtrl.create(CalendariomodalPage, {selectedDay: this.selectedDay});
    modal.present();
    modal.onDidDismiss(data=> {
      if(data){
        let eventData = data;
        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);
        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
    })
  }
  onViewTitleChanged(title){
    this.viewTitle = title;
  }
  onTimeSelected(ev){
    this.selectedDay = ev.selectedTime;
  }
  onEventSelected(event){
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    if (event.Casa) {
      let alert = this.alertCtrl.create({
        title: '' + event.title,
        subTitle: 'Desde: ' + start + '<br>Hasta: ' + end + '<br> Jugado en casa',
        buttons: ['Volver'] 
      });
      alert.present();
    }else if(event.Fuera){
      let alert = this.alertCtrl.create({
        title: '' + event.title,
        subTitle: 'Desde: ' + start + '<br>Hasta: ' + end + '<br>Jugado fuera de casa',
        buttons: ['Volver'] 
      });
      alert.present();
    }else{
      let alert = this.alertCtrl.create({
        title: '' + event.title,
        subTitle: 'Desde: ' + start + '<br>Hasta: ' + end + '<br>Lugar no definido',
        buttons: ['Volver'] 
      });
      alert.present();
    }

    
    
  }
}
