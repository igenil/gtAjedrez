import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DatosjugadormodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datosjugadormodal',
  templateUrl: 'datosjugadormodal.html',
})
export class DatosjugadormodalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosjugadormodalPage');
  }

}
