import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Ogretmen } from '../ogretmen/ogretmen';
import { AccountService } from '../services/account.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myAlertifyService: AlertifyService,private accountService: AccountService,
    private router: Router) { }

    model: Ogretmen =new Ogretmen();

  ngOnInit() {
  }
  
  login(form: NgForm){
    this.accountService.login(this.model);
    if(this.accountService.login(this.model)){
      this.router.navigate(["/dersler"]);
    }
    else{
      this.router.navigate(["/login"]);
    }

  }

  girisYapin(){
    if(this.accountService.login(this.model)){
      this.myAlertifyService.success("Giriş Başarılı")
    }
    else{
      this.myAlertifyService.success(" Kullanıcı adı veya şifre yanlış")
    }
  }

}
