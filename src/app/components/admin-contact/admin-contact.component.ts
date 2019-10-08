import { Component, OnInit } from '@angular/core';
import { GeneralService, UserService } from '../../services';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { FormsModule, FormControl, NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css']
})
export class AdminContactComponent implements OnInit {

  topicSelected: any;
  body: {}[];
  inquiry: any;
  Sellers2: any;
  Sellings2: any;
  Cultivate2: any;
  All2: any;
  pending: any;
  sent: any;
  Sellers: any;
  Sellings: any;
  All: any;
  Cultivate: any;
  errorMsg: string;
  allInquiries: any;

  mapInquiry = new Map();
  mapByID = new Map();

  allList: Array<any> = [];
  cultivateList: Array<any> = [];
  sellingsList: Array<any> = [];
  sellersList: Array<any> = [];

  allListSent: Array<any> = [];
  cultivateListSent: Array<any> = [];
  sellingsListSent: Array<any> = [];
  sellersListSent: Array<any> = [];

  newCount = 0;
  respondedCount = 0;

  sentList: Array<any> = [];
  pendingList: Array<any> = [];

  deleteMessage: string;
  successMessage: string;
  private _delete = new Subject<string>();
  private _success = new Subject<string>();

  topics = [
    { id: 1, name: 'Cultivate' },
    { id: 2, name: 'Sellings' },
    { id: 3, name: 'Sellers' },
    { id: 4, name: 'Other' }
  ];

  constructor(private _generalService: GeneralService, private _userService: UserService) { }

  ngOnInit() {
    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);

    this._delete.subscribe((message) => this.deleteMessage = message);
    this._delete.pipe(
      debounceTime(5000)
    ).subscribe(() => this.deleteMessage = null);

    const modal = document.getElementById('id01');

    const modal1 = document.getElementById('id02');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
      if (event.target == modal1) {
        modal1.style.display = 'none';
      }
    };

    this.getInquiries();
  }

  removeMsg() {
    console.log("remove msg");
    this._delete.next(`Removed an inquiry`);
  }

  sentMsg() {
    console.log("remove msg");
    this._delete.next(`Responded to the inquiry`);
  }

  getInquiries() {
    this._generalService.getAllInquiry()
      .subscribe(resData => {
        this.allInquiries = resData;
        for (const i of this.allInquiries) {
          this.mapByID.set(i.inquiryID, i);

          if (i.topic == 'All' && i.respond != '') {
            this.allListSent.push(i);

          } else if (i.topic == 'Cultivate' && i.respond != '') {
            this.cultivateListSent.push(i);

          } else if (i.topic == 'Sellings' && i.respond != '') {
            this.sellingsListSent.push(i);

          } else if (i.topic == 'Sellers' && i.respond != '') {
            this.sellersListSent.push(i);
          }

          if (i.topic == 'All' && i.respond == '') {
            this.allList.push(i);

          } else if (i.topic == 'Cultivate' && i.respond == '') {
            this.cultivateList.push(i);

          } else if (i.topic == 'Sellings' && i.respond == '') {
            this.sellingsList.push(i);

          } else if (i.topic == 'Sellers' && i.respond == '') {
            this.sellersList.push(i);

          } if (i.respond != null) {
            this.respondedCount++;
            this.sentList.push(i);

          } if (i.respond == null) {
            this.newCount++;
            this.pendingList.push(i);
          }
        }
        this.mapInquiry.set('All', this.allList);
        this.mapInquiry.set('Cultivate', this.cultivateList);
        this.mapInquiry.set('Sellings', this.sellingsList);
        this.mapInquiry.set('Sellers', this.sellersList);

        this.mapInquiry.set('All2', this.allListSent);
        this.mapInquiry.set('Cultivate2', this.cultivateListSent);
        this.mapInquiry.set('Sellings2', this.sellingsListSent);
        this.mapInquiry.set('Sellers2', this.sellersListSent);

        this.mapInquiry.set('sent', this.sentList);
        this.mapInquiry.set('pending', this.pendingList);

        this.All = this.mapInquiry.get('All');
        this.Cultivate = this.mapInquiry.get('Cultivate');
        this.Sellings = this.mapInquiry.get('Sellings');
        this.Sellers = this.mapInquiry.get('Sellers');

        this.All2 = this.mapInquiry.get('All2');
        this.Cultivate2 = this.mapInquiry.get('Cultivate2');
        this.Sellings2 = this.mapInquiry.get('Sellings2');
        this.Sellers2 = this.mapInquiry.get('Sellers2');

        this.sent = this.mapInquiry.get('sent');
        this.pending = this.mapInquiry.get('pending');

      },
        resError => this.errorMsg = resError);
  }

  // Delete crops
  deleteInquiry(inquiryID: any) {
    console.log("delete : " + inquiryID);
    this._generalService.deleteInquiry(inquiryID)
      .subscribe(resDeleteQuestion => {
        this.sentList = [];
        this.pendingList = [];
        this.newCount = 0;
        this.respondedCount = 0;
        this.getInquiries();
        this.removeMsg();
      }, error => {
        return Observable.throw(error);
      });
  }

  getSelectedLabel(value: any) {
    this.topicSelected = value;
  }

  more(id: number) {

    this.inquiry = [
      this.mapByID.get(id)
    ];
    console.log("id: " + this.inquiry[0].inquiryID);
  }

  // tslint:disable-next-line:member-ordering
  @ViewChild('form') mytemplateForm: NgForm;
  sendResponse(val: any) {
    console.log("res t: " + val);
    console.log("res: " + val.res);
    this.body = [
      {
        id: this.inquiry[0].inquiryID,
        response: val.res
      }
    ];
    this._generalService.updateInquiry(this.body)
      .subscribe(resDeleteQuestion => {
        this.checkMail(val.res);
        this.sentList = [];
        this.pendingList = [];
        this.newCount = 0;
        this.respondedCount = 0;
        this.getInquiries();
        this.sentMsg();
      }, error => {
        return Observable.throw(error);
      });
  }

  checkMail(response) {
    // const user = {
    //   name: 'Dilhani',
    //   // email: 'nimashandk94@gmail.com'
    //   email: emailAddresses
    // };
    const user = {
      subject: 'Agro Guide - Response for the inquiry ' + this.inquiry[0].title,
      // tslint:disable-next-line:max-line-length
      body: response,
      email: this.inquiry[0].email
    };
    this._userService.sendMail(user)
      .subscribe(resDeleteQuestion => {
        console.log('successfully sent');
      }, error => {
        return Observable.throw(error);
      });

  }

}
