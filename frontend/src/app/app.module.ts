import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from './data.service';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import {MatButtonModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { RegisterComponent } from './register.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

const routes = [
  { path: 'register', component: RegisterComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DataService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
