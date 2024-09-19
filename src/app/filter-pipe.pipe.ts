import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], searchValue: string): any[] {
    if (!searchValue) {
      return value;
    }

    return value.filter(item => {
      const searchTerm = searchValue.toLowerCase();
      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          const value = item[key];
          if (typeof value === 'string' && value.toLowerCase().includes(searchTerm)) {
            return true;
          }
        }
      }
      return false;
    });
  }
}









