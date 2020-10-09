import { Injectable } from '@angular/core';
import { Ogretmen } from '../ogretmen/ogretmen';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }
  loggedIn = false;

  login(ogretmen:Ogretmen):boolean{
    if(ogretmen.KullaniciAdi =="mansur" && ogretmen.Password=="123"){
      this.loggedIn = true;
      localStorage.setItem("isLogged", ogretmen.KullaniciAdi)

      return true;
    }
    return false;
  }

  isLoggedIn(){
    return this.loggedIn;
  }
  logout(){
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }
}
