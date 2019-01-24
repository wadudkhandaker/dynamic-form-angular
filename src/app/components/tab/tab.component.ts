import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";

@Component({
	selector : "app-tab",
	templateUrl : "./tab.component.html"
})
export class TabComponent{
	field : FieldConfig;
	group : FormGroup;
	constructor(){}
}