import { Router } from 'express';
import PlanetController from './controllers/PlanetController';

const routes = new Router();

routes.get('/planet', PlanetController.index);
//ver depois
routes.get('/planetpername', PlanetController.showName);
routes.get('/:planetId', PlanetController.showIndex);

routes.post('/planet', PlanetController.store);

routes.delete('/:planetId', PlanetController.delete);

export default routes;
