import { ErrorTypes } from '../errors/errors';
import { CarZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';
import Service from './Service';

export default class CarService extends Service<ICar> implements IService<ICar> {
  constructor(private _car: IModel<ICar>) {
    super(_car);
  }

  public async create(obj: unknown): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._car.create(parsed.data);
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
}