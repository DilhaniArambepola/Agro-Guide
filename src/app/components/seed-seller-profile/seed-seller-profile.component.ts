import { Component, OnInit } from '@angular/core';
import { SeedsService, UserService } from '../../services';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-seed-seller-profile',
  templateUrl: './seed-seller-profile.component.html',
  styleUrls: ['./seed-seller-profile.component.css']
})
export class SeedSellerProfileComponent implements OnInit {

  userId: any;
  shopID: any;
  seedDetails: any;
  plantDetails: any;
  sellers: any;
  edit = false;
  editQuantity  = false;
  editPrice = false;
  userDetails: any;
  sendSeed: any[];
  errorMsg: string;

  successMessage: string;
  deleteMessage: string;

  private _success = new Subject<string>();
  private _delete = new Subject<string>();

  constructor(private activatedRoute: ActivatedRoute,
    private _seedService: SeedsService,
    private _userService: UserService) { }

  ngOnInit() {
    // this.activatedRoute.queryParams.subscribe(params => {
    //   const userID = params['userID'];
    //   this.getSales(userID);
    //   this.getSeedSales(userID);
    //   this.getPlantSales(userID);
    // });

    this.activatedRoute.queryParams.subscribe(params => {
      const userID: any = localStorage.getItem('currentUser');
      this.getSales(userID);
      this.getSeedSales(userID);
      this.getPlantSales(userID);
      // this.seedSeller(userID);
    });

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);

    this._delete.subscribe((message) => this.deleteMessage = message);
    this._delete.pipe(
      debounceTime(5000)
    ).subscribe(() => this.deleteMessage = null);

     // tslint:disable-next-line:prefer-const
     let modal = document.getElementById('id01');
     // tslint:disable-next-line:prefer-const
     let modal1 = document.getElementById('id02');

     window.onclick = function (event) {
       if (event.target == modal) {
         modal.style.display = 'none';
       }if (event.target == modal1) {
        modal1.style.display = 'none';
      }
     };
  }

  CropAddedMsg() {
    this._success.next(`Successfully added an item to selling list`);
  }

  removeMsg() {
    this._delete.next(`Removed an selling item from the list`);
  }

  contactUpdated() {
    this._success.next(`Successfully updated the contact number`);
  }

  getSales(userID: any) {
    this._seedService.getSeedSellerById(userID)
    .subscribe(resData => {
      this.userDetails = resData;
      console.log("seller: " + this.userDetails);
      this.shopID = this.userDetails[0].shopID;
      this.userId = this.userDetails[0].userID;
    },
      resError => this.errorMsg = resError);
  }

  seedSeller(userID: any) {
    this._seedService.getSeedSeller(userID)
    .subscribe(resData => {
      this.userDetails = resData;
      console.log("data: " + this.userDetails);
      console.log("more data: " + this.userDetails[0].userName);
      this.shopID = this.userDetails[0].shopID;
      this.userId = this.userDetails[0].userID;
    },
      resError => this.errorMsg = resError);
  }


  getSeedSales(userID) {
    this._seedService.getSeeds(userID)
    .subscribe(resData => {
      this.seedDetails = resData;
    },
      resError => this.errorMsg = resError);
  }

  getPlantSales(userID) {
    this._seedService.getPlants(userID)
    .subscribe(resData => {
      this.plantDetails = resData;
    },
      resError => this.errorMsg = resError);
  }

  // edit question
  onEdit() {
    this.edit = true;
 }

 updateTel(tel: any) {
   this.edit = false;
   this._userService.updateShopDetails(tel.shopID, tel.contact)
     .subscribe(resData => {
       this.contactUpdated();
       // this.sellers = resData;
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
   this._seedService.updateQuantity(val.quantity, val.seedID)
     .subscribe(resData => {
     //  this.seedDetails = resData;
     },
       resError => this.errorMsg = resError);
 }

 updatePrice(val, user) {
   user.editPrice = false;
   this._seedService.updatePrice(val.price, val.seedID)
     .subscribe(resData => {
      // this.seedDetails = resData;
     },
       resError => this.errorMsg = resError);
 }

 deleteItem(vegID: number, shopID: number) {
   this._seedService.removeItem(vegID)
     .subscribe(resData => {
       this.removeMsg();
       this.getPlantSales(shopID);
      this.getSeedSales(shopID);
     },
       resError => this.errorMsg = resError);
 }

  // tslint:disable-next-line:member-ordering
  @ViewChild('form') mytemplateForm: NgForm;
  addSellingSeed(val: any) {
    this.sendSeed = [
      {
        'shop': this.shopID,
        'item': val.seed,
        'quantity': val.quantity,
        'price': val.price,
        'seedPlant': 'seed'
      }
    ];

    this._seedService.addItem(this.sendSeed)
      .subscribe(resData => {
        this.CropAddedMsg();
        this.mytemplateForm.reset();
        this.getSeedSales(this.userId);
      },
        resError => this.errorMsg = resError);
   }

   // tslint:disable-next-line:member-ordering
   @ViewChild('form1') mytemplateForm1: NgForm;
   addSellingPlant(val: any) {
    this.sendSeed = [
      {
        'shop': this.shopID,
        'item': val.plant,
        'quantity': val.quantity,
        'price': val.price,
        'seedPlant': 'plant'
      }
    ];

    this._seedService.addItem(this.sendSeed)
      .subscribe(resData => {
        this.CropAddedMsg();
        this.mytemplateForm1.reset();
        this.getPlantSales(this.userId);
      },
        resError => this.errorMsg = resError);
   }

   cancel() {
    this.mytemplateForm.reset();
    this.mytemplateForm1.reset();
   }

}
