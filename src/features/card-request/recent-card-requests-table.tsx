import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { CARD_REQUESTS } from "../../mock";
import { ROUTES } from "../../constants";
import { CardRequestStatus } from "./card-request-status";
import { Link } from "react-router";
import { cn } from "../../utils";

const TABLE_HEADERS = [
  { id: "branch", label: "Branch", align: "left", minWidth: 120 },
  { id: "cardType", label: "Card Type", align: "center", minWidth: 120 },
  { id: "quantity", label: "Quantity", align: "center", minWidth: 100 },
  { id: "status", label: "Status", align: "center", minWidth: 120 },
  { id: "action", label: "Action", align: "center", minWidth: 80 },
] as const;

const COMMON_CELL_CLASSES = "border-none whitespace-nowrap";

export function RecentCardRequestsTable() {
  const renderCell = (row: (typeof CARD_REQUESTS)[0], columnId: string) => {
    switch (columnId) {
      case "branch":
        return <span className="capitalize">{row.branch}</span>;
      case "cardType":
        return row.cardType;
      case "quantity":
        return row.quantity;
      case "status":
        return <CardRequestStatus status={row.status} className="mx-auto" />;
      case "action":
        return (
          <Link
            to={{
              pathname: `/${ROUTES.CARDS.REQUEST.DETAILS}`,
              search: `?id=${row.id}`,
            }}
            className="font-bold text-primary"
          >
            View
          </Link>
        );
      default:
        return null;
    }
  };
  return (
    <ScrollArea>
      <ScrollAreaPrimitive.Viewport className="w-full">
        <div className="min-w-[600px]">
          <Table>
            <TableHeader>
              <TableRow>
                {TABLE_HEADERS.map(({ id, label, align, minWidth }) => (
                  <TableHead
                    key={id}
                    className={cn(
                      "bg-primary-200 whitespace-nowrap",
                      `text-${align}`,
                      `min-w-[${minWidth}px]`
                    )}
                  >
                    {label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {CARD_REQUESTS.slice(0, 5).map((row) => (
                <TableRow key={row.id}>
                  {TABLE_HEADERS.map(({ id, align }) => (
                    <TableCell
                      key={id}
                      className={cn(COMMON_CELL_CLASSES, `text-${align}`)}
                    >
                      {renderCell(row, id)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
