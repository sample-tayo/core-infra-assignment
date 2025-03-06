import { CardRequest, CardRequestStatus } from '../../types';
import { formatInNGNFull } from '../../utils/format.utils';

interface CardRequestFactoryParams {
  id: string;
  branch: string;
  initiator: string;
  quantity: string;
  batch: number;
  dateRequested: string;
  cardType: string;
  cardCharges: number;
  status: CardRequestStatus;
}

/**
 * Creates a card request object with formatted values
 */
export function createCardRequest({
  id,
  branch,
  initiator,
  quantity,
  batch,
  dateRequested,
  cardType,
  cardCharges,
  status,
}: CardRequestFactoryParams): CardRequest {
  return {
    id,
    branch,
    initiator,
    quantity,
    batch,
    dateRequested,
    cardType,
    cardCharges: formatInNGNFull(cardCharges),
    status,
  };
}