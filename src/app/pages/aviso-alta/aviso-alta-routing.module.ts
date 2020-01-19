import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvisoAltaPage } from './aviso-alta.page';

const routes: Routes = [
  {
    path: '',
    component: AvisoAltaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvisoAltaPageRoutingModule {}
