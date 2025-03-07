import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  LoggedIn : boolean = false



  constructor(private authService : AuthService , private router  :  Router){}


  
  ngOnInit(): void {
   this.LoggedIn = this.authService.authenticated
  }

  
  onButtonLogoutClick(){
    this.LoggedIn = true
    this.router.navigate(["login"])
  }

}
