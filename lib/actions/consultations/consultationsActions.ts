"use server";

import { baseFetch } from "@/lib/baseFetch/baseFetch";
import { ConsultationsSearchParams } from "@/lib/interfaces/consultations/ConsultationsSearchParams";
import { serializeParams } from "@/lib/serializeParams/serializeParams";

const apiURL: string = process.env.API_URL!;

const getConsultations = async (searchParams: ConsultationsSearchParams) => {
  const endpoint = "consultation/getList";
  const method = "GET";
  const query = serializeParams(searchParams);
  return await baseFetch(apiURL, endpoint, method, null, query);
};
const getConsultationById = async (consultationId: string) => {
  const endpoint = `consultation/getById/${consultationId}`;
  const method = "GET";
  // const query = serializeParams({ labStatus: 1 });
  return await baseFetch(apiURL, endpoint, method, null, null);
};

export { getConsultations, getConsultationById };
