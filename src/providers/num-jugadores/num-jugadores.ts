import { Injectable } from '@angular/core';

/*
  Generated class for the NumJugadoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NumJugadoresProvider {

  public numJugadores:number = 0;

  constructor() {

  }
  sumar_numJugadores(){
    this.numJugadores+=1;
  }
  restar_numJugadores(){
    this.numJugadores-=1;
  }
  cargar_numJugadores(){
    return this.numJugadores;
  }
}
