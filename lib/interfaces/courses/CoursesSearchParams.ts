import { BaseSearchParams } from "../fetch/BaseSearchParams";

export interface CoursesSearchParams extends BaseSearchParams {
  title?: string;
  provider?: string;
  courseStatus?: number;
}
