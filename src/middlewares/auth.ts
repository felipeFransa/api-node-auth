import { Request, Response, NextFunction} from 'express';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../models/User';

dotenv.config();

export const Auth = {
  private: (req: Request, res: Response, next: NextFunction) => {

    let success = false;

    if(req.headers.authorization){
      const [authType, token] = req.headers.authorization.split(' ')

      if(authType === 'Bearer'){
        try {
          const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY as string)

          success = true;

        }catch(error){
          console.log('Error')
        }
        
      }
    }

    if(success) {
      next();
    }else {
      res.status(403);
      res.json({ error: 'Não Autorizador!'})
    }
  }
}