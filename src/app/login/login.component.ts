import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertServiceService, AuthenticationService } from '../services';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  [x: string]: any;
  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;

  user: any;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  sendVal: any[];

  constructor(private formBuilder: FormBuilder,
    // private activatedRoute: ActivatedRoute,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private alertService: AlertServiceService) {
    // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit() {
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', Validators.required]
    });

     // reset login status
  //   this.authenticationService.logout();

    //  this.activatedRoute.queryParams.subscribe(params => {
    //   this.returnUrl = params['returnUrl'];
    //  });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    if (this.returnUrl == '/farmer-home') {
      this.title = 'Farmer';
    } else if (this.returnUrl == '/admindashboard') {
      this.title = 'Admin';
    } else if (this.returnUrl == '/veg-seller-home') {
      this.title = 'Vegeable seller';
    } else if (this.returnUrl == '/seed-seller-home') {
      this.title = 'Seed seller';
    }
    
    console.log("returnURL : " + this.returnUrl);
  }

  public NotMatch() {
    console.log("call to not match");
    this._success.next(`Email and password does not match`);
  }
  public NotExist() {
    console.log("call to not exist");
    this._success.next(`Email does not exist`);
   // this.router.navigate(['/login']);
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  // tslint:disable-next-line:member-ordering
  // @ViewChild('form') mytemplateForm: NgForm;
  onSubmit() {
    this.submitted = true;
    this.authenticationService.logout();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    console.log("pwd: " + this.f.password.value);
    console.log("email: " + this.f.email.value);

    this.sendVal = [
      {
        'password': this.f.password.value,
        'email': this.f.email.value
      }
    ];

    this.loading = true;
    this.authenticationService.login(this.sendVal)
      .pipe(first())
      .subscribe(data => { this.user = data;
        console.log("user came");
          console.log('result: login component' + this.user.code);
        
          if (this.user.code == 200) {
            console.log("success:" + this.user.success);
            console.log("token:" + this.user.accessToken);
            console.log("return url : " + this.returnUrl);
           
            this.router.navigate([this.returnUrl], { queryParams: { userID: this.user.loggedIn.userID } });
            // this.router.navigate(['/home']);
          } else if (this.user.code == 204) {
            console.log("erorrrrrrrrrrr");
           // this.alertService.error(this.user.error);
           // this.errorText = 'Email and password does not match';
            console.log("Here : "+this.user.error);
            // this.mytemplateForm.reset();
           // this.router.navigate(['/login']);
            this.NotMatch();
          } else if (this.user.code == 208) {
            this.NotExist();
           // this.errorText = 'Email does not exist';
            console.log("Here : " + this.user.error);
            return;
          }

        },
        error => {
          console.log("here print: : " + error);
        //  this.alertService.error(error);
          this.loading = false;
        });
  }

  Register() {
    console.log("register");
    this.router.navigate(['/register']);
  }

}
