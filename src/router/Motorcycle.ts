import { Router } from 'express';
import MotorcycleController from '../controllers/Motorcycle';
import MotorcycleModel from '../models/Motorcycle';
import MotorcycleService from '../services/Motorcycle';

const router = Router();

const motorcycleModel = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycleModel);
const motorcycleContoller = new MotorcycleController(motorcycleService);

router.post('/', (req, res) => motorcycleContoller.create(req, res));
router.get('/:id', (req, res) => motorcycleContoller.readOne(req, res));
router.get('/', (req, res) => motorcycleContoller.read(req, res));
router.put('/:id', (req, res) => motorcycleContoller.update(req, res));
router.delete('/:id', (req, res) => motorcycleContoller.delete(req, res));

export default router;