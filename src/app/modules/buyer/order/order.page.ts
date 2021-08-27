import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  constructor(
    private _location: Location
  ) { }

  ngOnInit() {
  }

  back() {
    this._location.back();
  }

}
