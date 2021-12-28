import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  bannerImg: any = '/assets/images/banner.jpg';
  bannerText: any = 'Banner Text';
  constructor() { }

  ngOnInit(): void {
  }

}
