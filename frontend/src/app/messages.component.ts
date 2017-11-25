import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Array<any>;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {

    var userId = this.route.snapshot.params.id
    console.log(userId)
    this.apiService.getMessages(userId)
    .subscribe( res => { this.messages = res;
      console.log(res);
    } )
  }

}
