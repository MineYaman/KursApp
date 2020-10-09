import { Injectable } from '@angular/core';
declare let alertify:any
@Injectable(
  //{
  // providedIn: 'root'
  // servisin global olduğunu gösterir
//}
)
export class AlertifyService {

  constructor() { }

  success(message:string){
    alertify.success(message)
  }
}
