import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Productor } from '../syscsc/models/productor';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductorService {
  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService
  ) { 
    this.baseUrl = baseUrl;
  }

  post(productor: Productor): Observable<Productor>{
    return this.http.post<Productor>(this.baseUrl + 'api/Productor', productor)
      .pipe(
        tap(_=> this.handleErrorService.log('Datos enviados')),
        catchError(this.handleErrorService.handleError<Productor>('Registrar productor', null))
      );
  }

  get(): Observable<Productor[]>{
    return this.http.get<Productor[]>(this.baseUrl + 'api/Productor')
      .pipe(
        tap(_ => this.handleErrorService.log('Datos consultados')),
        catchError(this.handleErrorService.handleError<Productor[]>('Consulta productor', null))
      );
  }
}
