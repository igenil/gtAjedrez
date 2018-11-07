import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
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
  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString, allDay: false}
  minDate = new Date().toISOString();
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    //this.event.endTime = preselectedDate;
  }
  save(){
    this.viewCtrl.dismiss(this.event)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendariomodalPage');
  }

}
