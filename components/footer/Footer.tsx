import { CompanyName } from "@/lib/interfaces/general-types";
import { FaFax, FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdMarkunreadMailbox } from "react-icons/md";
import LeafletMap from "./leaflet-map";

interface Props {
  companyName: CompanyName;
}

export default function Footer(props: Props) {
  return (
    <footer
      id="footer"
      className="bg-[#20AD95] p-10 flex items-center justify-between flex-col lg:flex-row gap-8"
    >
      {props.companyName === "PERSIA" && (
        <ul className="flex flex-col gap-6">
          <li className="flex items-center gap-2">
            <IoLocationSharp size={24} className="text-white" />
            <p className="text-lg">
              شیراز، بلوار دکترحسابی، شهرک آرین، خیابان فناوری، پارک علم و
              فناوری، ساختمان آپادانا، واحد 2109، شرکت پرشیا آزما سیستم
            </p>
          </li>
          <li className="flex items-center gap-2">
            <FaPhoneAlt size={24} className="text-white" />
            <p className="text-lg">07136245649</p>
          </li>
          <li className="flex items-center gap-2">
            <FaFax size={24} className="text-white" />
            <p className="text-lg">07136245649</p>
          </li>
          <li className="flex items-center gap-2">
            <MdMarkunreadMailbox size={24} className="text-white" />
            <p className="text-lg">7197688757</p>
          </li>
        </ul>
      )}

      {props.companyName === "DATIS" && (
        <ul className="flex flex-col gap-6">
          <li className="flex items-center gap-2">
            <IoLocationSharp size={24} className="text-white" />
            <p className="text-lg">
              شیراز، ورودی اول شهر صدرا، خیابان بیمارستان امیرالمومنین (ع)، پارک
              فناوری سلامت شیراز، شرکت داتیس فناوری پرتو برتر
            </p>
          </li>
          <li className="flex items-center gap-2">
            <FaPhoneAlt size={24} className="text-white" />
            <p className="text-lg">07132346668</p>
          </li>
          <li className="flex items-center gap-2">
            <FaFax size={24} className="text-white" />
            <p className="text-lg">07132346669</p>
          </li>
          <li className="flex items-center gap-2">
            <MdMarkunreadMailbox size={24} className="text-white" />
            <p className="text-lg">7198760009</p>
          </li>
        </ul>
      )}

      <div className="flex flex-col items-center">
        <LeafletMap />
        <p className="text-sm mt-4">
          جهت برقراری ارتباط از طریق ایمیل زیر هم میتوانید
        </p>
        <a
          href="mailto:persia.azmasystem1@gmail.com"
          className="rounded-lg bg-white py-2 px-4 mt-4 text-xs"
        >
          persia.azmasystem1@gmail.com
        </a>
      </div>
    </footer>
  );
}
