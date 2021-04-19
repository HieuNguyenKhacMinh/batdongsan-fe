import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NewsService {
    constructor(private httpClient: HttpClient) { }

    getCategories(): Observable<any> {
        const url = "http://localhost:3000/cms/categories";
        return this.httpClient.get(url);
    }

    getNews(id: string): Observable<any> {
        const url = "http://localhost:3000/cms/posts";
        return this.httpClient.get(`${url}/${id}`)
    }
}