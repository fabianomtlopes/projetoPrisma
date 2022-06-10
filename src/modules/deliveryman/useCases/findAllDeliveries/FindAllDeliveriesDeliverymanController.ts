import { Request, Response } from "express";

import { FindAllDeliverisDeliverymanUseCase } from "./FindAllDeliverisDeliverymanUseCase";

export class FindAllDeliverisDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;

    const findAllDeliverisDeliverymanUSeCase =
      new FindAllDeliverisDeliverymanUseCase();

    const deliveries = await findAllDeliverisDeliverymanUSeCase.execute(
      id_deliveryman
    );

    return response.json(deliveries);
  }
}
