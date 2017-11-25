import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/do';


interface Token {
token: string;
}

@Injectable()
export class AuthService {

  result: Array<any>;

    constructor(private http: Http, private httpC: HttpClient) {}


    registerUser(registerData) {
        this.http.post('http:/psight/register',registerData).subscribe(res => {
          console.log("Posted User Registration Data");
    });
    }

    loginUser(loginData) {

      /*
      if we dont wanna add the type annoation of <any> we have to create
      a interface for the type returned

      */
      this.httpC.post<Token>('http:/psight/login',loginData).subscribe(res => {
        console.log(res);
        localStorage.setItem('token', res.token);
      });
    }

}
