import { Component, OnInit } from '@angular/core';
import { Product } from '@app/models/product-model';
import { ProductService } from '@modules/product/services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  // Initially filter is empty - getting all products.
  public products$: Observable<Product[]> = this.productService.getFilteredProducts({});

  constructor(
    private readonly productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  // onFilter event: Search for products based on specific criteria - filterValue.
  onFiltered(filterValue: Partial<Product>) {
    this.products$ = this.productService.getFilteredProducts(filterValue);
  }

}
