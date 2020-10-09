import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KursComponent } from './kurs/kurs.component';
import { NavComponent } from './nav/nav.component';
import { DersComponent } from './ders/ders.component';
import { KategoriComponent } from './kategori/kategori.component';
import { DersFiltrePipe } from './ders/ders-filtre.pipe';
import {AlertifyService} from './services/alertify.service';
import { DersAddFormsComponent } from './ders/ders-add-forms/ders-add-forms.component';
import { LoginComponent } from './login/login.component';
import { OgretmenComponent } from './ogretmen/ogretmen.component';
import { OgrenciComponent } from './ogrenci/ogrenci.component';

@NgModule({
  declarations: [
    AppComponent,
    KursComponent,
    NavComponent,
    DersComponent,
    KategoriComponent,
    DersFiltrePipe,
    DersAddFormsComponent,
    LoginComponent,
    OgretmenComponent,
    OgrenciComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})


export class AppModule { 

}
