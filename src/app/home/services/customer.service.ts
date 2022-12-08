import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../interfaces/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public baseUrl: string = environment.baseUrl;

  public getHeroes(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${ this.baseUrl }/customers`);
  }
  
  public getHeroeById(id: string): Observable<Customer>{
    return this.http.get<Customer>(`${ this.baseUrl }/customers/${id}`);
  }
  
//   public getHeroeSugerido(termino: string): Observable<Customer[]>{
//     return this.http.get<Customer[]>(`${ this.baseUrl }/heroes?q=${ termino }&_limit=6`);
//   }

  public guardarHeroe(heroe: Customer): Observable<Customer>{
    return this.http.post<Customer>(`${ this.baseUrl }/customers`, heroe);
  }

  constructor( private http: HttpClient) { }
}