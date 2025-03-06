import { CARD_REQUEST_STATUS, STATUS_LABEL } from "../../mock";
import { cn } from "../../utils";

type CardStatus =
  (typeof CARD_REQUEST_STATUS)[keyof typeof CARD_REQUEST_STATUS];

export function CardRequestStatus({
  status,
  className,
}: {
  status: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "w-fit rounded-full border px-2 py-0.5 font-medium",
        {
          "border-success-200 bg-success-50 text-success-700":
            status === CARD_REQUEST_STATUS.READY,
          "border-primary-200 bg-primary-50 text-primary-700":
            status === CARD_REQUEST_STATUS.ACKNOWLEDGED,
          "border-warning-200 bg-warning-50 text-warning-700":
            status === CARD_REQUEST_STATUS.IN_PROGRESS,
          "border-gray-200 bg-gray-50 text-gray-700":
            status === CARD_REQUEST_STATUS.PENDING,
        },
        className
      )}
    >
      {STATUS_LABEL[status as CardStatus]}
    </p>
  );
}
