"use server";

import { baseFetch } from "@/lib/baseFetch/baseFetch";
import { FetchResposne } from "@/lib/interfaces/fetch/FetchResponse";
import { cookies } from "next/headers";
const apiURL: string = process.env.API_URL!;

const login = async ({
  password,
  username,
}: {
  password: string;
  username: string;
}) => {
  if (!password || !username) {
    const response: FetchResposne<any> = { ok: false };
    return response;
  }
  const endpoint = "auth/login";
  const method = "GET";
  return await baseFetch(apiURL, endpoint, method, { username, password });
};
const logout = () => {};
const getUserInfo = () => {
  const cookie = cookies().get("token");
};
