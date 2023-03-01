import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialSharedModule } from '@modules/material-shared/material-shared.module';
import { FilterComponent } from './components/filter/filter.component';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';
import { EntriesPipe } from './pipes/entries.pipe';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [FilterComponent, ItemComponent, ListComponent, EntriesPipe],
  exports: [FilterComponent, ItemComponent, ListComponent],
  imports: [
    CommonModule,
    MaterialSharedModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReusableComponentsModule { }
