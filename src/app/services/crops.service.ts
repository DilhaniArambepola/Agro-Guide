import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class CropsService {

  private _url = 'http://localhost:3000/api/crops';
  private _URL = 'http://localhost:3000/api/cutivate';
  private URL = 'http://localhost:3000/api/selectedCrop';
  private url = 'http://localhost:3000/api/cropZone';

  constructor(private _http: Http) { }

  // Get Crops
  getAllCrops(): Observable<any> {
    return this._http.get(this._url)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getZoneCrops(zone: any): Observable<any> {
    console.log("call the zone service");
    return this._http.get(`${this.URL}/${zone}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Add a new applicant_rating
  addCrops(body: any): Observable<any> {
    const bodyString = JSON.stringify(body); // Stringify payload
    const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    const options = new RequestOptions({ headers: headers }); // Create a request option

    return this._http.post(this._url, body, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }

  // Delete a question
  removeCrop(cropName: any): Observable<any> {
    console.log("crop: " + cropName);
    return this._http.delete(`${this._url}/${cropName}`) // ...using put request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  }

  //   Update ceops
  updateCropDetails(body: any): Observable<any[]> {
    console.log("came to service  "+body[0].cropID);
    // const bodyString = JSON.stringify(body); // Stringify payload
    const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    const options = new RequestOptions({ headers: headers, body: body }); // Create a request option

    return this._http.put(this._url, body, options) // ...using put request
        .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
        .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
}

  getZones(): Observable<any> {
    return this._http.get(this.url)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getCropDetails(id: number): Observable<any> {
    return this._http.get(`${this._URL}/${id}`)
    .map((response: Response) => response.json() )
      // .map((response: Response) => {response.json(), console.log(response.json()); } )
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // addZone(body: Object): Observable<any> {
  //   const bodyString = JSON.stringify(body); // Stringify payload
  //   const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  //   const options = new RequestOptions({ headers: headers }); // Create a request option

  //   return this._http.post(this.url, body, options) // ...using post request
  //     .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
  //     .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
  // }
}
