"use server";

import { baseFetch } from "@/lib/baseFetch/baseFetch";
import { serializeParams } from "@/lib/serializeParams/serializeParams";

const apiURL: string = process.env.API_URL!;

const getLabs = async () => {
  const endpoint = "lab/getList";
  const method = "GET";
  const query = serializeParams({ labStatus: 1 });
  return await baseFetch(apiURL, endpoint, method, null, query);
};
const getLabById = async (labId: string) => {
  const endpoint = `lab/getById/${labId}`;
  const method = "GET";
  // const query = serializeParams({ labStatus: 1 });
  return await baseFetch(apiURL, endpoint, method, null, null);
};

export { getLabs, getLabById };
