import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ListajugadoresProvider } from '../../providers/listajugadores/listajugadores';
import { equipo } from '../../models/equipo';
import { AngularFireDatabase  } from 'angularfire2/database';

/**
 * Generated class for the EditjornadamodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editjornadamodal',
  templateUrl: 'editjornadamodal.html',
})
export class EditjornadamodalPage {

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

  ganatitular1(jornada, titular1){
    if (jornada.resultado1 == 1) {
      jornada.resultado1 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{

      jornada.resultado1 = 1;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }

  ganatitular2(jornada, titular2){
    if (jornada.resultado2 == 1) {
      jornada.resultado2 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      jornada.resultado2 = 1;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }

  ganatitular3(jornada, titular3){
    if (jornada.resultado3 == 1) {
      jornada.resultado3 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      jornada.resultado3 = 1;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }

  ganatitular4(jornada, titular4){
    if (jornada.resultado4 == 1) {
      jornada.resultado4 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      jornada.resultado4 = 1;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }
  ganatitular5(jornada, titular5){
    if (jornada.resultado5 == 1) {
      jornada.resultado5 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      jornada.resultado5 = 1;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }

  empatatitular1(jornada, titular1){
    if (jornada.resultado1 == 2) {
      jornada.resultado1 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      jornada.resultado1 = 2;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }

  empatatitular2(jornada, titular2){
    if (jornada.resultado2 == 2) {
      jornada.resultado2 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      jornada.resultado2 = 2;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }

  empatatitular3(jornada, titular3){
    if (jornada.resultado3 == 2) {
      jornada.resultado3 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      jornada.resultado3 = 2;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }

  empatatitular4(jornada, titular4){
    if (jornada.resultado4 == 2) {
      jornada.resultado4 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)

    }else{
      jornada.resultado4 = 2;

      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }
  empatatitular5(jornada, titular5){
    if (jornada.resultado5 == 2) {
      jornada.resultado5 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      jornada.resultado5 = 2;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }

  pierdetitular1(jornada, titular1){
    if (jornada.resultado1 == 3) {
      jornada.resultado1 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      jornada.resultado1 = 3;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }

  pierdetitular2(jornada, titular2){
    if (jornada.resultado2 == 3) {
      jornada.resultado2 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      jornada.resultado2 = 3;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }

  pierdetitular3(jornada, titular3){
    if (jornada.resultado3 == 3) {
      jornada.resultado3 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      jornada.resultado3 = 3;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }

  pierdetitular4(jornada, titular4){
    if (jornada.resultado4 == 3) {
      jornada.resultado4 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      jornada.resultado4 = 3;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }
  pierdetitular5(jornada, titular5){
    if (jornada.resultado5 == 3) {
      jornada.resultado5 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      jornada.resultado5 = 3;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }

}
