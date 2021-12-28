import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.scss']
})
export class ButtonLinkComponent implements OnInit {

  @Input() buttonConfig: any;

  constructor() { }

  ngOnInit(): void {
  }

}
