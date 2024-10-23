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
      <div className="container w-full  md:w-2/3 mx-auto mt-4 lg:mt-12">
        <h2 className="font-bold text-2xl lg:text-[50px] text-center">
          معرفی {providerTitleMapper(props.providerData.providerTitle)}
        </h2>
        {/* <p className="">
          {props.providerData.aboutUs}
        </p> */}
        <div
          className="text-[10px] lg:text-base mt-4 lg:mt-[60px]"
          dangerouslySetInnerHTML={{
            __html: (props.providerData as any).aboutUs,
          }}
        />
        <div className="flex justify-center items-center">
          <ShowMoreButton />
        </div>
        {/* <Image
          src={HeroImage}
          alt="hero image"
          priority
          className="object-cover w-[400px] h-44 lg:h-auto lg:mx-14"
        /> */}
      </div>
      <DetailsDialog providerData={props.providerData} />
    </>
  );
}
