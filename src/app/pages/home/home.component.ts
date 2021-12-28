import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: any = 'Create a New post';
  //Recent Post Data
  postData: any = {
    profileImg: '/assets/images/profile.png',
    profileName: 'Ana Aramas',
    postDate: 'Yesterday at 12:43',
    postDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    postImg: '/assets/images/post.jpg',
    likesCount: 12,
    metaImg: '/assets/images/meta-img.jpg',
    metaTitle: 'How I Endured British Racists and Survived to Tell the Tale',
    metaURL: 'https://thewire.in/world/how-i-endured-british-racists-and-survived-to-tell-the-tale.',
  };

  commentData: any = [
    {
      commenterImg: '/assets/images/profile.png',
      commenterName: 'Sathish',
      commentDate: 'Yesterday at 12:49',
      commentText: 'Walt Disney😍...One of my favourite Disney quote: “All our dreams can come true, if we have the courage to pursue them.”',
      commentLikes: 3,
    },
    {
      commenterImg: '/assets/images/profile.png',
      commenterName: 'Mohu Mehta',
      commentDate: 'Today at 01:00',
      commentText: 'It was a nice post, and had a great reading experience.',
      commentLikes: 6,
    },
  ];
  
  pollData: any = [
    "You can't afford it.",
    "You don't need it.",
    "None of the above."
  ];

  constructor() {}

  ngOnInit(): void {}
}
