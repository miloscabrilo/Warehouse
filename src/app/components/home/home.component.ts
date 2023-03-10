import { Component } from '@angular/core';
import { HomeService } from '@services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public productsAmount$ = this.homeService.getProductsSize();
  public floorsAmount$ = this.homeService.getFloorsSize();
  public sectionsAmount$ = this.homeService.getSectionsSize();


  constructor(
    private readonly homeService: HomeService
  ) {}

}
