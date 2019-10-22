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

    // Check whether the user is authenticated
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
                if (user.code == 204) {
                    return user;
                } else if (user.code == 208) {
                    return user;
                    // login successful if there's a jwt token in the response
                } else if (user.loggedIn.userID && user.accessToken) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', user.loggedIn.userID);
                    localStorage.setItem(user.loggedIn.userID, user.loggedIn.userRole);
                    this.currentUserSubject.next(user);
                    return user;
                }

            }));
    }

    decode() {
        // tslint:disable-next-line:radix
        if (parseInt(localStorage.getItem('currentUser')) > 0) {
            this.value = localStorage.getItem('currentUser');
            const role = localStorage.getItem(this.value);
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
}
