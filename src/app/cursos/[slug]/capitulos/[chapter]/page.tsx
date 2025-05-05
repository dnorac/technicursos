import SyntaxHighlightedPost from "@/components/syntax-highlight";
import type { Page } from "@/types";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: Page<{ slug: string; chapter: string }>) {
  const { slug, chapter } = await params;
  try {
    const { default: Post, frontmatter } = await import(
      `@/content/${slug}/${chapter}.mdx`
    );
    return (
      <>
        <h1>{frontmatter?.title ?? `Capítulo ${chapter}`}</h1>
        <SyntaxHighlightedPost post={<Post />} />
      </>
    );
  } catch {
    notFound();
  }
}
