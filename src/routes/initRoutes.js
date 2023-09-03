import { Router } from 'express';
import routesSession from './routes/Session.js';

const router = Router();

routesSession(router);

export default router;