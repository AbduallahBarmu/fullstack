import { Injectable } from '@nestjs/common';
// import {ProductInterface} from './interfaces/products.interface'
import { Product } from './schemas/products.schema';

// DB
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async getAllProductsServ(): Promise<Product[]> {
    // must return an array of products
    return await this.productModel.find();
  }

  // get product details by Id service method connected with DB schema
  async getProductProfileServ(id: string): Promise<Product> {
    return await this.productModel.findOne({ _id: id });
  }

  async create(product: Product): Promise<Product> {
    const newProduct = new this.productModel(product);
    return await newProduct.save();
  }

  async delete(id: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(id);
  }

  async update(id: string, product: Product): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, product, {
      new: true,
    });
  }
}
