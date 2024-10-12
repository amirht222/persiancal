import { BaseSearchParams } from "../fetch/BaseSearchParams";

export interface CertificatesSearchParams extends BaseSearchParams {
  title?: string;
  provider?: string;
}
