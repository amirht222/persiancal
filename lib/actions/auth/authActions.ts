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
  const method = "POST";
  const response = await baseFetch(apiURL, endpoint, method, {
    username,
    password,
  });
  if (response.ok) {
    cookies().set({
      name: "token",
      value: response.res,
      httpOnly: true,
      path: "/",
      secure: true,
    });
  }
  return response;
};
const logout = () => {};
const getUserInfo = () => {
  const cookie = cookies().get("token");
};

export { login };
