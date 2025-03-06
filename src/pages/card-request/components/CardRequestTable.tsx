import { Link } from "react-router";
import { CardRequest as GlobalCardRequest } from "../../../types";
import { ROUTES } from "../../../constants";
import { CardRequestStatus } from "../../../features/card-request/card-request-status";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

interface CardRequestTableProps {
  requests: GlobalCardRequest[];
}

const TABLE_HEADERS = [
  { key: "branch", label: "Branch", align: "left" },
  { key: "initiator", label: "Initiator", align: "center" },
  { key: "quantity", label: "Quantity", align: "center" },
  { key: "batch", label: "Batch", align: "center" },
  { key: "dateRequested", label: "Date Requested", align: "center" },
  { key: "status", label: "Status", align: "center" },
  { key: "action", label: "Action", align: "center" },
] as const;

export function CardRequestTable({ requests }: CardRequestTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {TABLE_HEADERS.map(({ key, label, align }) => (
            <TableHead
              key={key}
              className={`w-[10.44rem] ${
                align === "center" ? "text-center" : ""
              }`}
            >
              {label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {requests.map((request) => (
          <TableRow key={request.id}>
            <TableCell>{request.branch}</TableCell>
            <TableCell className="text-center">{request.initiator}</TableCell>
            <TableCell className="text-center">{request.quantity}</TableCell>
            <TableCell className="text-center">{request.batch}</TableCell>
            <TableCell className="text-center">
              {request.dateRequested}
            </TableCell>
            <TableCell className="text-center">
              <CardRequestStatus status={request.status} className="mx-auto" />
            </TableCell>
            <TableCell className="text-center">
              <Link
                to={{
                  pathname: `/${ROUTES.CARDS.REQUEST.DETAILS}`,
                  search: `?id=${request.id}`,
                }}
                className="font-bold text-primary hover:text-primary/80 transition-colors"
              >
                View
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
