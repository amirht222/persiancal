import { getCertificates } from "@/lib/actions/certificates/certificatesActions";
import { CertificateViewModel } from "@/lib/interfaces/certificates/CertificateViewModel";
import { FetchResposne } from "@/lib/interfaces/fetch/FetchResponse";
import { Provider } from "@/lib/interfaces/general-types";
const apiURL: string = process.env.API_URL!;

interface Props {
  // certifications?: CertificateViewModel[];
  provider: Provider;
}

export default async function CertificatesList({ provider }: Props) {
  const {
    count,
    message,
    ok,
    res: certificates,
    status,
  }: FetchResposne<CertificateViewModel[]> = await getCertificates({
    provider: provider,
  });

  if (certificates?.length === 0)
    return <h3 className="mt-6 font-extrabold">تاییدیه ای یافت نشد!</h3>;

  return (
    <ul className="space-y-6 mt-6">
      {certificates?.map((certification) => (
        <li key={certification.id}>
          <p>عنوان تاییدیه: {certification.title}</p>
          <p className="my-2">توضیحات تاییدیه: {certification.description}</p>
          {certification.filePath?.split(".").pop() === "pdf" ? (
            <a
              className="btn btn-primary text-white"
              download={`${apiURL}/${certification.filePath}`}
              href={`${apiURL}/${certification.filePath}`}
            >
              دانلود فایل {certification.title}
            </a>
          ) : (
            <img
              style={{ width: "100%", height: "300px", objectFit: "contain" }}
              src={`${apiURL}/${certification.filePath}`}
              alt="certification image"
            />
          )}
          <div className="divider divider-primary"></div>
        </li>
      ))}
    </ul>
  );
}
