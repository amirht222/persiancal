import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

// const inter = Inter({ subsets: ["latin"] });

const iranSans = localFont({
  src: "./fonts/woff2/IRANSansWeb_Medium.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "پرشیا آزما سیستم",
  description:
    "شركت پرشيا آزما سيستم در زمینه ارائه خدمات تخصصي كاليبراسيون و ابزار دقيق و پشتيباني تجهيزات پزشكي، به عنوان آزمايشگاه آزمون و كاليبراسيون تائيد صلاحيت شده در استان فارس فعالیت می نماید. خدمات: - اجراي كنترل كيفي و كاليبراسيون تجهيزات پزشكي، آزمايشگاهي و ابزار دقيق در محل مراكز - مشاوره و اجراي كليه استانداردهاي مديريتي تا اخذ گواهينامه از شركتهاي معتبر دنيا - مشاوره و اجرا در زمينه تهيه و خريد تجهيزات پزشكي - مشاوره و اجرا در زمينه نصب و راه اندازي تجهيزات تخصصي پزشكي، دندانپزشكي و آزمايشگاهي - مشاوره و ارائه طرحهاي توجيهي و اقتصادي در راستاي توسعه مراكز درماني",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={iranSans.className}>{children}</body>
    </html>
  );
}
