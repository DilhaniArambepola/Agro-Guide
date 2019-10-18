import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private _url = 'http://localhost:3000/api/district';
  // private _url = '/api/district';

  constructor(private _http: Http) { }

   // Get District
   getDistrict(): Observable<any> {
      return this._http.get(this._url)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
