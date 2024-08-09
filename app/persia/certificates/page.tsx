import Image from "next/image";
import Standard1 from "@/public/certs/persia/standard 1-1.jpg";
import Standard2 from "@/public/certs/persia/standard 1-2.jpg";
import AtomicEnergy from "@/public/certs/persia/atomic-energy.jpg";

export default function CertificatesPage() {
  return (
    <div className="container mx-auto px-12 flex flex-col items-center">
      <Image className="w-1/2" src={Standard1} alt="standard 1 image" />
      <div className="divider divider-primary"></div>
      <Image className="w-1/2" src={Standard2} alt="standard 2s image" />
      <div className="divider divider-primary"></div>
      <Image className="w-1/2" src={AtomicEnergy} alt="atomic energy image" />
      <div className="divider divider-primary"></div>
      <a
        className="btn btn-primary text-white"
        download="/certs/persia/Medical_equipment_department.pdf"
        href="/certs/persia/Medical_equipment_department.pdf"
      >
        دانلود پی دی اف اداره تجهیزات پزشکی
      </a>
    </div>
  );
}
