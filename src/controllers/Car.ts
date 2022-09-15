import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';
import Controller from './Controller';

export default class CarController extends Controller<ICar> {
  constructor(protected _service: IService<ICar>) {
    super(_service);
  }

  public async create(req: Request, res: Response<ICar>) {
    const { model, year, color, status, buyValue, doorsQty, seatsQty } = req.body;
    const car = { model, year, color, status, buyValue, doorsQty, seatsQty };
    const created = await this._service.create(car);
    res.status(201).json(created);
  }

  public async update(req: Request, res: Response<ICar>) {
    const { id } = req.params;
    const { model, year, color, status, buyValue, doorsQty, seatsQty } = req.body;
    const car = { model, year, color, status, buyValue, doorsQty, seatsQty };
    const updated = await this._service.update(id, car);
    res.status(200).json(updated);
  }
}