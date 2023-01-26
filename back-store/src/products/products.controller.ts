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
  Request
} from '@nestjs/common';
import { CreateProdcutsDto } from './dto/create-products';
import { ProductsService } from './products.service';
import { ProductInterface } from './interfaces/products.interface';
// import { ProductInterface } from './interfaces/products.interface'

import { Product } from './schemas/products.schema';
import { JwtAuthGuard } from 'src/login/auth/guards/jwt-auth.guard';
import { Observable, of } from 'rxjs';

// file handle
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

// File interceptor implementation
export const storage = {
  storage: diskStorage({
    destination: './public/images',
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


  // @UseGuards(JwtAuthGuard)
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', storage)) // storage it is an Object
  handleUploadFile( @UploadedFile() file: Express.Multer.File ): Observable<Object> {
    // console.log('file', file);
    // return 'file uploded to the API successfully '
    return of({ imagePath: file.path });
    
  }

  // @UseGuards(JwtAuthGuard)
  // @Post('upload')
  // @UseInterceptors(FileInterceptor('file', storage)) // storage it is an Object
  // handleUploadFile(
  //   @UploadedFile() file , @Request() req): Observable<Object> {
    
  //   const admin: ProductInterface = req.admin.admin; 
  //   return this.productsService.update(admin.id , {productImage:file.filename}).pipe(
  //     map( (admin:AdminInterface) => ({productImage :admin.productImage}))
  //   )
  //   return of({ imagePath: file.path });
  // }



}

