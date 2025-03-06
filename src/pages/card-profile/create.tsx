import { PageLayout } from "../../components/layout";
import { CardProfileForm } from "../../features/card-profile/profile-form";

export default function CardProfileCreatePage() {
  return (
    <PageLayout
      title="Create Profile"
      subtitle="Fill in profile details and add card fee."
    >
      <CardProfileForm />
    </PageLayout>
  );
}
