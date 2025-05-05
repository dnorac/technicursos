import Link from "next/link";

interface Props {
  title: string;
  description: string;
  imageUrl?: string;
  slug: string;
  number: number;
}

export default function Card({
  imageUrl = "https://picsum.photos/400/300",
  slug,
  title,
  description,
  number,
}: Props) {
  return (
    <Link
      href={`/cursos/${slug}`}
      className="hover:bg-blue-50 active:!opacity-50 rounded-lg inline-grid overflow-clip border dark:border-neutral-800 dark:hover:bg-gray-900 border-neutral-200 card opacity-0"
    >
      <img
        src={imageUrl}
        alt=""
        width={400}
        height={300}
        className="aspect-video object-cover w-full"
      />
      <div className="p-6 grid gap-3">
        <h2 className="text-xl font-medium leading-none">
          {number}. {title}
        </h2>
        <p className="text-current/70">{description}</p>
      </div>
    </Link>
  );
}
