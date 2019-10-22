import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private url = 'http://localhost:3000/api/register';
    private _url = 'http://localhost:3000/api/shop';
    private URL = 'http://localhost:3000/api/sendMail';

    // private url = '/api/register';
    // private _url = '/api/shop';
    // private URL = '/api/sendMail';

    constructor(private http: Http) { }

    // Register a new user
    register(body: any): Observable<any> {
        const bodyString = JSON.stringify(body); // Stringify payload
        const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON

        return this.http.post(this.url, body) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }

    // Send emails
    sendMail(body: any): Observable<any> {
        const bodyString = JSON.stringify(body); // Stringify payload
        const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON

        return this.http.post(this.URL, body) // ...using post request
            // tslint:disable-next-line:max-line-length
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }

    // Update vegetable seller details
    updateSellerDetails(sellerId: any, body: any): Observable<any> {
        const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        const options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.put(`${this.url}/${body}/${sellerId}`, options) // ...using put request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }

    // Update seed shop details
    updateShopDetails(shopId: any, body: any): Observable<any> {
        const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        const options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.put(`${this._url}/${body}/${shopId}`, options) // ...using put request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
             // ...errors if any
    }
}
