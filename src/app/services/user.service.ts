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

    constructor(private http: Http) { }

    // getAll() {
    //     return this.http.get<User[]>(this.url);
    // }

    getById(id: number) {
        return this.http.get(`${this.url}/${id}`);
    }

    

    // Add a new applicant_rating
    register(body: any): Observable<any> {
        const bodyString = JSON.stringify(body); // Stringify payload
        const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        // const options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.url, body) // ...using post request
            // tslint:disable-next-line:max-line-length
            .map((res: Response) => res.json(), console.log('successfully registered' + Response)) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }

    sendMail(body: any): Observable<any> {
        const bodyString = JSON.stringify(body); // Stringify payload
        const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        // const options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.URL, body) // ...using post request
            // tslint:disable-next-line:max-line-length
            .map((res: Response) => res.json(), console.log('successfully registered' + Response)) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }

    update(user: User) {
        return this.http.put(`${this.url}/${user.id}`, user);
    }

    updateSellerDetails(sellerId: any, body: any): Observable<any> {
        const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        const options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.put(`${this.url}/${body}/${sellerId}`, options) // ...using put request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }

    updateShopDetails(shopId: any, body: any): Observable<any> {
        console.log("update : " + shopId + " " + body);
        const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        const options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.put(`${this._url}/${body}/${shopId}`, options) // ...using put request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
    }

    delete(id: number) {
        return this.http.delete(`${this.url}/${id}`);
    }
}
