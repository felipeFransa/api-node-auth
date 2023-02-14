import { Request, Response, NextFunction} from 'express';

export const Auth = {
  private: (req: Request, res: Response, next: NextFunction) => {
    let success = true;
    if(success) {
      next();
    }else {
      res.status(403);
      res.json({ error: 'Não Autorizador!'})
    }
  }
}