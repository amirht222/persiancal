"use server";

import { baseFetch } from "@/lib/baseFetch/baseFetch";
import { CertificatesSearchParams } from "@/lib/interfaces/certificates/CertificatesSearchParams";
import { serializeParams } from "@/lib/serializeParams/serializeParams";

const apiURL: string = process.env.API_URL!;

const getCertificates = async (searchParams: CertificatesSearchParams) => {
  const endpoint = "certificate/getList";
  const method = "GET";
  const query = serializeParams(searchParams);
  return await baseFetch(apiURL, endpoint, method, null, query);
};

export { getCertificates };
