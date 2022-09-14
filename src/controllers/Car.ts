import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

export default class CarController {
  constructor(private _service: IService<ICar>) {}

  public async create(req: Request, res: Response<ICar>) {
    const { model, year, color, status, buyValue, doorsQty, seatsQty } = req.body;
    const car = { model, year, color, status, buyValue, doorsQty, seatsQty };
    const created = await this._service.create(car);
    res.status(201).json(created);
  }

  public async read(_req: Request, res: Response<ICar[]>) {
    const cars = await this._service.read();
    res.status(200).json(cars);
  }

  public async readOne(req: Request, res: Response<ICar>) {
    const { id } = req.params;
    const car = await this._service.readOne(id);
    res.status(200).json(car);
  }

  public async update(req: Request, res: Response<ICar>) {
    const { id } = req.params;
    const { model, year, color, status, buyValue, doorsQty, seatsQty } = req.body;
    const car = { model, year, color, status, buyValue, doorsQty, seatsQty };
    const updated = await this._service.update(id, car);
    res.status(200).json(updated);
  }
}