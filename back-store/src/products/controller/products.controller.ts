import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Patch,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  Res,
  HttpStatus,
  Inject,
} from '@nestjs/common';
import { CreateProdcutsDto } from '../dto/create-products';
import { ProductsService } from '../services/products.service';
import { ProductInterface } from '../interfaces/products.interface';

import { Product } from '../schemas/products.schema';
import { JwtAuthGuard } from 'src/login/auth/guards/jwt-auth.guard';
import { Observable, of } from 'rxjs';

// file handle
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

// import * as path from 'path'

// File interceptor implementation
export const storage = {
  storage: diskStorage({
    destination: './public',
    filename: (req, file, callback) => {
      const uniqueSuffix: string =
        Date.now() + '-' + Math.round(Math.random() * 1e9);
      // const fileName : string = path.parse(file.originalname).normalize.replace(/\s/g, '') + id
      const ext = extname(file.originalname);
      const filename = `${uniqueSuffix}${ext}`;
      callback(null, filename);
    },
  }),
};

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productsService.getAllProductsServ();
  }

  @Get(':id')
  async getProductDetails(@Param('id') id): Promise<Product> {
    return this.productsService.getProductProfileServ(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  // we used dedicated decorators @Body()
  createProduct(@Body() createItemDto: CreateProdcutsDto): Promise<Product> {
    return this.productsService.createProduct(createItemDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteProduct(@Param('id') id): Promise<Product> {
    return this.productsService.deleteProduct(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  updateProduct(
    @Body() updateItemDto: CreateProdcutsDto,
    @Param('id') id,
  ): Promise<Product> {
    return this.productsService.updateProduct(id, updateItemDto);
  }

  // @UseGuards(JwtAuthGuard)
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', storage)) // storage it is an Object
  handleUploadFile(@Res() res, @UploadedFile() file: Express.Multer.File) {
    return res.status(HttpStatus.OK).json({
      success: true,
      data: file.filename,
    });
  }
}
