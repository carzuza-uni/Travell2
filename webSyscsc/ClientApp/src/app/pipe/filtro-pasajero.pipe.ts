import { Pipe, PipeTransform } from '@angular/core';
import { Pasajero } from '../syscsc/models/pasajero';

@Pipe({
  name: 'filtroPasajero'
})
export class FiltroPasajeroPipe implements PipeTransform {

  transform(pasajero: Pasajero[], searchText: string): any {
    if(searchText == null){
      return pasajero;
    }
    return pasajero.filter(u => u.nombre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 || u.tiquete.ruta.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 );
  }

}
