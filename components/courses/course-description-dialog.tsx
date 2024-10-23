interface Props {
  description?: string;
}

export default function CourseDescriptionDialog({ description }: Props) {
  return (
    <dialog id="course_description_modal" className="modal">
      <div className="modal-box">
        {description && (
          <div
            className="py-4"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        )}
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-primary text-white">بستن</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
