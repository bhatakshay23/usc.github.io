import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  logo: string = '/assets/images/Horizontal_USC Race and Equity Center_GoldWhite.png';
  notificationCount: any = 12;
  profileName: any = 'Lisa haydon';
  profileImg: any = '/assets/images/profile.png';
  showOptions: boolean = false;

  constructor() {}

  // props from selector
  @Input() hide: any;

  toggleOptions(){
    !this.showOptions ? (this.showOptions = true) : (this.showOptions = false);
  }
  ngOnInit(): void {
  }

}
