"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LegacyRef, MutableRefObject, useRef } from "react";
import { IoIosSearch } from "react-icons/io";

export default function ProductsHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const searchBtnClickHandler = () => {
    const inputValue = inputRef.current?.value;
    if (!inputValue) return;
    const queryStr = `?name=${encodeURIComponent(inputValue)}`;
    router.push(pathname + queryStr);
  };
  return (
    <div className="flex justify-between items-center">
      <h2 className="font-bold">محصولات</h2>
      <label className="h-8 input input-primary input-bordered flex items-center gap-2 ">
        <IoIosSearch className="text-primary" onClick={searchBtnClickHandler} />
        <input
          type="text"
          className="grow"
          placeholder="جستجو کنید..."
          ref={inputRef}
        />
      </label>
    </div>
  );
}
