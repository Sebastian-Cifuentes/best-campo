import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
})
export class CreateOrderPage implements OnInit {

  @ViewChild('slide') slide: IonSlides;

  slidesOptions = {
    initialSlide: 0,
    speed: 300,
    spaceBetween: 8,
    slidesPerView: 1,
    allowTouchMove: false
  };

  constructor(
    private _location: Location
  ) { }

  ngOnInit() {
  }

  back() {
    this._location.back();
  }

  backSlide() {
    this.slide.slidePrev();
  }

    
  next() {

    this.slide.slideNext();

  }

}
