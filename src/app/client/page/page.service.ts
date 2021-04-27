import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PageService {
    constructor(private httpClient: HttpClient) { }

    getPage(slug: string) {
        const url = "http://localhost:3000/cms/page";
        return this.httpClient.get(`${url}/${slug}`)
    }
}