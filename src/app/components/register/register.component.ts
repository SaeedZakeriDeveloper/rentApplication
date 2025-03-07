import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Interfaces/IUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  

  
  

  constructor(private userService: UserService, private router: Router,) { }

  registerForm = new FormGroup({

    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),

  })

  onRegisterFormSubmit() {
    const  user : IUser  = {id: 0  , name :"" , lastName : "" , password : "" , email: ""}
    user.name = this.registerForm.value.name || ""
    user.lastName = this.registerForm.value.lastName || ""
    user.email = this.registerForm.value.email || ""
    user.password = this.registerForm.value.password || ""

    console.log(this.registerForm)

    this.userService.add(user!).subscribe((res)=> { 
      alert("Success")
      this.router.navigate(["login"])
    })

    
  }

  onClickWelcomeScreen(){
    this.router.navigate([''])
  }

}
