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
  detail: any;
  crops: any;
  message = 0;
  errorMsg: string;
  editD = false;
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
    });
  }

  CropUpdateMsg() {
    this._success.next(`Successfully updated crop`);
  }

  getCrops(cropID) {
    console.log("cropID : " + cropID);
    this._cropsService.getCropDetails(cropID)
      .subscribe(resData => {
        this.crops = resData;
        this.detail = this.crops[0].details;
        console.log("details : " + this.detail);
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

  editDetail() {
    this.editD = true;
  }
  updateDetails(val: any) {
    this.editD = false;
    this.detail = val.details;
    this.cropId = val.cropID;
  }

  editDisease() {
    this.editDis = true;
  }
  updateDisease(val: any) {
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
        console.log("email count : " + this.count);
      },
        resError => this.errorMsg = resError);
    //     console.log("Outer email : " + this.emails);
    //     for (let i = 0; i < this.count; i++) {
    //       console.log("run this loop " + this.count);
    //       console.log("Outer email : " + this.emails[i].email);
    //       this.emailArray.push(this.emails[i].email);
    //     }
    // console.log("email Array final: " + this.emailArray);
    // this.checkMail(this.emailArray);
  }

  updateCrop() {
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
        this.CropUpdateMsg();
        if (this.message == 1 && this.emails != []) {
          console.log("Emails: back " + this.count + this.emails);
          for (let i = 0; i < this.count; i++) {
            console.log("emails: " + this.emails[0].email);
            this.emailArray.push(this.emails[i].email);
          }
          console.log("Array: " + this.emailArray);
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
