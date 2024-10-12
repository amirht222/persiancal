import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">404 - یافت نشد!</h1>
      <p className="mt-4">صفحه مورد نظر شما وجود ندارد.</p>
      <Link className="btn btn-primary text-white mt-4" href="/">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
