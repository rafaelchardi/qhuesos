import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,

    FormsModule,
     RouterModule.forChild([{ path: '', component: Tab3Page },
     {
      path: 'infopersonal',
       loadChildren: () =>
       import('../infopersonal/infopersonal.module').then(m => m.InfopersonalPageModule)
    },
    {
      path: 'chat',
       loadChildren: () =>
       import('../chat/chat.module').then(m => m.ChatPageModule)
    },
    {
      path: 'mirecorrido',
       loadChildren: () =>
       import('../mirecorrido/mirecorrido.module').then(m => m.MirecorridoPageModule)
    }])

  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
