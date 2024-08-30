"use client";

import { sendFeedback } from "@/lib/actions/feedbacks/feedbackActions";
import { FetchResposne } from "@/lib/interfaces/fetch/FetchResponse";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  senderName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  text: string;
}

const FeedbackForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      senderName: "",
      companyName: "",
      email: "",
      phoneNumber: "",
      text: "",
    },
  });

  const submitHandler = async (data: FormData) => {
    setIsLoading(true);
    setFeedbackMessage(null);

    try {
      const { ok }: FetchResposne<any> = await sendFeedback(data);

      if (ok) {
        setFeedbackMessage("پیام با موفقیت ارسال شد!");
        reset();
      } else {
        setFeedbackMessage("خطایی رخ داده. لطفا مجددا تلاش کنید");
      }
    } catch {
      setFeedbackMessage("خطایی رخ داده. لطفا مجددا تلاش کنید");
    } finally {
      setTimeout(() => setFeedbackMessage(null), 3000);
      setIsLoading(false);
    }
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit(submitHandler)}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <InputField
          id="senderName"
          placeholder="نام و نام خانوادگی"
          register={register}
          validation={{ required: "نام و نام خانوادگی الزامی است" }}
          error={errors.senderName}
        />
        <InputField
          id="companyName"
          placeholder="نام شرکت یا سازمان"
          register={register}
          validation={{ required: "نام شرکت یا سازمان الزامی است" }}
          error={errors.companyName}
        />
        <InputField
          id="phoneNumber"
          placeholder="شماره تماس"
          register={register}
          validation={{ required: "شماره تماس الزامی است" }}
          error={errors.phoneNumber}
        />
        <InputField
          id="email"
          placeholder="ایمیل"
          register={register}
          validation={{
            required: "ایمیل الزامی است",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "ایمیل وارد شده معتبر نیست",
            },
          }}
          error={errors.email}
        />
      </div>
      <div className="grid grid-cols-1 mt-4">
        <textarea
          {...register("text", { required: "متن پیام الزامی است" })}
          className="textarea bg-[#F1F1F1] w-full"
          placeholder="متن خود را بنویسید."
        ></textarea>
        {errors.text && (
          <span className="text-red-500 text-sm">{errors.text.message}</span>
        )}
      </div>
      <div className="mt-6 flex justify-center">
        <button
          type="submit"
          className={`btn btn-primary text-white px-8`}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "ارسال"
          )}
        </button>
      </div>
      {feedbackMessage && (
        <div className="toast toast-top toast-start">
          <div
            className={`alert ${
              feedbackMessage.includes("موفقیت")
                ? "alert-success"
                : "alert-error"
            }`}
          >
            <span className="text-white">{feedbackMessage}</span>
          </div>
        </div>
      )}
    </form>
  );
};

interface InputFieldProps {
  id: string;
  placeholder: string;
  register: any;
  validation: any;
  error: any;
}

const InputField = ({
  id,
  placeholder,
  register,
  validation,
  error,
}: InputFieldProps) => (
  <div>
    <input
      {...register(id, validation)}
      type="text"
      placeholder={placeholder}
      className="input bg-[#F1F1F1] w-full"
    />
    {error && <span className="text-red-500 text-sm">{error.message}</span>}
  </div>
);

export default FeedbackForm;
