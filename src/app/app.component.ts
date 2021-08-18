import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  test = 50;

  subtitle = 'This is a list of the people';
  people = [
    { name: 'Reginaldo', age: 26 },
  ];

  anyMethod(event: any) {
    console.log({ event });
  }
}
