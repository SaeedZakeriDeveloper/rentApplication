import { Component, OnInit } from '@angular/core';
import { IBedroom } from 'src/app/Interfaces/IBedroom';
import { Ihouses } from 'src/app/Interfaces/IHouse';
import { IPrice } from 'src/app/Interfaces/IPrice';
import { } from 'src/app/Interfaces/IUser';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {


  houses: Ihouses[] = []
  filteredHouses: Ihouses[] = []
  currentBedroom!: IBedroom
  currentPrice!: IPrice

  constructor(private houseService: HouseService) { }


  ngOnInit(): void {
    this.houseService.getAllhouse().subscribe((res) => {
      this.houses = res
      this.filteredHouses = res
    })
    this.currentPrice = {
      id: 0,
      title: "All Prices",
      from: 0,
      to: 1000
    }
    this.currentBedroom =
    {
      id: 0,
      title: "All Bedrooms",
      value: 0
    }
  }

  onBedroomChanged(bedroom: IBedroom) {
    this.currentBedroom = bedroom
    this.filterHouse()
  }


  onPriceChanged(price: IPrice) {
    this.currentPrice = price
    this.filterHouse()
  }



  filterHouse() {

    if (this.currentBedroom.id == 0 && this.currentPrice.id == 0) {
      this.filteredHouses =  this.houses

    } else if (this.currentBedroom.id != 0 && this.currentPrice.id == 0) {

      this.filteredHouses = this.houses.filter(x =>
        x.bedrooms == this.currentBedroom.value
      )
    }
    else if (this.currentBedroom.id == 0 && this.currentPrice.id != 0) {
      this.filteredHouses == this.houses.filter(x =>
        x.price >= this.currentPrice.from &&
        x.price < this.currentPrice.to
      )
    }
    else if (this.currentBedroom.id != 0 && this.currentPrice.id != 0) {
      this.filteredHouses = this.houses.filter(x =>
        x.bedrooms == this.currentBedroom.value &&
        x.price >= this.currentPrice.from &&
        x.price < this.currentPrice.to

      )

    }


  }





}
