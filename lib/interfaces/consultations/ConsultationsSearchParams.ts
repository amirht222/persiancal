import { BaseSearchParams } from "../fetch/BaseSearchParams";

export interface ConsultationsSearchParams extends BaseSearchParams {
  title?: string;
  provider?: string;
  consultationStatus?: number;
}
