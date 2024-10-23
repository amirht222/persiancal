import CertificatesList from "@/components/certifications/CertificationsList";
import Spinner from "@/components/loading";
import { getCertificates } from "@/lib/actions/certificates/certificatesActions";
import { CertificateViewModel } from "@/lib/interfaces/certificates/CertificateViewModel";
import { FetchResposne } from "@/lib/interfaces/fetch/FetchResponse";
import { Provider } from "@/lib/interfaces/general-types";
import { providerTitleMapper } from "@/lib/utils";
import { Suspense } from "react";

interface Props {
  params: { provider: Provider };
}

export default async function CertificatesPage({
  params: { provider },
}: Props) {
  return (
    <div className="container mx-auto px-12 flex flex-col items-center min-h-64">
      <h2 className="font-bold">تاییدیه های {providerTitleMapper(provider)}</h2>
      <Suspense fallback={<Spinner />}>
        <CertificatesList provider={provider} />
      </Suspense>
    </div>
  );
}
