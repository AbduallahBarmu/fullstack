import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './services/auth.service';




@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule, SharedModule 
  ],
  // exports:[AuthService]
  
})
export class AuthModule { }
