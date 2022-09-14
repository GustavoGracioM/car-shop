import { isValidObjectId, Model, UpdateQuery } from 'mongoose';
import { IModel } from '../interfaces/IModel';

export default abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  public async read(): Promise<T[]> {
    return this._model.find();
  }

  public async readOne(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new Error('Error');
    return this._model.findById(id);
  }

  public async update(_id: string, obj: T): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error('Error');
    return this._model.findByIdAndUpdate({ _id }, { ...obj as UpdateQuery<T> }, { new: true });
  } 

  public async delete(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error('Error');
    const updated = await this._model.findByIdAndDelete({ _id });
    if (!updated) throw new Error('Error');
    return updated;
  }
}