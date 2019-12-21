import {Response, Request, NextFunction } from 'express';
import {parse, StackFrame} from 'stacktrace-parser';
import path from 'path';
import {compileFile} from 'pug';
import {IOops} from './Interfaces/IOops';
import {IStack} from './Interfaces/IStack';
import {ISolution} from './Interfaces/ISolution';
import {promisify} from 'util';
import {readFile} from 'fs';
const get_content = promisify(readFile);

import * as MissingPackageSolution from './Solutions/MissingPackageSolution.json';
import * as PageNotFoundSolution from './Solutions/PageNotFoundSolution.json';
import * as BadRequestSolution from './Solutions/BadRequestSolution.json';
import * as MethodNotAllowed from './Solutions/MethodNotAllowed.json';
import * as NotAcceptable from './Solutions/NotAcceptable.json';
import * as RequestTimeout from './Solutions/RequestTimeout.json';

/**
 * Register the solutions for the application.
 * @type {object}
 */
const Solution:Array<ISolution> = [
  MissingPackageSolution,
  PageNotFoundSolution,
  BadRequestSolution,
  MethodNotAllowed,
  NotAcceptable,
  RequestTimeout
];

/**
 * Handle Errors.
 *
 * @param req
 * @param res
 * @param err
 * @param next
 * @return {void}
 */
export function Telescope({name,message,stack}: Error, req:Request, res:Response, next: NextFunction): void {
  let details:IOops = {
    name,
    message,
    stack: null,
    statusCode: 500,
    solution:null
  };
  // set solution details.
  details.solution = Solution.filter((element:ISolution)=>message.includes(element.getErrorTitle))[0] || null;
  if(stack) {
    const trace:StackFrame[] = parse(stack);
    details.stack = <IStack>trace[0];
    details.stack.frames = trace.length;
    get_content(details.stack['file'], 'utf8').then((data: string) => {
      details.stack.content = data;
    }).then(()=>{
      // Compile the source code
      const compiledFunction = compileFile(path.join(__dirname,'../resources/views/ErrorPage.pug'));
      // Render a set of data
      res.send(compiledFunction(details));
    });
  }
}
