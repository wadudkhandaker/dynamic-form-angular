import { Component } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";

@Component({
	selector : 'app-accordian',
	templateUrl : "./accordion.component.html"
})
export class AccordianComponent{
	field: FieldConfig;
	group: FormGroup;
	constructor(){}
}