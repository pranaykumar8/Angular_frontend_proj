// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/internal/Observable';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {
// private _url="https://dummyjson.com/products";
//   constructor(private _http:HttpClient) { }
// getProducts():Observable<any> {
//   return this._http.get(this._url);
  
// }
// delProducts(id):Observable<any> {
//   return this._http.delete(this._url+'/'+id);
  
// }
// private _saveurl="";// spring api for post method;
// public SaveUserData(formdata){
//   return this._http.post(this._saveurl,formdata);
// }

// src/app/services/product.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url = "http://localhost:8080/print";    // GET all products
  private _saveUrl = "http://localhost:8080/save"; // POST new product
  private _updateUrl = "http://localhost:8080/update"; // PUT update product
  private _deleteUrl = "http://localhost:8080/delete" // DELETE product by ID

  constructor(private _http: HttpClient) {}

  // Get all products
  public getProducts(): Observable<any> {//to insert observable
    return this._http.get(this._url);
  }

  // Delete product by ID
  public deleteProductById(id: number): Observable<any> {
    // return this._http.delete('${this._deleteUrl}/${id}');
    return this._http.delete(`${this._deleteUrl}/${id}`);

  }

  // Save user data to backend (POST request)
  public saveUserData(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(this._saveUrl, data, { headers });
  }

  // Add user (returning responseType of text)
  public addUser(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(this._saveUrl, data, { headers, responseType: 'text' });
  }

  // Update product (returning responseType of text)
  public updateProduct(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.put(this._updateUrl, data, { headers, responseType: 'text' });
  }
}



