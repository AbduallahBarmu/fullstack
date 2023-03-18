import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  region: string;

  @Prop()
  price: number;

  @Prop()
  description: string;

  @Prop()
  image: string;
}

export const productSchema = SchemaFactory.createForClass(Product);
