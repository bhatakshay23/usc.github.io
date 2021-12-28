import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  profileImg: any = '/assets/images/profile.png';
  textBtnConfig = {
    text: 'Post',
    btnMode : 'small-btn'
  };
  @Input() groupDetail: any;
  @Input() title: any;
  constructor() {}

  ngOnInit(): void {}
}
