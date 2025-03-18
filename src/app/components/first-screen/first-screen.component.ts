import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.css']
})
export class FirstScreenComponent {
    constructor(private router: Router, private userService: UserService, private authservice: AuthService) { }
  
  


  onLoginButtonClicked() {
    
    this.router.navigate(['login'])
    
  }
  onRegisterButtonClicked() {
 
    this.router.navigate(['register'])
    
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
}
