import { CertificateViewModel } from "@/lib/interfaces/certificates/CertificateViewModel";
const apiURL: string = process.env.API_URL!;

interface Props {
  certifications?: CertificateViewModel[];
}

export default function CertificatesList(props: Props) {
  if (props.certifications?.length === 0)
    return <h3 className="mt-6 font-extrabold">تاییدیه ای یافت نشد!</h3>;

  return (
    <ul className="space-y-6 mt-6">
      {props.certifications?.map((certification) => (
        <li key={certification.id}>
          <a
            className="btn btn-primary text-white"
            download={`${apiURL}/${certification.filePath}`}
            href={`${apiURL}/${certification.filePath}`}
          >
            دانلود فایل {certification.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
