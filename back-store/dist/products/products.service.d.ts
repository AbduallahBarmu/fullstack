import { Product } from './schemas/products.schema';
import { Model } from 'mongoose';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    getAllProductsServ(): Promise<Product[]>;
    getProductProfileServ(id: string): Promise<Product>;
    create(product: Product): Promise<Product>;
    delete(id: string): Promise<Product>;
    update(id: string, product: Product): Promise<Product>;
}
