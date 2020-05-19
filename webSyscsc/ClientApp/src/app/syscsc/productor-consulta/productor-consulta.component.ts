import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productor } from '../models/productor';
import { ProductorService } from 'src/app/services/productor.service';

@Component({
  selector: 'app-productor-consulta',
  templateUrl: './productor-consulta.component.html',
  styleUrls: ['./productor-consulta.component.css']
})
export class ProductorConsultaComponent implements OnInit {
  searchText: string;
  productores: Productor[];
  constructor(private route: ActivatedRoute, private productorService: ProductorService) { }

  ngOnInit() {
    this.get();
  }

  get(){
    this.productorService.get().subscribe(result => {
      this.productores = result;
    });
  }

}
