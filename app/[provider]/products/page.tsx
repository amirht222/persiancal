import Spinner from "@/components/loading";
import ProductsHeader from "@/components/products/header";
import ProductsList from "@/components/products/products-list";
import { Provider } from "@/lib/interfaces/general-types";
import { ProductsSearchParams } from "@/lib/interfaces/products/ProductsSearchParams";
import { Suspense } from "react";
import { IoIosSearch } from "react-icons/io";

interface Prop {
  searchParams: ProductsSearchParams;
  params: {
    provider: Provider;
  };
}

export default function Productspage({ params, searchParams }: Prop) {
  return (
    <div className="container mx-auto px-6">
      <ProductsHeader />
      <Suspense fallback={<Spinner />}>
        <ProductsList provider={params.provider} searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
