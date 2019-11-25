import {Router} from "express";
import PlanetController from "./controllers/PlanetController"

const routes = new Router();

routes.post("/planet", PlanetController.store)

export default routes;