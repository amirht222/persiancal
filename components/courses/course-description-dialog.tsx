interface Props {
  description: string;
}

export default function CourseDescriptionDialog({ description }: Props) {
  return (
    <dialog id="course_description_modal" className="modal">
      <div className="modal-box">
        <p className="py-4">{description}</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-primary text-white">بستن</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
