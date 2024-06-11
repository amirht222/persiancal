import Image from "next/image";
import CourseImage from "@/public/images/course-image.png";

export default function CourseBox() {
  return (
    <li className="card bg-secondary">
      <figure>
        <Image src={CourseImage} alt="عکس دوره" />
      </figure>
      <div className="card-body items-center text-center p-4">
        <h4 className="card-title font-bold text-base">دوره تستی</h4>
        <p>مدت دوره: 150 ساعت</p>
        <p className="text-[#6B6B6B]">تاریخ شروع: 27 دی 1403</p>
        <div className="card-actions mt-4">
          <button className="btn btn-primary text-white text-xl font-normal px-8 ">
            تماس
          </button>
        </div>
      </div>
    </li>
  );
}
