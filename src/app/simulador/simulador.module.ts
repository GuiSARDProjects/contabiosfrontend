import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SimuladorRoutingModule as SimuladorRoutingModule } from './simulador-routing.module';
import { SimuladorPage } from './simulador.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SimuladorRoutingModule
  ],
  declarations: [SimuladorPage]
})
export class SimuladorPageModule {}
