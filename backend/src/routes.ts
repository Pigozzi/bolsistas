import { Router } from 'express';

import BolsistaController from './controllers/BolsistaController';
import EspetaculoController from './controllers/EspetaculoController';

const routes = Router();

const bolsistaController = new BolsistaController();
const espetaculoController = new EspetaculoController();

routes.get('/', bolsistaController.index);
routes.get('/espetaculos', espetaculoController.index);

export default routes; 