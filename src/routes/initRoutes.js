import { Router } from 'express';
import routesSession from './routes/Session.js';
import routesUser from './routes/User.js';

const router = Router();

routesSession(router);
routesUser(router);

export default router;