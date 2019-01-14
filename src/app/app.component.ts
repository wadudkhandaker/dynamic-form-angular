import { Component, ViewChild} from "@angular/core";
import { Validators } from "@angular/forms";
import { FieldConfig } from "./field.interface";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  title = 'Dynamic Form';
  public formConfig : any[][] = [
      [{
          type: "date",
          label: "DOB",
          name: "dob",
          validations: [
            {
              name: "required",
              validator: Validators.required,
              message: "Date of Birth Required"
            }
          ],
          fieldWidth:"50"
        },
        {
          type: "select",
          label: "Country",
          name: "country",
          value: "UK",
          options: ["India", "UAE", "UK", "US"],
          fieldWidth:"50"
       }],
       [{
          type: "input",
          label: "Username",
          inputType: "text",
          name: "name",
          validations: [
            {
              name: "required",
              validator: Validators.required,
              message: "Name Required"
            },
            {
              name: "pattern",
              validator: Validators.pattern("^[a-zA-Z]+$"),
              message: "Accept only text"
            }
          ],
          fieldWidth:"50"
       },{
          type: "input",
          label: "Email Address",
          inputType: "email",
          name: "email",
          validations: [
            {
              name: "required",
              validator: Validators.required,
              message: "Email Required"
            },
            {
              name: "pattern",
              validator: Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
              message: "Invalid email"
            }
          ],
          fieldWidth:"50"
        }],
       [{
          type: "input",
          label: "Password",
          inputType: "password",
          name: "password",
          validations: [
            {
              name: "required",
              validator: Validators.required,
              message: "Password Required"
            }
          ],
          fieldWidth:"50"
        },
        {
          type: "radiobutton",
          label: "Gender",
          name: "gender",
          options: ["Male", "Female"],
          value: "Male",
          fieldWidth:"50"
        }],
        [{
          type: "checkbox",
          label: "Accept Terms",
          name: "term",
          value: true,
          fieldWidth:"50"
        },{
          type: "slide-toggle",
          label: "Slide Me",
          name: "Accept Email",
          value : true,
          fieldWidth : "50"
        }],
        [{
          type:"slider",
          label : "Max Price",
          name : "maxPrice",
          value : 50,
          fieldWidth : "50",
          min : 0,
          max : 100
        },{
          type : "menu",
          label : "My menu",
          name : "myMenu",
          value : "Item1",
          options : ["Item1", "Item2"]
        }],
       [{
        type: "button",
        label: "Save"
       }]
  ];


  submit(event:any):void{
    console.log(event);
  }
  
  
}
