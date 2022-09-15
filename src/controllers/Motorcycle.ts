import { Request, Response } from 'express';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IService } from '../interfaces/IService';
import Controller from './Controller';

export default class MotorcycleController extends Controller<IMotorcycle> {
  constructor(protected _service: IService<IMotorcycle>) {
    super(_service);
  }

  public async create(req: Request, res: Response<IMotorcycle>) {
    const { model, year, color, status, buyValue, category, engineCapacity } = req.body;
    const car = { model, year, color, status, buyValue, category, engineCapacity };
    const created = await this._service.create(car);
    res.status(201).json(created);
  }

  public async update(req: Request, res: Response<IMotorcycle>) {
    const { id } = req.params;
    const { model, year, color, status, buyValue, category, engineCapacity } = req.body;
    const car = { model, year, color, status, buyValue, category, engineCapacity };
    const updated = await this._service.update(id, car);
    res.status(200).json(updated);
  }
}