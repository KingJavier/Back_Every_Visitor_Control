import { Request, Response } from "express";
import handleHttp from "../utils/error.handle";


const registerCtrl = async(req:Request, res:Response) => {
    try {

      } catch (e) {
        handleHttp.handleHttp(res, 'Error_register_controler', 404)
      }
}

const loginCtrl = async(req:Request, res:Response) => {

}

export {
    registerCtrl,
    loginCtrl
}