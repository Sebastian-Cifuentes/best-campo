import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home-transportator', 
    loadChildren: () => import('./home-transportator/home-transportator.module').then(m => m.HomeTransportatorPageModule)
  },
  {
    path: 'register-transportator', 
    loadChildren: () => import('./register-transportator/register-transportator.module').then(m => m.RegisterTransportatorPageModule)
  },
  {
    path: '**', 
    redirectTo: 'home-transportator'
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TransportatorModule { }
