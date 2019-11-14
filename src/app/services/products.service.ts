import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpHeaders : HttpHeaders = new HttpHeaders();

  constructor(private http : HttpClient) {

   }

  public getProducts(page : Number) : Observable<any>{
    console.log(this.httpHeaders);
    return this.http.get('https://utn2019-avanzada2-tp9.herokuapp.com/api/products?page='+ page +'&size=50',{headers : {Authorization : 'Bearer ' + localStorage.getItem('token')}});
  }
}
