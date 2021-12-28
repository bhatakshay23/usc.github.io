import { Component } from '@angular/core';
import * as Feather from 'feather-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // To hide navbar assign -- hideNav: any = 'd-none'
  hideNav: any = '';
  title = 'my-app';

  ngAfterViewInit() {
    Feather.replace();
  }
}
