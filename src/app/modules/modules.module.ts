import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'buyer',
    loadChildren: () => import('./buyer/buyer.module').then(m => m.BuyerModule)
  },
  {
    path: 'farmer',
    loadChildren: () => import('./farmer/farmer.module').then(m => m.FarmerModule)
  },
  {
    path: 'transportator',
    loadChildren: () => import('./transportator/transportator.module').then(m => m.TransportatorModule)
  },
  {
    path: 'choose-role',
    loadChildren: () => import('./choose-role/choose-role.module').then(m => m.ChooseRolePageModule)
  },
  {
    path: '**',
    loadChildren: () => import('../shared/no-exist/no-exist.module').then(m => m.NoExistPageModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ModulesModule { }
