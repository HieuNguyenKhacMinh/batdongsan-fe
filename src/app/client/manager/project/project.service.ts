import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectService {
    constructor(private httpClient: HttpClient) { }


    all(): Observable<any> {
        const url = "";
        return this.httpClient.get(url);
    }
}