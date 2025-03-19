import { Injectable } from '@angular/core';
import { IUser } from '../Interfaces/IUser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Ihouses } from '../Interfaces/IHouse';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  URL: string = "http://localhost:3000/houses"
  constructor(private http: HttpClient) { }

  house: Ihouses = {
    id: 0,
    code: "",
    address: "",
    size: "",
    bedrooms: "",
    bathrooms: "",
    price: "",
    owner: "",
    builtYear: "",
    description: "",
    imagePath: "",

  }


  getAllhouse() {
    return this.http.get<Ihouses[]>(this.URL)
  }


  getById(id: number) {
    return this.http.get(this.URL + "/" + id)
  }

  add(house: Ihouses) {
    return this.http.post(this.URL , house)
  }

  update(id :  number  , house :  Ihouses){
    return this.http.put(this.URL + "/" + id  , house )
  }

  remove(id :  number) {
    return this.http.delete(this.URL + "/" + id )
  } 


}
