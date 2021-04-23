import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ProductService } from './product.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateProductComponent } from './create/create.component';
import { DeleteProductComponent } from './delete/delete.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService, public dialog: MatDialog) {

  }
  references: any[] = [];
  ngOnInit() {
    //get table properties
    this.productService.getProperties().subscribe(async (res: any) => {
      // change column display
      this.properties = res.content;
      const arr = ["description", "sub_description", "address_id", "title", "home_number", "street", "product_type", "product_unit_id",
      "city_id", "wards_id", "district_id", "country_id", "no_of_bedroom", "no_of_toilet", "balcony_direction_id", 
      "house_direstion_id", "facade", "entry_width"];
      this.columnsToDisplay = Object.keys(res.content).filter(c => !arr.includes(c))
        .sort((a: any, b: any) => (this.properties[a].order > this.properties[b].order) ? 1 : ((this.properties[b].order > this.properties[a].order) ? -1 : 0));
      this.columnsToDisplay.push('action');

      // get reference column
      this.references = Object.keys(res.content)
      .filter((column: any) => this.properties[column].reference !== undefined && this.properties[column].filter);
      // 

      // get data referent
      await Promise.all(this.references.map(async column => {
        await this.productService.getData(this.properties[column].reference.api_url).subscribe((res) => {
          this.properties[column].data = res;
        })
      }))
    })

    this.getDatasource();
  }

  getDatasource() {
    // set datasource
    this.productService.all(2).subscribe((res: any) => {
      this.dataSource = res;
    })
  }
  filter: any = {};
  countries: any[] = [];

  dataSource: any;
  columnsToDisplay: any;
  expandedElement: any | null | undefined;
  properties: any;
  openDialog(dataSource?: any): void {
    const dialogRef = this.dialog.open(CreateProductComponent, {
      width: '550px',
      data: { properties: this.properties, dataSource: dataSource || {} }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getDatasource();
    });
  }
  confirmDialog(dataSource?: any): void {
    const dialogRef = this.dialog.open(DeleteProductComponent, {
      width: '550px',
      data: { properties: this.properties, dataSource }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.getDatasource();
    });
  }


  search() {
    console.log(this.filter);
    
  }
}


