import { FetchResposne } from "@/lib/interfaces/fetch/FetchResponse";
import { cookies } from "next/headers";
import { cookieParser } from "../cookies/cookieParser";



export const baseFetch = async(Url: string  ,endpoint: string, method: string = "GET", model: any = null, query: (string | null) = '') => {
  const cookieStore = cookies()
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const options: RequestInit = {
    method,
    credentials: 'include',
    headers,
    body:  method !== "GET" && model ? JSON.stringify(model) : null,
  }

  try {
    const response = await fetch(`${Url}/${endpoint}?${query}`, options);
    const { message, data: res , count } = await response.json();
    if(response.ok){
      const responseCookie = response.headers.getSetCookie();
      if(responseCookie.length){
        responseCookie.map(async(item) => {
          const cookie = await cookieParser(item);
          if(cookie) {
            cookies().set({
              name: cookie.key,
              value: cookie.value,
              httpOnly: cookie.httpOnly,
              path: '/',
              secure: true
            }); 
          }
        })
      }
    }
    const result : FetchResposne = {message, res, count, ok: response.ok, status: response.status.toString()}
    return result;

  } catch (error) {
    console.error('Error:', error);
    const result : FetchResposne = {message: String(error), res:null, ok:false, status: "500"}
    return result;
  }
}
