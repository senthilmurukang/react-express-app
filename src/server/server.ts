import express, { Request, Response, Express } from 'express';
import { RequestHandler } from 'express-serve-static-core';

import accountsRouter from './routes/accounts';

const app: Express = express();

app.use(express.urlencoded({ extended: true }) as RequestHandler);

app.use(express.json() as RequestHandler);

const port: number = Number(process.env.PORT) || 8080;

app.use(express.static('dist'));
app.get('/', (_req: Request, res: Response) => {
  res.sendFile('/dist/index.html');
});

app.get('/api', (_req: Request, res: Response) => {
  res.status(200).send('Hello World!');
});

app.use('/api/accounts', accountsRouter);

app.listen(port);
console.log(`App listening on ${port}`);
