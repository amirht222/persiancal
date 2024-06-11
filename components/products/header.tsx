import { IoIosSearch } from "react-icons/io";

export default function ProductsHeader() {
  return (
    <div className="flex justify-between items-center">
      <h2 className="font-bold">محصولات</h2>
      <label className="h-8 input input-primary input-bordered flex items-center gap-2 ">
        <IoIosSearch className="text-primary" />
        <input type="text" className="grow" placeholder="جستجو کنید..." />
      </label>
    </div>
  );
}
