import { getProducts } from "@/lib/actions/products/productsActions";
import ProductCard from "./product-card";
import { ProductsSearchParams } from "@/lib/interfaces/products/ProductsSearchParams";
import { FetchResposne } from "@/lib/interfaces/fetch/FetchResponse";
import { ProductViewModel } from "@/lib/interfaces/products/ProductViewModel";
import ProductsPagination from "./products-pagination";
import { Provider } from "@/lib/interfaces/general-types";

interface Prop {
  searchParams: ProductsSearchParams;
  provider: Provider;
}

export default async function ProductsList({ searchParams, provider }: Prop) {
  const {
    count,
    message,
    ok,
    res: products,
    status,
  }: FetchResposne<ProductViewModel[]> = await getProducts({
    itemPerPage: 18,
    currentPage: 1,
    ...searchParams,
    productStatus: 2,
    provider: provider,
  });

  return (
    <>
      <ul className="mt-6 grid grid-cols-2 lg:grid-cols-6 gap-4">
        {products &&
          products.map((product: ProductViewModel) => (
            <ProductCard {...product} key={product.id} />
          ))}
      </ul>

      {products && count && count > 18 && (
        <ProductsPagination productsCount={count} />
      )}
    </>
  );
}
