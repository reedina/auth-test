import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/do';



@Injectable()
export class ApiService {

  result: Array<any>;

  constructor(private http: Http) {}

  getMessages() {
    return this.http.get('/psight/posts')
    .do(result => { console.log(`getMessages service: ${result.json()}`)})
    .map(result => this.result  = result.json().data);
  }

  sendUserRegistration(registrationData) {
      this.http.post('http:/psight/register',registrationData).subscribe(res => {
        console.log("Posted User Registration Data");
  });
  }
}

