import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getGender'
})
export class GetGenderPipe implements PipeTransform {

  transform(value: string , ...args: string[]): string {
    if(value == "true" ){
      return "male"
    }{
      return "female"
    }
  }

}
