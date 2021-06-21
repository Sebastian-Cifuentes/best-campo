import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'protected',
    loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)
  },
  {
    path: '**',
    redirectTo: 'auth'
  },
  {
    path: 'no-exist',
    loadChildren: () => import('./shared/no-exist/no-exist.module').then( m => m.NoExistPageModule)
  },
  {
    path: 'choose-role',
    loadChildren: () => import('./modules/choose-role/choose-role.module').then( m => m.ChooseRolePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
