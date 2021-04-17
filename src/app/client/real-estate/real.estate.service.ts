import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class RealEstateService {
    constructor(private httpClient: HttpClient) { }
    
    getFormality() {
        const url = "http://localhost:3000/cms/formality";
        return this.httpClient.get(url);
    }

    getProductType() {
        const url = "http://localhost:3000/cms/product-type";
        return this.httpClient.get(url);
    }

    getDistrict() {
        const url = "http://localhost:3000/cms/district";
        return this.httpClient.get(url);
    }

    getCountry() {
        const url = "http://localhost:3000/cms/country";
        return this.httpClient.get(url);
    }

    getCity() {
        const url = "http://localhost:3000/cms/province-city";
        return this.httpClient.get(url);
    }

    getProducts() {
        const url = "http://localhost:3000/cms/product";
        return this.httpClient.get(url);
    }
}