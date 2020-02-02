import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'aviso-alta',
    loadChildren: () => import('./pages/aviso-alta/aviso-alta.module').then( m => m.AvisoAltaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/login/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'mirecorrido',
    loadChildren: () => import('./pages/mirecorrido/mirecorrido.module').then( m => m.MirecorridoPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
