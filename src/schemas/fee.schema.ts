import { z } from "zod";
import { CURRENCY } from "../mock";

export const addFeeSchema = z.object({
  feeName: z.string().min(1, "Fee name is required"),
  value: z.string().min(1, "Fee value is required"),
  feeFrequency: z.string().min(1, "Fee frequency is required"),
  currency: z.enum(["", ...Object.values(CURRENCY)]),
  feeImpact: z.string().min(1, "Fee impact is required"),
  accountPad: z.string().min(1, "Account pad is required"),
  account: z.string().min(1, "Account is required"),
});

export type AddFeeSchemaType = z.infer<typeof addFeeSchema>;
