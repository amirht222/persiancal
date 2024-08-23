"use server";

import { baseFetch } from "@/lib/baseFetch/baseFetch";
import { serializeParams } from "@/lib/serializeParams/serializeParams";

const apiURL: string = process.env.API_URL!;

const sendFeedback = async (feedbackData: any) => {
  const endpoint = `feedback`;
  const method = "POST";
  // const query = serializeParams(searchParams);
  return await baseFetch(apiURL, endpoint, method, feedbackData, null);
};

export { sendFeedback };
