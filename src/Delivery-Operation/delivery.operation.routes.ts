import { Request, Response, Router } from "express";
import { _DeliveryOperation } from "./delivery.operation.controller";

export const deliveryRouter = Router();

deliveryRouter
    .get('/', (req: Request, res: Response) => _DeliveryOperation.find(res, {}))
    .get('/:id', (req: Request, res: Response) => _DeliveryOperation.findOne(res, {_id: req.params.id}))
    .post('/', (req, res) => _DeliveryOperation.create(res, req.body))
    .patch('/:id', (req, res) => _DeliveryOperation.update(res, req.params.id, req.body))
    .delete('/:id', (req, res) => _DeliveryOperation.delete(res, req.params.id));