import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Usuario } from '../syscsc/models/usuario';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService
  ) { 
    this.baseUrl = baseUrl;
  }

  post(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.baseUrl + 'api/Usuario', usuario)
      .pipe(
        tap(_=> this.handleErrorService.log('Datos enviados')),
        catchError(this.handleErrorService.handleError<Usuario>('Registrar usuario', null))
      );
  }

  get(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.baseUrl + 'api/Usuario')
      .pipe(
        tap(_ => this.handleErrorService.log('Datos consultados')),
        catchError(this.handleErrorService.handleError<Usuario[]>('Consulta usuario', null))
      );
  }
}
