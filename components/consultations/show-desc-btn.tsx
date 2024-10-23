"use client";

export default function ShowConsultationDescriptionButton() {
  return (
    <button
      onClick={() =>
        (
          document.getElementById(
            "consultation_description_modal"
          ) as HTMLDialogElement
        ).showModal()
      }
      className="btn btn-primary text-white text-xl font-normal px-8"
    >
      مشاهده توضیحات
    </button>
  );
}
