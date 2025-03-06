import { CARD_REQUEST_STATUS } from '../../constants/card.constants';
import { CardRequest } from '../../types';
import { createCardRequest } from '../factories/card-request.factory';

/**
 * Map of card requests by ID for efficient lookups
 */
export const CARD_REQUESTS_MAP = new Map<string, CardRequest>([
  [
    'card-profile-1',
    createCardRequest({
      id: 'card-profile-1',
      branch: 'corporate',
      initiator: 'RootUser',
      quantity: '10',
      batch: 50611234,
      dateRequested: '11/10/2024 23:21:03',
      cardType: 'Classic Debit',
      cardCharges: 1500,
      status: CARD_REQUEST_STATUS.PENDING,
    }),
  ],
  [
    'card-profile-2',
    createCardRequest({
      id: 'card-profile-2',
      branch: 'retail',
      initiator: 'BranchManager',
      quantity: '25',
      batch: 50611235,
      dateRequested: '11/10/2024 23:45:12',
      cardType: 'Premium Debit',
      cardCharges: 2500,
      status: CARD_REQUEST_STATUS.READY,
    }),
  ],
  [
    'card-profile-3',
    createCardRequest({
      id: 'card-profile-3',
      branch: 'commercial',
      initiator: 'SupervisorUser',
      quantity: '50',
      batch: 50611236,
      dateRequested: '11/11/2024 09:15:00',
      cardType: 'Business Credit',
      cardCharges: 5090,
      status: CARD_REQUEST_STATUS.IN_PROGRESS,
    }),
  ],
  [
    'card-profile-4',
    createCardRequest({
      id: 'card-profile-4',
      branch: 'digital',
      initiator: 'SystemAdmin',
      quantity: '100',
      batch: 50611237,
      dateRequested: '11/11/2024 10:30:45',
      cardType: 'Virtual Card',
      cardCharges: 1000,
      status: CARD_REQUEST_STATUS.PENDING,
    }),
  ],
  [
    'card-profile-5',
    createCardRequest({
      id: 'card-profile-5',
      branch: 'private',
      initiator: 'RelationshipManager',
      quantity: '5',
      batch: 50611238,
      dateRequested: '11/11/2024 11:45:30',
      cardType: 'Platinum Credit',
      cardCharges: 10000,
      status: CARD_REQUEST_STATUS.ACKNOWLEDGED,
    }),
  ],
  [
    'card-profile-6',
    createCardRequest({
      id: 'card-profile-6',
      branch: 'international',
      initiator: 'BranchOps',
      quantity: '30',
      batch: 50611239,
      dateRequested: '11/11/2024 13:20:15',
      cardType: 'Travel Card',
      cardCharges: 3000,
      status: CARD_REQUEST_STATUS.IN_PROGRESS,
    }),
  ],
]);

/**
 * Array of card requests for iteration
 */
export const CARD_REQUESTS: CardRequest[] = Array.from(CARD_REQUESTS_MAP.values());