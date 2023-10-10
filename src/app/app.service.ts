import { Injectable } from '@angular/core';
import { PhoneRequest, PhoneResponse } from './app.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url ='http://localhost:8081/retail/phone'

  constructor(private http:HttpClient) { }

  addPhone(phoneRequest:PhoneRequest):Observable<PhoneResponse>{
    return this.http.post<PhoneResponse>(`${this.url}/add`, phoneRequest);
  }

  listPhone():Observable<PhoneResponse[]>{
    return this.http.get<PhoneResponse[]>(`${this.url}/findAll`);
  }

  updatePhone(phoneRequest:PhoneRequest, id:number):Observable<PhoneResponse>{
    return this.http.put<PhoneResponse>(`${this.url}/update/${id}`,phoneRequest);
  }

  deletePhone(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/delete/${id}`);
  }
}
