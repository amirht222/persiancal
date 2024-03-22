import LinksSection from "@/components/Intro/links-section";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <div>
        <h2 className="text-2xl text-center p-4 md:p-0 md:-translate-y-10">
          برای ورود به هر مجموعه روی آن کلیک کنید
        </h2>
        <LinksSection />
      </div>
    </main>
  );
}
