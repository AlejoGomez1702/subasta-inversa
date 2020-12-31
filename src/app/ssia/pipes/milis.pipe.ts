import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milis'
})
export class MilisPipe implements PipeTransform 
{

  transform(value: any)
  {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");;
  }

}
