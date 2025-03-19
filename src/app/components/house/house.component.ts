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
  generalFilter: string = ""

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
      this.filteredHouses = this.houses

    } else if (this.currentBedroom.id != 0 && this.currentPrice.id == 0) {

      this.filteredHouses = this.houses.filter(x =>
        x.bedrooms as unknown as number == this.currentBedroom.value
      )
    }
    else if (this.currentBedroom.id == 0 && this.currentPrice.id != 0) {
      this.filteredHouses == this.houses.filter(x =>
        x.price as unknown as number >= this.currentPrice.from &&
        x.price as unknown as number < this.currentPrice.to
      )
    }
    else if (this.currentBedroom.id != 0 && this.currentPrice.id != 0) {
      this.filteredHouses = this.houses.filter(x =>
        x.bedrooms as unknown as number == this.currentBedroom.value &&
        x.price as unknown as number >= this.currentPrice.from &&
        x.price as unknown as number < this.currentPrice.to

      )

    }



  }

  generalFilterChange() {
    if (!this.generalFilter.trim()) {
      this.filterHouse(); 
      return;
    }
  
  
    this.filterHouse(); 
  
    this.filteredHouses = this.filteredHouses.filter(x => 
      x.code.includes(this.generalFilter) || 
      x.address.toLowerCase().includes(this.generalFilter.toLowerCase()) ||
      x.bathrooms.toString().includes(this.generalFilter) ||
      x.bedrooms.toString().includes(this.generalFilter) || 
      x.builtYear.includes(this.generalFilter) || 
      x.description.toLowerCase().includes(this.generalFilter.toLowerCase()) || 
      x.owner.toLowerCase().includes(this.generalFilter.toLowerCase()) ||
      x.price.toString().includes(this.generalFilter) ||
      x.size.toLowerCase().includes(this.generalFilter.toLowerCase()) 
    );
  }
  

}