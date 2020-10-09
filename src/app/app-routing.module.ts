import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DersComponent } from './ders/ders.component';
import { DersAddFormsComponent } from './ders/ders-add-forms/ders-add-forms.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';


const routes: Routes = [
  {path:'dersler', component : DersComponent},
  {path:'ders-add', component: DersAddFormsComponent, canActivate:[LoginGuard]},
  // {path:'dersAdd', component: DersAddFormsComponent},
  {path:'', redirectTo: 'dersler', pathMatch:'full'},
  {path:'dersler/kategori/:katID', component:DersComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
