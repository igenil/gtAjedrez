import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ListajugadoresProvider } from '../../providers/listajugadores/listajugadores';
import { equipo } from '../../models/equipo';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { jugador } from '../../models/jugador';
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
    // this.nombre1 = this.jornada.titular1.nombre;
    // this.nombre2 = this.jornada.titular2.nombre;
    // this.nombre3 = this.jornada.titular3.nombre;
    // this.nombre4 = this.jornada.titular4.nombre;
    // this.jornada.fecha = this.jornada.fecha.substring(0, 10);
  }

  // gana(jugador, n_titular:number){
  //   if(n_titular==1){
  //     jugador.j =Number(jugador.j)+ 1;
  //     jugador.g =Number(jugador.g)+ 1;
  //     jugador.ptos = Number(jugador.ptos)+3;
  //     this.jornada.n_titular1 = 1
  //   }else if(n_titular==2){
  //     jugador.j = Number(jugador.j)+1;
  //     jugador.g = Number(jugador.g)+1
  //     jugador.ptos = Number(jugador.ptos)+3
  //     this.jornada.n_titular2 = 1
  //   }else if(n_titular==3){
  //     jugador.j = Number(jugador.j)+1
  //     jugador.g = Number(jugador.g)+1
  //     jugador.ptos =Number(jugador.ptos)+ 3
  //     this.jornada.n_titular3 = 1
  //   }else if(n_titular==4){
  //     jugador.j = Number(jugador.j)+1
  //     jugador.g = Number(jugador.g)+1
  //     jugador.ptos = Number(jugador.ptos)+3
  //     this.jornada.n_titular4 = 1
  //   }
  //   this.listajugadores.jugadores.sort(function(a,b){ 
  //     if (Number(a.ptos)>Number(b.ptos)) {
  //       return -1;
  //     } else if(Number(a.ptos)<Number(b.ptos)){
  //       return 1;
  //     } else {
  //       return 0;
  //     }
  //   });
  // }
  // empata(jugador, n_titular){
  //   if(n_titular==1){
  //     jugador.j = Number(jugador.j)+1
  //     jugador.e = Number(jugador.g)+1
  //     jugador.ptos =Number(jugador.ptos)+ 3
  //     this.jornada.n_titular1 = 2
  //   }else if(n_titular==2){
  //     jugador.j = Number(jugador.j)+1
  //     jugador.e = Number(jugador.g)+1
  //     jugador.ptos =Number(jugador.ptos)+ 3
  //     this.jornada.n_titular2 = 2
  //   }else if(n_titular==3){
  //     jugador.j = Number(jugador.j)+1
  //     jugador.e = Number(jugador.g)+1
  //     jugador.ptos =Number(jugador.ptos)+ 3
  //     this.jornada.n_titular3 = 2
  //   }else if(n_titular==4){
  //     jugador.j = Number(jugador.j)+1
  //     jugador.e = Number(jugador.g)+1
  //     jugador.ptos =Number(jugador.ptos)+ 3
  //     this.jornada.n_titular4 = 2
  //   }
  //   this.listajugadores.jugadores.sort(function(a,b){ 
  //     if (Number(a.ptos)>Number(b.ptos)) {
  //       return -1;
  //     } else if(Number(a.ptos)<Number(b.ptos)){
  //       return 1;
  //     } else {
  //       return 0;
  //     }
  //   });
  // }
  // pierde(jugador, n_titular){
  //   if(n_titular==1){
  //     jugador.j =Number(jugador.j)+1
  //     jugador.p = Number(jugador.p)+1
  //     this.jornada.n_titular1 = 3
  //   }else if(n_titular==2){
  //     jugador.j =Number(jugador.j)+1
  //     jugador.p = Number(jugador.p)+1
  //     this.jornada.n_titular2 = 3
  //   }else if(n_titular==3){
  //     jugador.j =Number(jugador.j)+1
  //     jugador.p = Number(jugador.p)+1
  //     this.jornada.n_titular3 = 3
  //   }else if(n_titular==4){
  //     jugador.j =Number(jugador.j)+1
  //     jugador.p = Number(jugador.p)+1
  //     this.jornada.n_titular4 = 3
  //   }
  // }
}
