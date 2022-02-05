import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';


@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {


  public starWidth!: number;// la taille que prendra l'etoile correspondante

  @Input()
  public rating: number = 2; // le nombre d etoile correspondant chaque hotel: 2 è la valeur intial
  @Output()
  public starRatingClicked: EventEmitter<string> = new EventEmitter<string>()

  ngOnChanges(): void {
    this.starWidth = this.rating * 125 / 5; // si la valeur de rating change on va modifier la largeur de startWidth( dc on va multiplier le rating pa la largeur totale du contenair 125 diviser par le nombre de 5 etoil possible)
  }   
  public sendRating(): void{
    this.starRatingClicked.emit(`La note est de ${this.rating}`);
  }

  // constructor() { }
  // ngOnInit(): void {
  // }

}
