import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfopersonalPageRoutingModule } from './infopersonal-routing.module';

import { InfopersonalPage } from './infopersonal.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    InfopersonalPageRoutingModule
  ],
  declarations: [InfopersonalPage]
})
export class InfopersonalPageModule {}
