import {
  Document,
  FilterQuery,
  Model,
  // ModelUpdateOptions,
  QueryOptions,
  UpdateQuery,
} from 'mongoose';
import { Product } from '../products/schemas/products.schema';

export abstract class EntityRepository<T extends Document> {
  constructor(protected readonly entityModel: Model<T>) {
    console.log('ctor log::', this.entityModel);
  }

  async findOne(
    entityFilterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>,
  ): Promise<T | null> {
    return this.entityModel
      .findOne(entityFilterQuery, {
        _id: 0,
        __v: 0,
        ...projection,
      })
      .exec();
  }

  async find(entityFilterQuery: FilterQuery<T>): Promise<T[] | null> {
    return this.entityModel.find(entityFilterQuery);
  }

  async create(createEntityData: unknown): Promise<T> {
    const entity = new this.entityModel(createEntityData);
    return await entity.save();
  }

  async updateOne(
    entityFilterQuery: FilterQuery<T>,
    updateEntityData: UpdateQuery<unknown>,
  ): Promise<T | null> {
    return await this.entityModel.findOne(entityFilterQuery, updateEntityData, {
      new: true,
    });
  }

  async findByIdAndUpdate(
    entityFilterQuery: FilterQuery<T>,
    updateEntityData: UpdateQuery<unknown>,
  ): Promise<any> {
    return await this.entityModel.findById(entityFilterQuery, updateEntityData);
  }

  async findByIdAndRemove(
    entityFilterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>,
  ): Promise<T | null> {
    return await this.entityModel.findOne(entityFilterQuery);
  }
}
