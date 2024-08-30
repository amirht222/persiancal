"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";
import { IoIosSearch } from "react-icons/io";

export default function ProductsHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const searchBtnClickHandler = () => {
    const inputValue = inputRef.current?.value;
    if (!inputValue) return;
    const queryStr = `?title=${encodeURIComponent(inputValue)}`;
    router.push(pathname + queryStr);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      searchBtnClickHandler();
    }
  };

  return (
    <div className="flex justify-between items-center">
      <h2 className="font-bold">محصولات</h2>
      <label className="h-8 input input-primary input-bordered flex items-center gap-2">
        <IoIosSearch
          className="text-primary"
          onClick={searchBtnClickHandler}
        />
        <input
          type="text"
          className="grow"
          placeholder="جستجو کنید..."
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
      </label>
    </div>
  );
}
