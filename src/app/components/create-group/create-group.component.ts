import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { GroupModalComponent } from '../modals/group-modal/group-modal.component';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {

  groupText = {
    text: 'CREATE NEW GROUP',
    onClick: 'open()'
  }
  constructor(private modalService: NgbModal) { }

  open() {
    const modalRef = this.modalService.open(GroupModalComponent,{ size: 'xl' });
    modalRef.componentInstance.name = 'World';
  }

  ngOnInit(): void {
  }

}
