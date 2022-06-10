import { Request, Response } from "express";

import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";

export class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const updateDeliveryManUseCase = new UpdateDeliverymanUseCase();

    const delivery = await updateDeliveryManUseCase.execute({
      id_deliveryman,
      id_delivery,
    });

    return response.json(delivery);
  }
}
