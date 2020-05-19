import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPasajero'
})
export class FiltroPasajeroPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
