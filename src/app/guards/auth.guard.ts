import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     const currentUser = this.authenticationService.currentUserValue;
    //     if (currentUser) {
    //         // authorised so return true
    //         return true;
    //     }

    //     // not logged in so redirect to login page with the return url
    //     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    //     return false;
    // }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // if (this.authenticationService.isAuthenticated()) {
        //     return true;
        // }
        console.log('Check authentication' + false);
        console.log("return auth : " + state.url);

        // if (this.authenticationService.isLoggedIn()){
        //     return true;
        //   } else {
        //     this.router.navigate(['/login']);
        //     return false;
        //   }

        // navigate to login page
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        // you can save redirect url so after authing we can move them back to the page they requested
        return false;
    }
}
