import { Component, OnInit } from '@angular/core';
import { CropsService } from '../../services/crops.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-more-details-component',
  templateUrl: './more-details-component.component.html',
  styleUrls: ['./more-details-component.component.css']
})
export class MoreDetailsComponentComponent implements OnInit {

  cropId: any;
  description: any;
  disease: any;
  detail: any;
  crops: any;
  errorMsg: string;
  editD =  false;
  editDis = false;
  editDes = false;
  editCrop: any[];

  arrayZone: Array<any> = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private _cropsService: CropsService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const cropID = params['crop'];
      this.getCrops(cropID);
    });
  }

  getCrops(cropID) {
    this._cropsService.getCropDetails(cropID)
      .subscribe(resData => {
        this.crops = resData;
        this.detail = this.crops.details;
        this.disease = this.crops.disease;
        this.description = this.crops.description;
          if (this.crops.DryZone == 1) {
            this.arrayZone.push('DryZone');
          }
          if (this.crops.Intermediate == 1) {
            this.arrayZone.push('Intermediate');
          }
          if (this.crops.LowCountryWet == 1) {
            this.arrayZone.push('LowCountryWet');
          }
          if (this.crops.UpCountryWet == 1) {
            this.arrayZone.push('UpCountryWet');
          }
      },
        resError => this.errorMsg = resError);
  }

  editDetail() {
    this.editD = true;
  }
  updateDetails(val: any) {
    this.editD = false;
    this.detail = val.details;
    this.cropId = val.cropID;
    console.log("update : " + val.details);
  }

  editDisease() {
    this.editDis = true;
  }
  updateDisease(val: any) {
    this.editDis = false;
    this.disease = val.disease;
    this.cropId = val.cropID;
    console.log("update : " + val.disease);
  }

  editDescription() {
    this.editDes = true;
  }
  updateDescription(val: any) {
    this.editDes = false;
    this.description = val.description;
    this.cropId = val.cropID;
    console.log("update : " + val.description);
  }
  
  updateCrop() {
    console.log("details : " + this.cropId);
console.log("details : " + this.detail);
console.log("disease : " + this.disease);
console.log("description : " + this.description);
this.editCrop = [
  {
    'cropID': this.cropId,
    'details': this.detail,
    'disease': this.disease,
    'description': this.description,
  }
];
this._cropsService.updateCropDetails(this.editCrop)
      .subscribe(resData => {
       // this.sellers = resData;
      },
        resError => this.errorMsg = resError);
  }

  redirect() {
    this.activatedRoute.queryParams.subscribe(params => {
      const redirectFrom = params['redirectFrom'];
      this.router.navigate([redirectFrom]);
    });
  }

}
