import { Router } from "express";

import { EnsureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { EnsureAuthenticateDelivery } from "./middlewares/ensureAuthenticateDeliveryman";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClienteController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { FindAlldDeliveriesController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesControllers";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { UpdateEndDateController } from "./modules/deliveries/useCases/updateEndDate/UpdateEndDateController";
import { CreateDelverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { FindAllDeliverisDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDelverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllDeliveriesController = new FindAlldDeliveriesController();
const findAllDeliveriesDeliverymanController =
  new FindAllDeliverisDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

routes.post("/client/authenticate", authenticateClientController.handle);
routes.post(
  "/deliveryman/authenticate",
  authenticateDeliverymanController.handle
);
routes.post("/client/", createClientController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);

routes.post(
  "/delivery",
  EnsureAuthenticateClient,
  createDeliveryController.handle
);

routes.get(
  "/delivery/available",
  EnsureAuthenticateDelivery,
  findAllAvailableController.handle
);

routes.put(
  "/delivery/updateDeliveryman/:id",
  EnsureAuthenticateDelivery,
  updateDeliverymanController.handle
);

routes.get(
  "/client/deliveries",
  EnsureAuthenticateClient,
  findAllDeliveriesController.handle
);

routes.get(
  "/deliveryman/deliveries",
  EnsureAuthenticateDelivery,
  findAllDeliveriesDeliverymanController.handle
);

routes.put(
  "/delivery/updateEndDate/:id",
  EnsureAuthenticateDelivery,
  updateEndDateController.handle
);

export { routes };
