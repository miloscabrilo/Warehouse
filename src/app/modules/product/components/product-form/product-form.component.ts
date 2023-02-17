import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from '@app/models/product-model';
import { RegExPattern } from '@app/models/regex-model';
import { ProductService } from '@modules/product/services/product.service';
import { catchError, map, Observable, of, Subscription, switchMap } from 'rxjs';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnDestroy {

  public form!: FormGroup;

  private subscriptions: Subscription[] = new Array<Subscription>();

  // if product has a value - UPDATE mode, otherwise CREATE mode
  public product!: Product | null;

  public floors$ = this.productService.getAllFloors();
  public sections$ = this.productService.getAllSections();

  constructor(
    private readonly productService: ProductService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly location: Location,
  ) { }

  ngOnInit(): void {

    this.subscriptions.push(
      this.route.paramMap.pipe(
        switchMap((params: ParamMap) => {
          const code = params.get('code');
          return code ? this.productService.getProductByCode(code) : of(null)
        })
      ).subscribe(product => {
        this.product = product;
        this.createForm();
      })
    );

  }

  private createForm() {
    this.form = new FormGroup({
      code: new FormControl({ value: this.product?.code, disabled: this.product != null },
        [
          Validators.required,
          Validators.pattern(RegExPattern.pattern.productCode)
        ],
        [
          CodeExistsAsyncValidator.validate(this.productService)
        ],
      ),
      quantity: new FormControl(this.product?.quantity,
        [
          Validators.required,
          Validators.pattern(RegExPattern.pattern.productQuantity)
        ]),
      floor: new FormControl(this.product?.floor,
        [
          Validators.required
        ]),
      section: new FormControl(this.product?.section,
        [
          Validators.required
        ])
    });
    this.form.markAllAsTouched();
  }

  public onSubmit() {
    if (this.form.valid) {
      // UPDATE mode
      if (this.product != null) {
        this.productService.updateProduct(this.form.getRawValue());
      } 
      // CREATE mode
      else {
        this.productService.addProduct(this.form.getRawValue());
      }
      this.router.navigate(['/products']);
    }
  }

  public onCancel() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}

export class CodeExistsAsyncValidator {

  static validate(productService: ProductService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return productService.checkIfProductCodeExists(control.value).pipe(
        map((exists: boolean) => {
          return exists ? { codeExists: true } : null
        }),
        catchError(() => of(null))
      )
    }
  }
}

