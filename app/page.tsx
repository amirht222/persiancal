import LinksSection from "@/components/Intro/links-section";
import Image from "next/image";
import MobileHeaderRec from "@/public/images/mobile-intro-header-bg.png";
import MobileHeaderSystem from "@/public/images/mobile-intro-header-system.png";
import DesktopImage from "@/public/images/desktop-sidebar-bg.png";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row lg:items-center lg:justify-center lg:overflow-hidden">
      <div className="hidden lg:block h-screen grow">
        <Image
          className="w-full h-[120%] object-cover scale-125 translate-x-40"
          src={DesktopImage}
          alt="mobile header background"
        />
      </div>
      <div className="lg:hidden relative flex justify-center max-h-48">
        <Image
          className="w-full"
          src={MobileHeaderRec}
          alt="mobile header background"
        />
        <Image
          className="w-2/3 max-w-72 md:max-w-90 absolute -bottom-10"
          src={MobileHeaderSystem}
          alt="mobile header system"
        />
      </div>
      <div className="grow">
        <p className="mt-10 text-center lg:text-xl">
          برای ورود به هر مجموعه روی آن کلیک کنید.
        </p>
        <div className="mt-4">
          <LinksSection />
        </div>
      </div>
    </main>
  );
}
