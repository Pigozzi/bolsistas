import { Router } from 'express';

import BolsistaController from './controllers/BolsistaController';
import EspetaculoController from './controllers/EspetaculoController';
import BolsistaEspetaculoController from './controllers/BolsistaEspetaculoController';

const routes = Router();

const bolsistaController = new BolsistaController();
const espetaculoController = new EspetaculoController();
const bolsistaEspetaculoController = new BolsistaEspetaculoController;

routes.get('/bolsistas', bolsistaController.index);
routes.post('/cadastrar/bolsistas', bolsistaController.create);

routes.get('/espetaculos', espetaculoController.index);
routes.post('/cadastrar/espetaculos', espetaculoController.create);

routes.get('/bolsista/espetaculo', bolsistaEspetaculoController.index);
routes.post('/cadastrar', bolsistaEspetaculoController.create);

export default routes; 