import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RealEstateService } from '../../real.estate.service';

@Component({
    selector: 'search-real-estate',
    templateUrl: 'search.component.html',
    styleUrls: ["./search.component.scss"]
})

export class SearchRealEstateComponent implements OnInit {
    constructor(private realEstateService: RealEstateService) { }
    // object condition search form list real estates
    search: any = {};

    formalities: any[] = [];

    allProductTypes: any[] = [];
    productTypes: any[] = [];

    countries: any[] = [];

    allDistricts: any[] = [];
    districts: any[] = [];

    allCities: any[] = [];
    cities: any[] = [];

    prices = [{
        id: "all",
        name: "Tất cả"

    }, {
        id: "< 500 triệu",
        name: "< 500 triệu"

    }, {
        id: "500000000-800000000",
        name: "500 Triệu - 800 Triệu"

    }, {
        id: "800000000-1000000000",
        name: "800 Triệu - 1 tỷ"

    }, {
        id: "1000000000-12000000000",
        name: "1 tỷ - 1,2 tỷ"

    }, {
        id: "20000000000-3000000000",
        name: "2 tỷ - 3 tỷ"

    }, {
        id: "30000000000-5000000000",
        name: "3 tỷ - 5 tỷ"

    }, {
        id: "50000000000-7000000000",
        name: "5 tỷ - 7 tỷ"

    }, {
        id: "70000000000-10000000000",
        name: "7 tỷ - 10 tỷ"

    }, {
        id: "100000000000-20000000000",
        name: "10 tỷ - 20 tỷ"

    }, {
        id: "200000000000-30000000000",
        name: "20 tỷ - 30 tỷ"

    },
    {
        id: ">30000000000",
        name: "> 30 tỷ"
    }];

    m2 = [{
        id: "20-50",
        name: "20(m2) - 50(m2)"

    }, {
        id: "50-70",
        name: "50(m2) - 70(m2)"
    }, {
        id: "70-100",
        name: "70(m2) - 100(m2)"
    }, {
        id: "100-150",
        name: "100(m2) - 150(m2)"
    }, {
        id: "150-170",
        name: "150(m2) - 170(m2)"
    }, {
        id: "170-200",
        name: "170(m2) - 200(m2)"
    }, {
        id: "200-250",
        name: "200(m2) - 250(m2)"
    }, {
        id: "250-300",
        name: "250(m2) - 300(m2)"
    }, {
        id: ">=500",
        name: ">=500(m2)"
    }];


    @Output() change = new EventEmitter<any>();

    ngOnInit() {

        this.realEstateService.getFormality().subscribe((res: any[]) => {
            this.formalities = res;
            this.search.formality_id = this.formalities[0].id;
            this.change.emit(this.search);
        })

        this.realEstateService.getProductType().subscribe((res: any[]) => {
            this.allProductTypes = res;
            this.productTypes = this.allProductTypes.filter(p => p.formality_id === this.search.formality_id);
        })

        this.realEstateService.getCountry().subscribe((res: any[]) => {
            this.countries = res;
        })

        this.realEstateService.getCity().subscribe((res: any[]) => {
            this.allCities = res;
        })

        this.realEstateService.getDistrict().subscribe((res: any[]) => {
            this.allDistricts = res;
        })
    }

    selectedFormality() {
        this.productTypes = this.allProductTypes.filter(p => p.formality_id === this.search.formality_id);
        this.change.emit(this.search);
    }

    selectedCountry() {
        this.cities = this.allCities.filter(c => c.country_id === this.search.country_id);
        this.change.emit(this.search);
    }

    selectedCity() {
        this.districts = this.allDistricts.filter(d => d.city_id === this.search.city_id);
        this.change.emit(this.search);
    }
}