import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { FieldConfig, Validator } from "../../field.interface";

@Component({
  selector: 'dynamic-form',
  template: `
    <form class="dynamic-form" [formGroup]="form" (submit)="onSubmit($event)" fxLayout="column">
      <div *ngFor="let row of formGroupConfig;" fxFlex="100" fxLayout="row" fxLayoutGap="20px">
        <div *ngFor="let field of row;" [fxFlex]="field.fieldWidth">
          <ng-container  dynamicField [field]="field" [group]="form">
          </ng-container>
        </div>
      </div>
    </form>
  `,
  styles: []
})
export class DynamicFormComponent implements OnInit {
  @Input() formGroupConfig: any[][] = [];
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.form = this.fb.group(this.getFormGroup());
  }

  getFormGroup():object{
    let formGroupObj = new Object();
    this.formGroupConfig.forEach((row:any[])=>{
      row.forEach((column)=>{
        formGroupObj[column["name"]] = [{value:column["value"], disabled: column["disabled"]}, this.getValidations(column["validations"])];
      });
    });
    return formGroupObj;
  }

  getValidations(fieldValidations:any[]){
    let validations = [];
    if(fieldValidations){
      fieldValidations.forEach((validator : any)=>{
        validations.push(validator.validator);
      });
    }
    return validations;
  };

  validateAllFormControls():void{
    let formControl;
    Object.keys(this.form.controls).forEach((controlName : string)=>{
      formControl = this.form.get(controlName);
      formControl.markAsDirty();
      formControl.markAsTouched();
    });
  }


  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
    this.submit.emit(this.form.value);
    } else {
    this.validateAllFormControls();
    }
  }
}
