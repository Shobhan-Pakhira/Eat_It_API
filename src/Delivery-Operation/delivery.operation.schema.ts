import { Document, model, Schema } from "mongoose";
import { z } from 'zod';
export const DeliveryValidator = z.object({
     name: z.string().min(2).max(50).trim(),
     phone: z.number().min(10),
     total: z.number().max(5).min(1),
     isDeleted: z.boolean().default(false).optional(),
     
        });

export type IDelivery = z.infer<typeof DeliveryValidator>;

export interface IStarter extends Document, IDelivery {}

const DeliverySchema = new Schema<IDelivery>({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
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

export const Delivery = model<IDelivery>("Delivery", DeliverySchema);