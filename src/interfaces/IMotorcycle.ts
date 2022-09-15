import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const typeMotorcycle = ['Street', 'Custom', 'Trail'] as const;

export const MotorcycleZodSchema = VehicleZodSchema.extend({
  category: z.enum(typeMotorcycle),
  engineCapacity: z.number().int().positive().lte(2500),
});

export type IMotorcycle = z.infer<typeof MotorcycleZodSchema >;
