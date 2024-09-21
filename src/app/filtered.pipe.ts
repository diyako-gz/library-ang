import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtered'
})
export class FilteredPipe implements PipeTransform {

  transform(value: any[], search : string) {
    const resualt: any = []
    if(!value || !search) {
      return value
    } 
    return value.filter(item => {
      for (let key in item) {
        if (item[key] && item[key].toString().toLowerCase().includes(search.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
  
    
  }

}
