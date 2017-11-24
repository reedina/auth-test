import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/do';



@Injectable()
export class AuthService {

  result: Array<any>;

    constructor(private http: Http) {}


    registerUser(registerData) {
        this.http.post('http:/psight/register',registerData).subscribe(res => {
          console.log("Posted User Registration Data");
    });
    }

    loginUser(loginData) {
      this.http.post('http:/psight/login',loginData).subscribe(res => {
        console.log(res);
        localStorage.setItem('token', res.json().token);
      });
    }

}
