import { Play } from "lucide-react";
import Link from "next/link";
import { Badge } from "../badge/badge";

export default function Intro({
  coverImageUrl,
  title,
  description,
  lessons,
  slug,
}: {
  coverImageUrl: string;
  title: string;
  description: string;
  lessons: number;
  slug: string;
}) {
  return (
    <div className="grid md:grid-cols-2 group">
      <img
        src={coverImageUrl}
        alt=""
        width={400}
        height={300}
        className="w-full h-full aspect-video object-cover"
      />
      <div className="p-8 md:p-16 md:border-l border-border flex flex-col">
        <h1 className="font-bold text-4xl">{title}</h1>
        <p className="mt-4 md:text-xl opacity-80">{description}</p>
        <div className="grid sm:grid-cols-(--grid-badge) gap-4 mt-8">
          <Badge>{lessons} aulas</Badge>
          <Link
            href={`/cursos/${slug}/capitulos/1`}
            className="text-white flex gap-3 items-center justify-center button"
          >
            Iniciar
            <Play strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </div>
  );
}
