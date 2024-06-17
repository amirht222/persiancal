import Image from "next/image";
import HeroImage from "@/public/images/persia-hero.png";
import ShowMoreButton from "./show-more-button";
import DetailsDialog from "./details-dialog";

export default function PersiaHero() {
  return (
    <>
      <div className="flex justify-between items-center gap-4 mt-4 lg:mt-6">
        <div>
          <h2 className="font-bold text-2xl lg:text-[50px]">
            معرفی داتیس فناور
          </h2>
          <p className="text-[10px] lg:text-base mt-4 lg:mt-[60px] text-justify">
            شرکت داتیس فناور برتر با رویکردی متفاوت در ارائه خدمات تخصصی نگهداشت
            تجهیزات پزشكي و آزمایشگاهی و پشتیبانی فنی این تجهیزات با بهره گیری
            از تجربه و تخصص اساتید بلندپایه کشور در جایگاه مدیریتی و آموزشی و
            بکارگیری پرسنل مجرب و متخصص در جایگاه کارشناسی و اجرایی به صورت خاص
            اقدام به فعالیت در استان فارس نموده است. در چند سال اخیر و باتوجه به
            فراگیری فرایندهای کنترل کیفیت، تضمین کیفیت نتایج و صحه‌گذاری روش‌های
            آزمون در آزمایشگاه های تخصصی، این شرکت براساس توانمندی های فنی خود و
            عقد قراردادهای همکاری ملی و بین المللی با شرکتهای معتبر نسبت به تهیه
            و ارائه مواد مرجع (RM & CRM) که نقش بسیار مهمی در توسعه روش های
            آنالیزی دارند اقدام نموده است. این مواد در فرایندهای ارزیابی صحت
            نتایج تجهیزات اندازه گیری، اعتبارسنجی روش های آنالیزی، تخمین عدم
            قطعیت اندازه گیری، اهداف کنترل و تضمین کیفیت و مقایسه نتایج بین
            آزمایشگاهی نقش کاربردی زیادی دارند.
          </p>
          <ShowMoreButton />
        </div>
        <Image
          src={HeroImage}
          alt="hero image"
          priority
          className="object-cover w-[200px] h-44 lg:h-auto lg:w-[1000px] lg:mx-14"
        />
      </div>
      <DetailsDialog />
    </>
  );
}
