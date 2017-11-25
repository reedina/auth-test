import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //profile =  {email: '', _id: ''};
profile

  constructor(private apiService: ApiService, private route: ActivatedRoute) {

   }

  ngOnInit() {
    /*
    this.route.params
    .map(params => params['id'])
    .subscribe((id) => {
      this.apiService
        .getProfile(id)
        .subscribe(profile => this.profile = profile);
    });
    */
    //console.log(this.route.snapshot.params['id']);
    this.apiService.getProfile(this.route.snapshot.params['id'])
    .subscribe( res => { console.log(res.mail);
    this.profile = res });

  }
/*
this.apiService.getMessages()
    .subscribe( res => { this.messages = res;
    } )
*/
}
