import { FetchResposne } from "@/lib/interfaces/fetch/FetchResponse";
import CourseBox from "./course-box";
import { getCourses } from "@/lib/actions/courses/coursesActions";
import { CoursesSearchParams } from "@/lib/interfaces/courses/CoursesSearchParams";
import { CourseViewModel } from "@/lib/interfaces/courses/CourseViewModel";

interface Props {
  searchParams: CoursesSearchParams;
}

export default async function CoursesList() {
  const {
    count,
    message,
    ok,
    res: courses,
    status,
  }: FetchResposne<CourseViewModel[]> = await getCourses();

  return (
    <ul className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
      {courses &&
        courses.map((course) => <CourseBox {...course} key={course.id} />)}
    </ul>
  );
}
