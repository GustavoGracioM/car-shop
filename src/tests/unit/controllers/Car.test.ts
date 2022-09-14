import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import CarController from '../../../controllers/Car';
import { Request, Response } from 'express';
import { carMock, carMockList } from '../../mocks/CarMock';
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

  it('criando um carros com sucesso', async () => {
    sinon.stub(carService, 'create').resolves(carMock);
    req.body = carMock;
    await carController.create(req, res);
    const statusStub = res.status as sinon.SinonStub;
    const jsonStub = res.json as sinon.SinonStub;
    
    expect(statusStub.calledWith(201)).to.be.true;
    expect(jsonStub.calledWith(carMock)).to.be.true;
  })

  it('lista todos os carros', async () => {
    sinon.stub(carService, 'read').resolves(carMockList);
    await carController.read(req, res);
    const statusStub = res.status as sinon.SinonStub;
    const jsonStub = res.json as sinon.SinonStub;
    
    expect(statusStub.calledWith(200)).to.be.true;
    expect(jsonStub.calledWith(carMockList)).to.be.true;
  });

  it('lista um carro pelo id', async () => {
    sinon.stub(carService, 'readOne').resolves(carMock);
    req.params = { id: '632250b817a8f3794c46aa5a'};
    await carController.readOne(req, res);
    const statusStub = res.status as sinon.SinonStub;
    const jsonStub = res.json as sinon.SinonStub;
    
    expect(statusStub.calledWith(200)).to.be.true;
    expect(jsonStub.calledWith(carMock)).to.be.true;
  });

  it('atualiza um carro com sucesso', async () => {
    sinon.stub(carService, 'update').resolves(carMock);
    req.params = { id: '632250b817a8f3794c46aa5a'};
    req.body = carMock;
    await carController.update(req, res);
    const statusStub = res.status as sinon.SinonStub;
    const jsonStub = res.json as sinon.SinonStub;
    
    expect(statusStub.calledWith(200)).to.be.true;
    expect(jsonStub.calledWith(carMock)).to.be.true;
  });
})