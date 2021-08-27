import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home-buyer',
    loadChildren: () => import('./home-buyer/home-buyer.module').then(m => m.HomeBuyerPageModule)
  },
  {
    path: 'create-order',
    loadChildren: () => import('./create-order/create-order.module').then(m => m.CreateOrderPageModule)
  },
  {
    path: 'order/:id',
    loadChildren: () => import('./order/order.module').then(m => m.OrderPageModule)
  },
  {
    path: 'register-buyer',
    loadChildren: () => import('./register-buyer/register-buyer.module').then(m => m.RegisterBuyerPageModule)
  },
  {
    path: '**',
    redirectTo: 'home-buyer'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BuyerModule { }
