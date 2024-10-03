import CoursesList from "@/components/courses/courses-list";
import { CoursesSearchParams } from "@/lib/interfaces/courses/CoursesSearchParams";

interface Props {
  searchParams: CoursesSearchParams;
}

export default function Coursespage({ searchParams }: Props) {
  return (
    <div className="container mx-auto px-16">
      <h2 className="font-bold">دوره ها</h2>
      <CoursesList searchParams={searchParams} />
    </div>
  );
}
