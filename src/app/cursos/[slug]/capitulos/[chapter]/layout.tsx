import { ReactNode } from "react";

import CourseViewAside from "@/components/course-view/aside";
import { loadChapters } from "@/services/courses";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
    <div className="grid gap-4 lg:grid-cols-(--grid-chapters) lg:items-start lg:!col-[breakout] lg:px-8 my-8 grid-cols-subgrid">
      <div className="col-[left-panel] lg:sticky top-20">
        <Link href={`/cursos/${slug}`} className="flex gap-3 p-3 items-center">
          <ArrowLeft /> Voltar
        </Link>
      </div>
      <div className="col-[content]">
        <div className="border rounded-lg border-border p-4 sm:p-8 prose max-w-none prose-neutral dark:prose-invert prose-pre:p-0 prose-code:!p-6">
          {children}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 sticky bottom-0 py-4 bg-gradient-to-b from-transparent to-white dark:to-black">
          {currentChapter !== "1" ? (
            <Link
              className="p-4 button text-white flex items-center gap-3 hover:bg-blue-700/70"
              href={`/cursos/${slug}/capitulos/${Number(currentChapter) - 1}`}
            >
              <ArrowLeft /> Aula anterior
            </Link>
          ) : (
            <span></span>
          )}
          {Number(currentChapter) !== chapters.length ? (
            <Link
              className="p-4 button text-white flex items-center gap-3 justify-end hover:bg-blue-700/70"
              href={`/cursos/${slug}/capitulos/${Number(currentChapter) + 1}`}
            >
              Próxima aula <ArrowRight />
            </Link>
          ) : null}
        </div>
      </div>
      <CourseViewAside
        title={metadata.title}
        coverImageUrl={metadata.cover}
        slug={slug}
        chapters={chapters}
        currentChapter={parseInt(currentChapter)}
      />
    </div>
  );
}
