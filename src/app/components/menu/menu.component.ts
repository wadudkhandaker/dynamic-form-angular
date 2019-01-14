import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";

@Component({
	selector : "app-menu",
	template : `<div class="demo-full-width margin-top" [formGroup]="group">
		<button mat-button [matMenuTriggerFor]="menu" [formControlName]="field.name">{{field.label}}</button>
		<mat-menu #menu="matMenu">
			<button mat-menu-item *ngFor="let item of field.options">{{item}}</button>
		</mat-menu>
	</div>`
})
export class MenuComponent{
	field : FieldConfig;
	group : FormGroup;
	constructor(){}
}