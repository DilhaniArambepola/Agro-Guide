import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about-us-component',
  templateUrl: './about-us-component.component.html',
  styleUrls: ['./about-us-component.component.css']
})
export class AboutUsComponentComponent implements OnInit {

  sendValue: { 'title': any; 'description': any; 'email': any; 'name': any; }[];
  errorMsg: string;
  private _success = new Subject<string>();
  successMessage: string;

  constructor(private _generalService: GeneralService) { }

  ngOnInit() {
    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  InquirySentMsg() {
    this._success.next(`We received your inquiry. We'll respond you soon`);
  }

  // tslint:disable-next-line:member-ordering
  @ViewChild('form') mytemplateForm: NgForm;
  submitInquiry(val: any) {

    this.sendValue = [
      {
        'title': val.title,
        'description': val.description,
        'email': val.email,
        'name': val.name
      }
    ];

    this._generalService.addInquiry(this.sendValue)
      .subscribe(resData => {
        // console.log('res data : ' + resData);
        // this.crops = resData;
        this.InquirySentMsg();
        this.mytemplateForm.reset();
      },
        resError => this.errorMsg = resError);
  }

  cancel() {
    this.mytemplateForm.reset();
  }

}
