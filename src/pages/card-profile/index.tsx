import { PencilIcon, TrashIcon } from "../../components/icons";
import { PageLayout } from "../../components/layout";
import { LinkButton } from "../../components/ui/link-button";
import { Separator } from "../../components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { ROUTES } from "../../constants";
import { CARD_PROFILES } from "../../mock";
import { DeleteCardProfileDialog } from "../../features/card-profile/delete-card-profile-dialog";
import { PlusIcon } from "lucide-react";
import { SearchInput } from "../../components/ui/search-input";
import { useState } from "react";
import { Link } from "react-router";

export default function CardProfilePage() {
  const [cardProfiles, setCardProfiles] = useState(CARD_PROFILES);
  const [search, setSearch] = useState("");

  const filteredCardRequests = cardProfiles.filter(({ cardName }) =>
    cardName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageLayout
      className="space-y-2.5"
      title="Card Profile"
      subtitle="Create, view and edit card profiles here."
    >
      <Separator />
      <div className="flex items-center justify-between gap-4">
        <SearchInput
          placeholder="Search by card name"
          className="w-full max-w-[18.25rem]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <LinkButton
          href={`/${ROUTES.CARDS.PROFILE.CREATE}`}
          leftIcon={<PlusIcon className="size-5" />}
          label="Add Profile"
        />
      </div>
      <Separator />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[12.18rem]">Card Name</TableHead>
            <TableHead className="w-[12.18rem] text-center">Currency</TableHead>
            <TableHead className="w-[12.18rem] text-center">
              Expiration
            </TableHead>
            <TableHead className="w-[12.18rem] text-center">
              Bin Prefix
            </TableHead>
            <TableHead className="w-[12.18rem] text-center">
              Date Created
            </TableHead>
            <TableHead className="w-[12.18rem] text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCardRequests.map(
            ({
              cardName,
              currency,
              expiration,
              binPrefix,
              dateCreated,
              id,
            }) => (
              <TableRow key={id}>
                <TableCell>{cardName}</TableCell>
                <TableCell className="text-center">{currency}</TableCell>
                <TableCell className="text-center">{expiration}</TableCell>
                <TableCell className="text-center">{binPrefix}</TableCell>
                <TableCell className="text-center">{dateCreated}</TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <DeleteCardProfileDialog
                      trigger={
                        <button
                          type="button"
                          title="Delete card profile"
                          className="cursor-pointer rounded-lg p-1 text-base text-gray-600 hover:text-red-500"
                        >
                          <TrashIcon />
                        </button>
                      }
                      cardName={cardName}
                      deleteFn={() => {
                        setCardProfiles(
                          cardProfiles.filter((profile) => profile.id !== id)
                        );
                      }}
                    />
                    <Link
                      to={{
                        pathname: `/${ROUTES.CARDS.PROFILE.EDIT}`,
                        search: `?id=${id}`,
                      }}
                    >
                      <button
                        type="button"
                        title="Edit card profile"
                        className="cursor-pointer rounded-lg p-1 text-base text-gray-600 hover:bg-primary-200"
                      >
                        <PencilIcon />
                      </button>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </PageLayout>
  );
}
