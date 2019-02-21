import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ListajugadoresProvider } from '../../providers/listajugadores/listajugadores';
import { equipo } from '../../models/equipo';
import { AngularFireDatabase  } from 'angularfire2/database';

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
      titular1.jugados = Number(titular1.jugados) - 1;
      titular1.ganado = Number(titular1.ganado) - 1;
      titular1.elo = Number(titular1.elo) - 3;
      if (jornada.casa) {
        titular1.casa = Number(titular1.casa) - 1;
      }else{
        titular1.fuera = Number(titular1.fuera) - 1;
      }
      this.afdb.list("/jugador").update(titular1.key, titular1)
      jornada.resultado1 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      titular1.jugados = Number(titular1.jugados) + 1;
      titular1.ganado = Number(titular1.ganado) + 1;
      titular1.elo = Number(titular1.elo) + 3;
      if (jornada.casa) {
        titular1.casa = Number(titular1.casa) + 1;
      }else{
        titular1.fuera = Number(titular1.fuera) + 1;
      }
      this.afdb.list("/jugador").update(titular1.key, titular1)
      jornada.resultado1 = 1;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }

  ganatitular2(jornada, titular2){
    if (jornada.resultado2 == 1) {
      titular2.jugados = Number(titular2.jugados) - 1;
      titular2.ganado = Number(titular2.ganado) - 1;
      titular2.elo = Number(titular2.elo) - 3;
      if (jornada.casa) {
        titular2.casa = Number(titular2.casa) - 1;
      }else{
        titular2.fuera = Number(titular2.fuera) - 1;
      }
      this.afdb.list("/jugador").update(titular2.key, titular2)
      jornada.resultado2 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      titular2.jugados = Number(titular2.jugados) + 1;
      titular2.ganado = Number(titular2.ganado) + 1;
      titular2.elo = Number(titular2.elo) + 3;
      if (jornada.casa) {
        titular2.casa = Number(titular2.casa) + 1;
      }else{
        titular2.fuera = Number(titular2.fuera) + 1;
      }
      this.afdb.list("/jugador").update(titular2.key, titular2)
      jornada.resultado2 = 1;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }

  ganatitular3(jornada, titular3){
    if (jornada.resultado3 == 1) {
      titular3.jugados = Number(titular3.jugados) - 1;
      titular3.ganado = Number(titular3.ganado) - 1;
      titular3.elo = Number(titular3.elo) - 3;
      if (jornada.casa) {
        titular3.casa = Number(titular3.casa) - 1;
      }else{
        titular3.fuera = Number(titular3.fuera) - 1;
      }
      this.afdb.list("/jugador").update(titular3.key, titular3)
      jornada.resultado3 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      titular3.jugados = Number(titular3.jugados) + 1;
      titular3.ganado = Number(titular3.ganado) + 1;
      titular3.elo = Number(titular3.elo) + 3;
      if (jornada.casa) {
        titular3.casa = Number(titular3.casa) + 1;
      }else{
        titular3.fuera = Number(titular3.fuera) + 1;
      }
      this.afdb.list("/jugador").update(titular3.key, titular3)
      jornada.resultado3 = 1;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }

  ganatitular4(jornada, titular4){
    if (jornada.resultado4 == 1) {
      titular4.jugados = Number(titular4.jugados) - 1;
      titular4.ganado = Number(titular4.ganado) - 1;
      titular4.elo = Number(titular4.elo) - 3;
      if (jornada.casa) {
        titular4.casa = Number(titular4.casa) - 1;
      }else{
        titular4.fuera = Number(titular4.fuera) - 1;
      }
      this.afdb.list("/jugador").update(titular4.key, titular4)
      jornada.resultado4 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      titular4.jugados = Number(titular4.jugados) + 1;
      titular4.ganado = Number(titular4.ganado) + 1;
      titular4.elo = Number(titular4.elo) + 3;
      if (jornada.casa) {
        titular4.casa = Number(titular4.casa) + 1;
      }else{
        titular4.fuera = Number(titular4.fuera) + 1;
      }
      this.afdb.list("/jugador").update(titular4.key, titular4)
      jornada.resultado4 = 1;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }
  ganatitular5(jornada, titular5){
    if (jornada.resultado5 == 1) {
      titular5.jugados = Number(titular5.jugados) - 1;
      titular5.ganado = Number(titular5.ganado) - 1;
      titular5.elo = Number(titular5.elo) - 3;
      if (jornada.casa) {
        titular5.casa = Number(titular5.casa) - 1;
      }else{
        titular5.fuera = Number(titular5.fuera) - 1;
      }
      this.afdb.list("/jugador").update(titular5.key, titular5)
      jornada.resultado5 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      titular5.jugados = Number(titular5.jugados) + 1;
      titular5.ganado = Number(titular5.ganado) + 1;
      titular5.elo = Number(titular5.elo) + 3;
      if (jornada.casa) {
        titular5.casa = Number(titular5.casa) + 1;
      }else{
        titular5.fuera = Number(titular5.fuera) + 1;
      }
      this.afdb.list("/jugador").update(titular5.key, titular5)
      jornada.resultado5 = 1;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }

  empatatitular1(jornada, titular1){
    if (jornada.resultado1 == 2) {
      titular1.jugados = Number(titular1.jugados) - 1;
      titular1.empate = Number(titular1.empate) - 1;
      titular1.elo = Number(titular1.elo) - 1;
      if (jornada.casa) {
        titular1.casa = Number(titular1.casa) - 1;
      }else{
        titular1.fuera = Number(titular1.fuera) - 1;
      }
      this.afdb.list("/jugador").update(titular1.key, titular1)
      jornada.resultado1 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      titular1.jugados = Number(titular1.jugados) + 1;
      titular1.empate = Number(titular1.empate) + 1;
      titular1.elo = Number(titular1.elo) + 1;
      if (jornada.casa) {
        titular1.casa = Number(titular1.casa) + 1;
      }else{
        titular1.fuera = Number(titular1.fuera) + 1;
      }
      this.afdb.list("/jugador").update(titular1.key, titular1)
      jornada.resultado1 = 2;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }

  empatatitular2(jornada, titular2){
    if (jornada.resultado2 == 2) {
      titular2.jugados = Number(titular2.jugados) - 1;
      titular2.empate = Number(titular2.empate) - 1;
      titular2.elo = Number(titular2.elo) - 1;
      if (jornada.casa) {
        titular2.casa = Number(titular2.casa) - 1;
      }else{
        titular2.fuera = Number(titular2.fuera) - 1;
      }
      this.afdb.list("/jugador").update(titular2.key, titular2)
      jornada.resultado2 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      titular2.jugados = Number(titular2.jugados) + 1;
      titular2.empate = Number(titular2.empate) + 1;
      titular2.elo = Number(titular2.elo) + 1;
      if (jornada.casa) {
        titular2.casa = Number(titular2.casa) + 1;
      }else{
        titular2.fuera = Number(titular2.fuera) + 1;
      }
      this.afdb.list("/jugador").update(titular2.key, titular2)
      jornada.resultado2 = 2;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }

  empatatitular3(jornada, titular3){
    if (jornada.resultado3 == 2) {
      titular3.jugados = Number(titular3.jugados) - 1;
      titular3.empate = Number(titular3.empate) - 1;
      titular3.elo = Number(titular3.elo) - 1;
      if (jornada.casa) {
        titular3.casa = Number(titular3.casa) - 1;
      }else{
        titular3.fuera = Number(titular3.fuera) - 1;
      }
      this.afdb.list("/jugador").update(titular3.key, titular3)
      jornada.resultado3 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      titular3.jugados = Number(titular3.jugados) + 1;
      titular3.empate = Number(titular3.empate) + 1;
      titular3.elo = Number(titular3.elo) + 1;
      if (jornada.casa) {
        titular3.casa = Number(titular3.casa) + 1;
      }else{
        titular3.fuera = Number(titular3.fuera) + 1;
      }
      this.afdb.list("/jugador").update(titular3.key, titular3)
      jornada.resultado3 = 2;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }

  empatatitular4(jornada, titular4){
    if (jornada.resultado4 == 2) {
      titular4.jugados = Number(titular4.jugados) - 1;
      titular4.empate = Number(titular4.empate) - 1;
      titular4.elo = Number(titular4.elo) - 1;
      if (jornada.casa) {
        titular4.casa = Number(titular4.casa) - 1;
      }else{
        titular4.fuera = Number(titular4.fuera) - 1;
      }
      this.afdb.list("/jugador").update(titular4.key, titular4)
      jornada.resultado4 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)

    }else{
      titular4.jugados = Number(titular4.jugados) + 1;
      titular4.empate = Number(titular4.empate) + 1;
      titular4.elo = Number(titular4.elo) + 1;
      if (jornada.casa) {
        titular4.casa = Number(titular4.casa) + 1;
      }else{
        titular4.fuera = Number(titular4.fuera) + 1;
      }
      this.afdb.list("/jugador").update(titular4.key, titular4)
      jornada.resultado4 = 2;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }
  empatatitular5(jornada, titular5){
    if (jornada.resultado5 == 2) {
      titular5.jugados = Number(titular5.jugados) - 1;
      titular5.empate = Number(titular5.empate) - 1;
      titular5.elo = Number(titular5.elo) - 1;
      if (jornada.casa) {
        titular5.casa = Number(titular5.casa) - 1;
      }else{
        titular5.fuera = Number(titular5.fuera) - 1;
      }
      this.afdb.list("/jugador").update(titular5.key, titular5)
      jornada.resultado5 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      titular5.jugados = Number(titular5.jugados) + 1;
      titular5.empate = Number(titular5.empatado) + 1;
      titular5.elo = Number(titular5.elo) + 1;
      if (jornada.casa) {
        titular5.casa = Number(titular5.casa) + 1;
      }else{
        titular5.fuera = Number(titular5.fuera) + 1;
      }
      this.afdb.list("/jugador").update(titular5.key, titular5)
      jornada.resultado5 = 2;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }

  pierdetitular1(jornada, titular1){
    if (jornada.resultado1 == 3) {
      titular1.jugados = Number(titular1.jugados) - 1;
      titular1.perdidos = Number(titular1.perdidos) - 1;
      if (jornada.casa) {
        titular1.casa = Number(titular1.casa) - 1;
      }else{
        titular1.fuera = Number(titular1.fuera) - 1;
      }
      this.afdb.list("/jugador").update(titular1.key, titular1)
      jornada.resultado1 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      titular1.jugados = Number(titular1.jugados) + 1;
      titular1.perdidos = Number(titular1.perdidos) + 1;
      if (jornada.casa) {
        titular1.casa = Number(titular1.casa) + 1;
      }else{
        titular1.fuera = Number(titular1.fuera) + 1;
      }
      this.afdb.list("/jugador").update(titular1.key, titular1)
      jornada.resultado1 = 3;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }

  pierdetitular2(jornada, titular2){
    if (jornada.resultado2 == 3) {
      titular2.jugados = Number(titular2.jugados) - 1;
      titular2.perdidos = Number(titular2.perdidos) - 1;
      if (jornada.casa) {
        titular2.casa = Number(titular2.casa) - 1;
      }else{
        titular2.fuera = Number(titular2.fuera) - 1;
      }
      this.afdb.list("/jugador").update(titular2.key, titular2)
      jornada.resultado2 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      titular2.jugados = Number(titular2.jugados) + 1;
      titular2.perdidos = Number(titular2.perdidos) + 1;
      if (jornada.casa) {
        titular2.casa = Number(titular2.casa) + 1;
      }else{
        titular2.fuera = Number(titular2.fuera) + 1;
      }
      this.afdb.list("/jugador").update(titular2.key, titular2)
      jornada.resultado2 = 3;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }

  pierdetitular3(jornada, titular3){
    if (jornada.resultado3 == 3) {
      titular3.jugados = Number(titular3.jugados) - 1;
      titular3.perdidos = Number(titular3.perdidos) - 1;
      if (jornada.casa) {
        titular3.casa = Number(titular3.casa) - 1;
      }else{
        titular3.fuera = Number(titular3.fuera) - 1;
      }
      this.afdb.list("/jugador").update(titular3.key, titular3)
      jornada.resultado3 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      titular3.jugados = Number(titular3.jugados) + 1;
      titular3.perdidos = Number(titular3.perdidos) + 1;
      if (jornada.casa) {
        titular3.casa = Number(titular3.casa) + 1;
      }else{
        titular3.fuera = Number(titular3.fuera) + 1;
      }
      this.afdb.list("/jugador").update(titular3.key, titular3)
      jornada.resultado3 = 3;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }

  pierdetitular4(jornada, titular4){
    if (jornada.resultado4 == 3) {
      titular4.jugados = Number(titular4.jugados) - 1;
      titular4.perdidos = Number(titular4.perdidos) - 1;
      if (jornada.casa) {
        titular4.casa = Number(titular4.casa) - 1;
      }else{
        titular4.fuera = Number(titular4.fuera) - 1;
      }
      this.afdb.list("/jugador").update(titular4.key, titular4)
      jornada.resultado4 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      titular4.jugados = Number(titular4.jugados) + 1;
      titular4.perdidos = Number(titular4.perdidos) + 1;
      if (jornada.casa) {
        titular4.casa = Number(titular4.casa) + 1;
      }else{
        titular4.fuera = Number(titular4.fuera) + 1;
      }
      this.afdb.list("/jugador").update(titular4.key, titular4)
      jornada.resultado4 = 3;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }
  pierdetitular5(jornada, titular5){
    if (jornada.resultado5 == 3) {
      titular5.jugados = Number(titular5.jugados) - 1;
      titular5.perdidos = Number(titular5.perdidos) - 1;
      if (jornada.casa) {
        titular5.casa = Number(titular5.casa) - 1;
      }else{
        titular5.fuera = Number(titular5.fuera) - 1;
      }
      this.afdb.list("/jugador").update(titular5.key, titular5)
      jornada.resultado5 = 0;
      this.afdb.list("/jornada").update(jornada.key, jornada)  
    }else{
      titular5.jugados = Number(titular5.jugados) + 1;
      titular5.perdidos = Number(titular5.perdidos) + 1;
      if (jornada.casa) {
        titular5.casa = Number(titular5.casa) + 1;
      }else{
        titular5.fuera = Number(titular5.fuera) + 1;
      }
      this.afdb.list("/jugador").update(titular5.key, titular5)
      jornada.resultado5 = 3;
      this.afdb.list("/jornada").update(jornada.key, jornada)
    }
  }

}