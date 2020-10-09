import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Ders } from '../ders';
import {DersService} from '../../services/ders.service';
import {AlertifyService} from '../../services/alertify.service';
import {KategoriService} from '../../services/kategori.service'
import { Kategori } from 'src/app/kategori/kategori';

@Component({
  selector: 'app-ders-add-forms',
  templateUrl: './ders-add-forms.component.html',
  styleUrls: ['./ders-add-forms.component.css']
})

export class DersAddFormsComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private alertifyService:AlertifyService,
    private dersService:DersService,
    private kategoriService:KategoriService 
    ) { }

  dersAddForm:FormGroup;
  ders:Ders = new Ders();
  kategoriler: Kategori[];

  ngOnInit() {
    this.createDersAddForm();
    this.kategoriService.getKategoriler().subscribe(data=>{
      this.kategoriler = data
    })
  }

  add(){
    if(this.dersAddForm.valid)
      this.ders = Object.assign({},this.dersAddForm.value)

      this.dersService.addDers(this.ders).subscribe(data=>{
        this.alertifyService.success(data.DersAdi + "başarıyla eklendi")
      })
  }

  createDersAddForm(){
    this.dersAddForm=this.formBuilder.group({
      // DersId:["",Validators.required],
      DersAdi:["",Validators.required],
      Ucret:["",Validators.required],
      Icerik:["",Validators.required],
      ImageUrl:["",Validators.required],
      KursId:["",Validators.required],
      OgretmenId:["",Validators.required],
      OgretmenAdi:["",Validators.required],
      KategoriId:["",Validators.required],
      KategoriAdi:["",Validators.required],
    });
  }

}
