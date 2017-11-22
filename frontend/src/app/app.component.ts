import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   users: Array<any>;

    constructor(private _dataservice: DataService) {
       this._dataservice.getUsers()
       .subscribe(res => { this.users = res;
      console.log(res); })
    }
}
