import { ReactNode } from "react";

import Link from "next/link";

export function ChapterList({ children }: { children: ReactNode }) {
  return (
    <ul className="divide-y divide-border mt-8 grid rounded-lg overflow-hidden">
      {children}
    </ul>
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
