import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { BaseController } from "../controller/base.controller";
import { http_formatter } from "../util";
import { IStarter, Starter } from "";

class StarterController extends BaseController<IStarter> {

    public async getHottestStarter(req: Request, res: Response){
        try {
            const hotStarter = await this.model.find({
                age : {
                    $lte: 21
                },
                beautiful: true
            });
    
            return res.status(StatusCodes.OK).json(
                http_formatter(hotStarter)
            )
        } catch (error) {
            this.errorHandler(res, error)
        }
    }
}

export const _DeliveryOperation = new DeliveryOperation(Delivery);