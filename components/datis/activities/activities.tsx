import Image from "next/image";
import XrayImage from "@/public/images/activities/x-ray.png";
import ComputerImage from "@/public/images/activities/computer.png";
import PlantImage from "@/public/images/activities/plant.png";
import MedalIcon from "@/public/images/activities/medal.png";
import MicroscopeIcon from "@/public/images/activities/microscope.png";
import ELearningIcon from "@/public/images/activities/elearning.png";
import InterviewIcon from "@/public/images/activities/interview.png";
import Sphygmomanometer from "@/public/images/activities/sphygmomanometer.png";
import LabEquipmentImage from "@/public/images/activities/lab-equipment.png";
import ClassroomIcon from "@/public/images/activities/classroom.png";

export default function DatisActivities() {
  return (
    <section className="my-8 lg:my-6">
      <h3 className="font-bold text-xl lg:text-3xl">فعالیت شرکت</h3>
      <ul className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2 [&>*]:flex [&>*]:justify-between [&>*]:items-center [&>*]:gap-3 [&>*:nth-child(odd)]:flex-row-reverse [&>*:nth-child(even)]:flex-row lg:[&>*:nth-child(odd)]:flex-row *:">
        <li className="rounded-[20px] border border-[#CCCCCC] py-6 px-4 text-[10px] lg:text-[16px]">
          <p>ارائه انواع مواد مرجع و استاندارد (RM & CRM)</p>
          <Image
            className="w-16 h-16 lg:w-24 lg:h-24 object-cover"
            src={XrayImage}
            alt="xray icon"
          />
        </li>
        <li className="rounded-[20px] border border-[#CCCCCC] py-6 px-4 text-[10px] lg:text-[16px]">
          <p>تعمیر و نگهداری تجهیزات پزشکی، دندانپزشکی و آزمایشگاهی</p>
          <Image
            className="w-16 h-16 lg:w-24 lg:h-24 object-cover"
            src={ComputerImage}
            alt="computer image"
          />
        </li>
        <li className="rounded-[20px] border border-[#CCCCCC] py-6 px-4 text-[10px] lg:text-[16px]">
          <p>طراحی و ساخت شبیه سازهای آموزشی و تخصصی پزشکی</p>
          <Image
            className="w-16 h-16 lg:w-24 lg:h-24 object-cover"
            src={PlantImage}
            alt="xray icon"
          />
        </li>
        <li className="rounded-[20px] border border-[#CCCCCC] py-6 px-4 text-[10px] lg:text-[16px]">
          <p>مشاوره فنی و کارشناسی در خصوص تهیه تجهیزات پزشکی، آزمایشگاهی</p>
          <Image
            className="w-16 h-16 lg:w-24 lg:h-24 object-cover"
            src={MedalIcon}
            alt="xray icon"
          />
        </li>
        <li className="rounded-[20px] border border-[#CCCCCC] py-6 px-4 text-[10px] lg:text-[16px]">
          <p>
            مشاوره و اجرا در زمینه نصب و راه اندازی تجهیزات پزشکی، دندانپزشکی و
            آزمایشگاهی
          </p>
          <Image
            className="w-16 h-16 lg:w-24 lg:h-24 object-cover"
            src={MicroscopeIcon}
            alt="microscope icon"
          />
        </li>
        <li className="rounded-[20px] border border-[#CCCCCC] py-6 px-4 text-[10px] lg:text-[16px]">
          <p>
            مشاوره و ارائه طرح های توجیهی و اقتصادی در راستای توسعه مراکز درمانی
            و بیمارستان ها.
          </p>
          <Image
            className="w-16 h-16 lg:w-24 lg:h-24 object-cover"
            src={ELearningIcon}
            alt="elearning icon"
          />
        </li>
        <li className="rounded-[20px] border border-[#CCCCCC] py-6 px-4 text-[10px] lg:text-[16px]">
          <p>
            مشاوره و اجرا در خصوص ایجاد و راه اندازه گیری آزمایشگاه های مرجع و
            کالیبراسیون
          </p>
          <Image
            className="w-16 h-16 lg:w-24 lg:h-24 object-cover"
            src={InterviewIcon}
            alt="interview icon"
          />
        </li>
        <li className="rounded-[20px] border border-[#CCCCCC] py-6 px-4 text-[10px] lg:text-[16px]">
          <p>
            برگزاری دوره های آموزشی تخصصي اصول بازرسی و مدیریت نگهداشت تجهیزات
            پزشکی، دندانپزشکی و آزمایشگاهی.
          </p>
          <Image
            className="w-16 h-16 lg:w-24 lg:h-24 object-cover"
            src={Sphygmomanometer}
            alt="sphygmomanometer icon"
          />
        </li>
      </ul>
    </section>
  );
}
