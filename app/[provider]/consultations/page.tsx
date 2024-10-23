import ConsultationsList from "@/components/consultations/consultations-list";
import { ConsultationsSearchParams } from "@/lib/interfaces/consultations/ConsultationsSearchParams";
import { Provider } from "@/lib/interfaces/general-types";

interface Props {
  searchParams: ConsultationsSearchParams;
  params: { provider: Provider };
}

export default function ConsultationsPage({
  searchParams,
  params: { provider },
}: Props) {
  return (
    <div className="container mx-auto px-16">
      <h2 className="font-bold">مشاوره ها</h2>
      <ConsultationsList provider={provider} searchParams={searchParams} />
    </div>
  );
}
