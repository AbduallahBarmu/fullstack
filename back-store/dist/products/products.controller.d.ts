import { CreateProdcutsDto } from './dto/create-products';
import { ProductsService } from './products.service';
import { Product } from './schemas/products.schema';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getAllProducts(): Promise<Product[]>;
    getProductDetails(id: any): Promise<Product>;
    createProduct(createItemDto: CreateProdcutsDto): Promise<Product>;
    deleteProduct(id: any): Promise<Product>;
    updateProduct(updateItemDto: CreateProdcutsDto, id: any): Promise<Product>;
}
