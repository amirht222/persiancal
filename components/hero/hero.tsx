import Image from "next/image";
import HeroImage from "@/public/images/hero-image.png";

export default function Hero() {
  return (
    <div className="flex justify-between items-center gap-4 mt-4 lg:mt-[80px]">
      <div>
        <h2 className="font-bold text-2xl lg:text-[50px]">معرفی پرشیا آزما</h2>
        <p className="text-[10px] lg:text-base mt-4 lg:mt-[60px]">
          شرکت دانش بنیان پرشیا آزما سیستم با رویکردی متفاوت در ارائه خدمات
          تخصصی کالیبراسیون تجهیزات ابزاردقیق، پزشكي و آزمایشگاهی و پشتیبانی فنی
          تجهیزات پزشکی با بهره گیری از تجربه و تخصص اساتید بلندپایه کشور در
          جایگاه مدیریتی و آموزشی و بکارگیری پرسنل مجرب و متخصص در جایگاه
          کارشناسی و اجرایی با مجوز از سازمان ملی استاندارد ایران، اداره کل
          تجهیزات پزشکی وزارت بهداشت و سازمان انرژی اتمی ایران و تحت نظارت این
          مراجع به صورت خاص اقدام به فعالیت به عنوان آزمایشگاه آزمون و
          کالیبراسیون تائید صلاحیت شده در استان فارس نموده است.
        </p>
        <button className="py-2 px-4 bg-[#20AD95] rounded-[10px] text-white mt-4 lg:mt-6">
          جزییات بیشتر
        </button>
      </div>
      <Image
        src={HeroImage}
        alt="hero image"
        priority
        className="object-cover w-[200px] h-44 lg:h-auto lg:w-[1000px] lg:mx-14"
      />
    </div>
  );
}
