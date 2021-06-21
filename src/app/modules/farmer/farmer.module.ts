import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home-farmer',
    loadChildren: () => import('./home-farmer/home-farmer.module').then(m => m.HomeFarmerPageModule)
  },
  {
    path: 'register-farmer',
    loadChildren: () => import('./register-farmer/register-farmer.module').then(m => m.RegisterFarmerPageModule)
  },
  {
    path: '**',
    redirectTo: 'home-farmer'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FarmerModule { }
