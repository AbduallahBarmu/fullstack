import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Req,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { CreateProdcutsDto } from './dto/create-products';
import { ProductsService } from './products.service';
// import { ProductInterface } from './interfaces/products.interface'

import { Product } from './schemas/products.schema';
import { JwtAuthGuard } from 'src/login/auth/guards/jwt-auth.guard';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productsService.getAllProductsServ();
  }

  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getProductDetails(@Param('id') id): Promise<Product> {
    return this.productsService.getProductProfileServ(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  // we used dedicated decorators @Body()
  createProduct(@Body() createItemDto: CreateProdcutsDto): Promise<Product> {
    return this.productsService.create(createItemDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteProduct(@Param('id') id): Promise<Product> {
    return this.productsService.delete(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  updateProduct(
    @Body() updateItemDto: CreateProdcutsDto,
    @Param('id') id,
  ): Promise<Product> {
    return this.productsService.update(id, updateItemDto);
  }
}
