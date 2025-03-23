import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string; chapter: string }>;
}

export default async function Page({ params }: Props) {
  const { slug, chapter } = await params;
  try {
    const { default: Post, frontmatter } = await import(
      `@/content/${slug}/${chapter}.mdx`
    );
    return (
      <>
        <h1>{frontmatter?.title ?? `Capítulo ${chapter}`}</h1>
        <Post />
      </>
    );
  } catch {
    notFound();
  }
}
