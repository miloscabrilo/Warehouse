import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from '@components/product-form/product-form.component';
import { ProductListComponent } from '@components/product-list/product-list.component';
import { ValidProductGuard } from './guards/valid-product.guard';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    data: {
      title: "Products"
    }
  },
  {
    path: 'edit/:code',
    canActivate: [ValidProductGuard],
    component: ProductFormComponent,
    data: {
      title: "Update product",
    }
  },
  {
    path: 'create',
    component: ProductFormComponent,
    data: {
      title: "Create new product"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
