import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // this.LoggedIn = this.authService.authenticated
  }


  get loggedIn() { 
    let res =  localStorage.getItem("loggedIn")
    if (res === "true"){
      return true
    }
    else { 
      return false
    }
  }


  onButtonLogoutClick() {
    localStorage.clear()
    this.router.navigate(["login"])
  }

}
