import { Router } from 'express';
import routesSession from './routes/Session.js';
import routesUser from './routes/User.js';
import routesRol from './routes/Rol.js';
import routesPermission from './routes/Permission.js';

const router = Router();

routesSession(router);
routesUser(router);
routesRol(router);
routesPermission(router);

export default router;