import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Food } from '../../modules/farmer/farmer.interface';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  foods: Food[] = [];

  private apiUrl = `${ environment.apiUrl }/foods`;

  constructor(
    private http: HttpClient
  ) {
    this.getAll();
  }

  getAll() {
    this.http.get<{ foods: Food[] }>( this.apiUrl )
      .subscribe(({foods}) => this.foods = foods);
  }
}
