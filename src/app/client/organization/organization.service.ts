import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class OrganizationService {
  [x: string]: any;
  url = 'http://localhost:3000/cms/organization';
  propertiesUrl = ''
  constructor(private http: HttpClient) { }

  all(): any {
    let headers = { authorization: localStorage.getItem('authorization') || '', site_id: localStorage.getItem('site_id') || '' }
    return this.http.get(`${this.url}`, { headers });
  }

  get(id: any): any {
    return this.http.get(`${this.url}/${id}`);
  }

  getProperties() {
    let headers = { authorization: localStorage.getItem('authorization') || '', site_id: localStorage.getItem('site_id') || '' }
    return this.http.get(`http://localhost:3000/cms/table-config/organization`, { headers });
  }

  getOrganization(id: string): Observable<any> {
    console.log(id + "    haaaaaaaaa");
    const url = "http://localhost:3000/cms/organization";
    let headers = {
        authorization: localStorage.getItem('authorization') || '',
        site_id: localStorage.getItem('site_id') || ''
    };
    return this.http.get(`${url}/${id}`);
}

  update(data: any) {
    let headers = {
      authorization: localStorage.getItem('authorization') || '',
      site_id: localStorage.getItem('site_id') || ''
    };
    return data.id ? this.http.put(`${this.url}/${data.id}`, data, { headers }) :
      this.http.post(`${this.url}`, data, { headers });
  }
  delete(data: any) {
    let headers = {
      authorization: localStorage.getItem('authorization') || '',
      site_id: localStorage.getItem('site_id') || ''
    };
    return this.http.delete(`${this.url}/${data.id}`, { headers });
  }
  getData(url: string) {
    let headers = {
      authorization: localStorage.getItem('authorization') || '',
      site_id: localStorage.getItem('site_id') || ''
    };
    return this.http.get(`${url}`, { headers });
  }
}
