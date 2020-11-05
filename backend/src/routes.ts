import { Router } from 'express';

import BolsistaController from './controllers/BolsistaController';
import EspetaculoController from './controllers/EspetaculoController';

const routes = Router();

routes.get('/', BolsistaController.index);
routes.get('/espetaculos', EspetaculoController.index);

export default routes;