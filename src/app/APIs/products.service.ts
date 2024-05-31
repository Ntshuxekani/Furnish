import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
 // withCredentials: true // This is the important part
};
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // products : any[] =[]

  private apiUrl = environment.api;

  constructor(private http: HttpClient){}
  
  //fetch all products
  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl+ '/FurnishUp/products', httpOptions);
  }
  //fetch one products 
  getProduct(id:number = 1): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?id=${id}`);
  }

  //post a product
  postProduct(productData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, productData);
  }
  //delete a product
  deleteProduct(productId: string){
    return this.http.delete<any>('');

   }
  
}
