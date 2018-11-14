
import { Injectable } from '@angular/core';
import { JUGADORES } from '../../data/data.jugadores';
import { Jugador } from '../../interface/jugador.interfaces';
import { EQUIPOS } from '../../data/data.equipos';
import { Equipo } from '../../interface/equipo.interfaces';
@Injectable()
export class ListajugadoresProvider {
  jugadores=JUGADORES.slice(0);
  equipos=EQUIPOS.slice(0);
  constructor() {
    
  }
}
