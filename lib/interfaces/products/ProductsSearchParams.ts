import { BaseSearchParams } from "../fetch/BaseSearchParams";

export interface ProductsSearchParams extends BaseSearchParams {
  name?: string;
}
