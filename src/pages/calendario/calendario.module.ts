import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarioPage } from './calendario';
import { CalendariomodalPage } from '../../pages/calendariomodal/calendariomodal';

@NgModule({
  declarations: [
    CalendarioPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarioPage),
    CalendariomodalPage
  ],
})
export class CalendarioPageModule {}
