import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFax } from "react-icons/fa";
import { MdMarkunreadMailbox } from "react-icons/md";
import TestMap from "@/public/images/test-map.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#20AD95] p-6 flex items-center justify-between">
      <ul className="flex flex-col gap-6">
        <li className="flex items-center gap-2">
          <IoLocationSharp size={24} className="text-white" />
          <p className="text-xs">
            شیراز، بلوار دکترحسابی، شهرک آرین، خیابان فناوری، پارک علم و فناوری،
            ساختمان آپادانا، واحد 2109، شرکت پرشیا آزما سیستم
          </p>
        </li>
        <li className="flex items-center gap-2">
          <FaPhoneAlt size={24} className="text-white" />
          <p className="text-xs">07136245649</p>
        </li>
        <li className="flex items-center gap-2">
          <FaFax size={24} className="text-white" />
          <p className="text-xs">07136245649</p>
        </li>
        <li className="flex items-center gap-2">
          <MdMarkunreadMailbox size={24} className="text-white" />
          <p className="text-xs">7197688757</p>
        </li>
      </ul>
      <div>
        <Image src={TestMap} alt="map" />
        <p className="text-[10px] mt-4">
          جهت برقراری ارتباط از طریق ایمیل زیر هم میتوانید
        </p>
        <button className="rounded-lg bg-white py-2 px-4 mt-4 text-xs">
          pershia azma@gmail.com
        </button>
      </div>
    </footer>
  );
}
