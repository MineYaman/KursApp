import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {tap,catchError} from 'rxjs/operators';
import { Kategori } from '../kategori/kategori';

@Injectable()

export class KategoriService {
  path = "http://localhost:3000/kategoriler"
  constructor(private http:HttpClient) { }

  getKategoriler():Observable<Kategori[]>
  {
    return this.http.get<Kategori[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse){
    let errorMessage=''
    if(err.error instanceof ErrorEvent){
      errorMessage = 'Bir hata oluştu'+err.error.message
    }
    else{
      errorMessage = 'Sistemsel bir hata oluştu'
    }
    return throwError(errorMessage)
  }
}
