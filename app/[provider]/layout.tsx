import Footer from "@/components/footer/Footer";
import Header from "@/components/header/header";
import Spinner from "@/components/loading";
import { Provider } from "@/lib/interfaces/general-types";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default function ProviderLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { provider: Provider };
}>) {
  if (params.provider !== "persia" && params.provider !== "datis") {
    redirect("/");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header provider={params.provider} />
      <main className="grow my-6 min-h-[50vh]">{children}</main>
      <Suspense fallback={<Spinner />}>
        <Footer provider={params.provider} />
      </Suspense>
    </div>
  );
}
