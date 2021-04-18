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

    getWards() {
        const url = "http://localhost:3000/cms/wards";
        return this.httpClient.get(url);
    }

    getBalconyDirestion() {
        const url = "http://localhost:3000/cms/balcony-direction";
        return this.httpClient.get(url);
    }

    getHouseDirestion() {
        const url = "http://localhost:3000/cms/house-direstion";
        return this.httpClient.get(url);
    }

    getProject() {
        const url = "http://localhost:3000/cms/project";
        return this.httpClient.get(url);
    }

    getProducts() {
        const url = "http://localhost:3000/cms/product";
        return this.httpClient.get(url);
    }

    getProductUnit() {
        const url = "http://localhost:3000/cms/product-unit";
        return this.httpClient.get(url);
    }
}