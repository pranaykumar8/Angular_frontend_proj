import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  // [x: string]: string;
  private _addurl = "http://localhost:8080/add";    // GET all products
  private _subUrl = "http://localhost:8080/sub"; // POST new product
  private _multUrl = "http://localhost:8080/mult"; // PUT update product
  private _divUrl = "http://localhost:8080/div" // DELETE product by ID

  constructor(private _http: HttpClient) { }
  public  get(): Observable<any> {//to insert observable
    return this._http.get(this._addurl);
  }
  
  public  min(): Observable<any> {//to insert observable
    return this._http.get(this._subUrl);//{responseType: 'text' as 'json'});
  }

  public into():Observable<any>{
    return this._http.get(this._multUrl);
  }

  public by():Observable<any>{
    return this._http.get(this._divUrl);
  }
}
