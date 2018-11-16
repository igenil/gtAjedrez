
import { Injectable } from '@angular/core';
import { JUGADORES } from '../../data/data.jugadores';
import { EQUIPOS } from '../../data/data.equipos';
@Injectable()
export class ListajugadoresProvider {
  jugadores=JUGADORES.slice(0).sort(function(a,b){ 
    if (Number(a.ptos)>Number(b.ptos)) {
      return -1;
    } else if(Number(a.ptos)<Number(b.ptos)){
      return 1;
    } else {
      return 0;
    }
  });
  equipos=EQUIPOS.slice(0);
  constructor() {
    
  }
}
