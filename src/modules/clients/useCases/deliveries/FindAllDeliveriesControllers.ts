import { Request, Response } from "express";

import { FindAlldDeliveriesUseCase } from "./FindAllDeliveriesUseCase";

export class FindAlldDeliveriesController {
  async handle(request: Request, response: Response) {
    const { id_client } = request;

    const findAllDeliveriesUseCase = new FindAlldDeliveriesUseCase();

    const deliveries = await findAllDeliveriesUseCase.execute(id_client);

    return response.json(deliveries);
  }
}
