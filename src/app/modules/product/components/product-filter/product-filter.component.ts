import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '@app/models/product-model';
import { ProductService } from '@services/product.service';
import { debounceTime, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit, OnDestroy {

  @Output() filtered = new EventEmitter<Partial<Product>>();

  public form!: FormGroup;

  // floors$ and section$ are Observables whose values are used to fill corresponding mat-select element.
  public floors$: Observable<number[]> = this.productService.getAllFloors();
  public sections$: Observable<number[]> = this.productService.getAllSections();

  private subscriptions: Subscription[] = new Array<Subscription>();

  constructor(
    private readonly productService: ProductService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.filtered.emit(this.form.value)

    // Emit every change in filter form as an event.
    this.subscriptions.push(
      this.form.valueChanges.pipe(
        debounceTime(300)
      ).subscribe((res: Partial<Product>) => {
        this.filtered.emit(res)
      })
    )
  }

  private createForm() {
    this.form = new FormGroup({
      code: new FormControl(null),
      floor: new FormControl(null),
      section: new FormControl(null),
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }

}
