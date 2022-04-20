import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../../components/storage.service';
import { NotificationsService } from '../../../components/notifications.service';
import { TypeUserService } from '../../../components/type-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup = this.fb.group({
    email: [, [Validators.required, Validators.email]],
    password: [, [Validators.required]]
  });

  constructor(
    private readonly authService: AuthService,
    private readonly storageService: StorageService,
    private readonly notificationService: NotificationsService,
    private readonly typeUserService: TypeUserService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.form.invalid) {
      return;
    }
    const {email, password} = this.form.value;

    this.authService.login(email, password)
    .subscribe(({token, user}) => {

        const {typeUser, name, data} = user;

        if ( typeUser ) {
          this.typeUserService.getById(typeUser)
            .subscribe(({typeUser: typeuser}) => {
              if (data) {
                this.router.navigateByUrl(typeuser.urlHome);
              } else {
                this.router.navigateByUrl(typeuser.url);
              }
            });
        } else {
          this.router.navigateByUrl('/protected/choose-role');
        }
        this.storageService.token = token;
        this.notificationService.notification(`Bienvenida/o ${name}`, 'success');
      }, ({error}) => {
        this.notificationService.notification(error.message, 'danger');
      });
  }

  loginGoogle() {

  }



}
