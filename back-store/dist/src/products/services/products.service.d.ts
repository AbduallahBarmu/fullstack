import { Product } from '../schemas/products.schema';
import { Model } from 'mongoose';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    getAllProductsServ(): Promise<Product[]>;
    getProductProfileServ(id: string): Promise<Product>;
    createProduct(product: Product): Promise<Product>;
    deleteProduct(id: string): Promise<Product>;
    updateProduct(id: string, product: Product): Promise<Product>;
}
