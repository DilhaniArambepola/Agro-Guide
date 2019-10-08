import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService, AlertServiceService, UserService, LocationsService } from '../services';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './../helpers/must-match.validator';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    status: any;
    selectedRole: any;
    selectedDistrict: any;
    districts: any;
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    sendVal: any[];
    errorMsg: string;
    isVisible: boolean;

    role = [
        { id: 1, name: 'Farmer' },
        { id: 2, name: 'Food seller' },
        { id: 2, name: 'Seed seller' }
    ];

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertServiceService,
        private _locationService: LocationsService
    ) {
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) {
        //     this.router.navigate(['/']);
        // }
    }

    ngOnInit() {
        this.isVisible = false;
        this.getDistricts();

        this.registerForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            adL1: [''],
            adL2: [''],
            adL3: [''],
            contact: [''],
            district: ['', Validators.required],
            role: ['', Validators.required]
        }, {
                validator: MustMatch('password', 'confirmPassword')
            });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    getSelectedDistrict(district: any) {
        this.selectedDistrict = district;
    }

    getSelectedRole(role: any) {
        this.selectedRole = role;
        if (role == 'Farmer') {
            this.isVisible = false;
        } else {
            this.isVisible = true;
        }
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.sendVal = [
            {
                'userName': this.registerForm.value.username,
                'password': this.registerForm.value.password,
                'email': this.registerForm.value.email,
                'userRole': this.selectedRole,
                'districtName': this.selectedDistrict,
                'adL1': this.registerForm.value.adL1,
                'adL2': this.registerForm.value.adL1,
                'adL3': this.registerForm.value.adL1,
                'contact': this.registerForm.value.contact,
            }
        ];

        this.loading = true;
        this.userService.register(this.sendVal)
            // .pipe(first())
            .subscribe(resData => {
                    this.status = resData;
                    console.log("role: " + this.selectedRole);
                    console.log("successfully regsitered" + this.status);

                    if (this.selectedRole == 'Farmer') {
                        this.router.navigate(['/farmer-home']);
                    } else if (this.selectedRole == 'Seed seller') {
                        console.log("seed seller");
                        this.router.navigate(['/seed-seller-home']);
                    } else if (this.selectedRole == 'Food seller') {
                        console.log("veg seller seller");
                        this.router.navigate(['/veg-seller-home']);
                    }
                    console.log("No option");
                   // this.router.navigate(['/login']);
                    // this.alertService.success('Registration successful', true);
                    // this.router.navigate(['/login']);
                },
                error => {
                   // this.alertService.error(error);
                    this.loading = false;
                });
    }

    getDistricts() {
        this._locationService.getDistrict()
            .subscribe(resData => {
                this.districts = resData;
            },
                resError => this.errorMsg = resError);
    }

}
