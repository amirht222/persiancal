"use client";

export default function ShowCourseDescriptionButton() {
  return (
    <button
      onClick={() =>
        (
          document.getElementById(
            "course_description_modal"
          ) as HTMLDialogElement
        ).showModal()
      }
      className="btn btn-primary text-white text-xl font-normal px-8"
    >
      مشاهده توضیحات
    </button>
  );
}
