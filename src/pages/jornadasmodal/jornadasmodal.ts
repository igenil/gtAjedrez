import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ListajugadoresProvider } from '../../providers/listajugadores/listajugadores';
import { equipo } from '../../models/equipo';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-jornadasmodal',
  templateUrl: 'jornadasmodal.html',
})
export class JornadasmodalPage {
  jornada:any={};
  equipo:equipo;
  titular1:any;
  titular2:any;
  titular3:any;
  titular4:any;
  titular5:any;

  constructor(private afdb: AngularFireDatabase, private listajugadores: ListajugadoresProvider,public navCtrl: NavController, public navParams: NavParams,  public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JornadasmodalPage');
    this.jornada=this.navParams.get('jornada');
    this.equipo = this.navParams.get('equipo');
    this.equipo = this.navParams.get('equipo');
    this.titular1 = this.navParams.get('titular1');
    this.titular2 = this.navParams.get('titular2');
    this.titular3 = this.navParams.get('titular3');
    this.titular4 = this.navParams.get('titular4');
    this.titular5 = this.navParams.get('titular5');
    console.log(this.jornada);

  }
}
