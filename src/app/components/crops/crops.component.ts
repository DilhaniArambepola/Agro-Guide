import { Component, OnInit } from '@angular/core';
import { CropsService } from '../../services/crops.service';
import { FormsModule, FormControl, NgForm } from '@angular/forms';

// declare var $: any;


@Component({
  selector: 'app-crops',
  templateUrl: './crops.component.html',
  styleUrls: ['./crops.component.css']
})
export class CropsComponent implements OnInit {

  crops: any;
  errorMsg: string;

  constructor(private _cropsService: CropsService) { }

  ngOnInit() {

  }

}
