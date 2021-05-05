import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProjectService {
    constructor(private httpClient: HttpClient) { }
    url = "http://localhost:3000/cms/project";
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

    sendComment(comment: any) {
        const url = "http://localhost:3000/cms/comment";
        let headers = {
            authorization: localStorage.getItem('authorization') || '',
            user_id: localStorage.getItem('user_id') || ''
        };

        return this.httpClient.post(url, comment, { headers });
    }

    saveWishlist(wishlist: any) {
        const url = "http://localhost:3000/cms/wishlist";
        let headers = {
            authorization: localStorage.getItem('authorization') || '',
            user_id: localStorage.getItem('user_id') || '',
            organization_id: localStorage.getItem('organization_id') || ''
        };

        return this.httpClient.post(url, wishlist, { headers });
    }
    get(id: any): any {
        return this.httpClient.get(`${this.url}/${id}`);
      }
    
      getProperties() {
        let headers = { authorization: localStorage.getItem('authorization') || '', site_id: localStorage.getItem('site_id') || '' }
        return this.httpClient.get(`http://localhost:3000/cms/table-config/project`, { headers });
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