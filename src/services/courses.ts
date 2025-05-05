import { readdir } from "fs/promises";
import path from "path";

export async function loadCourses() {
  const courseFolders = await readdir(
    path.join(process.cwd(), "src", "content")
  );
  const results = await Promise.all(
    courseFolders.map((folder) => import(`@/content/${folder}/metadata.mdx`))
  );
  const courses = results
    .map((result) => result.frontmatter)
    .toSorted()
    .map((c, i) => ({
      ...c,
      number: i + 1,
      key: c.title,
      slug: courseFolders[i],
    }));
  return courses;
}

interface FrontmatterMetadata {
  frontmatter: {
    title: string;
    description: string;
    cover: string;
  };
}

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

  const metadata = (await import(
    `@/content/${slug}/metadata.mdx`
  )) as FrontmatterMetadata;

  return { chapters, metadata: metadata.frontmatter };
}
