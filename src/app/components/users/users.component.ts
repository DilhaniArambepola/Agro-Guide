import { Component, OnInit } from '@angular/core';
import { OrganicSellerService, SeedsService, ProfilesService, UserService, FarmerService } from '../../services';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  plantSales: any;
  selectedSeedSellerDetails: any;
  seedSales: any;
  foodSales: any;
  selectedfoodSellerDetails: any;
  selectedFarmerMoreDetails: any;
  selectedFarmerDetails: any;
  sellerId: number;
  body: any[];
  email: any;
  role: any;
  userId: number;
  fCount: any;
  farmerDetails: any[];
  seedSellerDetails: any[];
  foodSellerDetails: any[];
  available = false;

  errorMsg: string;

  private _success = new Subject<string>();
  successMessage: string;

  constructor(private _organicSellerService: OrganicSellerService,
    private _seedsSellerService: SeedsService,
    private _profileService: ProfilesService,
    private _userService: UserService,
    private _farmerService: FarmerService) { }

  ngOnInit() {
    this.getFoodSellers();
    this.getSeedSellers();
    this.getFarmers();
    // this.getFarmerCount();

    this._success.subscribe((msg) => this.successMessage = msg);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);

    const modal = document.getElementById('id01');
    const modal1 = document.getElementById('id02');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      // tslint:disable-next-line:triple-equals
      if (event.target == modal) {
        modal.style.display = 'none';
      }
      if (event.target == modal1) {
        modal.style.display = 'none';
      }
    };

  }

  UserDeleteMsg(role: any) {
    this._success.next(`Successfully deleted the selected ` + role);
  }

  getFoodSellers() {
    this._organicSellerService.getAllOrganicSellers()
      .subscribe(resData => {
        this.foodSellerDetails = resData;
      },
        resError => this.errorMsg = resError);
  }

  getSelectedFoodSellers(userID: any) {
    this.available = false;
    this._organicSellerService.getSellerDetails(userID)
      .subscribe(resData => {
        this.selectedfoodSellerDetails = resData;
        this.sellingVegetables(this.selectedfoodSellerDetails[0].sellerID);
      },
        resError => this.errorMsg = resError);
  }

  sellingVegetables(seller: number) {
    this._organicSellerService.getSales(seller)
      .subscribe(resData => {
        this.foodSales = resData;
        if (this.foodSales >= '[object Object]') {
          this.available = true;
        }
      },
        resError => this.errorMsg = resError);
  }

  getSeedSellers() {
    this._seedsSellerService.getSeedSellers()
      .subscribe(resData => {
        this.seedSellerDetails = resData;
      },
        resError => this.errorMsg = resError);
  }

  getSelectedSeedSellers(userID: any) {
    this.available = false;
    this._seedsSellerService.getSeedSellerById(userID)
      .subscribe(resData => {
        this.selectedfoodSellerDetails = resData;
        this.sellingPlants(userID);
        this.sellingSeeds(userID);
      },
        resError => this.errorMsg = resError);
  }

  sellingSeeds(userID) {
    this._seedsSellerService.getSeeds(userID)
      .subscribe(resData => {
        this.seedSales = resData;
        if (this.seedSales >= '[object Object]' || this.plantSales >= '[object Object]') {
          this.available = true;
        }
      },
        resError => this.errorMsg = resError);
  }

  sellingPlants(userID) {
    this._seedsSellerService.getPlants(userID)
      .subscribe(resData => {
        this.plantSales = resData;
      },
        resError => this.errorMsg = resError);
  }

  getFarmerDetails(userId: number) {
    this.available = false;
    this._farmerService.getUserDetails(userId)
      .subscribe(resData => {
        this.selectedFarmerDetails = resData;
        this.getFarmerMoreDetails(userId);
      },
        resError => this.errorMsg = resError);
  }

  getFarmerMoreDetails(userID: number) {
    this._farmerService.getSelectedDetails(userID)
      .subscribe(resData => {
        this.selectedFarmerMoreDetails = resData;
        if (this.selectedFarmerMoreDetails >= '[object Object]') {
          this.available = true;
        }
      },
        resError => this.errorMsg = resError);
  }

  getFarmers() {
    this._profileService.getFarmers()
      .subscribe(resData => {
        this.farmerDetails = resData;
      },
        resError => this.errorMsg = resError);
  }

  removeFarmer(val: any) {
    this._profileService.removeFarmers(this.userId)
      .subscribe(resData => {
        this.UserDeleteMsg(this.role);
        this.role = '';
        this.userId = 0;
        this.email = '';
        this.getFarmers();
        // this.checkMail(val.reason, this.userId, this.email);
      },
        resError => this.errorMsg = resError);
  }

  removeFoodSeller(val: any) {
    this.body = [
      {
        userID: this.userId,
        sellerID: this.sellerId
      }
    ];
    this._profileService.removeFoodSellers(this.body[0])
      .subscribe(resData => {
        this.UserDeleteMsg(this.role);
        this.role = '';
        this.userId = 0;
        this.email = '';
        this.getFoodSellers();
        // this.checkMail(val.reason, this.userId, this.email);
      },
        resError => this.errorMsg = resError);
  }

  removeSeedSeller(val: any) {
    this.body = [
      {
        userID: this.userId,
        sellerID: this.sellerId
      }
    ];
    this._profileService.removeSeedSellers(this.body[0])
      .subscribe(resData => {
        this.UserDeleteMsg(this.role);
        this.role = '';
        this.userId = 0;
        this.email = '';
        this.getSeedSellers();
        // this.checkMail(val.reason, this.userId, this.email);
      },
        resError => this.errorMsg = resError);
  }

  deleteUser(userID: number, userRole: any, email: any) {
    this.userId = userID;
    this.role = userRole;
    this.email = email;
  }

  deleteSeller(userID: number, sellerID: number, userRole: any, email: any) {
    this.userId = userID;
    this.sellerId = sellerID;
    this.role = userRole;
    this.email = email;
  }

  removeUser(val: any) {

    if (this.role == 'Farmer') {
      this.removeFarmer(val);

    } else if (this.role == 'Food seller') {
      this.removeFoodSeller(val);

    } else if (this.role == 'Seed seller') {
      this.removeSeedSeller(val);
    }

  }

  checkMail(reason: any, userID: any, email: any) {

    const user = {
      subject: 'Agro Guide - User account',
      // tslint:disable-next-line:max-line-length
      body: '<p>Your user account has been deleted</p><br><p>User ID: ' + userID + '</p><br><p>Reason: ' + reason + '</p>',
      email: email
    };
    this._userService.sendMail(user)
      .subscribe(resDeleteQuestion => {
        console.log('successfully sent');
      }, error => {
        return Observable.throw(error);
      });

  }
  // tslint:disable-next-line:member-ordering
  @ViewChild('form') mytemplateForm: NgForm;
  cancel() {
    this.mytemplateForm.reset();
  }

}
