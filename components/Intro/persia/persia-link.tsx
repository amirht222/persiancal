import Image from "next/image";
import Link from "next/link";

import PersiaLogo from "@/public/images/logo-persia-transparent.png";
import PersiaDescriptionList from "./persia-description";

export default function PersiaLink() {
  return (
    <Link
      href="/persia"
      className="sm:basis-1/2 border border-[#D7D7D7] rounded-3xl md:shadow-lg hover:scale-105 transition-transform px-8 py-6 hover:border-gray-300 hover:bg-gray-100"
    >
      <Image
        width={200}
        height={200}
        src={PersiaLogo}
        alt="persia azma system logo"
        priority
      />
      <PersiaDescriptionList />
      <div className="flex items-center gap-4 text-[10px] lg:text-[16px] mt-4">
        <div>
          <span>تلفن: </span>
          <span>07136245649</span>
        </div>
        <div>
          <span>فکس: </span>
          <span>07132346668</span>
        </div>
      </div>
    </Link>
  );
}
