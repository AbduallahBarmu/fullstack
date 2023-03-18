// import { getModelToken } from '@nestjs/mongoose';
// import { Test } from '@nestjs/testing';
// import { FilterQuery } from 'mongoose';

// import { Product } from '../schemas/products.schema';
// import { ProductsRepository } from '../products.repository';
// import { productsStub } from './stubs/products.stub';
// import { ProductsModel } from './support/products.model';

// describe('ProductsRepository', () => {
//   let productsRepository: ProductsRepository;

//   describe('find operations', () => {
//     let productsModel: ProductsModel;
//     let productFilterQuery: FilterQuery<Product>;

//     beforeEach(async () => {
//       const moduleRef = await Test.createTestingModule({
//         providers: [
//           ProductsRepository,
//           {
//             provide: getModelToken(Product.name),
//             useValue: productsModel,
//           },
//         ],
//       }).compile();

//       productsRepository =
//         moduleRef.get<ProductsRepository>(ProductsRepository);

//       productsModel = moduleRef.get<ProductsModel>(getModelToken(Product.name));

//       productFilterQuery = { id: productsStub().id };

//       jest.clearAllMocks();
//     });

//     describe('findOne', () => {
//       describe('when findOne is called', () => {
//         let product: Product;

//         beforeEach(async () => {
//           jest.spyOn(productsModel, 'findOne');
//           product = await productsRepository.findOne(productFilterQuery);
//         });

//         test('then it should call the productsModel', () => {
//           expect(productsModel.findOne).toHaveBeenCalledWith(
//             productFilterQuery,
//             {
//               _id: 0,
//               __v: 0,
//             },
//           );
//         });

//         test('then it should return a product', () => {
//           expect(product).toEqual(productsStub());
//         });
//       });
//     });

//     describe('find', () => {
//       describe('when find is called', () => {
//         let products: Product[];

//         beforeEach(async () => {
//           jest.spyOn(productsModel, 'find');
//           products = await productsRepository.find(productFilterQuery);
//         });

//         test('then it should call the productsModel', () => {
//           expect(productsModel.find).toHaveBeenCalledWith(productFilterQuery);
//         });

//         test('then it should return a product', () => {
//           expect(products).toEqual([productsStub()]);
//         });
//       });
//     });

//     describe('updateOne', () => {
//       describe('when updateOne is called', () => {
//         let product: Product;

//         beforeEach(async () => {
//           jest.spyOn(productsModel, 'updateOne');
//           product = await productsRepository.updateOne(
//             productFilterQuery,
//             productsStub(),
//           );
//         });

//         test('then it should call the productsModel', () => {
//           expect(productsModel.updateOne).toHaveBeenCalledWith(
//             productFilterQuery,
//             productsStub(),
//             { new: true },
//           );
//         });

//         test('then it should return a product', () => {
//           expect(product).toEqual(productsStub());
//         });
//       });
//     });
//   });

//   describe('create operations', () => {
//     beforeEach(async () => {
//       const moduleRef = await Test.createTestingModule({
//         providers: [
//           ProductsRepository,
//           {
//             provide: getModelToken(Product.name),
//             useValue: ProductsModel,
//           },
//         ],
//       }).compile();

//       productsRepository =
//         moduleRef.get<ProductsRepository>(ProductsRepository);
//     });

//     describe('create', () => {
//       describe('when create is called', () => {
//         let product: Product;
//         let saveSpy: jest.SpyInstance;
//         let constructorSpy: jest.SpyInstance;

//         beforeEach(async () => {
//           saveSpy = jest.spyOn(ProductsModel.prototype, 'save');
//           constructorSpy = jest.spyOn(
//             ProductsModel.prototype,
//             'constructorSpy',
//           );
//           product = await productsRepository.create(productsStub());
//         });

//         test('then it should call the productsModel', () => {
//           expect(saveSpy).toHaveBeenCalled();
//           expect(constructorSpy).toHaveBeenCalledWith(productsStub());
//         });

//         test('then it should return a product', () => {
//           expect(product).toEqual(productsStub());
//         });
//       });
//     });
//   });
// });
