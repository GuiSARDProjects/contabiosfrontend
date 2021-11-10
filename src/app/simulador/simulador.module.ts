import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SimuladorPage } from './tab2.page';

import { Tab2PageRoutingModule as SimuladorRoutingModule } from './simulador-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SimuladorRoutingModule
  ],
  declarations: [SimuladorPage]
})
export class Tab2PageModule {}
