import { CARD_SCHEMES } from '../../constants/card.constants';
import { CURRENCY } from '../../constants/common.constants';
import { CardProfile } from '../../types';
import { createCardProfile } from '../factories/card-profile.factory';

/**
 * Collection of card profiles
 */
export const CARD_PROFILES: CardProfile[] = [
  createCardProfile({
    id: 'card-profile-1',
    cardName: 'Verve-1',
    currency: CURRENCY.NAIRA,
    expiration: '40 months',
    binPrefix: '50611234',
    dateCreated: '11/10/2024 23:21:03',
    cardScheme: CARD_SCHEMES.VISA,
  }),
  createCardProfile({
    id: 'card-profile-2',
    cardName: 'Verve-2',
    currency: CURRENCY.DOLLAR,
    expiration: '36 months',
    binPrefix: '50611235',
    dateCreated: '11/10/2024 23:22:15',
    cardScheme: CARD_SCHEMES.VISA,
  }),
  createCardProfile({
    id: 'card-profile-3',
    cardName: 'Mastercard-1',
    currency: CURRENCY.DOLLAR,
    expiration: '48 months',
    binPrefix: '50611236',
    dateCreated: '11/10/2024 23:23:45',
    cardScheme: CARD_SCHEMES.VISA,
  }),
  createCardProfile({
    id: 'card-profile-4',
    cardName: 'Visa-1',
    currency: CURRENCY.DOLLAR,
    expiration: '24 months',
    binPrefix: '50611237',
    dateCreated: '11/10/2024 23:24:30',
    cardScheme: CARD_SCHEMES.VISA,
  }),
  createCardProfile({
    id: 'card-profile-5',
    cardName: 'Amex-1',
    currency: CURRENCY.DOLLAR,
    expiration: '36 months',
    binPrefix: '50611238',
    dateCreated: '11/10/2024 23:25:12',
    cardScheme: CARD_SCHEMES.VISA,
  }),
  createCardProfile({
    id: 'card-profile-6',
    cardName: 'Discover-1',
    currency: CURRENCY.NAIRA,
    expiration: '48 months',
    binPrefix: '50611239',
    dateCreated: '11/10/2024 23:26:03',
    cardScheme: CARD_SCHEMES.VISA,
  }),
];