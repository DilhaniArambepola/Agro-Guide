import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  checkMail() {
    const user = {
      cropName: 'zz',
      name: 'Dilhani',
      email: 'nimashandk94@gmail.com'
    };
    this._userService.sendMail(user)
    .subscribe(resDeleteQuestion => {
      console.log('successfully registered');
    }, error => {
      console.log("error");
       return Observable.throw(error);
    });

  }

}
