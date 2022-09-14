import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/Car';
import { carMock, carMockCreated } from '../../mocks/CarMock';
import { Model } from 'mongoose';
const { expect } = chai;

describe('Car Model', () => {
  const carModel = new CarModel()
  beforeEach(() => { sinon.restore()})

  it('criando um car com sucesso', async () => {
    sinon.stub(Model, 'create').resolves(carMockCreated);
    const createdCar = await carModel.create(carMock)
    expect(createdCar).to.be.deep.equal(carMockCreated);
  })
})