import { ErrorTypes } from '../errors/errors';
import { IModel } from '../interfaces/IModel';
import { IMotorcycle, MotorcycleZodSchema } from '../interfaces/IMotorcycle';
import { IService } from '../interfaces/IService';
import Service from './Service';

class MotorcycleService extends Service<IMotorcycle> implements IService<IMotorcycle> {
  constructor(private _motorcycle: IModel<IMotorcycle>) {
    super(_motorcycle);
  }
  public async create(obj: unknown): Promise<IMotorcycle> {
    const parsed = MotorcycleZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._motorcycle.create(parsed.data);
  }

  public async update(id: string, obj: unknown): Promise<IMotorcycle> {
    const parsed = MotorcycleZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    const updated = await this._motorcycle.update(id, parsed.data);
    if (!updated) throw Error(ErrorTypes.EntityNotFound);
    return updated;
  }
}

export default MotorcycleService;