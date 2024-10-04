"use server";

import { baseFetch } from "@/lib/baseFetch/baseFetch";
import { FetchResposne } from "@/lib/interfaces/fetch/FetchResponse";

const apiURL: string = process.env.API_URL!;

const getUserInfo = async ({ username }: { username: string }) => {
  if (!username) {
    const response: FetchResposne<any> = { ok: false };
    return response;
  }
  const endpoint = "user/getByUsername/" + username;
  const method = "GET";
  return await baseFetch(apiURL, endpoint, method);
};

export { getUserInfo };
