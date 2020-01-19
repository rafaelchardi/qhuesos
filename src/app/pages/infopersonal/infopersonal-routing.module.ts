import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfopersonalPage } from './infopersonal.page';

const routes: Routes = [
  {
    path: '',
    component: InfopersonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfopersonalPageRoutingModule {}
