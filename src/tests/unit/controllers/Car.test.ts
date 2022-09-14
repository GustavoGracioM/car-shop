import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import CarController from '../../../controllers/Car';
import { Request, Response } from 'express';
import { carMock, carMockCreated } from '../../mocks/CarMock';
const { expect } = chai;

describe('Car Controller', () => {
  const carModel = new CarModel()
  const carService = new CarService(carModel);
  const carController = new CarController(carService)
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(() => { 
    sinon.restore();
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  })

  it('criando um car com sucesso', async () => {
    sinon.stub(carService, 'create').resolves(carMockCreated);
    req.body = carMock;
    await carController.create(req, res);
    const statusStub = res.status as sinon.SinonStub;
    const jsonStub = res.json as sinon.SinonStub;
    
    expect(statusStub.calledWith(201)).to.be.true;
    expect(jsonStub.calledWith(carMockCreated)).to.be.true;
  })
})