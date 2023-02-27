import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FilterField } from '@app/models/product-model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  form!: FormGroup;

  @Input() fields!: FilterField[];
  @Output() valueChange = new EventEmitter<FormGroup>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({});
    this.fields.forEach(field => {
      this.form.addControl(field.name, new FormControl());
    });

    this.form.valueChanges.subscribe(() => {
      this.valueChange.emit(this.form);
    });
  }
}
