import { readdir } from "node:fs/promises";
import path from "node:path";

export async function loadChapters(slug: string) {
  const chapterFiles = (
    await readdir(path.join(process.cwd(), "src", "content", slug))
  ).filter((ch) => ch !== "metadata.mdx");
  const chapterObjects = await Promise.all(
    chapterFiles.map((chapter) => import(`@/content/${slug}/${chapter}`))
  );
  const chapters = chapterObjects.map(
    (chapter) => chapter.frontmatter?.title ?? "Undefined chapter"
  );
  const metadata = await import(`@/content/${slug}/metadata.mdx`);
  return { chapters, metadata: metadata.frontmatter };
}
