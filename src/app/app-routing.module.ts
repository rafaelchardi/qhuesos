import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
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
    path: 'aviso-alta',
    loadChildren: () => import('./pages/aviso-alta/aviso-alta.module').then( m => m.AvisoAltaPageModule)
  },
  {
    path: 'infopersonal',
    loadChildren: () => import('./pages/infopersonal/infopersonal.module').then( m => m.InfopersonalPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
