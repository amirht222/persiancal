import { ProviderViewModel } from "@/lib/interfaces/providers/ProviderViewModel";

interface Props {
  providerData: ProviderViewModel;
}

export default function DetailsDialog(props: Props) {
  return (
    <dialog id="provider_about_modal" className="modal">
      <div className="modal-box">
        <div
          className="py-4"
          dangerouslySetInnerHTML={{
            __html: (props.providerData as any).aboutUs,
          }}
        />
        <ul className="list-disc px-2">
          {props.providerData.providerActivities?.map((activity) => (
            <li key={activity.id}>{activity.text}</li>
          ))}
        </ul>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-primary text-white">بستن</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
