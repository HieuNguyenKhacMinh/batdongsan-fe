import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NotificationTypeService {
  url = 'http://localhost:3000/cms/notification-type';
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
    return this.http.get(`http://localhost:3000/cms/table-config/notification_type`, { headers });
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
}
