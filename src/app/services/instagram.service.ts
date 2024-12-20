// src/app/services/instagram.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  private apiUrl = 'http://localhost:8080/'; // Update with your actual backend URL

  constructor(private http: HttpClient) { }

  saveInstagram(instagram: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, instagram);
  }
}
