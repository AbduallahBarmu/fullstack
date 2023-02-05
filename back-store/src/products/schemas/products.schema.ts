import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  id: string;
  @Prop()
  name: String;
  @Prop()
  region: String;
  @Prop()
  price: Number;
  @Prop()
  description: String;
  @Prop()
  image: string;
}

export const productSchema = SchemaFactory.createForClass(Product);
