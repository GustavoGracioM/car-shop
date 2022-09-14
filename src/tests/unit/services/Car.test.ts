import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import { carMock, carMockList } from '../../mocks/CarMock';
import { ZodError } from 'zod';
const { expect } = chai;

describe('Car Service', () => {
  const carModel = new CarModel()
  const carService = new CarService(carModel);
  beforeEach(() => { sinon.restore()})

  it('criando um car com sucesso', async () => {
    sinon.stub(carModel, 'create').resolves(carMock);
    const createdCar = await carService.create(carMock)
    expect(createdCar).to.be.deep.equal(carMock);
  });
  
  it('criando um car passando um objeto vazio', async () => {
    let err: any;
    try {
      await carService.create({});
    } catch (error) {
      err = error;
    }
    expect(err).to.be.instanceOf(ZodError);
  });

  it('lista todos os carros', async () => {
    sinon.stub(carModel, 'read').resolves(carMockList);
    const createdCar = await carService.read()
    expect(createdCar).to.be.deep.equal(carMockList);
  });

  it('lista um carros pelo id', async () => {
    sinon.stub(carModel, 'readOne').resolves(carMock);
    const createdCar = await carService.readOne('632250b817a8f3794c46aa5a');
    expect(createdCar).to.be.deep.equal(carMock);
  });

  it('atualiza um carro com sucesso', async () => {
    sinon.stub(carModel, 'update').resolves(carMock);
    const createdCar = await carModel.update('632250b817a8f3794c46aa5a', carMock);
    expect(createdCar).to.be.deep.equal(carMock);
  });

  it('deleta um carro com sucesso', async () => {
    sinon.stub(carModel, 'delete').resolves(carMock);
    const createdCar = await carModel.delete('632250b817a8f3794c46aa5a');
    expect(createdCar).to.be.deep.equal(carMock);
  });
})