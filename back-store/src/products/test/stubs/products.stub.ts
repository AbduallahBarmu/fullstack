import { Product } from '../../schemas/products.schema';

export const productsStub = (): Product => {
  return {
    id: '112233445566',
    name: 'coffee1',
    region: 'coffee region1',
    price: 200,
    description: 'nice coffee1',
    image: 'coffee img1',
  };
};
