export interface FetchResposne<Type> {
  ok?: boolean;
  count?: number;
  message?: string;
  res?: Type;
  status?: string;
}
