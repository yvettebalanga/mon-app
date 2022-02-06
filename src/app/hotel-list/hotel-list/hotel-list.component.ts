import { Component, OnInit } from '@angular/core';
import { IHotel } from './hotel';
import { HotelListService } from './hotel-list.service';
@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {


  constructor(private hotelListService: HotelListService) { }

  ngOnInit(): void {
    
   this.hotelListService.getHotels().subscribe({
      next: hotels => {
        this.hotels = hotels;
        this.filteredHotels = this.hotels;
      },
      error: err => this.errorMsg = err
    });
  
    this.hotelFilter = '';
  }

  public title = 'Liste hotel';

  public hotels: IHotel[] = [];


  public showBadge: boolean = false;

  private _hotelFilter = 'mot';
  public receivedRating!: string;
  public errorMsg!: string;

  // public hotelFilter = 'mot';

  public filteredHotels: IHotel[] = [];

  public toggleIsNewBadge(): void {
    this.showBadge = !this.showBadge;
  }

  public get hotelFilter(): string {
    return this._hotelFilter;
  }

  public set hotelFilter(filter: string) {
    this._hotelFilter = filter;

    this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels;
  }
  receiveRatingClicked(messsage: string): void {
    this.receivedRating = messsage;
  }

  private filterHotels(criteria: string): IHotel[] {
    criteria = criteria.toLocaleLowerCase();
    const res = this.hotels.filter(
      (hotel: IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(criteria) !== -1
    );
    return res;
  }

}

