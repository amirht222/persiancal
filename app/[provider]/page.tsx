import ProviderActivities from "@/components/activities/activities";
import ProviderHero from "@/components/hero/hero";
import { getProviderByTitle } from "@/lib/actions/providers/providerActions";
import { FetchResposne } from "@/lib/interfaces/fetch/FetchResponse";
import { Provider } from "@/lib/interfaces/general-types";
import { ProviderViewModel } from "@/lib/interfaces/providers/ProviderViewModel";

export default async function ProviderPage({
  params,
}: Readonly<{
  params: { provider: Provider };
}>) {
  const {
    count,
    message,
    ok,
    res: providerData,
    status,
  }: FetchResposne<ProviderViewModel> = await getProviderByTitle(
    params.provider
  );

  console.log("222222222222222", providerData);

  return (
    <div className="container mx-auto px-6 lg:px-10">
      {providerData && (
        <>
          <ProviderHero providerData={providerData} />
          <ProviderActivities activities={providerData?.providerActivities} />
        </>
      )}
    </div>
  );
}
