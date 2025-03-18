import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPrice } from '../Interfaces/IPrice';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  URL = "http://localhost:3000/price"

  constructor(private http: HttpClient) { }

  getAllPrice()  : Observable<IPrice[]>{
    return this.http.get<IPrice[]>(this.URL)
  }



}
