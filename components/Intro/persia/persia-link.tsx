import Image from "next/image";
import Link from "next/link";

import PersiaLogo from "@/public/images/logo-persia-transparent.png";
import PersiaDescriptionList from "./persia-description";

export default function PersiaLink() {
  return (
    <Link
      href="/persia"
      className="md:basis-1/2 rounded-lg shadow-lg hover:scale-105 transition-transform px-8 py-4 hover:border-gray-300 hover:bg-gray-100"
    >
      <div className="flex items-center gap-4">
        <div>
          <h2 className={`mb-3 text-2xl font-semibold`}>پرشیا آزما سیستم</h2>
          <p>شرکت تحقیقاتی آموزشی و خدماتی</p>
        </div>
        <Image
          width={200}
          height={200}
          src={PersiaLogo}
          alt="persia azma system logo"
          priority
        />
      </div>
      <PersiaDescriptionList />
      <div className="flex items-center gap-4">
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
