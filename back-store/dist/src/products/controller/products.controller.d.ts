/// <reference types="multer" />
import { CreateProdcutsDto } from '../dto/create-products';
import { ProductsService } from '../services/products.service';
import { Product } from '../schemas/products.schema';
export declare const storage: {
    storage: import("multer").StorageEngine;
};
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getAllProducts(): Promise<Product[]>;
    getProductDetails(id: any): Promise<Product>;
    createProduct(createItemDto: CreateProdcutsDto): Promise<Product>;
    deleteProduct(id: any): Promise<Product>;
    updateProduct(updateItemDto: CreateProdcutsDto, id: any): Promise<Product>;
    handleUploadFile(res: any, file: Express.Multer.File): any;
}
