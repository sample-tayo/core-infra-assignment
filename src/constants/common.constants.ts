import { Currency, FeeFrequency, FeeImpact, AccountPadding } from '../types';

export const CURRENCY: Record<string, Currency> = {
  NAIRA: 'NGN',
  DOLLAR: 'USD',
} as const;

export const FEE_FREQUENCY: Record<string, FeeFrequency> = {
  ONE_OFF: 'One Off',
  MONTHLY: 'Monthly',
} as const;

export const FEE_IMPACT: Record<string, FeeImpact> = {
  ISSURANCE: 'Issurance',
  REISSUE: 'Pin Reissue',
} as const;

export const ACCOUNT_PAD: Record<string, AccountPadding> = {
  NONE: 'None',
  PREFIX: 'Branch Code Prefix',
  SUFFIX: 'Branch Code Suffix',
} as const;