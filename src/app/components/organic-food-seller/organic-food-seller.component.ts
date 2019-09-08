import { Component, OnInit } from '@angular/core';
import { OrganicSellerService, LocationsService } from '../../services';
import { FormsModule, FormControl, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-organic-food-seller',
  templateUrl: './organic-food-seller.component.html',
  styleUrls: ['./organic-food-seller.component.css']
})
export class OrganicFoodSellerComponent implements OnInit {

  choose_district: any;
  foodItems: any;
  sellers: any;
  errorMsg: string;
  districts: any;

  constructor(private http: HttpClient,
    private _organicSellerService: OrganicSellerService,
    private _locationService: LocationsService) { }

  ngOnInit() {

    this.getSellers();
    this.getDistricts();

    const modal = document.getElementById('id02');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      // tslint:disable-next-line:triple-equals
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  }

  getSellers() {
    console.log("load sellers");
    this._organicSellerService.getAllOrganicSellers()
      .subscribe(resData => {
        this.sellers = resData;
        console.log("sellers: " + this.sellers);
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

  getVegetables(sellerID: number) {
    this._organicSellerService.getFoodItems(sellerID)
      .subscribe(resData => {
        this.foodItems = resData;
        console.log("food items : " + this.foodItems[0].itemName);
      },
        resError => this.errorMsg = resError);
  }

  // get list of questions according to the label entered
  labelDistrict(district: any) {
    if (district !== 0) {
      this._organicSellerService.getSelectedOrganicSellers(district)
      .subscribe(resNewSellers => {
      this.sellers = resNewSellers;

      },
        error => {
          console.error('Error get label question!');
          return Observable.throw(error);
        }
      );

    } if (district == 0) {
      this.getSellers();
    }
  }

  getSelectedLabelDistrict(selected_district: any) {
    this.choose_district = selected_district;
    this.labelDistrict(this.choose_district);
  }
}
