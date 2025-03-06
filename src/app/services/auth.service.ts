import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { IUser } from '../Interfaces/IUser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private userService: UserService, private router: Router) { }

  users: IUser[] = []



  authenticated : boolean = false
  currentUser : IUser = { id: 0, name: "", lastName: "", password: "", email: "" }



  login(email: string, password: string) {

    this.userService.getAllUser().subscribe((res) => {
      this.users = res
      let user = this.users.filter(x => x.email == email && x.password == password)[0];
      if (user) {
        alert("welcome")
        
        
        this.authenticated = true  
        this.currentUser = user
        this.router.navigate(["/home"]);
      }

      else {
        this.authenticated = false
        alert("Not authenticated ")

      }




    })



  }




}