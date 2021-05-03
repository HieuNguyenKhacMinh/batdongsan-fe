import { Component, OnInit } from '@angular/core';
import { RealEstateService } from '../../real.estate.service';

@Component({
    selector: 'need-sell',
    templateUrl: 'need-sell.component.html',
    styleUrls: ["./need-sell.component.scss"]
})

export class NeedSellComponent implements OnInit { 
    constructor(private realEstateService: RealEstateService) { }
realEstate: any = {};
foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
];

formalities: any[] = [];

allProductTypes: any[] = [];
productTypes: any[] = [];

countries: any[] = [];

allDistricts: any[] = [];
districts: any[] = [];

allCities: any[] = [];
cities: any[] = [];

allWards: any[] = [];
wards: any[] = [];

projects: any[] = [];

productUnits: any[] = [];

balconyDirestions: any[] = [];

houseDirestions: any[] = [];

ngOnInit() {

    this.realEstateService.getFormality(false).subscribe((res: any[]) => {
        this.formalities = res;
        this.realEstate.formality_id = this.formalities[0].id;
    })

    this.realEstateService.getProductType().subscribe((res: any[]) => {
        this.allProductTypes = res;
        this.productTypes = this.allProductTypes.filter(p => p.formality_id === this.realEstate.formality_id);
    })

    this.realEstateService.getCountry().subscribe((res: any[]) => {
        this.countries = res;

    })

    this.realEstateService.getCity().subscribe((res: any[]) => {
        this.allCities = res;
        this.cities = this.allCities.filter(p => p.country_id === this.realEstate.country_id);
    })

    this.realEstateService.getDistrict().subscribe((res: any[]) => {
        this.allDistricts = res;
    })

    this.realEstateService.getWards().subscribe((res: any[]) => {
        this.allWards = res;
    })

    this.realEstateService.getProject().subscribe((res: any[]) => {
        this.projects = res;
    })

    this.realEstateService.getHouseDirestion().subscribe((res: any[]) => {
        this.houseDirestions = res;
    })

    this.realEstateService.getBalconyDirestion().subscribe((res: any[]) => {
        this.balconyDirestions = res;
    })

    this.realEstateService.getProductUnit().subscribe((res: any[]) => {
        this.productUnits = res;
    })
}


selectedFormality() {
    this.productTypes = this.allProductTypes.filter(p => p.formality_id === this.realEstate.formality_id);

}

selectedCountry() {
    this.cities = this.allCities.filter(c => c.country_id === this.realEstate.country_id);

}

selectedCity() {
    this.districts = this.allDistricts.filter(d => d.city_id === this.realEstate.city_id);

}

selectedDistrict() {
    this.wards = this.allWards.filter(d => d.district_id === this.realEstate.district_id);
}

save() {
    console.log(this.realEstate);
    this.realEstateService.save(this.realEstate).subscribe(res => {
        console.log(res);
    })
}
   
}