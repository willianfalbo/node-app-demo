import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import ProviderScheduleController from './app/controllers/ProviderScheduleController';
import AppointmentController from './app/controllers/AppointmentController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// routes without authentication
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// routes with authentication
routes.use(authMiddleware);
routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/providers', ProviderController.index);
routes.get('/providers-schedule', ProviderScheduleController.index);

routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);

export default routes;
