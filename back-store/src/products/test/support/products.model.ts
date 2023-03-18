import { MockModel } from '../../../../src//database/test/support/mock.model';
import { Product } from 'src/products/schemas/products.schema';
import { productsStub } from '../stubs/products.stub';

export class ProductsModel extends MockModel<Product> {
  protected entityStub = productsStub();
}
