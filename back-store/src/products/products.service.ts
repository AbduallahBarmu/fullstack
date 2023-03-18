import { Inject, Injectable, forwardRef } from '@nestjs/common';
// import {ProductInterface} from './interfaces/products.interface'
import { Product } from './schemas/products.schema';
import { ProductsRepository } from './products.repository';
// DB
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateProdcutsDto } from './dto/update.products';
import { CreateProdcutsDto } from './dto/create-products';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
    private readonly productsRepository: ProductsRepository,
  ) {}

  async getAllProductsServ(): Promise<Product[]> {
    return await this.productsRepository.find({});
  }

  //get product details by Id service method connected with DB schema
  async getProductProfileServ(id: string): Promise<Product> {
    return await this.productsRepository.findOne({ _id: id });
  }

  async createProduct(product: Product): Promise<Product> {
    return await this.productsRepository.create(product);
  }

  async updateProduct(
    id: string,
    productDto: UpdateProdcutsDto,
  ): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, productDto, {
      new: true,
    });
  }

  async deleteProduct(id: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(id);
  }
}
