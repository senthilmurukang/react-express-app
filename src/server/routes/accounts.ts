import express, { NextFunction, Request, Response } from 'express';

const router = express.Router();

router.use((_req: Request, _res: Response, next: NextFunction) => {
  console.log('Time: ', Date.now());
  next();
});

router.get('/about', (_req: Request, res: Response) => {
  res.json({ status: 'working', route: '/about' });
});

router.get('/:account', (_req: Request, res: Response) => {
  res.json({ status: 'working', route: `/${_req.params.account}` });
});

export default router;
