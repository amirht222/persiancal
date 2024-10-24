"use server";

import { baseFetch } from "@/lib/baseFetch/baseFetch";
import { CoursesSearchParams } from "@/lib/interfaces/courses/CoursesSearchParams";
import { serializeParams } from "@/lib/serializeParams/serializeParams";

const apiURL: string = process.env.API_URL!;

const getCourses = async (searchParams: CoursesSearchParams) => {
  const endpoint = "course/getList";
  const method = "GET";
  const query = serializeParams(searchParams);
  return await baseFetch(apiURL, endpoint, method, null, query);
};
const getCourseById = async (courseId: string) => {
  const endpoint = `course/getById/${courseId}`;
  const method = "GET";
  // const query = serializeParams({ labStatus: 1 });
  return await baseFetch(apiURL, endpoint, method, null, null);
};

export { getCourses, getCourseById };
