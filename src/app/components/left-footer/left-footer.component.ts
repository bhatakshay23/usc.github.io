import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FeedbackModalComponent } from '../modals/feedback-modal/feedback-modal.component';

@Component({
  selector: 'app-left-footer',
  templateUrl: './left-footer.component.html',
  styleUrls: ['./left-footer.component.scss']
})
export class LeftFooterComponent implements OnInit {

  logoImage: string = '/assets/images/usc-white.svg';
  linkTextFeedback = {
    text: 'FEEDBACK',
    href: '#'
  };
  linkTextTerms = {
    text: 'TERMS OF USE',
    href: '#'
  };
  linkTextConduct = {
    text: 'PRIVACY POLICY',
    href: '#'
  };
  linkTextPolicy = {
    text: 'CODE OF CONDUCT',
    href: '#'
  }
  constructor(private modalService: NgbModal) { }

  open() {
    const modalRef = this.modalService.open(FeedbackModalComponent,{ size: 'xl' });
    modalRef.componentInstance.name = 'World';
  }


  ngOnInit(): void {
  }

}
