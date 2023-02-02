// the idea from interface is to create custem teypes to mannge my application
// export interface ProductResult {
//   results: Product[];
// }
export type Product = {
  _id: string;
  name: string;
  region: string;
  price: number;
  image: string;
  description: string;
};
