import { z } from "zod";
import { addFeeSchema } from "./fee.schema";
import { CARD_SCHEMES, CURRENCY } from "../mock";

export const branchBlackList = ["Head Office"];
export const cardSchemes = Object.values(CARD_SCHEMES);
export const currencies = Object.values(CURRENCY);

export const createCardProfileSchema = z.object({
  cardName: z.string().min(1, "Card name is required"),
  binPrefix: z
    .string()
    .min(1, "Bin Prefix is required")
    .refine((val) => /^\d+$/.test(val), "Bin prefix must be numeric values"),
  cardScheme: z
    .enum(["", ...cardSchemes])
    .refine((val) => val.length > 0, "Card scheme is required."),
  expiration: z.string().min(1, "Expiration date is required."),
  description: z.string().optional(),
  currency: z
    .enum(["", ...currencies])
    .refine((val) => val.length > 0, "Card currency is required."),
  branchBlacklist: z
    .enum(["", ...branchBlackList])
    .refine((val) => val.length > 0, "Branch blacklist is required."),
  fees: z.array(addFeeSchema),
});

export type CreateCardProfileSchemaType = z.infer<
  typeof createCardProfileSchema
>;
