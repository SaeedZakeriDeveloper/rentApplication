import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rentApplication';
  // loggedIn: boolean = false

  
 

  constructor(private router: Router , private authService : AuthService) { }

  get loggedIn() { 
    let res =  localStorage.getItem("loggedIn")
    if (res === "true"){
      return true
    }
    else { 
      return false
    }
  }

    
  ngOnInit() {
    // if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    //   this.router.navigate(['']); // Redirect to the first screen
    // }

  }
}
