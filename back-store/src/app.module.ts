import { Module } from '@nestjs/common';
import { AppService } from './app.service';
// Contrllers 
import { AppController } from './app.controller';
import { AuthController } from './login/auth/controllers/auth.controller';
import { AdminController } from './login/admin/controllers/admin.controller';
import { ProductsController } from './products/products.controller';
// Modules 
import { AuthModule } from './login/auth/auth.module';
import { AdminModule } from './login/admin/admin.module';
import { ProductsModule } from './products/products.module';

// DB 
import config from './config/keys'
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './login/auth/services/auth.service';
import {ServeStaticModule} from '@nestjs/serve-static/dist/serve-static.module'
import { join } from 'path';
@Module({
  imports: [ProductsModule, AuthModule ,AdminModule, MongooseModule.forRoot(config.mongoURI),
    ServeStaticModule.forRoot({rootPath:join(__dirname, '..','public')})
    
  ],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule {}
