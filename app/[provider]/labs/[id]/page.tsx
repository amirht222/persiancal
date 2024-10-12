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

  return (
    <div className="container mx-auto px-16">
      {lab && (
        <>
          <h2 className="font-bold">نام آزمایشگاه: {lab.name}</h2>
          <h2 className="font-bold mt-4">توضیحات :</h2>
          {lab.description && (
            <div
              dangerouslySetInnerHTML={{
                __html: lab.description,
              }}
            />
          )}
          <h3 className="font-bold mt-6">تصاویر آزمایشگاه</h3>
          <div className="grid grid-cols-6 gap-6 justify-center mt-4">
            {lab.labImages?.map((image) => (
              <div key={image.imageUrl}>
                <img
                  className="h-60 object-cover aspect-square"
                  src={`${apiURL}/${image.imageUrl}`}
                  alt="lab image"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
