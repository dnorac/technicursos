import Image from "next/image";

import { loadChapters } from "@/chapters";
import { Badge } from "@/components/badge";
import { Chapter, ChapterList } from "@/components/chapters";
import { Play } from "lucide-react";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const { chapters, metadata } = await loadChapters(slug);

  return (
    <div className="border border-current/30 rounded-lg overflow-clip">
      <div className="grid md:grid-cols-2 group">
        <Image
          src={metadata.cover}
          alt=""
          width={400}
          height={300}
          className="w-full h-full aspect-video object-cover"
        />
        <div className="p-8 md:p-16 md:border-l border-current/30 flex flex-col">
          <h1 className="font-bold text-4xl">{metadata.title}</h1>
          <p className="mt-4 md:text-xl opacity-80">{metadata.description}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Badge>{chapters.length} aulas</Badge>
            <Link
              href={`/cursos/${slug}/capitulos/1`}
              className="dark:bg-current/20 dark:hover:bg-neutral-800 active:opacity-50 transition-colors font-medium tracking-wider duration-300 ease-out ps-6 pe-4 flex gap-3 uppercase text-sm items-center justify-center rounded-lg"
            >
              Iniciar
              <Play strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-current/30 p-8 md:p-16">
        <h2 className="leading-none font-bold text-3xl">Capítulos</h2>
        <ChapterList>
          {chapters.map((chapter, i) => (
            <Chapter course={slug} id={i + 1} key={chapter}>
              {chapter}
            </Chapter>
          ))}
        </ChapterList>
      </div>
    </div>
  );
}
