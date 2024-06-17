import CourseBox from "./course-box";

const courses = [
  {
    id: 0,
    title: "دوره کالیبراسیون",
    duration: 150,
    startDate: new Date(),
  },
  {
    id: 1,
    title: "دوره آشنایی با لوازم پزشکی",
    duration: 120,
    startDate: new Date(),
  },
  {
    id: 2,
    title: "دوره تستی",
    duration: 70,
    startDate: new Date(),
  },
];
// async function getCourses() {
//   const res = await fetch("http://localhost:3500/course/getList");
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

export default async function CoursesList() {
  // const data = await getCourses();
  // console.log(data);

  return (
    <ul className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
      {courses.map((course) => (
        <CourseBox key={course.id} />
      ))}
    </ul>
  );
}
