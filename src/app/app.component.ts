import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  cards = [...Array(5).keys()].map(i => `Card ${i + 1}`)
  padding = 15;
  name = 'Angular ' + VERSION.major;
}
