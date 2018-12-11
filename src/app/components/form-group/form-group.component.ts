import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig, Validator } from "../../field.interface";
@Component({
  selector: 'form-group',
  template: `
  <div fxLayout="row" fxLayoutAlign="start start" fxLayoutGap="10px">
    <ng-container *ngFor="let field of fields;" dynamicField [field]="field" [group]="form">
    </ng-container>
  </div>
  `,
  styles: []
})
export class FormGroupComponent implements OnInit {
  @Input() fields: FieldConfig[] = [];
  form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
