import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the JornadasmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jornadasmodal',
  templateUrl: 'jornadasmodal.html',
})
export class JornadasmodalPage {
  jornada:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams,  public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JornadasmodalPage');
    let data=this.navParams.get('jornada');
    this.jornada=data;
  }

}
