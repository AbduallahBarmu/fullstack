import { Product } from 'src/products/schemas/products.schema';

export const productsStub = (): Product => {
  return {
    id: '11223344',
    name: 'coffe1',
    region: 'coffe1 region',
    price: 200,
    description: 'nice coffee1',
    image: 'coffe1 img',
  };
};
