import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Farmer } from './farmer.interface';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  private apiUrl = `${ environment.apiUrl }/farmer`;

  constructor(
    private http: HttpClient
  ) { }

  create( farmer: Farmer ) {
    return this.http.post<{message: string; farmer: Farmer}>(`${ this.apiUrl }/create`, farmer);
  }

}
