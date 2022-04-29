import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SigninComponent],
  imports:
  [
    ReactiveFormsModule,
    CommonModule
  ]
})
export class HomeModule { }
