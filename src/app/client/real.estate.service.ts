import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class RealEstateService {
    constructor(private httpClient: HttpClient) { }


    getFormality(isBuy?): Observable<any> {
        const url = "http://localhost:3000/cms/formality/" + (isBuy ? 1 : 0);
        return this.httpClient.get(url);
    }

    getProductType(): Observable<any> {
        const url = "http://localhost:3000/cms/product-type";
        return this.httpClient.get(url);
    }

    getDistrict(): Observable<any> {
        const url = "http://localhost:3000/cms/district";
        return this.httpClient.get(url);
    }

    getCountry(): Observable<any> {
        const url = "http://localhost:3000/cms/country";
        return this.httpClient.get(url);
    }

    getCity(): Observable<any> {
        const url = "http://localhost:3000/cms/province-city";
        return this.httpClient.get(url);
    }

    getWards(): Observable<any> {
        const url = "http://localhost:3000/cms/wards";
        return this.httpClient.get(url);
    }

    getBalconyDirestion(): Observable<any> {
        const url = "http://localhost:3000/cms/balcony-direction";
        return this.httpClient.get(url);
    }

    getHouseDirestion(): Observable<any> {
        const url = "http://localhost:3000/cms/house-direstion";
        return this.httpClient.get(url);
    }

    getProject(): Observable<any> {
        const url = "http://localhost:3000/cms/project";
        return this.httpClient.get(url);
    }

    getProducts(isBuy?: boolean): Observable<any> {
        const url = "http://localhost:3000/cms/product/all/" + (isBuy ? 1 : 0);
        return this.httpClient.get(url);
    }

    getProductUnit(): Observable<any> {
        const url = "http://localhost:3000/cms/product-unit";
        return this.httpClient.get(url);
    }

    save(product): Observable<any> {
        const url = "http://localhost:3000/cms/product";
        let headers = {
            authorization: localStorage.getItem('authorization') || '',
            site_id: localStorage.getItem('site_id') || ''
        };
        return this.httpClient.post(url, product, { headers });
    }

    getProduct(id: string): Observable<any> {
        const url = "http://localhost:3000/cms/product";
        let headers = {
            authorization: localStorage.getItem('authorization') || '',
            site_id: localStorage.getItem('site_id') || ''
        };
        return this.httpClient.get(`${url}/${id}`);
    }

    getData(url: string) {
        let headers = {
            authorization: localStorage.getItem('authorization') || '',
            site_id: localStorage.getItem('site_id') || ''
        };
        return this.httpClient.get(`${url}`, { headers });
    }
}