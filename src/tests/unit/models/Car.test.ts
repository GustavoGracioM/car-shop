import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/Car';
import { carMock, carMockList } from '../../mocks/CarMock';
import { Model } from 'mongoose';
import mongoose from 'mongoose';
import { ErrorTypes } from '../../../errors/errors';
const { expect } = chai;

describe('Car Model', () => {
  const carModel = new CarModel()
  beforeEach(() => { sinon.restore()})

  it('criando um car com sucesso', async () => {
    sinon.stub(Model, 'create').resolves(carMock);
    const createdCar = await carModel.create(carMock)
    expect(createdCar).to.be.deep.equal(carMock);
  });

  it('lista todos os carros', async () => {
    sinon.stub(Model, 'find').resolves(carMockList);
    const createdCar = await carModel.read()
    expect(createdCar).to.be.deep.equal(carMockList);
  });

  describe('Listar carro pelo id', () => {
    it('lista com sucesso', async () => {
      sinon.stub(Model, 'findById').resolves(carMock);
      const createdCar = await carModel.readOne('632250b817a8f3794c46aa5a');
      expect(createdCar).to.be.deep.equal(carMock);
    });
  
    it('dispara um erro caso não for passado um id', async () => {
      sinon.stub(mongoose, 'isValidObjectId').returns(false);
      let erro: any;
      try {
        await carModel.readOne('');
      } catch(err) {
        erro = err;
      }
      expect(erro.message).to.be.equal('InvalidMongoId');
    });
  });

  describe('Atualiza um carro pelo id', () => {
    it('atualiza um carro com sucesso', async () => {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(carMock);
      const createdCar = await carModel.update('632250b817a8f3794c46aa5a', carMock);
      expect(createdCar).to.be.deep.equal(carMock);
    });

    it('dispara um erro caso não for passado um id', async () => {
      sinon.stub(mongoose, 'isValidObjectId').returns(false);
      let erro: any;
      try {
        await carModel.update('', carMock);
      } catch(err) {
        erro = err;
      }
      expect(erro.message).to.be.equal('InvalidMongoId');
    });
  });

  describe('Deleta um carro pelo id', () => {
    it('deleta um carro com sucesso', async () => {
      sinon.stub(Model, 'findByIdAndDelete').resolves(carMock);
      const createdCar = await carModel.delete('632250b817a8f3794c46aa5a');
      expect(createdCar).to.be.deep.equal(carMock);
    });

    it('dispara um erro caso não for passado um id', async () => {
      sinon.stub(mongoose, 'isValidObjectId').returns(false);
      let erro: any;
      try {
        await carModel.delete('');
      } catch(err) {
        erro = err;
      }
      expect(erro.message).to.be.equal('InvalidMongoId');
    });
  })
})