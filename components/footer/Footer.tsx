import { Provider } from "@/lib/interfaces/general-types";
import { FaFax, FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FetchResposne } from "@/lib/interfaces/fetch/FetchResponse";
import { ProviderViewModel } from "@/lib/interfaces/providers/ProviderViewModel";
import { getProviderByTitle } from "@/lib/actions/providers/providerActions";
import { useMemo } from "react";
import dynamic from "next/dynamic";

interface Props {
  provider: Provider;
}

export default async function Footer({ provider }: Props) {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/footer/leaflet-map"), {
        loading: () => <p>map is loading</p>,
        ssr: false,
      }),
    []
  );
  const {
    count,
    message,
    ok,
    res: providerData,
    status,
  }: FetchResposne<ProviderViewModel> = await getProviderByTitle(provider);

  return (
    <footer
      id="footer"
      className="bg-[#20AD95] p-8 flex items-center justify-between flex-col lg:flex-row gap-8"
    >
      <ul className="flex flex-col gap-6">
        <li className="flex items-center gap-2">
          <IoLocationSharp size={24} className="text-white" />
          <p className="text-lg">آدرس: {providerData?.address}</p>
        </li>
        <li className="flex items-center gap-2">
          <FaPhoneAlt size={24} className="text-white" />
          <p className="text-lg">شماره تلفن: {providerData?.telephone}</p>
        </li>
        <li className="flex items-center gap-2">
          <FaFax size={24} className="text-white" />
          <p className="text-lg">فکس: {providerData?.fax}</p>
        </li>
        <li className="flex flex-col items-start">
          <p className="text-base">
            جهت برقراری ارتباط از طریق ایمیل زیر نیز میتوانید
          </p>
          <a
            href={`mailto:${providerData?.email}`}
            className="rounded-lg bg-white py-3 px-6 mt-4 text-lg"
          >
            {providerData?.email}
          </a>
        </li>
      </ul>
      <Map />
    </footer>
  );
}
