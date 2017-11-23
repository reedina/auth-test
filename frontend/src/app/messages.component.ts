import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Array<any>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMessages()
    .subscribe( res => { this.messages = res;
    } )
  }

}
