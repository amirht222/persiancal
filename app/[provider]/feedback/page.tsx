import Image from "next/image";
import FeedbackImage from "@/public/images/feedback-image.png";
import FeedbackForm from "@/components/feedback/feedback-form";

export default function FeedbackPage() {
  return (
    <div className="container mx-auto px-12">
      <Image
        unoptimized
        className="mx-auto w-1/2 max-h-[400px] object-contain"
        src={FeedbackImage}
        alt="feedback image"
      />
      <p className="text-center">
        به منظور بهبود عملکرد شرکت لطفا نظر و پیشنهاد خود را برای ما ارسال کنید.
      </p>
      <FeedbackForm />
    </div>
  );
}
