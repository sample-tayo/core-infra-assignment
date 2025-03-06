import { CardProfile, CardScheme, Currency } from '../../types';

interface CardProfileFactoryParams {
  id: string;
  cardName: string;
  currency: Currency;
  expiration: string;
  binPrefix: string;
  dateCreated: string;
  cardScheme: CardScheme;
  branchBlacklist?: string;
}

/**
 * Creates a card profile object with default values for optional fields
 */
export function createCardProfile({
  id,
  cardName,
  currency,
  expiration,
  binPrefix,
  dateCreated,
  cardScheme,
  branchBlacklist = 'Head Office',
}: CardProfileFactoryParams): CardProfile {
  return {
    id,
    cardName,
    currency,
    expiration,
    binPrefix,
    dateCreated,
    cardScheme,
    branchBlacklist,
    fees: [],
  };
}