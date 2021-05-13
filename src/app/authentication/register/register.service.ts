import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) { }

  login(user: any): any {
    return this.http.post('http://localhost:3000/auth/register', user);
  }
  save(user): Observable<any> {
    const url = "http://localhost:3000/identity/auth/register";
    let headers = {
        authorization: localStorage.getItem('authorization') || '',
        site_id: localStorage.getItem('site_id') || ''
    };
    return this.http.post(url, user, { headers });
}
}
