import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarioModalPage } from './calendario-modal';

@NgModule({
  declarations: [
    CalendarioModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarioModalPage),
  ],
})
export class CalendarioModalPageModule {}
