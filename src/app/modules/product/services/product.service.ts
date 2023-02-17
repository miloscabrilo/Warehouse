import { Injectable } from '@angular/core';
import { Product } from '@app/models/product-model';
import { HttpMockService } from '@services/http-mock.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpMockService: HttpMockService
  ) { }

  public getFilteredProducts(filterValue: Partial<Product>): Observable<Product[]> {
    return this.httpMockService.findProducts(filterValue);
  }

  public getAllFloors(): Observable<number[]> {
    return this.httpMockService.getAllFloors();
  }

  public getAllSections(): Observable<number[]> {
    return this.httpMockService.getAllSections();
  }

  public getAllProductCodes(): Observable<string[]> {
    return this.httpMockService.getAllProductCodes();
  }

  public getProductByCode(productCode: string): Observable<Product | null> {
    return this.httpMockService.getProductByCode(productCode);
  }

  public checkIfProductCodeExists(productCode: string): Observable<boolean> {
    return this.httpMockService.checkIfProductCodeExists(productCode);
  }

  public addProduct(product: Product): Observable<boolean> {
    return this.httpMockService.addProduct(product);
  }

  public updateProduct(product: Product): Observable<boolean> {
    return this.httpMockService.updateProduct(product);
  }

}
