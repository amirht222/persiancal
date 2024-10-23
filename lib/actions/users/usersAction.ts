"use server";

import { baseFetch } from "@/lib/baseFetch/baseFetch";
import { FetchResposne } from "@/lib/interfaces/fetch/FetchResponse";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const apiURL: string = process.env.API_URL!;

const getUserInfo = async () => {
  const endpoint = "user/getByUsername";
  const method = "GET";
  const token = cookies().get("token");
  const response = await baseFetch(apiURL, endpoint, method);
  if (response.status === "403") {
    // cookies().delete("jwt");
    // cookies().delete("token");
    // redirect("/");
  }
  return { authorized: !!token, ...response };
};

export { getUserInfo };
