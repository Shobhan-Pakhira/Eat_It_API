import { Document, model, Schema } from "mongoose";
import { z } from 'zod';
export const DeliveryValidator = z.object({
     name: z.string().min(2).max(50).trim(),
     description: z.string().min(10),
     price: z.number().max(5).min(1),
     Quantity: z.string().min(1).max(10),
     isDeleted: z.boolean().default(false).optional(),
     
        });

export type Delivery = z.infer<typeof DeliveryValidator>;

export interface IStarter extends Document, Delivery {}

const DeliverySchema = new Schema<IDelivery>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    Quantity: {
        type: String,
        required: true,
    },
    
    isDeleted: {
        type: Boolean, 
        default: false,
    }
}, {
    timestamps: true,
    versionKey: false
});

export const Delivery = model<IDelivery>("Starter", DeliverySchema);