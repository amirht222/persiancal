import Footer from "@/components/footer/Footer";
import Header from "@/components/header/header";
import Spinner from "@/components/loading";
import { Provider } from "@/lib/interfaces/general-types";
import { Suspense } from "react";

export default function ProviderLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { provider: Provider };
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header provider={params.provider} />
      <main className="grow my-6">{children}</main>
      <Suspense fallback={<Spinner />}>
        <Footer provider={params.provider} />
      </Suspense>
    </div>
  );
}
