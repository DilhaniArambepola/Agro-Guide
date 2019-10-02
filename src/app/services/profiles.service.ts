import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  private _url = 'http://localhost:3000/api/farmers';
  private _Url = 'http://localhost:3000/api/farmerCount';
  private url = 'http://localhost:3000/api/rSeedSeller';
  private _URL = 'http://localhost:3000/api/rvegSeller';

  constructor(private _http: Http) { }

  getFarmers(): Observable<any> {
    return this._http.get(this._url)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getNumOfFarmers() {
    return this._http.get(this._Url)
    .map((response: Response) => response.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  removeFarmers(id: any): Observable<any[]> {
    console.log("id: " + id);
    return this._http.delete(`${this._url}/${id}`) // ...using put request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }

  removeSeedSellers(body: any): Observable<any[]> {
    return this._http.delete(`${this.url}/${body.sellerID}/${body.userID}`) // ...using put request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }

  removeFoodSellers(body: any): Observable<any[]> {
    console.log("sellerID service: " + body.sellerID);
    return this._http.delete(`${this._URL}/${body.sellerID}/${body.userID}`) // ...using put request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }

}
