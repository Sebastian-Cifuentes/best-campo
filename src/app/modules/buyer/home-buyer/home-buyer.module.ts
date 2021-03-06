import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeBuyerPage } from './home-buyer.page';
import { Routes, RouterModule } from '@angular/router';
import { CardOrderComponent } from './components/card-order/card-order.component';

const routes: Routes = [
  {
    path: '',
    component: HomeBuyerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeBuyerPage,
    CardOrderComponent
  ]
})
export class HomeBuyerPageModule {}
