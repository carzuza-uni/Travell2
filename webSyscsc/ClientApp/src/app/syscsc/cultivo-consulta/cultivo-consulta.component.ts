import { Component, OnInit } from '@angular/core';
import { Cultivo } from '../models/cultivo';
import { ActivatedRoute } from '@angular/router';
import { CultivoService } from 'src/app/services/cultivo.service';
import { PasajeroService } from 'src/app/services/pasajero.service';
import { Pasajero } from '../models/pasajero';
import { Tiquete } from '../models/tiquete';

@Component({
  selector: 'app-cultivo-consulta',
  templateUrl: './cultivo-consulta.component.html',
  styleUrls: ['./cultivo-consulta.component.css']
})
export class CultivoConsultaComponent implements OnInit {
  pasajero: Pasajero;
  
  pasajeros: Pasajero[];
  ruta:number;
  rutas= [];
  valores = [];
  constructor(private route: ActivatedRoute, private pasajeroService: PasajeroService) {
    this.rutas[1] = 'Valledupar -Bogotá';
    this.rutas[2] = 'Valledupar -Barranquilla';
    this.rutas[3] = 'Valledupar -Santa Marta';
    this.rutas[4] = 'Valledupar -Cartagena';

    this.valores[1] = 90000;
    this.valores[2] = 35000;
    this.valores[3] = 40000;
    this.valores[4] = 60000;
   }

  ngOnInit() {
    this.pasajero = new Pasajero();
    this.get();
  }

  add(){
    if(!this.pasajero.nombre){
      alert('Debe completar el campo Nombre.');
      return false;
    }
    let tiquete:Tiquete = new Tiquete();
    
    tiquete.identificacion = this.pasajero.identificacion;
    tiquete.ruta = this.rutas[this.ruta];
    tiquete.valor = this.valores[this.ruta];

    this.pasajero.tiquete = tiquete;
    this.pasajeroService.post(this.pasajero).subscribe(p => {
      if (p != null) {
        //this.pasajero.nombre = '';
        alert('Registro realizado con exito!');
      }
      this.get();
    }); 
  }

  get(){
    this.pasajeroService.get().subscribe(result => {
      var item = [];
      for(let x of result){        
        for(let x2 of x.tiquetes){
          let p = {
            identificacion: x.identificacion,
            nombre: x.nombre,
            tiquete: x2
          };
          item.push(p);
        }        
      }
      this.pasajeros = item;
      console.log('pasajeros',this.pasajeros);
    });
  }

  buscar(){
    if(!this.pasajero.identificacion){
      return false;
    }
    this.pasajeroService.buscar(this.pasajero.identificacion).subscribe(result => {
      if(result != null){
        this.pasajero.nombre = result.nombre;
      }      
    });
  }

}
