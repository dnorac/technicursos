import Image from "next/image";
import { ReactNode } from "react";

import { loadChapters } from "@/chapters";
import { cn } from "@/utils";
import Link from "next/link";

interface Props {
  children: ReactNode;
  params: Promise<{
    slug: string;
    chapter: string;
  }>;
}

export default async function CourseLayout({ children, params }: Props) {
  const { slug, chapter: currentChapter } = await params;
  const { chapters, metadata } = await loadChapters(slug);
  return (
    <div className="grid gap-4 grid-cols-chapter">
      <div></div>
      <div>
        <div className="border rounded-lg border-current/30 p-4 prose prose-neutral dark:prose-invert">
          {children}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 sticky bottom-0 py-4 bg-gradient-to-b from-transparent to-white dark:to-black">
          {currentChapter !== "1" ? (
            <Link
              className="p-4 inline-block bg-gray-100 dark:bg-neutral-950 active:opacity-60 hover:bg-neutral-900 text-center rounded-lg"
              href={`/cursos/${slug}/capitulos/${Number(currentChapter) - 1}`}
            >
              Aula anterior
            </Link>
          ) : (
            <span></span>
          )}
          {Number(currentChapter) !== chapters.length ? (
            <Link
              className="p-4 inline-block bg-gray-100 dark:bg-gray-900 active:opacity-60 hover:bg-gray-800 text-center rounded-lg"
              href={`/cursos/${slug}/capitulos/${Number(currentChapter) + 1}`}
            >
              Próxima aula
            </Link>
          ) : null}
        </div>
      </div>
      <aside className="border border-current/30 rounded-lg overflow-clip sticky top-4">
        <Image
          src={metadata.cover}
          alt=""
          width={300}
          height={300}
          className="w-full aspect-video object-cover"
        />
        <div className="flex flex-col divide-y divide-white/30">
          {chapters.map((chapter, i) => {
            const url = `/cursos/${slug}/capitulos/${i + 1}`;
            return (
              <Link
                href={url}
                key={url}
                className={cn(
                  "p-4 block hover:text-blue-300",
                  parseInt(currentChapter) === i + 1 &&
                    "text-blue-800 dark:text-blue-300 bg-gray-100 dark:bg-gray-950"
                )}
              >
                {chapter}
              </Link>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
