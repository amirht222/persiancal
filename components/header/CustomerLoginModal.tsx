"use client";

import { login } from "@/lib/actions/auth/authActions";
import { useForm } from "react-hook-form";
import CryptoJS from "crypto-js";
import { useRouter } from "next/navigation";

type Inputs = {
  username: string;
  password: string;
};

export default function CustomerLoginModal() {
  const { handleSubmit, register } = useForm<Inputs>();
  const router = useRouter();

  const submitHandler = async (data: Inputs) => {
    try {
      const res = await login({
        username: data.username,
        password: CryptoJS.SHA256(data.password).toString(),
      });
      if (res.ok) {
        router.push("/persia/user-files");
      }
    } catch (error) {}
  };

  return (
    <dialog id="customer_login_modal" className="modal">
      <div className="modal-box">
        <form noValidate onSubmit={handleSubmit(submitHandler)}>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              {...register("username")}
              type="text"
              className="grow"
              placeholder="نام کاربری"
            />
          </label>
          <label className="mt-4 input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              {...register("password")}
              type="password"
              className="grow"
              placeholder="رمز عبور"
            />
          </label>
          <div className="modal-action">
            <button type="submit" className="btn btn-primary text-white">
              ورود
            </button>
          </div>
        </form>
        <form method="dialog">
          <button className="btn btn-error text-white mr-2">بستن</button>
        </form>
      </div>
    </dialog>
  );
}
