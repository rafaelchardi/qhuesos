import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MirecorridoPage } from './mirecorrido.page';

const routes: Routes = [
  {
    path: '',
    component: MirecorridoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MirecorridoPageRoutingModule {}
