import { Injectable } from '@angular/core';
import { Product } from '@app/models/product-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpMockService {

  private floorsList: number[] = [1, 2, 3];
  private sectionsList: number[] = [1, 2, 3];

  private productsList: Product[] = [
    {
      code: "MYTZ 123456",
      quantity: 100,
      floor: this.floorsList[0],
      section: this.floorsList[1]
    },
    {
      code: "UK 13462",
      quantity: 15,
      floor: this.floorsList[1],
      section: this.sectionsList[1]
    },
    {
      code: "KOB 8472",
      quantity: 1,
      floor: this.floorsList[0],
      section: this.sectionsList[0]
    },
    {
      code: "MY 123456",
      quantity: 5,
      floor: this.floorsList[2],
      section: this.sectionsList[0]
    },
    {
      code: "CCB 13462",
      quantity: 12,
      floor: this.floorsList[1],
      section: this.sectionsList[2]
    },
    {
      code: "UFC 24785",
      quantity: 25,
      floor: this.floorsList[1],
      section: this.sectionsList[1]
    },
  ];

  constructor() { }

  public getProductsSize(): Observable<number> {
    return of(this.productsList.length);
  }

  public getFloorsSize(): Observable<number> {
    return of(this.floorsList.length);
  }

  public getSectionsSize(): Observable<number> {
    return of(this.sectionsList.length);
  }
}
