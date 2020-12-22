import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  done: boolean = false;
  name: string;

  constructor() { }
  logout(): void{
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
  }
}
