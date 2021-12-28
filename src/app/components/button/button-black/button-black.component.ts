import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-black',
  templateUrl: './button-black.component.html',
  styleUrls: ['./button-black.component.scss']
})
export class ButtonBlackComponent implements OnInit {

  @Input() buttonConfig: any;

  constructor() { }

  ngOnInit(): void {
  }

}
