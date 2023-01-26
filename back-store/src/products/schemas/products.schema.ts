import {Document} from 'mongoose'
import {Prop , Schema , SchemaFactory} from '@nestjs/mongoose'


export type ProductDocument = Product & Document

@Schema()
export class Product{
    @Prop()
    name: String; 
    @Prop()
    region:String; 
    @Prop()
    price: Number;
    @Prop()
    description: String;
    @Prop()
    productImage:string;  
}

export const productSchema = SchemaFactory.createForClass(Product) 