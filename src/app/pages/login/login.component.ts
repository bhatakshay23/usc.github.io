import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class Login implements OnInit {
  
  heroImg:string = "/assets/images/hero-img.jpg";
  heroLogo:string = "/assets/images/Horizontal_USC Race and Equity Center_CardinalBlack.png";
  graphicelement:string = "assets/images/GraphicElement.png";
  textBtnConfig = {
    text: 'Sign In'
  };
  forgotpassBtnConfig = {
    text: 'FORGOT YOUR PASSWORD?',
    href: '/login'
  }
  constructor() { 
  }

  ngOnInit(): void {
  }

}
