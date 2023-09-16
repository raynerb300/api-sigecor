import { Router } from 'express';
import routesSession from './routes/Session.js';
import routesUser from './routes/User.js';
import routesRol from './routes/Rol.js';
import routesPermission from './routes/Permission.js';
import routesTypeCorrespondence from './routes/TypeCorrespondence.js';
import routesArea from './routes/Area.js';
import routesState from './routes/State.js';

const router = Router();

routesSession(router);
routesUser(router);
routesRol(router);
routesPermission(router);
routesTypeCorrespondence(router);
routesArea(router);
routesState(router);

export default router;