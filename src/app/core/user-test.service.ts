import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    private apiUrl = 'http://5a62b66e9e3dc40012d03235.mockapi.io/v1/users';
    constructor (private _http:Http) {}
    getList() : Observable <any[]>{
        return this._http.get(this.apiUrl).map(
            (response: Response)=>response.json() )
    }   
}