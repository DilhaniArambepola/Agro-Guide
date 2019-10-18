import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { decode } from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';
// import { AlertServiceService } from './alert-service.service';

import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {

    errorMsg: any;
    value: any;
    private url = 'http://localhost:3000/api/users/authenticate';

    // private url = '/api/users/authenticate';

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient,
        private _router: Router,
        public jwtHelper: JwtHelperService
        //  private _alert: AlertServiceService)
    ) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    clear(): void {
        localStorage.clear();
    }

    isAuthenticated(token: any): boolean {
        console.log("Authenticated");
        return localStorage.getItem('currentUser') != null && !this.isTokenExpired(token);
    }

    isTokenExpired(token): boolean {
        console.log("token not expired ");
        console.log(this.jwtHelper.isTokenExpired());
        console.log("Date : " + this.jwtHelper.getTokenExpirationDate(token));
        return this.jwtHelper.isTokenExpired();
        // return false;
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(val: any) {
        console.log("val: " + val);
        return this.http.post<any>(this.url, val)
            .pipe(map(user => {
                //  console.log('print user : ' + user.loggedIn.accessToken);
                console.log('print code : ' + user.code);
                console.log('print error : ' + user.error);
                // console.log('print userId : ' + user.loggedIn.userID);
                // console.log('print user role : ' + user.loggedIn.userRole);

                if (user.code == 204) {
                    console.log("came to this");
                    console.log("msg 204: " + user.error);
                    return user;
                    // this._alert.error(user.error)
                } else if (user.code == 208) {
                    console.log("came to this2");
                    console.log("msg 208: " + user.error);
                return user;
                    // this._alert.error(user.error);


                    // login successful if there's a jwt token in the response
                } else if (user.loggedIn.userID && user.accessToken) {
                    console.log('print userId inner: ' + user.loggedIn.userID);
                    console.log('token from auth service : ' + user.accessToken);
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', user.loggedIn.userID);
                    localStorage.setItem(user.loggedIn.userID, user.loggedIn.userRole);
                    console.log("repeat: " + localStorage.getItem(user.loggedIn.userID));
                    this.currentUserSubject.next(user);
                    return user;

                }

            }));
    }

    decode() {
        console.log("call this");
        console.log("call this current: " + localStorage.getItem('currentUser'));
        // tslint:disable-next-line:radix
        if (parseInt(localStorage.getItem('currentUser')) > 0) {
            this.value = localStorage.getItem('currentUser');
            
            // this.isAuthenticated(this.value.accessToken);
            console.log("Value: " + this.value);
            const role = localStorage.getItem(this.value);
            console.log("has a val : " + role);
            return role;
        }
        return 0;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        //  this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    }

    // logout(): void {
    //     this.clear();
    //     this._router.navigate(['/login']);
    //   }
}
