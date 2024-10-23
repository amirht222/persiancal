import PersiaLogo from "@/public/images/logo.png";

import { CourseViewModel } from "@/lib/interfaces/courses/CourseViewModel";
import CourseDescriptionDialog from "./course-description-dialog";
import ShowCourseDescriptionButton from "./show-desc-btn";
const apiURL: string = process.env.API_URL!;

export default function CourseBox({
  title,
  description,
  duration,
  attachmentPath,
  imagePath,
}: CourseViewModel) {
  return (
    <li className="card bg-secondary">
      <figure>
        <img
          className={`w-full h-56 ${
            imagePath ? "object-cover" : "object-contain"
          }`}
          src={imagePath ? `${apiURL}/${imagePath}` : PersiaLogo.src}
          alt="عکس دوره"
        />
      </figure>
      <div className="card-body items-center text-center p-4">
        <h4 className="card-title font-bold text-base">{title}</h4>
        <p>مدت دوره: {duration} ساعت</p>
        <p>پیوست: {attachmentPath ? "دارد" : "ندارد"}</p>
        <div className="card-actions mt-4">
          {description && (
            <>
              <ShowCourseDescriptionButton />
              <CourseDescriptionDialog description={description} />
            </>
          )}
          {/* <a href="tel:+07136245649">
            <button className="btn btn-primary text-white text-xl font-normal px-8">
              تماس
            </button>
          </a> */}
          {attachmentPath && (
            <a
              className="btn btn-primary text-white"
              download={`${apiURL}/${attachmentPath}`}
              href={`${apiURL}/${attachmentPath}`}
            >
              دانلود پیوست
            </a>
          )}
        </div>
      </div>
    </li>
  );
}
