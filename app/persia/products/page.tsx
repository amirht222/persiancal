import ProductsHeader from "@/components/products/header";
import ProductsList from "@/components/products/products-list";
import { ProductsSearchParams } from "@/lib/interfaces/products/ProductsSearchParams";
import { Suspense } from "react";
import { IoIosSearch } from "react-icons/io";

interface Prop {
  searchParams: ProductsSearchParams;
}

export default function Productspage({ searchParams }: Prop) {
  return (
    <div className="container mx-auto px-6">
      <ProductsHeader />
      <Suspense>
        <ProductsList searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
