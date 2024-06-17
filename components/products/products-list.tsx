import { getProducts } from "@/lib/actions/products/productsActions";
import ProductCard from "./product-card";
import { ProductsSearchParams } from "@/lib/interfaces/products/ProductsSearchParams";
import { FetchResposne } from "@/lib/interfaces/fetch/FetchResponse";
import { ProductViewModel } from "@/lib/interfaces/products/ProductViewModel";

interface Prop {
  searchParams: ProductsSearchParams;
}

export default async function ProductsList({ searchParams }: Prop) {
  // const {
  //   count,
  //   message,
  //   ok,
  //   res: products,
  //   status,
  // }: FetchResposne<ProductViewModel[]> = await getProducts(searchParams);

  return (
    <ul className="mt-6 grid grid-cols-2 lg:grid-cols-6 gap-4">
      <li>test</li>
      {/* {products &&
        products.map((product: ProductViewModel) => (
          <ProductCard {...product} key={product.id} />
        ))} */}
    </ul>
  );
}
