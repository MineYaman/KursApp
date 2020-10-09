import { Component, OnInit } from '@angular/core';
import { Kategori } from './kategori';
import { KategoriService } from '../services/kategori.service';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css'],
  providers:[KategoriService]
})
export class KategoriComponent implements OnInit {

  constructor(private kategoriService:KategoriService) { }
  title="Kategori Listesi"

  kategoriler: Kategori[]=[]
  ngOnInit() {
    this.kategoriService.getKategoriler().subscribe(data=>
      {
        this.kategoriler = data
      })
  }

}
