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

  getMessages(userId) {
    return this.httpC.get<any>('/psight/posts/' + userId)
    .do(result => { console.log(`getMessages service: ${result}`)})
    .map(result => this.result  = result);
  }

  postMessage(message) {
    this.http.post('http:/psight/post',message).subscribe(res => {
      console.log("Posted Message");
});
}

  getUsers() {
    return this.httpC.get<any>('/psight/users')
    .do(result => { console.log(`getUsers service: ${result}`)})
    .map(result => this.users  = result);
  }

  getProfile(id)   {
    //let params = new HttpParams();
    //params = params.append('id', id);

    return this.httpC.get<any>('/psight/profile/' + id)
    .do(result => { console.log(result.email) });
    //.map(result => this.profile  = result);
  }


}

