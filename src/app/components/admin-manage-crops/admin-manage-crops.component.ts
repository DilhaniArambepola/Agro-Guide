import { Component, OnInit, ViewChild } from '@angular/core';
import { CropsService } from '../../services/crops.service';
import { FormsModule, FormControl, NgForm } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-manage-crops',
  templateUrl: './admin-manage-crops.component.html',
  styleUrls: ['./admin-manage-crops.component.css']
})
export class AdminManageCropsComponent implements OnInit {

  selectedCrop: any;
  dry: any;
  selectedImage: File;
  crops: any[];
  errorMsg: string;

  zoneSelected: boolean;
  zoneSelect = false;
  sendCrop: any[];
  editCrop: any[];

  mapZone = new Map();

  zoneList: Array<any> = [];
  arrayZone: Array<any> = [];

  crop: Array<string> = [];
  data: Array<string> = [];

  zones = [
    { id: 1, name: 'DryZone' },
    { id: 2, name: 'Intermediate' },
    { id: 2, name: 'LowCountryWet' },
    { id: 2, name: 'UpCountryWet' }
  ];

  constructor(private router: Router, private _cropsService: CropsService) { }

  ngOnInit() {

    this.getCrops();
    // Get the modal
    // tslint:disable-next-line:prefer-const
    let modal = document.getElementById('id01');
    // tslint:disable-next-line:prefer-const
    let modal1 = document.getElementById('id02');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
      if (event.target == modal1) {
        modal1.style.display = 'none';
      }
    };
  }

  onZoneChangeUpdate(cropName: any, zone: string, isChecked: boolean) {
    console.log("crop: " + cropName + "zone : "+ zone);
    this.zoneList = [];
    if (isChecked) {
      if (this.mapZone.has(cropName)) {
        this.zoneList = this.mapZone.get(cropName);
        this.zoneList.push(zone);
      } else {
        // this.locationList = [];
        this.zoneList.push(zone);
      }
      this.mapZone.set(cropName, this.zoneList);
    } else {
      this.zoneList = this.mapZone.get(cropName);
      const index1 = this.zoneList.indexOf(zone);
      this.zoneList.splice(index1, 1);
      this.mapZone.set(cropName, this.zoneList);
    }
  }

  onZoneChange(zone: string, isChecked: boolean) {
    if (isChecked) {
      this.zoneList.push(zone);
    } else {
      const index1 = this.zoneList.indexOf(zone);
      this.zoneList.splice(index1, 1);
    }
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
          if (c.Intermediate == 1) {
            this.arrayZone.push('Intermediate');
          }
          if (c.LowCountryWet == 1) {
            this.arrayZone.push('LowCountryWet');
          }
          if (c.UpCountryWet == 1) {
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

  onImageSelected(event) {
    this.selectedImage = <File>event.target.files[0];
  }

  // tslint:disable-next-line:member-ordering
  @ViewChild('form') mytemplateForm: NgForm;
  addCrops(val: any) {

    this.sendCrop = [
      {
        'crop': val.crop,
        'description': val.description,
        'disease': val.disease,
        'diseaseDes': val.diseaseDes,
        'zone': this.zoneList
      }
    ];

    this._cropsService.addCrops(this.sendCrop)
      .subscribe(resData => {
       // console.log('res data : ' + resData);
        // this.crops = resData;
        this.mytemplateForm.reset();
        this.getCrops();
      },
        resError => this.errorMsg = resError);
  }

  // tslint:disable-next-line:member-ordering
  @ViewChild('form') myUpdateForm: NgForm;
  updateCrop(val: any) {

      this.editCrop = [
        {
          'crop': val.crop,
          'description': val.description,
          'disease': val.disease,
          'dis_description': val.diseaseDes,
          'zone': this.zoneList
        }
      ];

      this._cropsService.updateCropDetails(this.editCrop)
        .subscribe(resUpdateEmployee => {

          this.mytemplateForm.reset();
          this.getCrops();
          // this.zoneArray = [];

        }, error => {
          return Observable.throw(error);
        });
  }

  editCrops(crop: any) {
     console.log("crop details : "+ crop.cropName);
    this.selectedCrop = crop;
  }

  checkZone(crop, name) {
    this.data = this.mapZone.get(crop.cropID);
    // console.log("crop : " + crop.cropID + name +"****" + this.data);
    if (this.data != null) {
      if (this.data.find(x => x == name)) {
        this.zoneSelected = true;
        this.zoneSelect = true;
      } else {
        this.zoneSelected = false;
        this.zoneSelect = false;
      }
    } else {
      this.zoneSelected = false;
      this.zoneSelect = false;
    }
  }

   // Delete crops
   deleteCrop(cropName: any) {
     console.log("delete : " + cropName);
    this._cropsService.removeCrop(cropName)
      .subscribe(resDeleteQuestion => {
        this.getCrops();
      }, error => {
         this.getCrops();
         return Observable.throw(error);
      });
  }

  cancel() {
    this.mytemplateForm.reset();
   }

  moreDetails(cropID: number) {
    console.log("crop: " + cropID);
    // tslint:disable-next-line:max-line-length
    this.router.navigate(['/admindashboard/moreDetails'], {queryParams: { redirectFrom: '/admindashboard/manageCrops', crop: cropID }});
  }

}




