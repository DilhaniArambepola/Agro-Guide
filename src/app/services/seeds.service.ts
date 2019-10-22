import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class SeedsService {

  private _url = 'http://localhost:3000/api/seedShops';
  private _URL = 'http://localhost:3000/api/districtSeedShops';
  private url = 'http://localhost:3000/api/seeds';
  private URL = 'http://localhost:3000/api/plants';
  private _Url = 'http://localhost:3000/api/seedSellerMoreDetails';
  private _Url2 = 'http://localhost:3000/api/seedSellerDetails';

  // private _url = '/api/seedShops';
  // private _URL = '/api/districtSeedShops';
  // private url = '/api/seeds';
  // private URL = '/api/plants';
  // private _Url = '/api/seedSellerMoreDetails';
  // private _Url2 = '/api/seedSellerDetails';

  constructor(private _http: Http) { }

  // Get seed shops
  getSeedSellers(): Observable<any> {
    return this._http.get(this._url)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Get seed sellers according to the districts
  getDistrictSeedSellers(district: any): Observable<any> {
    return this._http.get(`${this._URL}/${district}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Get seeds
  getSeeds(userId: number): Observable<any> {
    return this._http.get(`${this.url}/${userId}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Get seed seller's username and contact details by userID
  getSeedSellerById(userID) {
    return this._http.get(`${this._Url}/${userID}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Get more information about seed sellers
  getSeedSeller(userID) {
    return this._http.get(`${this._Url2}/${userID}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Get plants
  getPlants(userId: number): Observable<any> {
    return this._http.get(`${this.URL}/${userId}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Add selling item
  addItem(body: any): Observable<any> {
    const bodyString = JSON.stringify(body); // Stringify payload
    const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    const options = new RequestOptions({ headers: headers }); // Create a request option

    return this._http.post(this._url, body, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }

  // Update quantity of the selling item
  updateQuantity(q: any, seedID: number) {
    const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    const options = new RequestOptions({ headers: headers }); // Create a request option

    return this._http.put(`${this.url}/${q}/${seedID}`, options) // ...using put request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }

  // Update price of the selling item
  updatePrice(p: any, seedID: number) {
    const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    const options = new RequestOptions({ headers: headers }); // Create a request option

    return this._http.put(`${this._url}/${p}/${seedID}`, options) // ...using put request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }

  // Delete a selling item
  removeItem(id: any): Observable<any[]> {
    return this._http.delete(`${this.url}/${id}`) // ...using put request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }
}
