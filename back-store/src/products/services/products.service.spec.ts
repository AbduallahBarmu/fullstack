import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from '../services/products.service';
import { ProductsController } from '../controller/products.controller';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
      controllers: [ProductsController],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
