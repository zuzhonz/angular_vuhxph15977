import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getMoney'
})
export class GetMoneyPipe implements PipeTransform {

  transform(value: any, ...args: any[]): number {
    const format = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return format
  }

}
