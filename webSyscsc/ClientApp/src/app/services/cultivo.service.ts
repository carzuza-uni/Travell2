import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Cultivo } from '../syscsc/models/cultivo';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CultivoService {
  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService
  ) { 
    this.baseUrl = baseUrl;
  }

  post(cultivo: Cultivo): Observable<Cultivo>{
    return this.http.post<Cultivo>(this.baseUrl + 'api/Cultivo', cultivo)
      .pipe(
        tap(_=> this.handleErrorService.log('Datos enviados')),
        catchError(this.handleErrorService.handleError<Cultivo>('Registrar cultivo', null))
      );
  }

  put(id: number, cultivo: Cultivo): Observable<Cultivo>{
    let data = {
      id: id,
      cultivo: cultivo
    }
    cultivo.cultivoId = id;
    return this.http.put<Cultivo>(this.baseUrl + 'api/Cultivo/'+id, cultivo)
      .pipe(
        tap(_=> this.handleErrorService.log('Datos enviados')),
        catchError(this.handleErrorService.handleError<Cultivo>('Registrar cultivo', null))
      );
  }

  get(): Observable<Cultivo[]>{
    return this.http.get<Cultivo[]>(this.baseUrl + 'api/Cultivo')
      .pipe(
        tap(_ => this.handleErrorService.log('Datos consultados')),
        catchError(this.handleErrorService.handleError<Cultivo[]>('Consulta cultivo', null))
      );
  }
}
