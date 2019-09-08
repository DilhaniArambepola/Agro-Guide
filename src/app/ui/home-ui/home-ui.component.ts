import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-ui',
  templateUrl: './home-ui.component.html',
  styleUrls: ['./home-ui.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeUIComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
      config.interval = 3000;
      config.keyboard = false;
   }

  @ViewChild('carousel') carousel: any;

  ngOnInit() {

  }

}
