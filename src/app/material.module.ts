import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import {
	MatButtonModule,
	MatIconModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	MatListModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatSelectModule,
	MatOptionModule,
	MatCheckboxModule,
	MatRadioModule,
	MatSlideToggleModule,
	MatSliderModule
} from "@angular/material";
@NgModule({
imports: [
	MatButtonModule,
	MatIconModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	MatListModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatMomentDateModule,
	MatSelectModule,
	MatOptionModule,
	MatCheckboxModule,
	MatRadioModule,
	MatSlideToggleModule,
	MatSliderModule
],
exports: [
	MatButtonModule,
	MatIconModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	MatListModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatMomentDateModule,
	MatSelectModule,
	MatOptionModule,
	MatCheckboxModule,
	MatRadioModule,
	MatSlideToggleModule,
	MatSliderModule
]
})
export class MaterialModule {}
