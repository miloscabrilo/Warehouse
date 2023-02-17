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

  public products$: Observable<Product[]> = this.productService.getFilteredProducts({});

  constructor(
    private readonly productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  onFiltered(filterValue: Partial<Product>) {
    this.products$ = this.productService.getFilteredProducts(filterValue);
  }

}
