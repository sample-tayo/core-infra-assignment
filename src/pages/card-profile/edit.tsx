import { PageLayout } from "../../components/layout";
import { CARD_PROFILES } from "../../mock";
import { CardProfileForm } from "../../features/card-profile/profile-form";
import { useSearchParams } from "react-router";
import { CreateCardProfileSchemaType } from "../../schemas";
import { CardProfile } from "../../types/card.types";
import { useMemo } from "react";

const mapProfileToFormData = (
  profile: CardProfile
): CreateCardProfileSchemaType => ({
  cardName: profile.cardName,
  binPrefix: profile.binPrefix,
  cardScheme: profile.cardScheme,
  expiration: profile.expiration,
  description: profile.description ?? "",
  currency: profile.currency,
  branchBlacklist: profile.branchBlacklist,
  fees: profile.fees.map((fee) => ({
    feeName: fee.name ?? `Fee ${fee.amount}`,
    value: fee.amount.toString(),
    feeFrequency: fee.frequency,
    currency: profile.currency,
    feeImpact: fee.impact,
    accountPad: fee.accountPad ?? "0",
    account: fee.account ?? "",
  })),
});

export default function CardProfileEditPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const profile = useMemo(
    () => CARD_PROFILES.find((profile) => profile.id === id),
    [id]
  );
  const formData = useMemo(
    () => (profile ? mapProfileToFormData(profile) : null),
    [profile]
  );

  if (!id) {
    return (
      <PageLayout title="Error">
        <div className="text-center text-destructive">
          <h2 className="text-lg font-medium">Invalid Request</h2>
          <p>No profile ID provided. Please try again.</p>
        </div>
      </PageLayout>
    );
  }

  if (!profile || !formData) {
    return (
      <PageLayout title="Error">
        <div className="text-center text-destructive">
          <h2 className="text-lg font-medium">Profile Not Found</h2>
          <p>No card profile found for ID: {id}</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title="Edit Profile"
      subtitle="Make changes to the profile details and add card fee if necessary."
    >
      <CardProfileForm defaultValues={formData} />
    </PageLayout>
  );
}
