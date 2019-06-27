import { clienteDTO } from './../dto/cliente-dto';
import { Injectable } from '@angular/core';
import {  take } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = 'http://localhost:8080/cliente';

  constructor(
    private http: HttpClient
  ) { }

  cadastrar(cliente: clienteDTO): Observable<any> {
    return this.http.post(`${this.url}/cadastrar`, cliente).pipe(take(1));
 }
 atualizar(cliente: clienteDTO): Observable<any> {
   return this.http.put(`${this.url}/${cliente.id}`, cliente).pipe(take(1));
 }

 buscarTodos(): Observable<Array<clienteDTO>> {
   return this.http.get<Array<clienteDTO>>(`${this.url}/mostrar-tudo`);
  }

  buscarPorId(id: number): Observable<clienteDTO> {
    if (id) {
      return this.http.get<clienteDTO>(`${this.url}/${id}`).pipe(take(1));
    }
    return of();
  }

 deletar(id: number): Observable<any> {
   return this.http.delete(`${this.url}/${id}`).pipe(take(1));
 }
}
