import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss']
})
export class UpcomingEventsComponent implements OnInit {

  avatar:string = "/assets/images/avatar.jpg";
  viewAllConfig = {
    text: 'View All'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
