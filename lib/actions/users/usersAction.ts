"use server";

import { baseFetch } from "@/lib/baseFetch/baseFetch";
import { FetchResposne } from "@/lib/interfaces/fetch/FetchResponse";

const apiURL: string = process.env.API_URL!;

const getUserInfo = async () => {
  const endpoint = "user/getByUsername";
  const method = "GET";
  return await baseFetch(apiURL, endpoint, method);
};

export { getUserInfo };
