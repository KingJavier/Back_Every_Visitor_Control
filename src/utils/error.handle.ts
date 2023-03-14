import { Response } from 'express';

//? Helper Manejador de errores 
const handleHttp = (res: Response, error: string, code: number) => {
  res.status(code);
  res.send({ error });
};

//! Exportacion
export = { handleHttp };