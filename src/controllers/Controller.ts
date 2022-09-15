import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';

export default abstract class Controller<T> {
  constructor(protected _service: IService<T>) {}

  public async read(_req: Request, res: Response<T[]>) {
    const result = await this._service.read();
    res.status(200).json(result);
  }

  public async readOne(req: Request, res: Response<T>) {
    const { id } = req.params;
    const result = await this._service.readOne(id);
    res.status(200).json(result);
  }

  public async delete(req: Request, res: Response<T>) {
    const { id } = req.params;
    await this._service.delete(id);
    res.status(204).end();
  }
}