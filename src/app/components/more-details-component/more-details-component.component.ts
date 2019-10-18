import { Component, OnInit } from '@angular/core';
import { CropsService, UserService, FarmerService } from '../../services';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-more-details-component',
  templateUrl: './more-details-component.component.html',
  styleUrls: ['./more-details-component.component.css']
})
export class MoreDetailsComponentComponent implements OnInit {

  count = 1;
  emails: any;
  cropId: any;
  description: any;
  disease: any;
  step1: any;
  step2: any;
  step3: any;
  step4: any;
  crops: any;
  message = 0;
  errorMsg: string;
  editD1 = false;
  editD2 = false;
  editD3 = false;
  editD4 = false;
  editDis = false;
  editDes = false;
  editCrop: any[];

  arrayZone: Array<any> = [];
  emailArray: Array<any> = [];

  private _success = new Subject<string>();
  successMessage: string;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private _cropsService: CropsService,
    private _farmerService: FarmerService,
    private _userService: UserService) { }

  ngOnInit() {

    this._success.subscribe((msg) => this.successMessage = msg);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);

    this.activatedRoute.queryParams.subscribe(params => {
      const cropID = params['crop'];
      this.getCrops(cropID);
      this.getMoreCrops(cropID);
    });
  }

  CropUpdateMsg() {
    this._success.next(`Successfully updated crop`);
  }

getCrops(cropID) {
  this._cropsService.getCropDetails(cropID)
      .subscribe(resData => {
        this.crops = resData;

        if (this.crops[0].DryZone == 1) {
          this.arrayZone.push('DryZone');
        }
        if (this.crops[0].Intermediate == 1) {
          this.arrayZone.push('Intermediate');
        }
        if (this.crops[0].LowCountryWet == 1) {
          this.arrayZone.push('LowCountryWet');
        }
        if (this.crops[0].UpCountryWet == 1) {
          this.arrayZone.push('UpCountryWet');
        }

        this.step1 = '';
        this.step2 = '';
        this.step3 = '';
        this.step4 = '';
        this.disease = '';
        this.description = '';
      },
        resError => this.errorMsg = resError);
}

  getMoreCrops(cropID) {
    this._cropsService.getCropMoreDetails(cropID)
      .subscribe(resData => {
        this.crops = resData;
        console.log("Crop: "+this.crops[0]);
        this.step1 = this.crops[0].step1;
        this.step2 = this.crops[0].step2;
        this.step3 = this.crops[0].step3;
        this.step4 = this.crops[0].step4;
        this.disease = this.crops[0].disease;
        this.description = this.crops[0].description;

        if (this.crops[0].DryZone == 1) {
          this.arrayZone.push('DryZone');
        }
        if (this.crops[0].Intermediate == 1) {
          this.arrayZone.push('Intermediate');
        }
        if (this.crops[0].LowCountryWet == 1) {
          this.arrayZone.push('LowCountryWet');
        }
        if (this.crops[0].UpCountryWet == 1) {
          this.arrayZone.push('UpCountryWet');
        }
      },
        resError => this.errorMsg = resError);
  }

  editStep1() {
    this.editD1 = true;
  }
  updateStep1(val: any) {
    this.editD1 = false;
    this.step1 = val.step1;
    this.cropId = val.cropID;
  }
  editStep2() {
    this.editD2 = true;
  }
  updateStep2(val: any) {
    this.editD2 = false;
    this.step2 = val.step2;
    this.cropId = val.cropID;
  }
  editStep3() {
    this.editD3 = true;
  }
  updateStep3(val: any) {
    this.editD3 = false;
    this.step3 = val.step3;
    this.cropId = val.cropID;
  }
  editStep4() {
    this.editD4 = true;
  }
  updateStep4(val: any) {
    this.editD4 = false;
    this.step4 = val.step4;
    this.cropId = val.cropID;
  }

  editDisease() {
    this.editDis = true;
  }
  updateDisease(val: any) {
    console.log("val: " + val);
    this.message = 1;

    this.getEmails(this.crops[0].cropName);

    this.editDis = false;
    this.disease = val.disease;
    this.cropId = val.cropID;
  }

  editDescription() {
    this.editDes = true;
  }
  updateDescription(val: any) {
    this.message = 1;
    this.editDes = false;
    this.description = val.description;
    this.cropId = val.cropID;
  }

  checkMail(emailAddresses) {
    // const user = {
    //   name: 'Dilhani',
    //   // email: 'nimashandk94@gmail.com'
    //   email: emailAddresses
    // };
    const user = {
      subject: "Agro Guide - Spreading new disease for "+this.crops[0].cropName,
      // tslint:disable-next-line:max-line-length
      body: '<p>Please pay your attention for below details</p><br><p>Disease: ' + this.disease + '</p><br><p>Description: ' + this.description + '</p>',
      email: emailAddresses
    };
    this._userService.sendMail(user)
      .subscribe(resDeleteQuestion => {
        console.log('successfully sent');
      }, error => {
        return Observable.throw(error);
      });

  }

  getEmails(cropName: any) {
    this._farmerService.getEmailAddresses(cropName)
      .subscribe(resData => {
        this.emails = resData;
        this.count++;
      },
        resError => this.errorMsg = resError);
  }

  updateCrop() {
    this.editCrop = [
      {
        'cropID': this.cropId,
        'step1': this.step1,
        'step2': this.step2,
        'step3': this.step3,
        'step4': this.step4,
        'disease': this.disease,
        'description': this.description,
      }
    ];
    this._cropsService.updateCropDetails(this.editCrop)
      .subscribe(resData => {
        this.CropUpdateMsg();
        if (this.message == 1 && this.emails != []) {
          for (let i = 0; i < this.count; i++) {
            this.emailArray.push(this.emails[i].email);
          }
          this.checkMail(this.emailArray);
        }
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
