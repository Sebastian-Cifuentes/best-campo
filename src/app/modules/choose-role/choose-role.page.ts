import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeUserService } from '../../components/type-user.service';
import { StorageService } from '../../components/storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-choose-role',
  templateUrl: './choose-role.page.html',
  styleUrls: ['./choose-role.page.scss'],
})
export class ChooseRolePage implements OnInit {

  constructor(
    public readonly typeUserService: TypeUserService,
    private readonly storageService: StorageService,
    private readonly authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goTypeUser(id: string, url: string) {
    this.authService.assignTypeUser(this.storageService.userId, id);
    this.router.navigateByUrl(url);
  }

}
