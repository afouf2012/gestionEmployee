import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conges } from './conges';

@Injectable({
  providedIn: 'root'
})
export class CongesService {


  private baseURL="http://localhost:1200/api/v3/conges";
  constructor(private httpClient: HttpClient) { }

  getCongesList(): Observable<Conges[]>{
    return this.httpClient.get<Conges[]>(`${this.baseURL}`);
  }

  createConges(Conges :Conges): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, Conges);
  }

  getCongesById(id: number) : Observable<Conges>{
    return this.httpClient.get<Conges>(`${this.baseURL}/`+id);
  }

  updateConges(id: number, Conges: Conges){
    return this.httpClient.put(`${this.baseURL}/`+id, Conges);
  }

  deleteConges(id: number | undefined): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/`+id);
  }
}


