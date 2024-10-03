"use client";


export default function CustomerServiceBtn() {
  return (
    <button
      onClick={() =>
        (
          document.getElementById("customer_login_modal") as HTMLDialogElement
        ).showModal()
      }
    >
      خدمات مشتری
    </button>
  );
}
