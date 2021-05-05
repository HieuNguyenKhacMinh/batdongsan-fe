import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private httpClient: HttpClient) { }
  url = "http://localhost:3000/cms/posts"

  getCategories(): Observable<any> {
    let headers = { authorization: `bearer ${localStorage.getItem('access_token')}`, organization_id: localStorage.getItem('organization_id') || '' }

    const url = "http://localhost:3000/cms/categories";
    return this.httpClient.get(url, { headers });
  }

  getNews(id: string): Observable<any> {
    const url = "http://localhost:3000/cms/posts";
    return this.httpClient.get(`${url}/${id}`)
  }
  all(): any {
    let headers = { authorization: localStorage.getItem('authorization') || '', organization_id: localStorage.getItem('organization_id') || '' }
    return this.httpClient.post(`${this.url}/all`, { headers });
  }

  get(id: any): any {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  getProperties() {
    let headers = { authorization: localStorage.getItem('authorization') || '', site_id: localStorage.getItem('site_id') || '' }
    return this.httpClient.get(`http://localhost:3000/cms/table-config/post`, { headers });
  }
  update(data: any) {
    let headers = {
      authorization: localStorage.getItem('authorization') || '',
      site_id: localStorage.getItem('site_id') || ''
    };
    return data.id ?
      this.httpClient.put(`${this.url}/${data.id}`, data, { headers }) :
      this.httpClient.post(`${this.url}`, data, { headers });
  }
  delete(data: any) {
    let headers = {
      authorization: localStorage.getItem('authorization') || '',
      site_id: localStorage.getItem('site_id') || ''
    };
    return this.httpClient.delete(`${this.url}/${data.id}`, { headers });
  }

  getData(url: string) {
    let headers = {
      authorization: localStorage.getItem('authorization') || '',
      site_id: localStorage.getItem('site_id') || ''
    };
    return this.httpClient.get(`${url}`, { headers });
  }

  postFile(fileToUpload: File): Observable<any> {
    const endpoint = 'http://localhost:3000';
    const formData: FormData = new FormData();
    formData.append('image', fileToUpload, fileToUpload.name);
    return this.httpClient.post(endpoint, formData, { headers: {} });
  }
}