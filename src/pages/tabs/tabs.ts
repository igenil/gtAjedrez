import { Component } from '@angular/core';
import { JugadoresPage } from '../jugadores/jugadores';
import { CalendarioPage } from '../calendario/calendario';
import { EquipoPage } from '../equipo/equipo';
import { JornadasPage } from '../jornadas/jornadas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab2Root = CalendarioPage;
  tab3Root = EquipoPage;
  tab4Root = JugadoresPage;
  tab5Root = JornadasPage;
  constructor() {

  }
}
