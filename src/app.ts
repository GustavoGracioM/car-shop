import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorMiddlewares';
import carRouter from './router/Car';

const app = express();
app.use(express.json());
app.use('/cars', carRouter);
app.use(errorHandler);

export default app;
