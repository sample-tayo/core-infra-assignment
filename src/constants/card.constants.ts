import { CardScheme, CardRequestStatus } from "../types";

export const CARD_SCHEMES: Record<string, CardScheme> = {
  VERVE: "Verve",
  MASTERCARD: "Mastercard",
  VISA: "Visa",
} as const;

export const CARD_REQUEST_STATUS: Record<string, CardRequestStatus> = {
  PENDING: "pending",
  ACKNOWLEDGED: "acknowledged",
  IN_PROGRESS: "in-progress",
  READY: "ready",
} as const;

export const STATUS_LABEL = {
  [CARD_REQUEST_STATUS.READY]: "Ready",
  [CARD_REQUEST_STATUS.ACKNOWLEDGED]: "Acknowledged",
  [CARD_REQUEST_STATUS.IN_PROGRESS]: "In Progress",
  [CARD_REQUEST_STATUS.PENDING]: "Pending",
};
