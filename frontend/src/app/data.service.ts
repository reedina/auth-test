import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/do';


@Injectable()
export class DataService {

  result: Array<any>;

  constructor(private _http: Http) { }

  getUsers() {
  return this._http.get("/api/users")
  .do(result => {
    console.log(`blah: ${result.json().data[0].name}`)
     })
  .map(result => this.result = result.json().data);
  }

}
