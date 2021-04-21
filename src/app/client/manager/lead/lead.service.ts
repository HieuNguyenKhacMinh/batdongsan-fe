import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LeadService {
    constructor(private httpClient: HttpClient) { }
    
    all(): Observable<any> {
        const url = "";
        return this.httpClient.get(url);
    }
}