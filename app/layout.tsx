import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const iranSans = localFont({
  src: "../public/fonts/woff2/IRANSansWeb(FaNum)_Medium.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "پرشیا آزما سیستم",
  description:
    "شركت پرشيا آزما سيستم در زمینه ارائه خدمات تخصصي كاليبراسيون و ابزار دقيق و پشتيباني تجهيزات پزشكي، به عنوان آزمايشگاه آزمون و كاليبراسيون تائيد صلاحيت شده در استان فارس فعالیت می نماید. خدمات: - اجراي كنترل كيفي و كاليبراسيون تجهيزات پزشكي، آزمايشگاهي و ابزار دقيق در محل مراكز - مشاوره و اجراي كليه استانداردهاي مديريتي تا اخذ گواهينامه از شركتهاي معتبر دنيا - مشاوره و اجرا در زمينه تهيه و خريد تجهيزات پزشكي - مشاوره و اجرا در زمينه نصب و راه اندازي تجهيزات تخصصي پزشكي، دندانپزشكي و آزمايشگاهي - مشاوره و ارائه طرحهاي توجيهي و اقتصادي در راستاي توسعه مراكز درماني",
  icons: {
    icon: "/images/logo.png",
  },
  keywords: [
    "پرشیا آزما سیستم",
    "خدمات کالیبراسیون",
    "تجهیزات پزشکی",
    "تجهیزات آزمایشگاهی",
    "آزمایشگاه",
    "کنترل کیفی",
    "کالیبراسیون تجهیزات پزشکی",
    "مشاوره تجهیزات پزشکی",
  ],
  authors: [{ name: "Amirhosein Tavakoli" }],
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
