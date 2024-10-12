import { ProviderViewModel } from "@/lib/interfaces/providers/ProviderViewModel";
import Image from "next/image";
import Link from "next/link";
import DatisLogo from "@/public/images/datis-logo.png";
import PersiaLogo from "@/public/images/logo-persia-transparent.png";

export default function ProviderLinkBox(props: ProviderViewModel) {
  return (
    <Link
      href={props.providerTitle}
      className="sm:basis-1/2 border min-h-72 border-[#D7D7D7] rounded-3xl  md:shadow-lg hover:scale-105 transition-transform px-8 py-6 hover:border-gray-300 hover:bg-gray-100"
    >
      <Image
        width={props.providerTitle === "persia" ? 200 : 150}
        height={props.providerTitle === "persia" ? 200 : 150}
        src={props.providerTitle === "persia" ? PersiaLogo : DatisLogo}
        alt={`${props.providerTitle} logo`}
        priority
      />
      <ul className="mt-4 *:mt-4 text-[10px] lg:text-[16px] list-image-[url(/images/list-bullet.png)]">
        {props.providerActivities?.slice(0, 4).map((activity) => (
          <li key={activity.id}>{activity.text}</li>
        ))}
      </ul>
      <span className="text-[10px] lg:text-[16px] inline-block mt-4">
        تلفن: {props.telephone}
      </span>
    </Link>
  );
}
