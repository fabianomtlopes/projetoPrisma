import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function EnsureAuthenticateClient(
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

  // Bearer 983294738473
  // [0] = Bearer
  // [1] = 983294738473
  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      "da31f3a0eaa5f87f28a910e0a7336d64"
    ) as IPayload;

    request.id_client = sub;
    // console.log("*******", sub, "********");
    next();
  } catch (error) {
    return response.status(401).json({
      message: "Invalid token",
    });
  }
}
