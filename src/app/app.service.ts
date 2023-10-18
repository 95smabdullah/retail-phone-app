import { Injectable } from '@angular/core';
import { CartRequest, CartResponse, PhoneRequest, PhoneResponse, UserRequest, UserResponse } from './app.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url ='http://localhost:8080/retail/phone'

  constructor(private http:HttpClient) { }
  userId:number = 0;

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

  login(userRequest:UserRequest):Observable<UserResponse>{
    return this.http.post<UserResponse>(`${this.url}/login`,userRequest);
  }

  register(userRequest:UserRequest):Observable<UserResponse>{
    return this.http.post<UserResponse>(`${this.url}/register`,userRequest);
  }

  addToCart(cartRequest:CartRequest):Observable<CartResponse>{
    return this.http.post<CartResponse>(`${this.url}/addToCart`,cartRequest);
  }

  deleteFromCart(prodId:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/deleteFromCart/${prodId}`)
  }

  seeCart(userId:number):Observable<PhoneResponse[]>{
    return this.http.get<PhoneResponse[]>(`${this.url}/seeCart/${userId}`);
  }

  deleteCart(userId:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/deleteCart/${userId}`)
  }
}
