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
  private _Url = 'http://localhost:3000/api/sales';

  // private _url = '/api/vegetableSellers';
  // private _URL = '/api/organicSellers';
  // private URL = '/api/sellerDetails';
  // private url = '/api/foodItems';
  // private _Url = '/api/sales';

  constructor(private _http: Http) { }

  // Get all organic seller details
  getAllOrganicSellers(): Observable<any> {
    return this._http.get(this._url)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Get organic sellers according to the selected district
  getSelectedOrganicSellers(district: any): Observable<any> {
    return this._http.get(`${this._URL}/${district}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Get vegetables which are selling by the selected user
  getFoodItems(id: number): Observable<any> {
    return this._http.get(`${this.url}/${id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Get selected seller details
  getSellerDetails(userID: number) {
    return this._http.get(`${this.URL}/${userID}`)
      .map((response: Response) => response.json())
      // .map((response: Response) => {response.json(), console.log("Response from service: "+response.json())})
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Get sales
  getSales(sellerID: number) {
    return this._http.get(`${this._Url}/${sellerID}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Add vegetables for seller
  addVeg(body: any): Observable<any> {
    const bodyString = JSON.stringify(body); // Stringify payload
    const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    const options = new RequestOptions({ headers: headers }); // Create a request option

    return this._http.post(this.URL, body, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }

  // Update quantity of selling vegetables
  updateQuantity(q: any, vegID: number) {
    const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    const options = new RequestOptions({ headers: headers }); // Create a request option

    return this._http.put(`${this.url}/${q}/${vegID}`, options) // ...using put request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }

  // Update prices of selling vegetables
  updatePrice(p: any, vegID: number) {
    const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    const options = new RequestOptions({ headers: headers }); // Create a request option

    return this._http.put(`${this._URL}/${p}/${vegID}`, options) // ...using put request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }

  // Delete a vegetable
  removeItem(id: any): Observable<any[]> {
    return this._http.delete(`${this.url}/${id}`) // ...using put request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }
}
