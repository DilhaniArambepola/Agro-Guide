import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class OrganicSellerService {

  private _url = 'http://localhost:3000/api/vegetableSellers';
  private _URL = 'http://localhost:3000/api/organicSellers';
  private URL = 'http://localhost:3000/api/sellerDetails';
  private url = 'http://localhost:3000/api/foodItems';

  constructor(private _http: Http) { }

  // Get all organic seller details
  getAllOrganicSellers(): Observable<any> {
    return this._http.get(this._url)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getSelectedOrganicSellers(district: any): Observable<any> {
    return this._http.get(`${this._URL}/${district}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Get all organic seller details
  getFoodItems(id: number): Observable<any> {
    return this._http.get(`${this.url}/${id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getSellerDetails(userID) {
    return this._http.get(`${this.URL}/${userID}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  addVeg(body: any): Observable<any> {
    const bodyString = JSON.stringify(body); // Stringify payload
    const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    const options = new RequestOptions({ headers: headers }); // Create a request option

    return this._http.post(this.URL, body, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }

  updateQuantity(q: any, vegID: number) {
    const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    const options = new RequestOptions({ headers: headers }); // Create a request option

    return this._http.put(`${this.url}/${q}/${vegID}`, options) // ...using put request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }

  updatePrice(p: any, vegID: number) {
    const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    const options = new RequestOptions({ headers: headers }); // Create a request option

    return this._http.put(`${this._URL}/${p}/${vegID}`, options) // ...using put request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }

  // Delete a question
  removeItem(id: any): Observable<any[]> {
    return this._http.delete(`${this.url}/${id}`) // ...using put request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }
}
