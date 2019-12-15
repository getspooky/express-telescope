import {NextFunction, Request, Response} from "express";

/**
 * Handle Errors.
 *
 * @param req
 * @param res
 * @param err
 * @param next
 * @return {void}
 */
export declare function Telescope({name,message,stack}: Error, req:Request, res:Response, next: NextFunction):void;
