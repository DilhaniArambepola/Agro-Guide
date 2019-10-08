import { AuthenticationService } from '../services/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardsService implements CanActivate {

  constructor(private _authService: AuthenticationService, private _router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    //   const expectedRole = route.data.expectedRole;
    //   const token = localStorage.getItem('token');
    //   // decode the token to get its payload
    //   const tokenPayload = decode(token);
    //   if (
    //     !this._authService.isAuthenticated() || 
    //     tokenPayload.role !== expectedRole
    //   ) {
    //     this._router.navigate(['login']);
    //     return false;
    //   }
    //   return true;
    // }

    const user = this._authService.decode();
    console.log("req back : " + user);
    if (user != 0) {
      if (user === next.data.role) {
        console.log("expected rule : " + user);
        console.log("expected rule : " + next.data.role);
        console.log("can authenticate: " + state.url);
        console.log("return url from guard : " + state.url);
        // console.log("session: " + req.session.userid);
        // this._router.navigate([state.url]);
        // this._router.navigate([state.url], { queryParams: { userID: user.loggedIn.userID } });
      //  console.log("url: " + state.url);
        return true;
      }
      console.log("expected rule : " + user);
      // navigate to not found page
      
      this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    } else {
      console.log("return url from guard : " + state.url);
      this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }

}
