"use strict";
exports.__esModule = true;
exports.routes = void 0;
var express_1 = require("express");
var AuthenticateClienteController_1 = require("./modules/account/authenticateClient/AuthenticateClienteController");
var AuthenticateDeliverymanController_1 = require("./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController");
var CreateClientController_1 = require("./modules/clients/useCases/createClient/CreateClientController");
var CreateDeliverymanController_1 = require("./modules/deliveryman/useCases/CreateDeliverymanController");
var routes = (0, express_1.Router)();
exports.routes = routes;
var createClientController = new CreateClientController_1.CreateClientController();
var authenticateClientController = new AuthenticateClienteController_1.AuthenticateClientController();
var createDeliverymanController = new CreateDeliverymanController_1.CreateDelverymanController();
var authenticateDeliverymanController = new AuthenticateDeliverymanController_1.AuthenticateDeliverymanController();
routes.post("/client/authenticate", authenticateClientController.handle);
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);
routes.post("/client/", createClientController.handle);
routes.post("/deliveryman/", createDeliverymanController.handle);
//# sourceMappingURL=routes.js.map