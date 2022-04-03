import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'getAge'
})
export class GetAgePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
