"use server";

import { baseFetch } from "@/lib/baseFetch/baseFetch";
import { FetchResposne } from "@/lib/interfaces/fetch/FetchResponse";
import { cookies } from "next/headers";

const apiURL: string = process.env.API_URL!;

const getUserInfo = async () => {
  const endpoint = "user/getByUsername";
  const method = "GET";
  const token = cookies().get("token");
  const response = await baseFetch(apiURL, endpoint, method);
  return { authorized: !!token, ...response };
};

export { getUserInfo };
