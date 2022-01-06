import express, { Request, Response, Express } from 'express';
import { RequestHandler } from 'express-serve-static-core';

const app: Express = express();

app.use(express.urlencoded({ extended: true }) as RequestHandler);

app.use(express.json() as RequestHandler);

const port: number = Number(process.env.PORT) || 8050;

app.use(express.static('dist'));
app.get('/', (req: Request, res: Response) => {
  console.log('sending index.html');
  res.sendFile('/dist/index.html');
});

app.get('/api', (req, res) => {
  console.log('sending api response');
  res.status(200).send('Hello World!');
});

app.listen(port);
console.log(`App listening on ${port}`);
