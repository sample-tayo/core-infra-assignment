import { useState, useCallback } from "react";
import { PageLayout } from "../../components/layout";
import { SearchInput } from "../../components/ui/search-input";
import { Separator } from "../../components/ui/separator";
import { CARD_REQUESTS } from "../../mock";
import { CardRequestTable } from "./components/CardRequestTable";
import { CardRequest as GlobalCardRequest } from "../../types/card.types";

export default function CardRequestPage() {
  const [filteredRequests, setFilteredRequests] =
    useState<GlobalCardRequest[]>(CARD_REQUESTS);
  const handleSearch = useCallback((searchTerm: string) => {
    const filtered = CARD_REQUESTS.filter(({ branch }) =>
      branch.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRequests(filtered);
  }, []);
  return (
    <PageLayout
      className="space-y-2.5"
      title="Card Request"
      subtitle="View and attend to card requests here."
    >
      <Separator />
      <SearchInput
        onSearch={handleSearch}
        placeholder="Search by branch"
        className="w-full max-w-[18.25rem]"
      />
      <Separator />
      <CardRequestTable requests={filteredRequests} />
    </PageLayout>
  );
}
