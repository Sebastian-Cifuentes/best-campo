import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Buyer } from './register-buyer/buyer.interface';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  private apiUrl = `${ environment.apiUrl }/buyer`;

  constructor(
    private http: HttpClient
  ) { }

  create( buyer: Buyer ) {
    return this.http.post<{ buyer: Buyer; message: string }>(`${ this.apiUrl }/create`, buyer);
  }

}
