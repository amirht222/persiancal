export default function FeedbackForm() {
  return (
    <form className="mt-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
        <input
          type="text"
          placeholder="نام و نام خانوادگی"
          className="input bg-[#F1F1F1]"
        />
        <input
          type="text"
          placeholder="نام شرکت یا سازمان"
          className="input bg-[#F1F1F1]"
        />
        <input
          type="text"
          placeholder="شماره تماس"
          className="input bg-[#F1F1F1]"
        />
        <input type="text" placeholder="ایمیل" className="input bg-[#F1F1F1]" />
      </div>
      <div className="grid grid-cols-1 mt-4">
        <textarea
          className="textarea bg-[#F1F1F1]"
          placeholder="متن خود را بنویسید."
        ></textarea>
      </div>
      <div className="mt-6 flex justify-center">
        <button className="btn btn-primary text-white px-8">ارسال</button>
      </div>
    </form>
  );
}
