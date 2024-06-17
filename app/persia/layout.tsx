import Footer from "@/components/footer/Footer";
import Header from "@/components/header/header";

export default function PersiaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header companyName="PERSIA" />
      <main className="grow my-6">{children}</main>
      <Footer companyName="PERSIA" />
    </div>
  );
}
