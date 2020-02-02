import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MirecorridoPageRoutingModule } from './mirecorrido-routing.module';


import { MirecorridoPage } from './mirecorrido.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MirecorridoPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [MirecorridoPage]
})
export class MirecorridoPageModule {}
