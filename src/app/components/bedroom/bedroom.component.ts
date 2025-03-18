import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IBedroom } from 'src/app/Interfaces/IBedroom';
import { BedroomService } from 'src/app/services/bedroom.service';

@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.css']
})
export class BedroomComponent implements OnInit{

  constructor (private bedroomService  :  BedroomService ){}

 bedrooms : IBedroom[] =[]
 currentBedroom :  IBedroom  | undefined

 @Output() OnBedroomSelectionChange  = new EventEmitter()
  
  ngOnInit(): void {
      this.bedroomService.getAllBedroom().subscribe((res )=> {    
        this.bedrooms = res     
      })
      
  }

  onItemClick(bedroom : IBedroom) { 
      this.currentBedroom  = bedroom
      this.OnBedroomSelectionChange.emit(this.currentBedroom)
  }
  
  

}


