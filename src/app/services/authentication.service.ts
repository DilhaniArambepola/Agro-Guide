import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { decode } from 'jwt-decode';
// import { AlertServiceService } from './alert-service.service';

import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    errorMsg: any;
    private url = 'http://localhost:3000/api/users/authenticate';

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient,
        private _router: Router
      //  private _alert: AlertServiceService)
    )
    {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    clear(): void {
        localStorage.clear();
    }

    isAuthenticated(): boolean {
        console.log("Authenticated");
        return localStorage.getItem('token') != null && !this.isTokenExpired();
    }

    isTokenExpired(): boolean {
        console.log("token expired ");
        return false;
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(val: any) {
        return this.http.post<any>(this.url, val)
            .pipe(map(user => {
                console.log('print user : ' + user.loggedIn);
                console.log('print code : ' + user.code);
                console.log('print error : ' + user.error);
                // console.log('print userId : ' + user.loggedIn.userID);
                // console.log('print user role : ' + user.loggedIn.userRole);
                // login successful if there's a jwt token in the response
                if (user.loggedIn.userID && user.accessToken) {
                    console.log('print userId inner: ' + user.loggedIn.userID);
                    console.log('token from auth service : ' + user.accessToken);
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);

                    return user;
                } else if (user.code == 204) {
                    console.log("came to this");
                    console.log("msg: " + user.error);
                    // this._alert.error(user.error)
                } else if (user.code == 208) {
                    console.log("came to this2");
                    console.log("msg: " + user.error);
                    // this._alert.error(user.error);
                }
    }));
}

decode() {
    console.log("call this");
    if (localStorage.getItem('currentUser') != null) {
        const val = JSON.parse(localStorage.getItem('currentUser'));
        console.log("has a val : ");
        return val;
    }
    console.log("return 1");
    return 1;
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
