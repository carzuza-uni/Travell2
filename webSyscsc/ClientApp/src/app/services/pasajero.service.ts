import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Pasajero } from '../syscsc/models/pasajero';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PasajeroService {
  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService
  ) { 
    this.baseUrl = baseUrl;
  }

  post(pasajero: Pasajero): Observable<Pasajero>{
    return this.http.post<Pasajero>(this.baseUrl + 'api/Pasajero', pasajero)
      .pipe(
        tap(_=> this.handleErrorService.log('Datos enviados')),
        catchError(this.handleErrorService.handleError<Pasajero>('Registrar pasajero', null))
      );
  }

  get(): Observable<Pasajero[]>{
    return this.http.get<Pasajero[]>(this.baseUrl + 'api/Pasajero')
      .pipe(
        tap(_ => this.handleErrorService.log('Datos consultados')),
        catchError(this.handleErrorService.handleError<Pasajero[]>('Consulta pasajero', null))
      );
  }

  buscar(identificacion: number): Observable<Pasajero>{
    return this.http.get<Pasajero>(this.baseUrl + 'api/Pasajero/' + identificacion)
      .pipe(
        tap(_ => this.handleErrorService.log('Datos consultados')),
        catchError(this.handleErrorService.handleError<Pasajero>('Consulta pasajero', null))
      );
  }
}
