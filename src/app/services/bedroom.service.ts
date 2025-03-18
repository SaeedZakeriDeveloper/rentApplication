import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBedroom } from '../Interfaces/IBedroom';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BedroomService {

  bedroom: any

  constructor(private http: HttpClient) { }
  URL: string = "http://localhost:3000/bedroom"

  getAllBedroom() : Observable<IBedroom[]> {
    return this.http.get<IBedroom[]>(this.URL)
  }

  getBedroomById(id: number) {
    return this.http.get(this.URL + "/" + id)
  }

  add(bedroom: IBedroom) {
    return this.http.post(this.URL, bedroom)

  }

  upDate(id: number, bedroom: IBedroom) {
    return this.http.put(this.URL + "/" + id, bedroom)
  }

  remove(id: number) {
    return this.http.delete(this.URL + "/" + id)
  }

}
