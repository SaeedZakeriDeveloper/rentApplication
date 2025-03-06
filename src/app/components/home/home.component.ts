import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: IUser[] = []
  user: IUser = { id: 0, name: "", lastName: "", password: "", email: "" }
  LoggedIn: boolean = false



  constructor(private router: Router, private userService: UserService, private authservice: AuthService) { }
  onLoginButtonClicked() {
    this.router.navigate(['login'])
  }
  onRegisterButtonClicked() {
    this.router.navigate(['register'])

  }

  ngOnInit(): void {

    // this.userService.getAllUser().subscribe((res)=> { 
    //     this.users = res
    //     console.log(this.users)
    //   })

    // this.userService.getUserById(1).subscribe((res)=> { 
    //   this.user = res
    //   console.log(this.user)
    // })


    // this.userService.add(this.user).subscribe((res)=> { 
    //       this.user = res
    //       console.log(this.user)
    // })

    //  this.userService.update(1, this.user).subscribe((res)=> { 
    //   this.user = res
    //   console.log(this.user)
    //  })


    // this.userService.remove(1).subscribe((res)=> { 
    // })


    this.LoggedIn = this.authservice.authenticated

    this.user.name = this.authservice.currentUser.name



  }






}

