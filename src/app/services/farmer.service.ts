import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  private _url = 'http://localhost:3000/api/userDetails';
  private url = 'http://localhost:3000/api/cropDetails';
  private URL = 'http://localhost:3000/api/selectedCropDetails';
  private _URL = 'http://localhost:3000/api/getCropDetails';
  private _Url = 'http://localhost:3000/api/selectedEmails';

  // private _url = '/api/userDetails';
  // private url = '/api/cropDetails';
  // private URL = '/api/selectedCropDetails';
  // private _URL = '/api/getCropDetails';
  // private _Url = '/api/selectedEmails';

  constructor(private _http: Http) { }

  getUserDetails(userId: number): Observable<any> {
    return this._http.get(`${this._url}/${userId}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getSelectedDetails(userID: number): Observable<any> {
    return this._http.get(`${this.URL}/${userID}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getCropDetails(district: number): Observable<any> {
    return this._http.get(`${this.url}/${district}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getMoreDetails(crop: any): Observable<any> {
    return this._http.get(`${this._URL}/${crop}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getEmailAddresses(cropName: number): Observable<any> {
    return this._http.get(`${this._Url}/${cropName}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  selectCrop(body: any): Observable<any> {
    const bodyString = JSON.stringify(body); // Stringify payload
    const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    const options = new RequestOptions({ headers: headers }); // Create a request option

    return this._http.post(this.url, body, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }

  removeSelectedCrop(cropName: any): Observable<any[]> {
    return this._http.delete(`${this.URL}/${cropName}`) // ...using put request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }
}
