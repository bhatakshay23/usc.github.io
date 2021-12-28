import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-post',
  templateUrl: './group-post.component.html',
  styleUrls: ['./group-post.component.scss']
})
export class GroupPostComponent implements OnInit {

  @Input() groupPostConfig: any;

  avatar:string = "/assets/images/avatar.jpg";
  postImg:string = "/assets/images/racism.jpg";
  viewAllConfig = {
    text: 'View All'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
