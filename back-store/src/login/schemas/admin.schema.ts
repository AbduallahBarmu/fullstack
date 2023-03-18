import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AdminDocument = Admin & Document;

@Schema()
export class Admin {
  @Prop()
  id: string;
  @Prop()
  email: string;
  @Prop()
  password: string;
}

export const adminSchema = SchemaFactory.createForClass(Admin);
