import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  @Output() searchString= new EventEmitter() 

  textValue: String = ''
  
  searchStringChange() {
    this.searchString.emit(this.textValue)
    
  } 

  @Input() placeholder: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
