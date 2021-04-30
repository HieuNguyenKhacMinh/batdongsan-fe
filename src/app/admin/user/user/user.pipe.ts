import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterUserRole',
})
export class FilterDataUserPipe implements PipeTransform {
    constructor() { }

    transform(data: any[], value: any): any {
        if (!data || data.length === 0) {
            return "";
        }
        return data.find(d => d.id === value)?.name;
    }
}