import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
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
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const paramCode: string = route.params['code'];

    return this.productService.checkIfProductCodeExists(paramCode).pipe(
      tap(res => {
        if (!res) {
          // Navigate to the products page if product code is invalid.
          this.router.navigate(['/products'])
        }
      })
    );
  }

}

