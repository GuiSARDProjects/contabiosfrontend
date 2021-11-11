import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SimuladorRoutingModule as SimuladorRoutingModule } from './simulador-routing.module';
import { SimuladorPage } from './simulador.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SimuladorRoutingModule,
    ChartsModule
  ],
  declarations: [SimuladorPage]
})
export class SimuladorPageModule {}
