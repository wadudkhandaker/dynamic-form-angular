import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { DateComponent } from './components/date/date.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { SliderComponent } from './components/slider/slider.component';
import { MenuComponent } from './components/menu/menu.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { AccordianComponent } from './components/accordian/accordian.component';
import { GridComponent } from './components/grid/grid.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { TabComponent } from './components/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    SlideToggleComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    FormGroupComponent,
    SliderComponent,
    MenuComponent,
    AccordianComponent,
    GridComponent,
    StepperComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    SlideToggleComponent,
    SliderComponent,
    MenuComponent,
    AccordianComponent,
    GridComponent,
    StepperComponent,
    TabComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
