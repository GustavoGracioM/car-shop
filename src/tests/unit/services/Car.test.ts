import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import { carMock, carMockCreated } from '../../mocks/CarMock';
import { ZodError } from 'zod';
const { expect } = chai;

describe('Car Service', () => {
  const carModel = new CarModel()
  const carService = new CarService(carModel);
  beforeEach(() => { sinon.restore()})

  it('criando um car com sucesso', async () => {
    sinon.stub(carModel, 'create').resolves(carMockCreated);
    const createdCar = await carService.create(carMock)
    expect(createdCar).to.be.deep.equal(carMockCreated);
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
})