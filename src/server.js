import express, { json } from 'express';
import routes from './adapter/http/config/routes.js';
const app = express();

app.use(json());
app.use(routes);

app.listen(4043);