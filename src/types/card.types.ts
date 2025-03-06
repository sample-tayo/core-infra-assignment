import { Currency, FeeFrequency, FeeImpact } from "./common.types";

export type CardScheme = "Verve" | "Mastercard" | "Visa";

export type CardRequestStatus =
  | "pending"
  | "acknowledged"
  | "in-progress"
  | "ready";

export interface CardRequest {
  id: string;
  branch: string;
  initiator: string;
  quantity: string;
  batch: number;
  dateRequested: string;
  cardType: string;
  cardCharges: string;
  status: CardRequestStatus;
}

export interface CardFee {
  amount: number;
  frequency: FeeFrequency;
  impact: FeeImpact;
  name?: string;
  accountPad?: string;
  account?: string;
}

export interface CardProfile {
  id: string;
  cardName: string;
  currency: Currency;
  expiration: string;
  binPrefix: string;
  dateCreated: string;
  cardScheme: CardScheme;
  branchBlacklist: string;
  description?: string;
  fees: CardFee[];
}
