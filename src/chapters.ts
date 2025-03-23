import { readdir } from "node:fs/promises";

export async function loadChapters(slug: string) {
  const chapterFiles = (await readdir(`./src/content/${slug}`)).filter(
    (ch) => ch !== "metadata.mdx"
  );
  const chapterObjects = await Promise.all(
    chapterFiles.map((chapter) => import(`@/content/${slug}/${chapter}`))
  );
  const chapters = chapterObjects.map(
    (chapter) => chapter.frontmatter?.title ?? "Undefined chapter"
  );
  const metadata = await import(`@/content/${slug}/metadata.mdx`);
  return { chapters, metadata: metadata.frontmatter };
}
