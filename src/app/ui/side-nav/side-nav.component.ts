import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  currentUser: User;

  constructor(private router: Router,
    private authenticationService: AuthenticationService) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x)  }

  domain;

  ngOnInit() {
    this.domain = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/home']);
  }

}
