"use server";

import { baseFetch } from "@/lib/baseFetch/baseFetch";
import { serializeParams } from "@/lib/serializeParams/serializeParams";

const apiURL: string = process.env.API_URL!;

const getProviders = async () => {
  const endpoint = "provider/getList";
  const method = "GET";
  //   const query = serializeParams({ labStatus: 1 });
  return await baseFetch(apiURL, endpoint, method, null, null);
};
const getProviderByTitle = async (providerTitle: string) => {
  const endpoint = `provider/getByTitle/${providerTitle}`;
  const method = "GET";
  // const query = serializeParams({ labStatus: 1 });
  return await baseFetch(apiURL, endpoint, method, null, null);
};

export { getProviders, getProviderByTitle };
