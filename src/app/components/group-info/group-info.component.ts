import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.scss']
})
export class GroupInfoComponent implements OnInit {
  aboutTitle: any = 'About Group';
  aboutDesc: any = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.';
  members: any =[
    '/assets/images/profile.png',
    '/assets/images/profile.png',
    '/assets/images/profile.png',
    '/assets/images/profile.png',
    '/assets/images/profile.png',
    '/assets/images/profile.png',
    '/assets/images/profile.png',
    '/assets/images/profile.png',
    '/assets/images/profile.png',
    '/assets/images/profile.png',
    '/assets/images/profile.png',
    '/assets/images/profile.png',
    '/assets/images/profile.png',
    '/assets/images/profile.png',
    '/assets/images/profile.png'
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
