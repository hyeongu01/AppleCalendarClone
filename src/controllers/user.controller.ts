import {Request, Response, NextFunction} from "express";
import { prisma } from "../config/prisma";

// 유저 생성
export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // input validation
  console.log(req.body)
  res.send(req.body)
}

// get one user
export async function getMe(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.statusCode = 204;
  res.send();
}
