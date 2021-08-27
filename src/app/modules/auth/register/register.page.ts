/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { NotificationsService } from '../../../components/notifications.service';
import { Router } from '@angular/router';
import { StorageService } from '../../../components/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private readonly authService: AuthService,
    private readonly notificationsService: NotificationsService,
    private readonly storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  register( form: NgForm ) {

    if ( form.invalid ) {
      return;
    }

    this.authService.register( form.value )
      .subscribe(({ user, message }) => {
        this.storageService.userId = user._id;
        this.notificationsService.notification(message, 'success');
        this.router.navigateByUrl('/protected/choose-role');
      }, error => {
        this.notificationsService.notification(error.error.message, 'danger');
      });

  }

}
