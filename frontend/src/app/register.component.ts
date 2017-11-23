import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData = {};

   post(){
     console.log(this.registerData);
     this.apiService.sendUserRegistration(this.registerData);
  }

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

}
