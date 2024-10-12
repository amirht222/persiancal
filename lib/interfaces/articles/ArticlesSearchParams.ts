import { BaseSearchParams } from "../fetch/BaseSearchParams";

export interface ArticlesSearchParams extends BaseSearchParams {
  title?: string;
  provider?: string;
  articleStatus?: number;
}
