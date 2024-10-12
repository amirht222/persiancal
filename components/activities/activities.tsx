import { Activity } from "@/lib/interfaces/providers/ProviderViewModel";
const apiURL: string = process.env.API_URL!;

interface Props {
  activities?: Activity[];
}

export default function ProviderActivities(props: Props) {
  return (
    <section className="my-8 lg:my-6">
      <h3 className="font-bold text-xl lg:text-3xl">فعالیت شرکت</h3>
      <ul className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2 [&>*]:flex [&>*]:justify-between [&>*]:items-center [&>*]:gap-3 [&>*:nth-child(odd)]:flex-row-reverse [&>*:nth-child(even)]:flex-row lg:[&>*:nth-child(odd)]:flex-row *:">
        {props.activities?.map((activity) => (
          <li
            key={activity.id}
            className="rounded-[20px] border border-[#CCCCCC] py-6 px-4 text-[10px] lg:text-[16px]"
          >
            <p>{activity.text}</p>
            {activity.imagePath ? (
              <img
                className="w-16 h-16 lg:w-24 lg:h-24 object-cover"
                src={
                  activity.imagePath
                    ? `${apiURL}/${activity.imagePath}`
                    : undefined
                }
                alt="xray icon"
              />
            ) : (
              <div className="rounded-xl w-16 h-16 lg:w-24 lg:h-24 border flex justify-center items-center">
                بدون عکس
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
