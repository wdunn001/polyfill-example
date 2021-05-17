import { Component } from '@angular/core';
import { whereBuilder } from '@loopback/filter';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'polyfill-example';
  where: whereBuilder = new whereBuilder();
}
