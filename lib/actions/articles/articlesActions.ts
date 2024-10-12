"use server";

import { baseFetch } from "@/lib/baseFetch/baseFetch";
import { ArticlesSearchParams } from "@/lib/interfaces/articles/ArticlesSearchParams";
import { serializeParams } from "@/lib/serializeParams/serializeParams";

const apiURL: string = process.env.API_URL!;

const getArticles = async (searchParams: ArticlesSearchParams) => {
  const endpoint = "article/getList";
  const method = "GET";
  const query = serializeParams(searchParams);
  return await baseFetch(apiURL, endpoint, method, null, query);
};
const getArticleById = async (articleId: string) => {
  const endpoint = `article/getById/${articleId}`;
  const method = "GET";
  // const query = serializeParams({ labStatus: 1 });
  return await baseFetch(apiURL, endpoint, method, null, null);
};

export { getArticles, getArticleById };
