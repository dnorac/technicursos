import Courses from "@/components/courses";
import { loadCourses } from "@/services/courses";

export default async function Home() {
  const courses = await loadCourses();
  return (
    <div className="grid gap-4 grid-cols-(--grid-cursos) my-8 place-content-start card grid-popout">
      <Courses courses={courses} />
    </div>
  );
}
