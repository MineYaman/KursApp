import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Ders} from '../ders/ders';
import {Observable, throwError} from 'rxjs';
import {tap,catchError} from 'rxjs/operators';

@Injectable()

export class DersService {
  path = "http://localhost:3000/dersler"
  constructor(private http:HttpClient) { }

  getDersler(ID):Observable<Ders[]>
  {
    let newPath = this.path;
    if(ID){
      newPath = newPath +"?KategoriId="+ID
    }
    return this.http.get<Ders[]>(newPath).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addDers(ders: Ders):Observable<Ders>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<Ders>(this.path, ders).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
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
