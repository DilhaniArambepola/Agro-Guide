import { Component, OnInit } from '@angular/core';
import { UserService, FarmerService, SeedsService } from '../../services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-farmer-home-component',
  templateUrl: './farmer-home-component.component.html',
  styleUrls: ['./farmer-home-component.component.css']
})
export class FarmerHomeComponentComponent implements OnInit {

  moreDetails: any;
  show = false;
  selectedCrops: any;
  userId: any;
  crop: any[];
  userDetails: any[];
  cropDetails: any[];
  errorMsg: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private _userService: UserService,
    private _seedService: SeedsService,
    private _farmerService: FarmerService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const userID = params['userID'];
      this.getUserDetails(userID);
      this.getFarmerSelectedCrops(userID);
    });

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

  getUserDetails(userID: number) {
    this._farmerService.getUserDetails(userID)
      .subscribe(resData => {
        this.userDetails = resData;
        this.userId = this.userDetails[0].userID;
        this.getCrops(this.userDetails[0].districtName);
      },
        resError => this.errorMsg = resError);
  }

  // get the list of crops according to the climatezone
  getCrops(district: number) {
    this._farmerService.getCropDetails(district)
      .subscribe(resData => {
        this.cropDetails = resData;
      },
        resError => this.errorMsg = resError);
  }

  getFarmerSelectedCrops(userID: number) {
    this._farmerService.getSelectedDetails(userID)
      .subscribe(resData => {
        this.selectedCrops = resData;
      },
        resError => this.errorMsg = resError);
  }

  selectCrop(cropName) {
    this.crop = [
      {
        'cropName': cropName,
        'userID': this.userId
      }
    ];

    this._farmerService.selectCrop(this.crop)
      .subscribe(resData => {
        this.cropDetails = resData;
        this.getCrops(this.userDetails[0].districtName);
        this.getFarmerSelectedCrops(this.userId);
      },
        resError => this.errorMsg = resError);
  }

  removeConfirmed(crop: any) {
    document.getElementById('id01').style.display = 'none';

    this._farmerService.removeSelectedCrop(crop)
    .subscribe(resData => {
      this.getCrops(this.userDetails[0].districtName);
      this.getFarmerSelectedCrops(this.userId);
    },
      resError => this.errorMsg = resError);
  }

  showDetails(cropName) {
    console.log("crop: " + cropName);
    this._farmerService.getMoreDetails(cropName)
    .subscribe(resData => {
      this.moreDetails = resData;
      this.show = true;
      console.log("more : " + this.moreDetails.details);
      console.log("more : " + this.moreDetails.step1);
      console.log("more : " + this.moreDetails.step2);
    },
      resError => this.errorMsg = resError);
  }

  // getSeedShops() {
  //   console.log("district: " + this.userDetails[0].districtName);
  //   this._seedService.getDistrictSeedSellers(this.userDetails[0].districtName)
  //   .subscribe(resData => {
  //     this.seedShops = resData;
  //     console.log("more : " + this.seedShops[0].AddressLine1);
  //   },
  //     resError => this.errorMsg = resError);
  // }

  seedShops() {
    console.log("crop: ");
    // tslint:disable-next-line:max-line-length
    this.router.navigate(['/cultivate'], {queryParams: { redirectFrom: '/farmer-home', district: this.userDetails[0].districtName, userID: this.userId }});
  }

}
