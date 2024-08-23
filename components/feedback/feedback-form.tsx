"use client";

import { sendFeedback } from "@/lib/actions/feedbacks/feedbackActions";
import { FetchResposne } from "@/lib/interfaces/fetch/FetchResponse";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface FormData {
  senderName?: string;
  companyName?: string;
  email?: string;
  phoneNumber?: string;
  text?: string;
}

export default function FeedbackForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const submitHandler = async (data: FormData) => {
    const { message, ok, res, status }: FetchResposne<any> = await sendFeedback(
      { ...data }
    );
    if (ok) {
      router.push("/persia");
    } else {
      // setFormErrors({ ...formErrors, globalText: dictionary.errors[message!] });
    }
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit(submitHandler)}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
        <input
          {...register("senderName")}
          type="text"
          placeholder="نام و نام خانوادگی"
          className="input bg-[#F1F1F1]"
        />
        <input
          {...register("companyName")}
          type="text"
          placeholder="نام شرکت یا سازمان"
          className="input bg-[#F1F1F1]"
        />
        <input
          {...register("phoneNumber")}
          type="text"
          placeholder="شماره تماس"
          className="input bg-[#F1F1F1]"
        />
        <input
          {...register("email")}
          type="text"
          placeholder="ایمیل"
          className="input bg-[#F1F1F1]"
        />
      </div>
      <div className="grid grid-cols-1 mt-4">
        <textarea
          {...register("text")}
          className="textarea bg-[#F1F1F1]"
          placeholder="متن خود را بنویسید."
        ></textarea>
      </div>
      <div className="mt-6 flex justify-center">
        <button type="submit" className="btn btn-primary text-white px-8">
          ارسال
        </button>
      </div>
    </form>
  );
}
