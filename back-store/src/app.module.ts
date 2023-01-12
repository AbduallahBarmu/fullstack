import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';

// DB 
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys'

@Module({
  imports: [ProductsModule , MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
