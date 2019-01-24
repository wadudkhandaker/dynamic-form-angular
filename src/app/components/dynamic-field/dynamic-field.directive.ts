import {
  ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit,
  ViewContainerRef
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
import { InputComponent } from "../input/input.component";
import { ButtonComponent } from "../button/button.component";
import { SelectComponent } from "../select/select.component";
import { DateComponent } from "../date/date.component";
import { RadiobuttonComponent } from "../radiobutton/radiobutton.component";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { SlideToggleComponent } from "../slide-toggle/slide-toggle.component";
import { SliderComponent } from "../slider/slider.component";
import { MenuComponent } from "../menu/menu.component";
import { FormGroupComponent } from "../form-group/form-group.component";
import { AccordianComponent } from "../accordian/accordian.component";
import { GridComponent } from "../grid/grid.component";
import { StepperComponent } from "../stepper/stepper.component";
import { TabComponent } from "../tab/tab.component";

const componentMapper = {
    "input": InputComponent,
    "button": ButtonComponent,
    "select": SelectComponent,
    "date": DateComponent,
    "radiobutton": RadiobuttonComponent,
    "checkbox": CheckboxComponent,
    "group": FormGroupComponent,
    "slide-toggle" : SlideToggleComponent,
    "slider" : SliderComponent,
    "menu" : MenuComponent,
    "accordion" : AccordianComponent,
    "grid" : GridComponent,
    "stepper" : StepperComponent,
    "tab" : TabComponent
};
@Directive({
  selector: '[dynamicField]'
  })
  export class DynamicFieldDirective implements OnInit {
  componentRef: any;
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) {}
  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(componentMapper[this.field.type]);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}
