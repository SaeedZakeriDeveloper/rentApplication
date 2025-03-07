import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rentApplication';

  constructor(private router: Router) {}

  ngOnInit() {
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      this.router.navigate(['']); // Redirect to the first screen
    }
  }
  
}
