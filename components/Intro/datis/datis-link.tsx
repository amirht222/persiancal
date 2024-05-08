import Image from "next/image";
import Link from "next/link";

import DatisLogo from "@/public/images/datis-logo.png";
import DatisDescriptionList from "./datis-description";

export default function DatisLink() {
  return (
    <Link
      href="/datis"
      className="sm:basis-1/2 border min-h-72 border-[#D7D7D7] rounded-3xl  md:shadow-lg hover:scale-105 transition-transform px-8 py-6 hover:border-gray-300 hover:bg-gray-100"
    >
      <Image
        width={150}
        height={150}
        src={DatisLogo}
        alt="datis logo"
        priority
      />
      <DatisDescriptionList />
      <span className="text-[10px] lg:text-[16px] inline-block mt-4">
        تلفن: 07132346668
      </span>
    </Link>
  );
}
