import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";

@Component({
	selector: "app-stepper",
	templateUrl : "./stepper.component.html"
})
export class StepperComponent{
	field : FieldConfig;
	group : FormGroup;
	constructor(){}
}