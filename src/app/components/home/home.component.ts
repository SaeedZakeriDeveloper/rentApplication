import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ihouses } from 'src/app/Interfaces/IHouse';
import { IUser } from 'src/app/Interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { HouseService } from 'src/app/services/house.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  users: IUser[] = []
  user: IUser = { id: 0, name: "", lastName: "", password: "", email: "" }

  house: Ihouses = {
    id: 0,
    code: "",
    address: "",
    size: "",
    bedrooms: 0,
    bathrooms: "",
    price: 0,
    owner: "",
    builtYear: "",
    description: "",
    imagePath: "",

  }





  constructor(private router: Router, private userService: UserService, private authservice: AuthService,
    private houseService: HouseService
  ) { }


  ngOnInit(): void {

    // this.userService.getAllUser().subscribe((res)=> { 
    //     this.users = res
    //     console.log(this.users)
    //   })

    // this.userService.getUserById(1).subscribe((res)=> { 
    //   this.user = res
    //   console.log(this.user)
    // })


    this.userService.add(this.user).subscribe((res)=> { 
          this.user = res
          console.log(this.user)
    })

    //  this.userService.update(1, this.user).subscribe((res)=> { 
    //   this.user = res
    //   console.log(this.user)
    //  })


    // this.userService.remove(1).subscribe((res)=> { 
    // })




    // this.LoggedIn = this.authservice.authenticated

    // this.user.name = this.authservice.currentUser.name


  }


  get loggedIn() {
    let res = localStorage.getItem("loggedIn")
    if (res === "true") {
      return true
    }
    else {
      return false
    }
  }


  get currentUser() {
    return localStorage.getItem("currentUser")

  }



  testHouseService() {
    // this.houseService.getAllhouse().subscribe((res)=> { 
    //   console.log(res)
    // })

    // this.houseService.getById(2).subscribe((res)=> { 
    //   console.log(res)
    // })

    // this.houseService.add(this.house).subscribe((res)=> { 

    // })

    // this.houseService.update(1 , this.house).subscribe((res)=> { 

    // })

    // this.houseService.remove(1).subscribe((res)=> { 

    // })

  }

  goToHouseComponents()  {
    this.router.navigate(['house'])
  }





}

