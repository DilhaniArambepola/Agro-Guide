import { Component, OnInit } from '@angular/core';
import { UserService, GeneralService } from '../../services';
import { Observable } from 'rxjs/internal/Observable';
import Chart from 'chart.js';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { MustMatch } from '../../helpers/must-match.validator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  show = false;
  currentPwd: any;
  admin: any;
  isCollapsed = false;
  submitted = false;

  inquiries: any;
  farmerCount = 0;
  vegSellerCount = 0;
  seedSellerCount = 0;
  iCount = 0;

  amCount = 0;
  anCount = 0;
  baCount = 0;
  btCount = 0;
  cCount = 0;
  gCount = 0;
  gmCount = 0;
  hCount = 0;
  jCount = 0;
  klCount = 0;
  keCount = 0;
  kyCount = 0;
  kiCount = 0;
  kuCount = 0;
  mannrCount = 0;
  mlCount = 0;
  mtrCount = 0;
  moCount = 0;
  muCount = 0;
  neCount = 0;
  poCount = 0;
  puCount = 0;
  rCount = 0;
  tCount = 0;
  vCount = 0;

  amvCount = 0;
  anvCount = 0;
  bavCount = 0;
  btvCount = 0;
  cvCount = 0;
  gvCount = 0;
  gmvCount = 0;
  hvCount = 0;
  jvCount = 0;
  klvCount = 0;
  kevCount = 0;
  kyvCount = 0;
  kivCount = 0;
  kuvCount = 0;
  mannrvCount = 0;
  mlvCount = 0;
  mtrvCount = 0;
  movCount = 0;
  muvCount = 0;
  nevCount = 0;
  povCount = 0;
  puvCount = 0;
  rvCount = 0;
  tvCount = 0;
  vvCount = 0;

  amsCount = 0;
  ansCount = 0;
  basCount = 0;
  btsCount = 0;
  csCount = 0;
  gsCount = 0;
  gmsCount = 0;
  hsCount = 0;
  jsCount = 0;
  klsCount = 0;
  kesCount = 0;
  kysCount = 0;
  kisCount = 0;
  kusCount = 0;
  mannrsCount = 0;
  mlsCount = 0;
  mtrsCount = 0;
  mosCount = 0;
  musCount = 0;
  nesCount = 0;
  posCount = 0;
  pusCount = 0;
  rsCount = 0;
  tsCount = 0;
  vsCount = 0;

  allUsers: any;
  errorMsg: string;
  districts: any;
  district: Array<any> = [];
  seedSellers: Array<any> = [];
  vegSellers: Array<any> = [];
  farmers: Array<any> = [];
  registerForm: FormGroup;

  private _success = new Subject<string>();
  private _delete = new Subject<string>();

  successMessage: string;
  deleteMessage: string;

  constructor(private formBuilder: FormBuilder,
    private _userService: UserService,
    private _generalService: GeneralService) { }

  ngOnInit() {

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() =>this.successMessage = null);

    this._delete.subscribe((message) => this.deleteMessage = message);
    this._delete.pipe(
      debounceTime(5000)
    ).subscribe(() => this.deleteMessage = null);
    
    this.getInquiriesCount();
    this.getAllUsers();

    this.registerForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });


    const modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  Success() {
    this._success.next(`Successfully changed the admin password`);
  }
  error(msg: any) {
    this._delete.next(msg);
  }

  getAllUsers() {

    this._generalService.getAllUsers()
      .subscribe(resAllUsers => {
        this.allUsers = resAllUsers;
        for (const u of this.allUsers) {

          if (u.userRole == 'Admin') {
            this.admin = u;
          }

          if (u.userRole == 'Farmer') {
            this.farmerCount++;
          } else if (u.userRole == 'Food seller') {
            this.vegSellerCount++;
          } else if (u.userRole == 'Seed seller') {
            this.seedSellerCount++;
          }

          if (u.userRole == 'Farmer' && u.districtName == 'Ampara') {
            this.amCount++;
          } else if (u.userRole == 'Farmer' && u.districtName == 'Anuradhapura') {
            this.anCount++;
          } else if (u.userRole == 'Farmer' && u.districtName == 'Badulla') {
            this.baCount++;
          } else if (u.userRole == 'Farmer' && u.districtName == 'Batticaloa') {
            this.btCount++;
          } else if (u.userRole == 'Farmer' && u.districtName == 'Colombo') {
            this.cCount++;
          } else if (u.userRole == 'Farmer' && u.districtName == 'Galle') {
            this.gCount++;
          } else if (u.userRole == 'Farmer' && u.districtName == 'Gampaha') {
            this.gmCount++;
          } else if (u.userRole == 'Farmer' && u.districtName == 'Hambantota') {
            this.hCount++;
          } else if (u.userRole == 'Farmer' && u.districtName == 'Jaffna') {
            this.jCount++;
          } else if (u.userRole == 'Farmer' && u.districtName == 'Kalutara') {
            this.klCount++;
          } else if (u.userRole == 'Farmer' && u.districtName == 'Kandy') {
            this.kyCount++;
          } else if (u.userRole == 'Farmer' && u.districtName == 'Kegalle') {
            this.keCount++;
          } else if (u.userRole == 'Farmer' && u.districtName == 'Kilinochchi') {
            this.kiCount++;
          } else if (u.userRole == 'Farmer' && u.districtName == 'Kurunegala') {
            this.kuCount++;
          } else if (u.userRole == 'Farmer' && u.districtName == 'Mannar') {
            this.mannrCount++;
          } else if (u.userRole == 'Farmer' && u.districtName == 'Matale') {
            this.mlCount++;
          } else if (u.userRole == 'Farmer' && u.districtName == 'Matara') {
            this.mtrCount++;
          } else if (u.userRole == 'Farmer' && u.districtName == 'Monaragala') {
            this.moCount++;
          } else if (u.userRole == 'Farmer' && u.districtName == 'Mullative') {
            this.muCount++;
          } else if (u.userRole == 'Farmer' && u.districtName == 'Nuwara Eliya') {
            this.neCount++;
          } else if (u.userRole == 'Farmer' && u.districtName == 'Polonnaruwa') {
            this.poCount++;
          } else if (u.userRole == 'Farmer' && u.districtName == 'Puttalam') {
            this.puCount++;
          } else if (u.userRole == 'Farmer' && u.districtName == 'Rathnapura') {
            this.rCount++;
          } else if (u.userRole == 'Farmer' && u.districtName == 'Trinco') {
            this.tCount++;
          } else if (u.userRole == 'Farmer' && u.districtName == 'Vavniya') {
            this.vCount++;
          }

          if (u.userRole == 'Food seller' && u.districtName == 'Ampara') {
            this.amvCount++;
          } else if (u.userRole == 'Food seller' && u.districtName == 'Anuradhapura') {
            this.anvCount++;
          } else if (u.userRole == 'Food seller' && u.districtName == 'Badulla') {
            this.bavCount++;
          } else if (u.userRole == 'Food seller' && u.districtName == 'Batticaloa') {
            this.btvCount++;
          } else if (u.userRole == 'Food seller' && u.districtName == 'Colombo') {
            this.cvCount++;
          } else if (u.userRole == 'Food seller' && u.districtName == 'Galle') {
            this.gvCount++;
          } else if (u.userRole == 'Food seller' && u.districtName == 'Gampaha') {
            this.gmvCount++;
          } else if (u.userRole == 'Food seller' && u.districtName == 'Hambantota') {
            this.hvCount++;
          } else if (u.userRole == 'Food seller' && u.districtName == 'Jaffna') {
            this.jvCount++;
          } else if (u.userRole == 'Food seller' && u.districtName == 'Kalutara') {
            this.klvCount++;
          } else if (u.userRole == 'Food seller' && u.districtName == 'Kandy') {
            this.kyvCount++;
          } else if (u.userRole == 'Food seller' && u.districtName == 'Kegalle') {
            this.kevCount++;
          } else if (u.userRole == 'Food seller' && u.districtName == 'Kilinochchi') {
            this.kivCount++;
          } else if (u.userRole == 'Food seller' && u.districtName == 'Kurunegala') {
            this.kuvCount++;
          } else if (u.userRole == 'Food seller' && u.districtName == 'Mannar') {
            this.mannrvCount++;
          } else if (u.userRole == 'Food seller' && u.districtName == 'Matale') {
            this.mlvCount++;
          } else if (u.userRole == 'Food seller' && u.districtName == 'Matara') {
            this.mtrvCount++;
          } else if (u.userRole == 'Food seller' && u.districtName == 'Monaragala') {
            this.movCount++;
          } else if (u.userRole == 'Food seller' && u.districtName == 'Mullative') {
            this.muvCount++;
          } else if (u.userRole == 'Food seller' && u.districtName == 'Nuwara Eliya') {
            this.nevCount++;
          } else if (u.userRole == 'Food seller' && u.districtName == 'Polonnaruwa') {
            this.povCount++;
          } else if (u.userRole == 'Food seller' && u.districtName == 'Puttalam') {
            this.puvCount++;
          } else if (u.userRole == 'Food seller' && u.districtName == 'Rathnapura') {
            this.rvCount++;
          } else if (u.userRole == 'Food seller' && u.districtName == 'Trinco') {
            this.tvCount++;
          } else if (u.userRole == 'Food seller' && u.districtName == 'Vavniya') {
            this.vvCount++;
          }

          if (u.userRole == 'Seed seller' && u.districtName == 'Ampara') {
            this.amsCount++;
          } else if (u.userRole == 'Seed seller' && u.districtName == 'Anuradhapura') {
            this.ansCount++;
          } else if (u.userRole == 'Seed seller' && u.districtName == 'Badulla') {
            this.basCount++;
          } else if (u.userRole == 'Seed seller' && u.districtName == 'Batticaloa') {
            this.btsCount++;
          } else if (u.userRole == 'Seed seller' && u.districtName == 'Colombo') {
            this.csCount++;
          } else if (u.userRole == 'Seed seller' && u.districtName == 'Galle') {
            this.gsCount++;
          } else if (u.userRole == 'Seed seller' && u.districtName == 'Gampaha') {
            this.gmsCount++;
          } else if (u.userRole == 'Seed seller' && u.districtName == 'Hambantota') {
            this.hsCount++;
          } else if (u.userRole == 'Seed seller' && u.districtName == 'Jaffna') {
            this.jsCount++;
          } else if (u.userRole == 'Seed seller' && u.districtName == 'Kalutara') {
            this.klsCount++;
          } else if (u.userRole == 'Seed seller' && u.districtName == 'Kandy') {
            this.kysCount++;
          } else if (u.userRole == 'Seed seller' && u.districtName == 'Kegalle') {
            this.kesCount++;
          } else if (u.userRole == 'Seed seller' && u.districtName == 'Kilinochchi') {
            this.kisCount++;
          } else if (u.userRole == 'Seed seller' && u.districtName == 'Kurunegala') {
            this.kusCount++;
          } else if (u.userRole == 'Seed seller' && u.districtName == 'Mannar') {
            this.mannrsCount++;
          } else if (u.userRole == 'Seed seller' && u.districtName == 'Matale') {
            this.mlsCount++;
          } else if (u.userRole == 'Seed seller' && u.districtName == 'Matara') {
            this.mtrsCount++;
          } else if (u.userRole == 'Seed seller' && u.districtName == 'Monaragala') {
            this.mosCount++;
          } else if (u.userRole == 'Seed seller' && u.districtName == 'Mullative') {
            this.musCount++;
          } else if (u.userRole == 'Seed seller' && u.districtName == 'Nuwara Eliya') {
            this.nesCount++;
          } else if (u.userRole == 'Seed seller' && u.districtName == 'Polonnaruwa') {
            this.posCount++;
          } else if (u.userRole == 'Seed seller' && u.districtName == 'Puttalam') {
            this.pusCount++;
          } else if (u.userRole == 'Seed seller' && u.districtName == 'Rathnapura') {
            this.rsCount++;
          } else if (u.userRole == 'Seed seller' && u.districtName == 'Trinco') {
            this.tsCount++;
          } else if (u.userRole == 'Seed seller' && u.districtName == 'Vavniya') {
            this.vsCount++;
          }

        }
        // tslint:disable-next-line:max-line-length
        this.farmers.push(this.amCount, this.anCount, this.baCount, this.btCount, this.cCount, this.gCount, this.gmCount, this.hCount, this.jCount, this.klCount, this.kyCount, this.keCount, this.kiCount, this.kuCount, this.mannrCount, this.mtrCount, this.mlCount, this.moCount, this.muCount, this.neCount, this.poCount, this.puCount, this.rCount, this.tCount, this.vCount);
        // tslint:disable-next-line:max-line-length
        this.vegSellers.push(this.amvCount, this.anvCount, this.bavCount, this.btvCount, this.cvCount, this.gvCount, this.gmvCount, this.hvCount, this.jvCount, this.klvCount, this.kyvCount, this.kevCount, this.kivCount, this.kuvCount, this.mannrvCount, this.mtrvCount, this.mlvCount, this.movCount, this.muvCount, this.nevCount, this.povCount, this.puvCount, this.rvCount, this.tvCount, this.vvCount);
        // tslint:disable-next-line:max-line-length
        this.seedSellers.push(this.amsCount, this.ansCount, this.basCount, this.btsCount, this.csCount, this.gsCount, this.gmsCount, this.hsCount, this.jsCount, this.klsCount, this.kysCount, this.kesCount, this.kisCount, this.kusCount, this.mannrsCount, this.mtrsCount, this.mlsCount, this.mosCount, this.musCount, this.nesCount, this.posCount, this.pusCount, this.rsCount, this.tsCount, this.vsCount);

        // Line chart
        const canvas = <HTMLCanvasElement>document.getElementById('lineChart');
        const ctxL = canvas.getContext('2d');
        let myLineChart = new Chart(ctxL, {
          type: 'line',
          data: {
            // tslint:disable-next-line:max-line-length
            labels: ['Ampara', 'Anuradhapura', 'Badulla', 'Batticaloa', 'Colombo', 'Galle', 'Gampaha', 'Hambantota', 'Jaffna', 'Kalutara', 'Kandy', 'Kegalle', 'Kilinochchi', 'Kurunegala', 'Mannar', 'Matale', 'Matara', 'Monaragala', 'Mullative', 'Nuwara Eliya', 'Polonnaruwa', 'Puttalam', 'Rathnapura', 'Trinco', 'Vavniya'],
            datasets: [{
              label: 'Vegetable sellers',
              data: this.vegSellers,
              backgroundColor: [
                'rgba(105, 0, 132, .2)',
              ],
              borderColor: [
                'rgba(200, 99, 132, .7)',
              ],
              borderWidth: 2
            },
            {
              label: 'Seed Sellers',
              data: this.seedSellers,
              backgroundColor: [
                'rgba(0, 137, 132, .2)',
              ],
              borderColor: [
                'rgba(0, 10, 130, .7)',
              ],
              borderWidth: 2
            },
            {
              label: 'Farmers',
              data: this.farmers,
              backgroundColor: [
                'rgba(34, 137, 34, .2)',
              ],
              borderColor: [
                'rgba(0, 128, 0, .9)',
              ],
              borderWidth: 2
            }
            ]
          },
          options: {
            responsive: true
          }
        });

      }, resError => this.errorMsg = resError);
  }

  // Get Admin password
  getAdminPwd() {
    this._generalService.getAdminPwd()
      .subscribe(resPassword => {
        this.currentPwd = resPassword;
      }, resError => this.errorMsg = resError);
  }

  // Get number of new inquiries
  getInquiriesCount() {
    this._generalService.getAllInquiry()
      .subscribe(resInquiries => {
        this.inquiries = resInquiries;

        for (let i of this.inquiries) {
          if (i.respond == null) {
            this.iCount++;
          }
        }
      }, resError => this.errorMsg = resError);
  }

  // tslint:disable-next-line:member-ordering
  @ViewChild('form') mytemplateForm: NgForm;
  confirmAdmin(val: any) {

    if (val.email1 == this.admin.email && val.pwd1 == this.currentPwd.value) {
      this.show = true;
    } else if (val.email1 != this.admin.email) {
      this.error('please enter the correct email address');
    } else if (val.email1 == this.admin.email && val.pwd1 != this.currentPwd.value) {
      this.error('Password is incorrect');
    }

  }

  // reset forms
  cancel() {
    this.mytemplateForm.reset();
  }

  changePassword(value: any) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this._generalService.changePassword(this.registerForm.value.password)
      .subscribe(resInquiries => {
        this.inquiries = resInquiries;
        this.Success();
        this.mytemplateForm.reset();
        this.show = false;
        document.getElementById('id01').style.display = 'none';
      }, resError => this.errorMsg = resError);
  }

}
