import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductorService } from 'src/app/services/productor.service';
import { Productor } from '../models/productor';

@Component({
  selector: 'app-productor-registro',
  templateUrl: './productor-registro.component.html',
  styleUrls: ['./productor-registro.component.css']
})
export class ProductorRegistroComponent implements OnInit {
  productor: Productor;
  constructor(private route: ActivatedRoute, private productorService: ProductorService) { }

  ngOnInit() {
    this.productor = new Productor();
  }

  add(){
    this.productor.MunicipioId = Number(this.productor.MunicipioId);
    this.productorService.post(this.productor).subscribe(p => {
      if (p) {
        this.productor.MunicipioId = 0;
        this.productor.Cedula = '';
        this.productor.CedulaCafetera = '';
        this.productor.NombrePredio = '';
        this.productor.CodigoFinca = '';
        this.productor.CodigoSICA = '';
        this.productor.Actividades = '';
        this.productor.Telefono = '';
        this.productor.AfiliacionSalud = '';
        alert('Registro realizado con exito!');
      }
    });
    
    
  }

}
