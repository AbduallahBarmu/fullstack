import { Controller, Get , Post , Put, Delete , Body, Param , Req, Patch} from '@nestjs/common';
import { CreateProdcutsDto } from './dto/create-products';
import { ProductsService } from './products.service';
// import { ProductInterface } from './interfaces/products.interface'

import {Product} from './schemas/products.schema'

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService){}


// get All products 
@Get()
 async getAllProducts():Promise<Product[]>{
    return this.productsService.getAllProductsServ()
}

// get product profile by Id
@Get(':id')
 async getProductDetails(@Param('id') id):Promise<Product>{
    return this.productsService.getProductProfileServ(id)
}


// create new Product
@Post()
// we used dedicated decorators @Body()
createProduct(@Body() createItemDto: CreateProdcutsDto):Promise<Product>{
    return this.productsService.create(createItemDto)
}

// delete the product by ID
@Delete(':id')
deleteProduct( @Param('id')id):Promise<Product>{
    return this.productsService.delete(id);
}



@Patch(':id')
updateProduct(@Body() updateItemDto: CreateProdcutsDto, @Param('id') id):Promise<Product>{
    return this.productsService.update(id, updateItemDto)
}



}
