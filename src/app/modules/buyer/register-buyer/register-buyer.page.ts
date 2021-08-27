/* eslint-disable no-underscore-dangle */
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput, IonSlides } from '@ionic/angular';
import { NotificationsService } from '../../../components/notifications.service';
import { Buyer } from './buyer.interface';
import { StorageService } from '../../../components/storage.service';
import { BuyerService } from '../buyer.service';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';
import { FoodService } from '../../../components/foods/food.service';


@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.page.html',
  styleUrls: ['./register-buyer.page.scss'],
})
export class RegisterBuyerPage implements OnInit {

  @ViewChild('slide') slide: IonSlides;

  buyer: Buyer = {foods: []};
  foods: string[] = [];

  slidesOptions = {
    initialSlide: 0,
    speed: 300,
    spaceBetween: 8,
    slidesPerView: 1,
    allowTouchMove: false
  };

  constructor(
    private readonly notificationService: NotificationsService,
    private readonly storageService: StorageService,
    private readonly buyerService: BuyerService,
    private readonly authService: AuthService,
    public readonly foodService: FoodService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  back() {
    this.slide.slidePrev();
  }

  next( type: string ) {

    switch (type) {
      case 'food':

        if ( this.foods.length === 0 ) {
          this.notificationService.notification('Debes agregar un alimento', 'warning');
          return;
        }

        this.buyer.foods = this.foods;

        break;

    }

    this.slide.slideNext();

  }

  addFood( input: IonInput ) {
    const food = `${input.value}`;
    this.foods.push(food);
    input.value = '';
  }

  async removeFood() {
    const confirm = await this.notificationService.confirmDelete('alimento');

    if ( confirm ) {
      this.notificationService.notification('Alimento eliminado', 'success');
    }
  }

  change(e: any) {
    const { value } = e.detail;

    for ( const v of value ) {
      this.buyer.foods.push(v._id);
      this.foods.push(v.name);
    }

  }

  onSubmit( value: string ) {

    this.buyer.hasTransport = value === 'yes' ? true : false;

    const userId = this.storageService.userId;
    const typeUserId = this.storageService.typeUserId;

    this.buyer.user = userId;

    this.buyerService.create( this.buyer )
      .pipe(
        tap( () => this.authService.assignTypeUser(userId, typeUserId) )
      )
      .subscribe(({message}) => {
        this.notificationService.notification( message, 'success' );
        this.router.navigateByUrl('/protected/buyer/home-buyer');
      }, err => this.notificationService.notification( err.message, 'danger' ));

  }

}
