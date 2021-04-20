import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProjectService {
    constructor(private httpClient: HttpClient) { }

    getProjectType(): Observable<any> {
        const url = "http://localhost:3000/cms/project-type";
        return this.httpClient.get(url);
    }

    getProject(id: string): Observable<any> {
        const url = "http://localhost:3000/cms/project";
        let headers = {
            authorization: localStorage.getItem('authorization') || '',
            site_id: localStorage.getItem('site_id') || ''
        };
        return this.httpClient.get(`${url}/${id}`);
    }
}