import { Pipe, PipeTransform } from '@angular/core';
import { Productor } from '../syscsc/models/productor';

@Pipe({
  name: 'filtroProductor'
})
export class FiltroProductorPipe implements PipeTransform {

  transform(productor: Productor[], searchText: string): any {
    if(searchText == null){
      return productor;
    }
    return productor.filter(u => u.NombrePredio.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 || u.Cedula.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 || u.CedulaCafetera.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 || u.CodigoFinca.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 );
  }

}
