import { Module } from '@nestjs/common';
import { AppService } from './app.service';
// Contrllers 
import { AppController } from './app.controller';
import { AuthController } from './admin/login/auth/controllers/auth.controller';
import { AdminController } from './admin/login/admin/controllers/admin.controller';
import { ProductsController } from './products/products.controller';
// Modules 
import { AuthModule } from './admin/login/auth/auth.module';
import { AdminModule } from './admin/login/admin/admin.module';
import { ProductsModule } from './products/products.module';
// DB 
import config from './config/keys'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductsModule, AuthModule ,AdminModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
