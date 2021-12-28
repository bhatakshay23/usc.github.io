import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    Feather.replace();
  }
}
