import { Component, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService , private router  :  Router) {  
  }


  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

    

  onLoginFormSubmit() {
    const user: IUser = { id: 0, name: "", lastName: "", password: "", email: "" }
    user.email = this.loginForm.value.email || ""
    user.password = this.loginForm.value.password || ""

    this.authService.login(user.email, user.password);
  }


  
  onClickWelcomeScreen(){
    this.router.navigate([''])
  }

}