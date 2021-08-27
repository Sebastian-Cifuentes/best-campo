import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface TypeUser {
  _id?: string;
  name?: string;
  image?: string;
  url?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TypeUserService {

  typeUsers: TypeUser[] = [];

  private apiUrl = `${ environment.apiUrl }/type-user`;

  constructor(
    private http: HttpClient
  ) {
    this.getAll();
  }

  getAll() {
    this.http.get<{typeUsers: TypeUser[]}>( this.apiUrl )
      .subscribe(({typeUsers}) => this.typeUsers = typeUsers);
  }

}
