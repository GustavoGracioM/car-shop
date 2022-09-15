import { ErrorTypes } from '../errors/errors';
import { IModel } from '../interfaces/IModel';

export default abstract class Service<T> {
  constructor(protected model: IModel<T>) {}

  public async read(): Promise<T[]> {
    return this.model.read();
  }

  public async readOne(id: string): Promise<T> {
    const car = await this.model.readOne(id);
    if (!car) throw Error(ErrorTypes.EntityNotFound);
    return car;
  }

  public async delete(id: string): Promise<T> {
    const deleted = await this.model.delete(id);
    if (!deleted) throw Error(ErrorTypes.EntityNotFound);
    return deleted;
  }
}