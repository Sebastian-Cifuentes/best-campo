import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './user.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `${ environment.apiUrl }/auth`;

  constructor(
    private http: HttpClient
  ) { }

  login( email: string, password: string ) {
    return this.http.post<{token: string}>(`${this.url}/login`, {email, password});
  }

  register( user: User ) {
    return this.http.post<{ message: string; user: User }>(`${ this.url }/register`, user);
  }

  assignTypeUser( userId: string, typeUserId: string ) {

    const params = new HttpParams()
      .set('typeUserId', typeUserId);

    return this.http.patch(`${ this.url }/${ userId }`, {params});
  }


}
