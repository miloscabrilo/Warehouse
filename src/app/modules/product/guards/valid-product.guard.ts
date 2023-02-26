import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root'
})
export class ValidProductGuard implements CanActivate {

  constructor(
    private readonly productService: ProductService,
    private readonly router: Router,
  ) { }

  // Product form cannot be opened for invalid product code
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const paramCode: string = route.params['code'];

    return this.productService.checkIfProductCodeExists(paramCode).pipe(
      map(res => {
        if (!res) {
          // Navigate to the products page if product code is invalid.
          return this.router.createUrlTree(['/products'])
        }
        return true;
      })
    );
  }

}

