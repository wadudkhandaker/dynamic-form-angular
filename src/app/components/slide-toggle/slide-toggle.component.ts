import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";


@Component({
	selector : "app-slide-toggle",
	template : `<div class="demo-full-width margin-top"  [formGroup]="group">
		<mat-slide-toggle [formControlName]="field.name">{{field.label}}</mat-slide-toggle>
	</div>`
})
export class SlideToggleComponent{
	field : FieldConfig;
	group : FormGroup;
	constructor(){}
}