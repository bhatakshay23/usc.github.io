import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss'],
})
export class GroupDetailComponent implements OnInit {
  constructor() {}
  title: any = 'Create a New post in Racial Equity Training In Schools';

  //Recent Post Data
  groupData: any = {
    groupImg: '/assets/images/avatar.jpg',
    userImg: '/assets/images/profile.png',
    groupName: 'Walt Disney Updates',
    userName: 'Marry Jones',
    postDate: 'Yesterday at 12:43',
    postDesc:
      'Azeem Rafiq’s disclosures about the racist taunts endured during his years as a first class English cricketer are as revealing about how some deeply ingrained prejudices still prevail as they are instructive about changing national attitudes of recent times. Off spinner Rafiq is a young 30 year old, so may not appreciate the deeper and wider context of racism that has flourished for the past half century and more. Apologists would certainly argue that racism has abated in recent years and that many in the white majority are less willing to tolerate the questionable standards of earlier times. Certainly, blacks and Asians today are present and more welcome than ever before in advertising, entertainment, the media and even front rank politics where an ethnic Indian, Rishi Sunak, is routinely touted as a possible future prime minister. Pakistan-born Rafiq, who once captained Yorkshire, has described how he came close to suicide after being being repeatedly subject to pejorative slurs as an ‘elephant washer’ and ‘Paki’. It took Yorkshire more than a year to acknowledge that Rafiq had been a “victim of racial harassment and bullying”. The club has since been suspended from hosting international cricket games “until it has clearly demonstrated that it can meet the standards expected”.',
    postImg: '/assets/images/post2.jpg',
    likesCount: 36,
  };
  groupData2: any = {
    groupImg: '/assets/images/profile.png',
    userImg: '/assets/images/avatar.jpg',
    groupName:
      'Racial Equity in Infrastructure, a U.S. Goal, Is Left to States',
    userName: 'Torrie Wilson',
    postDate: 'Yesterday at 09:23',
    postDesc:
      'President Biden’s $1 trillion plan to rebuild America’s infrastructure comes with a built-in promise: No longer will roads, bridges and railways be instruments of bias or racism. Communities that ended up divided along racial lines will be made whole.',
    postImg: '/assets/images/post3.jpg',
    likesCount: 114,
  };
  groupData3: any = {
    groupImg: '/assets/images/avatar.jpg',
    userImg: '/assets/images/avatar2.png',
    groupName: 'Technical Explorer',
    userName: 'Jonathan',
    postDate: 'Today at 10:23',
    postDesc:
      'Azeem Rafiq’s disclosures about the racist taunts endured during his years as a first class English cricketer are as revealing about how some deeply ingrained prejudices still prevail as they are instructive about changing national attitudes of recent times. Off spinner Rafiq is a young 30 year old, so may not appreciate the deeper and wider context of racism that has flourished for the past half century and more. Apologists would certainly argue that racism has abated in recent years and that many in the white majority are less willing to tolerate the questionable standards of earlier times. Certainly, blacks and Asians today are present and more welcome than ever before in advertising, entertainment, the media and even front rank politics where an ethnic Indian, Rishi Sunak, is routinely touted as a possible future prime minister. Pakistan-born Rafiq, who once captained Yorkshire, has described how he came close to suicide after being being repeatedly subject to pejorative slurs as an ‘elephant washer’ and ‘Paki’. It took Yorkshire more than a year to acknowledge that Rafiq had been a “victim of racial harassment and bullying”. The club has since been suspended from hosting international cricket games “until it has clearly demonstrated that it can meet the standards expected”.',
    postImg: '/assets/images/post.jpg',
    likesCount: 114,
  };
  postData: any = {
    profileImg: '/assets/images/profile.png',
    profileName: 'Ana Aramas',
    postDate: 'Yesterday at 12:43',
    postDesc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    postImg: '/assets/images/post.jpg',
    likesCount: 12,
    metaImg: '/assets/images/meta-img.jpg',
    metaTitle: 'How I Endured British Racists and Survived to Tell the Tale',
    metaURL:
      'https://thewire.in/world/how-i-endured-british-racists-and-survived-to-tell-the-tale.',
  };
  commentData: any = [
    {
      commenterImg: '/assets/images/profile.png',
      commenterName: 'Sathish',
      commentDate: 'Yesterday at 12:49',
      commentText:
        'Walt Disney😍...One of my favourite Disney quote: “All our dreams can come true, if we have the courage to pursue them.”',
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
  ngOnInit(): void {}
}
