import { Component } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";

@Component({
	selector : 'app-grid',
	templateUrl : "./grid.component.html"
})
export class GridComponent{
	field : FieldConfig;
	group : FormGroup;
	constructor(){}
}
