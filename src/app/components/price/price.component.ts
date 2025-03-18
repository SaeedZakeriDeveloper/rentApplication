import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPrice } from 'src/app/Interfaces/IPrice';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit{

  prices : IPrice [] = [] 
  currentPrice : IPrice | undefined
  @Output() OnPriceSelectionChange =  new EventEmitter

  constructor(private priceService  :  PriceService){}


  ngOnInit(): void {
      this.priceService.getAllPrice().subscribe((res)=> { 
        this.prices = res
      })
  }


  onItemClick(price :  IPrice) { 
      this.currentPrice = price
      this.OnPriceSelectionChange.emit(price)
      
  }
}
