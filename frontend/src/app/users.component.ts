import { Component, OnInit } from '@angular/core';
import { ApiService} from './api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<any>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUsers()
    .subscribe( res => {this.users = res});
  }

}


/*

  messages: Array<any>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMessages()
    .subscribe( res => { this.messages = res;
    } )
  }
*/
