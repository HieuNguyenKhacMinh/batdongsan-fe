import { RealEstateService } from './../../real.estate.service';
import { Component, OnInit } from '@angular/core';

export enum IsBuyHire {
    No, // sell
    Yes // Buy-hire
}

@Component({
    selector: 'need-buy',
    templateUrl: 'need-buy.component.html',
    styleUrls: ["./need-buy.component.scss"]
})
export class NeedBuyComponent implements OnInit {
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
    
        this.realEstateService.getFormality(true).subscribe((res: any[]) => {
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
        this.realEstate.file_id = this.image.id;
        console.log(this.realEstate);
        this.realEstate.is_buy_hire = IsBuyHire.Yes;
        this.realEstateService.save(this.realEstate).subscribe(res => {
            console.log(res);
    
        })
    }
       

    fileToUpload: File = null;
    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
    }
    image: any = {};
    uploadImage() {
        this.realEstateService.postFile(this.fileToUpload).subscribe(data => {
            console.log(data);
            this.image = data;
        }, error => {
            console.log(error);
        });
    }
}