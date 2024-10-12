import Image from "next/image";
import HeroImage from "@/public/images/persia-hero.png";
import { ProviderViewModel } from "@/lib/interfaces/providers/ProviderViewModel";
import DetailsDialog from "./details-dialog";
import ShowMoreButton from "./show-more-button";
import { providerTitleMapper } from "@/lib/utils";

interface Props {
  providerData: ProviderViewModel;
}

export default function ProviderHero(props: Props) {
  return (
    <>
      <div className="flex justify-between items-center gap-4 mt-4 lg:mt-6">
        <div>
          <h2 className="font-bold text-2xl lg:text-[50px]">
            معرفی {providerTitleMapper(props.providerData.providerTitle)}
          </h2>
          <p className="text-[10px] lg:text-base mt-4 lg:mt-[60px] text-justify">
            {props.providerData.aboutUs}
          </p>
          <ShowMoreButton />
        </div>
        <Image
          src={HeroImage}
          alt="hero image"
          priority
          className="object-cover w-[400px] h-44 lg:h-auto lg:mx-14"
        />
      </div>
      <DetailsDialog providerData={props.providerData} />
    </>
  );
}
