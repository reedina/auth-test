import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {


  postMsg: string;

  //post(){
//    console.log(this.registerData);
//    this.authService.registerUser(this.registerData);
 //}
    post(){
       console.log(this.postMsg);
       this.apiService.postMessage({ msg: this.postMsg});
    }


  constructor(private apiService: ApiService) { }



}

