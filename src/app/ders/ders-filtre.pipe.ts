import { Pipe, PipeTransform } from '@angular/core';
import { Ders } from './ders';

@Pipe({
  name: 'dersFiltre'
})
export class DersFiltrePipe implements PipeTransform {

  transform(value: Ders[], filterText:string): Ders[] {
    filterText = filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((d:Ders)=>d.Icerik.toLocaleLowerCase()
    .indexOf(filterText)!==-1):value;
  }

}
