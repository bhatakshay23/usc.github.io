import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-post',
  templateUrl: './recent-post.component.html',
  styleUrls: ['./recent-post.component.scss'],
})
export class RecentPostComponent implements OnInit {
  @Input() postInfo: any;
  @Input() groupInfo: any;
  @Input() postMeta: any;
  @Input() poll: any;
  @Input() postWithImg: boolean = false;
  @Input() postWithLink: boolean = false;
  @Input() comment: any = [];

  commentCount: Number = 0;
  showComment: boolean = false;
  showOptions: boolean = false;

  constructor() {}
  toggleComment() {
    !this.showComment ? (this.showComment = true) : (this.showComment = false);
  }
  toggleOptions(){
    !this.showOptions ? (this.showOptions = true) : (this.showOptions = false);
  }
  ngOnInit(): void {
    let commentCount = this.comment.length;
    if (commentCount > 0) {
      this.showComment = true;
      this.commentCount = commentCount;
    }
  }
}
