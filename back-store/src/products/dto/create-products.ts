// (Data Transfer Object) schema. 
// A DTO is an object that defines how the data will be sent over the network.

export class CreateProdcutsDto{
    readonly name:string
    readonly region: string
    readonly description: string
    readonly price: number
}