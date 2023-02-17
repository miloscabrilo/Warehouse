import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpMockService } from '@services/http-mock.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private readonly httpMockService: HttpMockService
  ) { }

  public getProductsSize(): Observable<number> {
    return this.httpMockService.getProductsSize();
  }

  public getFloorsSize(): Observable<number> {
    return this.httpMockService.getFloorsSize();
  }

  public getSectionsSize(): Observable<number> {
    return this.httpMockService.getSectionsSize();
  }

}
