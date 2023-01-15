import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './components/auth/auth.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule, SharedModule
  ]
})
export class AuthModule { }
