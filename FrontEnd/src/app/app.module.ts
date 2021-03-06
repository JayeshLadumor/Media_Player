import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from "@angular/forms";
import 'hammerjs';

import {FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages';
import {HttpModule} from "@angular/http";
import {RouterModule,Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import {MdCardModule} from '@angular2-material/card';
import {MdMenuModule} from '@angular2-material/menu';
import {MdButtonModule} from '@angular2-material/button';
import {MdSliderModule} from '@angular2-material/slider';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProfileComponent } from './component/profile/profile.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { AdmindashboardComponent } from './component/admindashboard/admindashboard.component';


const appRoutes: Routes =[
  {path:'',component:HomeComponent},
  {path:'register',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'profile',component:ProfileComponent},
  {path:'contact',component:ContactComponent},
  {path:'admindashboard',component:AdmindashboardComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ProfileComponent,
    HomeComponent,
    ContactComponent,
    AdmindashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    MdCardModule,
    MdMenuModule,
    MdButtonModule,
    MdSliderModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
