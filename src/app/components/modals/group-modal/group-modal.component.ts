import { Component, OnInit, Input} from '@angular/core';
import {NgbModal,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import * as Feather from 'feather-icons';
@Component({
  selector: 'app-group-modal',
  templateUrl: './group-modal.component.html',
  styleUrls: ['./group-modal.component.scss']
})
export class GroupModalComponent implements OnInit {


  @Input() name:any;
  createGroupText = {
    text: 'CREATE'
  }
  image:string = '/assets/images/modal.jpg';
  fileUploaded:boolean = false;
  fileName:string = ''

  onFileUpload(e: any) {    
    if(e.target.files[0]){
      this.fileUploaded = true;
      this.fileName = e.target.files[0].name
    }
    else{
      this.fileUploaded = false;
      this.fileName = ''
    }
  }

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    Feather.replace();
  }

}
