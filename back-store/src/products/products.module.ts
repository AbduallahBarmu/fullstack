import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
// DB
import { MongooseModule } from '@nestjs/mongoose';
import { Product , productSchema} from './schemas/products.schema';

@Module({
    imports:[MongooseModule.forFeature([{ name:Product.name, schema: productSchema}])], 
    controllers:[ProductsController], 
    providers:[ProductsService],
    exports: [ProductsService]
})


export class ProductsModule {}
