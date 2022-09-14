import { Router } from 'express';
import CarController from '../controllers/Car';
import CarModel from '../models/Car';
import CarService from '../services/Car';

const router = Router();

const carModel = new CarModel();
const carService = new CarService(carModel);
const carContoller = new CarController(carService);

router.post('/', (req, res) => carContoller.create(req, res));
router.get('/', (req, res) => carContoller.read(req, res));

export default router;