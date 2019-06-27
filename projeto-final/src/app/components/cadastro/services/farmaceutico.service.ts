import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { farmaceuticoDTO } from './../dto/farmaceutico-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FarmaceuticoService {


  url = 'http://localhost:8080/farmaceutico';

  constructor(
    private http: HttpClient
  ) { }

  cadastrar(cliente: farmaceuticoDTO): Observable<any> {
    return this.http.post(`${this.url}/cadastrar`, cliente).pipe(take(1));
 }
 atualizar(cliente: farmaceuticoDTO): Observable<any> {
   return this.http.put(`${this.url}/${cliente.id}`, cliente).pipe(take(1));
 }

 buscarTodos(): Observable<Array<farmaceuticoDTO>> {
   return this.http.get<Array<farmaceuticoDTO>>(`${this.url}/mostrar-tudo`);
  }

 buscarPorId(id: number): Observable<farmaceuticoDTO> {
  return this.http.get<farmaceuticoDTO>(`${this.url}/${id}`).pipe(take(1));
 }

 deletar(id: number): Observable<any> {
   return this.http.delete(`${this.url}/${id}`).pipe(take(1));
 }
}
