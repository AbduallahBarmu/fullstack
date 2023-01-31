import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './services/auth.service';
import { TokenInterceptorService } from './services/token/token-interceptor.service';
import { AdminGuardService } from './services/admin-guard.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule],
  providers: [AuthService, TokenInterceptorService, AdminGuardService],
})
export class AuthModule {}
