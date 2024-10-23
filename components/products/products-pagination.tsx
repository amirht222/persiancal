"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  productsCount: number;
}
const itemPerPage = 18;

export default function ProductsPagination({ productsCount }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentPage = Number(searchParams.get("currentPage")) || 1;
  const pageCount = Math.ceil(productsCount / itemPerPage);
  const pageClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const clickedPage = e.currentTarget.getAttribute("data-pagenumber");
    let query = "?";
    if (searchParams.size) {
      searchParams.forEach((value, key) => {
        if (!(key === "currentPage" || key === "itemPerPage"))
          query += `${key}=${value}&`;
      });
    }
    query += `currentPage=${clickedPage}&itemPerPage=${itemPerPage}`;
    router.push(pathname + query);
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <div className="join">
        {[...Array(pageCount)].map((button, index) => (
          <button
            data-pageNumber={index + 1}
            onClick={pageClickHandler}
            key={index + "_pagination_button"}
            className={`join-item btn btn-primary text-white ${
              index + 1 === currentPage && "btn-active"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
