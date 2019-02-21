import { Injectable } from '@angular/core';

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
