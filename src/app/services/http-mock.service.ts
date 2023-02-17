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

  public findProducts(filteredProduct: Partial<Product>): Observable<Product[]> {

    let filteredProductList: Product[] = this.productsList;

    // Filter by Code
    if (filteredProduct.code != null) {
      const code = filteredProduct.code;
      filteredProductList = filteredProductList.filter(prod => prod.code.includes(code.trim()))
    }

    // Filter by Floor
    if (filteredProduct.floor != null) {
      const floor = filteredProduct.floor;
      filteredProductList = filteredProductList.filter(prod => prod.floor === floor)
    }

    // Filter by Section
    if (filteredProduct.section != null) {
      const section = filteredProduct.section;
      filteredProductList = filteredProductList.filter(prod => prod.section === section)
    }

    return of(filteredProductList);
  }

  public getAllProducts(): Observable<Product[]> {
    return of(this.productsList);
  }

  public getAllFloors(): Observable<number[]> {
    return of(this.floorsList);
  }

  public getAllSections(): Observable<number[]> {
    return of(this.sectionsList);
  }

  public getAllProductCodes(): Observable<string[]> {
    return of(this.productsList.map(product => product.code));
  }

  public addProduct(product: Product): Observable<boolean> {
    const oldSize = this.productsList.length;
    const newSize = this.productsList.push(product);
    if (newSize > oldSize) {
      return of(true);
    }
    return of(false);
  }

  public updateProduct(updatedProduct: Product): Observable<boolean> {

    // Find the index of the object with the matching code
    const index = this.productsList.findIndex(it => it.code === updatedProduct.code);

    // If the index is found, update the object's properties
    if (index !== -1) {
      this.productsList[index] = {
        ...this.productsList[index],
        ...updatedProduct
      }
      return of(true);
    }
    return of(false);
  }

  public getProductByCode(productCode: string): Observable<Product | null> {
    const product = this.productsList.find(prod => prod.code === productCode);
    if (product != null) {
      return of(product);
    }
    return of(null);
  }

  public checkIfProductCodeExists(enteredCode: string): Observable<boolean> {
    const codes = this.productsList.map(product => product.code);
    return of(codes.some(code => code === enteredCode))
  }

}
