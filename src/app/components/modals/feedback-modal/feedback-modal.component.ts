import { Component, OnInit, Input } from '@angular/core';
import {NgbModal,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.scss'],
  providers: [NgbActiveModal]
})
export class FeedbackModalComponent implements OnInit {

  @Input() name:any;
  buttonConfig = {
    text: 'SEND FEEDBACK'
  }

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    Feather.replace();
  }

}
