import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { BaseController } from "../controller/base.controller";
import { http_formatter } from "../util";
import { Delivery, IDelivery } from "./delivery.operation.schema";

class DeliveryController extends BaseController<IDelivery> {}

export const _DeliveryOperation = new DeliveryController(Delivery);