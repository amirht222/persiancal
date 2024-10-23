import { getConsultations } from "@/lib/actions/consultations/consultationsActions";
import { ConsultationsSearchParams } from "@/lib/interfaces/consultations/ConsultationsSearchParams";
import { ConsultationViewModel } from "@/lib/interfaces/consultations/ConsultationViewModel";
import { FetchResposne } from "@/lib/interfaces/fetch/FetchResponse";
import { Provider } from "@/lib/interfaces/general-types";
import ConsultationBox from "./consultation-box";

interface Props {
  searchParams: ConsultationsSearchParams;
  provider: Provider;
}

export default async function ConsultationsList({
  searchParams,
  provider,
}: Props) {
  const {
    count,
    message,
    ok,
    res: consultations,
    status,
  }: FetchResposne<ConsultationViewModel[]> = await getConsultations({
    ...searchParams,
    consultationStatus: 1,
    provider: provider,
  });

  return (
    <ul className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
      {consultations &&
        consultations.map((consultation) => (
          <ConsultationBox {...consultation} key={consultation.id} />
        ))}
    </ul>
  );
}
