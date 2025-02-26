import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../Interfaces/IUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //CRUD create read ubdate delete

  URL: string = "http://localhost:3000/users"


  getAllUser() : Observable<IUser[]> {
  return  this.http.get<IUser[]> (this.URL)
  }
  
  getUserById(id : number) : Observable<IUser>{
    return this.http.get<IUser>(this.URL + "/" + id)
  }

  add(user : IUser): Observable<IUser> {
    return this.http.post<IUser>(this.URL , user)
  }

  update(id :  number , user :  IUser) : Observable<IUser>{
   return this.http.put<IUser>(this.URL + "/" + id , user)
  }


  remove(id : number) : Observable<boolean> {
    return this.http.delete<boolean>(this.URL + "/" + id)
  }

}
