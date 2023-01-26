/// <reference types="multer" />
import { CreateProdcutsDto } from './dto/create-products';
import { ProductsService } from './products.service';
import { Product } from './schemas/products.schema';
import { Observable } from 'rxjs';
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
    handleUploadFile(file: Express.Multer.File): Observable<Object>;
}
