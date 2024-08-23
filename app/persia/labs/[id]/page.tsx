import { getLabById } from "@/lib/actions/labs/labsActions";
import { FetchResposne } from "@/lib/interfaces/fetch/FetchResponse";
import { LabViewModel } from "@/lib/interfaces/labs/LabViewModel";

export default async function LabPage({ params }: { params: { id: string } }) {
  const {
    count,
    message,
    ok,
    res: lab,
    status,
  }: FetchResposne<LabViewModel> = await getLabById(params.id);
  const apiURL: string = process.env.API_URL!;
  console.log(lab);

  return (
    <div className="container mx-auto px-16">
      {lab && (
        <>
          <h2 className="font-bold">{lab.name}</h2>
          <div className="flex flex-col items-center lg:flex-row gap-4">
            <img
              className="w-1/2 aspect-square object-cover"
              src={
                lab.labImages ? `${apiURL}/${lab.labImages[0]?.imageUrl}` : ""
              }
              alt="lab main image"
            />
            <p>{lab.description}</p>
          </div>

          <h3>تصاویر آزمایشگاه</h3>
          <div className="flex items-center">
            {lab.labImages?.map((image) => (
              <img
                className="h-60 object-cover aspect-square"
                key={image.imageUrl}
                src={`${apiURL}/${image.imageUrl}`}
                alt="lab image"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
