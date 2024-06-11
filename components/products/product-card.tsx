import Image from "next/image";

export default function ProductCard() {
  return (
    <li className="card bg-base-100 border border-[#DCDCDC]">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="نام دستگاه"
        />
      </figure>
      <div className="card-body items-center text-center p-4">
        <h4 className="card-title font-normal text-[#6B6B6B] text-base">
          دستگاه کالیبره
        </h4>
        <div className="card-actions mt-4">
          <button className="btn btn-primary text-white text-xs font-normal min-h-fit h-8">
            تماس بگیرید
          </button>
        </div>
      </div>
    </li>
  );
}
