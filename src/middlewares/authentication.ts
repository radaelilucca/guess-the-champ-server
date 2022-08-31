import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

class Middleware {
  async verify(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.headers.authorization) throw "Missing header";

      const authorization = req.headers.authorization.split(" ");

      const token = authorization[1];

      const tokenKey = process.env.JWT_PRIVATE_KEY ?? "";

      const decodedToken = jwt.verify(token, tokenKey) as JwtPayload;

      if (decodedToken) {
        req.headers.userId = decodedToken.userId;

        return next();
      }

      throw "Invalid token";
    } catch (error) {
      return res.status(401).json({
        error: "User does not have access to this resource",
        details: "Invalid or expired authorization token",
      });
    }
  }
}

export const AuthMiddleware = new Middleware();
