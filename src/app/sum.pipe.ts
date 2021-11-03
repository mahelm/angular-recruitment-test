import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum',
})
export class SumPipe implements PipeTransform {
  transform(numbersSeparatedByCommas: string): any {
    const numbers = this.getNumbers(numbersSeparatedByCommas);
    const sum = this.getSum2(numbers);
    return sum;
  }

  getSum1(numbers: number[]) {
    let sum = 0;

    for (let number of numbers) {
      sum += number;
    }

    return sum;
  }

  getSum2(numbers: number[]) {
    return numbers.reduce((number, sum) => sum + number, 0);
  }

  getNumbers(numbersSeparatedByCommas: string) {
    return numbersSeparatedByCommas
      .split(',')
      .map((i) => parseInt(i.trim(), 10))
      .filter((i) => !isNaN(i));
  }
}
