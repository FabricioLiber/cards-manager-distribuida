import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  constructor(private http: HttpClient) { }

  post(object: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/cartoes', JSON.parse(JSON.stringify(object)))
  }
}
