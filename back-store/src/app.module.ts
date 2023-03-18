import { Module } from '@nestjs/common';
import { AppService } from './app.service';
// Contrllers
import { AppController } from './app.controller';

// Modules
import { AuthModule } from './login/auth/auth.module';
import { AdminModule } from './login/admin/admin.module';
import { ProductsModule } from './products/products.module';

// DB
import config from './config/keys';
import { MongooseModule } from '@nestjs/mongoose';

import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join } from 'path';

import { MulterModule } from '@nestjs/platform-express';
import { ProductsRepository } from './products/products.repository';
@Module({
  imports: [
    ProductsModule,
    AuthModule,
    AdminModule,
    MongooseModule.forRoot(config.mongoURI),
    MulterModule.register({ dest: './uploads' }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'public') }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
