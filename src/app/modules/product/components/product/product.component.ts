import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@app/models/product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  // Open new page for updating the existing product.
  public updateProduct() {
    this.router.navigate(['/products/edit', this.product.code]);
  }
}
