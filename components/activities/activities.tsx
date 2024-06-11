import Image from "next/image";
import XrayImage from "@/public/images/activities/x-ray.png";
import ComputerImage from "@/public/images/activities/computer.png";
import PlantImage from "@/public/images/activities/plant.png";
import MedalIcon from "@/public/images/activities/medal.png";

export default function Activities() {
  return (
    <section className="mt-6">
      <h3 className="font-bold text-base">فعالیت شرکت</h3>
      <ul className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2 [&>*]:flex [&>*]:justify-between [&>*]:items-center [&>*]:gap-3 [&>*:nth-child(odd)]:flex-row-reverse [&>*:nth-child(even)]:flex-row">
        <li className="rounded-[20px] border border-[#CCCCCC] py-6 px-4 text-[10px] lg:text-[16px]">
          <p>اجراي كاليبراسيون و كنترل كيفيت تجهيزات پزشکی</p>
          <Image className="lg:w-24" src={XrayImage} alt="xray icon" />
        </li>
        <li className="rounded-[20px] border border-[#CCCCCC] py-6 px-4 text-[10px] lg:text-[16px]">
          <p>كنترل كيفيت سيستم هاي تصويربرداري پزشکی</p>
          <Image className="lg:w-24" src={ComputerImage} alt="computer image" />
        </li>
        <li className="rounded-[20px] border border-[#CCCCCC] py-6 px-4 text-[10px] lg:text-[16px]">
          <p>
            اجرای آزمون های کنترل کیفیت و کالیبراسیون دستگاه های اندازه گیری و
            ابزاردقیق. (نیرو، فشار، دما، جرم و...)
          </p>
          <Image className="lg:w-24" src={PlantImage} alt="xray icon" />
        </li>
        <li className="rounded-[20px] border border-[#CCCCCC] py-6 px-4 text-[10px] lg:text-[16px]">
          <p>خدمات احراز کیفیت فرایندها (Qualification and Validation)</p>
          <Image className="lg:w-24" src={MedalIcon} alt="xray icon" />
        </li>
      </ul>
    </section>
  );
}
