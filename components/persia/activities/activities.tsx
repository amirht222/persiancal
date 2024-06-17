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

export default function PersiaActivities() {
  return (
    <section className="my-8 lg:my-4">
      <h3 className="font-bold text-xl lg:text-3xl">فعالیت شرکت</h3>
      <ul className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2 [&>*]:flex [&>*]:justify-between [&>*]:items-center [&>*]:gap-3 [&>*:nth-child(odd)]:flex-row-reverse [&>*:nth-child(even)]:flex-row lg:[&>*:nth-child(odd)]:flex-row *:">
        <li className="rounded-[20px] border border-[#CCCCCC] py-6 px-4 text-[10px] lg:text-[16px]">
          <p>اجراي كاليبراسيون و كنترل كيفيت تجهيزات پزشکی</p>
          <Image
            className="w-16 h-16 lg:w-24 lg:h-24 object-cover"
            src={XrayImage}
            alt="xray icon"
          />
        </li>
        <li className="rounded-[20px] border border-[#CCCCCC] py-6 px-4 text-[10px] lg:text-[16px]">
          <p>كنترل كيفيت سيستم هاي تصويربرداري پزشکی</p>
          <Image
            className="w-16 h-16 lg:w-24 lg:h-24 object-cover"
            src={ComputerImage}
            alt="computer image"
          />
        </li>
        <li className="rounded-[20px] border border-[#CCCCCC] py-6 px-4 text-[10px] lg:text-[16px]">
          <p>
            اجرای آزمون های کنترل کیفیت و کالیبراسیون دستگاه های اندازه گیری و
            ابزاردقیق. (نیرو، فشار، دما، جرم و...)
          </p>
          <Image
            className="w-16 h-16 lg:w-24 lg:h-24 object-cover"
            src={PlantImage}
            alt="xray icon"
          />
        </li>
        <li className="rounded-[20px] border border-[#CCCCCC] py-6 px-4 text-[10px] lg:text-[16px]">
          <p>خدمات احراز کیفیت فرایندها (Qualification and Validation)</p>
          <Image
            className="w-16 h-16 lg:w-24 lg:h-24 object-cover"
            src={MedalIcon}
            alt="xray icon"
          />
        </li>
        <li className="rounded-[20px] border border-[#CCCCCC] py-6 px-4 text-[10px] lg:text-[16px]">
          <p>اجرای آزمون های کنترل کیفیت و کالیبراسیون تجهیزات آزمایشگاهی</p>
          <Image
            className="w-16 h-16 lg:w-24 lg:h-24 object-cover"
            src={MicroscopeIcon}
            alt="microscope icon"
          />
        </li>
        <li className="rounded-[20px] border border-[#CCCCCC] py-6 px-4 text-[10px] lg:text-[16px]">
          <p>
            برگزاری دوره های آموزشی تئوری و عملی تخصصي در مباحث اندازه شناسي و
            کالیبراسیون
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
            مشاوره فنی و کارشناسی در خصوص خرید تجهیزات پزشکی، آزمایشگاهی و تخصصی
          </p>
          <Image
            className="w-16 h-16 lg:w-24 lg:h-24 object-cover"
            src={Sphygmomanometer}
            alt="sphygmomanometer icon"
          />
        </li>
        <li className="rounded-[20px] border border-[#CCCCCC] py-6 px-4 text-[10px] lg:text-[16px]">
          <p>
            مشاوره و اجرا در خصوص ایجاد و راهبرد آزمایشگاه های مرجع و
            کالیبراسیون
          </p>
          <Image
            className="w-16 h-16 lg:w-24 lg:h-24 object-cover"
            src={LabEquipmentImage}
            alt="lab equipment icon"
          />
        </li>
        <li className="rounded-[20px] border border-[#CCCCCC] py-6 px-4 text-[10px] lg:text-[16px]">
          <p>
            برگزاری دوره های آموزشی تخصصي اصول بازرسی، مدیریت ریسک و مباحث
            اندازه شناسي و کالیبراسیون.
          </p>
          <Image
            className="w-16 h-16 lg:w-24 lg:h-24 object-cover"
            src={ClassroomIcon}
            alt="classroom"
          />
        </li>
      </ul>
    </section>
  );
}
