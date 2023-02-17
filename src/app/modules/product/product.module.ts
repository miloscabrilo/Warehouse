import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from '@modules/product/product-routing.module';
import { ProductComponent } from '@components/product/product.component';
import { MaterialSharedModule } from '@modules/material-shared/material-shared.module';
import { ProductListComponent } from '@components/product-list/product-list.component';
import { ProductFormComponent } from '@components/product-form/product-form.component';
import { ProductFilterComponent } from '@components/product-filter/product-filter.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductFilterComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialSharedModule,
  ]
})
export class ProductModule { }
