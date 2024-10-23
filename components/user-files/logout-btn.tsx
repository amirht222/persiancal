"use client";

import { logout } from "@/lib/actions/auth/authActions";
import React from "react";

const LogoutButton = () => {
  return (
    <button
      onClick={() => {
        logout();
      }}
      className="btn btn-error text-white"
    >
      خروج
    </button>
  );
};

export default LogoutButton;
