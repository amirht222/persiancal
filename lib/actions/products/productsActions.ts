"use server";

import { baseFetch } from "@/lib/baseFetch/baseFetch";
import { ProductsSearchParams } from "@/lib/interfaces/products/ProductsSearchParams";
import { serializeParams } from "@/lib/serializeParams/serializeParams";

const apiURL: string = process.env.API_URL!;

const getProducts = async (searchParams: ProductsSearchParams) => {
  const endpoint = "product/getList";
  const method = "GET";
  const query = serializeParams(searchParams);
  return await baseFetch(apiURL, endpoint, method, null, query);
};
const getProductById = async (productId: string) => {
  const endpoint = `product/getById/${productId}`;
  const method = "GET";
  // const query = serializeParams({ labStatus: 1 });
  return await baseFetch(apiURL, endpoint, method, null, null);
};

export { getProducts,getProductById };
