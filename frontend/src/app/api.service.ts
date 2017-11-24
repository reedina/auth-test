import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/do';




@Injectable()
export class ApiService {

  result: Array<any>;

  users: Array<any>;



  constructor(private http: Http, private httpC: HttpClient) {}

  getMessages() {
    return this.http.get('/psight/posts')
    .do(result => { console.log(`getMessages service: ${result.json()}`)})
    .map(result => this.result  = result.json().data);
  }

  getUsers() {
    return this.http.get('/psight/users')
    .do(result => { console.log(`getUsers service: ${result.json()}`)})
    .map(result => this.users  = result.json());
  }

  getProfile(id)   {
    //let params = new HttpParams();
    //params = params.append('id', id);

    return this.httpC.get('/psight/profile/' + id)
    .do(result => { console.log(result['email']) });
    //.map(result => this.profile  = result);
  }


}

