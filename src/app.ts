import express from 'express';
import carRouter from './router/Car';

const app = express();
app.use(express.json());
app.use('/car', carRouter);

export default app;
