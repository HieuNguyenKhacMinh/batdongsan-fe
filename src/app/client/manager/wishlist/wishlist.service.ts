import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class WishlistService {
    constructor(private httpClient: HttpClient) { }
    
    all(): Observable<any> {
        const url = "http://localhost:3000/cms/wishlist";
        let headers = {
            authorization: localStorage.getItem('authorization') || '',
            user_id: localStorage.getItem('user_id') || ''
        };
        return this.httpClient.get(`${url}`, { headers });
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
}