// src/app/services/auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  private apiUrl = 'http://localhost:8080/{username}/{password}'; // Replace with your backend endpoint

  constructor(private http: HttpClient) {}
  url="http://localhost:8080/check/"
  feed="http://localhost:8080/feed"
  public checkuser(username:any, password:any):Observable<any>
  {
    return this.http.get(this.url+username+"/"+password,{responseType:'text'})
  }

  public select():Observable<any>
  {
    return this.http.get(this.url)
  }

  // signIn(username: string, password: string): Observable<string> {
  //   const params = new HttpParams()
  //     .set('username', username)
  //     .set('password', password);

  //   return this.http.get(this.apiUrl, { params, responseType: 'text' }).pipe(
  //     map((response: string) => {
  //       return response.includes('exist') ? 'exist' : 'not-exist';
  //     }),
  //     catchError((error) => {
  //       console.error('Sign-in error:', error);
  //       return of('error');
  //     })
  //   );
  // }
}
