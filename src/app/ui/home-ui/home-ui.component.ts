import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-ui',
  templateUrl: './home-ui.component.html',
  styleUrls: ['./home-ui.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeUIComponent implements OnInit {

  constructor(config: NgbCarouselConfig, private router: Router) {
      config.interval = 3000;
      config.keyboard = false;
   }

  @ViewChild('carousel') carousel: any;

  ngOnInit() {

  }

  Register() {
    console.log("register");
    this.router.navigate(['/register']);
  }

}
