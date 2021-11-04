import { Component, VERSION } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Saab test';

  numbersSeparatedByCommas: string;
  sum: number;

  time: Observable<Date>;
  constructor() {
    this.time = interval(1000).pipe(map(() => new Date()));
  }
}
