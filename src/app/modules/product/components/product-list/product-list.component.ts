import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FilterField, Product } from '@app/models/product-model';
import { ProductService } from '@modules/product/services/product.service';
import { combineLatestWith, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  public productFilter: FilterField[] = new Array<FilterField>();

  private subscriptions: Subscription[] = new Array<Subscription>();

  // Initially filter is empty - getting all products.
  public products$: Observable<Product[]> = this.productService.getFilteredProducts({});

  constructor(
    private readonly productService: ProductService
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.productService.getAllFloors().pipe(
        combineLatestWith(this.productService.getAllSections()),
      ).subscribe(res => {
        this.productFilter.push({ label: 'Code', name: 'code', type: 'text' });
        this.productFilter.push({ label: 'Floor', name: 'floor', type: 'select', options: res[0] });
        this.productFilter.push({ label: 'Section', name: 'section', type: 'select', options: res[1] });
      })
    )
  }

  // onFiltered event: Search for products based on specific criteria that is entered in productForm form.
  onFiltered(productForm: FormGroup) {
    this.products$ = this.productService.getFilteredProducts(productForm.getRawValue())
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
