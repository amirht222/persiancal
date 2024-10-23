import { ProductViewModel } from "@/lib/interfaces/products/ProductViewModel";
import PersiaLogo from "@/public/images/logo.png";

interface Prop {
  product: ProductViewModel;
}
const apiURL: string = process.env.API_URL!;
export default function ProductCard({
  productImages,
  createdAt,
  description,
  id,
  productStatus,
  title,
  updatedAt,
}: ProductViewModel) {
  return (
    <li className="card bg-base-100 border border-[#DCDCDC]">
      <figure>
        <img
          src={
            productImages.length > 0
              ? `${apiURL}/${productImages[0]?.imageUrl}`
              : PersiaLogo.src
          }
          className={`w-full h-36 ${
            productImages.length > 0 ? "object-cover" : "object-contain"
          }`}
          alt={title}
        />
      </figure>
      <div className="card-body items-center text-center p-4">
        <h4 className="card-title font-normal text-[#6B6B6B] text-base">
          {title}
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
