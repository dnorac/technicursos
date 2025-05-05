import { loadCourses } from "@/services/courses";
import Link from "next/link";

export default async function CertificatesPage() {
  const courses = await loadCourses();
  return (
    <div className="grid-popout py-8">
      <h1 className="font-semibold text-3xl">Certificados</h1>
      <ul className="mt-4 grid gap-2 grid-cols-4">
        {courses.map(({ slug, key }) => (
          <li className="grid" key={slug}>
            <Link
              href={`/certificados/${slug}`}
              className="bg-gray-100 dark:bg-neutral-950 p-4 hover:outline hover:bg-transparent transition-colors"
            >
              {key}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
