/* eslint-disable no-underscore-dangle */
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonInput, IonSlides } from '@ionic/angular';
import { NotificationsService } from '../../../components/notifications.service';
import { Food, Farmer } from '../farmer.interface';
import { StorageService } from '../../../components/storage.service';
import { FarmerService } from '../farmer.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-register-farmer',
  templateUrl: './register-farmer.page.html',
  styleUrls: ['./register-farmer.page.scss'],
})
export class RegisterFarmerPage implements OnInit {

  @ViewChild('slide') slide: IonSlides;

  farmer: Farmer = {};
  foods: Food[] = [];

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
    private readonly farmerService: FarmerService,
    private readonly authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  back() {
    this.slide.slidePrev();
  }

  next( type: string, form?: NgForm ) {

    switch (type) {
      case 'food':

        if ( this.foods.length === 0 ) {
          this.notificationService.notification('Debes agregar un alimento', 'warning');
          return;
        }

        break;

      case 'time':

        if ( form.invalid ) {
          this.notificationService.notification('Debes agregar tiempo de cosecha a todos los productos', 'warning');
          return;
        }

        Object.keys(form.value).forEach( f => {
          const food = this.foods.filter( fo => f === fo._id );
          food[0].dateHarvest = form.value[f];
        });

        break;

      case 'inHarvest':

        const itemsSelecteds = Object.entries(form.value).filter( f => f[1] === true );

        itemsSelecteds.forEach( i => {
          const food = this.foods.filter( fo => i[0] === fo._id);
          food[0].onSale = i[1];
        });

        this.farmer.foods = this.foods;
        this.farmer.user = this.storageService.userId;

        break;
    }

    this.slide.slideNext();

  }

  addFood( input: IonInput ) {
    const food = `${input.value}`;
    this.foods.push({_id: food, onSale: false});

    input.value = '';
  }

  async removeFood() {
    const confirm = await this.notificationService.confirmDelete('alimento');

    if ( confirm ) {
      this.notificationService.notification('Alimento eliminado', 'success');
    }
  }

  onSubmit(value: string) {

    this.farmer.hasTransport = value === 'yes' ? true : false;
    const userId = this.storageService.userId;
    const typeUserId = this.storageService.typeUserId;

    this.farmerService.create(this.farmer)
      .pipe(
        tap( () => this.authService.assignTypeUser(userId, typeUserId))
      )
      .subscribe(({message}) => {
        this.notificationService.notification(message, 'success');
        this.router.navigateByUrl('/protected/farmer/farmer-home');
      }, err => this.notificationService.notification( err.message, 'danger' ));

  }

}
