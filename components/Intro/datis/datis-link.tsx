import Image from "next/image";
import Link from "next/link";

import DatisLogo from "@/public/images/datis-logo.png";
import DatisDescriptionList from "./datis-description";

export default function DatisLink() {
  return (
    <Link
      href="/datis"
      className="md:basis-1/2 rounded-lg shadow-lg hover:scale-105 transition-transform px-8 py-4 hover:border-gray-300 hover:bg-gray-100"
    >
      <div className="flex items-center gap-4">
        <div>
          <h2 className={`mb-3 text-2xl font-semibold`}>داتیس فناور</h2>
          <p>شرکت تحقیقاتی تولیدی و مهندسی</p>
        </div>
        <Image
          width={200}
          height={200}
          src={DatisLogo}
          alt="datis logo"
          priority
        />
      </div>
      <DatisDescriptionList />
      <span>تلفن: </span>
      <span>07132346668</span>
    </Link>
  );
}
