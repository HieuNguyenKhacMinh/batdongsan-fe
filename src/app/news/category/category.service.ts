import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class CategoryService {
    constructor(private httpClient: HttpClient) { }
    
    url = "http://localhost:3000/cms/categories";
    get() {
        return this.httpClient.get(this.url);
    }
}