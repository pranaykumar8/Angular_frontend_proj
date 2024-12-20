// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class PestiqService {

//   constructor() { }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PestiqService {
  private baseUrl = 'http://localhost:8080'; // Update this with your backend base URL
 // private getall = "http://localhost:8080/";
//   private getid = "http://localhost:8080/{order_id}";
 
  
//   private upd = "http://localhost:8080/{order_id}";
// private del = "http://localhost:8080/{order_id}"
  constructor(private http: HttpClient) {}

  getPestiqs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }

  getPestiqById(order_id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${order_id}`);
  }

  createPestiq(pestiq: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/`, pestiq);
  }

  updatePestiq(order_id: number, pestiq: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${order_id}`, pestiq);
  }

  deletePestiq(order_id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${order_id}`);
  }
}
// private baseUrl = "http://localhost:8080/";    // GET all products
//   private baseUrlg1 = "http://localhost:8080/{order_id}"; // POST new product
//   private baseUrl2 = "http://localhost:8080/"; // PUT update product
//   private baseUrlu3 = "http://localhost:8080//{order_id}" // DELETE product by ID
//   private baseUrld4 = "http://localhost:8080//{order_id}"