import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function EnsureAuthenticateDelivery(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token invalid!",
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      "da31f3a0eaa5f87f28a910e0a7336d65"
    ) as IPayload;

    request.id_deliveryman = sub;
    next();
  } catch (error) {
    return response.status(401).json({
      message: "Invalid token",
    });
  }

  // verify( token , "da31f3a0eaa5f87f28a910e0a7336d65")
}
