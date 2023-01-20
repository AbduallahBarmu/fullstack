import { Controller, Request, Post, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './login/auth/guards/jwt-auth.guard';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


}
