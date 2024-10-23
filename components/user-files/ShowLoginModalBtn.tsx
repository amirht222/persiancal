"use client";

import React from "react";

const ShowLoginModalBtn = () => {
  return (
    <button
      className="btn btn-primary text-white"
      onClick={() =>
        (
          document.getElementById("customer_login_modal") as HTMLDialogElement
        ).showModal()
      }
    >
      ورود مجدد
    </button>
  );
};

export default ShowLoginModalBtn;
