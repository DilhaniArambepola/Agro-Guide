import { Component, OnInit } from '@angular/core';
import { OrganicSellerService, UserService, VegSelerService } from '../../services';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-veg-seller-profile',
  templateUrl: './veg-seller-profile.component.html',
  styleUrls: ['./veg-seller-profile.component.css']
})
export class VegSellerProfileComponent implements OnInit {

  userId: any;
  sellerID: any;
  sellers: any;
  edit = false;
  editQuantity  = false;
  editPrice = false;
  userDetails: any;
  salesDetails: any[];

  sendVegetable: any[];

  successMessage: string;
  deleteMessage: string;

  private _success = new Subject<string>();
  private _delete = new Subject<string>();

  errorMsg: string;

  constructor(private activatedRoute: ActivatedRoute,
    private _organicSellerService: OrganicSellerService,
    private _userService: UserService,
    private _vegService: VegSelerService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const userID = params['userID'];
      this.getSellerDetails(userID);
    });

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);

    this._delete.subscribe((message) => this.deleteMessage = message);
    this._delete.pipe(
      debounceTime(5000)
    ).subscribe(() => this.deleteMessage = null);

   // this.getSellers();
    // tslint:disable-next-line:prefer-const
    let modal = document.getElementById('id01');

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  }

  CropAddedMsg() {
    this._success.next(`Successfully added an item to selling list`);
  }

  removeMsg() {
    this._delete.next(`Removed an selling item from the list`);
  }


  getSellerDetails(userID) {
    this._organicSellerService.getSellerDetails(userID)
    .subscribe(resData => {
      this.userDetails = resData;
      this.sellerID = this.userDetails.sellerID;
      this.getSales(this.sellerID);
      this.userId = this.userDetails.userID;
    },
      resError => this.errorMsg = resError);
  }

  getSales(sellerID) {
    this._organicSellerService.getSales(sellerID)
    .subscribe(resData => {
      this.salesDetails = resData;
      console.log("sellerID new:" + this.salesDetails[0].sellerID);
    },
      resError => this.errorMsg = resError);
  }

   // edit question
   onEdit() {
     this.edit = true;
  }

  updateTel(tel: any) {
    
    this.edit = false;
    this._userService.updateSellerDetails(this.sellerID, tel.contact)
      .subscribe(resData => {
        this.sellers = resData;
      },
        resError => this.errorMsg = resError);
  }

  editQuantityVal(q) {
    q.editQuantity = true;
  }

  editPriceVal(q) {
    q.editPrice = true;
  }

  updateQuantity(val, user) {
    user.editQuantity = false;
    this._organicSellerService.updateQuantity(val.Quantity, val.sellingVegetableID)
      .subscribe(resData => {
        this.sellers = resData;
      },
        resError => this.errorMsg = resError);
  }

  updatePrice(val, user) {
    user.editPrice = false;
    this._organicSellerService.updatePrice(val.price, val.sellingVegetableID)
      .subscribe(resData => {
        this.sellers = resData;
      },
        resError => this.errorMsg = resError);
  }

  deleteItem(vegID: number, userID: number) {
    this._organicSellerService.removeItem(vegID)
      .subscribe(resData => {
        this.getSales(this.sellerID);
        this.removeMsg();
      },
        resError => this.errorMsg = resError);
  }

  cancel() {
    this.mytemplateForm.reset();
   }

  // tslint:disable-next-line:member-ordering
  @ViewChild('form') mytemplateForm: NgForm;
  addSellingVegetable(val: any) {
    console.log("seller: " + this.sellerID);
    this.sendVegetable = [
      {
        'seller': this.sellerID,
        'item': val.vegetable,
        'quantity': val.quantity,
        'price': val.price
      }
    ];

    this._organicSellerService.addVeg(this.sendVegetable)
      .subscribe(resData => {
       // console.log('res data : ' + resData);
        // this.crops = resData;
        this.mytemplateForm.reset();
        this.CropAddedMsg();
        this.getSales(this.sellerID);
      //  this.getSellers();
      },
        resError => this.errorMsg = resError);
   }

}
