import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  /*
    Changes the timestamp to show only time, not date: [0-24 hours]:[0-60 minutes]
  */
  constructor(private datePipe: DatePipe) { }

  transform(value: string): string {
    return this.datePipe.transform(new Date(Number(value) * 1000), 'HH:mm');
  }

}
