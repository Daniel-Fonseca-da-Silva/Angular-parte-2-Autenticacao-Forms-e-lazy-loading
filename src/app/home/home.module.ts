import { VmessageComponent } from './../shared/components/vmessage/vmessage/vmessage.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';

@NgModule({
  declarations: [SigninComponent],
  imports:
  [
    ReactiveFormsModule, // Para validações no angular!
    CommonModule, // Para diretivas, toda vez que importa usa no componente criado!
    VmessageModule
  ]
})
export class HomeModule { }
