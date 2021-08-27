import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationsService } from '../../../components/notifications.service';
import { IonInput, IonSlides } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-transportator',
  templateUrl: './register-transportator.page.html',
  styleUrls: ['./register-transportator.page.scss'],
})
export class RegisterTransportatorPage implements OnInit {

  @ViewChild('slide') slide: IonSlides;

  foods: string[] = [];

  slidesOptions = {
    initialSlide: 0,
    speed: 300,
    spaceBetween: 8,
    slidesPerView: 1,
    allowTouchMove: false
  };

  constructor(
    private notificationService: NotificationsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  back() {
    this.slide.slidePrev();
  }

  next( type: string, form?: NgForm ) {

    switch (type) {
      case 'info':

        if ( form.invalid ) {
          this.notificationService.notification('Asegurate de llenar todos los campos', 'warning');
          return;
        }

        break;
      case 'address':

        if ( form.invalid ) {
          this.notificationService.notification('Asegurate de llenar todos los campos', 'warning');
          return;
        }

        this.router.navigateByUrl('/protected/transportator/home-transportator');

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

}
