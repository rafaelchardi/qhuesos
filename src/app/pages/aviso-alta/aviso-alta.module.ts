import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvisoAltaPageRoutingModule } from './aviso-alta-routing.module';

import { AvisoAltaPage } from './aviso-alta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvisoAltaPageRoutingModule
  ],
  declarations: [AvisoAltaPage]
})
export class AvisoAltaPageModule {}
