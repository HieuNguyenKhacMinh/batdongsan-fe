import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OpportunityService {
    constructor(private http: HttpClient) { }

    public all(): any {
        const org_id = localStorage.getItem("organization_id");
        const url = 'http://localhost:3000/cms/pipeline';
        let headers = { authorization: localStorage.getItem('authorization') || '', site_id: localStorage.getItem('site_id') || '' }
        return this.http.get(`${url}/${org_id}`, { headers });
    }

    public update(data: any) {
        const url = 'http://localhost:3000/cms/pipeline';
        let headers = {
            authorization: localStorage.getItem('authorization') || '',
            site_id: localStorage.getItem('site_id') || ''
        };
        return this.http.put(`${url}/${data.id}`, data, { headers });
    }
}