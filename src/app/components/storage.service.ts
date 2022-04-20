import { Injectable } from '@angular/core';

export enum LocalStorage {
  userId = 'userId',
  typeUserId = 'typeUserId',
  token = 'token'
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  get userId() {
    return localStorage.getItem(LocalStorage.userId);
  }

  set userId(id: string) {
    localStorage.setItem(LocalStorage.userId, id);
  }

  get typeUserId() {
    return localStorage.getItem(LocalStorage.typeUserId);
  }

  set typeUserId(id: string) {
    localStorage.setItem(LocalStorage.typeUserId, id);
  }

  get token() {
    return localStorage.getItem(LocalStorage.token);
  }

  set token(token: string) {
    localStorage.setItem(LocalStorage.token, token);
  }

  clear() {
    localStorage.clear();
  }

}
