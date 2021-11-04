import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum',
})
export class SumPipe implements PipeTransform {
  transform(numbersSeparatedByCommas: string): any {
    const numbers = this.getNumbers(numbersSeparatedByCommas);
    const sum = this.getSum(numbers);
    return sum;
  }

  getSum(numbers: number[]) {
    // Todo: fix method!
    return 0;
  }

  getNumbers(numbersSeparatedByCommas: string) {
    return numbersSeparatedByCommas
      .split(',')
      .map((i) => parseInt(i.trim(), 10))
      .filter((i) => !isNaN(i));
  }
}
