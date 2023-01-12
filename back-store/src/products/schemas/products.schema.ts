import {Document} from 'mongoose'
import {Prop , Schema , SchemaFactory} from '@nestjs/mongoose'


export type ProductDocument = Product & Document


@Schema()
export class Product{
    @Prop()
    name: String; 
    @Prop()
    description: String; 
    @Prop()
    price: Number;
    @Prop()
    region:String; 
}

export const productSchema = SchemaFactory.createForClass(Product) 