import { Component, OnInit } from '@angular/core';
import { CropsService, LocationsService, SeedsService } from '../../services';
import { FormsModule, FormControl, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cultivate-vegetables',
  templateUrl: './cultivate-vegetables.component.html',
  styleUrls: ['./cultivate-vegetables.component.css']
})
export class CultivateVegetablesComponent implements OnInit {

  plants: any;
  choose_district: any;
  choose_zone: any;
  cropDetails: any;
  seedShops: any;
  seeds: any;
  districts: any;
  zones: any;
  crops: any[];
  showBtn = false;

  mapZone = new Map();
  mapSeeds = new Map();

  crop: Array<string> = [];
  arrayZone: Array<any> = [];
  arraySeeds: Array<any> = [];

  zoneList: Array<any> = [];
  errorMsg: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private http: HttpClient,
    private _cropsService: CropsService,
    private _locationService: LocationsService,
    private _seedsService: SeedsService) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      const userId = params['userID'];
      if(userId > 0){
        this.showBtn = true;
      }
    });

    this.getCrops();
    this.getZones();
    this.getDistricts();
    this.getSeedShops();

    // tslint:disable-next-line:prefer-const
    let modal = document.getElementById('id01');
    // tslint:disable-next-line:prefer-const
    let modal2 = document.getElementById('id02');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      // tslint:disable-next-line:triple-equals
      if (event.target == modal) {
        modal.style.display = 'none';
      }
      if (event.target == modal2) {
        modal2.style.display = 'none';
      }
    };
  }

  // Get list of crops
  getCrops() {
    this._cropsService.getAllCrops()
      .subscribe(resData => {
        this.crops = resData;

        for (const c of this.crops) {
          this.crop.push(c.cropID);
          if (c.DryZone == 1) {
            this.arrayZone.push('DryZone');
          }
          if (c.Intermediate == 2) {
            this.arrayZone.push('Intermediate');
          }
          if (c.LowCountryWet == 3) {
            this.arrayZone.push('LowCountryWet');
          }
          if (c.UpCountryWet == 4) {
            this.arrayZone.push('UpCountryWet');
          }

          if (this.arrayZone.length > 0) {
            this.mapZone.set(c.cropID, this.arrayZone);
          }
          this.arrayZone = [];

        }
      },
        resError => this.errorMsg = resError);
  }


  getZones() {
    this._cropsService.getZones()
      .subscribe(resData => {
        this.zones = resData;
      },
        resError => this.errorMsg = resError);
  }

  getDistricts() {
    this._locationService.getDistrict()
      .subscribe(resData => {
        this.districts = resData;
      },
        resError => this.errorMsg = resError);
  }

  getSeedShops() {
    console.log("Seedshops: ");
    this._seedsService.getSeedSellers()
      .subscribe(resData => {
        this.seedShops = resData;
        this.mapSeeds.set(this.seedShops[0].districtName, this.seedShops[0]);
        console.log("seeds : " + this.seedShops[0].districtName);
      },
        resError => this.errorMsg = resError);
  }

  // get list of questions according to the label entered
  labelZone(zone: any) {
    if (zone != 0) {
      console.log("zone val1 : " + zone);
      this._cropsService.getZoneCrops(zone)
        .subscribe(resNewSellers => {
          this.crops = resNewSellers;

        },
          error => {
            return Observable.throw(error);
          }
        );

    } if (zone == 0) {
      console.log("zone val2 : " + zone);
      this.getCrops();
    }
  }

  getSelectedLabelZone(selected_zone: any) {
    if (selected_zone == 1) {
      this.choose_zone = 'DryZone';
    } else if (selected_zone == 2) {
      this.choose_zone = 'Intermediate';
    } else if (selected_zone == 3) {
      this.choose_zone = 'LowCountryWet';
    } else if (selected_zone == 4) {
      this.choose_zone = 'UpCountryWet';
    } else {
      this.choose_zone = selected_zone;
    }
    this.labelZone(this.choose_zone);
  }

  getPlnats(userID: number) {
    console.log("call plants : " + userID);
    this._seedsService.getPlants(userID)
      .subscribe(resData => {
        this.plants = resData;
      },
        resError => this.errorMsg = resError);
  }

  getSeeds(userID: number) {
    console.log("user : " + userID);
    this._seedsService.getSeeds(userID)
      .subscribe(resData => {
        this.seeds = resData;
      },
        resError => this.errorMsg = resError);
  }

  getSeedDetails(user: number) {
    this.getSeeds(user);
    this.getPlnats(user);
  }

  getDetails(cropID: any) {
    console.log("crop: " + cropID);
    this._cropsService.getCropDetails(cropID)
      .subscribe(resData => {
        this.cropDetails = resData;
        console.log("cropDetails : " + this.cropDetails[0].details);
      },
        resError => this.errorMsg = resError);
  }

  labelDistrict(district: any) {
    if (district != 0) {
      console.log("d1 " + district);
      this._seedsService.getDistrictSeedSellers(district)
        .subscribe(resData => {
          this.seedShops = resData;
        },
          resError => this.errorMsg = resError);

    } else if (district == 0) {
      console.log("d2 " + district);
      this.getSeedShops();
    }
  }

  getSelectedLabelDistrict(selected_district: any) {
    this.choose_district = selected_district;
    this.labelDistrict(this.choose_district);
  }

  redirect() {
    this.activatedRoute.queryParams.subscribe(params => {
      const redirectFrom = params['redirectFrom'];
      const userId = params['userID'];
      this.router.navigate([redirectFrom],  {queryParams: { userID: userId }});
    });
  }

}
