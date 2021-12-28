import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-yellow',
  templateUrl: './button-yellow.component.html',
  styleUrls: ['./button-yellow.component.scss']
})
export class ButtonYellowComponent implements OnInit {
  @Input() buttonConfig: any;
  @Output() onClick = new EventEmitter();
  constructor() { }

  click() {
    console.log('hi');
    
    this.onClick.emit()
}

  ngOnInit(): void {
  }

}
