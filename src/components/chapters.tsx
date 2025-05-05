import { ReactNode } from "react";

import Link from "next/link";

export function ChapterList({ children }: { children: ReactNode }) {
  return (
    <div className="border-t border-border p-8 md:p-16">
      <h2 className="leading-none font-bold text-3xl">Capítulos</h2>
      <ul className="divide-y divide-border mt-8 grid rounded-lg overflow-hidden">
        {children}
      </ul>
    </div>
  );
}

export function Chapter({
  children,
  course,
  id,
}: {
  children: string;
  course: string;
  id: number;
}) {
  return (
    <li className="grid">
      <Link
        href={`/cursos/${course}/capitulos/${id}`}
        className="p-4 bg-gray-100 dark:bg-neutral-900 hover:bg-gray-200 dark:hover:bg-gray-900 transition-colors duration-300 ease-out"
      >
        {children}
      </Link>
    </li>
  );
}
