import ProductsHeader from "@/components/products/header";
import ProductsList from "@/components/products/products-list";
import { IoIosSearch } from "react-icons/io";

export default function Productspage() {
  return (
    <div className="container mx-auto px-6">
      <ProductsHeader />
      <ProductsList />
    </div>
  );
}
