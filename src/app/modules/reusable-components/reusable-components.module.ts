import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialSharedModule } from '@modules/material-shared/material-shared.module';
import { FilterComponent } from './components/filter/filter.component';


@NgModule({
  declarations: [FilterComponent],
  exports: [FilterComponent],
  imports: [
    CommonModule,
    MaterialSharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReusableComponentsModule { }
