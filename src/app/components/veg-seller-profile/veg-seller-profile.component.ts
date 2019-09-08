import { Component, OnInit } from '@angular/core';
import { OrganicSellerService, UserService } from '../../services';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';

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
  userDetails: any[];

  sendVegetable: any[];

  errorMsg: string;

  constructor(private activatedRoute: ActivatedRoute,
    private _organicSellerService: OrganicSellerService,
    private _userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const userID = params['userID'];
      this.getSales(userID);
    });

   // this.getSellers();
    // tslint:disable-next-line:prefer-const
    let modal = document.getElementById('id01');

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  }

  getSales(userID) {
    this._organicSellerService.getSellerDetails(userID)
    .subscribe(resData => {
      this.userDetails = resData;
      this.sellerID = this.userDetails[0].sellerID;
      this.userId = this.userDetails[0].userID;
      console.log("sellerID : " + this.sellerID );
      console.log("contact : " + this.userDetails[0].contact );
      console.log("sellerID : " + this.userDetails[0].AddressLine2 );
      console.log("sellerID : " + this.sellerID );
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
        this.getSales(userID);
      },
        resError => this.errorMsg = resError);
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
        this.getSales(this.userId);
      //  this.getSellers();
      },
        resError => this.errorMsg = resError);
   }

}
