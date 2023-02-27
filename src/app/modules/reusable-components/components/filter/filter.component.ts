import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterField } from '@app/models/product-model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() fields!: FilterField[];
  @Output() valueChange = new EventEmitter<FormGroup>();

  public filterForm = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.fields.forEach(field => {
      this.filterForm.addControl(field.name, new FormControl());
    });

    this.filterForm.valueChanges.subscribe(() => {
      this.valueChange.emit(this.filterForm);
    });
  }
}
