import { getProviders } from "@/lib/actions/providers/providerActions";
import { FetchResposne } from "@/lib/interfaces/fetch/FetchResponse";
import { ProviderViewModel } from "@/lib/interfaces/providers/ProviderViewModel";
import ProviderLinkBox from "./ProviderLinkBox";

export default async function LinksSection() {
  const {
    count,
    message,
    ok,
    res: providers,
    status,
  }: FetchResposne<ProviderViewModel[]> = await getProviders();

  return (
    <section className="flex flex-col lg:flex-row gap-4 p-6 w-2/3 mx-auto">
      {providers?.reverse().map((provider) => (
        <ProviderLinkBox key={provider.providerTitle} {...provider} />
      ))}
    </section>
  );
}
