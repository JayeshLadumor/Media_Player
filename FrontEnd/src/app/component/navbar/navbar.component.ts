import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  Logout()
  {
    this.authService.logout();
    this.router.navigate(['login']);
  }
  Profile_Load()
  {
    this.router.navigate(['profile']);
  }

  Loggedin()
  {
    return this.authService.loggedIn();
  }
}
