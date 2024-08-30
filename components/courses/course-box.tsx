import Image from "next/image";
import CourseImage from "@/public/images/course-image.png";
import { CourseViewModel } from "@/lib/interfaces/courses/CourseViewModel";
import ShowCourseDescriptionButton from "./show-desc-btn";
import CourseDescriptionDialog from "./course-description-dialog";

export default function CourseBox({
  title,
  description,
  duration,
}: CourseViewModel) {
  return (
    <li className="card bg-secondary">
      <figure>
        <Image src={CourseImage} alt="عکس دوره" />
      </figure>
      <div className="card-body items-center text-center p-4">
        <h4 className="card-title font-bold text-base">{title}</h4>
        <p>مدت دوره: {duration} ساعت</p>
        <div className="card-actions mt-4">
          {description && (
            <>
              <ShowCourseDescriptionButton />
              <CourseDescriptionDialog description={description} />
            </>
          )}
          <a href="tel:+07136245649">
            <button className="btn btn-primary text-white text-xl font-normal px-8">
              تماس
            </button>
          </a>
        </div>
      </div>
    </li>
  );
}
