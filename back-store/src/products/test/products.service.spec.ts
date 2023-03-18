import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from '../products.service';
import { ProductsController } from '../products.controller';
import { getModelToken } from '@nestjs/mongoose';
import { Product } from '../schemas/products.schema';
import { ProductsRepository } from '../products.repository';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        ProductsService,
        ProductsRepository,
        {
          provide: getModelToken(Product.name),
          useValue: jest.fn(),
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
