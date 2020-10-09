import { Component, OnInit } from '@angular/core';
import {Ders} from './ders';
import {AlertifyService} from '../services/alertify.service';
// import {HttpClient} from '@angular/common/http';
import {DersService} from '../services/ders.service';
import {ActivatedRoute} from '@angular/router';

declare let alertify:any

@Component({
  selector: 'app-ders',
  templateUrl: './ders.component.html',
  styleUrls: ['./ders.component.css'],
  providers:[DersService]
})
export class DersComponent implements OnInit {

  constructor(private myAlertifyService: AlertifyService,
    private dersService:DersService, private activatedRoute:ActivatedRoute) { }
  title = "Ders Listesi"
  filterText = ""

  dersler : Ders[]=[]

  ngOnInit() {
    this.activatedRoute.params.subscribe(parameters=>{
      this.dersService.getDersler(parameters["katID"]).subscribe(
        data=>
        {
          this.dersler = data
        }
      )
    })
  }

  addToChart(d:Ders){
    this.myAlertifyService.success(d.DersAdi + " Sepete Eklendi")
  }

}
