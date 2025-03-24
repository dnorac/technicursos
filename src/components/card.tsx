import Image from "next/image";
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
      className="border border-gray-300 rounded-lg overflow-clip dark:border-current/20 hover:border-current"
    >
      <Image
        src={imageUrl}
        alt=""
        width={400}
        height={300}
        className="w-full aspect-video object-cover"
      />
      <div className="p-4 grid gap-3">
        <h2 className="text-lg font-medium leading-none">
          {number}. {title}
        </h2>
        <p className="opacity-50 text-sm">{description}</p>
      </div>
    </Link>
  );
}
