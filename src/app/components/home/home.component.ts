import { Component, OnInit } from '@angular/core';
import { HttpMockService } from '@services/http-mock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public productsAmount$ = this.httpMockService.getProductsSize();
  public floorsAmount$ = this.httpMockService.getFloorsSize();
  public sectionsAmount$ = this.httpMockService.getSectionsSize();


  constructor(
    private readonly httpMockService: HttpMockService
  ) {}

  ngOnInit(): void {
  }

}
