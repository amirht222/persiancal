"use client";

export default function ShowMoreButton() {
  return (
    <button
      onClick={() =>
        (
          document.getElementById("provider_about_modal") as HTMLDialogElement
        ).showModal()
      }
      className="btn btn-primary rounded-[10px] text-white mt-4 lg:mt-6"
    >
      جزییات بیشتر
    </button>
  );
}
