import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";

@Component({
	selector : "app-slider",
	template : `<div class="demo-full-width margin-top" [formGroup]="group">
		<h3>{{field.label}}</h3>
		<mat-slider [formControlName]="field.name" [min]="field.min" [max]="field.max"></mat-slider>
	</div>`,
	styles:[`mat-slider{ width:100%; }`]
})
export class SliderComponent{
	group : FormGroup;
	field : FieldConfig;
	constructor(){}
}