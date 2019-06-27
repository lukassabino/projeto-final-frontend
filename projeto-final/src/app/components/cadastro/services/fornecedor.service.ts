import { fornecedorDTO } from './../dto/fornecedor-dto';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  url = 'http://localhost:8080/fornecedor';

  constructor(
    private http: HttpClient
  ) { }

  cadastrar(cliente: fornecedorDTO): Observable<any> {
    return this.http.post(`${this.url}/cadastrar`, cliente).pipe(take(1));
 }
 atualizar(cliente: fornecedorDTO): Observable<any> {
   return this.http.put(`${this.url}/${cliente.id}`, cliente).pipe(take(1));
 }

 buscarTodos(): Observable<Array<fornecedorDTO>> {
   return this.http.get<Array<fornecedorDTO>>(`${this.url}/mostrar-tudo`);
  }

 buscarPorId(id: number): Observable<fornecedorDTO> {
  return this.http.get<fornecedorDTO>(`${this.url}/${id}`).pipe(take(1));
 }

 deletar(id: number): Observable<any> {
   return this.http.delete(`${this.url}/${id}`).pipe(take(1));
 }
}
