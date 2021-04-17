import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'filter-product'})
export class FilterProductPipe implements PipeTransform {
  transform(products: any[], filter: any): any[] {
   if(Object.keys(filter).length===0) return products;
   const columns = Object.keys(filter);

   products.filter(product => {
       
   })

  }
}