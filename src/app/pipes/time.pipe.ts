import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  constructor(private datePipe: DatePipe){}

  transform(value: string): string {
    return  this.datePipe.transform(new Date(Number(value)*1000),'hh:mm');;
  }

}
