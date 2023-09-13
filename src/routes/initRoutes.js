import { Router } from 'express';
import routesSession from './routes/Session.js';
import routesUser from './routes/User.js';
import routesRol from './routes/Rol.js';
import routesPermission from './routes/Permission.js';
import routesTypeCorrespondence from './routes/TypeCorrespondence.js';

const router = Router();

routesSession(router);
routesUser(router);
routesRol(router);
routesPermission(router);
routesTypeCorrespondence(router);

export default router;