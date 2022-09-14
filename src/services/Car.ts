import { ErrorTypes } from '../errors/errors';
import { CarZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

export default class CarService implements IService<ICar> {
  constructor(private _car: IModel<ICar>) {}

  public async create(obj: unknown): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._car.create(parsed.data);
  }

  public async read(): Promise<ICar[]> {
    return this._car.read();
  }

  public async readOne(id: string): Promise<ICar> {
    const car = await this._car.readOne(id);
    if (!car) throw Error(ErrorTypes.EntityNotFound);
    return car;
  }

  public async update(id: string, obj: unknown): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    const updated = await this._car.update(id, parsed.data);
    if (!updated) throw Error(ErrorTypes.EntityNotFound);
    return updated;
  }

  public async delete(id: string): Promise<ICar> {
    const deleted = await this._car.delete(id);
    if (!deleted) throw Error(ErrorTypes.EntityNotFound);
    return deleted;
  }
}